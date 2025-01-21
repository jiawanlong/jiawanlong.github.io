import{_ as n,c as a,a0 as p,o as l}from"./chunks/framework.BYlfzdEH.js";const m=JSON.parse('{"title":"动态组件","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/动态组件.md","filePath":"vue2/动态组件.md"}'),t={name:"vue2/动态组件.md"};function e(i,s,c,o,r,d){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="动态组件" tabindex="-1">动态组件 <a class="header-anchor" href="#动态组件" aria-label="Permalink to &quot;动态组件&quot;">​</a></h1><h2 id="_1、基本用法" tabindex="-1">1、基本用法 <a class="header-anchor" href="#_1、基本用法" aria-label="Permalink to &quot;1、基本用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;component is=&quot;First&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>    &lt;component is=&quot;Last&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 导入组件</span></span>
<span class="line"><span>import First from &#39;@/components/First.vue&#39;;</span></span>
<span class="line"><span>import Last from &#39;@/components/Last.vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  // 注册组件</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    First, </span></span>
<span class="line"><span>    Last</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="_2、切换组件" tabindex="-1">2、切换组件 <a class="header-anchor" href="#_2、切换组件" aria-label="Permalink to &quot;2、切换组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- 使用属性绑定指令将指定的数据绑定到属性中 --&gt;</span></span>
<span class="line"><span>    &lt;component :is=&quot;show&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;transfer()&quot;&gt;Transfer&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 导入组件</span></span>
<span class="line"><span>import First from &#39;@/components/First.vue&#39;;</span></span>
<span class="line"><span>import Last from &#39;@/components/Last.vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  // 定义数据</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      show: &#39;First&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 注册组件</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    First, </span></span>
<span class="line"><span>    Last</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 定义事件处理函数</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    transfer() {</span></span>
<span class="line"><span>      if(this.show === &#39;First&#39;){</span></span>
<span class="line"><span>        this.show = &#39;Last&#39;;</span></span>
<span class="line"><span>      }else{</span></span>
<span class="line"><span>        this.show = &#39;First&#39;;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,5)]))}const h=n(t,[["render",e]]);export{m as __pageData,h as default};
