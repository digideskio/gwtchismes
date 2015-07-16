_JSChismes is the exported version of the GWTChismes collection._

_The library has been developed using java and exported to javascript using gwt-compiler and [gwt-exporter](http://code.google.com/p/gwt-exporter/) library._



# Goals #

The set of widgets can be used directly in html pages without the need of knowing anything about gwt and java.
The generated javascript code is minimized, optimized and obfuscated and works fine in Gwt supported browsers.

# Setup instructions #

  1. Download last version of the library: jschismes-x.x.x.jar and uncompress it in a folder.
  1. Include either the obfuscated or the readable version of the javascript library in your html file.  You can use relative paths or full qualified ones because the library has been compiled using cross-site linker. The library takes care loading dynamically the needed images and css.
  1. Define the function jscOnLoad() wich is called once the library is loaded, and create the widgets using native javascript in your page.
```
<html>
 <head>
  <script language="javascript" src="http://gwtchismes.googlecode.com/svn/trunk/website/jslib/jschismes.JsChismes.nocache.js"></script>
  <!--
   <script language="javascript" src="http://gwtchismes.googlecode.com/svn/trunk/website/jslib/jschismes.JsChismesPretty.nocache.js"></script>
  -->
 </head>
 <body>
  <script>
      var calendar;
      function jscOnLoad() {
        calendar = new jsc.DatePicker({
          dialog: true,
          className: "GWTCDatePicker-custom",
          buttons: "flat",
          onSelect: function(data) {
            alert("Selected: " + jsc.Utils.formatDate(jsc.Const.LONG_FORMAT, data.selected) );
          }
        });
      }
  </script>
  <button onClick="calendar.show()">Click Here</button>
 </body>
</html>
```

# Library API #


## Const ##
_These are the constants used in the package._
  * Public static constants
```
jsc.Const.SOUTH //put elements in panels at south possition
jsc.Const.WEST //put elements in panels at west possition
jsc.Const.NUMERIC_FORMAT //Internationalized pattern for numeric format. Default with language=en -> M/d/yyy
jsc.Const.NORTH //put elements in panels at north possition
jsc.Const.SHORT_FORMAT //Internationalized pattern for short format. Default with language=en -> M/d/yy
jsc.Const.LONG_FORMAT //Internationalized pattern for long format. Default with language=en -> MMMM d, yyyy
jsc.Const.EAST //put elements in panels at east possition
```

## Utils ##
_Utility methods
>_
  * Static methods
```

/* Camelizes css names: margin-left -> marginLeft */
var string = jsc.Utils.camelize(s);

/* Returns a formated and internationalizated date representation.

format parameter has these symbols:
Year:   yy(09) yyyy(2009)
Month:  MM(01) MMM(Jan) MMM(January)
Day:    dd(01)
WeekDay E(M) EE(Mo) EEE(Mon) EEEE(Monday) */
var string = jsc.Utils.formatDate(format, date);

/* Parses a string representation of a date and returns a date object */
var date = jsc.Utils.parseDate(format, dateStr);
```

## Date Picker ##
_A customizable Date Picker.
>_
  * Constructor
```
var datepicker = new jsc.DatePicker ({
   numberOfColums: 3,  // Number of months per row when displaying multiple months
   monthRange: 12,  // Number of months to show in the months menu selector
   stepMonths: 1,  // Number of months to step back/forward
   lettersInWeekDayHeaders: 3,  // Set desired number of digits for day names in week headers, 0 means default for this language
   containerId: null,  // Id of the element where the widget will be inserted
   roundedBox: false,  // show the element inside a decorated rounded container
   autoHide: true,  // hide the dialog if the user click outside
   animate: true,  // animate popup when is shown or hidden.
   glassPanel: true,  // show a semitransparent glasspanel that covers the rest of element
   buttons: "rounded",  // Buttons style, available options are: rounded, flat, standard
   minDate: "+0d",  // The earliest selectable date
   maxDate: "+1y",  // The latest selectable date
   defaultDate: 0,  // actual date.
   onSelect: new function(data){},  // Define a callback function when a date is selected
   className: "",  // Add an optional classname to the container
   showWeekNumbers: false,  // Show week numbers
   weekSelection: false,  // Set week numbers clickable in order to select entire weeks
   regional: {     // hash with the set of key/values to internationalize the widget
        helpText = "?", // Display text for close button
        closeText = "x", // Display text for close button
        currentText = "-", // Display text for current month button
        prevText = "<", // Display text for previous month button
        nextText = ">", // Display text for next month button
        prevYearText = "<<", // Display text for previous year button
        nextYearText = ">>", // Display text for next year button
        helpTitle = null, // Title for help button when the mouse is over
        closeTitle = null, // Title for close button when the mouse is over
        currentTitle = null, // Title for current month button when the mouse is over
        prevTitle = null, // Title for previous month button when the mouse is over
        nextTitle = null, // Title for next month button when the mouse is over
        prevYearTitle = null, // Title for previous year button when the mouse is over
        nextYearTitle = null // Title for next year button when the mouse is over
   },
   buttonsLayout: "?mx;p<->n",  // define which buttons to use and where to place them in datepickers. 
                                //  Each action is represented with a character:  
                                //  ';' panel-delimiter (There are 8 panels availables, 3 at the top and 3 at the bottom of the date-picker, 1 at the right side of the headers and another at the left side). 
                                //  '?' help, 'x' close, '_' separator, '-' today,
                                //  '>' next-month, '<' prev-month, 'n' next-year, 'p' prev-year
   numberOfMonths: 1  // Number of months to show at a time
});
```
  * Instance methods
```

/*  */
datepicker.onValueChange();

/* Specify the selected date   */
datepicker.setSelected(date);

/* Show the modal dialog containing the data-picker centered in the page */
datepicker.show();

/* Specify the JavaScript function which will be called when the user selects a date
The function have to define the parameter data used to return the datepicker information  */
datepicker.addSelectListener(c);

/* Returns a JavaScript hash structure with this information:
data.selected // The user selected date
data.minimal  // The minimal date allowed to select
data.maximal  // The maximal date allowed to select   */
var javascriptobject = datepicker.data();

/* Show the modal dialog containing the data-picker beside the  especified element. */
datepicker.show(elem);

/* Returns the selected date */
var date = datepicker.getSelected();

/* Hide the modal dialog containing the data-picker. */
datepicker.hide();
```

## Interval Selector ##
_An Interval selector.
>_
  * Constructor
```
var intervalselector = new jsc.IntervalSelector ({
   numberOfMonths: 1,  // Number of months to show at a time
   numberOfColums: 3,  // Number of months per row when displaying multiple months
   monthRange: 12,  // Number of months to show in the months menu selector
   stepMonths: 1,  // Number of months to step back/forward
   buttonsLayout: "?mx;p<->n",  // define which buttons to use and where to place them in datepickers. 
                                //  Each action is represented with a character:  
                                //  ';' panel-delimiter (There are 8 panels availables, 3 at the top and 3 at the bottom of the date-picker, 1 at the right side of the headers and another at the left side). 
                                //  '?' help, 'x' close, '_' separator, '-' today,
                                //  '>' next-month, '<' prev-month, 'n' next-year, 'p' prev-year
   minDate: "+0d",  // The earliest selectable date
   maxDate: "+1y",  // The latest selectable date
   maxDays: 0,  // Limit for the number of days in an inteval.
   className: "",  // Add an optional classname to the container
   onSelect: new function(data){},  // Define a callback function when a date is selected
   regional: {     // hash with the set of key/values to internationalize the widget
        helpText = "?", // Display text for close button
        closeText = "x", // Display text for close button
        currentText = "-", // Display text for current month button
        prevText = "<", // Display text for previous month button
        nextText = ">", // Display text for next month button
        prevYearText = "<<", // Display text for previous year button
        nextYearText = ">>", // Display text for next year button
        helpTitle = null, // Title for help button when the mouse is over
        closeTitle = null, // Title for close button when the mouse is over
        currentTitle = null, // Title for current month button when the mouse is over
        prevTitle = null, // Title for previous month button when the mouse is over
        nextTitle = null, // Title for next month button when the mouse is over
        prevYearTitle = null, // Title for previous year button when the mouse is over
        nextYearTitle = null // Title for next year button when the mouse is over
   },
   containerId: null  // Id of the element where the widget will be inserted
});
```
  * Instance methods
```

/*  */
intervalselector.onValueChange();

/* Returns the final date of the selected interval */
var date = intervalselector.getEnd();

/* Returns a JavaScript hash structure with this information:
data.init     // The start date that has selected the userhj
data.end      // The end date selected by the user
data.nights   // Number of nights in the interval
data.days     // Number of days in the interval (identical to nights)
data.maximal  // The maximal date allowed to select  
data.minimal  // The minimal date allowed to select
data.maxdays  // The maximal of days(nights) allowed in the interval   */
var javascriptobject = intervalselector.data();

/* Specify the JavaScript function which will be called when the user selects a date o changes the number of days
The function have to define the parameter data used to return the datepicker information  */
intervalselector.addSelectListener(c);

/* Returns the initial date of the selected interval */
var date = intervalselector.getInit();

/* Returns the number of nights in the interval */
var int = intervalselector.getNights();
```

## Week Selector ##
_An Week selector.
>_
  * Constructor
```
var weekselector = new jsc.WeekSelector ({
   numberOfMonths: 1,  // Number of months to show at a time
   numberOfColums: 3,  // Number of months per row when displaying multiple months
   monthRange: 12,  // Number of months to show in the months menu selector
   stepMonths: 1,  // Number of months to step back/forward
   buttonsLayout: "?mx;p<->n",  // define which buttons to use and where to place them in datepickers. 
                                //  Each action is represented with a character:  
                                //  ';' panel-delimiter (There are 8 panels availables, 3 at the top and 3 at the bottom of the date-picker, 1 at the right side of the headers and another at the left side). 
                                //  '?' help, 'x' close, '_' separator, '-' today,
                                //  '>' next-month, '<' prev-month, 'n' next-year, 'p' prev-year
   minDate: "+0d",  // The earliest selectable date
   maxDate: "+1y",  // The latest selectable date
   className: "",  // Add an optional classname to the container
   onSelect: new function(data){},  // Define a callback function when a date is selected
   regional: {     // hash with the set of key/values to internationalize the widget
        helpText = "?", // Display text for close button
        closeText = "x", // Display text for close button
        currentText = "-", // Display text for current month button
        prevText = "<", // Display text for previous month button
        nextText = ">", // Display text for next month button
        prevYearText = "<<", // Display text for previous year button
        nextYearText = ">>", // Display text for next year button
        fromText = "From", // Text of the from label, referencing the start day of the selected week
        toText = "To", // Text of the to label, referencing the final day of the selected week
        selectWeekText = "Select a week", // Text of the week selector title
        helpTitle = null, // Title for help button when the mouse is over
        closeTitle = null, // Title for close button when the mouse is over
        currentTitle = null, // Title for current month button when the mouse is over
        prevTitle = null, // Title for previous month button when the mouse is over
        nextTitle = null, // Title for next month button when the mouse is over
        prevYearTitle = null, // Title for previous year button when the mouse is over
        nextYearTitle = null // Title for next year button when the mouse is over
   },
   containerId: null  // Id of the element where the widget will be inserted
});
```
  * Instance methods
```

/*  */
weekselector.onValueChange();

/* Returns the final date of the selected interval */
var date = weekselector.getEnd();

/* Returns a JavaScript hash structure with this information:
data.init     // The start date that has selected the userhj
data.end      // The end date selected by the user
data.maximal  // The maximal date allowed to select  
data.minimal  // The minimal date allowed to select
data.week  // The selected week number */
var javascriptobject = weekselector.data();

/* Specify the JavaScript function which will be called when the user selects a date o changes the number of days
The function have to define the parameter data used to return the datepicker information  */
weekselector.addSelectListener(c);

/* Returns the initial date of the selected interval */
var date = weekselector.getInit();

/* Returns the number of nights in the interval */
var int = weekselector.getNights();
```

## Progress ##
_Progress bar that has a time calculation based on the data provided when is updated.
>_
  * Constructor
```
var progress = new jsc.Progress ({
   timeRemaining: false,  // show time remaining
   text: null,  // Text in html elements
   numbers: true,  // show numeric information of the progress
   dialog: true,  // the widget is shown in a popup dialog
   elements: 20,  // number of bars to show in the progress bar
   containerId: null,  // Id of the element where the widget will be inserted
   hoursMsg: "Time remaining: {0} Hours",  // Set the message used to format the time remaining text below the progres bar in hours
   minutesMsg: "Time remaining: {0} Minutes",  // Set the message used to format the time remaining text below the progres bar in minutes
   secondsMsg: "Time remaining: {0} Seconds",  // Set the message used to format the time remaining text below the progres bar in seconds.
   percentMsg: "{0}%",  // Set the message used to format the progress in percent units.
   totalMsg: "{0}% {1}/{2} ",  // Set the message to show when the process has finished
   className: ""  // Add an optional classname to the container
});
```
  * Instance methods
```

/* Set the progress. Remaining time and percent is calculated automatically 
based in these values and the time period between calls to this method. */
progress.setProgress(done, total);

/* Set the description text. */
progress.setText(text);

/* Show the modal dialog containing the progress when it is configured as a dialog */
progress.show();

/* Return the container element, useful for moving it in the DOM */
var element = progress.getElement();

/* Hide the modal dialog */
progress.hide();

/* Show the modal dialog containing the progress bar, and configures a timer to automatically update the progress. */
progress.show(seconds);
```

## Wait ##
_A modal box informing the user that the application is working and avoiding user interaction with the page.
>_
  * Constructor
```
var wait = new jsc.Wait ({
   text: null,  // Text in html elements
   className: "",  // Add an optional classname to the container
   image: null  // image url in buttons
});
```
  * Instance methods
```

/* hide the wait dialog */
wait.hide();

/* Show the modal dialog containing the wait dialog, and hide it when the number of seconds is reached.
A value of 0 means show it untill hide() method is called */
wait.show(seconds);
```

## Alert ##
_A modal Dialog
>_
  * Constructor
```
var alert = new jsc.Alert ({
   roundedBox: false,  // show the element inside a decorated rounded container
   glassPanel: true,  // show a semitransparent glasspanel that covers the rest of element
   animate: true,  // animate popup when is shown or hidden.
   buttonOk: true,  // show ok button in alert widget
   className: "",  // Add an optional classname to the container
   onClose: null  // callback function which will be executed when the element is closed
});
```
  * Instance methods
```

/* hide the alert box */
alert.hide();

/* show the modal dialog containing the dialog, with the message provided. */
alert.alert(msg);

/* Show the modal dialog containing the alert dialog, and hide it when the number of seconds is reached.
A value of 0 means show it untill hide() method is called */
alert.show(seconds);

/* Specify the JavaScript function which will be called when the user clicks on the OK button
The function have to define a parameter with the element clicked  */
alert.addListener(c);
```

## Box ##
_A decorated with rounded corners panel
>_
  * Constructor
```
var box = new jsc.Box ({
   roundedBoxType: "flat",  // Style for the rounded corners, options are flat, blue, grey
   className: "",  // Add an optional classname to the container
   title: null,  // title text in rounded boxes
   text: null,  // Text in html elements
   html: null,  // html content
   containerId: null,  // Id of the element where the widget will be inserted
   :   // put elements in panels at north possition
});
```
  * Instance methods
```

/* Add a new element to the panel */
box.add(object);

/* Remove all child elements from the panel */
box.clear();

/* Add a new element to the panel, in the specified direction (NORTH, SOUTH, EAST, WEST) */
box.add(object, direction);
```

## Button ##
_A Button which can be rendered enterelly using html elements or can use the native browser buttons.
>_
  * Constructor
```
var button = new jsc.Button ({
   type: 1,  // type
   text: null,  // Text in html elements
   onClick: null,  // callback function which will be executed when the element is clicked
   containerId: null  // Id of the element where the widget will be inserted
});
```
  * Instance methods
```

/* Return the container element, useful for moving it in the DOM */
var element = button.getElement();

/* Specify the JavaScript function that will be called when the user clicks on the button
The function have to define a parameter with the element clicked  */
button.addListener(c);
```

## Popup ##
_Popup dialog that can use rounded corners.
>_
  * Constructor
```
var popup = new jsc.Popup ({
   roundedBox: false,  // show the element inside a decorated rounded container
   glassPanel: true,  // show a semitransparent glasspanel that covers the rest of element
   animate: true,  // animate popup when is shown or hidden.
   className: "",  // Add an optional classname to the container
   text: null,  // Text in html elements
   :   // put elements in panels at north possition
});
```
  * Instance methods
```

/* Add a new element to the panel */
popup.add(object);

/* Remove all child elements from the panel */
popup.clear();

/* Add a new element to the panel, in the specified direction (NORTH, SOUTH, EAST, WEST) */
popup.add(object, direction);

/* Hide the dialog */
popup.hide();

/* Show the modal dialog containing the dialog, and hide it when the number of seconds is reached.
A value of 0 means show it untill hide() method is called */
popup.show(seconds);
```

## Editor ##
_A Rich Editor
>_
  * Constructor
```
var editor = new jsc.Editor ({
   className: "",  // Add an optional classname to the container
   html: null,  // html content
   containerId: null  // Id of the element where the widget will be inserted
});
```
  * Instance methods
```

/* Put the editor in read-only or writing mode */
editor.setEnabled(b);

/* Get the content of the rich area
@param html */
editor.html(html);

/* Set the html content of the rich area */
var string = editor.html();
```
# Sample Code #
You can view this example  [here](http://gwtchismes.googlecode.com/svn/trunk/website/jslib/JsChismes.html)
```
      
      function jscOnLoad() {
          
        var wait = new jsc.Wait({
          text: "Espere por favor ..."
        });

        var popup = new jsc.Popup({
          animate: true,
          roundedBox: "blue",
          text: "Be cheerful while you are alive."
        });

        var alrt = new jsc.Alert({
        });
        
        var alrt2 = new jsc.Alert({
          roundedBox: "flat",
           onClose: function(elem) {
             popup.show(2);
           }
        });

        var box = new jsc.Box({
          title: "Advice:",
          text: "<b>Your present plans will be successful.</b>",
          html: "<i>Your mode of life will be changed for the better because of new developments.</i>",
          containerId: "boxContainer"
        });

        var embeded = new jsc.DatePicker({
            containerId: "calendarContainer", 
            className: "GWTCDatePicker-custom",
            buttons: "flat",
            numberOfMonths: 1,
            showWeekNumbers: true,
            buttonsLayout: "? ;;;;;;p<;n>",
            onSelect: function(data) {
              alrt.alert("Selected: " + jsc.Utils.formatDate(jsc.Const.LONG_FORMAT, data.selected) );
            }
        });

        var calendar = new jsc.DatePicker({
          numberOfMonths: 3,
          buttonsLayout: "  x;p< - >n",
          dialog: true,
          glassPanel: true,
          minDate: "-3m",
          maxDate: "+12m",
          lettersInWeekDayHeaders: 2,
          regional: {
            helpText: "Help",
            helpTitle: "Show help dialog",
            closeText: "Close",
            closeTitle: "Close dialog",
            todayText: "Today",
            todayTitle: "Display the actual month",
            nextMonthTitle: "Jump to the next month",
            prevMonthTitle: "Jump to previous month",
            nextYearTitle: "Jump to the next year",
            prevYearTitle: "Jump to the previos year",
            captionText: "Click on the desired date"
          },
          onSelect: function(data) {
            alrt.alert("Selected: " + jsc.Utils.formatDate(jsc.Const.LONG_FORMAT, data.selected) );
            calendar.hide();
          }
        });

        var interval= new jsc.IntervalSelector({
          type: 4,
          numberOfMonths: 2,
          buttonsLayout: "< - >",
          minDate: "-3d",
          maxDate: "3m",
          maxDays: 30,
          containerId: "intervalContainer",
          regional: {
            helpText: "Help",
            helpTitle: "Show help dialog",
            closeText: "Close",
            closeTitle: "Close dialog",
            todayText: "Today",
            todayTitle: "Display the actual month",
            nextMonthTitle: "Jump to the next month",
            prevMonthTitle: "Jump to previous month",
            nextYearTitle: "Jump to the next year",
            prevYearTitle: "Jump to the previos year",
            calendarCheckinCaption: "Select your checkin Date"
          },
          onSelect: function(data){
            alrt.alert( "\nFrom: " + jsc.Utils.formatDate(jsc.Const.SHORT_FORMAT, data.init) 
                      + "\nTo: " + jsc.Utils.formatDate(jsc.Const.SHORT_FORMAT, data.end) 
                      + "\nNights: " + data.nights);
          }
        });

        var week= new jsc.WeekSelector({
          numberOfMonths: 2,
          maxDate: "3y",
          containerId: "weekContainer",
          regional: {
            closeText: "Close",
            closeTitle: "Close dialog",
            todayText: "Today",
            todayTitle: "Display the actual month",
            nextMonthTitle: "Jump to the next month",
            prevMonthTitle: "Jump to previous month",
            nextYearTitle: "Jump to the next year",
            prevYearTitle: "Jump to the previos year",
            calendarCheckinCaption: "Click over any day of the desired week"
          },
          onSelect: function(data){
            alrt.alert( "You have selected the week number: " + data.week 
                      + "\nwhich starts on: " + jsc.Utils.formatDate(jsc.Const.LONG_FORMAT, data.init) 
                      + "\nand ends on: " + jsc.Utils.formatDate(jsc.Const.LONG_FORMAT, data.end));
          }
        });

        progress = new jsc.Progress({
          dialog: true
        });

        new jsc.Button({
          text: "show a Wait widget (3 seconds)",
          containerId: "button1",
          onClick: function(elem){
            wait.show(3);
          }
        });
        new jsc.Button({
          text: "Show an animated popup box (3 seconds)",
          containerId: "button2",
          onClick: function(elem){
            popup.show(3);
          }
        });
        new jsc.Button({
          text: "Show an alert dialog",
          containerId: "button3",
          onClick: function(elem){
            alrt2.alert("You will pay for your sins.  If you have already paid, please disregard this message.");
          }
        });
        new jsc.Button({
           text: "Show a progress bar  (6 seconds)",
           containerId: "button4",
           onClick: function(elem){
             progress.show(6);
           }
        });
        new jsc.Button({
          text: "Show a three months date picker",
          containerId: "button5",
          onClick: function(elem){
            calendar.show();
          }
        });
        var colorpicker = new jsc.ColorPicker({
          onSelect: function(color){
            alert(color);
          }
        });
        var mbut = new jsc.Button({
            text: "Show a colorPicker",
            containerId: "button7",
            onClick: function(elem){
               colorpicker.show(mbut.getElement());
            }
          });
        new jsc.Editor({
            containerId: "editor",
            html: "Write here <b> any thing </b> you want"
        });
     }

```
**Author:** _Manolo Carrasco Moñino_

**Date:** _Wed Feb 17 17:37:14 CET 2010_

This documentation has been generated automatically parsing comments in java files, if you realise any error, please report it