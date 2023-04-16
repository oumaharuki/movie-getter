import{d as L,h as p,c as ve,a as te,b as W,e as g,i as Oe,f as b,g as Me,j as f,u as ue,r as T,k as M,l as C,m as X,w as Ee,n as Fe,o as me,p as Be,q as ye,s as ce,t as je,v as Ke,V as Ve,x as R,y as U,z as de,A as De,B as Ue,C as Ge,D as qe,E as re,F as D,G as He,N as We,H as we,I as Xe,J as he,K as ne,L as J,M as Ye,O as j,P as Ze,Q as V,R as G,S as P,T as O,U as q,W as Je,X as se,Y as Ae,Z as Qe,_ as eo,$ as Re,a0 as oo,a1 as to}from"./index.824bfb63.js";import{p as ro}from"./path.dd2cdd3d.js";import{L as no,m as io,u as lo,g as ao}from"./api.843ae6f5.js";import{t as co,a as so,d as vo,_ as Se,N as uo,c as mo,u as ho}from"./Dropdown.e0bd736a.js";import{u as Ce,_ as fo}from"./Space.4b1b62fb.js";import{_ as po,a as go}from"./Grid.a6f0cf45.js";import"./data.c351b717.js";import"./next-frame-once.311e58cd.js";var bo=L({name:"ChevronDownFilled",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const ze=!1,xo=(e={})=>{var n;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(n=e.threshold)!==null&&n!==void 0?n:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}},ie=new WeakMap,le=new WeakMap,ae=new WeakMap,Co=(e,n,o)=>{if(!e)return()=>{};const t=xo(n),{root:i}=t.options;let a;const d=ie.get(i);d?a=d:(a=new Map,ie.set(i,a));let s,c;a.has(t.hash)?(c=a.get(t.hash),c[1].has(e)||(s=c[0],c[1].add(e),s.observe(e))):(s=new IntersectionObserver(x=>{x.forEach(v=>{if(v.isIntersecting){const H=le.get(v.target),A=ae.get(v.target);H&&H(),A&&(A.value=!0)}})},t.options),s.observe(e),c=[s,new Set([e])],a.set(t.hash,c));let m=!1;const I=()=>{m||(le.delete(e),ae.delete(e),m=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&a.delete(t.hash),a.size||ie.delete(i))};return le.set(e,I),ae.set(e,o),I},zo=e=>{const{borderRadius:n,avatarColor:o,cardColor:t,fontSize:i,heightTiny:a,heightSmall:d,heightMedium:s,heightLarge:c,heightHuge:m,modalColor:I,popoverColor:x}=e;return{borderRadius:n,fontSize:i,border:`2px solid ${t}`,heightTiny:a,heightSmall:d,heightMedium:s,heightLarge:c,heightHuge:m,color:te(t,o),colorModal:te(I,o),colorPopover:te(x,o)}},_o={name:"Avatar",common:ve,self:zo};var Io=_o;const yo=W("n-avatar-group");var Ho=g("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Oe(b("&","--n-merged-color: var(--n-color-modal);")),Me(b("&","--n-merged-color: var(--n-color-popover);")),b("img",`
 width: 100%;
 height: 100%;
 `),f("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),g("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),f("text","line-height: 1.25")]);const wo=Object.assign(Object.assign({},X.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String});var Ao=L({name:"Avatar",props:wo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ue(e),t=T(!1);let i=null;const a=T(null),d=T(null),s=()=>{const{value:h}=a;if(h&&(i===null||i!==h.innerHTML)){i=h.innerHTML;const{value:z}=d;if(z){const{offsetWidth:F,offsetHeight:N}=z,{offsetWidth:u,offsetHeight:_}=h,r=.9,y=Math.min(F/u*r,N/_*r,1);h.style.transform=`translateX(-50%) translateY(-50%) scale(${y})`}}},c=M(yo,null),m=C(()=>{const{size:h}=e;if(h)return h;const{size:z}=c||{};return z||"medium"}),I=X("Avatar","-avatar",Ho,Io,e,n),x=M(co,null),v=C(()=>{if(c)return!0;const{round:h,circle:z}=e;return h!==void 0||z!==void 0?h||z:x?x.roundRef.value:!1}),H=C(()=>c?!0:e.bordered||!1),A=h=>{if(!B.value)return;t.value=!0;const{onError:z}=e;z&&z(h)};Ee(()=>e.src,()=>t.value=!1);const S=C(()=>{const h=m.value,z=v.value,F=H.value,{color:N}=e,{self:{borderRadius:u,fontSize:_,color:r,border:y,colorModal:k,colorPopover:ee},common:{cubicBezierEaseInOut:oe}}=I.value;let Y;return typeof h=="number"?Y=`${h}px`:Y=I.value.self[Fe("height",h)],{"--n-font-size":_,"--n-border":F?y:"none","--n-border-radius":z?"50%":u,"--n-color":N||r,"--n-color-modal":N||k,"--n-color-popover":N||ee,"--n-bezier":oe,"--n-merged-size":`var(--n-avatar-size-override, ${Y})`}}),w=o?me("avatar",C(()=>{const h=m.value,z=v.value,F=H.value,{color:N}=e;let u="";return h&&(typeof h=="number"?u+=`a${h}`:u+=h[0]),z&&(u+="b"),F&&(u+="c"),N&&(u+=Be(N)),u}),S,e):void 0,$=T(null),B=T(!e.lazy);ye(()=>{if(ze)return;let h;const z=ce(()=>{h==null||h(),h=void 0,e.lazy&&(h=Co($.value,e.intersectionObserverOptions,B))});je(()=>{z(),h==null||h()})});const E=T(!e.lazy);return{textRef:a,selfRef:d,mergedRoundRef:v,mergedClsPrefix:n,fitTextTransform:s,cssVars:o?void 0:S,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,hasLoadError:t,handleError:A,imageRef:$,shouldStartLoading:B,loaded:E,mergedOnLoad:h=>{const{onLoad:z}=e;z==null||z(h),E.value=!0}}},render(){var e,n;const{$slots:o,src:t,mergedClsPrefix:i,lazy:a,onRender:d,mergedOnLoad:s,shouldStartLoading:c,loaded:m}=this;d==null||d();let I;const x=(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e);return this.hasLoadError?I=p("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):I=Ke(o.default,v=>{if(v)return p(Ve,{onResize:this.fitTextTransform},{default:()=>p("span",{ref:"textRef",class:`${i}-avatar__text`},v)});if(t)return p("img",{loading:a?"lazy":"eager",ref:"imageRef",src:ze||c||m?t:void 0,onLoad:s,"data-image-src":t,onError:this.handleError,style:[{objectFit:this.objectFit},x&&!m?{height:"0",width:"0",visibility:"hidden"}:""]})}),p("span",{ref:"selfRef",class:[`${i}-avatar`,this.themeClass],style:this.cssVars},I,a&&!m&&x)}}),Ro={fontWeightActive:"400"};const So=e=>{const{fontSize:n,textColor3:o,textColor2:t,borderRadius:i,buttonColor2Hover:a,buttonColor2Pressed:d}=e;return Object.assign(Object.assign({},Ro),{fontSize:n,itemLineHeight:"1.25",itemTextColor:o,itemTextColorHover:t,itemTextColorPressed:t,itemTextColorActive:t,itemBorderRadius:i,itemColorHover:a,itemColorPressed:d,separatorColor:o})},Po={name:"Breadcrumb",common:ve,self:So};var No=Po,ko=g("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[b("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),b("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),b("&:not(:last-child)",[R("clickable",[f("link",`
 cursor: pointer;
 `,[b("&:hover",`
 background-color: var(--n-item-color-hover);
 `),b("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),f("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[b("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[g("icon",`
 color: var(--n-item-text-color-hover);
 `)]),b("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[g("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),f("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),b("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[g("icon",`
 color: var(--n-item-text-color-active);
 `)]),f("separator",`
 display: none;
 `)])])]);const Pe=W("n-breadcrumb"),To=Object.assign(Object.assign({},X.props),{separator:{type:String,default:"/"}});var Lo=L({name:"Breadcrumb",props:To,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ue(e),t=X("Breadcrumb","-breadcrumb",ko,No,e,n);U(Pe,{separatorRef:de(e,"separator"),mergedClsPrefixRef:n});const i=C(()=>{const{common:{cubicBezierEaseInOut:d},self:{separatorColor:s,itemTextColor:c,itemTextColorHover:m,itemTextColorPressed:I,itemTextColorActive:x,fontSize:v,fontWeightActive:H,itemBorderRadius:A,itemColorHover:S,itemColorPressed:w,itemLineHeight:$}}=t.value;return{"--n-font-size":v,"--n-bezier":d,"--n-item-text-color":c,"--n-item-text-color-hover":m,"--n-item-text-color-pressed":I,"--n-item-text-color-active":x,"--n-separator-color":s,"--n-item-color-hover":S,"--n-item-color-pressed":w,"--n-item-border-radius":A,"--n-font-weight-active":H,"--n-item-line-height":$}}),a=o?me("breadcrumb",void 0,i,e):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},p("ul",null,this.$slots))}});const $o=Ue?window:null,Oo=(e=$o)=>{const n=()=>{const{hash:i,host:a,hostname:d,href:s,origin:c,pathname:m,port:I,protocol:x,search:v}=(e==null?void 0:e.location)||{};return{hash:i,host:a,hostname:d,href:s,origin:c,pathname:m,port:I,protocol:x,search:v}},o=()=>{t.value=n()},t=T(n());return ye(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),De(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),t},Mo={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var Eo=L({name:"BreadcrumbItem",props:Mo,setup(e,{slots:n}){const o=M(Pe,null);if(!o)return()=>null;const{separatorRef:t,mergedClsPrefixRef:i}=o,a=Oo(),d=C(()=>e.href?"a":"span"),s=C(()=>a.value.href===e.href?"location":null);return()=>{const{value:c}=i;return p("li",{class:[`${c}-breadcrumb-item`,e.clickable&&`${c}-breadcrumb-item--clickable`]},p(d.value,{class:`${c}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},n),p("span",{class:`${c}-breadcrumb-item__separator`,"aria-hidden":"true"},Ge(n.separator,()=>{var m;return[(m=e.separator)!==null&&m!==void 0?m:t.value]})))}}});function Fo(e,n,o,t){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:t}}const Bo=e=>{const{borderRadius:n,textColor3:o,primaryColor:t,textColor2:i,textColor1:a,fontSize:d,dividerColor:s,hoverColor:c,primaryColorHover:m}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:re(t,{alpha:.1}),itemColorActiveHover:re(t,{alpha:.1}),itemColorActiveCollapsed:re(t,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:t,itemTextColorActiveHover:t,itemTextColorChildActive:t,itemTextColorChildActiveHover:t,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:m,itemTextColorActiveHorizontal:t,itemTextColorActiveHoverHorizontal:t,itemTextColorChildActiveHorizontal:t,itemTextColorChildActiveHoverHorizontal:t,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:t,itemIconColorActiveHover:t,itemIconColorChildActive:t,itemIconColorChildActiveHover:t,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:m,itemIconColorActiveHorizontal:t,itemIconColorActiveHoverHorizontal:t,itemIconColorChildActiveHorizontal:t,itemIconColorChildActiveHoverHorizontal:t,itemHeight:"42px",arrowColor:i,arrowColorHover:i,arrowColorActive:t,arrowColorActiveHover:t,arrowColorChildActive:t,arrowColorChildActiveHover:t,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:s},Fo("#BBB",t,"#FFF","#AAA"))},jo=qe({name:"Menu",common:ve,peers:{Tooltip:so,Dropdown:vo},self:Bo});var Ko=jo;const Vo=W("n-layout-sider"),Z=W("n-menu"),fe=W("n-submenu"),pe=W("n-menu-item-group"),Q=8;function ge(e){const n=M(Z),{props:o,mergedCollapsedRef:t}=n,i=M(fe,null),a=M(pe,null),d=C(()=>o.mode==="horizontal"),s=C(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=C(()=>{var v;return Math.max((v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize,o.iconSize)}),m=C(()=>{var v;return!d.value&&e.root&&t.value&&(v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize}),I=C(()=>{if(d.value)return;const{collapsedWidth:v,indent:H,rootIndent:A}=o,{root:S,isGroup:w}=e,$=A===void 0?H:A;if(S)return t.value?v/2-c.value/2:$;if(a)return H/2+a.paddingLeftRef.value;if(i)return(w?H/2:H)+i.paddingLeftRef.value}),x=C(()=>{const{collapsedWidth:v,indent:H,rootIndent:A}=o,{value:S}=c,{root:w}=e;return d.value||!w||!t.value?Q:(A===void 0?H:A)+S+Q-(v+S)/2});return{dropdownPlacement:s,activeIconSize:m,maxIconSize:c,paddingLeft:I,iconMarginRight:x,NMenu:n,NSubmenu:i}}const be={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ne=Object.assign(Object.assign({},be),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Do=L({name:"MenuOptionGroup",props:Ne,setup(e){U(fe,null);const n=ge(e);U(pe,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:o,props:t}=M(Z);return function(){const{value:i}=o,a=n.paddingLeft.value,{nodeProps:d}=t,s=d==null?void 0:d(e.tmNode.rawNode);return p("div",{class:`${i}-menu-item-group`,role:"group"},p("div",Object.assign({},s,{class:[`${i}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),D(e.title),e.extra?p(He,null," ",D(e.extra)):null),p("div",null,e.tmNodes.map(c=>xe(c,t))))}}});var ke=L({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:n}=M(Z);return{menuProps:n,style:C(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:C(()=>{const{maxIconSize:o,activeIconSize:t,iconMarginRight:i}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${t}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:o,renderLabel:t,renderExtra:i,expandIcon:a}}=this,d=o?o(n.rawNode):D(this.icon);return p("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&p("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),p("div",{class:`${e}-menu-item-content-header`,role:"none"},t?t(n.rawNode):D(this.title),this.extra||i?p("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(n.rawNode):D(this.extra)):null),this.showArrow?p(We,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(n.rawNode):p(bo,null)}):null)}});const Te=Object.assign(Object.assign({},be),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Uo=L({name:"Submenu",props:Te,setup(e){const n=ge(e),{NMenu:o,NSubmenu:t}=n,{props:i,mergedCollapsedRef:a,mergedThemeRef:d}=o,s=C(()=>{const{disabled:v}=e;return t!=null&&t.mergedDisabledRef.value||i.disabled?!0:v}),c=T(!1);U(fe,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:s}),U(pe,null);function m(){const{onClick:v}=e;v&&v()}function I(){s.value||(a.value||o.toggleExpand(e.internalKey),m())}function x(v){c.value=v}return{menuProps:i,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:c,paddingLeft:n.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:we(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>i.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!s.value&&(i.mode==="horizontal"||a.value)),handlePopoverShowChange:x,handleClick:I}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:o,renderLabel:t}}=this,i=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:m,maxIconSize:I,activeIconSize:x,title:v,childActive:H,icon:A,handleClick:S,menuProps:{nodeProps:w},dropdownShow:$,iconMarginRight:B,tmNode:E,mergedClsPrefix:h}=this,z=w==null?void 0:w(E.rawNode);return p("div",Object.assign({},z,{class:[`${h}-menu-item`,z==null?void 0:z.class],role:"menuitem"}),p(ke,{tmNode:E,paddingLeft:s,collapsed:c,disabled:m,iconMarginRight:B,maxIconSize:I,activeIconSize:x,title:v,showArrow:!d,childActive:H,clsPrefix:h,icon:A,hover:$,onClick:S}))},a=()=>p(Xe,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:p("div",{class:`${n}-submenu-children`,role:"menu"},d.map(c=>xe(c,this.menuProps)))}});return this.root?p(Se,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:t}),{default:()=>p("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:a())}):p("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),a())}}),Le=Object.assign(Object.assign({},be),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Go=L({name:"MenuOption",props:Le,setup(e){const n=ge(e),{NSubmenu:o,NMenu:t}=n,{props:i,mergedClsPrefixRef:a,mergedCollapsedRef:d}=t,s=o?o.mergedDisabledRef:{value:!1},c=C(()=>s.value||e.disabled);function m(x){const{onClick:v}=e;v&&v(x)}function I(x){c.value||(t.doSelect(e.internalKey,e.tmNode.rawNode),m(x))}return{mergedClsPrefix:a,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:t.mergedThemeRef,menuProps:i,dropdownEnabled:we(()=>e.root&&d.value&&i.mode!=="horizontal"&&!c.value),selected:C(()=>t.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:I}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:o,menuProps:{renderLabel:t,nodeProps:i}}=this,a=i==null?void 0:i(o.rawNode);return p("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),p(uo,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>t?t(o.rawNode):D(this.title),trigger:()=>p(ke,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var qo=L({name:"MenuDivider",setup(){const e=M(Z),{mergedClsPrefixRef:n,isHorizontalRef:o}=e;return()=>o.value?null:p("div",{class:`${n.value}-menu-divider`})}});const Wo=he(Ne),Xo=he(Le),Yo=he(Te);function Zo(e){return e.type==="divider"||e.type==="render"}function Jo(e){return e.type==="divider"}function xe(e,n){const{rawNode:o}=e;if(Zo(o))return Jo(o)?p(qo,Object.assign({key:e.key},o.props)):void 0;const{labelField:t}=n,{key:i,level:a,isGroup:d}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[t],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:a,root:a===0,isGroup:d});return e.children?e.isGroup?p(Do,ne(s,Wo,{tmNode:e,tmNodes:e.children,key:i})):p(Uo,ne(s,Yo,{key:i,rawNodes:o[n.childrenField],tmNodes:e.children,tmNode:e})):p(Go,ne(s,Xo,{key:i,tmNode:e}))}const _e=[b("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[b("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ie=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])];var Qo=b([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[b("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[R("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),J("disabled",[J("selected, child-active",[b("&:focus-within",Ie)]),R("selected",[K(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[K(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",Ie)]),g("menu-item-content-header",[b("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[g("menu-item-content",[R("selected",[b("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[b("> *","z-index: 1;"),b("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),R("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),R("collapsed",[f("arrow","transform: rotate(0);")]),R("selected",[b("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[b("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[b("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),J("disabled",[J("selected, child-active",[b("&:focus-within",_e)]),R("selected",[K(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[b("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[K(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[b("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[K(null,[b("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,_e)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[b("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[b("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ye({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[b("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function K(e,n){return[R("hover",e,n),b("&:hover",e,n)]}const et=Object.assign(Object.assign({},X.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var ot=L({name:"Menu",props:et,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ue(e),t=X("Menu","-menu",Qo,Ko,e,n),i=M(Vo,null),a=C(()=>{var u;const{collapsed:_}=e;if(_!==void 0)return _;if(i){const{collapseModeRef:r,collapsedRef:y}=i;if(r.value==="width")return(u=y.value)!==null&&u!==void 0?u:!1}return!1}),d=C(()=>{const{keyField:u,childrenField:_}=e;return mo(e.items||e.options,{getChildren(r){return r[_]},getKey(r){var y;return(y=r[u])!==null&&y!==void 0?y:r.name}})}),s=C(()=>new Set(d.value.treeNodes.map(u=>u.key))),{watchProps:c}=e,m=T(null);c!=null&&c.includes("defaultValue")?ce(()=>{m.value=e.defaultValue}):m.value=e.defaultValue;const I=de(e,"value"),x=Ce(I,m),v=T([]),H=()=>{v.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(x.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ce(H):H();const A=ho(e,["expandedNames","expandedKeys"]),S=Ce(A,v),w=C(()=>d.value.treeNodes),$=C(()=>d.value.getPath(x.value).keyPath);U(Z,{props:e,mergedCollapsedRef:a,mergedThemeRef:t,mergedValueRef:x,mergedExpandedKeysRef:S,activePathRef:$,mergedClsPrefixRef:n,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:de(e,"inverted"),doSelect:B,toggleExpand:h});function B(u,_){const{"onUpdate:value":r,onUpdateValue:y,onSelect:k}=e;y&&j(y,u,_),r&&j(r,u,_),k&&j(k,u,_),m.value=u}function E(u){const{"onUpdate:expandedKeys":_,onUpdateExpandedKeys:r,onExpandedNamesChange:y,onOpenNamesChange:k}=e;_&&j(_,u),r&&j(r,u),y&&j(y,u),k&&j(k,u),v.value=u}function h(u){const _=Array.from(S.value),r=_.findIndex(y=>y===u);if(~r)_.splice(r,1);else{if(e.accordion&&s.value.has(u)){const y=_.findIndex(k=>s.value.has(k));y>-1&&_.splice(y,1)}_.push(u)}E(_)}const z=u=>{const _=d.value.getPath(u!=null?u:x.value,{includeSelf:!1}).keyPath;if(!_.length)return;const r=Array.from(S.value),y=new Set([...r,..._]);e.accordion&&s.value.forEach(k=>{y.has(k)&&!_.includes(k)&&y.delete(k)}),E(Array.from(y))},F=C(()=>{const{inverted:u}=e,{common:{cubicBezierEaseInOut:_},self:r}=t.value,{borderRadius:y,borderColorHorizontal:k,fontSize:ee,itemHeight:oe,dividerColor:Y}=r,l={"--n-divider-color":Y,"--n-bezier":_,"--n-font-size":ee,"--n-border-color-horizontal":k,"--n-border-radius":y,"--n-item-height":oe};return u?(l["--n-group-text-color"]=r.groupTextColorInverted,l["--n-color"]=r.colorInverted,l["--n-item-text-color"]=r.itemTextColorInverted,l["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,l["--n-item-text-color-active"]=r.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=r.itemIconColorInverted,l["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,l["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,l["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,l["--n-arrow-color"]=r.arrowColorInverted,l["--n-arrow-color-hover"]=r.arrowColorHoverInverted,l["--n-arrow-color-active"]=r.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,l["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,l["--n-item-color-hover"]=r.itemColorHoverInverted,l["--n-item-color-active"]=r.itemColorActiveInverted,l["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=r.groupTextColor,l["--n-color"]=r.color,l["--n-item-text-color"]=r.itemTextColor,l["--n-item-text-color-hover"]=r.itemTextColorHover,l["--n-item-text-color-active"]=r.itemTextColorActive,l["--n-item-text-color-child-active"]=r.itemTextColorChildActive,l["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,l["--n-item-icon-color"]=r.itemIconColor,l["--n-item-icon-color-hover"]=r.itemIconColorHover,l["--n-item-icon-color-active"]=r.itemIconColorActive,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,l["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,l["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,l["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,l["--n-arrow-color"]=r.arrowColor,l["--n-arrow-color-hover"]=r.arrowColorHover,l["--n-arrow-color-active"]=r.arrowColorActive,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,l["--n-arrow-color-child-active"]=r.arrowColorChildActive,l["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,l["--n-item-color-hover"]=r.itemColorHover,l["--n-item-color-active"]=r.itemColorActive,l["--n-item-color-active-hover"]=r.itemColorActiveHover,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),l}),N=o?me("menu",C(()=>e.inverted?"a":"b"),F,e):void 0;return{mergedClsPrefix:n,controlledExpandedKeys:A,uncontrolledExpanededKeys:v,mergedExpandedKeys:S,uncontrolledValue:m,mergedValue:x,activePath:$,tmNodes:w,mergedTheme:t,mergedCollapsed:a,cssVars:o?void 0:F,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender,showOption:z}},render(){const{mergedClsPrefix:e,mode:n,themeClass:o,onRender:t}=this;return t==null||t(),p("div",{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${n}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>xe(i,this.$props)))}}),tt="/admin/assets/head-img.819689da.svg";const rt={class:"panel-header"},nt={class:"breadcrumb"},it=Ae(" \u7CFB\u7EDF"),lt={class:"head-image"},at=q("span",{class:"admin"},"Admin",-1),ct=L({__name:"PanelHeader",setup(e){const n=Ze(),o=T([{label:"\u524D\u53F0\u9996\u9875",key:"front"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",key:"setting"},{label:"\u767B\u51FA\u8D26\u6237",key:"logout"}]);function t(i){switch(i){case"front":window.open(window.location.protocol+"//"+window.location.host);break;case"setting":n.push({name:"setting"});break;case"logout":no().then(()=>{n.push({name:"login"})})}}return(i,a)=>{const d=Eo,s=Lo,c=Ao,m=Se,I=fo;return V(),G("div",rt,[P(I,{class:"space",justify:"space-between"},{default:O(()=>[q("div",nt,[P(s,{separator:">"},{default:O(()=>[P(d,{clickable:!1},{default:O(()=>[it]),_:1}),(V(!0),G(He,null,Je(se(ro),x=>(V(),Qe(d,null,{default:O(()=>[Ae(eo(x.name),1)]),_:2},1024))),256))]),_:1})]),P(m,{trigger:"hover",options:o.value,onSelect:t},{default:O(()=>[q("div",lt,[P(c,{size:"medium",src:se(tt),round:""},null,8,["src"]),at])]),_:1},8,["options"])]),_:1})])}}}),dt=L({__name:"MenuBody",setup(e){const n=T(null);return T(!1),(o,t)=>{const i=ot;return V(),G("div",null,[P(i,{value:n.value,"onUpdate:value":t[0]||(t[0]=a=>n.value=a),accordion:!1,"collapsed-icon-size":22,options:se(io),mode:"vertical"},null,8,["value","options"])])}}});var $e=(e,n)=>{const o=e.__vccOpts||e;for(const[t,i]of n)o[t]=i;return o};const st={},vt={class:"l-header"},ut=q("span",{class:"title"},"微云影院 \u540E\u53F0\u7BA1\u7406",-1);function mt(e,n){const o=Re("router-link");return V(),G("div",vt,[P(o,{to:"/panel"},{default:O(()=>[ut]),_:1})])}var ht=$e(st,[["render",mt]]);const ft={},pt={class:"menu"};function gt(e,n){const o=ht,t=dt;return V(),G("div",pt,[P(o),P(t)])}var bt=$e(ft,[["render",gt]]);const xt={class:"panel"},Ct={class:"panel-body"},St=L({__name:"User",setup(e){return window.$notification=lo(),oo(()=>{ao()}),(n,o)=>{const t=bt,i=go,a=ct,d=Re("router-view"),s=to,c=po;return V(),G("div",null,[P(c,{cols:"10 l:9",responsive:"screen","item-responsive":""},{default:O(()=>[P(i,{span:"1 l:1"},{default:O(()=>[P(t)]),_:1}),P(i,{span:"8"},{default:O(()=>[q("div",xt,[P(a),q("div",Ct,[P(s,{style:{"max-height":"calc(100vh - 60px)"}},{default:O(()=>[P(d)]),_:1})])])]),_:1})]),_:1})])}}});export{St as default};
