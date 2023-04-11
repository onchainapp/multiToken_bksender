/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1002:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},function(e,b){function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var l=r(1003),f=r(1007),h=r(198),d=r(1008),y=r(514),v=c(r(280)),m=new RegExp(/^bytes([0-9]*)$/),w=new RegExp(/^(u?int)([0-9]*)$/),N=new RegExp(/^(.*)\[([0-9]*)\]$/);t.defaultCoerceFunc=function(e,t){var r=e.match(w);return r&&parseInt(r[2])<=48?t.toNumber():t};var E=new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),_=new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");function A(e){return e.match(/^uint($|[^1-9])/)?e="uint256"+e.substring(4):e.match(/^int($|[^1-9])/)&&(e="int256"+e.substring(3)),e}function x(param,e){function t(i){throw new Error('unexpected character "'+param[i]+'" at position '+i+' in "'+param+'"')}for(var r={type:"",name:"",state:{allowType:!0}},n=r,i=0;i<param.length;i++){var o=param[i];switch(o){case"(":n.state.allowParams||t(i),n.state.allowType=!1,n.type=A(n.type),n.components=[{type:"",name:"",parent:n,state:{allowType:!0}}],n=n.components[0];break;case")":delete n.state,e&&"indexed"===n.name&&(n.indexed=!0,n.name=""),n.type=A(n.type);var c=n;(n=n.parent)||t(i),delete c.parent,n.state.allowParams=!1,n.state.allowName=!0,n.state.allowArray=!0;break;case",":delete n.state,e&&"indexed"===n.name&&(n.indexed=!0,n.name=""),n.type=A(n.type);var l={type:"",name:"",parent:n.parent,state:{allowType:!0}};n.parent.components.push(l),delete n.parent,n=l;break;case" ":n.state.allowType&&""!==n.type&&(n.type=A(n.type),delete n.state.allowType,n.state.allowName=!0,n.state.allowParams=!0),n.state.allowName&&""!==n.name&&(e&&"indexed"===n.name?(n.indexed=!0,n.name=""):n.state.allowName=!1);break;case"[":n.state.allowArray||t(i),n.type+=o,n.state.allowArray=!1,n.state.allowName=!1,n.state.readArray=!0;break;case"]":n.state.readArray||t(i),n.type+=o,n.state.readArray=!1,n.state.allowArray=!0,n.state.allowName=!0;break;default:n.state.allowType?(n.type+=o,n.state.allowParams=!0,n.state.allowArray=!0):n.state.allowName?(n.name+=o,delete n.state.allowArray):n.state.readArray?n.type+=o:t(i)}}if(n.parent)throw new Error("unexpected eof");return delete r.state,e&&"indexed"===n.name&&(n.indexed=!0,n.name=""),r.type=A(r.type),r}function I(e){return H(t.defaultCoerceFunc,e).type}t.parseParamType=function(e){return x(e,!0)},t.formatParamType=I,t.formatSignature=function(e){return e.name+"("+e.inputs.map((function(i){return I(i)})).join(",")+")"},t.parseSignature=function(e){if("string"==typeof e)return"event "===(e=(e=e.replace(/\(/g," (").replace(/\)/g,") ").replace(/\s+/g," ")).trim()).substring(0,6)?function(e){var t={anonymous:!1,inputs:[],name:"",type:"event"},r=e.match(E);if(!r)throw new Error("invalid event: "+e);if(t.name=r[1].trim(),Z(r[2]).forEach((function(param){(param=x(param,!0)).indexed=!!param.indexed,t.inputs.push(param)})),r[3].split(" ").forEach((function(e){switch(e){case"anonymous":t.anonymous=!0;break;case"":break;default:console.log("unknown modifier: "+e)}})),t.name&&!t.name.match(_))throw new Error('invalid identifier: "'+t.name+'"');return t}(e.substring(6).trim()):("function "===e.substring(0,9)&&(e=e.substring(9)),function(e){var t={constant:!1,inputs:[],name:"",outputs:[],payable:!1,stateMutability:null,type:"function"},r=e.split(" returns "),n=r[0].match(E);if(!n)throw new Error("invalid signature");if(t.name=n[1].trim(),!t.name.match(_))throw new Error('invalid identifier: "'+n[1]+'"');if(Z(n[2]).forEach((function(param){t.inputs.push(x(param))})),n[3].split(" ").forEach((function(e){switch(e){case"constant":t.constant=!0;break;case"payable":t.payable=!0;break;case"pure":t.constant=!0,t.stateMutability="pure";break;case"view":t.constant=!0,t.stateMutability="view";break;case"":break;default:console.log("unknown modifier: "+e)}})),r.length>1){var o=r[1].match(E);if(""!=o[1].trim()||""!=o[3].trim())throw new Error("unexpected tokens");Z(o[2]).forEach((function(param){t.outputs.push(x(param))}))}return t}(e.trim()));throw new Error("unknown signature")};var T=function(e,t,r,n,o){this.coerceFunc=e,this.name=t,this.type=r,this.localName=n,this.dynamic=o},M=function(e){function t(t){var r=e.call(this,t.coerceFunc,t.name,t.type,void 0,t.dynamic)||this;return y.defineReadOnly(r,"coder",t),r}return o(t,e),t.prototype.encode=function(e){return this.coder.encode(e)},t.prototype.decode=function(data,e){return this.coder.decode(data,e)},t}(T),U=function(e){function t(t,r){return e.call(this,t,"null","",r,!1)||this}return o(t,e),t.prototype.encode=function(e){return h.arrayify([])},t.prototype.decode=function(data,e){if(e>data.length)throw new Error("invalid null");return{consumed:0,value:this.coerceFunc("null",void 0)}},t}(T),R=function(e){function t(t,r,n,o){var c=this,l=(n?"int":"uint")+8*r;return(c=e.call(this,t,l,l,o,!1)||this).size=r,c.signed=n,c}return o(t,e),t.prototype.encode=function(e){try{var t=f.bigNumberify(e);return t=t.toTwos(8*this.size).maskn(8*this.size),this.signed&&(t=t.fromTwos(8*this.size).toTwos(256)),h.padZeros(h.arrayify(t),32)}catch(t){v.throwError("invalid number value",v.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:e})}return null},t.prototype.decode=function(data,e){data.length<e+32&&v.throwError("insufficient data for "+this.name+" type",v.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:h.hexlify(data.slice(e,e+32))});var t=32-this.size,r=f.bigNumberify(data.slice(e+t,e+32));return r=this.signed?r.fromTwos(8*this.size):r.maskn(8*this.size),{consumed:32,value:this.coerceFunc(this.name,r)}},t}(T),S=new R((function(e,t){return t}),32,!1,"none"),O=function(e){function t(t,r){return e.call(this,t,"bool","bool",r,!1)||this}return o(t,e),t.prototype.encode=function(e){return S.encode(e?1:0)},t.prototype.decode=function(data,e){try{var t=S.decode(data,e)}catch(e){throw"insufficient data for uint256 type"===e.reason&&v.throwError("insufficient data for boolean type",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"boolean",value:e.value}),e}return{consumed:t.consumed,value:this.coerceFunc("bool",!t.value.isZero())}},t}(T),C=function(e){function t(t,r,n){var o=this,c="bytes"+r;return(o=e.call(this,t,c,c,n,!1)||this).length=r,o}return o(t,e),t.prototype.encode=function(e){var t=new Uint8Array(32);try{var data=h.arrayify(e);if(data.length>32)throw new Error;t.set(data)}catch(t){v.throwError("invalid "+this.name+" value",v.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:t.value||e})}return t},t.prototype.decode=function(data,e){return data.length<e+32&&v.throwError("insufficient data for "+name+" type",v.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:h.hexlify(data.slice(e,e+32))}),{consumed:32,value:this.coerceFunc(this.name,h.hexlify(data.slice(e,e+this.length)))}},t}(T),k=function(e){function t(t,r){return e.call(this,t,"address","address",r,!1)||this}return o(t,e),t.prototype.encode=function(e){var t=new Uint8Array(32);try{t.set(h.arrayify(l.getAddress(e)),12)}catch(t){v.throwError("invalid address",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"address",value:e})}return t},t.prototype.decode=function(data,e){return data.length<e+32&&v.throwError("insufficuent data for address type",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"address",value:h.hexlify(data.slice(e,e+32))}),{consumed:32,value:this.coerceFunc("address",l.getAddress(h.hexlify(data.slice(e+12,e+32))))}},t}(T);function P(e){var t=32*Math.ceil(e.length/32),r=new Uint8Array(t-e.length);return h.concat([S.encode(e.length),e,r])}function D(data,e,t){data.length<e+32&&v.throwError("insufficient data for dynamicBytes length",v.INVALID_ARGUMENT,{arg:t,coderType:"dynamicBytes",value:h.hexlify(data.slice(e,e+32))});var r=S.decode(data,e).value;try{r=r.toNumber()}catch(e){v.throwError("dynamic bytes count too large",v.INVALID_ARGUMENT,{arg:t,coderType:"dynamicBytes",value:r.toString()})}return data.length<e+32+r&&v.throwError("insufficient data for dynamicBytes type",v.INVALID_ARGUMENT,{arg:t,coderType:"dynamicBytes",value:h.hexlify(data.slice(e,e+32+r))}),{consumed:32+32*Math.ceil(r/32),value:data.slice(e+32,e+32+r)}}var L=function(e){function t(t,r){return e.call(this,t,"bytes","bytes",r,!0)||this}return o(t,e),t.prototype.encode=function(e){try{return P(h.arrayify(e))}catch(e){v.throwError("invalid bytes value",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"bytes",value:e.value})}return null},t.prototype.decode=function(data,e){var t=D(data,e,this.localName);return t.value=this.coerceFunc("bytes",h.hexlify(t.value)),t},t}(T),G=function(e){function t(t,r){return e.call(this,t,"string","string",r,!0)||this}return o(t,e),t.prototype.encode=function(e){return"string"!=typeof e&&v.throwError("invalid string value",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"string",value:e}),P(d.toUtf8Bytes(e))},t.prototype.decode=function(data,e){var t=D(data,e,this.localName);return t.value=this.coerceFunc("string",d.toUtf8String(t.value)),t},t}(T);function F(e){return 32*Math.ceil(e/32)}function j(e,t){if(Array.isArray(t));else if(t&&"object"==typeof t){var r=[];e.forEach((function(e){r.push(t[e.localName])})),t=r}else v.throwError("invalid tuple value",v.INVALID_ARGUMENT,{coderType:"tuple",value:t});e.length!==t.length&&v.throwError("types/value length mismatch",v.INVALID_ARGUMENT,{coderType:"tuple",value:t});var n=[];e.forEach((function(e,r){n.push({dynamic:e.dynamic,value:e.encode(t[r])})}));var o=0,c=0;n.forEach((function(e){e.dynamic?(o+=32,c+=F(e.value.length)):o+=F(e.value.length)}));var l=0,f=o,data=new Uint8Array(o+c);return n.forEach((function(e){e.dynamic?(data.set(S.encode(f),l),l+=32,data.set(e.value,f),f+=F(e.value.length)):(data.set(e.value,l),l+=F(e.value.length))})),data}function V(e,data,t){var r=t,n=0,o=[];return e.forEach((function(e){if(e.dynamic){var c=S.decode(data,t);(l=e.decode(data,r+c.value.toNumber())).consumed=c.consumed}else var l=e.decode(data,t);null!=l.value&&o.push(l.value),t+=l.consumed,n+=l.consumed})),e.forEach((function(e,t){var r=e.localName;r&&("length"===r&&(r="_length"),null==o[r]&&(o[r]=o[t]))})),{value:o,consumed:n}}var B=function(e){function t(t,r,n,o){var c=this,l=r.type+"["+(n>=0?n:"")+"]",f=-1===n||r.dynamic;return(c=e.call(this,t,"array",l,o,f)||this).coder=r,c.length=n,c}return o(t,e),t.prototype.encode=function(e){Array.isArray(e)||v.throwError("expected array value",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:e});var t=this.length,r=new Uint8Array(0);-1===t&&(t=e.length,r=S.encode(t)),v.checkArgumentCount(t,e.length,"in coder array"+(this.localName?" "+this.localName:""));for(var n=[],i=0;i<e.length;i++)n.push(this.coder);return h.concat([r,j(n,e)])},t.prototype.decode=function(data,e){var t=0,r=this.length;if(-1===r){try{var n=S.decode(data,e)}catch(e){v.throwError("insufficient data for dynamic array length",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:e.value})}try{r=n.value.toNumber()}catch(e){v.throwError("array count too large",v.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:n.value.toString()})}t+=n.consumed,e+=n.consumed}for(var o=[],i=0;i<r;i++)o.push(new M(this.coder));var c=V(o,data,e);return c.consumed+=t,c.value=this.coerceFunc(this.type,c.value),c},t}(T),z=function(e){function t(t,r,n){var o=this,c=!1,l=[];r.forEach((function(e){e.dynamic&&(c=!0),l.push(e.type)}));var f="tuple("+l.join(",")+")";return(o=e.call(this,t,"tuple",f,n,c)||this).coders=r,o}return o(t,e),t.prototype.encode=function(e){return j(this.coders,e)},t.prototype.decode=function(data,e){var t=V(this.coders,data,e);return t.value=this.coerceFunc(this.type,t.value),t},t}(T);function Z(e){for(var t=[],r="",n=0,o=0;o<e.length;o++){var c=e[o];if(","===c&&0===n)t.push(r),r="";else if(r+=c,"("===c)n++;else if(")"===c&&-1===--n)throw new Error("unbalanced parenthsis")}return t.push(r),t}var $={address:k,bool:O,string:G,bytes:L};function H(e,param){var t,r=$[param.type];if(r)return new r(e,param.name);if(t=param.type.match(w))return(0===(n=parseInt(t[2]||"256"))||n>256||n%8!=0)&&v.throwError("invalid "+t[1]+" bit length",v.INVALID_ARGUMENT,{arg:"param",value:param}),new R(e,n/8,"int"===t[1],param.name);if(t=param.type.match(m))return(0===(n=parseInt(t[1]))||n>32)&&v.throwError("invalid bytes length",v.INVALID_ARGUMENT,{arg:"param",value:param}),new C(e,n,param.name);if(t=param.type.match(N)){var n=parseInt(t[2]||"-1");return(param=y.jsonCopy(param)).type=t[1],new B(e,H(e,param),n,param.name)}return"tuple"===param.type.substring(0,5)?function(e,t,r){t||(t=[]);var n=[];return t.forEach((function(component){n.push(H(e,component))})),new z(e,n,r)}(e,param.components,param.name):""===param.type?new U(e,param.name):(v.throwError("invalid type",v.INVALID_ARGUMENT,{arg:"type",value:param.type}),null)}var J=function(){function e(r){v.checkNew(this,e),r||(r=t.defaultCoerceFunc),y.defineReadOnly(this,"coerceFunc",r)}return e.prototype.encode=function(e,t){e.length!==t.length&&v.throwError("types/values length mismatch",v.INVALID_ARGUMENT,{count:{types:e.length,values:t.length},value:{types:e,values:t}});var r=[];return e.forEach((function(e){var t=null;t="string"==typeof e?x(e):e,r.push(H(this.coerceFunc,t))}),this),h.hexlify(new z(this.coerceFunc,r,"_").encode(t))},e.prototype.decode=function(e,data){var t=[];return e.forEach((function(e){var r=null;r="string"==typeof e?x(e):y.jsonCopy(e),t.push(H(this.coerceFunc,r))}),this),new z(this.coerceFunc,t,"_").decode(h.arrayify(data),0).value},e}();t.AbiCoder=J,t.defaultAbiCoder=new J},1003:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(25)),c=r(198),l=r(1004),f=r(1006),h=r(280);function d(address){"string"==typeof address&&address.match(/^0x[0-9A-Fa-f]{40}$/)||h.throwError("invalid address",h.INVALID_ARGUMENT,{arg:"address",value:address});for(var e=(address=address.toLowerCase()).substring(2).split(""),t=new Uint8Array(40),r=0;r<40;r++)t[r]=e[r].charCodeAt(0);t=c.arrayify(l.keccak256(t));for(var i=0;i<40;i+=2)t[i>>1]>>4>=8&&(e[i]=e[i].toUpperCase()),(15&t[i>>1])>=8&&(e[i+1]=e[i+1].toUpperCase());return"0x"+e.join("")}for(var y={},i=0;i<10;i++)y[String(i)]=String(i);for(i=0;i<26;i++)y[String.fromCharCode(65+i)]=String(10+i);var v,m=Math.floor((v=9007199254740991,Math.log10?Math.log10(v):Math.log(v)/Math.LN10));function w(address){address=(address=address.toUpperCase()).substring(4)+address.substring(0,2)+"00";var e="";for(address.split("").forEach((function(t){e+=y[t]}));e.length>=m;){var t=e.substring(0,m);e=parseInt(t,10)%97+e.substring(t.length)}for(var r=String(98-parseInt(e,10)%97);r.length<2;)r="0"+r;return r}function N(address){var e=null;if("string"!=typeof address&&h.throwError("invalid address",h.INVALID_ARGUMENT,{arg:"address",value:address}),address.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==address.substring(0,2)&&(address="0x"+address),e=d(address),address.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&e!==address&&h.throwError("bad address checksum",h.INVALID_ARGUMENT,{arg:"address",value:address});else if(address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(address.substring(2,4)!==w(address)&&h.throwError("bad icap checksum",h.INVALID_ARGUMENT,{arg:"address",value:address}),e=new o.default.BN(address.substring(4),36).toString(16);e.length<40;)e="0"+e;e=d("0x"+e)}else h.throwError("invalid address",h.INVALID_ARGUMENT,{arg:"address",value:address});return e}t.getAddress=N,t.getIcapAddress=function(address){for(var e=new o.default.BN(N(address).substring(2),16).toString(36).toUpperCase();e.length<30;)e="0"+e;return"XE"+w("XE00"+e)+e},t.getContractAddress=function(e){if(!e.from)throw new Error("missing from address");var t=e.nonce;return N("0x"+l.keccak256(f.encode([N(e.from),c.stripZeros(c.hexlify(t))])).substring(26))}},1004:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005),o=r(198);t.keccak256=function(data){return"0x"+n.keccak_256(o.arrayify(data))}},1005:function(e,t,r){(function(t,r){!function(){"use strict";var n="object"==typeof window?window:{};!n.JS_SHA3_NO_NODE_JS&&"object"==typeof t&&t.versions&&t.versions.node&&(n=r);for(var o=!n.JS_SHA3_NO_COMMON_JS&&"object"==typeof e&&e.exports,c="0123456789abcdef".split(""),l=[0,8,16,24],f=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],h=[224,256,384,512],d=["hex","buffer","arrayBuffer","array"],y=function(e,t,r){return function(n){return new T(e,t,e).update(n)[r]()}},v=function(e,t,r){return function(n,o){return new T(e,t,o).update(n)[r]()}},m=function(e,t){var r=y(e,t,"hex");r.create=function(){return new T(e,t,e)},r.update=function(e){return r.create().update(e)};for(var i=0;i<d.length;++i){var n=d[i];r[n]=y(e,t,n)}return r},w=[{name:"keccak",padding:[1,256,65536,16777216],bits:h,createMethod:m},{name:"sha3",padding:[6,1536,393216,100663296],bits:h,createMethod:m},{name:"shake",padding:[31,7936,2031616,520093696],bits:[128,256],createMethod:function(e,t){var r=v(e,t,"hex");r.create=function(r){return new T(e,t,r)},r.update=function(e,t){return r.create(t).update(e)};for(var i=0;i<d.length;++i){var n=d[i];r[n]=v(e,t,n)}return r}}],N={},E=[],i=0;i<w.length;++i)for(var _=w[i],A=_.bits,x=0;x<A.length;++x){var I=_.name+"_"+A[x];E.push(I),N[I]=_.createMethod(A[x],_.padding)}function T(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var i=0;i<50;++i)this.s[i]=0}T.prototype.update=function(e){var t="string"!=typeof e;t&&e.constructor===ArrayBuffer&&(e=new Uint8Array(e));for(var i,code,r=e.length,n=this.blocks,o=this.byteCount,c=this.blockCount,f=0,s=this.s;f<r;){if(this.reset)for(this.reset=!1,n[0]=this.block,i=1;i<c+1;++i)n[i]=0;if(t)for(i=this.start;f<r&&i<o;++f)n[i>>2]|=e[f]<<l[3&i++];else for(i=this.start;f<r&&i<o;++f)(code=e.charCodeAt(f))<128?n[i>>2]|=code<<l[3&i++]:code<2048?(n[i>>2]|=(192|code>>6)<<l[3&i++],n[i>>2]|=(128|63&code)<<l[3&i++]):code<55296||code>=57344?(n[i>>2]|=(224|code>>12)<<l[3&i++],n[i>>2]|=(128|code>>6&63)<<l[3&i++],n[i>>2]|=(128|63&code)<<l[3&i++]):(code=65536+((1023&code)<<10|1023&e.charCodeAt(++f)),n[i>>2]|=(240|code>>18)<<l[3&i++],n[i>>2]|=(128|code>>12&63)<<l[3&i++],n[i>>2]|=(128|code>>6&63)<<l[3&i++],n[i>>2]|=(128|63&code)<<l[3&i++]);if(this.lastByteIndex=i,i>=o){for(this.start=i-o,this.block=n[c],i=0;i<c;++i)s[i]^=n[i];M(s),this.reset=!0}else this.start=i}return this},T.prototype.finalize=function(){var e=this.blocks,i=this.lastByteIndex,t=this.blockCount,s=this.s;if(e[i>>2]|=this.padding[3&i],this.lastByteIndex===this.byteCount)for(e[0]=e[t],i=1;i<t+1;++i)e[i]=0;for(e[t-1]|=2147483648,i=0;i<t;++i)s[i]^=e[i];M(s)},T.prototype.toString=T.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,s=this.s,r=this.outputBlocks,n=this.extraBytes,i=0,o=0,l="";o<r;){for(i=0;i<t&&o<r;++i,++o)e=s[i],l+=c[e>>4&15]+c[15&e]+c[e>>12&15]+c[e>>8&15]+c[e>>20&15]+c[e>>16&15]+c[e>>28&15]+c[e>>24&15];o%t==0&&(M(s),i=0)}return n&&(e=s[i],n>0&&(l+=c[e>>4&15]+c[15&e]),n>1&&(l+=c[e>>12&15]+c[e>>8&15]),n>2&&(l+=c[e>>20&15]+c[e>>16&15])),l},T.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,s=this.s,r=this.outputBlocks,n=this.extraBytes,i=0,o=0,c=this.outputBits>>3;e=n?new ArrayBuffer(r+1<<2):new ArrayBuffer(c);for(var l=new Uint32Array(e);o<r;){for(i=0;i<t&&o<r;++i,++o)l[o]=s[i];o%t==0&&M(s)}return n&&(l[i]=s[i],e=e.slice(0,c)),e},T.prototype.buffer=T.prototype.arrayBuffer,T.prototype.digest=T.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,s=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,c=0,l=[];c<n;){for(i=0;i<r&&c<n;++i,++c)e=c<<2,t=s[i],l[e]=255&t,l[e+1]=t>>8&255,l[e+2]=t>>16&255,l[e+3]=t>>24&255;c%r==0&&M(s)}return o&&(e=c<<2,t=s[i],o>0&&(l[e]=255&t),o>1&&(l[e+1]=t>>8&255),o>2&&(l[e+2]=t>>16&255)),l};var M=function(s){var e,t,r,n,o,c,l,h,d,y,v,m,w,N,E,_,A,x,I,T,M,U,R,S,O,C,k,P,D,L,G,F,j,V,B,z,Z,$,H,J,X,K,W,Y,Q,ee,te,re,ne,oe,ae,ie,ue,se,ce,le,fe,he,de,pe,ye,ve,ge;for(r=0;r<48;r+=2)n=s[0]^s[10]^s[20]^s[30]^s[40],o=s[1]^s[11]^s[21]^s[31]^s[41],c=s[2]^s[12]^s[22]^s[32]^s[42],l=s[3]^s[13]^s[23]^s[33]^s[43],h=s[4]^s[14]^s[24]^s[34]^s[44],d=s[5]^s[15]^s[25]^s[35]^s[45],y=s[6]^s[16]^s[26]^s[36]^s[46],v=s[7]^s[17]^s[27]^s[37]^s[47],e=(m=s[8]^s[18]^s[28]^s[38]^s[48])^(c<<1|l>>>31),t=(w=s[9]^s[19]^s[29]^s[39]^s[49])^(l<<1|c>>>31),s[0]^=e,s[1]^=t,s[10]^=e,s[11]^=t,s[20]^=e,s[21]^=t,s[30]^=e,s[31]^=t,s[40]^=e,s[41]^=t,e=n^(h<<1|d>>>31),t=o^(d<<1|h>>>31),s[2]^=e,s[3]^=t,s[12]^=e,s[13]^=t,s[22]^=e,s[23]^=t,s[32]^=e,s[33]^=t,s[42]^=e,s[43]^=t,e=c^(y<<1|v>>>31),t=l^(v<<1|y>>>31),s[4]^=e,s[5]^=t,s[14]^=e,s[15]^=t,s[24]^=e,s[25]^=t,s[34]^=e,s[35]^=t,s[44]^=e,s[45]^=t,e=h^(m<<1|w>>>31),t=d^(w<<1|m>>>31),s[6]^=e,s[7]^=t,s[16]^=e,s[17]^=t,s[26]^=e,s[27]^=t,s[36]^=e,s[37]^=t,s[46]^=e,s[47]^=t,e=y^(n<<1|o>>>31),t=v^(o<<1|n>>>31),s[8]^=e,s[9]^=t,s[18]^=e,s[19]^=t,s[28]^=e,s[29]^=t,s[38]^=e,s[39]^=t,s[48]^=e,s[49]^=t,N=s[0],E=s[1],ee=s[11]<<4|s[10]>>>28,te=s[10]<<4|s[11]>>>28,P=s[20]<<3|s[21]>>>29,D=s[21]<<3|s[20]>>>29,pe=s[31]<<9|s[30]>>>23,ye=s[30]<<9|s[31]>>>23,K=s[40]<<18|s[41]>>>14,W=s[41]<<18|s[40]>>>14,V=s[2]<<1|s[3]>>>31,B=s[3]<<1|s[2]>>>31,_=s[13]<<12|s[12]>>>20,A=s[12]<<12|s[13]>>>20,re=s[22]<<10|s[23]>>>22,ne=s[23]<<10|s[22]>>>22,L=s[33]<<13|s[32]>>>19,G=s[32]<<13|s[33]>>>19,ve=s[42]<<2|s[43]>>>30,ge=s[43]<<2|s[42]>>>30,se=s[5]<<30|s[4]>>>2,ce=s[4]<<30|s[5]>>>2,z=s[14]<<6|s[15]>>>26,Z=s[15]<<6|s[14]>>>26,x=s[25]<<11|s[24]>>>21,I=s[24]<<11|s[25]>>>21,oe=s[34]<<15|s[35]>>>17,ae=s[35]<<15|s[34]>>>17,F=s[45]<<29|s[44]>>>3,j=s[44]<<29|s[45]>>>3,S=s[6]<<28|s[7]>>>4,O=s[7]<<28|s[6]>>>4,le=s[17]<<23|s[16]>>>9,fe=s[16]<<23|s[17]>>>9,$=s[26]<<25|s[27]>>>7,H=s[27]<<25|s[26]>>>7,T=s[36]<<21|s[37]>>>11,M=s[37]<<21|s[36]>>>11,ie=s[47]<<24|s[46]>>>8,ue=s[46]<<24|s[47]>>>8,Y=s[8]<<27|s[9]>>>5,Q=s[9]<<27|s[8]>>>5,C=s[18]<<20|s[19]>>>12,k=s[19]<<20|s[18]>>>12,he=s[29]<<7|s[28]>>>25,de=s[28]<<7|s[29]>>>25,J=s[38]<<8|s[39]>>>24,X=s[39]<<8|s[38]>>>24,U=s[48]<<14|s[49]>>>18,R=s[49]<<14|s[48]>>>18,s[0]=N^~_&x,s[1]=E^~A&I,s[10]=S^~C&P,s[11]=O^~k&D,s[20]=V^~z&$,s[21]=B^~Z&H,s[30]=Y^~ee&re,s[31]=Q^~te&ne,s[40]=se^~le&he,s[41]=ce^~fe&de,s[2]=_^~x&T,s[3]=A^~I&M,s[12]=C^~P&L,s[13]=k^~D&G,s[22]=z^~$&J,s[23]=Z^~H&X,s[32]=ee^~re&oe,s[33]=te^~ne&ae,s[42]=le^~he&pe,s[43]=fe^~de&ye,s[4]=x^~T&U,s[5]=I^~M&R,s[14]=P^~L&F,s[15]=D^~G&j,s[24]=$^~J&K,s[25]=H^~X&W,s[34]=re^~oe&ie,s[35]=ne^~ae&ue,s[44]=he^~pe&ve,s[45]=de^~ye&ge,s[6]=T^~U&N,s[7]=M^~R&E,s[16]=L^~F&S,s[17]=G^~j&O,s[26]=J^~K&V,s[27]=X^~W&B,s[36]=oe^~ie&Y,s[37]=ae^~ue&Q,s[46]=pe^~ve&se,s[47]=ye^~ge&ce,s[8]=U^~N&_,s[9]=R^~E&A,s[18]=F^~S&C,s[19]=j^~O&k,s[28]=K^~V&z,s[29]=W^~B&Z,s[38]=ie^~Y&ee,s[39]=ue^~Q&te,s[48]=ve^~se&le,s[49]=ge^~ce&fe,s[0]^=f[r],s[1]^=f[r+1]};if(o)e.exports=N;else for(i=0;i<E.length;++i)n[E[i]]=N[E[i]]}()}).call(this,r(38),r(30))},1006:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(198);function o(e){for(var t=[];e;)t.unshift(255&e),e>>=8;return t}function c(data,e,t){for(var r=0,i=0;i<t;i++)r=256*r+data[e+i];return r}function l(data,e,t,r){for(var n=[];t<e+1+r;){var o=f(data,t);if(n.push(o.result),(t+=o.consumed)>e+1+r)throw new Error("invalid rlp")}return{consumed:1+r,result:n}}function f(data,e){if(0===data.length)throw new Error("invalid rlp data");if(data[e]>=248){if(e+1+(t=data[e]-247)>data.length)throw new Error("too short");if(e+1+t+(r=c(data,e+1,t))>data.length)throw new Error("to short");return l(data,e,e+1+t,t+r)}if(data[e]>=192){if(e+1+(r=data[e]-192)>data.length)throw new Error("invalid rlp data");return l(data,e,e+1,r)}if(data[e]>=184){var t;if(e+1+(t=data[e]-183)>data.length)throw new Error("invalid rlp data");if(e+1+t+(r=c(data,e+1,t))>data.length)throw new Error("invalid rlp data");return{consumed:1+t+r,result:n.hexlify(data.slice(e+1+t,e+1+t+r))}}if(data[e]>=128){var r;if(e+1+(r=data[e]-128)>data.length)throw new Error("invlaid rlp data");return{consumed:1+r,result:n.hexlify(data.slice(e+1,e+1+r))}}return{consumed:1,result:n.hexlify(data[e])}}t.encode=function(object){return n.hexlify(function e(object){if(Array.isArray(object)){var t=[];return object.forEach((function(r){t=t.concat(e(r))})),t.length<=55?(t.unshift(192+t.length),t):((r=o(t.length)).unshift(247+r.length),r.concat(t))}var r,data=Array.prototype.slice.call(n.arrayify(object));return 1===data.length&&data[0]<=127?data:data.length<=55?(data.unshift(128+data.length),data):((r=o(data.length)).unshift(183+r.length),r.concat(data))}(object))},t.decode=function(data){var e=n.arrayify(data),t=f(e,0);if(t.consumed!==e.length)throw new Error("invalid rlp data");return t.result}},1007:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},function(e,b){function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var f=c(r(25)),h=r(198),d=r(514),y=r(513),v=l(r(280)),m=new f.default.BN(-1);function w(e){var t=e.toString(16);return"-"===t[0]?t.length%2==0?"-0x0"+t.substring(1):"-0x"+t.substring(1):t.length%2==1?"0x0"+t:"0x"+t}function N(e){return A(e)._bn}function E(e){return new _(w(e))}var _=function(e){function t(r){var n=e.call(this)||this;if(v.checkNew(n,t),"string"==typeof r)h.isHexString(r)?("0x"==r&&(r="0x0"),d.defineReadOnly(n,"_hex",r)):"-"===r[0]&&h.isHexString(r.substring(1))?d.defineReadOnly(n,"_hex",r):r.match(/^-?[0-9]*$/)?(""==r&&(r="0"),d.defineReadOnly(n,"_hex",w(new f.default.BN(r)))):v.throwError("invalid BigNumber string value",v.INVALID_ARGUMENT,{arg:"value",value:r});else if("number"==typeof r){parseInt(String(r))!==r&&v.throwError("underflow",v.NUMERIC_FAULT,{operation:"setValue",fault:"underflow",value:r,outputValue:parseInt(String(r))});try{d.defineReadOnly(n,"_hex",w(new f.default.BN(r)))}catch(e){v.throwError("overflow",v.NUMERIC_FAULT,{operation:"setValue",fault:"overflow",details:e.message})}}else r instanceof t?d.defineReadOnly(n,"_hex",r._hex):r.toHexString?d.defineReadOnly(n,"_hex",w(N(r.toHexString()))):h.isArrayish(r)?d.defineReadOnly(n,"_hex",w(new f.default.BN(h.hexlify(r).substring(2),16))):v.throwError("invalid BigNumber value",v.INVALID_ARGUMENT,{arg:"value",value:r});return n}return o(t,e),Object.defineProperty(t.prototype,"_bn",{get:function(){return"-"===this._hex[0]?new f.default.BN(this._hex.substring(3),16).mul(m):new f.default.BN(this._hex.substring(2),16)},enumerable:!0,configurable:!0}),t.prototype.fromTwos=function(e){return E(this._bn.fromTwos(e))},t.prototype.toTwos=function(e){return E(this._bn.toTwos(e))},t.prototype.add=function(e){return E(this._bn.add(N(e)))},t.prototype.sub=function(e){return E(this._bn.sub(N(e)))},t.prototype.div=function(e){return A(e).isZero()&&v.throwError("division by zero",v.NUMERIC_FAULT,{operation:"divide",fault:"division by zero"}),E(this._bn.div(N(e)))},t.prototype.mul=function(e){return E(this._bn.mul(N(e)))},t.prototype.mod=function(e){return E(this._bn.mod(N(e)))},t.prototype.pow=function(e){return E(this._bn.pow(N(e)))},t.prototype.maskn=function(e){return E(this._bn.maskn(e))},t.prototype.eq=function(e){return this._bn.eq(N(e))},t.prototype.lt=function(e){return this._bn.lt(N(e))},t.prototype.lte=function(e){return this._bn.lte(N(e))},t.prototype.gt=function(e){return this._bn.gt(N(e))},t.prototype.gte=function(e){return this._bn.gte(N(e))},t.prototype.isZero=function(){return this._bn.isZero()},t.prototype.toNumber=function(){try{return this._bn.toNumber()}catch(e){v.throwError("overflow",v.NUMERIC_FAULT,{operation:"setValue",fault:"overflow",details:e.message})}return null},t.prototype.toString=function(){return this._bn.toString(10)},t.prototype.toHexString=function(){return this._hex},t}(y.BigNumber);function A(e){return e instanceof _?e:new _(e)}t.bigNumberify=A,t.ConstantNegativeOne=A(-1),t.ConstantZero=A(0),t.ConstantOne=A(1),t.ConstantTwo=A(2),t.ConstantWeiPerEther=A("1000000000000000000")},1008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(198);!function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD"}(n=t.UnicodeNormalizationForm||(t.UnicodeNormalizationForm={})),t.toUtf8Bytes=function(e,form){void 0===form&&(form=n.current),form!=n.current&&(e=e.normalize(form));for(var t=[],r=0,i=0;i<e.length;i++){var c=e.charCodeAt(i);c<128?t[r++]=c:c<2048?(t[r++]=c>>6|192,t[r++]=63&c|128):55296==(64512&c)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(c=65536+((1023&c)<<10)+(1023&e.charCodeAt(++i)),t[r++]=c>>18|240,t[r++]=c>>12&63|128,t[r++]=c>>6&63|128,t[r++]=63&c|128):(t[r++]=c>>12|224,t[r++]=c>>6&63|128,t[r++]=63&c|128)}return o.arrayify(t)},t.toUtf8String=function(e){e=o.arrayify(e);for(var t="",i=0;i<e.length;){var r=e[i++];if(r>>7!=0){if(r>>6!=2){var n=null;if(r>>5==6)n=1;else if(r>>4==14)n=2;else if(r>>3==30)n=3;else if(r>>2==62)n=4;else{if(r>>1!=126)continue;n=5}if(i+n>e.length){for(;i<e.length&&e[i]>>6==2;i++);if(i!=e.length)continue;return t}var c,l=r&(1<<8-n-1)-1;for(c=0;c<n;c++){var f=e[i++];if(f>>6!=2)break;l=l<<6|63&f}c==n?l<=65535?t+=String.fromCharCode(l):(l-=65536,t+=String.fromCharCode(55296+(l>>10&1023),56320+(1023&l))):i--}}else t+=String.fromCharCode(r)}return t}},144:function(e,t,r){var n=r(62),o=r(4),c=new(0,r(1002).AbiCoder)((function(e,t){return!e.match(/^u?int/)||n.isArray(t)||n.isObject(t)&&"BN"===t.constructor.name?t:t.toString()}));function l(){}var f=function(){};f.prototype.encodeFunctionSignature=function(e){return n.isObject(e)&&(e=o._jsonInterfaceMethodToString(e)),o.sha3(e).slice(0,10)},f.prototype.encodeEventSignature=function(e){return n.isObject(e)&&(e=o._jsonInterfaceMethodToString(e)),o.sha3(e)},f.prototype.encodeParameter=function(e,param){return this.encodeParameters([e],[param])},f.prototype.encodeParameters=function(e,t){return c.encode(this.mapTypes(e),t.map((function(param){return o.isBN(param)||o.isBigNumber(param)?param.toString(10):param})))},f.prototype.mapTypes=function(e){var t=this,r=[];return e.forEach((function(e){if(t.isSimplifiedStructFormat(e)){var n=Object.keys(e)[0];r.push(Object.assign(t.mapStructNameAndType(n),{components:t.mapStructToCoderFormat(e[n])}))}else r.push(e)})),r},f.prototype.isSimplifiedStructFormat=function(e){return"object"==typeof e&&void 0===e.components&&void 0===e.name},f.prototype.mapStructNameAndType=function(e){var t="tuple";return e.indexOf("[]")>-1&&(t="tuple[]",e=e.slice(0,-2)),{type:t,name:e}},f.prototype.mapStructToCoderFormat=function(e){var t=this,r=[];return Object.keys(e).forEach((function(n){"object"!=typeof e[n]?r.push({name:n,type:e[n]}):r.push(Object.assign(t.mapStructNameAndType(n),{components:t.mapStructToCoderFormat(e[n])}))})),r},f.prototype.encodeFunctionCall=function(e,t){return this.encodeFunctionSignature(e)+this.encodeParameters(e.inputs,t).replace("0x","")},f.prototype.decodeParameter=function(e,t){return this.decodeParameters([e],t)[0]},f.prototype.decodeParameters=function(e,t){if(e.length>0&&(!t||"0x"===t||"0X"===t))throw new Error("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");var r=c.decode(this.mapTypes(e),"0x"+t.replace(/0x/i,"")),o=new l;return o.__length__=0,e.forEach((function(output,i){var e=r[o.__length__];e="0x"===e?null:e,o[i]=e,n.isObject(output)&&output.name&&(o[output.name]=e),o.__length__++})),o},f.prototype.decodeLog=function(e,data,t){var r=this;t=n.isArray(t)?t:[t],data=data||"";var o=[],c=[],f=0;e.forEach((function(input,i){input.indexed?(c[i]=["bool","int","uint","address","fixed","ufixed"].find((function(e){return-1!==input.type.indexOf(e)}))?r.decodeParameter(input.type,t[f]):t[f],f++):o[i]=input}));var h=data,d=h?this.decodeParameters(o,h):[],y=new l;return y.__length__=0,e.forEach((function(e,i){y[i]="string"===e.type?"":null,void 0!==d[i]&&(y[i]=d[i]),void 0!==c[i]&&(y[i]=c[i]),e.name&&(y[e.name]=y[i]),y.__length__++})),y};var h=new f;e.exports=h},198:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(513),o=r(280);function c(e){return e instanceof n.BigNumber}function l(e){return e.slice||(e.slice=function(){var t=Array.prototype.slice.call(arguments);return new Uint8Array(Array.prototype.slice.apply(e,t))}),e}function f(e){if(!e||parseInt(String(e.length))!=e.length||"string"==typeof e)return!1;for(var i=0;i<e.length;i++){var t=e[i];if(t<0||t>=256||parseInt(String(t))!=t)return!1}return!0}function h(e){if(null==e&&o.throwError("cannot convert null value to array",o.INVALID_ARGUMENT,{arg:"value",value:e}),c(e)&&(e=e.toHexString()),"string"==typeof e){var t=e.match(/^(0x)?[0-9a-fA-F]*$/);t||o.throwError("invalid hexidecimal string",o.INVALID_ARGUMENT,{arg:"value",value:e}),"0x"!==t[1]&&o.throwError("hex string must have 0x prefix",o.INVALID_ARGUMENT,{arg:"value",value:e}),(e=e.substring(2)).length%2&&(e="0"+e);for(var r=[],i=0;i<e.length;i+=2)r.push(parseInt(e.substr(i,2),16));return l(new Uint8Array(r))}return f(e)?l(new Uint8Array(e)):(o.throwError("invalid arrayify value",null,{arg:"value",value:e,type:typeof e}),null)}function d(e){for(var t=[],r=0,i=0;i<e.length;i++){var object=h(e[i]);t.push(object),r+=object.length}var n=new Uint8Array(r),o=0;for(i=0;i<t.length;i++)n.set(t[i],o),o+=t[i].length;return l(n)}function y(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!t||e.length===2+2*t)}t.AddressZero="0x0000000000000000000000000000000000000000",t.HashZero="0x0000000000000000000000000000000000000000000000000000000000000000",t.isArrayish=f,t.arrayify=h,t.concat=d,t.stripZeros=function(e){var t=h(e);if(0===t.length)return t;for(var r=0;0===t[r];)r++;return r&&(t=t.slice(r)),t},t.padZeros=function(e,t){if(t<(e=h(e)).length)throw new Error("cannot pad");var r=new Uint8Array(t);return r.set(e,t-e.length),l(r)},t.isHexString=y;function v(e){if(c(e))return e.toHexString();if("number"==typeof e){e<0&&o.throwError("cannot hexlify negative value",o.INVALID_ARGUMENT,{arg:"value",value:e});for(var t="";e;)t="0123456789abcdef"[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("string"==typeof e){var r=e.match(/^(0x)?[0-9a-fA-F]*$/);return r||o.throwError("invalid hexidecimal string",o.INVALID_ARGUMENT,{arg:"value",value:e}),"0x"!==r[1]&&o.throwError("hex string must have 0x prefix",o.INVALID_ARGUMENT,{arg:"value",value:e}),e.length%2&&(e="0x0"+e.substring(2)),e}if(f(e)){for(var n=[],i=0;i<e.length;i++){var l=e[i];n.push("0123456789abcdef"[(240&l)>>4]+"0123456789abcdef"[15&l])}return"0x"+n.join("")}return o.throwError("invalid hexlify value",null,{arg:"value",value:e}),"never"}function m(e,t){for(y(e)||o.throwError("invalid hex string",o.INVALID_ARGUMENT,{arg:"value",value:e});e.length<2*t+2;)e="0x0"+e.substring(2);return e}function w(e){var t,r=0,n="0x",s="0x";if((t=e)&&null!=t.r&&null!=t.s){null==e.v&&null==e.recoveryParam&&o.throwError("at least on of recoveryParam or v must be specified",o.INVALID_ARGUMENT,{argument:"signature",value:e}),n=m(e.r,32),s=m(e.s,32),"string"==typeof(r=e.v)&&(r=parseInt(r,16));var c=e.recoveryParam;null==c&&null!=e.v&&(c=1-r%2),r=27+c}else{var l=h(e);if(65!==l.length)throw new Error("invalid signature");n=v(l.slice(0,32)),s=v(l.slice(32,64)),27!==(r=l[64])&&28!==r&&(r=27+r%2)}return{r:n,s:s,recoveryParam:r-27,v:r}}t.hexlify=v,t.hexDataLength=function(data){return y(data)&&data.length%2==0?(data.length-2)/2:null},t.hexDataSlice=function(data,e,t){return y(data)||o.throwError("invalid hex data",o.INVALID_ARGUMENT,{arg:"value",value:data}),data.length%2!=0&&o.throwError("hex data length must be even",o.INVALID_ARGUMENT,{arg:"value",value:data}),e=2+2*e,null!=t?"0x"+data.substring(e,e+2*t):"0x"+data.substring(e)},t.hexStripZeros=function(e){for(y(e)||o.throwError("invalid hex string",o.INVALID_ARGUMENT,{arg:"value",value:e});e.length>3&&"0x0"===e.substring(0,3);)e="0x"+e.substring(3);return e},t.hexZeroPad=m,t.splitSignature=w,t.joinSignature=function(e){return v(d([(e=w(e)).r,e.s,e.recoveryParam?"0x1c":"0x1b"]))}},280:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UNKNOWN_ERROR="UNKNOWN_ERROR",t.NOT_IMPLEMENTED="NOT_IMPLEMENTED",t.MISSING_NEW="MISSING_NEW",t.CALL_EXCEPTION="CALL_EXCEPTION",t.INVALID_ARGUMENT="INVALID_ARGUMENT",t.MISSING_ARGUMENT="MISSING_ARGUMENT",t.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",t.NUMERIC_FAULT="NUMERIC_FAULT",t.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION";var n=!1,o=!1;function c(e,code,r){if(o)throw new Error("unknown error");code||(code=t.UNKNOWN_ERROR),r||(r={});var n=[];Object.keys(r).forEach((function(e){try{n.push(e+"="+JSON.stringify(r[e]))}catch(t){n.push(e+"="+JSON.stringify(r[e].toString()))}}));var c=e;n.length&&(e+=" ("+n.join(", ")+")");var l=new Error(e);throw l.reason=c,l.code=code,Object.keys(r).forEach((function(e){l[e]=r[e]})),l}t.throwError=c,t.checkNew=function(e,r){e instanceof r||c("missing new",t.MISSING_NEW,{name:r.name})},t.checkArgumentCount=function(e,r,n){n||(n=""),e<r&&c("missing argument"+n,t.MISSING_ARGUMENT,{count:e,expectedCount:r}),e>r&&c("too many arguments"+n,t.UNEXPECTED_ARGUMENT,{count:e,expectedCount:r})},t.setCensorship=function(e,r){n&&c("error censorship permanent",t.UNSUPPORTED_OPERATION,{operation:"setCersorship"}),o=!!e,n=!!r}},513:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){};t.BigNumber=n;var o=function(){};t.Indexed=o;var c=function(){};t.MinimalProvider=c;var l=function(){};t.Signer=l;var f=function(){};t.HDNode=f},514:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defineReadOnly=function(object,e,t){Object.defineProperty(object,e,{enumerable:!0,value:t,writable:!1})},t.defineFrozen=function(object,e,t){var r=JSON.stringify(t);Object.defineProperty(object,e,{enumerable:!0,get:function(){return JSON.parse(r)}})},t.resolveProperties=function(object){var e={},t=[];return Object.keys(object).forEach((function(r){var n=object[r];n instanceof Promise?t.push(n.then((function(t){return e[r]=t,null}))):e[r]=n})),Promise.all(t).then((function(){return e}))},t.shallowCopy=function(object){var e={};for(var t in object)e[t]=object[t];return e},t.jsonCopy=function(object){return JSON.parse(JSON.stringify(object))}}}]);