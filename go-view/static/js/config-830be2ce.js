var n=Object.defineProperty;var i=(e,a,o)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o;var t=(e,a,o)=>(i(e,typeof a!="symbol"?a+"":a,o),o);import{a9 as r}from"./index-6c47f69d.js";import{d as l}from"./chartEditStore-bfe1babe.js";import{J as m}from"./index-25575ef7.js";import"./plugin-07aea9dd.js";import"./icon-da829856.js";import"./SettingItem-dc22b861.js";/* empty css                                                                      */import"./SettingItemBox-53bd9f2b.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-b4626c95.js";import"./index.esm.min-b013ef93.js";import"./http-55a69c14.js";import"./fileTypeEnum-21359a08.js";const u=[{name:"荣成",value:26700},{name:"河南",value:20700},{name:"河北",value:18700},{name:"徐州",value:17800},{name:"漯河",value:16756},{name:"三门峡",value:12343},{name:"郑州",value:9822},{name:"周口",value:8912},{name:"濮阳",value:6834},{name:"信阳",value:5875},{name:"新乡",value:3832},{name:"大同",value:1811}],s={dataset:u,rowNum:5,waitTime:2,unit:"",sort:!0,color:"#1370fb",textColor:"#CDD2F8FF",borderColor:"#1370fb80",carousel:"single",indexFontSize:12,leftFontSize:12,rightFontSize:12,valueFormatter(e){return e.value}};class h extends l{constructor(){super(...arguments);t(this,"key",m.key);t(this,"chartConfig",r(m));t(this,"option",r(s))}}export{h as default,s as option};