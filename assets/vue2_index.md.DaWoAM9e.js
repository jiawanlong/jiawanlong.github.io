import{_ as n,c as a,a0 as p,o as l}from"./chunks/framework.BYlfzdEH.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/index.md","filePath":"vue2/index.md"}'),e={name:"vue2/index.md"};function t(i,s,c,o,d,r){return l(),a("div",null,s[0]||(s[0]=[p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;&quot;&gt;</span></span>
<span class="line"><span>    &lt;demo&gt;&lt;/demo&gt;</span></span>
<span class="line"><span>   &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { mapState, mapGetters, mapActions, mapMutations } from &quot;vuex&quot;;</span></span>
<span class="line"><span>import { list, add, edit, del } from &quot;@/api/demo.js&quot;;</span></span>
<span class="line"><span>import demo from &#39;./demo&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {demo},</span></span>
<span class="line"><span>  props: [&quot;demo&quot;],</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>    ...mapState([&quot;demo&quot;]),</span></span>
<span class="line"><span>    ...mapGetters([&quot;demo&quot;]),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    demo: {</span></span>
<span class="line"><span>      handler(newVal, oldVal) {</span></span>
<span class="line"><span>        console.log(newVal);</span></span>
<span class="line"><span>        this.init();</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      immediate: true,</span></span>
<span class="line"><span>      deep: true,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  crtated(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeDestroy() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    init(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>@import url(&quot;./demo.less&quot;);</span></span>
<span class="line"><span>.task {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1)]))}const g=n(e,[["render",t]]);export{u as __pageData,g as default};
