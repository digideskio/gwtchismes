function com_google_code_p_gwtcsample_GWTCSample(){var l='',bc='\n--><\/script>',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',vb='"<script src=\\"',n='"><\/script>',p='#',ac=');',r='/',rb='file_1.cache.js',sb='file_2.cache.js',qb='file_3.cache.js',fc='<script id="',xb='<script><!--\n',A='=',q='?',pb='file_6.cache.js',C='Bad handler "',ob='file_7.cache.js',kb='Cross-site hosted mode not yet implemented. See issue ',tb='DOMContentLoaded',o='SCRIPT',wb='\\"><\/scr" + "ipt>"',ec='__gwt_marker_com.google.code.p.gwtcsample.GWTCSample',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',m='com.google.code.p.gwtcsample.GWTCSample',z='content',Fb='document.write(',dc='end',Bb='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',Db='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',hb='gecko',ib='gecko1_8',yb='gwt.hybrid',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',lb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',gb='ie6',t='img',ub='loadExternalRefs',v='meta',Ab='moduleName:"com.google.code.p.gwtcsample.GWTCSample", subSystem:"startup",',cc='moduleStartup',fb='msie',w='name',bb='opera',eb='safari',mb='selectingPermutation',x='startup',Cb='type: "end"});',Eb='type: "moduleRequested"});',jb='unknown',ab='user.agent',db='webkit',zb='window.__gwtStatsEvent && window.__gwtStatsEvent({';var hc=window,k=document,gc=hc.__gwtStatsEvent?function(a){return hc.__gwtStatsEvent(a)}:null,qc,mc,lc=l,tc={},Cc=[],zc=[],kc=[],wc,yc;gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!hc.__gwt_stylesLoaded){hc.__gwt_stylesLoaded={}}if(!hc.__gwt_scriptsLoaded){hc.__gwt_scriptsLoaded={}}function rc(){try{return hc.external&&(hc.external.gwtOnLoad&&hc.location.search.indexOf(yb)==-1)}catch(a){return false}}
function sc(){if(qc&&mc){qc(wc,m,lc);gc&&gc({moduleName:m,subSystem:x,evtGroup:cc,millis:(new Date()).getTime(),type:dc})}}
function pc(){var j,h=ec,i;k.write(fc+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){lc=f(j.src)}if(lc==l){var e=k.getElementsByTagName(s);if(e.length>0){lc=e[e.length-1].href}else{lc=f(k.location.href)}}else if(lc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=lc+u;lc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function xc(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}tc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{yc=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{wc=eval(b)}catch(a){alert(C+b+F)}}}}}}
function Bc(d,e){var a=kc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function oc(d){var e=zc[d](),b=Cc[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(yc){yc(d,a,e)}throw null}
zc[ab]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(bb)!=-1){return bb}else if(d.indexOf(db)!=-1){return eb}else if(d.indexOf(fb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return gb}}}else if(d.indexOf(hb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return ib}return hb}return jb};Cc[ab]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};com_google_code_p_gwtcsample_GWTCSample.onScriptLoad=function(a){com_google_code_p_gwtcsample_GWTCSample=null;qc=a;sc()};if(rc()){alert(kb+lb);return}pc();xc();gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:mb});var Ac;try{Bc([bb],ob);Bc([eb],pb);Bc([ib],qb);Bc([hb],rb);Bc([gb],sb);Ac=kc[oc(ab)]}catch(a){return}var vc;function uc(){if(!mc){mc=true;sc();if(k.removeEventListener){k.removeEventListener(tb,uc,false)}if(vc){clearInterval(vc)}}}
if(k.addEventListener){k.addEventListener(tb,function(){uc()},false)}var vc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){uc()}},50);gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:dc});gc&&gc({moduleName:m,subSystem:x,evtGroup:ub,millis:(new Date()).getTime(),type:nb});var nc=vb+lc+Ac+wb;k.write(xb+zb+Ab+Bb+Cb+zb+Ab+Db+Eb+Fb+nc+ac+bc)}
com_google_code_p_gwtcsample_GWTCSample.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i()}finally{g&&g(a)}};d.onbeforeunload=function(a){var c,b;try{c=e()}finally{b=f&&f(a)}if(c!=null){return c}if(b!=null){return b}};d.onunload=function(a){try{j()}finally{h&&h(a);d.onresize=null;d.onbeforeunload=null;d.onunload=null}}};com_google_code_p_gwtcsample_GWTCSample();