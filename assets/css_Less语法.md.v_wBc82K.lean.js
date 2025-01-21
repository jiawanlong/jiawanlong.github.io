import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.BYlfzdEH.js";const b=JSON.parse('{"title":"Less语法","description":"","frontmatter":{},"headers":[],"relativePath":"css/Less语法.md","filePath":"css/Less语法.md"}'),t={name:"css/Less语法.md"};function i(l,a,c,o,d,h){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="less语法" tabindex="-1">Less语法 <a class="header-anchor" href="#less语法" aria-label="Permalink to &quot;Less语法&quot;">​</a></h1><h2 id="_1、变量" tabindex="-1">1、变量 <a class="header-anchor" href="#_1、变量" aria-label="Permalink to &quot;1、变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@width: 10px;</span></span>
<span class="line"><span>@height: @width + 10px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#header {</span></span>
<span class="line"><span>  width: @width;</span></span>
<span class="line"><span>  height: @height;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2、混合" tabindex="-1">2、混合 <a class="header-anchor" href="#_2、混合" aria-label="Permalink to &quot;2、混合&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.bordered {</span></span>
<span class="line"><span>  border-top: 1px solid #ccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.box {</span></span>
<span class="line"><span>  .bordered();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3、嵌套" tabindex="-1">3、嵌套 <a class="header-anchor" href="#_3、嵌套" aria-label="Permalink to &quot;3、嵌套&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    .bordered();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3、运算符" tabindex="-1">3、运算符 <a class="header-anchor" href="#_3、运算符" aria-label="Permalink to &quot;3、运算符&quot;">​</a></h2><p>+、-、*、/</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@width: 10px;</span></span>
<span class="line"><span>@height: 20px;</span></span>
<span class="line"><span>@total: @width + @height;</span></span>
<span class="line"><span>.box {</span></span>
<span class="line"><span>  width: @total;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4、函数" tabindex="-1">4、函数 <a class="header-anchor" href="#_4、函数" aria-label="Permalink to &quot;4、函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  width: percentage(@width); // returns \`50%\`</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,12)]))}const u=s(t,[["render",i]]);export{b as __pageData,u as default};
