import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const d=JSON.parse('{"title":"promise","description":"","frontmatter":{},"headers":[],"relativePath":"js/Promise.md","filePath":"js/Promise.md"}'),l={name:"js/Promise.md"};function i(c,s,r,t,o,g){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="promise" tabindex="-1">promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;promise&quot;">​</a></h1><h2 id="_1、基础案例" tabindex="-1">1、基础案例 <a class="header-anchor" href="#_1、基础案例" aria-label="Permalink to &quot;1、基础案例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  if(异步请求成功){</span></span>
<span class="line"><span>    resolve()</span></span>
<span class="line"><span>  }else{</span></span>
<span class="line"><span>    reject()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>promise.then(()=&gt;{</span></span>
<span class="line"><span>  //success</span></span>
<span class="line"><span>},()=&gt;{</span></span>
<span class="line"><span>  //failure</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>Promise使用时传参</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  if (异步请求成功) {</span></span>
<span class="line"><span>    resolve(&quot;success&quot;)</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    reject(&quot;error&quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>promise.then( res =&gt; {</span></span>
<span class="line"><span>    res // success</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//捕获异常可用catch()方法</span></span>
<span class="line"><span>promise.catch( err =&gt; {</span></span>
<span class="line"><span>    err // error</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>比如请求图片</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const loadImage = (url) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    const img = new Image();</span></span>
<span class="line"><span>    img.onload = () =&gt; {</span></span>
<span class="line"><span>      resolve(img);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.onerror = () =&gt; {</span></span>
<span class="line"><span>      reject(new Error(\`Failed to load image from \${url}\`));</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.src = url;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>loadImage(&#39;https://example.com/image.jpg&#39;)</span></span>
<span class="line"><span>  .then((img) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;Image loaded successfully&#39;);</span></span>
<span class="line"><span>    document.body.appendChild(img);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch((error) =&gt; {</span></span>
<span class="line"><span>    console.error(error.message);</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h2 id="_2、链式调用" tabindex="-1">2、链式调用 <a class="header-anchor" href="#_2、链式调用" aria-label="Permalink to &quot;2、链式调用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>  resolve(1)</span></span>
<span class="line"><span>}).then((res) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>    resolve(res+2)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}).then((res) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>    resolve(res+3)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}).then((res) =&gt; {</span></span>
<span class="line"><span>  return res // 6</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_3、promise-all" tabindex="-1">3、Promise.all <a class="header-anchor" href="#_3、promise-all" aria-label="Permalink to &quot;3、Promise.all&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const urls = [</span></span>
<span class="line"><span>  &#39;https://example.com/image1.jpg&#39;,</span></span>
<span class="line"><span>  &#39;https://example.com/image2.jpg&#39;,</span></span>
<span class="line"><span>  &#39;https://example.com/image3.jpg&#39;</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>const loadImage = (url) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    const img = new Image();</span></span>
<span class="line"><span>    img.onload = () =&gt; {</span></span>
<span class="line"><span>      resolve(img);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.onerror = () =&gt; {</span></span>
<span class="line"><span>      reject(new Error(\`Failed to load image from \${url}\`));</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.src = url;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Promise.all(urls.map(loadImage))</span></span>
<span class="line"><span>  .then((images) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;All images loaded successfully&#39;);</span></span>
<span class="line"><span>    images.forEach((img) =&gt; {</span></span>
<span class="line"><span>      document.body.appendChild(img);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch((error) =&gt; {</span></span>
<span class="line"><span>    console.error(error.message);</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h2 id="_4、promise-race" tabindex="-1">4、Promise.race() <a class="header-anchor" href="#_4、promise-race" aria-label="Permalink to &quot;4、Promise.race()&quot;">​</a></h2><p>Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回哪个结果，不管结果本身是成功状态还是失败状态。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var p1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    resolve(&quot;res1&quot;)</span></span>
<span class="line"><span>  }, 3000)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>var p2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    reject(&quot;err2&quot;)</span></span>
<span class="line"><span>  }, 2000)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>Promise.race([p1, p2])</span></span>
<span class="line"><span>.then((res)=&gt;{</span></span>
<span class="line"><span>  console.log(res);</span></span>
<span class="line"><span>}).catch((err)=&gt;{</span></span>
<span class="line"><span>  console.log(err); //err2</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,14)]))}const h=n(l,[["render",i]]);export{d as __pageData,h as default};
