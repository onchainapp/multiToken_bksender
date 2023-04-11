(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1204:function(e,t,r){"use strict";r.r(t);r(53);var n,o,c=r(2),m={tronWeb:function(e,t){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,m=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=m.length>0&&void 0!==m[0]?m[0]:"01",window.tronWebForMultiToken?n=window.tronWebForMultiToken:(o=e.tronWeb,console.info(o),o.providers.HttpProvider,(c=new o("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io",r)).setHeader({"TRON-PRO-API-KEY":"3685eadb-8d01-4ce0-87cb-14b6d5db3ec0"}),window.tronWebForMultiToken=c,n=c),t.abrupt("return",n);case 3:case"end":return t.stop()}}),t)})))}},d={saveTronWeb:(o=Object(c.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state,n=t.commit,o=r.tronWeb,console.info("tronWeb load with: ",o),n("SAVE_TRON_WEB",o);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),saveSolanaWeb3:(n=Object(c.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state,n=t.commit,o=r.solanaWeb3,n("SAVE_SOLANA_WEB3",o);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)})};t.default={namespaced:!0,state:function(){return{tronWeb:void 0,tronWebProvider:void 0,solanaWeb3:void 0}},getters:m,mutations:{SAVE_TRON_WEB:function(e,t){e.tronWeb=t},SAVE_SOLANA_WEB3:function(e,t){e.solanaWeb3=t}},actions:d}},1205:function(e,t,r){"use strict";r.r(t);r(102),r(103),r(41),r(53);var n,o,c,m,d,l,f,h,k=r(2),v=(r(4),r(214),r(250),r(0)),T=(r(230),r(144),{bulksendEther:(h=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h,k,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,t.getters,t.rootState,t.rootGetters,n=t.dispatch,t.commit,o=r.uniqueId,c=r.estimateGas,m=void 0===c?0:c,d=r.tokenAddress,l=r.decimals,f=r.addresses,h=r.amounts,k=r.nonce,e.next=4,n("_sendEther",{uniqueId:o,tokenAddress:d,estimateGas:m,decimals:l,addresses:f,amounts:h,nonce:k});case 4:if(null==(v=e.sent)||null==v){e.next=14;break}return console.info("txHash",v),$nuxt.$store.commit("bulksender/ADD_TX",v),$nuxt.$store.dispatch("common/updateBulkSentStatus",{status:0,txHash:v,uniqueId:o},{root:!0}),n("checkBulksenderTransactionStatus",{uniqueId:o,txHash:v}),e.abrupt("return",!0);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)}),bulksendToken:(f=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h,k,v,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,t.getters,t.rootState,t.rootGetters,n=t.dispatch,t.commit,o=r.uniqueId,c=r.estimateGas,m=void 0===c?0:c,d=r.tokenAddress,l=r.decimals,f=r.addresses,h=r.amounts,r.tokenIds,k=r.nonce,v=void 0===k?0:k,e.next=4,n("_sendToken",{uniqueId:o,tokenAddress:d,estimateGas:m,decimals:l,addresses:f,amounts:h,nonce:v});case 4:if(null==(T=e.sent)||null==T){e.next=14;break}return console.info("txHash",T),$nuxt.$store.commit("bulksender/ADD_TX",T),$nuxt.$store.dispatch("common/updateBulkSentStatus",{status:0,txHash:T,uniqueId:o},{root:!0}),n("checkBulksenderTransactionStatus",{uniqueId:o,txHash:T}),e.abrupt("return",!0);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)}),_sendEther:(l=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,t.getters,o=t.rootState,c=t.rootGetters,t.dispatch,t.commit,r.uniqueId,r.tokenAddress,r.estimateGas,m=r.decimals,d=r.addresses,l=r.amounts,r.nonce,f=n.checkSimpleTimes,h=function(time){return new Promise((function(e){return setTimeout(e,time)}))},e.abrupt("return",new Promise((function(e,t){var r=function(){var n=Object(k.a)(regeneratorRuntime.mark((function n(k){var T,x,w,E,A,S,y,R,O,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T=k.retryAttempt,x=void 0===T?1:T,x++,n.prev=2,n.next=5,h(500);case 5:return o.tron.metamask.ethAccount,w=Object(v.a)("0"),l.forEach((function(e){var t=Object(v.a)(e).times(Object(v.a)(10).pow(parseInt(m)));w=w.plus(t)})),E=w.toString(10),A=d[0],n.next=12,c["tron/metamask/tronWeb"]();case 12:return S=n.sent,n.next=15,S.transactionBuilder.sendTrx(A,E);case 15:return y=n.sent,n.next=18,S.trx.sign(y);case 18:return R=n.sent,console.log("signed =>",R),n.next=22,S.trx.sendRawTransaction(R);case 22:O=n.sent,console.info(O),e(O.txid),n.next=31;break;case 27:n.prev=27,n.t0=n.catch(2),_=n.t0.code&&402==n.t0.code||"Confirmation declined by user"==n.t0,x>=f||_?($nuxt.$store.commit("bulksender/ADD_FAILED_TXS",""),_?e("Confirmation declined by user"):t(n.t0)):r({retryAttempt:x});case 31:case"end":return n.stop()}}),n,null,[[2,27]])})));return function(e){return n.apply(this,arguments)}}();r({})})));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return l.apply(this,arguments)}),checkBulksenderTransactionStatus:(d=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state,t.getters,n=t.rootGetters,t.rootState,o=t.dispatch,t.commit,c=r.uniqueId,m=r.txHash,d=n["metamask/networkConfig"].smartContractShortPollTime,e.prev=3,"Confirmation declined by user"!=m){e.next=10;break}$nuxt.$store.commit("bulksender/ADD_FAILED_TXS",""),$nuxt.$store.dispatch("common/updateBulkSentStatus",{status:-2,txHash:m,uniqueId:c},{root:!0}),e.next=16;break;case 10:return e.next=12,tronWeb.trx.getTransaction(m);case 12:l=e.sent,console.info(l),f=0,Array.isArray(l.ret)?("SUCCESS"==l.ret[0].contractRet?(f=1,$nuxt.$store.commit("bulksender/ADD_SUCCESS_TXS",m)):(f=-2,$nuxt.$store.commit("bulksender/ADD_FAILED_TXS",m)),$nuxt.$store.dispatch("common/updateBulkSentStatus",{status:f,txHash:m,uniqueId:c},{root:!0})):setTimeout((function(){o("checkBulksenderTransactionStatus",{uniqueId:c,txHash:m})}),1e3*d);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.info("checking error",e.t0),setTimeout((function(){o("checkBulksenderTransactionStatus",{uniqueId:c,txHash:m})}),1e3*d);case 22:case"end":return e.stop()}}),e,null,[[3,18]])}))),function(e,t){return d.apply(this,arguments)}),_sendToken:(m=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,t.getters,o=t.rootState,c=t.rootGetters,t.dispatch,t.commit,r.uniqueId,m=r.tokenAddress,r.estimateGas,d=r.decimals,l=r.addresses,f=r.amounts,r.nonce,h=n.checkSimpleTimes,T=function(time){return new Promise((function(e){return setTimeout(e,time)}))},e.abrupt("return",new Promise((function(e,t){var r=function(){var x=Object(k.a)(regeneratorRuntime.mark((function k(x){var w,E,A,S,y,R,O,_;return regeneratorRuntime.wrap((function(k){for(;;)switch(k.prev=k.next){case 0:return w=x.retryAttempt,E=void 0===w?1:w,E++,k.prev=2,k.next=5,T(500);case 5:return o.tron.metamask.ethAccount,A=Object(v.a)("0"),f.forEach((function(e){var t=Object(v.a)(e).times(Object(v.a)(10).pow(parseInt(d)));A=A.plus(t)})),S=A.toString(10),y=l[0],k.next=12,c["tron/metamask/tronWeb"]();case 12:return k.sent,k.next=15,c["tron/token/tokenInstance"](m);case 15:return R=k.sent,k.next=18,R.transfer(y,S).send({callValue:0,feeLimit:n.feeLimit});case 18:O=k.sent,e(O),k.next=26;break;case 22:k.prev=22,k.t0=k.catch(2),_=k.t0.code&&402==k.t0.code||"Confirmation declined by user"==k.t0,E>=h||_?($nuxt.$store.commit("bulksender/ADD_FAILED_TXS",""),_?e("Confirmation declined by user"):t(k.t0)):r({retryAttempt:E});case 26:case"end":return k.stop()}}),k,null,[[2,22]])})));return function(e){return x.apply(this,arguments)}}();r({})})));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return m.apply(this,arguments)}),estimateGasForPerTransferUsedBulksenderForSingle:(c=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h,k,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,t.getters,t.rootState,t.rootGetters,o=t.dispatch,t.commit,c=r.tokenAddress,m=r.testAddresses,d=r.testBalances,r.testTokenIds,l=r.decimals,e.prev=2,f=m,h=d,"0x0000000000000000000000000000000000000000"!=c){e.next=10;break}return e.next=8,o("estimateGasForPerEtherTransferForSingle",{tokenAddress:c,addresses:f,balances:h,decimals:l});case 8:return k=e.sent,e.abrupt("return",k+n.etherDelegateCallExtraGas);case 10:return e.next=12,o("estimateGasForPerTokenTransferForSingle",{tokenAddress:c,addresses:f,balances:h,decimals:l});case 12:return v=e.sent,e.abrupt("return",v);case 16:if(e.prev=16,e.t0=e.catch(2),console.info("estimateGasForPerTransferUsedBulksender",e.t0),"0x0000000000000000000000000000000000000000"!=c){e.next=23;break}return e.abrupt("return",2e3);case 23:return e.abrupt("return",15e4);case 24:return e.abrupt("return",-1);case 25:case"end":return e.stop()}}),e,null,[[2,16]])}))),function(e,t){return c.apply(this,arguments)}),estimateGasForPerTokenTransferForSingle:(o=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,t.getters,o=t.rootState,c=t.rootGetters,t.dispatch,t.commit,m=r.tokenAddress,d=r.addresses,l=r.balances,f=r.decimals,h=n.checkSimpleTimes+2,e.abrupt("return",new Promise((function(e,t){var r=function(){var T=Object(k.a)(regeneratorRuntime.mark((function k(T){var x,w,E,A,S,y,R,O,_,I,C,j;return regeneratorRuntime.wrap((function(k){for(;;)switch(k.prev=k.next){case 0:return x=T.retryAttempt,w=void 0===x?0:x,w++,k.prev=2,E=o.tron.metamask.ethAccount,A=Object(v.a)("0"),l.forEach((function(e){var t=Object(v.a)(e).times(Object(v.a)(10).pow(parseInt(f)));A=A.plus(t)})),S=A.toString(10),y=d[0],R=[{type:"address",value:y},{type:"uint256",value:S}],O={callValue:0,feeLimit:n.feeLimit},_="transfer(address,uint256)",k.next=13,c["tron/metamask/tronWeb"]();case 13:return I=k.sent,k.next=16,I.transactionBuilder.triggerConstantContract(m,_,O,R,E);case 16:C=k.sent,j=C.energy_used,console.info("baseGas",j),e(j),k.next=26;break;case 22:k.prev=22,k.t0=k.catch(2),console.info("estimateGasForPerTokenTransfer",k.t0),w>=h?t(k.t0):r({retryAttempt:w});case 26:case"end":return k.stop()}}),k,null,[[2,22]])})));return function(e){return T.apply(this,arguments)}}();r({})})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),estimateGasForPerEtherTransferForSingle:(n=Object(k.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,t.getters,o=t.rootState,c=t.rootGetters,t.dispatch,t.commit,r.tokenAddress,r.addresses,m=r.balances,d=r.decimals,l=n.checkSimpleTimes,e.abrupt("return",new Promise((function(e,t){var r=function(){var n=Object(k.a)(regeneratorRuntime.mark((function n(f){var h,k,T;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h=f.retryAttempt,k=void 0===h?0:h,k++,n.prev=2,o.metamask.ethAccount,T=Object(v.a)("0"),m.forEach((function(e){var t=Object(v.a)(e).times(Object(v.a)(10).pow(parseInt(d)));T=T.plus(t)})),T.toString(10),n.next=9,c["tron/metamask/tronWeb"]();case 9:n.sent,e(costForPerTransfer),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),k>=l?t(n.t0):r({retryAttempt:k});case 17:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e){return n.apply(this,arguments)}}();r({})})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)})});t.default={namespaced:!0,state:function(){return{feeLimit:1e8,checkSimpleTimes:2}},getters:{},mutations:{},actions:T}},1206:function(e,t,r){"use strict";r.r(t);r(137),r(102),r(103),r(41),r(53);var n,o,c,m,d,l,f,h=r(2),k=r(4),v=r(52),T=r(0),x=function(e){var t=e.newAccount;(0,e.commit)("IDENTIFY",t)},w={netId:function(e){return e.netId},isApiValible:function(e){return 1==e.netId},networkName:function(e){return v.a["netId".concat(e.netId)].networkName},currency:function(e){return v.a["netId".concat(e.netId)].currencyName},networkConfig:function(e){return v.a["netId".concat(e.netId)]},getTronProvider:function(e,t,r,n){return Object(h.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.providerName,e.networkName,console.info(r),t.t0=r,t.next="PrivateKey"===t.t0?5:(t.t0,9);break;case 5:return t.next=7,n["web3Provider/tronWeb"](e.privateKey);case 7:return o=t.sent,t.abrupt("return",o);case 9:return t.abrupt("return",window.tronWeb);case 10:case"end":return t.stop()}}),t)})))},tronWeb:function(e,t){return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTronProvider();case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))}},E={IDENTIFY:function(e,t){e.ethAccount=t},SET_NET_ID:function(e,t){t=parseInt(t,10),e.netId=t},SET_BALANCE:function(e,t,r){e.balance=Object(T.a)(r).div(Object(T.a)(Math.pow(10,6))).toString(10)},SET_WALLET_STATE:function(e,t){e.walletState=t},SET_CHECKING_TIMES:function(e,t){e.checkingTimes=t},SET_PRIVATE_KEY:function(e,t){e.privateKey=t},SET_ADDRESS:function(e,t){var address=t.address,r=t.valid,n=void 0!==r&&r;e.address={value:address,valid:n}},SAVE_GAS_PRICE:function(e,t){e.gasPrice=t},SAVE_TOKENS:function(e,t){e.tokens=t},SET_TOKEN_ADDRESS:function(e,t){e.tokenAddress=t},SET_FETCHING:function(e,t){e.isFetching=t},SET_PROVIDER_NAME:function(e,t){e.providerName=t},SET_NETWORK_NAME:function(e,t){e.networkName=t},SAVE_TRC10_TOKENS:function(e,t){e.trc10Tokens=t},SAVE_ETH_PRICE:function(e,t){e.ethPrice=t},SET_ETH_PRICE_LOADED:function(e,t){e.ethPriceLoaded=t},SAVE_MAX_CPU_TIME_ONE_TX:function(e,t){e.maxCpuTimeOfOneTx=t},SAVE_ENERGY_FEE:function(e,t){e.energyFee=t}},A={setAddress:function(e,t){e.dispatch;(0,e.commit)("SET_ADDRESS",{address:t.address,valid:!0})},setTokenAddress:function(e,t){e.dispatch;(0,e.commit)("SET_TOKEN_ADDRESS",t.address)},onNetworkChanged:function(e,t){(0,e.commit)("SET_NET_ID",t.netId)},getBalance:function(e){var t=e.dispatch,r=(e.commit,e.state),n=e.getters,o=n.networkConfig.rpcCallRetryAttempt;return new Promise((function(e,c){var m=function(){var c=Object(h.a)(regeneratorRuntime.mark((function c(d){var l,f,h,k,v;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l=d.retryAttempt,f=void 0===l?1:l,f++,c.prev=2,c.next=5,n.tronWeb();case 5:return h=c.sent,console.info("account",r.ethAccount),c.next=9,h.trx.getBalance(r.ethAccount);case 9:k=c.sent,console.info("balance",k),k.hasOwnProperty("remaining")&&(k=k.remaining),k.hasOwnProperty("balance")&&(k=k.balance),e(balance1),c.next=26;break;case 16:if(c.prev=16,c.t0=c.catch(2),!(f>=o)){c.next=25;break}return c.next=21,t("getBalanceByAPI");case 21:v=c.sent,e(v),c.next=26;break;case 25:m({retryAttempt:f});case 26:case"end":return c.stop()}}),c,null,[[2,16]])})));return function(e){return c.apply(this,arguments)}}();m({})}))},getBalanceByAPI:function(e){e.dispatch,e.commit;var t=e.state,r=e.getters.networkConfig.rpcCallRetryAttempt;return new Promise((function(e,n){var o=function(){var c=Object(h.a)(regeneratorRuntime.mark((function c(m){var d,l,f,h,k,v;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return d=m.retryAttempt,l=void 0===d?1:d,l++,c.prev=2,f="https://apilist.tronscan.org/api/account?address="+t.ethAccount,c.next=6,fetch(f);case 6:if(h=c.sent,k="0",200!=h.status){c.next=17;break}return c.next=11,h.json();case 11:v=c.sent,k=v.balance,console.info("balance",k),e(k),c.next=18;break;case 17:throw Error("Fetch tokens failed");case 18:e(k),c.next=24;break;case 21:c.prev=21,c.t0=c.catch(2),l>=r?n(c.t0):o({retryAttempt:l});case 24:case"end":return c.stop()}}),c,null,[[2,21]])})));return function(e){return c.apply(this,arguments)}}();o({})}))},getAccount:function(e){e.dispatch,e.state;var t=e.getters,r=t.networkConfig.rpcCallRetryAttempt;return new Promise((function(e,n){var o=function(){var c=Object(h.a)(regeneratorRuntime.mark((function c(m){var d,l,f,h;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return d=m.retryAttempt,l=void 0===d?1:d,l++,c.prev=2,c.next=5,t.tronWeb();case 5:return f=c.sent,c.next=8,f.trx.getAccount();case 8:h=c.sent,e(h),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(2),l>=r?n(c.t0):o({retryAttempt:l});case 15:case"end":return c.stop()}}),c,null,[[2,12]])})));return function(e){return c.apply(this,arguments)}}();o({})}))},getChainParams:function(e){e.dispatch,e.state;var t=e.getters,r=e.commit,n=t.networkConfig.rpcCallRetryAttempt;return new Promise((function(e,o){var c=function(){var m=Object(h.a)(regeneratorRuntime.mark((function m(d){var l,f,h,k,v;return regeneratorRuntime.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:return l=d.retryAttempt,f=void 0===l?1:l,f++,m.prev=2,m.next=5,t.tronWeb();case 5:return h=m.sent,m.next=8,h.trx.getChainParameters();case 8:k=m.sent,v={},k.forEach((function(e,i){v[e.key]=e.value})),r("SAVE_MAX_CPU_TIME_ONE_TX",parseInt(v.getMaxCpuTimeOfOneTx*Math.pow(10,4)*1)),r("SAVE_ENERGY_FEE",v.getEnergyFee),e(k),m.next=19;break;case 16:m.prev=16,m.t0=m.catch(2),f>=n?o(m.t0):c({retryAttempt:f});case 19:case"end":return m.stop()}}),m,null,[[2,16]])})));return function(e){return m.apply(this,arguments)}}();c({})}))},askPermission:function(e,t){var r=e.commit,n=e.dispatch,o=e.getters,c=e.state,m=t.providerName,d=t.networkName,l=t.privateKey,f=void 0===l?"01":l,v=o.networkConfig,w=(v.smartContractPollTime,v.rpcCallRetryAttempt,c.checkingTimes);return new Promise(function(){var e=Object(h.a)(regeneratorRuntime.mark((function e(t,c){var l,h,v,E,A,S,y,R,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r("SET_PROVIDER_NAME",m),r("SET_NETWORK_NAME",d),r("SET_PRIVATE_KEY",f),e.prev=3,w++,r("SET_CHECKING_TIMES",w),window.tronWebForMultiToken=void 0,e.next=9,o.getTronProvider();case 9:return l=e.sent,console.info("tronWeb",l),!1,!1,null==l?w>=1&&(r("SET_WALLET_STATE",-1),c(new Error("Please Install TronLink or TronPay"))):(!0,1==l.ready?!0:w>=1&&(r("SET_WALLET_STATE",-2),r("SET_CHECKING_TIMES",0),c(new Error("locked TronLink or TronPay")))),e.next=16,n("getAccount");case 16:return h=e.sent,v=l.address.fromHex(h.address),console.info("account",v),r("IDENTIFY",v),n("setAddress",{address:v}),E=h.balance,console.info("balance",E),E=Object(k.hexToNumberString)(E),n("saveUserBalance",{balance:E}),A=1,S=l.fullNode.host,y=l.solidityNode.host,R=l.eventServer.host,(S.indexOf("shasta")>-1||y.indexOf("shasta")>-1||R.indexOf("shasta")>-1)&&(A=2),n("onNetworkChanged",{netId:A}),l.on&&l.on("addressChanged",(function(e){return x({dispatch:n,commit:r,newAccount:e})})),e.next=34,n("fetchTokenList",{});case 34:return O=Object(T.a)(E).div(Object(T.a)(10).pow(6)).toString(10),$nuxt.$store.dispatch("common/syncCommonBalance",{balance:O},{root:!0}),e.next=38,n("getChainParams");case 38:$nuxt.$store.dispatch("common/initBaseParams",{},{root:!0});try{n("fetchCoinPrice")}catch(e){}t({netId:A,ethAccount:v}),e.next=48;break;case 43:e.prev=43,e.t0=e.catch(3),console.info(e.t0),w>=1?(r("SET_WALLET_STATE",-3),c(new Error("Not install and locked TronLink or TronPay"))):setTimeout((function(){return n("askPermission",{providerName:m,networkName:d})}),100);case 48:case"end":return e.stop()}}),e,null,[[3,43]])})));return function(t,r){return e.apply(this,arguments)}}())},saveUserBalance:function(e,t){(0,e.commit)("SET_BALANCE",t.balance)},fetchCoinPrice:(f=Object(h.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.rootState,n=t.commit,t.dispatch,o=t.rootGetters,t.state,(c=o["metamask/networkConfig"]).smartContractPollTime,m=c.extraFeeOracle,d=c.supportExtraFee,r.metamask.netId,d){e.next=6;break}return n("SET_ETH_PRICE_LOADED",!0),e.abrupt("return");case 6:return e.abrupt("return",new Promise((function(e,t){var r=function(){var o=Object(h.a)(regeneratorRuntime.mark((function o(c){var d,l,f,h,k,v,T;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return d=c.retryAttempt,l=void 0===d?1:d,l++,o.prev=2,f=new AbortController,h=setTimeout((function(){return f.abort()}),5e3),o.next=7,fetch(m.coinPriceUrl,{signal:f.signal});case 7:if(200!==(k=o.sent).status){o.next=20;break}return o.next=11,k.json();case 11:v=o.sent,T=0,v.hasOwnProperty(m.coinId)&&(T=v[m.coinId].usd),clearTimeout(h),n("SAVE_ETH_PRICE",T),n("SET_ETH_PRICE_LOADED",!0),e(T),o.next=22;break;case 20:throw clearTimeout(h),Error("Fetch coin price failed");case 22:o.next=27;break;case 24:o.prev=24,o.t0=o.catch(2),l>=2?t(o.t0):r({retryAttempt:l});case 27:case"end":return o.stop()}}),o,null,[[2,24]])})));return function(e){return o.apply(this,arguments)}}();r({})})));case 8:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)}),fetchTokenList:(l=Object(h.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h,k,v,x,w,E,A,S,y,R,O,_,I;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,o=t.commit,c=t.dispatch,m=t.rootGetters,t.state,d=r.oracleIndex,l=void 0===d?0:d,(f=m["metamask/networkConfig"]).smartContractPollTime,f.gasPrice,h=f.tokenOracleUrls,f.trc10TokenListOracleUrls,k=f.currencyName,v=f.networkName,x=n.tron.metamask,w=x.netId,x.isFetching,E=x.ethAccount,x.tokens,A=x.balance,S=x.ethCoinName,w!=w){e.next=41;break}if(e.prev=5,null!=E){e.next=10;break}throw o("SET_WALLET_STATE",-4),l=20,Error("account not actived");case 10:return y=h[l%h.length],y+=E,e.next=14,fetch(y);case 14:if(200!==(R=e.sent).status){e.next=31;break}return e.next=18,R.json();case 18:if(!(O=e.sent).trc20token_balances){e.next=28;break}_=[],I=O.trc20token_balances,_.push({symbol:k,name:v+S,balance:Object(T.a)(A).times(Object(T.a)(10).pow(6)).toString(10),displayBalance:A,contractAddress:"0x0000000000000000000000000000000000000000",decimals:"6",isETH:!0}),I.forEach((function(e){var t=e.tokenName,r=e.tokenDecimal,symbol=e.tokenAbbr,n=e.balance,o=e.tokenId;if("_"!=o&&(n=Object(T.a)(n).div(Object(T.a)(10).pow(parseInt(r))).toNumber())>0){var c={name:t,symbol:symbol,decimals:r,balance:n,displayBalance:n.toString(10),contractAddress:o};_.push(c)}})),o("SAVE_TOKENS",_),o("SET_FETCHING",!1),e.next=29;break;case 28:throw Error("Fetch tokens failed");case 29:e.next=32;break;case 31:throw Error("Fetch tokens failed");case 32:e.next=39;break;case 34:e.prev=34,e.t0=e.catch(5),console.error(e.t0),++l<=20?c("fetchTokenList",{oracleIndex:l}):((_=[]).push({symbol:k,name:v+S,balance:Object(T.a)(A).times(Object(T.a)(10).pow(6)).toString(10),displayBalance:A,contractAddress:"0x0000000000000000000000000000000000000000",decimals:"6",isETH:!0}),o("SAVE_TOKENS",_),o("SET_FETCHING",!1));case 39:e.next=46;break;case 41:console.info(h),(_=[]).push({symbol:k,name:v+S,balance:Object(T.a)(A).times(Object(T.a)(10).pow(6)).toString(10),displayBalance:A,contractAddress:"0x0000000000000000000000000000000000000000",decimals:"6",isETH:!0}),o("SAVE_TOKENS",_),o("SET_FETCHING",!1);case 46:case"end":return e.stop()}}),e,null,[[5,34]])}))),function(e,t){return l.apply(this,arguments)}),fetchTrc10TokenList:(d=Object(h.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h,k,v,T,x,w,E,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,o=t.commit,c=t.dispatch,m=t.rootGetters,t.state,d=r.oracleIndex,l=void 0===d?0:d,(f=m["metamask/networkConfig"]).smartContractPollTime,f.gasPrice,f.tokenOracleUrls,h=f.trc10TokenListOracleUrls,f.trc10StaticTokenDataOracleUrls,f.currencyName,f.networkName,k=n.metamask,v=k.netId,k.isFetching,k.ethAccount,k.tokens,k.balance,k.ethCoinName,v!=v){e.next=35;break}return e.prev=5,e.next=8,c("fetchTrc10TokenListFromGithub",{});case 8:return T=e.sent,x=h[l%h.length],x+=T.length.toString(),console.info(x),e.next=14,fetch(x);case 14:if(200!==(w=e.sent).status){e.next=22;break}return e.next=18,w.json();case 18:(E=e.sent).tokens&&(T=T.concat(E.tokens)),e.next=23;break;case 22:throw Error("Fetch trc10 tokens failed");case 23:A={},T.forEach((function(e){var t={name:e.name,symbol:e.abbr,decimals:e.decimal,contractAddress:e.tokenId};A[e.tokenId]=t})),o("SAVE_TRC10_TOKENS",A),e.next=33;break;case 28:e.prev=28,e.t0=e.catch(5),console.error(e.t0),++l<=20&&c("fetchTrc10TokenList",{oracleIndex:l});case 33:e.next=35;break;case 35:case"end":return e.stop()}}),e,null,[[5,28]])}))),function(e,t){return d.apply(this,arguments)}),fetchTrc10TokenListFromGithub:(m=Object(h.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,m,d,l,f,h,k,v,T,x,w,E;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,t.commit,o=t.dispatch,c=t.rootGetters,t.state,m=r.oracleIndex,d=void 0===m?0:m,(l=c["metamask/networkConfig"]).smartContractPollTime,f=l.trc10StaticTokenDataOracleUrls,l.currencyName,l.networkName,h=n.metamask,k=h.netId,h.isFetching,h.ethAccount,h.tokens,h.balance,h.ethCoinName,k!=k){e.next=39;break}return e.prev=5,e.next=8,o("common/getCachedTrc10Tokens",{},{root:!0});case 8:if(!(v=e.sent).length){e.next=11;break}return e.abrupt("return",v);case 11:return T=f[d%f.length],e.next=14,fetch(T);case 14:if(200!==(x=e.sent).status){e.next=29;break}return e.next=18,x.json();case 18:if(!(w=e.sent).tokens){e.next=26;break}return E=w.tokens,e.next=23,o("common/saveTrc10Tokens",{trc10Tokens:E},{root:!0});case 23:return e.abrupt("return",E);case 26:throw Error("Fetch trc10 tokens failed");case 27:e.next=30;break;case 29:throw Error("Fetch trc10 tokens failed");case 30:e.next=37;break;case 32:e.prev=32,e.t0=e.catch(5),console.error(e.t0),++d<=20&&o("fetchTrc10TokenListFromGithub",{oracleIndex:d});case 37:e.next=39;break;case 39:case"end":return e.stop()}}),e,null,[[5,32]])}))),function(e,t){return m.apply(this,arguments)}),fetchGasPrice:(c=Object(h.a)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rootState,t.commit,t.dispatch,t.rootGetters,t.state,r.oracleIndex;case 2:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)}),getTransactionReceipt:(o=Object(h.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,t.getters,t.rootGetters,t.rootState,n=t.dispatch,t.commit,o=r.txHash,e.abrupt("return",new Promise((function(e,t){var r=function(){var c=Object(h.a)(regeneratorRuntime.mark((function c(m){var d,l,f,h;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return d=m.retryAttempt,l=void 0===d?1:d,l++,c.prev=2,f={method:"eth_getTransactionReceipt",params:[o]},c.next=6,n("metamask/sendAsync",f,{root:!0});case 6:h=c.sent,e(h),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(2),l>=2?t(c.t0):r({retryAttempt:l});case 13:case"end":return c.stop()}}),c,null,[[2,10]])})));return function(e){return c.apply(this,arguments)}}();r({})})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),getTransactionCount:(n=Object(h.a)(regeneratorRuntime.mark((function e(t,r){var n,address;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,t.getters,t.rootGetters,t.rootState,n=t.dispatch,t.commit,address=r.address,e.abrupt("return",new Promise((function(e,t){var r=function(){var o=Object(h.a)(regeneratorRuntime.mark((function o(c){var m,d,l,f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return m=c.retryAttempt,d=void 0===m?1:m,d++,o.prev=2,l={method:"eth_getTransactionCount",params:[address,"latest"]},o.next=6,n("metamask/sendAsync",l,{root:!0});case 6:f=o.sent,e(f),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),d>=2?t(o.t0):r({retryAttempt:d});case 13:case"end":return o.stop()}}),o,null,[[2,10]])})));return function(e){return o.apply(this,arguments)}}();r({})})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)}),sendAsync:function(e,t){e.state;var r=e.getters,n=t.method,o=t.from,c=t.params;switch(r.netId){case 77:case 99:break;case 100:o=void 0}return new Promise(function(){var e=Object(h.a)(regeneratorRuntime.mark((function e(t,m){var d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getEthereumProvider();case 2:d=e.sent,console.log("sendAsync `method, from, params`",n,o,c);try{d.sendAsync({method:n,params:c,jsonrpc:"2.0",from:o},(function(e,r){e&&m(e),r.error?m(r.error):t(r.result)}))}catch(e){d.send({method:n,params:c,jsonrpc:"2.0",from:o},(function(e,r){e&&m(e),r.error?m(r.error):t(r.result)}))}case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())}};t.default={namespaced:!0,state:function(){return{ethAccount:null,netId:1,currency:"TRX",domainData:{},balance:"0",address:{value:null,valid:!1},gasPrice:{fast:1,low:1,standard:1},providerName:"",networkName:"",tokens:[],tokensForTestnet:[],tokenAddress:"",isFetching:!0,ethCoinName:" TRON Native Currency",walletState:1,checkingTimes:0,trc10Tokens:{},ethPrice:0,ethPriceLoaded:!1,chainParameters:{},maxCpuTimeOfOneTx:80*Math.pow(10,4),energyFee:280,privateKey:"01"}},getters:w,mutations:E,actions:A}},1207:function(e,t,r){"use strict";r.r(t);r(113),r(140);var n,o,c=r(6),m=(r(53),r(2)),d=(r(102),r(103),r(41),r(4)),l=r(214),f=r(250),h=r(0),k=(r(230),r(144),n={allowanceNumber:function(e){var t=0;try{t=Object(h.a)(e.allowance).gte(Object(h.a)(Math.pow(10,36)))?-1:Object(h.a)(e.allowance).div(Object(h.a)(10).pow(e.tokenSelected.decimals)).toString(10)}catch(e){console.info(e)}return t},balanceNumber:function(e){var t=0;try{t=Object(h.a)(e.balance).div(Object(h.a)(10).pow(e.tokenSelected.decimals)).toString(10)}catch(e){}return t},isNFTToken:function(e,t){return t.isERC721||t.isERC1155},isERC721:function(e){return 1==e.tokenType},isERC1155:function(e){return 2==e.tokenType},tokenInstance:function(e,t,r,n){return function(){var t=Object(m.a)(regeneratorRuntime.mark((function t(o){var c,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.metamask,m=c.ethAccount,c.netId,o||(o=e.address),t.next=4,n["metamask/web3"]();case 4:return d=t.sent,t.abrupt("return",new d.eth.Contract(l,o,{from:m}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Object(c.a)(n,"tokenInstance",(function(e,t,r,n){return function(){var t=Object(m.a)(regeneratorRuntime.mark((function t(address){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n["tron/metamask/tronWeb"]();case 2:return r=t.sent,address||(address=e.address),t.next=6,r.contract(l).at(address);case 6:return o=t.sent,t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),Object(c.a)(n,"tokenQueryInstance",(function(e,t,r,n){return Object(m.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n["tron/metamask/tronWeb"]();case 2:return t=e.sent,"THV1qeBo8RDrTvrqe48cF5KhcdMjqpNwWB",e.next=6,t.contract(f).at("THV1qeBo8RDrTvrqe48cF5KhcdMjqpNwWB");case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))})),n),v={fetchTokenInfo:(o=Object(m.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,t.commit,t.dispatch,o=t.getters,c=t.rootGetters,t.state,l=r.tokenAddress,f=c["metamask/networkConfig"].rpcCallRetryAttempt,e.abrupt("return",new Promise((function(e,t){var r=function(){var c=Object(m.a)(regeneratorRuntime.mark((function c(m){var k,v,T,x,w,symbol,E,A,S;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return k=m.retryAttempt,v=void 0===k?1:k,v++,c.prev=2,T=n.tron.metamask.ethAccount,c.next=6,o.tokenQueryInstance();case 6:return x=c.sent,console.info(l,T),c.next=10,x.queryTokenInfo(l,1,T,"0x0000000000000000000000000000000000000000").call();case 10:w=c.sent,symbol=w[1],E=Object(d.hexToNumberString)(w[2]),A=w[4],A=Object(d.hexToNumberString)(A),S=Object(h.a)(A).div(Object(h.a)(10).pow(Object(h.a)(E))).toString(10),e({error:!1,symbol:symbol,decimal:E,balance:A,balanceHuman:S}),c.next=23;break;case 20:c.prev=20,c.t0=c.catch(2),v>=f?c.t0.message&&c.t0.message.includes("Returned values aren't valid")?e({error:!0}):t(c.t0):r({retryAttempt:v});case 23:case"end":return c.stop()}}),c,null,[[2,20]])})));return function(e){return c.apply(this,arguments)}}();r({})})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)})};t.default={namespaced:!0,state:function(){return{address:null,balance:0,balanceDisplay:"",allowance:0,allowanceNumber:0,balanceNumber:0,allowanceEnough:!1,balanceEnough:!1,approveAmount:0,approveTx:"",approveTxStatus:-1,tokenSelected:null,tokenSelectedDisplayInfo:"",txs:[],tokenSymbolLoaded:!1,tokenAllowanceLoaded:!1,tokenInfoLoaded:!1,checkZeroTimes:4,needToResetApproval:!1,isERC721:!1,isERC1155:!1,tokenType:3,isNFTToken:!1,nftApproveAmount:"100000000000000000000000000000000000000001",unlimitedApproveAmount:"115792089237316195423570985008687907853269984665640564039457584007913129639935",price:0,priceLoaded:!1,gasForProcessing:-1,gasForProcessingChecking:!1,specialTypesChecking:!1,tokenErrorType:0,gasProcessingSureFunctions:["ffb2c479"],gasProcessingPossibleFunctions:["14b6ca96","2d48e896","9d1944f5","9c1b8af5","871c128d","e98030c7"]}},getters:k,mutations:{},actions:v}}}]);