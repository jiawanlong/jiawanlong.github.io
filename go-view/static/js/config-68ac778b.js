var m=Object.defineProperty;var n=(t,o,i)=>o in t?m(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i;var r=(t,o,i)=>(n(t,typeof o!="symbol"?o+"":o,i),i);import{a9 as e}from"./index-6c47f69d.js";import{d as p}from"./chartEditStore-bfe1babe.js";import{K as a}from"./index-25575ef7.js";import"./plugin-07aea9dd.js";import"./icon-da829856.js";import"./SettingItem-dc22b861.js";/* empty css                                                                      */import"./SettingItemBox-53bd9f2b.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-b4626c95.js";import"./index.esm.min-b013ef93.js";import"./http-55a69c14.js";import"./fileTypeEnum-21359a08.js";const s=[["行1列1","行1列2","行1列3"],["行2列1","行2列2","行2列3"],["行3列1","行3列2","行3列3"],["行4列1","行4列2","行4列3"],["行5列1","行5列2","行5列3"],["行6列1","行6列2","行6列3"],["行7列1","行7列2","行7列3"],["行8列1","行8列2","行8列3"],["行9列1","行9列2","行9列3"],["行10列1","行10列2","行10列3"]],d={header:["列1","列2","列3"],dataset:s,index:!0,columnWidth:[30,100,100],align:["center","right","right","right"],rowNum:5,waitTime:2,headerHeight:35,carousel:"single",headerBGC:"#00BAFF",oddRowBGC:"#003B51",evenRowBGC:"#0A2732"};class y extends p{constructor(){super(...arguments);r(this,"key",a.key);r(this,"chartConfig",e(a));r(this,"option",e(d))}}export{y as default,d as option};