import{_ as s,c as a,a0 as p,o as e}from"./chunks/framework.BYlfzdEH.js";const f=JSON.parse('{"title":"defineProps、defineEmits、defineExpose","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/defineProps,defineEmits,defineExpose.md","filePath":"vue3/defineProps,defineEmits,defineExpose.md"}'),l={name:"vue3/defineProps,defineEmits,defineExpose.md"};function t(i,n,c,o,u,r){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="defineprops、defineemits、defineexpose" tabindex="-1">defineProps、defineEmits、defineExpose <a class="header-anchor" href="#defineprops、defineemits、defineexpose" aria-label="Permalink to &quot;defineProps、defineEmits、defineExpose&quot;">​</a></h1><ul><li>defineProps用来父子组件之间数据传递</li><li>defineEmits用来定义组件事件</li><li>defineExpose暴露给父组件的方法或属性</li></ul><h2 id="_1、defineprops" tabindex="-1">1、defineProps <a class="header-anchor" href="#_1、defineprops" aria-label="Permalink to &quot;1、defineProps&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- Parent.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;Counter :initialCount=&quot;count&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script  setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import Counter from &#39;./Counter.vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(100);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- Counter.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;{{ count }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义属性</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  initialCount: {</span></span>
<span class="line"><span>    type: Number,</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用属性</span></span>
<span class="line"><span>const count = ref(props.initialCount);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function increment() {</span></span>
<span class="line"><span>  count.value++;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_2、defineemits" tabindex="-1">2、defineEmits <a class="header-anchor" href="#_2、defineemits" aria-label="Permalink to &quot;2、defineEmits&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- Parent.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;Counter :initialCount=&quot;count&quot; @update:count=&quot;handleCountUpdate&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import Counter &#39;./Counter.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(100)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleCountUpdate(value) {</span></span>
<span class="line"><span>  console.log(value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- Counter.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;{{ count }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;handleIncrement&quot;&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义属性</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  initialCount: {</span></span>
<span class="line"><span>    type: Number,</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义事件</span></span>
<span class="line"><span>const emit = defineEmits([&#39;update:count&#39;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(props.initialCount);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleIncrement() {</span></span>
<span class="line"><span>  count.value++;</span></span>
<span class="line"><span>  emit(&#39;update:count&#39;, count.value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_3、defineexpose" tabindex="-1">3、defineExpose <a class="header-anchor" href="#_3、defineexpose" aria-label="Permalink to &quot;3、defineExpose&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- Parent --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;Counter ref=&quot;counter&quot; :initialCount=&quot;10&quot; @update:count=&quot;handleCountUpdate&quot; /&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;resetCounter&quot;&gt;Reset Counter&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import Counter from &#39;./Counter.vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const counter = ref(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleCountUpdate(value) {</span></span>
<span class="line"><span>  console.log(value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function resetCounter() {</span></span>
<span class="line"><span>  counter.value.reset();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- Counter.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;{{ count }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义属性</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  initialCount: {</span></span>
<span class="line"><span>    type: Number,</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义事件</span></span>
<span class="line"><span>const emit = defineEmits([&#39;update:count&#39;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(props.initialCount);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function increment() {</span></span>
<span class="line"><span>  count.value++;</span></span>
<span class="line"><span>  emit(&#39;update:count&#39;, count.value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function resetCount() {</span></span>
<span class="line"><span>  count.value = props.initialCount;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 暴露方法</span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  reset: resetCount</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,8)]))}const m=s(l,[["render",t]]);export{f as __pageData,m as default};
