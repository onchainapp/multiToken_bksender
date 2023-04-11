/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1034:function(t,e,r){(function(e,r){!function(){"use strict";var n="object"==typeof window?window:{};!n.JS_SHA3_NO_NODE_JS&&"object"==typeof e&&e.versions&&e.versions.node&&(n=r);for(var o=!n.JS_SHA3_NO_COMMON_JS&&"object"==typeof t&&t.exports,c="0123456789abcdef".split(""),h=[0,8,16,24],l=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],f=[224,256,384,512],_=["hex","buffer","arrayBuffer","array"],k=function(t,e,r){return function(n){return new x(t,e,t).update(n)[r]()}},d=function(t,e,r){return function(n,o){return new x(t,e,o).update(n)[r]()}},y=function(t,e){var r=k(t,e,"hex");r.create=function(){return new x(t,e,t)},r.update=function(t){return r.create().update(t)};for(var i=0;i<_.length;++i){var n=_[i];r[n]=k(t,e,n)}return r},m=[{name:"keccak",padding:[1,256,65536,16777216],bits:f,createMethod:y},{name:"sha3",padding:[6,1536,393216,100663296],bits:f,createMethod:y},{name:"shake",padding:[31,7936,2031616,520093696],bits:[128,256],createMethod:function(t,e){var r=d(t,e,"hex");r.create=function(r){return new x(t,e,r)},r.update=function(t,e){return r.create(e).update(t)};for(var i=0;i<_.length;++i){var n=_[i];r[n]=d(t,e,n)}return r}}],v={},B=[],i=0;i<m.length;++i)for(var w=m[i],L=w.bits,C=0;C<L.length;++C){var R=w.name+"_"+L[C];B.push(R),v[R]=w.createMethod(L[C],w.padding)}function x(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var i=0;i<50;++i)this.s[i]=0}x.prototype.update=function(t){var e="string"!=typeof t;e&&t.constructor===ArrayBuffer&&(t=new Uint8Array(t));for(var i,code,r=t.length,n=this.blocks,o=this.byteCount,c=this.blockCount,l=0,s=this.s;l<r;){if(this.reset)for(this.reset=!1,n[0]=this.block,i=1;i<c+1;++i)n[i]=0;if(e)for(i=this.start;l<r&&i<o;++l)n[i>>2]|=t[l]<<h[3&i++];else for(i=this.start;l<r&&i<o;++l)(code=t.charCodeAt(l))<128?n[i>>2]|=code<<h[3&i++]:code<2048?(n[i>>2]|=(192|code>>6)<<h[3&i++],n[i>>2]|=(128|63&code)<<h[3&i++]):code<55296||code>=57344?(n[i>>2]|=(224|code>>12)<<h[3&i++],n[i>>2]|=(128|code>>6&63)<<h[3&i++],n[i>>2]|=(128|63&code)<<h[3&i++]):(code=65536+((1023&code)<<10|1023&t.charCodeAt(++l)),n[i>>2]|=(240|code>>18)<<h[3&i++],n[i>>2]|=(128|code>>12&63)<<h[3&i++],n[i>>2]|=(128|code>>6&63)<<h[3&i++],n[i>>2]|=(128|63&code)<<h[3&i++]);if(this.lastByteIndex=i,i>=o){for(this.start=i-o,this.block=n[c],i=0;i<c;++i)s[i]^=n[i];A(s),this.reset=!0}else this.start=i}return this},x.prototype.finalize=function(){var t=this.blocks,i=this.lastByteIndex,e=this.blockCount,s=this.s;if(t[i>>2]|=this.padding[3&i],this.lastByteIndex===this.byteCount)for(t[0]=t[e],i=1;i<e+1;++i)t[i]=0;for(t[e-1]|=2147483648,i=0;i<e;++i)s[i]^=t[i];A(s)},x.prototype.toString=x.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,s=this.s,r=this.outputBlocks,n=this.extraBytes,i=0,o=0,h="";o<r;){for(i=0;i<e&&o<r;++i,++o)t=s[i],h+=c[t>>4&15]+c[15&t]+c[t>>12&15]+c[t>>8&15]+c[t>>20&15]+c[t>>16&15]+c[t>>28&15]+c[t>>24&15];o%e==0&&(A(s),i=0)}return n&&(t=s[i],n>0&&(h+=c[t>>4&15]+c[15&t]),n>1&&(h+=c[t>>12&15]+c[t>>8&15]),n>2&&(h+=c[t>>20&15]+c[t>>16&15])),h},x.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,s=this.s,r=this.outputBlocks,n=this.extraBytes,i=0,o=0,c=this.outputBits>>3;t=n?new ArrayBuffer(r+1<<2):new ArrayBuffer(c);for(var h=new Uint32Array(t);o<r;){for(i=0;i<e&&o<r;++i,++o)h[o]=s[i];o%e==0&&A(s)}return n&&(h[i]=s[i],t=t.slice(0,c)),t},x.prototype.buffer=x.prototype.arrayBuffer,x.prototype.digest=x.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,s=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,c=0,h=[];c<n;){for(i=0;i<r&&c<n;++i,++c)t=c<<2,e=s[i],h[t]=255&e,h[t+1]=e>>8&255,h[t+2]=e>>16&255,h[t+3]=e>>24&255;c%r==0&&A(s)}return o&&(t=c<<2,e=s[i],o>0&&(h[t]=255&e),o>1&&(h[t+1]=e>>8&255),o>2&&(h[t+2]=e>>16&255)),h};var A=function(s){var t,e,r,n,o,c,h,f,_,k,d,y,m,v,B,w,L,C,R,x,A,T,S,E,O,I,j,N,P,M,F,J,z,D,U,$,H,G,K,Q,V,W,X,Y,Z,tt,et,nt,st,it,ot,ct,at,ut,ht,lt,ft,pt,_t,kt,yt,mt,vt;for(r=0;r<48;r+=2)n=s[0]^s[10]^s[20]^s[30]^s[40],o=s[1]^s[11]^s[21]^s[31]^s[41],c=s[2]^s[12]^s[22]^s[32]^s[42],h=s[3]^s[13]^s[23]^s[33]^s[43],f=s[4]^s[14]^s[24]^s[34]^s[44],_=s[5]^s[15]^s[25]^s[35]^s[45],k=s[6]^s[16]^s[26]^s[36]^s[46],d=s[7]^s[17]^s[27]^s[37]^s[47],t=(y=s[8]^s[18]^s[28]^s[38]^s[48])^(c<<1|h>>>31),e=(m=s[9]^s[19]^s[29]^s[39]^s[49])^(h<<1|c>>>31),s[0]^=t,s[1]^=e,s[10]^=t,s[11]^=e,s[20]^=t,s[21]^=e,s[30]^=t,s[31]^=e,s[40]^=t,s[41]^=e,t=n^(f<<1|_>>>31),e=o^(_<<1|f>>>31),s[2]^=t,s[3]^=e,s[12]^=t,s[13]^=e,s[22]^=t,s[23]^=e,s[32]^=t,s[33]^=e,s[42]^=t,s[43]^=e,t=c^(k<<1|d>>>31),e=h^(d<<1|k>>>31),s[4]^=t,s[5]^=e,s[14]^=t,s[15]^=e,s[24]^=t,s[25]^=e,s[34]^=t,s[35]^=e,s[44]^=t,s[45]^=e,t=f^(y<<1|m>>>31),e=_^(m<<1|y>>>31),s[6]^=t,s[7]^=e,s[16]^=t,s[17]^=e,s[26]^=t,s[27]^=e,s[36]^=t,s[37]^=e,s[46]^=t,s[47]^=e,t=k^(n<<1|o>>>31),e=d^(o<<1|n>>>31),s[8]^=t,s[9]^=e,s[18]^=t,s[19]^=e,s[28]^=t,s[29]^=e,s[38]^=t,s[39]^=e,s[48]^=t,s[49]^=e,v=s[0],B=s[1],tt=s[11]<<4|s[10]>>>28,et=s[10]<<4|s[11]>>>28,N=s[20]<<3|s[21]>>>29,P=s[21]<<3|s[20]>>>29,kt=s[31]<<9|s[30]>>>23,yt=s[30]<<9|s[31]>>>23,W=s[40]<<18|s[41]>>>14,X=s[41]<<18|s[40]>>>14,D=s[2]<<1|s[3]>>>31,U=s[3]<<1|s[2]>>>31,w=s[13]<<12|s[12]>>>20,L=s[12]<<12|s[13]>>>20,nt=s[22]<<10|s[23]>>>22,st=s[23]<<10|s[22]>>>22,M=s[33]<<13|s[32]>>>19,F=s[32]<<13|s[33]>>>19,mt=s[42]<<2|s[43]>>>30,vt=s[43]<<2|s[42]>>>30,ut=s[5]<<30|s[4]>>>2,ht=s[4]<<30|s[5]>>>2,$=s[14]<<6|s[15]>>>26,H=s[15]<<6|s[14]>>>26,C=s[25]<<11|s[24]>>>21,R=s[24]<<11|s[25]>>>21,it=s[34]<<15|s[35]>>>17,ot=s[35]<<15|s[34]>>>17,J=s[45]<<29|s[44]>>>3,z=s[44]<<29|s[45]>>>3,E=s[6]<<28|s[7]>>>4,O=s[7]<<28|s[6]>>>4,lt=s[17]<<23|s[16]>>>9,ft=s[16]<<23|s[17]>>>9,G=s[26]<<25|s[27]>>>7,K=s[27]<<25|s[26]>>>7,x=s[36]<<21|s[37]>>>11,A=s[37]<<21|s[36]>>>11,ct=s[47]<<24|s[46]>>>8,at=s[46]<<24|s[47]>>>8,Y=s[8]<<27|s[9]>>>5,Z=s[9]<<27|s[8]>>>5,I=s[18]<<20|s[19]>>>12,j=s[19]<<20|s[18]>>>12,pt=s[29]<<7|s[28]>>>25,_t=s[28]<<7|s[29]>>>25,Q=s[38]<<8|s[39]>>>24,V=s[39]<<8|s[38]>>>24,T=s[48]<<14|s[49]>>>18,S=s[49]<<14|s[48]>>>18,s[0]=v^~w&C,s[1]=B^~L&R,s[10]=E^~I&N,s[11]=O^~j&P,s[20]=D^~$&G,s[21]=U^~H&K,s[30]=Y^~tt&nt,s[31]=Z^~et&st,s[40]=ut^~lt&pt,s[41]=ht^~ft&_t,s[2]=w^~C&x,s[3]=L^~R&A,s[12]=I^~N&M,s[13]=j^~P&F,s[22]=$^~G&Q,s[23]=H^~K&V,s[32]=tt^~nt&it,s[33]=et^~st&ot,s[42]=lt^~pt&kt,s[43]=ft^~_t&yt,s[4]=C^~x&T,s[5]=R^~A&S,s[14]=N^~M&J,s[15]=P^~F&z,s[24]=G^~Q&W,s[25]=K^~V&X,s[34]=nt^~it&ct,s[35]=st^~ot&at,s[44]=pt^~kt&mt,s[45]=_t^~yt&vt,s[6]=x^~T&v,s[7]=A^~S&B,s[16]=M^~J&E,s[17]=F^~z&O,s[26]=Q^~W&D,s[27]=V^~X&U,s[36]=it^~ct&Y,s[37]=ot^~at&Z,s[46]=kt^~mt&ut,s[47]=yt^~vt&ht,s[8]=T^~v&w,s[9]=S^~B&L,s[18]=J^~E&I,s[19]=z^~O&j,s[28]=W^~D&$,s[29]=X^~U&H,s[38]=ct^~Y&tt,s[39]=at^~Z&et,s[48]=mt^~ut&lt,s[49]=vt^~ht&ft,s[0]^=l[r],s[1]^=l[r+1]};if(o)t.exports=v;else for(i=0;i<B.length;++i)n[B[i]]=v[B[i]]}()}).call(this,r(38),r(30))},1107:function(t,e,r){const n=r(554),o=r(1108);function c(t,e){return new Promise(r=>{const n=setTimeout(r,t);n.unref&&e&&n.unref()})}t.exports=class extends o{constructor(t={}){if(!t.provider)throw new Error("PollingBlockTracker - no provider specified.");const e=t.pollingInterval||2e4,r=t.retryTimeout||e/10,n=void 0===t.keepEventLoopActive||t.keepEventLoopActive,o=t.setSkipCacheFlag||!1;super(Object.assign({blockResetDuration:e},t)),this._provider=t.provider,this._pollingInterval=e,this._retryTimeout=r,this._keepEventLoopActive=n,this._setSkipCacheFlag=o}async checkForLatestBlock(){return await this._updateLatestBlock(),await this.getLatestBlock()}_start(){this._performSync().catch(t=>this.emit("error",t))}async _performSync(){for(;this._isRunning;)try{await this._updateLatestBlock(),await c(this._pollingInterval,!this._keepEventLoopActive)}catch(t){const e=new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${t.stack}`);try{this.emit("error",e)}catch(t){console.error(e)}await c(this._retryTimeout,!this._keepEventLoopActive)}}async _updateLatestBlock(){const t=await this._fetchLatestBlock();this._newPotentialLatest(t)}async _fetchLatestBlock(){const t={jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]};this._setSkipCacheFlag&&(t.skipCache=!0);const e=await n(e=>this._provider.sendAsync(t,e))();if(e.error)throw new Error(`PollingBlockTracker - encountered error fetching block:\n${e.error}`);return e.result}}},1108:function(t,e,r){r(555),r(554);const n=r(1110),o=(t,e)=>t+e,c=["sync","latest"];function h(t){return Number.parseInt(t,16)}t.exports=class extends n{constructor(t={}){super(),this._blockResetDuration=t.blockResetDuration||2e4,this._blockResetTimeout,this._currentBlock=null,this._isRunning=!1,this._onNewListener=this._onNewListener.bind(this),this._onRemoveListener=this._onRemoveListener.bind(this),this._resetCurrentBlock=this._resetCurrentBlock.bind(this),this._setupInternalEvents()}isRunning(){return this._isRunning}getCurrentBlock(){return this._currentBlock}async getLatestBlock(){if(this._currentBlock)return this._currentBlock;return await new Promise(t=>this.once("latest",t))}removeAllListeners(t){t?super.removeAllListeners(t):super.removeAllListeners(),this._setupInternalEvents(),this._onRemoveListener()}_start(){}_end(){}_setupInternalEvents(){this.removeListener("newListener",this._onNewListener),this.removeListener("removeListener",this._onRemoveListener),this.on("newListener",this._onNewListener),this.on("removeListener",this._onRemoveListener)}_onNewListener(t,e){c.includes(t)&&this._maybeStart()}_onRemoveListener(t,e){this._getBlockTrackerEventCount()>0||this._maybeEnd()}_maybeStart(){this._isRunning||(this._isRunning=!0,this._cancelBlockResetTimeout(),this._start())}_maybeEnd(){this._isRunning&&(this._isRunning=!1,this._setupBlockResetTimeout(),this._end())}_getBlockTrackerEventCount(){return c.map(t=>this.listenerCount(t)).reduce(o)}_newPotentialLatest(t){const e=this._currentBlock;e&&h(t)<=h(e)||this._setCurrentBlock(t)}_setCurrentBlock(t){const e=this._currentBlock;this._currentBlock=t,this.emit("latest",t),this.emit("sync",{oldBlock:e,newBlock:t})}_setupBlockResetTimeout(){this._cancelBlockResetTimeout(),this._blockResetTimeout=setTimeout(this._resetCurrentBlock,this._blockResetDuration),this._blockResetTimeout.unref&&this._blockResetTimeout.unref()}_cancelBlockResetTimeout(){clearTimeout(this._blockResetTimeout)}_resetCurrentBlock(){this._currentBlock=null}}},523:function(t,e,r){(function(t){var n=r(1034).keccak_256,o=r(1035);function c(t){return t?o.toUnicode(t,{useStd3ASCII:!0,transitional:!1}):t}e.hash=function(e){for(var r="",i=0;i<32;i++)r+="00";if(name=c(e),name){var o=name.split(".");for(i=o.length-1;i>=0;i--){var h=n(o[i]);r=n(new t(r+h,"hex"))}}return"0x"+r},e.normalize=c}).call(this,r(12).Buffer)},554:function(t,e,r){"use strict";const n=(t,e)=>function(){const r=e.promiseModule,n=new Array(arguments.length);for(let i=0;i<arguments.length;i++)n[i]=arguments[i];return new r((r,o)=>{e.errorFirst?n.push((function(t,n){if(e.multiArgs){const e=new Array(arguments.length-1);for(let i=1;i<arguments.length;i++)e[i-1]=arguments[i];t?(e.unshift(t),o(e)):r(e)}else t?o(t):r(n)})):n.push((function(t){if(e.multiArgs){const t=new Array(arguments.length-1);for(let i=0;i<arguments.length;i++)t[i]=arguments[i];r(t)}else r(t)})),t.apply(this,n)})};t.exports=(t,e)=>{e=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:!0,promiseModule:Promise},e);const filter=t=>{const r=pattern=>"string"==typeof pattern?t===pattern:pattern.test(t);return e.include?e.include.some(r):!e.exclude.some(r)};let r;r="function"==typeof t?function(){return e.excludeMain?t.apply(this,arguments):n(t,e).apply(this,arguments)}:Object.create(Object.getPrototypeOf(t));for(const o in t){const c=t[o];r[o]="function"==typeof c&&filter(o)?n(c,e):c}return r}},789:function(t,e){t.exports=function(){if(this)return this;Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0});try{return __global__}finally{delete Object.prototype.__global__}}()}}]);