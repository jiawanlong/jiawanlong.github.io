import{_ as a,c as n,a0 as p,o as e}from"./chunks/framework.BYlfzdEH.js";const u=JSON.parse('{"title":"CLASS","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/class.md","filePath":"vue2/class.md"}'),t={name:"vue2/class.md"};function l(i,s,c,o,d,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="class" tabindex="-1">CLASS <a class="header-anchor" href="#class" aria-label="Permalink to &quot;CLASS&quot;">​</a></h1><h2 id="_1、绑定单个class" tabindex="-1">1、绑定单个class <a class="header-anchor" href="#_1、绑定单个class" aria-label="Permalink to &quot;1、绑定单个class&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div :class=&quot;{&#39;active&#39;:isActive}&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      isActive: true</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2、绑定多个class-需要逗号隔开就行-这里的activetwo加不加引号也可以" tabindex="-1">2、绑定多个class，需要逗号隔开就行：（这里的activeTwo加不加引号也可以） <a class="header-anchor" href="#_2、绑定多个class-需要逗号隔开就行-这里的activetwo加不加引号也可以" aria-label="Permalink to &quot;2、绑定多个class，需要逗号隔开就行：（这里的activeTwo加不加引号也可以）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div v-bind:class=&quot;{ activeTwo: isActive, &#39;activeThree&#39;: hasError }&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      isActive: true,</span></span>
<span class="line"><span>      hasError: true</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3、绑定的数据对象" tabindex="-1">3、绑定的数据对象 <a class="header-anchor" href="#_3、绑定的数据对象" aria-label="Permalink to &quot;3、绑定的数据对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div :class=&quot;classObject&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>data: {</span></span>
<span class="line"><span>  classObject: {</span></span>
<span class="line"><span>    active: true,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4、绑定数组" tabindex="-1">4、绑定数组 <a class="header-anchor" href="#_4、绑定数组" aria-label="Permalink to &quot;4、绑定数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div :class=&quot;[activeClass, errorClass]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      activeClass: &quot;active&quot;,</span></span>
<span class="line"><span>      errorClass: &quot;disActive&quot;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_5、数组与三元运算符结合判断选择需要的class" tabindex="-1">5、数组与三元运算符结合判断选择需要的class <a class="header-anchor" href="#_5、数组与三元运算符结合判断选择需要的class" aria-label="Permalink to &quot;5、数组与三元运算符结合判断选择需要的class&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div :class=&quot;[isActive ? &#39;active&#39; : &#39;no&#39;]&quot;&gt;1111&lt;/div&gt;</span></span>
<span class="line"><span>data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      isActive: true,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="_4、绑定一个返回对象的计算属性" tabindex="-1">4、绑定一个返回对象的计算属性 <a class="header-anchor" href="#_4、绑定一个返回对象的计算属性" aria-label="Permalink to &quot;4、绑定一个返回对象的计算属性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div :class=&quot;classObject&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        isActive: true,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>  classObject: function () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      active: this.isActive,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,13)]))}const v=a(t,[["render",l]]);export{u as __pageData,v as default};
