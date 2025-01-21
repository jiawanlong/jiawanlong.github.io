import{_ as s,c as a,a0 as p,o as e}from"./chunks/framework.BYlfzdEH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/index.md","filePath":"vue3/index.md"}'),l={name:"vue3/index.md"};function t(i,n,c,o,u,r){return e(),a("div",null,n[0]||(n[0]=[p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;main&quot;&gt;</span></span>
<span class="line"><span>        &lt;input ref=&quot;inputRef&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup name=&quot;achievementdirectory&quot;&gt;</span></span>
<span class="line"><span>import { ref, reactive, onMounted, defineProps, watch } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const inputRef = ref(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    type: Object,</span></span>
<span class="line"><span>    default: {},</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(() =&gt; props.data, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span>   nextTick(() =&gt; {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>},{ deep: true, immediate: true })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  // inputRef.value.focus();</span></span>
<span class="line"><span>  init()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function init(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1)]))}const f=s(l,[["render",t]]);export{g as __pageData,f as default};
