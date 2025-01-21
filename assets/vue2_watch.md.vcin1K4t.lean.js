import{_ as s,c as n,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const u=JSON.parse('{"title":"watch","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/watch.md","filePath":"vue2/watch.md"}'),l={name:"vue2/watch.md"};function t(c,a,i,o,r,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h1><h2 id="_1、基本用法" tabindex="-1">1、基本用法 <a class="header-anchor" href="#_1、基本用法" aria-label="Permalink to &quot;1、基本用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>props: [&quot;data&quot;]</span></span>
<span class="line"><span>watch: {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // --监听对象------</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      handler(newVal, oldVal) {</span></span>
<span class="line"><span>        console.log(newVal);</span></span>
<span class="line"><span>        this.getTableData();</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      immediate: true,  // 初始化立刻执行一次handler方法</span></span>
<span class="line"><span>      deep: true, // true对复杂类型深度监视（监视对象中的所有属性）</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    监听某一个属性值的变化</span></span>
<span class="line"><span>    &quot;data.name&quot;: {</span></span>
<span class="line"><span>      handler(newName, oldName) {</span></span>
<span class="line"><span>        console.log(&quot;触发打印&quot;);</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>},</span></span></code></pre></div>`,3)]))}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
