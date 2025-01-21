import{_ as a,c as s,a0 as p,o as t}from"./chunks/framework.wfMVytlW.js";const m=JSON.parse('{"title":"组件通讯","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/组件通讯.md","filePath":"vue3/组件通讯.md"}'),e={name:"vue3/组件通讯.md"};function l(i,n,c,o,r,d){return t(),s("div",null,n[0]||(n[0]=[p(`<h1 id="组件通讯" tabindex="-1">组件通讯 <a class="header-anchor" href="#组件通讯" aria-label="Permalink to &quot;组件通讯&quot;">​</a></h1><ul><li>props/$emit</li><li>vuex/pinia</li><li>provide/inject</li><li>mitt</li></ul><h2 id="_1、props-emits" tabindex="-1">1、Props / Emits <a class="header-anchor" href="#_1、props-emits" aria-label="Permalink to &quot;1、Props / Emits&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Parent.vue</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;ChildComponent :parentData=&quot;parentData&quot; @updateData=&quot;updateParentData&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import ChildComponent from &#39;./ChildComponent.vue&#39;;</span></span>
<span class="line"><span>const parentData = ref(&#39;initial data&#39;);</span></span>
<span class="line"><span>function updateParentData(newData) {</span></span>
<span class="line"><span>  parentData.value = newData;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Child.vue</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;{{ parentData }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;updateDataToParent(&#39;new data&#39;)&quot;&gt;Update Data&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt; </span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { defineProps, defineEmits } from &#39;vue&#39;;</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  parentData: String</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const emit = defineEmits([&#39;updateData&#39;]);</span></span>
<span class="line"><span>function updateDataToParent(newData) {</span></span>
<span class="line"><span>  emit(&#39;updateData&#39;, newData);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_2、provide-inject" tabindex="-1">2、provide/inject <a class="header-anchor" href="#_2、provide-inject" aria-label="Permalink to &quot;2、provide/inject&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Parent.vue</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>    import { provide } from &quot;vue&quot;</span></span>
<span class="line"><span>    provide(&quot;name&quot;, &quot;RDIF&quot;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Child.vue</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>    import { inject } from &quot;vue&quot;</span></span>
<span class="line"><span>    const name = inject(&quot;name&quot;)</span></span>
<span class="line"><span>    console.log(name) // RDIF</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_3、mitt" tabindex="-1">3、mitt <a class="header-anchor" href="#_3、mitt" aria-label="Permalink to &quot;3、mitt&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// mitt.js</span></span>
<span class="line"><span>import mitt from &#39;mitt&#39;</span></span>
<span class="line"><span>const mitt = mitt()</span></span>
<span class="line"><span>export default mitt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件 A</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import mitt from &#39;./mitt&#39;</span></span>
<span class="line"><span>const handleClick = () =&gt; {</span></span>
<span class="line"><span>    mitt.emit(&#39;handleChange&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件 B </span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import mitt from &#39;./mitt&#39;</span></span>
<span class="line"><span>import { onUnmounted,onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>function someMethed(){</span></span>
<span class="line"><span>    alewrth(&#39;hello&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>onMounted(()=&gt;{</span></span>
<span class="line"><span>    mitt.on(&#39;handleChange&#39;,someMethed)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>onUnmounted(()=&gt;{</span></span>
<span class="line"><span>    mitt.off(&#39;handleChange&#39;,someMethed)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,8)]))}const h=a(e,[["render",l]]);export{m as __pageData,h as default};
