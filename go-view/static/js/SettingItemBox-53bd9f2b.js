import{d as i,r as a,o as c,c as d,e as o,w as s,f as m,t as f,b as n,q as p,ap as u,j as _}from"./index-6c47f69d.js";/* empty css                                                                      */const g={class:"go-config-item-box"},S=i({__name:"SettingItemBox",props:{name:{type:String,required:!1},alone:{type:Boolean,default:!1,required:!1},itemRightStyle:{type:Object,default:()=>{},required:!1}},setup(e){return(t,x)=>{const r=a("n-space"),l=a("n-text");return c(),d("div",g,[o(l,{class:"item-left",depth:"2"},{default:s(()=>[m(f(e.name)+" ",1),o(r,{size:5},{default:s(()=>[n(t.$slots,"name",{},void 0,!0)]),_:3})]),_:3}),p("div",{class:"item-right",style:u({gridTemplateColumns:e.alone?"1fr":"1fr 1fr",...e.itemRightStyle})},[n(t.$slots,"default",{},void 0,!0)],4)])}}}),v=_(S,[["__scopeId","data-v-f029b976"]]);export{v as S};