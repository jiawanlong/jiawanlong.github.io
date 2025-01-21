import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const f=JSON.parse('{"title":"ref和reactive","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/ref和reactive.md","filePath":"vue3/ref和reactive.md"}'),t={name:"vue3/ref和reactive.md"};function l(i,s,c,o,r,u){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="ref和reactive" tabindex="-1">ref和reactive <a class="header-anchor" href="#ref和reactive" aria-label="Permalink to &quot;ref和reactive&quot;">​</a></h1><ul><li>reactive 适合复杂对象</li><li>ref 适合简单的响应式，或者DOM</li></ul><h2 id="_1、创建对象" tabindex="-1">1、创建对象 <a class="header-anchor" href="#_1、创建对象" aria-label="Permalink to &quot;1、创建对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { ref,reactive  } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0);</span></span>
<span class="line"><span>count.value++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const user = reactive({</span></span>
<span class="line"><span>  name: &#39;John Doe&#39;,</span></span>
<span class="line"><span>  address: {</span></span>
<span class="line"><span>    street: &#39;123 Main St&#39;,</span></span>
<span class="line"><span>    city: &#39;Anytown&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="_2、vue3-ref获取dom-inputref-value" tabindex="-1">2、Vue3 ref获取DOM（ inputRef.value） <a class="header-anchor" href="#_2、vue3-ref获取dom-inputref-value" aria-label="Permalink to &quot;2、Vue3 ref获取DOM（ inputRef.value）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;input ref=&quot;inputRef&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;focusInput&quot;&gt;Focus Input&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const inputRef = ref(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const focusInput = () =&gt; {</span></span>
<span class="line"><span>  inputRef.value.focus();</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  inputRef.value.focus();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_3、vue2-ref获取dom-this-refs-inputref" tabindex="-1">3、Vue2 ref获取DOM（ this.$refs.inputRef） <a class="header-anchor" href="#_3、vue2-ref获取dom-this-refs-inputref" aria-label="Permalink to &quot;3、Vue2 ref获取DOM（ this.$refs.inputRef）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;input ref=&quot;inputRef&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;focusInput&quot;&gt;Focus Input&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    focusInput() {</span></span>
<span class="line"><span>      this.$refs.inputRef.focus();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    // 组件挂载后自动聚焦输入框</span></span>
<span class="line"><span>    this.$refs.inputRef.focus();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_4、toref和torefs" tabindex="-1">4、toRef和toRefs <a class="header-anchor" href="#_4、toref和torefs" aria-label="Permalink to &quot;4、toRef和toRefs&quot;">​</a></h2><p>toRef</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt; </span></span>
<span class="line"><span>    {{ nameRef}} </span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;  </span></span>
<span class="line"><span>import { reactive, toRef } from &#39;vue&#39;	</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  name: &#39;Vue 3&#39;,</span></span>
<span class="line"><span>  version: &#39;3.0.0&#39;</span></span>
<span class="line"><span>})	</span></span>
<span class="line"><span>const nameRef = toRef(state, &#39;name&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;	</span></span>
<span class="line"><span>&lt;style scoped&gt;	</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>toRefs</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt; </span></span>
<span class="line"><span>    {{ refs.name }} ---{{ refs.version }}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;  </span></span>
<span class="line"><span>import { reactive, toRefs } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  name: &#39;Vue 3&#39;,</span></span>
<span class="line"><span>  version: &#39;3.0.0&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const refs = toRefs(state)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,13)]))}const v=n(t,[["render",l]]);export{f as __pageData,v as default};
