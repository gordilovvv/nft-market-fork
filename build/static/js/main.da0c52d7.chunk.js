(this["webpackJsonp@fluuuid/nft-marketplace"]=this["webpackJsonp@fluuuid/nft-marketplace"]||[]).push([[0],{124:function(e,t){},156:function(e,t,n){"use strict";n.r(t);var r,a,c=n(1),o=n.n(c),i=n(104),s=n.n(i),u=n(164),l=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,261)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},d=n(40),h=n(3),f=n.n(h),b=n(21),p=n(22),j=n(162),x=n(163),v=n(71),g=n(105),O=n(106),m=n(74),w=Object(O.a)((function(e,t){return{isAuthenticated:!1,contract:void 0,user:void 0,tokensOnSale:[],ethPrice:"0.0",activatingConnector:void 0,transaction:void 0,setAuthenticated:function(t){return e({isAuthenticated:t})},setContract:function(){var t=Object(b.a)(f.a.mark((function t(n,r){var a,c,o,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n){t.next=3;break}throw new Error("No Web3 Found");case 3:return a={events:{},links:{},address:"0x95ACD91Fa920C8ff66304dD40aed6c848D001103",transactionHash:"0xdf932931c8b07d1381dc6369d0e22123483192155b2ab7f094a07d81c164f5b8"}.address,c=new m.a(a,g.abi,n.getSigner()),t.next=8,c.name();case 8:return o=t.sent,t.next=11,c.symbol();case 11:i=t.sent,e({library:n,contract:c,contractDetails:{name:o,symbol:i,address:a}}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e,n){return t.apply(this,arguments)}}(),setUser:function(){var n=Object(b.a)(f.a.mark((function n(r){var a,c,o,i,s,u,l;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,a=t(),c=a.contract,o=a.user,i=a.library,s=a.getUserTokens,i){n.next=4;break}throw new Error("No Web3 Found");case 4:if(c){n.next=6;break}throw new Error("No contract found");case 6:if(o||r){n.next=8;break}throw new Error("No user found");case 8:return n.t0=j.b,n.next=11,i.getBalance(r||(null===o||void 0===o?void 0:o.address)||"");case 11:return n.t1=n.sent,u=n.t0.formatEther.call(n.t0,n.t1),n.next=15,s(r||(null===o||void 0===o?void 0:o.address));case 15:l=n.sent,e({isAuthenticated:!0,user:{address:r||(null===o||void 0===o?void 0:o.address)||"",balance:u,ownedTokens:l}}),n.next=22;break;case 19:n.prev=19,n.t2=n.catch(0),console.log(n.t2);case 22:case"end":return n.stop()}}),n,null,[[0,19]])})));return function(e){return n.apply(this,arguments)}}(),setTokensOnSale:function(t){return e({tokensOnSale:t})},setEthPrice:function(t){return e({ethPrice:t})},setActivatingConnector:function(t){return e({activatingConnector:t})},setTransaction:function(t){return e({transaction:t})},getUserTokens:function(){var e=Object(b.a)(f.a.mark((function e(n){var r,a,c,o,i,s,u,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=t(),a=r.contract,c=r.library,o=r.user,c){e.next=4;break}throw new Error("No Web3 Found");case 4:if(a){e.next=6;break}throw new Error("No contract found");case 6:if((null===o||void 0===o?void 0:o.address)||n){e.next=8;break}throw new Error("No user found");case 8:return i=(null===o||void 0===o?void 0:o.address)||n,s=a.filters.Transfer(null,i),e.next=12,a.queryFilter(s,0,"latest");case 12:return u=e.sent,l=new Map,e.next=16,Promise.all(u.map(function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,c,o,s,u,d,h;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ownerOf(null===(n=t.args)||void 0===n?void 0:n.tokenId);case 2:if(e.sent!==i){e.next=14;break}return e.next=6,a.tokenMeta(null===(r=t.args)||void 0===r?void 0:r.tokenId);case 6:return o=e.sent,s=o.id,u=o.name,d=o.price,e.next=12,a.tokenURI(null===(c=t.args)||void 0===c?void 0:c.tokenId);case 12:h=e.sent,l.set(h,{id:s,name:u,price:d,uri:h});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 16:return e.abrupt("return",Array.from(l).map((function(e){var t=Object(p.a)(e,2);t[0];return t[1]})));case 19:return e.prev=19,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),buyToken:function(){var e=Object(b.a)(f.a.mark((function e(n,r){var a,c,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t(),c=a.setTransaction,o=a.contract){e.next=4;break}throw new Error("No contract found");case 4:return e.next=6,o.purchaseToken(n,{value:r});case 6:return i=e.sent,c(i),e.abrupt("return",{});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{error:" insufficient funds for gas"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),updateTokensOnSale:function(){var e=Object(b.a)(f.a.mark((function e(){var n,r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t(),r=n.contract,a=n.setTokensOnSale,r){e.next=4;break}throw new Error("No contract found");case 4:return e.next=6,r.getAllOnSale();case 6:return c=e.sent.reduce((function(e,t){return""!==t.uri&&e.push({id:t.id,price:t.price,name:t.name,uri:t.uri}),e}),[]),a(c),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),setTokenSale:function(){var e=Object(b.a)(f.a.mark((function e(n,r){var a,c,o,i,s,u,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>2&&void 0!==l[2]&&l[2],e.prev=1,c=t(),o=c.contract,i=c.user,s=c.setTransaction,o){e.next=5;break}throw new Error("No contract found");case 5:if(i){e.next=7;break}throw new Error("No user found");case 7:return e.next=9,o.setTokenSale(n,a,r,{from:i.address});case 9:return u=e.sent,s(u),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),transferToken:function(){var e=Object(b.a)(f.a.mark((function e(n,r){var a,c,o,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t(),c=a.contract,o=a.user,i=a.setTransaction,c){e.next=4;break}throw new Error("No contract found");case 4:if(o){e.next=6;break}throw new Error("No user found");case 6:return e.next=8,c["safeTransferFrom(address,address,uint256)"](o.address,r,n,{from:o.address});case 8:s=e.sent,i(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}()}})),k=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=w.getState(),r=n.setEthPrice,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:a=e.sent,c=a.result.ethusd,r(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{error:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=w.getState(),r=n.contract){e.next=4;break}throw new Error("Contract not found");case 4:return e.next=6,null===r||void 0===r?void 0:r.ownerOf(t);case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Math.round(e.length/t);return"".concat(e.substr(0,n),"...").concat(e.substr(e.length-n,e.length))},E=n(5),T=function(e){var t=e.token,n=e.isOnSale,r=e.onTransfer,a=e.onBuy,o=e.onSale,i=Object(c.useState)(!1),s=Object(p.a)(i,2),u=s[0],l=s[1],d=Object(c.useState)(!1),h=Object(p.a)(d,2),g=h[0],O=h[1],m=Object(c.useState)(""),k=Object(p.a)(m,2),T=k[0],F=k[1],W=Object(c.useState)(""),A=Object(p.a)(W,2),z=A[0],N=A[1],I=Object(c.useState)(""),U=Object(p.a)(I,2),M=U[0],P=U[1],H=w(),D=H.user,B=H.ethPrice,R=H.contractDetails,q=H.transferToken,G=H.buyToken,L=H.setTokenSale,Y=function(){var e=Object(b.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r&&j.b.isAddress(T)&&(q(t.id,T),l(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!a){e.next=6;break}return e.next=4,G(t.id,t.price);case 4:(null===(r=e.sent)||void 0===r?void 0:r.error)&&P(r.error);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,L(t.id,j.b.parseEther(z),!0);case 6:O(!1),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(3),e.t0;case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),J=Object(v.a)(t.id,C).data,X=Object(v.a)("".concat("https://api.nft.fluuu.id/prod","/token/").concat(t.id),y).data,K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return new Intl.NumberFormat("us-GB",{style:"currency",currency:"USD"}).format(Number(j.b.formatEther(e))*Number(t))}(t.price,B);return X?X.name?Object(E.jsxs)(x.c,{variant:"nft",children:[Object(E.jsx)(x.i,{sx:{width:"100%",bg:"white",borderBottom:"1px solid black"},src:X.image}),Object(E.jsxs)(x.a,{p:3,pt:2,children:[Object(E.jsx)(x.h,{as:"h2",children:X.name}),Object(E.jsx)(x.e,{variant:"divider.nft"}),Object(E.jsxs)(x.a,{children:[Object(E.jsx)(x.n,{sx:{color:"lightBlue",fontSize:1,fontWeight:"bold"},children:"Price"}),Object(E.jsxs)(x.h,{as:"h3",sx:{color:"green",m:0,fontWeight:"bold"},children:[j.a.EtherSymbol," ",Number(j.b.formatEther(t.price)).toFixed(2)," ",Object(E.jsxs)(x.n,{sx:{color:"navy"},as:"span",variant:"text.body",children:["(",K,")"]})]}),J&&"string"===typeof J&&!r&&Object(E.jsxs)(x.a,{mt:2,children:[Object(E.jsx)(x.n,{as:"p",sx:{color:"lightBlue",fontSize:1,fontWeight:"bold"},children:"Owner"}),Object(E.jsx)(x.l,{target:"_blank",href:"https://goerli.etherscan.io/address/".concat(J),variant:"owner",style:{textOverflow:"ellipsis",width:"100%",position:"relative",overflow:"hidden"},children:S(J)})]}),Object(E.jsx)(x.a,{mt:2,children:Object(E.jsx)(x.l,{target:"_blank",href:"https://testnets.opensea.io/assets/".concat(null===R||void 0===R?void 0:R.address,"/").concat(t.id),variant:"openSea",children:"View on Opensea.io"})})]}),r&&Object(E.jsxs)(x.f,{mt:3,sx:{justifyContent:"center"},children:[u&&Object(E.jsxs)(x.a,{sx:{width:"100%"},children:[Object(E.jsx)(x.f,{onSubmit:Y,sx:{width:"100%",flexDirection:"column"},as:"form",children:Object(E.jsx)(x.j,{onChange:function(e){return F(e.currentTarget.value)},placeholder:"ETH Address 0x0..."})}),Object(E.jsxs)(x.f,{mt:2,children:[Object(E.jsx)(x.b,{sx:{bg:"green"},onClick:Y,variant:"quartiary",children:"Confirm"}),Object(E.jsx)(x.b,{sx:{bg:"red"},ml:2,onClick:function(){return l(!1)},variant:"quartiary",children:"Cancel"})]})]}),g&&Object(E.jsxs)(x.a,{sx:{width:"100%"},children:[Object(E.jsx)(x.f,{onSubmit:Y,sx:{width:"100%",flexDirection:"column"},as:"form",children:Object(E.jsx)(x.j,{onChange:function(e){return N(e.currentTarget.value)},placeholder:"Token Price in ETH"})}),Object(E.jsxs)(x.f,{mt:2,children:[Object(E.jsx)(x.b,{sx:{bg:"green"},onClick:_,variant:"quartiary",children:"Confirm"}),Object(E.jsx)(x.b,{sx:{bg:"red"},ml:2,onClick:function(){return O(!1)},variant:"quartiary",children:"Cancel"})]})]}),!u&&!g&&Object(E.jsxs)(x.f,{sx:{flexDirection:"column",width:"100%",justifyContent:"center"},children:[Object(E.jsx)(x.b,{onClick:function(){return l(!u)},variant:"tertiary",children:"Transfer"}),n?Object(E.jsx)(x.b,{mt:2,onClick:function(){return o&&L(t.id,t.price,!1)},variant:"tertiary",children:"Remove from Sale"}):Object(E.jsx)(x.b,{mt:2,onClick:function(){return O(!g)},variant:"tertiary",children:"Put Token for Sale"})]})]}),a&&Object(E.jsx)(x.f,{mt:3,sx:{justifyContent:"center",width:"100%"},children:Object(E.jsx)(x.b,{sx:{opacity:(null===D||void 0===D?void 0:D.ownedTokens.find((function(e){return j.b.formatUnits(e.id)===j.b.formatUnits(t.id)})))?.5:1,pointerEvents:(null===D||void 0===D?void 0:D.ownedTokens.find((function(e){return j.b.formatUnits(e.id)===j.b.formatUnits(t.id)})))?"none":"visible"},onClick:V,variant:"quartiary",children:M||"Buy Token"})})]})]}):null:Object(E.jsx)(x.c,{variant:"nft",children:Object(E.jsx)(x.m,{})})},F=n(16),W=function(){var e=Object(F.g)(),t=Object(F.h)(),n=w(),r=n.user,a=n.isAuthenticated;return Object(E.jsxs)(x.a,{bg:"black",children:[Object(E.jsxs)(x.f,{sx:{alignItems:"center",p:3},as:"nav",children:[Object(E.jsx)(x.i,{onClick:function(){e.push("/")},sx:{width:50,cursor:"pointer"},src:"/static/logo.png"}),Object(E.jsxs)(x.h,{sx:{ml:[1,2],color:"white"},as:"h4",children:["ERC721 Marketplace"," ",Object(E.jsx)(x.n,{sx:{display:["none","block"]},children:"+ OpenSea.io on Goerli Network"})]}),Object(E.jsx)(I,{})]}),a&&r&&Object(E.jsxs)(x.f,{bg:"midGray",py:3,sx:{justifyContent:"center"},children:[Object(E.jsx)(x.l,{sx:{pointerEvents:"/"===t.pathname?"none":"visible",color:"/"===t.pathname?"green":"white"},onClick:function(){return e.push("/")},children:"Marketplace"}),Object(E.jsx)(x.a,{sx:{width:50}}),Object(E.jsx)(x.l,{sx:{pointerEvents:"/profile"===t.pathname?"none":"visible",color:"/profile"===t.pathname?"green":"white"},onClick:function(){return e.push("/profile")},children:"Profile"})]})]})},A=n(15),z=function(){var e=w(),t=e.user,n=e.tokensOnSale,r=w(Object(c.useCallback)((function(e){return e.updateTokensOnSale}),[])),a=Object(c.useState)("alpha"),o=Object(p.a)(a,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){r()}),[r]),Object(E.jsxs)(x.a,{children:[Object(E.jsx)(x.h,{as:"h1",children:"Marketplace"}),Object(E.jsxs)(x.f,{sx:{alignItems:"center"},mb:3,children:[Object(E.jsx)(x.h,{as:"h3",sx:{color:"lightGray"},children:"Order:"}),Object(E.jsxs)(x.f,{ml:3,children:[Object(E.jsx)(x.b,{mr:2,onClick:function(){return s("alpha")},variant:"filter",disabled:"alpha"===i,children:"Alphabetically"}),Object(E.jsx)(x.b,{onClick:function(){return s("price")},variant:"filter",disabled:"price"===i,children:"Price"})]})]}),Object(E.jsx)(x.g,{gap:4,columns:["1fr 1fr","1fr 1fr","1fr 1fr 1fr"],children:null===n||void 0===n?void 0:n.sort((function(e,t){return"alpha"===i?A.a.from(e.id).toString().localeCompare(A.a.from(t.id).toString(),void 0,{numeric:!0}):Number(j.b.formatEther(e.price.sub(t.price)))})).map((function(e,n){return Object(E.jsx)(T,{onBuy:!(null===t||void 0===t?void 0:t.ownedTokens.find((function(t){return t.id===e.id}))),token:e},n)}))})]})},N=n(102),I=function(){var e=w(),t=e.user,n=e.isAuthenticated,r=Object(F.g)();return Object(E.jsx)(x.f,{sx:{ml:"auto",justifySelf:"flex-end"},children:n&&t&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(x.a,{sx:{display:["none","block"]},children:[Object(E.jsx)(x.h,{sx:{p:0,color:"white"},as:"h4",children:S(t.address)}),Object(E.jsxs)(x.h,{sx:{p:0,mt:1,textAlign:"right",color:"white"},as:"h5",children:[N.a,t.balance]})]}),Object(E.jsx)(x.a,{onClick:function(){r.push("/profile")},sx:{cursor:"pointer",ml:[0,3],height:30,width:30,borderRadius:"100%"},children:Object(E.jsx)(D,{size:30,address:t.address})})]})})},U=n(10),M=function(e){var t=e.component,n=e.path,r=w().isAuthenticated;return Object(E.jsx)(F.b,{path:n,render:function(e){return r?Object(E.jsx)(t,Object(U.a)({},e)):Object(E.jsx)(F.a,{to:"/"})}})},P=n(110),H=n.n(P),D=function(e){var t=e.address,n=e.size,r=void 0===n?16:n,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(a.current)try{a.current.innerHTML="",a.current.appendChild(H()(r,parseInt(t.slice(2,10),16)))}catch(e){console.log(e)}}),[t,r]),Object(E.jsx)(x.f,{ref:a,sx:{justifyContent:"center",width:r+2}})},B=function(){var e=w(Object(c.useCallback)((function(e){return{setTransaction:e.setTransaction,setUser:e.setUser,updateTokensOnSale:e.updateTokensOnSale}}),[])),t=e.setTransaction,n=e.setUser,r=e.updateTokensOnSale,a=Object(c.useRef)(w.getState().transaction),o=Object(c.useState)(!1),i=Object(p.a)(o,2),s=i[0],u=i[1],l=Object(c.useCallback)(Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t(void 0),r(),u(!1);case 5:case"end":return e.stop()}}),e)}))),[t,n,r]);return Object(c.useEffect)((function(){return w.subscribe(function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.transaction,e.prev=1,a.current=n,n){e.next=5;break}return e.abrupt("return");case 5:return u(!0),e.next=8,n.wait();case 8:e.sent.confirmations>=1&&l(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("transaction",e.t0),u(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()),function(){w.destroy()}}),[l]),s?Object(E.jsx)(x.c,{variant:"transaction",children:Object(E.jsxs)(x.f,{sx:{alignItems:"center"},children:[Object(E.jsx)(x.m,{size:20,color:"white",sx:{mr:2}})," Transaction:"," ",S(a.current.hash)]})}):null},R=n(30),q=n(70),G=n(80);!function(e){e.Metamask="Metamask",e.WalletConnect="WalletConnect"}(a||(a={}));var L,Y=new q.a({supportedChainIds:[5]}),V=new G.b({qrcode:!0,infuraId:"5c660c4dfdee4861899d5e46bacc4358",rpc:{5:"https://rpc.ankr.com/eth_goerli"},chainId:5,supportedChainIds:[5]}),_=(r={},Object(R.a)(r,a.Metamask,Y),Object(R.a)(r,a.WalletConnect,V),r),J=(L={},Object(R.a)(L,a.Metamask,"https://docs.metamask.io/metamask-fox.svg"),Object(R.a)(L,a.WalletConnect,"https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/b9644035864fb4b6d6ed55e0f67ad302377bd6f1/svg/original/walletconnect-logo.svg"),L),X=function(){var e=w(),t=e.activatingConnector,n=e.setActivatingConnector,r=Object(d.c)(),a=r.connector,c=r.activate;return Object(E.jsx)(x.f,{sx:{justifyContent:"center"},children:Object.keys(_).map((function(e){var r=_[e],o=r===t,i=r===a;return Object(E.jsxs)(x.b,{mt:2,mr:2,variant:"connect",sx:{borderColor:o?"orange":i?"green":"unset",position:"relative",maxWidth:250},onClick:function(){n(r),c(_[e])},children:[J[e]&&Object(E.jsx)(x.i,{sx:{width:35,height:35},mr:3,src:J[e]}),e,o&&Object(E.jsx)(x.m,{size:20,color:"white",sx:{ml:3}})]},e)}))})},K=function(){var e=w().user,t=Object(d.c)().active;return Object(E.jsxs)(E.Fragment,{children:[!e&&Object(E.jsx)(X,{}),e&&t&&Object(E.jsx)(z,{})]})},Q=n(86),Z=n(165);function $(e){var t=new Z.a(e);return t.pollingInterval=12e3,t}var ee=function(){return Object(E.jsxs)(Q.a,{basename:"/",children:[Object(E.jsx)(W,{}),Object(E.jsx)(d.b,{getLibrary:$,children:Object(E.jsx)(re,{children:Object(E.jsxs)(x.d,{children:[Object(E.jsxs)(F.d,{children:[Object(E.jsx)(M,{path:"/profile",component:te}),Object(E.jsx)(F.b,{exact:!0,path:"/",component:K})]}),Object(E.jsx)(B,{})]})})})]})},te=function(){var e=w(),t=e.user,n=e.tokensOnSale;if(!t)return null;var r=t.address,a=t.balance,c=t.ownedTokens;return Object(E.jsxs)(x.a,{children:[Object(E.jsx)(x.h,{as:"h1",children:"My Profile"}),Object(E.jsxs)(x.g,{columns:["1fr","1fr 1fr"],sx:{overflow:"hidden",gap:"0 20px"},children:[Object(E.jsxs)(x.a,{children:[Object(E.jsx)(x.h,{as:"h4",sx:{color:"green"},children:"Address"}),Object(E.jsx)(x.n,{children:r})]}),Object(E.jsxs)(x.a,{children:[Object(E.jsx)(x.h,{as:"h4",sx:{color:"green"},children:"Balance"}),Object(E.jsxs)(x.n,{children:["\u039e ",a]})]})]}),Object(E.jsx)(x.e,{variant:"divider.nft",sx:{my:7}}),Object(E.jsx)(x.a,{my:5,children:c&&c.length>0?Object(E.jsxs)(x.a,{children:[Object(E.jsxs)(x.h,{as:"h2",children:["My items"," ",Object(E.jsxs)(x.n,{variant:"text.body",as:"span",children:["(",c.length," item)"]})]}),Object(E.jsx)(x.g,{gap:4,columns:["1fr 1fr","1fr 1fr 1fr"],children:c.map((function(e,t){return Object(E.jsx)(T,{isOnSale:!!(null===n||void 0===n?void 0:n.find((function(t){return j.b.formatUnits(t.id)===j.b.formatUnits(e.id)}))),onSale:!0,onTransfer:!0,token:e},t)}))})]}):c&&Object(E.jsx)(x.a,{children:Object(E.jsx)(x.h,{as:"h2",children:"You don't own any NFT tokens"})})})]})};function ne(e){return console.log(e),e instanceof q.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof d.a?"You're connected to an unsupported network. Please connect to Rinkeby network":e instanceof q.c||e instanceof G.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var re=function(e){var t=e.children,n=w().activatingConnector,r=Object(d.c)(),a=r.library,o=r.chainId,i=r.account,s=r.error,u=w(Object(c.useCallback)((function(e){return{setContract:e.setContract,setUser:e.setUser}}),[])),l=u.setContract,h=u.setUser;return Object(v.a)("https://api.nft.fluuu.id/prod/ethusd",k),Object(c.useEffect)((function(){o&&i&&a&&function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(a,o);case 3:h(i),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()()}),[o,i,a,l,h]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(d.c)(),n=t.active,r=t.error;Object(c.useEffect)((function(){var e=window.ethereum;e&&(e.autoRefreshOnNetworkChange=!0)}),[n,r,e])}(!function(){var e=Object(d.c)(),t=e.activate,n=e.active,r=e.connector,a=Object(c.useState)(!1),o=Object(p.a)(a,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){r===Y&&Y.isAuthorized().then((function(e){e?t(Y,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[t,r]),Object(c.useEffect)((function(){!i&&n&&s(!0)}),[i,n]),i}()||!!n),Object(E.jsx)(E.Fragment,{children:s?Object(E.jsxs)(x.d,{children:[Object(E.jsx)(x.h,{as:"h2",children:"\u274c Something is not right"}),Object(E.jsx)(x.n,{sx:{mt:3},children:ne(s)})]}):t})},ae={breakpoints:["40em","52em","64em"],space:[0,4,10,16,20,30,42,56,78,125,150],fontSizes:[10,12,16,26,36,50,75],fonts:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',heading:"inherit"},layout:{container:{py:4,px:3,pb:10}},sizes:Object(U.a)({},{header:60,container:1020,button:[100,250],logo:60,sidemenu:240,chart:950}),cards:{nft:{bg:"background",border:"1px solid",borderColor:"muted",textAlign:"left"},transaction:{bg:"amber",position:"fixed",top:50,right:20,p:4,borderRadius:10}},links:{nav:{color:"white",cursor:"pointer",transition:"all .2s ease-out","&:hover":{opacity:.5,color:"white"}},openSea:{color:"green",fontSize:1,opacity:.5,"&:after":{content:"url(\"data:image/svg+xml,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.262 0l2.529 2.524L0 6.314 1.685 8l3.79-3.79L8 6.732V0z' fill='rgb(99, 255, 203)' fill-rule='nonzero' /%3E%3C/svg%3E\")",ml:1},transition:"all .2s ease-out","&:hover":{opacity:1,color:"green"}},owner:{color:"white",fontSize:1,opacity:.5,transition:"all .2s ease-out","&:hover":{opacity:1,color:"white"},"&:after":{content:"url(\"data:image/svg+xml,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.262 0l2.529 2.524L0 6.314 1.685 8l3.79-3.79L8 6.732V0z' fill='white' fill-rule='nonzero' /%3E%3C/svg%3E\")",ml:1}}},buttons:{primary:Object(U.a)(Object(U.a)({},{border:0,fontFamily:"body",fontWeight:"normal",lineHeight:"body",fontSize:[1,2],paddingX:3,paddingY:2,outline:"none",whiteSpace:"nowrap",cursor:"pointer",transition:"all 0.1s ease-out","&:hover":{opacity:.7}}),{},{fontWeight:"bold",minWidth:"button",bg:"primary",color:"white",textAlign:"center",display:"flex",width:"100%",alignItems:"center",justifyContent:"center"}),secondary:{cursor:"pointer",variant:"buttons.primary",bg:"secondary",fontWeight:"body"},tertiary:{variant:"buttons.secondary",color:"white",bg:"primary"},quartiary:{variant:"buttons.tertiary",bg:"green",color:"black",minWidth:"auto",py:2},filter:{variant:"buttons.tertiary",bg:"lightGreen",color:"black",minWidth:"auto",py:1,fontSize:1,"&:disabled":{pointerEvents:"none",opacity:.5}},connect:{variant:"buttons.tertiary",py:4,px:5}},fontWeights:{heading:300,body:400,bold:700},lineHeights:{body:1.333333333,heading:1.066666667,subheading:2},colors:Object(U.a)({},{text:"#FFF",white:"#fff",background:"#333",primary:"#111",secondary:"#333",gray:"#F7F9FA",lightGray:"#e0e0e0",midGray:"#222",lightBlue:"#EFF7FF",navy:"#e0e0e0",green:"rgb(99, 255, 203)",amber:"#D58408",lightGreen:"#AEC",red:"#999",muted:"#999",transparent:"transparent",white20:"rgba(255, 255, 255, .2)",black66:"rgba(0, 0, 0, .66)"}),divider:{nft:{color:"muted",height:1,my:2}},forms:{input:{paddingX:2,paddingY:2,borderRadius:"5px",bg:"white",color:"primary"}},text:{body:{fontFamily:"body",fontWeight:"body",lineHeight:"body",fontSize:1},heading:{py:2},bold:{fontWeight:"bold"},paragraph:{fontFamily:"body",fontWeight:"body",lineHeight:2,fontSize:2,letterSpacing:.44,color:"white"},h1:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:6,letterSpacing:-.44},h2:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5,letterSpacing:-.44},h3:{fontFamily:"heading",lineHeight:"subheading",fontWeight:"heading",fontSize:3},h4:{fontFamily:"heading",lineHeight:"subheading",fontWeight:"bold",fontSize:[1,2]},h5:{fontFamily:"heading",fontWeight:"bold",lineHeight:1.6,fontSize:0,letterSpacing:1.5}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},a:{color:"primary","&:hover":{color:"inherit"}},hr:{height:1,opacity:.5,bg:"black",color:"black",my:6}}};s.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(u.a,{theme:ae,children:Object(E.jsx)(ee,{})})}),document.getElementById("root")),l()}},[[156,1,2]]]);
//# sourceMappingURL=main.da0c52d7.chunk.js.map