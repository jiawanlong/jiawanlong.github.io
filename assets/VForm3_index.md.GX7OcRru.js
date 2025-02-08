import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const u=JSON.parse('{"title":"VForm3低代码表单","description":"","frontmatter":{},"headers":[],"relativePath":"VForm3/index.md","filePath":"VForm3/index.md"}'),l={name:"VForm3/index.md"};function t(i,s,o,c,r,m){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="vform3低代码表单" tabindex="-1">VForm3低代码表单 <a class="header-anchor" href="#vform3低代码表单" aria-label="Permalink to &quot;VForm3低代码表单&quot;">​</a></h1><h2 id="_1、安装" tabindex="-1">1、安装 <a class="header-anchor" href="#_1、安装" aria-label="Permalink to &quot;1、安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i vform3-builds</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import VForm3 from &#39;vform3-builds&#39;  //引入VForm3库</span></span>
<span class="line"><span>import &#39;vform3-builds/dist/designer.style.css&#39;  //引入VForm3样式</span></span>
<span class="line"><span>app.use(VForm3)  //全局注册VForm3(同时注册了v-form-designe、v-form-render等组件)</span></span></code></pre></div><h2 id="_2、构建表单" tabindex="-1">2、构建表单 <a class="header-anchor" href="#_2、构建表单" aria-label="Permalink to &quot;2、构建表单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;v-form-designer ref=&quot;vfdRef&quot; :designer-config=&quot;buildForm.config&quot;&gt;</span></span>
<span class="line"><span>      &lt;template #customToolButtons&gt;</span></span>
<span class="line"><span>        &lt;el-button type=&quot;text&quot; @click=&quot;saveFormJson&quot;&gt;保存&lt;/el-button&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/v-form-designer&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup name=&quot;buildForm&quot;&gt;</span></span>
<span class="line"><span>import { ref, reactive, inject } from &#39;vue&#39;;</span></span>
<span class="line"><span>const vfdRef = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构建配置</span></span>
<span class="line"><span>const buildForm = reactive({</span></span>
<span class="line"><span>  config: {</span></span>
<span class="line"><span>    languageMenu: false,</span></span>
<span class="line"><span>    externalLink: false,</span></span>
<span class="line"><span>    formTemplates: false,</span></span>
<span class="line"><span>    exportCodeButton: false,</span></span>
<span class="line"><span>    generateSFCButton: false,</span></span>
<span class="line"><span>    toolbarMaxWidth: 360,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    // 清除之前的表结构</span></span>
<span class="line"><span>    nextTick(() =&gt; {</span></span>
<span class="line"><span>        vfdRef.value.clearDesigner()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const saveFormJson = () =&gt; {</span></span>
<span class="line"><span>  let formJson = vfdRef.value.getFormJson()</span></span>
<span class="line"><span>  console.log(formJson)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.buildForm {</span></span>
<span class="line"><span>  .main-header {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="_3、渲染表单" tabindex="-1">3、渲染表单 <a class="header-anchor" href="#_3、渲染表单" aria-label="Permalink to &quot;3、渲染表单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;v-form-render :form-json=&quot;formJson&quot; :form-data=&quot;formData&quot;  ref=&quot;vFormRef&quot;&gt;</span></span>
<span class="line"><span>    &lt;/v-form-render&gt;</span></span>
<span class="line"><span>    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm&quot;&gt;提交表单&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup name=&quot;buildForm&quot;&gt;</span></span>
<span class="line"><span>import { ref, reactive, inject } from &#39;vue&#39;;</span></span>
<span class="line"><span>const vFormRef = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表单结构</span></span>
<span class="line"><span>const formJson = reactive({ })  </span></span>
<span class="line"><span>// 表单数据</span></span>
<span class="line"><span>const formData = reactive({})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const rennderForm = () =&gt; {</span></span>
<span class="line"><span>  // 表结构</span></span>
<span class="line"><span>  vFormRef.value.setFormJson(res.data)</span></span>
<span class="line"><span>  nextTick(() =&gt; {</span></span>
<span class="line"><span>    // 表数据</span></span>
<span class="line"><span>    vFormRef.value.setFormData(newFormData)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const submitForm = () =&gt; {</span></span>
<span class="line"><span>  vFormRef.value.getFormData().then(formData =&gt; {</span></span>
<span class="line"><span>    alert(JSON.stringify(formData))</span></span>
<span class="line"><span>  }).catch(error =&gt; {</span></span>
<span class="line"><span>    // Form Validation failed</span></span>
<span class="line"><span>    ElMessage.error(error)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.buildForm {</span></span>
<span class="line"><span>  .main-header {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,7)]))}const g=n(l,[["render",t]]);export{u as __pageData,g as default};
