import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.wfMVytlW.js";const u=JSON.parse('{"title":"对象","description":"","frontmatter":{},"headers":[],"relativePath":"js/对象.md","filePath":"js/对象.md"}'),t={name:"js/对象.md"};function l(i,a,o,c,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h1><h2 id="_1、对象字面量" tabindex="-1">1、对象字面量 <a class="header-anchor" href="#_1、对象字面量" aria-label="Permalink to &quot;1、对象字面量&quot;">​</a></h2><h3 id="_1-1、属性的简洁表示法" tabindex="-1">1.1、属性的简洁表示法 <a class="header-anchor" href="#_1-1、属性的简洁表示法" aria-label="Permalink to &quot;1.1、属性的简洁表示法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const age = 12;</span></span>
<span class="line"><span>const name = &quot;Amy&quot;;</span></span>
<span class="line"><span>const person = {age, name};</span></span>
<span class="line"><span>person   //{age: 12, name: &quot;Amy&quot;}</span></span>
<span class="line"><span>//等同于</span></span>
<span class="line"><span>const person = {age: age, name: name}</span></span></code></pre></div><h3 id="_1-2、方法名简写" tabindex="-1">1.2、方法名简写 <a class="header-anchor" href="#_1-2、方法名简写" aria-label="Permalink to &quot;1.2、方法名简写&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const person = {</span></span>
<span class="line"><span>  sayHi(){</span></span>
<span class="line"><span>    console.log(&quot;Hi&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>person.sayHi();  //&quot;Hi&quot;</span></span>
<span class="line"><span>//等同于</span></span>
<span class="line"><span>const person = {</span></span>
<span class="line"><span>  sayHi:function(){</span></span>
<span class="line"><span>    console.log(&quot;Hi&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>person.sayHi();//&quot;Hi&quot;</span></span></code></pre></div><h2 id="_2、对象的拓展运算符" tabindex="-1">2、对象的拓展运算符 <a class="header-anchor" href="#_2、对象的拓展运算符" aria-label="Permalink to &quot;2、对象的拓展运算符&quot;">​</a></h2><h3 id="_2-1、基本用法" tabindex="-1">2.1、基本用法 <a class="header-anchor" href="#_2-1、基本用法" aria-label="Permalink to &quot;2.1、基本用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let person = {name: &quot;Amy&quot;, age: 15};</span></span>
<span class="line"><span>let someone = { ...person }; </span></span>
<span class="line"><span>someone;  //{name: &quot;Amy&quot;, age: 15}</span></span></code></pre></div><h3 id="_2-2、合并两个对象" tabindex="-1">2.2、合并两个对象 <a class="header-anchor" href="#_2-2、合并两个对象" aria-label="Permalink to &quot;2.2、合并两个对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let age = {age: 15};</span></span>
<span class="line"><span>let name = {name: &quot;Amy&quot;};</span></span>
<span class="line"><span>let person = {...age, ...name};</span></span>
<span class="line"><span>person;  //{age: 15, name: &quot;Amy&quot;}</span></span></code></pre></div><h2 id="_3、对象的新方法" tabindex="-1">3、对象的新方法 <a class="header-anchor" href="#_3、对象的新方法" aria-label="Permalink to &quot;3、对象的新方法&quot;">​</a></h2><h3 id="_3-1、object-assign" tabindex="-1">3.1、Object.assign <a class="header-anchor" href="#_3-1、object-assign" aria-label="Permalink to &quot;3.1、Object.assign&quot;">​</a></h3><p>Object.assign(targetObj, sourceObj,sourceObj,sourceObj); 第一个参数是目标对象，后面的参数是源对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let target = {a: 1};</span></span>
<span class="line"><span>let object2 = {b: 2};</span></span>
<span class="line"><span>let object3 = {c: 3};</span></span>
<span class="line"><span>Object.assign(target,object2,object3);  </span></span>
<span class="line"><span>target;  // {a: 1, b: 2, c: 3}</span></span></code></pre></div>`,15)]))}const b=s(t,[["render",l]]);export{u as __pageData,b as default};
