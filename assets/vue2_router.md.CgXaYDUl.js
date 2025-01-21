import{_ as a,c as n,a0 as p,o as e}from"./chunks/framework.BYlfzdEH.js";const d=JSON.parse('{"title":"路由","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/router.md","filePath":"vue2/router.md"}'),l={name:"vue2/router.md"};function i(t,s,o,c,r,u){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h1><h2 id="_1、脚手架生成框架" tabindex="-1">1、脚手架生成框架 <a class="header-anchor" href="#_1、脚手架生成框架" aria-label="Permalink to &quot;1、脚手架生成框架&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//index.js</span></span>
<span class="line"><span>import { createRouter, createWebHashHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span>import HomeView from &#39;../views/HomeView.vue&#39;</span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    name: &#39;home&#39;,</span></span>
<span class="line"><span>    component: HomeView</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/about&#39;,</span></span>
<span class="line"><span>    name: &#39;about&#39;,</span></span>
<span class="line"><span>    component: () =&gt; import(&#39;../views/AboutView.vue&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  history: createWebHashHistory(),</span></span>
<span class="line"><span>  routes</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>export default router</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.js</span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span>import router from &#39;./router&#39;</span></span>
<span class="line"><span>import store from &#39;./store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createApp(App).use(store).use(router).mount(&#39;#app&#39;)</span></span></code></pre></div><h2 id="_2、路由跳转传参" tabindex="-1">2、路由跳转传参 <a class="header-anchor" href="#_2、路由跳转传参" aria-label="Permalink to &quot;2、路由跳转传参&quot;">​</a></h2><ul><li>查询参数传参（分query和path）</li><li>动态路由传参</li></ul><h4 id="_2-1、查询参数传参-query和path" tabindex="-1">2.1、查询参数传参（query和path） <a class="header-anchor" href="#_2-1、查询参数传参-query和path" aria-label="Permalink to &quot;2.1、查询参数传参（query和path）&quot;">​</a></h4><p>1、query用path编写传参地址，而params用name编写传参地址； 2、query刷新页面时参数不会消失，而params刷新页面时参数会消失； 3、query传的参数会显示在url地址栏中，而params传参不会显示在地址栏中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 发送</span></span>
<span class="line"><span>this.$router.push({</span></span>
<span class="line"><span>    name: &#39;home&#39;,</span></span>
<span class="line"><span>    query: {</span></span>
<span class="line"><span>        id: &#39;xxx&#39;,</span></span>
<span class="line"><span>        title: &#39;123&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 接受</span></span>
<span class="line"><span>console.log(this.$route.query)</span></span>
<span class="line"><span>//注意：跳转用this.$router，接受用this.$route</span></span></code></pre></div><h4 id="_2-2、动态路由传参" tabindex="-1">2.2、动态路由传参 <a class="header-anchor" href="#_2-2、动态路由传参" aria-label="Permalink to &quot;2.2、动态路由传参&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 路由界面</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    path: &#39;/about/:name?&#39;,</span></span>
<span class="line"><span>    name: &#39;about&#39;,</span></span>
<span class="line"><span>    component: () =&gt; import(&#39;../views/AboutView.vue&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 访问路径</span></span>
<span class="line"><span>http://localhost:8080/#/about/jwl/it</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接受</span></span>
<span class="line"><span>console.log(this.$route.params)</span></span></code></pre></div><h2 id="_3、路由嵌套" tabindex="-1">3、路由嵌套 <a class="header-anchor" href="#_3、路由嵌套" aria-label="Permalink to &quot;3、路由嵌套&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// router.js</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    path: &#39;/about&#39;,</span></span>
<span class="line"><span>    name: &#39;about&#39;,</span></span>
<span class="line"><span>    component: () =&gt; import(&#39;../views/AboutView.vue&#39;),</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;about1&#39;,</span></span>
<span class="line"><span>        name: &#39;about1&#39;, //二级路由前面不要带斜杠 /</span></span>
<span class="line"><span>        component: () =&gt; import(&#39;../views/AboutViewson.vue&#39;),</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// AboutView.vue</span></span>
<span class="line"><span>&lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 访问</span></span>
<span class="line"><span>http://localhost:8080/#/about/about1</span></span></code></pre></div><h2 id="_3、路由守卫" tabindex="-1">3、路由守卫 <a class="header-anchor" href="#_3、路由守卫" aria-label="Permalink to &quot;3、路由守卫&quot;">​</a></h2><ul><li>全局守卫</li><li>独享守卫</li><li>组件内守卫</li></ul><p>全局守卫</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>router.beforeEach((to,from,next)=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;beforeEach&#39;,to.from);</span></span>
<span class="line"><span>    if(to.meta.isAuth){//判断当前路由是否需要进行权限控制</span></span>
<span class="line"><span>        if(localStorage.getItem(&#39;school&#39;)===&#39;daxue&#39;){//权限控制的具体规则</span></span>
<span class="line"><span>            next()</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            alert(&#39;学校不对，暂无权限查看&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        next()//放行</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>独享路由守卫</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> chidren:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                path:&#39;news&#39;</span></span>
<span class="line"><span>                component:News,</span></span>
<span class="line"><span>                beforeEnter((to,from,next)=&gt;{</span></span>
<span class="line"><span>                    console.log(&#39;beforeEnter&#39;,to.from);</span></span>
<span class="line"><span>                    if(to.meta.isAuth){//判断当前路由是否需要进行权限控制</span></span>
<span class="line"><span>                        if(localStorage.getItem(&#39;school&#39;)===&#39;daxue&#39;){//权限控制的具体规则</span></span>
<span class="line"><span>                            next()</span></span>
<span class="line"><span>                        }else{</span></span>
<span class="line"><span>                            alert(&#39;学校不对，暂无权限查看&#39;)</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }else{</span></span>
<span class="line"><span>                        next()//放行</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>     ]</span></span></code></pre></div><p>组件内守卫(在对应的.vue文件配置)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//进入守卫：通过路由规则，进入该组件时被调用</span></span>
<span class="line"><span>beforeRouteEnter(to,from,next){</span></span>
<span class="line"><span>    if(to.meta.isAuth){//判断当前路由是否需要进行权限控制</span></span>
<span class="line"><span>                        if(localStorage.getItem(&#39;school&#39;)===&#39;daxue&#39;){//权限控制的具体规则</span></span>
<span class="line"><span>                            next()</span></span>
<span class="line"><span>                        }else{</span></span>
<span class="line"><span>                            alert(&#39;学校不对，暂无权限查看&#39;)</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }else{</span></span>
<span class="line"><span>                        next()//放行</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//进入守卫：通过路由规则，离开该组件时被调用</span></span>
<span class="line"><span>beforeRouteleave(to,from,next){</span></span>
<span class="line"><span>	console.log(&#39;beforeRouteleave&#39;);</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,20)]))}const m=a(l,[["render",i]]);export{d as __pageData,m as default};
