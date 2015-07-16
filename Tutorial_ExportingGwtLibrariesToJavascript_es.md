Exportando librerias desarrolladas en GWT a javascript.

  * [Versión en Inglés de este artículo](http://code.google.com/p/gwtchismes/wiki/Tutorial_ExportingGwtLibrariesToJavascript_en)


# Introducción #
Hay numerosas ventajas en usar GWT para desarrollar código javascript de calidad, especialmente que el programador no tiene que ser un experto en javascript, conocer particularidades de cada navegador, empaquetamiento de javascript, ofuscación, dependencias entre librerías, etc.

Comparando, la relación que existe entre GWT y javascript, es la misma que entre el lenguaje C y código ensamblador. ¿Para qué voy a programar en un lenguaje de bajo nivel con características distintas para cada plataforma si se puede trabajar en un lenguaje de alto nivel, y dejar al compilador que corrija errores, compile, enlace, optimice, ofusque, y genere el código mas apropiado para cada plataforma?.
Además, al igual que en C se puede usar ensamblador 'inline', en GWT podemos introducir código javascript en nuestro código java utilizando [JSNI](http://code.google.com/webtoolkit/doc/1.6/DevGuideCodingBasics.html#DevGuideJavaScriptNativeInterface).

Y finalmente, también existen ventajas en publicar tu librería tanto en gwt como en javascript. Principalmente porque así se podrán aprovechar desarrolladores que utilicen otros lenguages y frameworks, y que no conozcan nada de java y gwt.

# Detalles #
  * ¿Porqué el código que genera GWT no es usable desde javascript nativo?. Básicamente porque en el proceso de compilado,  GWT renombra clases, variables, métodos, descarta todo el código innecesario, genera nuevas clases, métodos, etc. En pocas palabras, el código js producido se comporta justamente como queremos, pero no se corresponde con el diseño que tenemos en nuestra aplicación java, ademas es distinto para cada navegador y es ilegible.

  * Entonces, ¿cómo se pueden hacer llamadas desde javascript a código generado por GWT?. Se consigue guardando referencias a nuestro código javascript en el objeto 'window' del navegador. Para ello, en el código javascript del método nativo que guarda esta referencia, debemos utilizar etiquetas especiales que el compilador actualiza con el nombre final de nuestro método compilado.
```
 package jschismes.client;
 public class HelloClass implements EntryPoint{
    String prefix = "Hello: ";
    public void onModuleLoad() {
        // Al cargar la aplicacion, exportamos el metodo
        exportHelloMethod(this);
    }
    
    // Metodo que queremos usar desde javascript
    public String helloMethod(String name) {
        return prefix + " " + name;
    }
    
    // Solo se usa para crear una referencia a nuestra funcion en el navegador
    private native void exportHelloMethod(HelloClass instance) /*-{
      $wnd.hello = function(param1, param2) {
         return instance.@jschismes.client.HelloClass::helloMethod(Ljava/lang/String;) (name);
      };
    }-*/;
 }
```
> Codigo HTML
```
  <script language='javascript'>
    window.hello("Manolo");
  </script>
```

  * ¿Qué podemos hacer para simplificar este proceso?. Sencillo, usar la librería [gwt-exporter](http://code.google.com/p/gwt-exporter/). Con ella y haciendo anotaciones en nuestro código java, el compilador es el que genera todo el código para publicar nuestros atributos en el objeto 'window'.
```
 package jschismes.client;
 @Export
 public class HelloClass implements Exportable {
    String prefix = "Hello: ";
    public String helloMethod(String name) {
        return prefix + " " + name;
    }
 }
```
> Código HTML
```
  <script language='javascript'>
    var hello = new jschismes.client.HelloClass();
    hello.helloMethod("Manuel");
  </script>
```

# Usando gwt-exporter #
  1. Sólo las clases anotadas como `@Export` y que implementan `Exportable` serán procesadas, y sólo sus métodos públicos estarán disponibles. Por defecto gwt-exporter pondrá nuestras clases en el objeto 'window' bajo el 'name-space' del paquete de nuestra aplicación, en nuestro caso seria `window.jschismes.client`, pero se puede modificar usando la anotación `@ExportPackage`.
```
package jschismes.client;
@Export
@ExportPackage("jsc")
public class DatePicker extends GWTCDatePickerAbstract implements Exportable {
  public void show(){
  }
}
```
```
  <script language='javascript'>
     var picker = new jsc.DatePicker();
     picker.show();
  </script>
```
  1. Las clases heredadas, y sus métodos públicos no se exportan a no ser que se anoten específicamente. Aun así será necesario que implementen el interfaz 'Exportable'. La anotación `@Export` permite publicar el método con otro nombre.
```
public class GWTCDatePickerAbstract implements Exportable {
  @Export("foo")
  public void initialise(){
  }
}
```
```
  <script language='javascript'>
     var picker = new jsc.DatePicker();
     picker.show();
     picker.foo();
  </script>
```
  1. En el punto de entrada (`EntryPoint`) de nuestra aplicación será necesario decir a GWT las clases exportar, podemos esportarlas todas o seleccionar algunas. Las clases exportables que se usen en la aplicación como argumentos o retornos de otras se exportarán automáticamente.
```
public class JsChismes implements EntryPoint {
  public void onModuleLoad() {
    GWT.create(DatePicker.class);
  }
}
```
```
public class JsChismes implements EntryPoint {
  public void onModuleLoad() {
    ExporterUtil.exportAll();
  }
}
```
  1. También en este punto de entrada, y debido a que nuestra librería tardará algún tiempo en estar disponible, es conveniente hacer una llamada a un método javascript que la use, cuando la librería esté cargada.
```
public class JsChismes implements EntryPoint {
  public void onModuleLoad() {
    onLoadImpl();
  }
  private native void onLoadImpl() /*-{
    if ($wnd.jscOnLoad && typeof $wnd.jscOnLoad == 'function') $wnd.jscOnLoad();
  }-*/;
}
```
```
  <script language='javascript'>
    function jscOnLoad() {
        var picker = new jsc.DatePicker();
        picker.show();
    }
  </script>
```
  1. Los argumentos y retornos de las funcions deben utilizar tipos primitivos u Objetos que se hayan anotado como `@Export`.
```
@Export
public class DatePicker extends GWTCDatePickerAbstract implements Exportable {
  public String show(boolean a1, char a2, int a3, long a4, double a5, myClass a6){
  }
}
```
```
@Export
public class myClass implements Exportable {
}
```
  1. Para pasar funciones javascript como argumentos a nuestros métodos, hay que utilizar la anotacion `@ExportClosure` y crear un 'interface' con los métodos públicos que queramos exportar. Estos métodos reciben los mismos argumentos y tipos que los de la función javascript.
```
@Export
@ExportPackage("jsc")
@ExportClosure
public interface JsClosure extends Exportable {
  public void execute(String par1, String par2);
}
```
```
@Export
@ExportPackage("jsc")
public class DatePicker implements Exportable {
  public executeJsClosure(JsClosure closure){
     closure.execute("Hello", "Friend");
  }
```
```
  <script language='javascript'>
     var picker = new jsc.DatePicker();
     picker.executeJsClosure(function(arg1, arg2) {
        alert(arg1 + "," + arg2);
     });
  </script>
```
  1. Hay objetos que pueden estar implementados tanto en javascript como en GWT, para ellos será necesario desarrollar 'JSNI bridges'. Un claro ejemplo es el objeto `Date` que tiene distinta implementación aunque el comportamiento sea similar.
```
@Export
@ExportPackage("jsc")
public class DatePicker implements Exportable {
  Date currentDate = new Date();
  public JavaScriptObject getCurrentDate(){
     return timeToJsObject(currentDate.getTime());
  }
  public void setCurrentDate(JavaScriptObject date){
     currentDate = new Date(jsObjectToTime(date));
  }

  private static native JavaScriptObject timeToJsObject(double time) /*-{
    return new Date(time);
  }-*/;
  private static native double jsObjectToTime(JavaScriptObject d) /*-{
    return (d && d.getTime) ? d.getTime(): 0;
  }-*/;
}
```
```
  <script language='javascript'>
     var picker = new jsc.DatePicker();
     picker.setCurrentDate(new Date());
     alert(picker.getCurrentDate());
  </script>
```
  1. Los constructores de objetos en javascript generalmente aceptan un objeto de tipo 'javascript properties'. Por tanto será interesante que nuestras clases acepten un objeto 'javascript' y ser capaz de extraer la configuración que el usuario quiere. Esto se consigue creando una clase que sirva de puente entre estos atributos javascript y GWT.
```
@Export
@ExportPackage("jsc")
public class DatePicker implements Exportable {
  String caption = "Select a day";
  int type = 0;
  public DatePicker(JavaScriptObject prop) {
    JsProperties jsProp = new JsProperties(prop);
    this.type = jsProp.getInt("type");
    this.caption = jsProp.get("caption");
  });
}
```
```
  <script language='javascript'>
     var picker = new jsc.DatePicker({
        type: 1,
        caption: "Seleccione fecha"
     });
  </script>
```
```
public class JsProperties {
  JavaScriptObject prop = null;
  JsProperties(JavaScriptObject properties) {
    this.prop = properties;
  }
  public String get(String name) {
    return getImpl(this.prop, name, "");
  }
  public int getInt(String name) {
    String val = get(name);
    return val == null ? null : Integer.valueOf(val);
  }
  private static native String getImpl(JavaScriptObject p, String name) /*-{
    return p[name] ? p[name].toString() : p[name] === false ? "false" : null;
  }-*/;
}
```

# Configuración del módulo GWT #

> Es conveniente generar un nuevo módulo para exportar nuestra librería. De hecho es mejor no modificar nuestra librería original gwt sino usarla en nuestro nuevo módulo, de esta manera la libreria gwt publicada no dependerá de gwt-exporter. Los pasos para hacer esto son:

  1. Crear un nuevo módulo e importar nuestra librería y la librería 'gwt-exporter' en el fichero `.gwt.xml`, y establecer la variable `export` a `true`.
```
<module>
  <inherits name="com.google.code.p.gwtchismes.GWTChismes"/>
  <inherits name="org.timepedia.exporter.Exporter"/>
  <set-property name="export" value="yes"/>
</module>
```
  1. Crear tantas clases java como objetos queramos exportar a javascript. Estas clases serán las que implementen el interfaz Exportable, las que usen las anotaciones de 'gwt-exporter', y extenderán las clases originales, publicando solo los métodos deseados.
```
@Export
public class Alert extends GWTCAlert implements Exportable {
  private JsProperties jsProp;
  public Alert(JavaScriptObject prop) {
    super();
    this.jsProp = new JsProperties(prop);
    if (jsProp.defined("className"))
      super.setStyleName(jsProp.get("className"));
  }
  public void show(int seconds) {
    super.show(seconds);
  }
  public void alert(String msg) {
    super.alert(msg);
  }
  public void hide() {
    super.hide();
  }
}
```
  1. Crear un punto de entrada en nuestro modulo que notifique a GWT qué clases debe exportar, y ejecute una funcion javascript nativa al cargar la librería.
```
<module>
  [...]
  <entry-point class="jschismes.client.JsChismes"/>
</module>
```
```
public class JsChismes implements EntryPoint {
  public void onModuleLoad() {
    ((Exporter) GWT.create(Alert.class)).export();
    onLoadImpl();
  }
  private native void onLoadImpl() /*-{
    if ($wnd.jscOnLoad && typeof $wnd.jscOnLoad == 'function') $wnd.jscOnLoad();
  }-*/;

```
  1. Compilar nuestro modulo utilizando el linker 'cross-site' de esta manera la libreria javascript podrá residir en un dominio diferente que el de la aplicacion, por ejemplo usar CDN's.
```
<module>
  [...]
  <add-linker name="xs"/>
</module>
```

Nota: las versiones 1.6.x y 1.7.0 de momento no soportan el 'linker xs' en modo 'hosted', por lo que tendreis que comentar esta linea cuando useis este modo, o crear otro fichero gwt.xml para desarrollo.

# Documentión de la librería javascript #

A diferencia de java, donde es fácil adivinar qué clases, métodos y argumentos usar al utilizar una libreria en un IDE, en javascript es necesario tener una pequeña documentación que nos indique su uso.

Dicho esto, no olvides crear y mantener la documentación de tu librería javascript.

Desafortunadamente, no hay existía ninguna utilidad para generar documentación automáticamente, por lo que yo creé mis propias convenciones para anotar el código java. Yo utilizo un [perl script casero](http://code.google.com/p/gwtupload/source/browse/trunk/GWTUpload/gjslib.pl) para extraer esta documentación.

En las últimas versiones hay una clase que es capaz de producir paginas html a partir de comentarios javadoc echo un vistazo a este [anuncio](http://timepedia.blogspot.com/2009/01/gwt-exporter-now-generates-javascript.html)


# Referencias y ejemplos #
  * Aparte de este artículo no existe mucha mas información aparte del [ejemplo](http://code.google.com/p/gwt-exporter/source/browse/#svn/trunk/samples/src/exporterdemo/client) para aprender a usar la libreria.
  * [Chronoscope](http://code.google.com/p/gwt-chronoscope/) fué el primer proyecto que usó la librería, de hecho esta gwt-exporter existe gracias a las investigaciones realizadas al desarrollar chronoscope.
  * La librería [Gwtchismes](http://code.google.com/p/gwtchismes) ha sido la primera librería que he exportado usando esta técnica. La librería producida se llama Jschismes, y aqui puedes ver la [documentación](http://code.google.com/p/gwtchismes/wiki/JsChismes_Documentation), [código fuente](http://code.google.com/p/gwtchismes/source/browse/#svn/trunk/GWTChismes/src/jschismes/client) y un [ejemplo](http://gwtchismes.googlecode.com/svn/trunk/website/jslib/JsChismes.html).
  * [Gwtupload](http://code.google.com/p/gwtupload/) es otra librería que he exportado usando esta técnica. Puedes echar un vistazo al [ejemplo](http://gwtupload.alcala.org/gupld/jsupload.JsUpload/JsUpload.html), la [documentación](http://code.google.com/p/gwtupload/wiki/JsUpload_Documentation) y el [código](http://code.google.com/p/gwtupload/source/browse/#svn/trunk/GWTUpload/src/jsupload/client).


---

_©2009 [Manolo Carrasco Moñino](http://manolocarrasco.blogspot.com/)_