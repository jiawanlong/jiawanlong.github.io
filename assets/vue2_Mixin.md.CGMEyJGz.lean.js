import{_ as a,c as s,a0 as i,o as p}from"./chunks/framework.BYlfzdEH.js";const m=JSON.parse('{"title":"mixin用法","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/Mixin.md","filePath":"vue2/Mixin.md"}'),l={name:"vue2/Mixin.md"};function e(t,n,o,c,r,d){return p(),s("div",null,n[0]||(n[0]=[i(`<h1 id="mixin用法" tabindex="-1">mixin用法 <a class="header-anchor" href="#mixin用法" aria-label="Permalink to &quot;mixin用法&quot;">​</a></h1><ul><li>mixin中的生命周期函数会和组件的生命周期函数都执行。<strong>先执行mixin中的，后执行组件的</strong>。</li><li>mixin中的<strong>data数据</strong>和<strong>方法</strong>在组件内部可以直接调用。</li><li>一个组件中改动了mixin中的数据，另一个引用了mixin的组件<strong>不受影响</strong>。</li><li>当组件和mixin的数据或者方法冲突，<strong>组件中的数据和方法会覆盖mixin中数据和方法</strong></li></ul><h2 id="_1、mixin定义" tabindex="-1">1、mixin定义 <a class="header-anchor" href="#_1、mixin定义" aria-label="Permalink to &quot;1、mixin定义&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const mixins = {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &quot;我是小猪课堂&quot;,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {},</span></span>
<span class="line"><span>  created() {</span></span>
<span class="line"><span>    console.log(&quot;我是mixin中的created生命周期函数&quot;);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    console.log(&quot;我是mixin中的mounted生命周期函数&quot;);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    clickMe() {</span></span>
<span class="line"><span>      console.log(&quot;我是mixin中的点击事件&quot;);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="_2、执行顺序" tabindex="-1">2、执行顺序 <a class="header-anchor" href="#_2、执行顺序" aria-label="Permalink to &quot;2、执行顺序&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(&quot;我是mixin中的created生命周期函数&quot;);</span></span>
<span class="line"><span>console.log(&quot;我是组件中的created生命周期函数&quot;);</span></span>
<span class="line"><span>console.log(&quot;我是mixin中的mounted生命周期函数&quot;);</span></span>
<span class="line"><span>console.log(&quot;我是组件中的mounted生命周期函数&quot;);</span></span></code></pre></div><h2 id="_2、局部混入" tabindex="-1">2、局部混入 <a class="header-anchor" href="#_2、局部混入" aria-label="Permalink to &quot;2、局部混入&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>     &lt;!-- 调用minxin的方法 --&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;clickMe&quot;&gt;点击我&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { mixins } from &quot;./mixin/index&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;App&quot;,</span></span>
<span class="line"><span>  mixins: [mixins],</span></span>
<span class="line"><span>  components: {},</span></span>
<span class="line"><span>  created(){</span></span>
<span class="line"><span>    &lt;!-- 调用minxin的数据 --&gt;</span></span>
<span class="line"><span>    console.log(&quot;组件调用minxi数据&quot;,this.msg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_3、全局混入" tabindex="-1">3、全局混入 <a class="header-anchor" href="#_3、全局混入" aria-label="Permalink to &quot;3、全局混入&quot;">​</a></h2><ul><li>main.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { mixins } from &quot;./mixin/index&quot;;</span></span>
<span class="line"><span>Vue.mixin(mixins);</span></span></code></pre></div><h2 id="_4、mixin的优缺点" tabindex="-1">4、mixin的优缺点 <a class="header-anchor" href="#_4、mixin的优缺点" aria-label="Permalink to &quot;4、mixin的优缺点&quot;">​</a></h2><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ul><li>提高代码复用性</li><li>无需传递状态</li><li>维护方便，只需要修改一个地方即可</li></ul><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><ul><li>命名冲突</li><li>滥用的话后期很难维护</li><li>不好追溯源，排查问题稍显麻烦</li><li>不能轻易的重复代码</li></ul>`,16)]))}const h=a(l,[["render",e]]);export{m as __pageData,h as default};
