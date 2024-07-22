import{d as Y,cT as se,a1 as le,r as n,o as c,D as M,w as e,e as t,bg as ne,u as s,f as a,c as f,q as l,a6 as Q,F as b,s as O,t as h,R as ue,U as pe,cz as _e,aI as me,j as ae,aQ as R,l as P,M as ce,B as re,C as de,aP as $}from"./index-6c47f69d.js";import{S as fe}from"./SettingItem-dc22b861.js";import{S as X}from"./SettingItemBox-53bd9f2b.js";import{g as ve}from"./plugin-07aea9dd.js";import{i as oe}from"./icon-da829856.js";import{c as he}from"./chartEditStore-bfe1babe.js";/* empty css                                                                      */import{n as ge}from"./noData-e5cefb25.js";import{u as Z}from"./useTargetData.hook-6aecbd70.js";import{M as ie}from"./EditorWorker-2740485c.js";import"./editorWorker-259d4dbf.js";import{n as ye}from"./useLifeHandler.hook-fab144f8.js";const be={key:0,class:"no-data go-flex-center"},xe=["src"],Ee=Y({__name:"index",setup(S){const{CloseIcon:w,AddIcon:J,HelpOutlineIcon:G}=oe.ionicons5,{targetData:C,chartEditStore:D}=Z(),V=[se.PARAMS,se.HEADER],I=le(()=>{const m=C.value.interactActions;return m?m.map(p=>({label:p.interactName,value:p.interactType})):[]}),N=le(()=>C.value.option),k=(m,p)=>{if(!m)return{};const i=D.requestGlobalConfig.requestDataPond.find(x=>x.dataPondId===m)?.dataPondRequestConfig.requestParams;return i?i[p]:D.componentList[D.fetchTargetIndex(m)]?.request.requestParams[p]},T=m=>!m||!C.value.interactActions?[]:C.value.interactActions.find(i=>i.interactType===m)?.componentEmitEvents[N.value[_e]]||[],H=()=>{const m=d=>d.reduce((_,r)=>(!r.groupList&&r.request.requestDataType===me.AJAX&&r.request.requestUrl&&_.push(r),r.groupList&&r.groupList.length>0?[..._,...m(r.groupList)]:_),[]),i=m(D.componentList).filter(d=>{const _=d.id!==C.value.id,r=d.chartConfig.chartFrame!==he.STATIC,v=!d.isGroup;return _&&r&&v}).map(d=>({id:d.id,title:d.chartConfig.title,disabled:!1,type:"componentList"})),y=D.requestGlobalConfig.requestDataPond.map(d=>({id:d.dataPondId,title:d.dataPondName,disabled:!1,type:"requestDataPond"})).concat(i);return C.value.events.interactEvents?.forEach(d=>{y.forEach(_=>{_.id===d.interactComponentId&&(_.disabled=!0)})}),y},q=()=>{C.value.events.interactEvents.push({interactOn:void 0,interactComponentId:void 0,interactFn:{}})},K=m=>{ve({message:"是否删除此关联交互模块?",onPositiveCallback:()=>{C.value.events.interactEvents.splice(m,1)}})};return(m,p)=>{const i=n("n-icon"),x=n("n-button"),y=n("n-text"),d=n("n-space"),_=n("n-divider"),r=n("n-tag"),v=n("n-select"),L=n("n-input-group"),U=n("n-tooltip"),z=n("n-table"),B=n("n-card"),j=n("n-collapse-item");return I.value.length?(c(),M(j,{key:0,title:"组件交互",name:"1"},{"header-extra":e(()=>[t(x,{type:"primary",tertiary:"",size:"small",onClick:ne(q,["stop"])},{icon:e(()=>[t(i,null,{default:e(()=>[t(s(J))]),_:1})]),default:e(()=>[a(" 新增 ")]),_:1})]),default:e(()=>[s(C).events.interactEvents.length?Q("",!0):(c(),f("div",be,[l("img",{src:s(ge),alt:"暂无数据"},null,8,xe),t(y,{depth:3},{default:e(()=>[a("暂无内容")]),_:1})])),(c(!0),f(b,null,O(s(C).events.interactEvents,(E,A)=>(c(),M(B,{key:A,class:"n-card-shallow",size:"small"},{default:e(()=>[t(d,{justify:"space-between"},{default:e(()=>[t(y,null,{default:e(()=>[a("关联组件 - "+h(A+1),1)]),_:2},1024),t(x,{type:"error",text:"",size:"small",onClick:g=>K(A)},{icon:e(()=>[t(i,null,{default:e(()=>[t(s(w))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),t(_,{style:{margin:"10px 0"}}),t(r,{bordered:!1,type:"primary"},{default:e(()=>[a(" 选择目标组件 ")]),_:1}),t(s(X),{name:"触发事件",alone:!0},{default:e(()=>[I.value?(c(),M(L,{key:0},{default:e(()=>[t(v,{class:"select-type-options",value:E.interactOn,"onUpdate:value":g=>E.interactOn=g,size:"tiny",options:I.value},null,8,["value","onUpdate:value","options"])]),_:2},1024)):Q("",!0)]),_:2},1024),t(s(X),{alone:!0},{name:e(()=>[t(y,null,{default:e(()=>[a("绑定")]),_:1}),t(U,{trigger:"hover"},{trigger:e(()=>[t(i,{size:"21",depth:3},{default:e(()=>[t(s(G))]),_:1})]),default:e(()=>[t(y,null,{default:e(()=>[a("不支持「静态组件」支持「组件」「公共APi」")]),_:1})]),_:1})]),default:e(()=>[t(v,{class:"select-type-options","value-field":"id","label-field":"title",size:"tiny",filterable:"",placeholder:"仅展示符合条件的组件",value:E.interactComponentId,"onUpdate:value":g=>E.interactComponentId=g,options:H()},null,8,["value","onUpdate:value","options"])]),_:2},1024),T(E.interactOn).length?(c(),M(s(X),{key:0,name:"查询结果",alone:!0},{default:e(()=>[t(z,{size:"small",striped:""},{default:e(()=>[l("thead",null,[l("tr",null,[(c(),f(b,null,O(["参数","说明"],g=>l("th",{key:g},h(g),1)),64))])]),l("tbody",null,[(c(!0),f(b,null,O(T(E.interactOn),(g,u)=>(c(),f("tr",{key:u},[l("td",null,h(g.value),1),l("td",null,h(g.label),1)]))),128))])]),_:2},1024)]),_:2},1024)):Q("",!0),t(r,{bordered:!1,type:"primary"},{default:e(()=>[a(" 关联目标请求参数 ")]),_:1}),(c(),f(b,null,O(V,g=>t(s(X),{name:g,key:g},{default:e(()=>[(c(!0),f(b,null,O(k(E.interactComponentId,g),(u,o,F)=>(c(),M(s(fe),{key:F,name:`${o}`},{default:e(()=>[t(v,{size:"tiny",value:E.interactFn[o],"onUpdate:value":te=>E.interactFn[o]=te,options:T(E.interactOn),clearable:""},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name"]))),128)),ue(t(y,{class:"go-pt-1",depth:"3"},{default:e(()=>[a(" 暂无数据 ")]),_:2},1536),[[pe,JSON.stringify(k(E.interactComponentId,g))==="{}"]])]),_:2},1032,["name"])),64))]),_:2},1024))),128))]),_:1})):Q("",!0)}}});const we=ae(Ee,[["__scopeId","data-v-80f27dfa"]]),Ce=`
console.log(e)
`,Oe=`
console.log(echarts)
`,ke=`
console.log(components)
`,Te=`
console.log(node_modules)
`,Se=`
// 在渲染之后才能获取 dom 实例
e.el.addEventListener('click', () => {
  alert('我触发拉~');
}, false)
`,De=`
await import('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/lodash.js/4.17.21/lodash.js')

// lodash 默认赋值给 "_"
console.log('isEqual', _.isEqual(['1'], ['1']))
`,Ie=`
// 获取echart实例
const chart = this.refs.vChartRef.chart

// 图表设置tooltip
chart.setOption({
  tooltip: {
    trigger: 'axis', //item
    enterable: true, 
    formatter (params) {
      return\`
        <div>
          <img src="https://portrait.gitee.com/uploads/avatars/user/1654/4964818_MTrun_1653229420.png!avatar30">
          <b><a href="https://gitee.com/dromara/go-view">《这是一个自定义的tooltip》</a></b>
        <div>
        <div style='border-radius:35px;color:#666'>
        \${Object.entries(params[0].value).map(kv => \`<div>\${kv[0]}:\${kv[1]}</div>\`).join('')}
        </div>
      \`;
    },
  }
})
`,$e=`
// 组件样式作用域标识
const scoped = this.subTree.scopeId
function loadStyleString(css){
	let style = document.createElement('style')
	style.type = 'text/css'
	style.appendChild(document.createTextNode(css))
	let head = document.getElementsByTagName('head')[0]
	head.appendChild(style)
}
loadStyleString(\`
.dv-scroll-board[\${scoped}] {
  position: relative;
  overflow: hidden;
}
.dv-scroll-board[\${scoped}]::before {
  content: '';
  display: block;
  position: absolute;
  top: -20%;
  left: -100%;
  width: 550px;
  height: 60px;
  transform: rotate(-45deg);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0));
  animation: cross 2s infinite;
}
@keyframes cross{
  to{
    top: 80%;
    left: 100%;
    transform: rotate(-45deg);
  }
}
\`)
`,Ne=`
const chart = this.refs.vChartRef.chart
// 定义地图原点大小 同理可自定义标签等等内容
this.props.chartConfig.option.series[0].symbolSize = (val) => {
  return Math.sqrt(val[2]) / 3;
}
this.setupState.vEchartsSetOption();
let i = 0; // 当前轮播索引
const len = 3; // 轮播部分提示
(function showTips() {
  const action = (type, dataIndex) => {
    chart.dispatchAction({
      type,
      dataIndex,
      seriesIndex: 0,
    });
  }
  setInterval(() => {
    action("downplay", i);
    action("hideTip", i);
    if (i === len) i = 0;
    i++;
    action("highlight", i);
    action("showTip", i);
  }, 2000);
})()
`,Me=[{description:"获取当前组件实例",code:Ce},{description:"获取全局 echarts 实例",code:Oe},{description:"获取组件图表集合",code:ke},{description:"获取 nodeModules 实例",code:Te},{description:"获取远程 CDN 库",code:De},{description:"设置文字组件点击事件",code:Se},{description:"修改图表 tooltip",code:Ie},{description:"添加【轮播列表】样式",code:$e},{description:"修改【地图】圆点，新增提示自动轮播",code:Ne}],W=S=>(re("data-v-d73dd522"),S=S(),de(),S),Le={class:"func-annotate"},Ue=W(()=>l("br",null,null,-1)),Ae={class:"func-keyword"},Fe={class:"go-ml-4"},Pe=W(()=>l("p",null,[a("}"),l("span",null,",")],-1)),je={class:"go-pl-3"},Ve=W(()=>l("span",{class:"func-keyword"},"async function   ",-1)),qe={class:"func-keyNameWord"},ze=W(()=>l("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),Be=W(()=>l("br",null,null,-1)),Re=W(()=>l("br",null,null,-1)),Ge={class:"go-flex-items-center"},He=Y({__name:"index",setup(S){const{targetData:w,chartEditStore:J}=Z(),{DocumentTextIcon:G,ChevronDownIcon:C,PencilIcon:D}=oe.ionicons5,V={[R.VNODE_BEFORE_MOUNT]:"渲染之前",[R.VNODE_MOUNTED]:"渲染之后"},I={[R.VNODE_BEFORE_MOUNT]:"此时组件 DOM 还未存在",[R.VNODE_MOUNTED]:"此时组件 DOM 已经存在"},N=P(!1),k=P(R.VNODE_MOUNTED);let T=P({...w.value.events.advancedEvents});const H=P(!1),q=()=>{let p="",i="",x="";return H.value=Object.entries(T.value).every(([y,d])=>{try{const _=Object.getPrototypeOf(async function(){}).constructor;return new _(d),!0}catch(_){return i=_.message,x=_.name,p=y,!1}}),{errorFn:p,message:i,name:x}},K=()=>{N.value=!1},m=()=>{if(q().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values(T.value).join("").trim()===""?w.value.events.advancedEvents={vnodeBeforeMount:void 0,vnodeMounted:void 0}:w.value.events.advancedEvents={...T.value},K()};return ce(()=>N.value,p=>{p&&(T.value={...w.value.events.advancedEvents})}),(p,i)=>{const x=n("n-icon"),y=n("n-button"),d=n("n-code"),_=n("n-card"),r=n("n-collapse-item"),v=n("n-text"),L=n("n-space"),U=n("n-tab-pane"),z=n("n-tabs"),B=n("n-layout"),j=n("n-collapse"),E=n("n-scrollbar"),A=n("n-tag"),g=n("n-layout-sider"),u=n("n-modal");return c(),f(b,null,[t(r,{title:"高级事件配置",name:"3"},{"header-extra":e(()=>[t(y,{type:"primary",tertiary:"",size:"small",onClick:i[0]||(i[0]=ne(o=>N.value=!0,["stop"]))},{icon:e(()=>[t(x,null,{default:e(()=>[t(s(D))]),_:1})]),default:e(()=>[a(" 编辑 ")]),_:1})]),default:e(()=>[t(_,{class:"collapse-show-box"},{default:e(()=>[(c(!0),f(b,null,O(s(R),o=>(c(),f("div",{key:o},[l("p",null,[l("span",Le,"// "+h(V[o]),1),Ue,l("span",Ae,"async "+h(o),1),a(" (e, components, echarts, node_modules) { ")]),l("p",Fe,[t(d,{code:(s(w).events.advancedEvents||{})[o]||"",language:"typescript"},null,8,["code"])]),Pe]))),128))]),_:1})]),_:1}),t(u,{class:"go-chart-data-monaco-editor",show:N.value,"onUpdate:show":i[2]||(i[2]=o=>N.value=o),"mask-closable":!1},{default:e(()=>[t(_,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(L,null,{default:e(()=>[t(v,null,{default:e(()=>[a("高级事件编辑器（配合源码使用）")]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(L,{justify:"space-between"},{default:e(()=>[l("div",Ge,[t(A,{bordered:!1,type:"primary"},{icon:e(()=>[t(x,{component:s(G)},null,8,["component"])]),default:e(()=>[a(" 说明 ")]),_:1}),t(v,{class:"go-ml-2",depth:"2"},{default:e(()=>[a("通过提供的参数可为图表增加定制化的tooltip、交互事件等等")]),_:1})]),t(L,null,{default:e(()=>[t(y,{size:"medium",onClick:K},{default:e(()=>[a("取消")]),_:1}),t(y,{size:"medium",type:"primary",onClick:m},{default:e(()=>[a("保存")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(B,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(B,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(z,{value:k.value,"onUpdate:value":i[1]||(i[1]=o=>k.value=o),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(v,{class:"tab-tip",type:"warning"},{default:e(()=>[a("提示: "+h(I[k.value]),1)]),_:1})]),default:e(()=>[(c(!0),f(b,null,O(s(R),(o,F)=>(c(),M(U,{key:F,tab:`${V[o]}-${o}`,name:o},{default:e(()=>[l("p",je,[Ve,l("span",qe,h(o)+"(e, components, echarts, node_modules)  {",1)]),t(s(ie),{modelValue:s(T)[o],"onUpdate:modelValue":te=>s(T)[o]=te,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),ze]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(g,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(z,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(U,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(E,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(j,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(c(!0),f(b,null,O([q()],o=>(c(),f(b,{key:o},[t(r,{title:"错误函数",name:1},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[a(h(o.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(r,{title:"错误信息",name:2},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[a(h(o.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(r,{title:"堆栈信息",name:3},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[a(h(o.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(U,{tab:"变量说明",name:"2"},{default:e(()=>[t(E,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(j,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3,4]},{default:e(()=>[t(r,{title:"e",name:1},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[a("触发对应生命周期事件时接收的参数")]),_:1})]),_:1}),t(r,{title:"this",name:2},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[a("图表组件实例")]),_:1}),Be,(c(),f(b,null,O(["refs","setupState","ctx","props","..."],o=>t(A,{class:"go-m-1",key:o},{default:e(()=>[a(h(o),1)]),_:2},1024)),64))]),_:1}),t(r,{title:"components",name:3},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[a("当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制")]),_:1}),t(d,{code:`{
  [id]: component
}`,language:"typescript"})]),_:1}),t(r,{title:"node_modules",name:4},{default:e(()=>[t(v,{depth:"3"},{default:e(()=>[a("以下是内置在代码环境中可用的包变量")]),_:1}),Re,(c(!0),f(b,null,O(Object.keys(s(ye)||{}),o=>(c(),M(A,{class:"go-m-1",key:o},{default:e(()=>[a(h(o),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),t(U,{tab:"介绍案例",name:"3"},{default:e(()=>[t(E,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(j,{"arrow-placement":"right"},{default:e(()=>[(c(!0),f(b,null,O(s(Me),(o,F)=>(c(),M(r,{key:F,title:`案例${F+1}：${o.description}`,name:F},{default:e(()=>[t(d,{code:o.code,language:"typescript"},null,8,["code"])]),_:2},1032,["title","name"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}});const Ke=ae(He,[["__scopeId","data-v-d73dd522"]]),ee=S=>(re("data-v-258b0391"),S=S(),de(),S),We={class:"func-annotate"},Je=ee(()=>l("br",null,null,-1)),Qe={class:"func-keyword"},Xe={class:"go-ml-4"},Ye=ee(()=>l("p",null,[a("}"),l("span",null,",")],-1)),Ze={class:"go-pl-3"},et=ee(()=>l("span",{class:"func-keyword"},"async function   ",-1)),tt={class:"func-keyNameWord"},nt=ee(()=>l("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),at={class:"go-flex-items-center"},ot=Y({__name:"index",setup(S){const{targetData:w,chartEditStore:J}=Z(),{DocumentTextIcon:G,ChevronDownIcon:C,PencilIcon:D}=oe.ionicons5,V={[$.ON_CLICK]:"单击",[$.ON_DBL_CLICK]:"双击",[$.ON_MOUSE_ENTER]:"鼠标进入",[$.ON_MOUSE_LEAVE]:"鼠标移出"},I=P(!1),N=P($.ON_CLICK);let k=P({...w.value.events.baseEvent});const T=P(!1),H=()=>{let m="",p="",i="";return T.value=Object.entries(k.value).every(([x,y])=>{try{const d=Object.getPrototypeOf(async function(){}).constructor;return new d(y),!0}catch(d){return p=d.message,i=d.name,m=x,!1}}),{errorFn:m,message:p,name:i}},q=()=>{I.value=!1},K=()=>{if(H().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values(k.value).join("").trim()===""?w.value.events.baseEvent={[$.ON_CLICK]:void 0,[$.ON_DBL_CLICK]:void 0,[$.ON_MOUSE_ENTER]:void 0,[$.ON_MOUSE_LEAVE]:void 0}:w.value.events.baseEvent={...k.value},q()};return ce(()=>I.value,m=>{m&&(k.value={...w.value.events.baseEvent})}),(m,p)=>{const i=n("n-icon"),x=n("n-button"),y=n("n-code"),d=n("n-card"),_=n("n-collapse-item"),r=n("n-text"),v=n("n-space"),L=n("n-tab-pane"),U=n("n-tabs"),z=n("n-layout"),B=n("n-collapse"),j=n("n-scrollbar"),E=n("n-layout-sider"),A=n("n-tag"),g=n("n-modal");return c(),f(b,null,[t(_,{title:"基础事件配置",name:"2"},{"header-extra":e(()=>[t(x,{type:"primary",tertiary:"",size:"small",onClick:p[0]||(p[0]=ne(u=>I.value=!0,["stop"]))},{icon:e(()=>[t(i,null,{default:e(()=>[t(s(D))]),_:1})]),default:e(()=>[a(" 编辑 ")]),_:1})]),default:e(()=>[t(d,{class:"collapse-show-box"},{default:e(()=>[(c(!0),f(b,null,O(s($),u=>(c(),f("div",{key:u},[l("p",null,[l("span",We,"// "+h(V[u]),1),Je,l("span",Qe,"async "+h(u),1),a(" (mouseEvent,components) { ")]),l("p",Xe,[t(y,{code:(s(w).events.baseEvent||{})[u]||"",language:"typescript"},null,8,["code"])]),Ye]))),128))]),_:1})]),_:1}),t(g,{class:"go-chart-data-monaco-editor",show:I.value,"onUpdate:show":p[2]||(p[2]=u=>I.value=u),"mask-closable":!1},{default:e(()=>[t(d,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(v,null,{default:e(()=>[t(r,null,{default:e(()=>[a("基础事件编辑器")]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(v,{justify:"space-between"},{default:e(()=>[l("div",at,[t(A,{bordered:!1,type:"primary"},{icon:e(()=>[t(i,{component:s(G)},null,8,["component"])]),default:e(()=>[a(" 说明 ")]),_:1}),t(r,{class:"go-ml-2",depth:"2"},{default:e(()=>[a("编写方式同正常 JavaScript 写法")]),_:1})]),t(v,null,{default:e(()=>[t(x,{size:"medium",onClick:q},{default:e(()=>[a("取消")]),_:1}),t(x,{size:"medium",type:"primary",onClick:K},{default:e(()=>[a("保存")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(z,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(z,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(U,{value:N.value,"onUpdate:value":p[1]||(p[1]=u=>N.value=u),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(r,{class:"tab-tip",type:"warning"},{default:e(()=>[a("提示: ECharts 组件会拦截鼠标事件")]),_:1})]),default:e(()=>[(c(!0),f(b,null,O(s($),(u,o)=>(c(),M(L,{key:o,tab:`${V[u]}-${u}`,name:u},{default:e(()=>[l("p",Ze,[et,l("span",tt,h(u)+"(mouseEvent,components)  {",1)]),t(s(ie),{modelValue:s(k)[u],"onUpdate:modelValue":F=>s(k)[u]=F,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),nt]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(E,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(U,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(L,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(j,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(B,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(c(!0),f(b,null,O([H()],u=>(c(),f(b,{key:u},[t(_,{title:"错误函数",name:1},{default:e(()=>[t(r,{depth:"3"},{default:e(()=>[a(h(u.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(_,{title:"错误信息",name:2},{default:e(()=>[t(r,{depth:"3"},{default:e(()=>[a(h(u.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(_,{title:"堆栈信息",name:3},{default:e(()=>[t(r,{depth:"3"},{default:e(()=>[a(h(u.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(L,{tab:"变量说明",name:"2"},{default:e(()=>[t(j,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(B,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2]},{default:e(()=>[t(_,{title:"mouseEvent",name:1},{default:e(()=>[t(r,{depth:"3"},{default:e(()=>[a("鼠标事件对象")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}});const st=ae(ot,[["__scopeId","data-v-258b0391"]]),gt=Y({__name:"index",setup(S){const{targetData:w}=Z();return P(!1),(J,G)=>{const C=n("n-text"),D=n("n-collapse");return c(),M(D,{class:"go-mt-3","arrow-placement":"right","default-expanded-names":["1","2"]},{default:e(()=>[t(C,{depth:"3"},{default:e(()=>[a(" 组件 id： "),t(C,null,{default:e(()=>[a(h(s(w).id),1)]),_:1})]),_:1}),t(s(we)),t(s(st)),t(s(Ke))]),_:1})}}});export{gt as default};
