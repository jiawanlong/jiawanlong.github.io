import{a7 as t,Y as n,l as A,a8 as E,a9 as U,aa as V,d as B,c as N,q as k,e as c,w as m,u as a,F as G,r as h,o as j,ab as u,j as K}from"./index-6c47f69d.js";import{l as _}from"./index-a89d093b.js";import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang-6dd20145.js";import{u as I,a as $}from"./chartEditStore-bfe1babe.js";import{l as z}from"./plugin-07aea9dd.js";import{i as b}from"./icon-da829856.js";const{CopyIcon:F,CutIcon:W,ClipboardOutlineIcon:q,TrashIcon:X,ChevronDownIcon:J,ChevronUpIcon:Q,LockOpenOutlineIcon:Z,LockClosedOutlineIcon:ee,EyeOutlineIcon:te,EyeOffOutlineIcon:oe}=b.ionicons5,{UpToTopIcon:ne,DownToBottomIcon:ae,PaintBrushIcon:le,Carbon3DSoftwareIcon:re,Carbon3DCursorIcon:ie}=b.carbon,e=I(),O=(o=3)=>({type:"divider",key:`d${o}`}),f=[{label:"锁定",key:t.LOCK,icon:n(ee),fnHandle:e.setLock},{label:"解锁",key:t.UNLOCK,icon:n(Z),fnHandle:e.setUnLock},{label:"隐藏",key:t.HIDE,icon:n(oe),fnHandle:e.setHide},{label:"显示",key:t.SHOW,icon:n(te),fnHandle:e.setShow},{type:"divider",key:"d0"},{label:"复制",key:t.COPY,icon:n(F),fnHandle:e.setCopy},{label:"剪切",key:t.CUT,icon:n(W),fnHandle:e.setCut},{label:"粘贴",key:t.PARSE,icon:n(q),fnHandle:e.setParse},{type:"divider",key:"d1"},{label:"置顶",key:t.TOP,icon:n(ne),fnHandle:e.setTop},{label:"置底",key:t.BOTTOM,icon:n(ae),fnHandle:e.setBottom},{label:"上移",key:t.UP,icon:n(Q),fnHandle:e.setUp},{label:"下移",key:t.DOWN,icon:n(J),fnHandle:e.setDown},{type:"divider",key:"d2"},{label:"清空剪贴板",key:t.CLEAR,icon:n(le),fnHandle:e.setRecordChart},{label:"删除",key:t.DELETE,icon:n(X),fnHandle:e.removeComponentList}],y=[{label:"创建分组",key:t.GROUP,icon:n(re),fnHandle:e.setGroup},{label:"解除分组",key:t.UN_GROUP,icon:n(ie),fnHandle:e.setUnGroup}],se=[t.PARSE,t.CLEAR],S=(o,l)=>{if(!l)return o;const r=[];return l.forEach(d=>{r.push(...o.filter(i=>i.key===d))}),r},ce=(o,l)=>l?o.filter(r=>l.findIndex(d=>d!==r.key)!==-1):o,s=A([]),de=(o,l,r,d,i)=>{o.stopPropagation(),o.preventDefault();let p=o.target;for(;p instanceof SVGElement;)p=p.parentNode;e.setTargetSelectChart(l&&l.id),e.setRightMenuShow(!1),e.getTargetChart.selectId.length>1?s.value=y:s.value=f,l||(s.value=S(E(s.value),se)),d&&(s.value=ce([...y,O(),...f],d)),i&&(s.value=S([...y,O(),...f],i)),r&&(s.value=r(U(E(s.value)),[...y,...f],l)),V().then(()=>{e.setMousePosition(o.clientX,o.clientY),e.setRightMenuShow(!0)})},ue=()=>(s.value=f,{menuOptions:s,defaultOptions:f,defaultMultiSelectOptions:y,handleContextMenu:de,onClickOutSide:()=>{e.setRightMenuShow(!1)},handleMenuSelect:r=>{e.setRightMenuShow(!1);const d=s.value.filter(i=>i.key===r);s.value.forEach(i=>{if(i.key===r){if(i.fnHandle){i.fnHandle();return}d||z()}})},mousePosition:e.getMousePosition}),_e={class:"go-chart"},fe={style:{overflow:"hidden",display:"flex"}},pe=B({__name:"index",setup(o){const l=$(),r=I();l.canvasInit(r.getEditCanvas);const d=_(()=>u(()=>import("./index-5a2ad989.js"),["./index-5a2ad989.js","./index-6c47f69d.js","..\\css\\index-22744142.css","./plugin-07aea9dd.js","./icon-da829856.js","./useKeyboard.hook-f4e9e58e.js","./chartEditStore-bfe1babe.js","./chartLayoutStore-a702eef3.js","..\\css\\index-faebf5ca.css"],import.meta.url)),i=_(()=>u(()=>import("./index-34a5e14f.js"),["./index-34a5e14f.js","./index-6c47f69d.js","..\\css\\index-22744142.css","./plugin-07aea9dd.js","./icon-da829856.js","./chartEditStore-bfe1babe.js","./useSyncUpdate.hook-64816111.js","./chartLayoutStore-a702eef3.js","./index-25575ef7.js","./SettingItem-dc22b861.js","..\\css\\StylesSetting-62069bcb.css","./SettingItemBox-53bd9f2b.js","./CollapseItem.vue_vue_type_script_setup_true_lang-b4626c95.js","./index.esm.min-b013ef93.js","./http-55a69c14.js","./fileTypeEnum-21359a08.js","..\\css\\index-2c96ae47.css","..\\css\\index-746130e5.css"],import.meta.url)),p=_(()=>u(()=>import("./index-89b08df3.js"),["./index-89b08df3.js","./index-6c47f69d.js","..\\css\\index-22744142.css","./icon-da829856.js","./chartEditStore-bfe1babe.js","./plugin-07aea9dd.js","..\\css\\index-d7b3773e.css"],import.meta.url)),H=_(()=>u(()=>import("./index-123d3623.js"),["./index-123d3623.js","./index-6c47f69d.js","..\\css\\index-22744142.css","./index-c4c2878d.js","./icon-da829856.js","..\\css\\index-9f41ce5c.css","./chartLayoutStore-a702eef3.js","./chartEditStore-bfe1babe.js","./plugin-07aea9dd.js","./index-25575ef7.js","./SettingItem-dc22b861.js","..\\css\\StylesSetting-62069bcb.css","./SettingItemBox-53bd9f2b.js","./CollapseItem.vue_vue_type_script_setup_true_lang-b4626c95.js","./index.esm.min-b013ef93.js","./http-55a69c14.js","./fileTypeEnum-21359a08.js","..\\css\\index-2c96ae47.css","./index-a89d093b.js","..\\css\\index-bc4d6b06.css","./index.vue_vue_type_script_setup_true_lang-6dd20145.js","..\\css\\index-234ef6ca.css","..\\css\\index-f27ca0dd.css"],import.meta.url)),g=_(()=>u(()=>import("./index-9e167889.js").then(C=>C.i),["./index-9e167889.js","./index-6c47f69d.js","..\\css\\index-22744142.css","./index-c4c2878d.js","./icon-da829856.js","..\\css\\index-9f41ce5c.css","./index-a89d093b.js","..\\css\\index-bc4d6b06.css","./index-25575ef7.js","./SettingItem-dc22b861.js","..\\css\\StylesSetting-62069bcb.css","./SettingItemBox-53bd9f2b.js","./CollapseItem.vue_vue_type_script_setup_true_lang-b4626c95.js","./chartEditStore-bfe1babe.js","./plugin-07aea9dd.js","./index.esm.min-b013ef93.js","./http-55a69c14.js","./fileTypeEnum-21359a08.js","..\\css\\index-2c96ae47.css","./chartLayoutStore-a702eef3.js","..\\css\\index-87dd165b.css"],import.meta.url)),P=_(()=>u(()=>import("./index-df990081.js"),["./index-df990081.js","./index-6c47f69d.js","..\\css\\index-22744142.css","./index-a89d093b.js","./icon-da829856.js","..\\css\\index-bc4d6b06.css","./index-c4c2878d.js","..\\css\\index-9f41ce5c.css","./chartLayoutStore-a702eef3.js","./chartEditStore-bfe1babe.js","./plugin-07aea9dd.js","..\\css\\index-25143bea.css"],import.meta.url)),T=_(()=>u(()=>import("./index-94f90ebd.js"),["./index-94f90ebd.js","./chartLayoutStore-a702eef3.js","./index-6c47f69d.js","..\\css\\index-22744142.css","./chartEditStore-bfe1babe.js","./plugin-07aea9dd.js","./icon-da829856.js"],import.meta.url)),{menuOptions:R,onClickOutSide:w,mousePosition:v,handleMenuSelect:x}=ue();return(C,ye)=>{const D=h("n-layout-content"),L=h("n-layout"),M=h("n-dropdown");return j(),N(G,null,[k("div",_e,[c(L,null,{default:m(()=>[c(a(Y),null,{left:m(()=>[c(a(d))]),center:m(()=>[c(a(p))]),"ri-left":m(()=>[c(a(i))]),_:1}),c(D,{"content-style":"overflow:hidden; display: flex"},{default:m(()=>[k("div",fe,[c(a(g)),c(a(H))]),c(a(P))]),_:1})]),_:1})]),c(M,{placement:"bottom-start",trigger:"manual",size:"small",x:a(v).x,y:a(v).y,options:a(R),show:a(r).getRightMenuShow,"on-clickoutside":a(w),onSelect:a(x)},null,8,["x","y","options","show","on-clickoutside","onSelect"]),c(a(T))],64)}}});const me=K(pe,[["__scopeId","data-v-0d90f270"]]),Se=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));export{O as d,Se as i,ue as u};