import{_ as a,c as s,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const h=JSON.parse('{"title":"Proxy","description":"","frontmatter":{},"headers":[],"relativePath":"js/Proxy.md","filePath":"js/Proxy.md"}'),l={name:"js/Proxy.md"};function t(i,n,o,c,r,d){return e(),s("div",null,n[0]||(n[0]=[p(`<h1 id="proxy" tabindex="-1">Proxy <a class="header-anchor" href="#proxy" aria-label="Permalink to &quot;Proxy&quot;">​</a></h1><p>代理器: 在目标对象之前架设一层&quot;拦截&quot;，外界对该对象的访问，都必须先通过这层拦截 。</p><h2 id="_1、get-方法" tabindex="-1">1、get()方法 <a class="header-anchor" href="#_1、get-方法" aria-label="Permalink to &quot;1、get()方法&quot;">​</a></h2><p>get方法是用于拦截某个属性的读取操作，可以接受三个参数，依次为 target:目标对象；prop:属性名； proxy实例本身 (操作行为所针对的对象)，最后一个参数可选</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var person ={</span></span>
<span class="line"><span>  name:&quot;jack&quot;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>var proxy =new Proxy(person,{</span></span>
<span class="line"><span>    get: function(target,prop) {</span></span>
<span class="line"><span>        if(prop in target){</span></span>
<span class="line"><span>            console.log(target[prop]);</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            throw new ReferenceError(&quot;Prop name \\&quot;&quot; + propKey + &quot;\\&quot; does not exist.&quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>proxy.name//jack</span></span>
<span class="line"><span>proxy.age//抛出一个错误</span></span></code></pre></div><h2 id="_2、-set-方法" tabindex="-1">2、 set()方法 <a class="header-anchor" href="#_2、-set-方法" aria-label="Permalink to &quot;2、 set()方法&quot;">​</a></h2><p>set()方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为 target:目标对象；prop:属性名；value:属性值； Proxy 实例本身，其中最后一个参数可选。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var person ={</span></span>
<span class="line"><span>    name:&#39;john&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>var proxy =new Proxy(person,{</span></span>
<span class="line"><span>    set: function(target,prop,value){</span></span>
<span class="line"><span>        if(prop===&#39;age&#39;){</span></span>
<span class="line"><span>            if(value&gt;200){</span></span>
<span class="line"><span>                throw new RangeError(&#39;不符合范围&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>                target[prop] = value;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>proxy.age=400//报错，不继续执行</span></span>
<span class="line"><span>proxy.age=100//100</span></span></code></pre></div><h2 id="_3、-apply-方法" tabindex="-1">3、 apply()方法 <a class="header-anchor" href="#_3、-apply-方法" aria-label="Permalink to &quot;3、 apply()方法&quot;">​</a></h2><p>pply方法拦截函数的调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var target = function(){ return &#39;I am the target&#39;};</span></span>
<span class="line"><span>var handler = {</span></span>
<span class="line"><span>  apply: function(){</span></span>
<span class="line"><span>    return &#39;i am the proxy&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var p = new Proxy(target, handler);</span></span>
<span class="line"><span>console.log(p());  // &quot;i am the proxy&quot;</span></span></code></pre></div><h2 id="_4、为什么要存在proxy" tabindex="-1">4、为什么要存在Proxy? <a class="header-anchor" href="#_4、为什么要存在proxy" aria-label="Permalink to &quot;4、为什么要存在Proxy?&quot;">​</a></h2><p>因为在ES6之前，我们使用Object.defineProperty()来设置监听器，来监听对象属性的获取和改写。但是如果其中存在其他的一些操作，我们是无法监测到的，所以为了解决这样一个问题，在ES6中增加了Proxy代理。Proxy可以帮助我们监听对象中的操作。</p><ul><li>Object.defineProperty</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let info = {</span></span>
<span class="line"><span>  name: &#39;dmc&#39;,</span></span>
<span class="line"><span>  age: 20</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(info, &#39;name&#39;, {</span></span>
<span class="line"><span>  get() {</span></span>
<span class="line"><span>    console.log(&#39;get--获取info的name值&#39;)</span></span>
<span class="line"><span>    return &#39;dl&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set() {</span></span>
<span class="line"><span>    console.log(&#39;set--设置info的name值&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(info.name) // get--获取info的name值   dl</span></span>
<span class="line"><span>info.name = &#39;dmc&#39;  // set--设置info的name值</span></span></code></pre></div><ul><li>Proxy</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let info = {</span></span>
<span class="line"><span>  name: &#39;dmc&#39;,</span></span>
<span class="line"><span>  age: 20</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let infoProxy = new Proxy(info, {</span></span>
<span class="line"><span>  get(target, key) {</span></span>
<span class="line"><span>    console.log(&#39;获取对象属性&#39;)</span></span>
<span class="line"><span>    return target[key]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set(target, key, newValue) {</span></span>
<span class="line"><span>    console.log(&#39;设置对象属性&#39;)</span></span>
<span class="line"><span>    target[key] = newValue</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,17)]))}const u=a(l,[["render",t]]);export{h as __pageData,u as default};
