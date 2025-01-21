import{_ as s,c as n,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const h=JSON.parse('{"title":"组件通讯","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/组件通讯.md","filePath":"vue2/组件通讯.md"}'),l={name:"vue2/组件通讯.md"};function t(i,a,c,o,d,u){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="组件通讯" tabindex="-1">组件通讯 <a class="header-anchor" href="#组件通讯" aria-label="Permalink to &quot;组件通讯&quot;">​</a></h1><h2 id="_1、eventbus" tabindex="-1">1、eventBus <a class="header-anchor" href="#_1、eventbus" aria-label="Permalink to &quot;1、eventBus&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//mian.js</span></span>
<span class="line"><span>window.EventBus = new Vue();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//兄弟1（调用者）</span></span>
<span class="line"><span>EventBus.$emit(&quot;setVal&quot;, data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//兄弟2（被调用者）</span></span>
<span class="line"><span>//mounted()钩子中监听</span></span>
<span class="line"><span>EventBus.$on(&#39;setVal&#39;, (data) =&gt; {</span></span>
<span class="line"><span>    console.log(data);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2、子组件调用父组件的方法" tabindex="-1">2、子组件调用父组件的方法 <a class="header-anchor" href="#_2、子组件调用父组件的方法" aria-label="Permalink to &quot;2、子组件调用父组件的方法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//父组件</span></span>
<span class="line"><span>&lt;child @refreshList=&quot;onRefresList&quot;&gt;&lt;/child&gt;  </span></span>
<span class="line"><span>onRefresList(data){</span></span>
<span class="line"><span>    console.log(data);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//子组件 </span></span>
<span class="line"><span>this.$emit(&#39;refreshList&#39;,data);</span></span></code></pre></div><h2 id="_3、父组件调用子组件的方法" tabindex="-1">3、父组件调用子组件的方法 <a class="header-anchor" href="#_3、父组件调用子组件的方法" aria-label="Permalink to &quot;3、父组件调用子组件的方法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//父组件</span></span>
<span class="line"><span>&lt;coma :das=&quot;da&quot; ref=&quot;comA&quot;&gt;&lt;/coma&gt;   //子</span></span>
<span class="line"><span>this.$refs.comA.say(&quot;data&quot;);  //调用子的事件，并传值过去</span></span>
<span class="line"><span>this.$refs.comA.val++;  //改变子的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//子组件</span></span>
<span class="line"><span>say(data){</span></span>
<span class="line"><span>    console.log(data);</span></span>
<span class="line"><span>    alert(&quot;父调用我的&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4、父组件传子组件" tabindex="-1">4、父组件传子组件 <a class="header-anchor" href="#_4、父组件传子组件" aria-label="Permalink to &quot;4、父组件传子组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//父组件</span></span>
<span class="line"><span>&lt;child :inputName=&quot;name&quot;&gt;&lt;/child&gt;  //name是父组件的data里的值</span></span>
<span class="line"><span>&lt;child inputName=&quot;name&quot;&gt;&lt;/child&gt;  //name是一个字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//子组件</span></span>
<span class="line"><span>props: [&quot;inputName&quot;,&quot;head&quot;]</span></span>
<span class="line"><span>传过来的值不能在data里出现，不能修改，拿到后应用变量存着，其他来操作变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//子组件传过来验证、有默认值</span></span>
<span class="line"><span>props: {</span></span>
<span class="line"><span>    &#39;head&#39;: Object,</span></span>
<span class="line"><span>    &#39;pagecount&#39;: {</span></span>
<span class="line"><span>        default: 5,</span></span>
<span class="line"><span>        type: Number  //String Number Boolean Function Object Array Symbol</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9)]))}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
