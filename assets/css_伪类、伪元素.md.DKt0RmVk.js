import{_ as n,c as a,a0 as t,o as p}from"./chunks/framework.BYlfzdEH.js";const g=JSON.parse('{"title":"伪类、伪元素","description":"","frontmatter":{},"headers":[],"relativePath":"css/伪类、伪元素.md","filePath":"css/伪类、伪元素.md"}'),l={name:"css/伪类、伪元素.md"};function e(i,s,c,o,r,d){return p(),a("div",null,s[0]||(s[0]=[t(`<h1 id="伪类、伪元素" tabindex="-1">伪类、伪元素 <a class="header-anchor" href="#伪类、伪元素" aria-label="Permalink to &quot;伪类、伪元素&quot;">​</a></h1><h2 id="_1、伪元素" tabindex="-1">1、伪元素 <a class="header-anchor" href="#_1、伪元素" aria-label="Permalink to &quot;1、伪元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::after	    p::after	               在每个 &lt;p&gt; 元素之后插入内容。</span></span>
<span class="line"><span>::before	    p::before	             在每个 &lt;p&gt; 元素之前插入内容。</span></span>
<span class="line"><span>::first-letter	   p::first-letter	 选择每个 &lt;p&gt; 元素的首字母。</span></span>
<span class="line"><span>::first-line	    p::first-line	     选择每个 &lt;p&gt; 元素的首行。</span></span>
<span class="line"><span>::selection	   p::selection	         选择用户选择的元素部分。</span></span></code></pre></div><h3 id="示例如下" tabindex="-1">示例如下 <a class="header-anchor" href="#示例如下" aria-label="Permalink to &quot;示例如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>p.intro::first-letter {</span></span>
<span class="line"><span>  color: #ff0000;</span></span>
<span class="line"><span>  font-size: 200%;</span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>&lt;p class=&quot;intro&quot;&gt;这是一段简介！&lt;/p&gt;</span></span>
<span class="line"><span>&lt;p&gt;这是一段文字。以及更多的文字。&lt;/p&gt;</span></span></code></pre></div><h3 id="before-伪元素-和-after-伪元素" tabindex="-1">::before 伪元素 和 ::after 伪元素 <a class="header-anchor" href="#before-伪元素-和-after-伪元素" aria-label="Permalink to &quot;::before 伪元素 和 ::after 伪元素&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>h1::before {</span></span>
<span class="line"><span>  //content: url(/i/photo/smile.gif);</span></span>
<span class="line"><span>  content: &#39;文字，哈哈哈&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;h1&gt;xxxxxx&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;p&gt;xxxxxxxx&lt;/p&gt;</span></span>
<span class="line"><span>&lt;h1&gt;xxxxxx&lt;/h1&gt;</span></span></code></pre></div><h3 id="selection-伪元素-文字选中时候的效果" tabindex="-1">::selection 伪元素（文字选中时候的效果） <a class="header-anchor" href="#selection-伪元素-文字选中时候的效果" aria-label="Permalink to &quot;::selection 伪元素（文字选中时候的效果）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::selection {</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>  background: yellow;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;h1&gt;xxxxxx&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;p&gt;xxxxxxxx&lt;/p&gt;</span></span>
<span class="line"><span>&lt;h1&gt;xxxxxx&lt;/h1&gt;</span></span></code></pre></div><h2 id="_2、伪类" tabindex="-1">2、伪类 <a class="header-anchor" href="#_2、伪类" aria-label="Permalink to &quot;2、伪类&quot;">​</a></h2><p>伪类可以与 CSS 类结合使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>h1.highlight:hover {</span></span>
<span class="line"><span>  color: #ff0000;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;h1&gt;xxxxxx&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;h1 class=&quot;highlight&quot;&gt;xxxxxx&lt;/h1&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>:nth-child(n)	p:nth-child(2)	       选择每个父元素的第二个子元素。</span></span>
<span class="line"><span>:nth-last-child(n)	p:nth-last-child(2)	   选择每个父元素的第二个子元素，从最后一个子元素开始计数。</span></span>
<span class="line"><span>:focus	      input:focus	           选择获得焦点的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:hover	      a:hover	               选择鼠标指针位于其上的链接。</span></span>
<span class="line"><span>:not(selector)	div:not(header)	   选择不是 &lt;p&gt; 元素的每个 &lt;div&gt; 元素。 </span></span>
<span class="line"><span>:active	      a:active	               选择当前活动（鼠标点击）的链接。</span></span>
<span class="line"><span>:checked	    input:checked	           选择已选中的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:disabled	   input:disabled	           选择禁用的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:empty	       p:empty	               选择没有子元素的 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:enabled	    input:enabled	           选择启用的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:first-child	p:first-child	           选择属于父元素的第一个子元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:first-of-type	p:first-of-type	       选择属于其父元素的第一个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:in-range	   input:in-range	       选择在指定范围内定义的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:invalid	    input:invalid	       选择无效的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:lang(x)	   p:lang(it)	           选择 lang 属性值以 &quot;it&quot; 开头的 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:last-child	p:last-child	           选择属于其父元素的最后一个子元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:last-of-type	p:last-of-type	       选择属于其父元素的最后一个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:link	       a:link	               选择所有未访问的链接。</span></span>
<span class="line"><span>:nth-last-of-type(n)	p:nth-last-of-type(2)	   选择属于其父元素的第二个最后 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:nth-of-type(n)	p:nth-of-type(2)	   选择属于其父元素的第二个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:only-child	p:only-child	           选择属于其父元素的唯一子元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:only-of-type	p:only-of-type	       选择属于其父元素的唯一 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</span></span>
<span class="line"><span>:optional	   input:optional	       选择所有没有设置 &quot;required&quot; 属性的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:out-of-range	input:out-of-range	   选择不在指定范围内的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:read-only	   input:read-only	   选择所有只读 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:read-write	   input:read-write	   选择所有可编辑的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:required	   input:required	   选择所有设置了 &quot;required&quot; 属性的 &lt;input&gt; 元素。</span></span>
<span class="line"><span>:root	       root	               选择文档的根元素。</span></span>
<span class="line"><span>:target	       #news:target	   选择被激活的 HTML &lt;a&gt; 标记。</span></span>
<span class="line"><span>:valid	       input:valid	   选择所有有效输入。</span></span>
<span class="line"><span>:visited	   a:visited	   选择所有已访问的链接。</span></span></code></pre></div>`,13)]))}const u=n(l,[["render",e]]);export{g as __pageData,u as default};
