import{_ as n,c as s,a0 as i,o as p}from"./chunks/framework.BYlfzdEH.js";const h=JSON.parse('{"title":"animation（动画）和 Transition（过渡）","description":"","frontmatter":{},"headers":[],"relativePath":"css/transition&animation.md","filePath":"css/transition&animation.md"}'),t={name:"css/transition&animation.md"};function e(l,a,o,c,r,d){return p(),s("div",null,a[0]||(a[0]=[i(`<h1 id="animation-动画-和-transition-过渡" tabindex="-1">animation（动画）和 Transition（过渡） <a class="header-anchor" href="#animation-动画-和-transition-过渡" aria-label="Permalink to &quot;animation（动画）和 Transition（过渡）&quot;">​</a></h1><ul><li>animation（动画）动画结束之后元素的属性没有变化</li><li>Transition（过渡）动画结束之后元素的属性会变化</li><li>transform 元素进行旋转、缩放、移动或倾斜（与动画无关）</li><li>translate 元素移动（transform的一个属性值）</li></ul><h2 id="_1、animation-动画-用法" tabindex="-1">1、animation（动画）用法 <a class="header-anchor" href="#_1、animation-动画-用法" aria-label="Permalink to &quot;1、animation（动画）用法&quot;">​</a></h2><ol><li>动画关键帧（@keyframes）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 定义名为&quot;move-right&quot;的关键帧动画 */</span></span>
<span class="line"><span>@keyframes move-right {</span></span>
<span class="line"><span>  /* 初始状态（0%）：元素位于左侧 */</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>    transform: translateX(0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  /* 结束状态（100%）：元素移动到右侧 */</span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>    transform: translateX(100px);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>应用动画（animation）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 选择器 .animated-element 应用刚才定义的&quot;move-right&quot;动画 */</span></span>
<span class="line"><span>.animated-element {</span></span>
<span class="line"><span>  animation-name: move-right;</span></span>
<span class="line"><span>  animation-duration: 2s;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>3、动画属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>animation-delay	规定动画开始的延迟。</span></span>
<span class="line"><span>animation-direction	定动画是向前播放、向后播放还是交替播放。</span></span>
<span class="line"><span>animation-duration	规定动画完成一个周期应花费的时间。</span></span>
<span class="line"><span>animation-fill-mode	规定元素在不播放动画时的样式（在开始前、结束后，或两者同时）。</span></span>
<span class="line"><span>animation-iteration-count	规定动画应播放的次数。</span></span>
<span class="line"><span>animation-name	规定 @keyframes 动画的名称。</span></span>
<span class="line"><span>animation-play-state	规定动画是运行还是暂停。</span></span>
<span class="line"><span>animation-timing-function	规定动画的速度曲线。</span></span></code></pre></div><p>4、简写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>animation: name duration timing-function delay iteration-count direction fill-mode play-state;</span></span></code></pre></div><p>5、多阶段动画</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 定义名为&quot;multi-stage&quot;的多阶段动画 */</span></span>
<span class="line"><span>@keyframes multi-stage {</span></span>
<span class="line"><span>  0%, 50% { background-color: red; } </span></span>
<span class="line"><span>  50%, 100% { background-color: blue; } </span></span>
<span class="line"><span>  30%, 70% { color: green; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.multi-stage-element {</span></span>
<span class="line"><span>  animation: multi-stage 2s linear infinite; </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2、transition-过渡-用法" tabindex="-1">2、transition（过渡）用法 <a class="header-anchor" href="#_2、transition-过渡-用法" aria-label="Permalink to &quot;2、transition（过渡）用法&quot;">​</a></h2><p>1、用法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>div {</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  background: red;</span></span>
<span class="line"><span>  transition: width 2s, height 4s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div:hover {</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>2、属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. transition-property	规定应用过渡的属性。</span></span>
<span class="line"><span>2. transition-duration	规定过渡效果的持续时间。</span></span>
<span class="line"><span>3. transition-timing-function	规定过渡效果的速度曲线。</span></span>
<span class="line"><span>4. transition-delay	规定过渡效果何时开始。</span></span>
<span class="line"><span>5、transition 简写</span></span></code></pre></div><h2 id="_3、css-2d-转换-transform" tabindex="-1">3、CSS 2D 转换（transform） <a class="header-anchor" href="#_3、css-2d-转换-transform" aria-label="Permalink to &quot;3、CSS 2D 转换（transform）&quot;">​</a></h2><ul><li><p>translateX() translateX(50px) -&gt; X轴偏移50px</p></li><li><p>translateY() translateY(50px) -&gt; Y轴偏移50px</p></li><li><p>translate() translate(50px, 100px) -&gt; X轴、Y轴偏移量</p></li><li><p>scaleX() scaleX(2) -&gt; 宽*2</p></li><li><p>scaleY() scaleY(3) -&gt; 高*3</p></li><li><p>scale() scale(2, 3) -&gt; 宽<em>2，高</em>3</p></li><li><p>skewX() skewX(30deg) -&gt; X轴倾斜30度</p></li><li><p>skewY() skewY(30deg) -&gt; Y轴倾斜30度</p></li><li><p>skew() skew(30deg, 30deg) -&gt; X轴倾斜30度，Y轴倾斜30度</p></li><li><p>rotate() rotate(45deg) -&gt; 顺时针旋转45度</p></li><li><p>matrix() matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())</p></li></ul>`,20)]))}const g=n(t,[["render",e]]);export{h as __pageData,g as default};
