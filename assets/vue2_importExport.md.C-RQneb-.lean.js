import{_ as a,c as n,a0 as p,o as e}from"./chunks/framework.BYlfzdEH.js";const u=JSON.parse('{"title":"import和export","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/importExport.md","filePath":"vue2/importExport.md"}'),l={name:"vue2/importExport.md"};function t(i,s,o,c,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="import和export" tabindex="-1">import和export <a class="header-anchor" href="#import和export" aria-label="Permalink to &quot;import和export&quot;">​</a></h1><h2 id="_1、引入第三方插件" tabindex="-1">1、引入第三方插件 <a class="header-anchor" href="#_1、引入第三方插件" aria-label="Permalink to &quot;1、引入第三方插件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span>import echarts from &#39;echarts&#39;;</span></span>
<span class="line"><span>import ElementUI from &#39;element-ui&#39;;</span></span></code></pre></div><h2 id="_2、导入css文件" tabindex="-1">2、导入css文件 <a class="header-anchor" href="#_2、导入css文件" aria-label="Permalink to &quot;2、导入css文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import &#39;./styles/iview.css&#39;;</span></span></code></pre></div><h2 id="_3、导入css文件2" tabindex="-1">3、导入css文件2 <a class="header-anchor" href="#_3、导入css文件2" aria-label="Permalink to &quot;3、导入css文件2&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  @import &#39;./test.css&#39;;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>  @import url(&quot;./map.less&quot;);</span></span>
<span class="line"><span>  .task {</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>    height: calc(100vh - 200px);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="_4、导入组件" tabindex="-1">4、导入组件 <a class="header-anchor" href="#_4、导入组件" aria-label="Permalink to &quot;4、导入组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import name1 from &#39;./name1&#39;;</span></span>
<span class="line"><span>import name2 from &#39;./name2&#39;;</span></span>
<span class="line"><span>components:{</span></span>
<span class="line"><span>  name1,</span></span>
<span class="line"><span>  name2,</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="_5、引入工具类" tabindex="-1">5、引入工具类 <a class="header-anchor" href="#_5、引入工具类" aria-label="Permalink to &quot;5、引入工具类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//第一种是引入单个方法</span></span>
<span class="line"><span>import {axiosfetch} from &#39;./util&#39;;</span></span>
<span class="line"><span>//下面是方法，需要export导出</span></span>
<span class="line"><span>export function axiosfetch(a,b) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//第二种是导入成组的方法</span></span>
<span class="line"><span>import * as tools from &#39;./libs/tools&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function m1(a, b) {</span></span>
<span class="line"><span>    console.log(a + b);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export function m2(a, b) {</span></span>
<span class="line"><span>    console.log(a * b);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tools.m1(1,2)</span></span>
<span class="line"><span>tools.m2(1,2)</span></span></code></pre></div><h2 id="_6、export-和-export-default-的区别" tabindex="-1">6、export 和 export default 的区别 <a class="header-anchor" href="#_6、export-和-export-default-的区别" aria-label="Permalink to &quot;6、export 和 export default 的区别&quot;">​</a></h2><ul><li>export、import可以有多个，但 export default 仅有一个；</li><li>通过export方式导出，在导入（import）时要加花括号{ }，export default 则不需要 { }。</li></ul><p>export用法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const str = &quot;blablabla~&quot;;</span></span>
<span class="line"><span>export function log(sth) {</span></span>
<span class="line"><span>    return sth;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { str, log as _log } from &#39;a&#39;; //可以用as重命名</span></span></code></pre></div><p>export default 用法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var obj = { name: ‘example’ };</span></span>
<span class="line"><span>export default obj;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import newNname from &#39;./a.js&#39;;   //newNname 是自己随便取的名字，这里可以随便命名</span></span>
<span class="line"><span>console.log(newNname.name);       // example;</span></span></code></pre></div><h2 id="_7、批量导入导出" tabindex="-1">7、批量导入导出 <a class="header-anchor" href="#_7、批量导入导出" aria-label="Permalink to &quot;7、批量导入导出&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//全部导出  A.js</span></span>
<span class="line"><span>var helloWorld=function(){</span></span>
<span class="line"><span> conselo.log(&quot;Hello World&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var test=function(){</span></span>
<span class="line"><span> conselo.log(&quot;this&#39;s test function&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default{</span></span>
<span class="line"><span> helloWorld,</span></span>
<span class="line"><span> test</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import A from &quot;./A.js&quot;</span></span>
<span class="line"><span>A.helloWorld();</span></span>
<span class="line"><span>A.test();</span></span></code></pre></div>`,19)]))}const m=a(l,[["render",t]]);export{u as __pageData,m as default};
