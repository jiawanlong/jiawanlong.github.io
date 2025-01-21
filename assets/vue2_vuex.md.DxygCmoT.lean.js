import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const h=JSON.parse('{"title":"组件通讯","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/vuex.md","filePath":"vue2/vuex.md"}'),t={name:"vue2/vuex.md"};function l(i,s,o,c,r,u){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="组件通讯" tabindex="-1">组件通讯 <a class="header-anchor" href="#组件通讯" aria-label="Permalink to &quot;组件通讯&quot;">​</a></h1><h2 id="_1、文件存放" tabindex="-1">1、文件存放 <a class="header-anchor" href="#_1、文件存放" aria-label="Permalink to &quot;1、文件存放&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>└── store</span></span>
<span class="line"><span>    ├── index.js          # 我们组装模块并导出 store 的地方</span></span>
<span class="line"><span>    └── modules</span></span>
<span class="line"><span>        ├── demo1.js         # 模块1</span></span>
<span class="line"><span>        └── demo2.js         # 模块2</span></span></code></pre></div><h2 id="_2、main-js存放的内容" tabindex="-1">2、main.js存放的内容 <a class="header-anchor" href="#_2、main-js存放的内容" aria-label="Permalink to &quot;2、main.js存放的内容&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span>import router from &#39;./router&#39;</span></span>
<span class="line"><span>import store from &#39;./store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.config.productionTip = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.EventBus = new Vue();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>  router,</span></span>
<span class="line"><span>  store,</span></span>
<span class="line"><span>  render: h =&gt; h(App)</span></span>
<span class="line"><span>}).$mount(&#39;#app&#39;)</span></span></code></pre></div><h2 id="_3、idex-js存放的内容" tabindex="-1">3、idex.js存放的内容 <a class="header-anchor" href="#_3、idex-js存放的内容" aria-label="Permalink to &quot;3、idex.js存放的内容&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import Vuex from &#39;vuex&#39;</span></span>
<span class="line"><span>import demo1 from &#39;./modules/demo1&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(Vuex)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default new Vuex.Store({</span></span>
<span class="line"><span>  modules: {</span></span>
<span class="line"><span>    demo1,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_4、demo1-js存放的内容" tabindex="-1">4、demo1.js存放的内容 <a class="header-anchor" href="#_4、demo1-js存放的内容" aria-label="Permalink to &quot;4、demo1.js存放的内容&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let user = {</span></span>
<span class="line"><span>    // 状态state用于存储所有组件的数据。</span></span>
<span class="line"><span>    state: {</span></span>
<span class="line"><span>        text: &quot;我是字符串&quot;,</span></span>
<span class="line"><span>        bool: true,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // .getters:计算属性，对state里的变量进行过滤</span></span>
<span class="line"><span>    getters: {</span></span>
<span class="line"><span>        text123: function (state) {</span></span>
<span class="line"><span>            return state.text + &#39;123456&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // mutations:唯一可以改变state数据的工具，相当于vue里的methods</span></span>
<span class="line"><span>    mutations: {</span></span>
<span class="line"><span>        SET_TEXT: (state, text) =&gt; {</span></span>
<span class="line"><span>            state.text = text;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 异步操作</span></span>
<span class="line"><span>    // 只能调用mutations,不能直接修改state</span></span>
<span class="line"><span>    actions: {</span></span>
<span class="line"><span>        SET_TEXT: (state, text) =&gt; {</span></span>
<span class="line"><span>            return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>                setTimeout(() =&gt; {</span></span>
<span class="line"><span>                    state.commit(&quot;SET_TEXT&quot;, text);//修改了cartNum的值为1</span></span>
<span class="line"><span>                    resolve()</span></span>
<span class="line"><span>                }, 3000)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default user</span></span></code></pre></div><h2 id="_5、使用-不使用辅助函数" tabindex="-1">5、使用（不使用辅助函数） <a class="header-anchor" href="#_5、使用-不使用辅助函数" aria-label="Permalink to &quot;5、使用（不使用辅助函数）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  async mounted() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(this.$store.state.demo1.text);</span></span>
<span class="line"><span>    console.log(this.$store.getters.text123);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>     this.$store.commit(&quot;SET_TEXT&quot;, &quot;wwwwwwwww&quot;);</span></span>
<span class="line"><span>    console.log(this.$store.state.demo1.text);</span></span>
<span class="line"><span>    console.log(this.$store.getters.text123);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // this.$store.dispatch(&quot;SET_TEXT&quot;, &quot;xxxxxxxxxxxx&quot;).then(() =&gt; {</span></span>
<span class="line"><span>    //   console.log(this.$store.state.demo1.text);</span></span>
<span class="line"><span>    //   console.log(this.$store.getters.text123);</span></span>
<span class="line"><span>    // });</span></span>
<span class="line"><span>    await this.$store.dispatch(&quot;SET_TEXT&quot;, &quot;xxxxxxxxxxxx&quot;);</span></span>
<span class="line"><span>    console.log(this.$store.state.demo1.text);</span></span>
<span class="line"><span>    console.log(this.$store.getters.text123);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_6、使用-使用辅助函数" tabindex="-1">6、使用（使用辅助函数） <a class="header-anchor" href="#_6、使用-使用辅助函数" aria-label="Permalink to &quot;6、使用（使用辅助函数）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { mapState, mapGetters, mapActions, mapMutations } from &quot;vuex&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>    ...mapState([&quot;demo1&quot;]),</span></span>
<span class="line"><span>    ...mapGetters([&quot;text123&quot;]),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    ...mapActions([&quot;SET_TEXT&quot;]),</span></span>
<span class="line"><span>    ...mapMutations({ SET_TEXT_123: &quot;SET_TEXT&quot; }),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  async mounted() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(this.demo1.text);</span></span>
<span class="line"><span>    console.log(this.text123);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.SET_TEXT_123(&quot;wwwwwwwww&quot;);</span></span>
<span class="line"><span>    console.log(this.demo1.text);</span></span>
<span class="line"><span>    console.log(this.text123);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // this.$store.dispatch(&quot;SET_TEXT&quot;, &quot;xxxxxxxxxxxx&quot;).then(() =&gt; {</span></span>
<span class="line"><span>    //   console.log(this.demo1.text);</span></span>
<span class="line"><span>    //   console.log(this.text123);</span></span>
<span class="line"><span>    // });</span></span>
<span class="line"><span>    await this.$store.dispatch(&quot;SET_TEXT&quot;, &quot;xxxxxxxxxxxx&quot;);</span></span>
<span class="line"><span>    console.log(this.demo1.text);</span></span>
<span class="line"><span>    console.log(this.text123);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,13)]))}const x=n(t,[["render",l]]);export{h as __pageData,x as default};
