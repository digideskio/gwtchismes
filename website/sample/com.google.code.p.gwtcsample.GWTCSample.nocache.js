function com_google_code_p_gwtcsample_GWTCSample(){var l='',cd='\n--><\/script>',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',wc='"<script src=\\"',n='"><\/script>',p='#',bb='&',bd=');',r='/',ac='file_1.cache.js',ec='file_2.cache.js',Db='file_3.cache.js',xb='file_4.cache.js',cc='file_5.cache.js',Eb='file_6.cache.js',kc='file_7.cache.js',fc='file_8.cache.js',jc='file_9.cache.js',lc='file_10.cache.js',gc='file_11.cache.js',hc='file_12.cache.js',bc='file_13.cache.js',Fb='file_14.cache.js',Cb='file_15.cache.js',wb='file_16.cache.js',dd='<script id="',yc='<script><!--\n',A='=',q='?',Ab='file_17.cache.js',C='Bad handler "',ic='file_18.cache.js',qb='Cross-site hosted mode not yet implemented. See issue ',Bb='file_19.cache.js',uc='DOMContentLoaded',ub='file_20.cache.js',mc='GWTC-compressed.css',tc='GWTCSample.css',o='SCRIPT',fb='Unexpected exception in locale detection, using default: ',xc='\\"><\/scr" + "ipt>"',eb='_',zc='__gwt_marker_com.google.code.p.gwtcsample.GWTCSample',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',m='com.google.code.p.gwtcsample.GWTCSample',z='content',db='default',ad='document.write(',zb='en',oc='end',tb='es',Cc='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',Ec='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',mb='gecko',ob='gecko1_8',yb='gwt.hybrid',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',sc='head',rc='href',rb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',lb='ie6',t='img',vb='ja',nc='link',vc='loadExternalRefs',ab='locale',v='meta',Bc='moduleName:"com.google.code.p.gwtcsample.GWTCSample", subSystem:"startup",',dc='moduleStartup',kb='msie',w='name',hb='opera',pc='rel',jb='safari',sb='selectingPermutation',x='startup',qc='stylesheet',Dc='type: "end"});',Fc='type: "moduleRequested"});',pb='unknown',gb='user.agent',ib='webkit',Ac='window.__gwtStatsEvent && window.__gwtStatsEvent({';var fd=window,k=document,ed=fd.__gwtStatsEvent?function(a){return fd.__gwtStatsEvent(a)}:null,od,kd,jd=l,rd={},Ad=[],xd=[],id=[],ud,wd;ed&&ed({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!fd.__gwt_stylesLoaded){fd.__gwt_stylesLoaded={}}if(!fd.__gwt_scriptsLoaded){fd.__gwt_scriptsLoaded={}}function pd(){try{return fd.external&&(fd.external.gwtOnLoad&&fd.location.search.indexOf(yb)==-1)}catch(a){return false}}
function qd(){if(od&&kd){od(ud,m,jd);ed&&ed({moduleName:m,subSystem:x,evtGroup:dc,millis:(new Date()).getTime(),type:oc})}}
function nd(){var j,h=zc,i;k.write(dd+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){jd=f(j.src)}if(jd==l){var e=k.getElementsByTagName(s);if(e.length>0){jd=e[e.length-1].href}else{jd=f(k.location.href)}}else if(jd.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=jd+u;jd=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function vd(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}rd[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{wd=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{ud=eval(b)}catch(a){alert(C+b+F)}}}}}}
function hd(a,b){return b in Ad[a]}
function gd(a){var b=rd[a];return b==null?null:b}
function zd(d,e){var a=id;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function md(d){var e=xd[d](),b=Ad[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(wd){wd(d,a,e)}throw null}
xd[ab]=function(){try{var g;if(g==null){var b=location.search;var h=b.indexOf(ab);if(h>=0){var e=b.substring(h);var c=e.indexOf(A)+1;var d=e.indexOf(bb);if(d==-1){d=e.length}g=e.substring(c,d)}}if(g==null){g=gd(ab)}if(g==null){return db}while(!hd(ab,g)){var f=g.lastIndexOf(eb);if(f==-1){g=db;break}else{g=g.substring(0,f)}}return g}catch(a){alert(fb+a);return db}};Ad[ab]={'default':0,en:1,es:2,ja:3};xd[gb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(hb)!=-1){return hb}else if(d.indexOf(ib)!=-1){return jb}else if(d.indexOf(kb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return lb}}}else if(d.indexOf(mb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return ob}return mb}return pb};Ad[gb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};com_google_code_p_gwtcsample_GWTCSample.onScriptLoad=function(a){com_google_code_p_gwtcsample_GWTCSample=null;od=a;qd()};if(pd()){alert(qb+rb);return}nd();vd();ed&&ed({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:sb});var yd;try{zd([tb,lb],ub);zd([vb,lb],wb);zd([db,lb],xb);zd([zb,lb],Ab);zd([vb,jb],Bb);zd([db,hb],Cb);zd([zb,hb],Db);zd([vb,hb],Eb);zd([db,jb],Fb);zd([zb,jb],ac);zd([db,ob],bc);zd([zb,ob],cc);zd([db,mb],ec);zd([zb,mb],fc);zd([vb,ob],gc);zd([vb,mb],hc);zd([tb,hb],ic);zd([tb,jb],jc);zd([tb,ob],kc);zd([tb,mb],lc);yd=id[md(ab)][md(gb)]}catch(a){return}var td;function sd(){if(!kd){kd=true;if(!__gwt_stylesLoaded[mc]){var a=k.createElement(nc);__gwt_stylesLoaded[mc]=a;a.setAttribute(pc,qc);a.setAttribute(rc,jd+mc);k.getElementsByTagName(sc)[0].appendChild(a)}if(!__gwt_stylesLoaded[tc]){var a=k.createElement(nc);__gwt_stylesLoaded[tc]=a;a.setAttribute(pc,qc);a.setAttribute(rc,jd+tc);k.getElementsByTagName(sc)[0].appendChild(a)}qd();if(k.removeEventListener){k.removeEventListener(uc,sd,false)}if(td){clearInterval(td)}}}
if(k.addEventListener){k.addEventListener(uc,function(){sd()},false)}var td=setInterval(function(){if(/loaded|complete/.test(k.readyState)){sd()}},50);ed&&ed({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:oc});ed&&ed({moduleName:m,subSystem:x,evtGroup:vc,millis:(new Date()).getTime(),type:nb});var ld=wc+jd+yd+xc;k.write(yc+Ac+Bc+Cc+Dc+Ac+Bc+Ec+Fc+ad+ld+bd+cd)}
com_google_code_p_gwtcsample_GWTCSample.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i()}finally{g&&g(a)}};d.onbeforeunload=function(a){var c,b;try{c=e()}finally{b=f&&f(a)}if(c!=null){return c}if(b!=null){return b}};d.onunload=function(a){try{j()}finally{h&&h(a);d.onresize=null;d.onbeforeunload=null;d.onunload=null}}};com_google_code_p_gwtcsample_GWTCSample();