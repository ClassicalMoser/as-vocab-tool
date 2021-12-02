(this["webpackJsonpas-quickbase4"]=this["webpackJsonpas-quickbase4"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),a=t(8),o=t.n(a),r=(t(14),t.p,t(15),t(9)),i=t(7),u=t(4),l=t(2),b=t(0),j={NAME:"vocabulary",ID:"brrcdgyix",FIELDS:{wordIdiom:6,use:7,partOfSpeech:8,frequencyRank:14,vocabName:17}},d={NAME:"examples",ID:"brrcdgyjw",FIELDS:{spanishExample:6,englishTranslation:7,vocabIncluded:15,spanglish:13}},h={NAME:"lessons",ID:"brrtcungb",FIELDS:{lesson:6,vocabIncluded:11}},f=["SI1M Lesson 1","SI1M Lesson 2","SI1M Lesson 3","SI1M Lesson 4","SI1M Lesson 5","SI1M Lesson 6","SI1M Lesson 7","SI1M Lesson 8","SI1M Lesson 9","SI1M Lesson 10","SI1M Lesson 11","SI1M Lesson 12","SI1M Lesson 13","SI1M Lesson 14","SI1M Lesson 15","SI1M Lesson 16","SI1M Lesson 17","SI1M Lesson 18","SI1M Lesson 19","SI1M Lesson 20"];function O(){var e=Object(c.useState)(""),n=Object(l.a)(e,2),t=n[0],s=n[1],a=Object(c.useState)([]),o=Object(l.a)(a,2),O=o[0],p=o[1],v=Object(c.useState)([]),m=Object(l.a)(v,2),S=m[0],x=m[1],I=Object(c.useState)([]),g=Object(l.a)(I,2),L=g[0],M=g[1],E=Object(c.useState)([]),N=Object(l.a)(E,2),y=(N[0],N[1],Object(c.useState)("")),D=Object(l.a)(y,2),k=D[0],C=D[1],A=Object(c.useState)([]),w=Object(l.a)(A,2),F=w[0],T=w[1],q=Object(c.useState)([]),R=Object(l.a)(q,2),P=R[0],B=R[1],J=Object(c.useState)("SI1M Lesson 1"),U=Object(l.a)(J,2),z=U[0],H=U[1],Q=Object(c.useState)(!1),V=Object(l.a)(Q,2),G=V[0],K=V[1],W=Object(c.useState)(!1),X=Object(l.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)([]),_=Object(l.a)($,2),ee=_[0],ne=_[1],te=Object(c.useState)(""),ce=Object(l.a)(te,2);ce[0],ce[1];function se(e,n){var t;switch(e){case j.NAME:return t=n.data.map((function(e){return{name:e[j.FIELDS.vocabName].value,partOfSpeech:e[j.FIELDS.partOfSpeech].value,frequencyRank:e[j.FIELDS.frequencyRank].value}})),void p(t);case d.NAME:return t=n.data.map((function(e){return{spanish:e[d.FIELDS.spanishExample].value,english:e[d.FIELDS.englishTranslation].value,vocabIncluded:e[d.FIELDS.vocabIncluded].value,spanglish:e[d.FIELDS.spanglish].value}})),void x(t);case h.NAME:t=n.data.map((function(e){return{lesson:e[h.FIELDS.lesson].value,vocabIncluded:e[h.FIELDS.vocabIncluded].value}})),M(t)}}function ae(e){switch(e){case j.NAME:return{from:j.ID,select:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]};case d.NAME:return{from:d.ID,select:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]};case h.NAME:return{from:h.ID,select:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}}}function oe(){var e=P,n=[];0!=e.length&&(n=Y?function(e){var n=[];return 0!=e.length&&S.map((function(t){var c=!0;0==t.vocabIncluded.length&&(c=!1),t.vocabIncluded.map((function(n){e.map((function(e){return e.name})).includes(n)||(c=!1)})),c&&(n=[].concat(Object(u.a)(n),[t]))})),n}(e):function(e){var n=[];return 0!=e.length&&(n=S.filter((function(n){var t,c=Object(i.a)(e);try{for(c.s();!(t=c.n()).done;){var s,a=t.value,o=Object(i.a)(n.vocabIncluded);try{for(o.s();!(s=o.n()).done;)if(s.value.toLowerCase().includes(a.name.toLowerCase()))return!0}catch(r){o.e(r)}finally{o.f()}}}catch(r){c.e(r)}finally{c.f()}return!1}))),n}(e),n=G?n.filter((function(e){return"esp"===e.spanglish})):n,ne(n))}function re(e,n){e.preventDefault(),T([].concat(Object(u.a)(F),[{id:Date.now(),name:n}]))}function ie(e){fetch("https://api.quickbase.com/v1/records/query",{method:"POST",headers:{"QB-Realm-Hostname":"masterofmemory.quickbase.com","User-Agent":"NickApp",Authorization:t,"Content-Type":"application/json"},body:JSON.stringify(ae(e))}).then((function(n){return n.ok?n.arrayBuffer().then((function(n){var t=new TextDecoder("ASCII").decode(n),c=JSON.parse(t);se(e,c)})):n.json().then((function(e){return Promise.reject(Object(r.a)({status:n.status},e))}))})).catch((function(e){return console.log(e)}))}return Object(c.useEffect)((function(){oe()}),[G,Y,P]),Object(c.useEffect)((function(){ie(j.NAME),ie(d.NAME),ne(S),ie(h.NAME)}),[t]),Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("ut");s(e)}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("form",{hidden:!0,onSubmit:function(e){e.preventDefault(),s(e.target[0].value)},children:Object(b.jsx)("input",{type:"text"})}),Object(b.jsx)("h1",{children:"Sentence Lookup"}),Object(b.jsx)("table",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{className:"suggestions",children:[Object(b.jsxs)("form",{onSubmit:function(e){re(e,k),C("")},children:[Object(b.jsx)("input",{className:"suggestions-searchbar",type:"text",value:k,onChange:function(e){return C(e.target.value)}}),Object(b.jsx)("button",{children:"Add to search query >>"})]}),Object(b.jsx)("ul",{className:"suggestions-content",children:O.filter((function(e){return e.name.toString().toLowerCase().includes(k.toLowerCase())})).map((function(e){return Object(b.jsx)("li",{onClick:function(n){return re(n,e.name)},children:e.name},e.id)}))})]}),Object(b.jsxs)("td",{className:"chosen-vocab",children:[Object(b.jsx)("button",{onClick:function(){B(F),Z(!1)},children:"Retrieve Sentences"}),Object(b.jsx)("div",{children:F.map((function(e){return Object(b.jsxs)("button",{className:"chosen-vocab-term",onClick:function(){return n=e.id,void T(F.filter((function(e){return e.id!==n})));var n},children:["[",e.name,"] "]},e.id)}))}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:function(e){Z(!0),e.preventDefault();var n=function(e){var n=[];if(f.includes(e)){var t=f.indexOf(e);f.map((function(e,c){c<=t&&L.map((function(t){t.lesson===e&&(n=[].concat(Object(u.a)(n),Object(u.a)(t.vocabIncluded)))}))}))}return n.map((function(e,n){return{id:n,name:e}}))}(e.target[0].value);B(n)},children:[Object(b.jsx)("select",{name:"lessonSelect",onChange:function(e){return H(e.target.value)},children:L.map((function(e){return Object(b.jsx)("option",{value:e.lesson,children:e.lesson})}))}),Object(b.jsx)("input",{type:"submit",value:"Retrieve by Lesson"})]}),L.map((function(e){if(e.lesson===z)return Object(b.jsx)("ul",{className:"lesson-vocab",children:e.vocabIncluded.map((function(e){return Object(b.jsx)("li",{children:e})}))})}))]})]})}),Object(b.jsx)("button",{onClick:function(){for(var e=Object(u.a)(ee),n=e.length;n>0;n--){var t=Math.floor(Math.random()*(n-1)),c=e[t];e[t]=e[n-1],e[n-1]=c}ne(e)},children:"Shuffle Sentences"}),Object(b.jsx)("button",{onClick:function(){var e=ee.map((function(e){return e.english})).join("\n")+"\n\n"+ee.map((function(e){return e.spanish})).join("\n");navigator.clipboard.writeText(e)},children:"Copy as List"}),Object(b.jsx)("button",{onClick:function(){var e="Spanish\tEnglish\n"+ee.map((function(e){return e.spanish+"\t"+e.english})).join("\n");navigator.clipboard.writeText(e)},children:"Copy as Table"}),Object(b.jsx)("input",{type:"checkbox",onChange:function(e){K(e.target.checked)},name:"spanglishCheckbox"}),Object(b.jsx)("label",{for:"spanglishCheckbox",children:"No Spanglish?"}),Object(b.jsxs)("label",{style:{textAlign:"right",display:"block"},children:["Number of results: ",ee.length,"  "]}),Object(b.jsxs)("table",{className:"sentence-table",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Spanish"}),Object(b.jsx)("th",{children:"English"}),Object(b.jsx)("th",{children:"Vocab/Idioms"})]}),ee.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[e.id," ",e.spanish]}),Object(b.jsx)("td",{children:e.english}),Object(b.jsx)("td",{children:e.vocabIncluded.map((function(e){return Object(b.jsx)("button",{className:"vocab-included-button",children:e})}))})]},e.id)}))]})]})}var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.c591d165.chunk.js.map