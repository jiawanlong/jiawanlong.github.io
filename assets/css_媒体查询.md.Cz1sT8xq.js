import{_ as a,c as n,a0 as p,o as e}from"./chunks/framework.BYlfzdEH.js";const u=JSON.parse('{"title":"媒体查询","description":"","frontmatter":{},"headers":[],"relativePath":"css/媒体查询.md","filePath":"css/媒体查询.md"}'),i={name:"css/媒体查询.md"};function t(l,s,c,d,o,h){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h1><h2 id="_1、引不同的css文件" tabindex="-1">1、引不同的css文件 <a class="header-anchor" href="#_1、引不同的css文件" aria-label="Permalink to &quot;1、引不同的css文件&quot;">​</a></h2><p>0、screen打印页面时用到，可以直接省略。 1、当屏幕的宽度大于等于400px的时候，应用styleA.css</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;styleA.css&quot; media=&quot;screen and (min-width: 400px)&quot;&gt;</span></span></code></pre></div><p>2、当屏幕的宽度大于600小于800时，应用styleB.css</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;styleB.css&quot;  media=&quot;screen and (min-width: 600px) and (max-width: 800px)&quot;&gt;</span></span></code></pre></div><h2 id="_2、style-标签" tabindex="-1">2、style 标签 <a class="header-anchor" href="#_2、style-标签" aria-label="Permalink to &quot;2、style 标签&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*当屏幕尺寸小于600px时，应用下面的CSS样式*/</span></span>
<span class="line"><span>@media screen and (max-width: 600px) { </span></span>
<span class="line"><span>    .class {</span></span>
<span class="line"><span>        background: #ccc;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3、media具体用法" tabindex="-1">3、Media具体用法 <a class="header-anchor" href="#_3、media具体用法" aria-label="Permalink to &quot;3、Media具体用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@media screen and (min-width:960px) and (max-width:1200px){</span></span>
<span class="line"><span>    body{</span></span>
<span class="line"><span>        background:yellow;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4、自适应写法" tabindex="-1">4、自适应写法 <a class="header-anchor" href="#_4、自适应写法" aria-label="Permalink to &quot;4、自适应写法&quot;">​</a></h2><p>注意顺序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@media (min-width: 1024px){</span></span>
<span class="line"><span>  body{font-size: 18px}</span></span>
<span class="line"><span>} /*&gt;=1024的设备*/</span></span>
<span class="line"><span>@media (min-width: 1100px) {</span></span>
<span class="line"><span>  body{font-size: 20px}</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>@media (min-width: 1280px) {</span></span>
<span class="line"><span>  body{font-size: 22px;}</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>@media (min-width: 1366px) {</span></span>
<span class="line"><span>  body{font-size: 24px;}</span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>@media (min-width: 1440px) {</span></span>
<span class="line"><span>  body{font-size: 25px !important;}</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>@media (min-width: 1680px) {</span></span>
<span class="line"><span>  body{font-size: 28px;}</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>@media (min-width: 1920px) {</span></span>
<span class="line"><span>  body{font-size: 33px;}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>用min-width时，要反着来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@media (max-width: 1199){ //&lt;=1199的设备 }</span></span>
<span class="line"><span>@media (max-width: 991px){ //&lt;=991的设备 }</span></span>
<span class="line"><span>@media (max-width: 767px){ //&lt;=768的设备 }</span></span></code></pre></div>`,15)]))}const m=a(i,[["render",t]]);export{u as __pageData,m as default};
