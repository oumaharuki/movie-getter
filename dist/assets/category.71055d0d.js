import{_ as S,a as j}from"./bar.278c62b8.js";import{d as V,b8 as D,r as n,m as d,y as R,c as g,w as m,v as A,_ as P,o as _,b as t,e as v,A as U,i as h,h as f,F as y,l as $,j as q,b9 as z,ba as G,a as H,C as J,s as K}from"./index.16c19bde.js";import{_ as L}from"./Pagination.34fedd51.js";import{b as M,_ as O}from"./Result.b8b19eae.js";import"./Spin.1623e082.js";import"./Close.ec530792.js";const Q=s=>(z("data-v-ac025dfa"),s=s(),G(),s),T={class:"pagination"},W=Q(()=>h("div",{style:{height:"20vh"}},null,-1)),X=V({__name:"category",setup(s){const B=D(),e=A(),N=$(),a=n(e.params.pageNum?isNaN(Number(e.params.pageNum))?1:Number(e.params.pageNum):1),o=n(0),u=n([]),l=n(""),p=n(!0);function C(){l.value=B.Id_to_name(Number(e.params.id)),H(J+"/"+e.params.id,{pg:a.value,num:30},c=>{o.value=c.pgCount,u.value=c.movies,a.value>o.value&&(a.value=o.value>1?o.value:1),p.value=!1})}return d(C),d(()=>{a.value>0&&N.push({name:"category-page",params:{id:e.params.id,pageNum:a.value}})}),R(()=>e.params.id,()=>{a.value=1}),(c,i)=>{const r=q,b=S,E=j,k=L,F=M,w=O,x=P;return _(),g(x,{cols:"10","item-responsive":"",responsive:"screen"},{default:m(()=>[t(r,{span:"0 m:2 l:2"}),t(r,{span:"10 m:6 l:6"},{default:m(()=>[u.value.length>0&&!p.value?(_(),v(y,{key:0},[t(b,{name:l.value,id:Number(U(e).params.id)},null,8,["name","id"]),t(E,{movies:u.value},null,8,["movies"]),h("div",T,[o.value>1?(_(),g(F,{key:0,justify:"center"},{default:m(()=>[t(k,{page:a.value,"onUpdate:page":i[0]||(i[0]=I=>a.value=I),"page-count":o.value,"page-slot":7},null,8,["page","page-count"])]),_:1})):f("",!0)])],64)):u.value.length==0&&!p.value?(_(),v(y,{key:1},[W,t(w,{status:"404",title:"\u5206\u7C7B\u4E0D\u5B58\u5728",description:"\u4F60\u6240\u5BFB\u627E\u7684\u5206\u7C7B\u4E0D\u5B58\u5728\uFF0C\u53BB\u522B\u7684\u5730\u65B9\u627E\u627E\u5427"})],64)):f("",!0)]),_:1}),t(r,{span:"0 m:2 l:2"})]),_:1})}}});const ne=K(X,[["__scopeId","data-v-ac025dfa"]]);export{ne as default};
