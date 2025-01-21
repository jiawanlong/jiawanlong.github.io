import{_ as s,c as n,a0 as p,o as e}from"./chunks/framework.BYlfzdEH.js";const u=JSON.parse('{"title":"引用图片","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/img.md","filePath":"vue2/img.md"}'),t={name:"vue2/img.md"};function l(i,a,o,c,r,g){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="引用图片" tabindex="-1">引用图片 <a class="header-anchor" href="#引用图片" aria-label="Permalink to &quot;引用图片&quot;">​</a></h1><h2 id="_1、import" tabindex="-1">1、import <a class="header-anchor" href="#_1、import" aria-label="Permalink to &quot;1、import&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;el-image :src=&quot;logo&quot; fit=&quot;cover&quot;&gt;&lt;/el-image&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import logo from &quot;../assets/img/logo.png&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>data() {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    logo,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_2、require" tabindex="-1">2、require <a class="header-anchor" href="#_2、require" aria-label="Permalink to &quot;2、require&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;el-image :src=&quot;logo_url&quot; fit=&quot;cover&quot;&gt;&lt;/el-image&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      logo_url: require(&quot;@/assets/img/logo.png&quot;),</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_3、img-标签静态引入" tabindex="-1">3、img 标签静态引入 <a class="header-anchor" href="#_3、img-标签静态引入" aria-label="Permalink to &quot;3、img 标签静态引入&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;img src=&quot;@/assets/images/img.png&quot;&gt;</span></span>
<span class="line"><span>	&lt;img src=&quot;../../../assets/images//img.png&quot;&gt;</span></span>
<span class="line"><span>&lt;template/&gt;</span></span></code></pre></div><h2 id="_4、background" tabindex="-1">4、background <a class="header-anchor" href="#_4、background" aria-label="Permalink to &quot;4、background&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>background-image: url(../../../../assets/images/img.png)</span></span>
<span class="line"><span>background-image: url(@/assets/images/img.png);</span></span></code></pre></div>`,9)]))}const m=s(t,[["render",l]]);export{u as __pageData,m as default};
