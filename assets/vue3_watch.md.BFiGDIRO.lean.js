import{_ as s,c as n,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const u=JSON.parse('{"title":"watch","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/watch.md","filePath":"vue3/watch.md"}'),t={name:"vue3/watch.md"};function l(c,a,i,o,r,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h1><h2 id="_1、基本用法" tabindex="-1">1、基本用法 <a class="header-anchor" href="#_1、基本用法" aria-label="Permalink to &quot;1、基本用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineProps, watch } from &quot;vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    type: Object,</span></span>
<span class="line"><span>    default: {},</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 两种写法都可以</span></span>
<span class="line"><span>watch(() =&gt; props.data, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>},{ deep: true, immediate: true })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(props.data, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>},{ deep: true, immediate: true });</span></span></code></pre></div>`,3)]))}const m=s(t,[["render",l]]);export{u as __pageData,m as default};
