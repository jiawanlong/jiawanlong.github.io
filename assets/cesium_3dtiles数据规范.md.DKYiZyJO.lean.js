import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.wfMVytlW.js";const d=JSON.parse('{"title":"3dtiles数据规范","description":"","frontmatter":{},"headers":[],"relativePath":"cesium/3dtiles数据规范.md","filePath":"cesium/3dtiles数据规范.md"}'),l={name:"cesium/3dtiles数据规范.md"};function i(t,s,o,r,c,u){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="_3dtiles数据规范" tabindex="-1">3dtiles数据规范 <a class="header-anchor" href="#_3dtiles数据规范" aria-label="Permalink to &quot;3dtiles数据规范&quot;">​</a></h1><p>一份 3dTiles数据集包含 <strong>入口文件是 tileset.json</strong>和<strong>各级瓦片用文件夹（目录）来组织</strong>，其中tile可以是.b3dm、.i3dm、.pnts、.vctr和.cmpt中的任一种格式文件，tileset.json是一个 json 文件，描述了整个三维瓦片数据集。官方链接 <a href="https://docs.ogc.org/cs/18-053r2/18-053r2.html" target="_blank" rel="noreferrer">https://docs.ogc.org/cs/18-053r2/18-053r2.html</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;asset&quot;: {</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;1.0&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;geometricError&quot;: 500,</span></span>
<span class="line"><span>  &quot;root&quot;: {</span></span>
<span class="line"><span>    &quot;boundingVolume&quot;: {</span></span>
<span class="line"><span>      &quot;region&quot;: [</span></span>
<span class="line"><span>        2.029807563723424,</span></span>
<span class="line"><span>        0.7010983149176563,</span></span>
<span class="line"><span>        2.029841429126092,</span></span>
<span class="line"><span>        0.7011168091002963,</span></span>
<span class="line"><span>        0,</span></span>
<span class="line"><span>        6.08364</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;geometricError&quot;: 500,</span></span>
<span class="line"><span>    &quot;refine&quot;: &quot;ADD&quot;,</span></span>
<span class="line"><span>    &quot;children&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;boundingVolume&quot;: {</span></span>
<span class="line"><span>          &quot;region&quot;: [</span></span>
<span class="line"><span>            2.0298137551820834,</span></span>
<span class="line"><span>            0.7010983149176563,</span></span>
<span class="line"><span>            2.0298387086366807,</span></span>
<span class="line"><span>            0.7011152320769704,</span></span>
<span class="line"><span>            0,</span></span>
<span class="line"><span>            6.08364</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;geometricError&quot;: 0,</span></span>
<span class="line"><span>        &quot;content&quot;: {</span></span>
<span class="line"><span>          &quot;uri&quot;: &quot;RjuJzV8h.b3dm&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;properties&quot;: {</span></span>
<span class="line"><span>          &quot;code&quot;: &quot;RjuJzV8h&quot;,</span></span>
<span class="line"><span>          &quot;height&quot;: 6.08364</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;transform&quot;: [</span></span>
<span class="line"><span>      -0.8660254037844388,-0.4999999999999999, 0, 0,</span></span>
<span class="line"><span>      0.38302222155948895, -0.6634139481689385, -0.6427876096865394,0,</span></span>
<span class="line"><span>      0.3213938048432696, -0.5566703992264195, 0.7660444431189781,0,</span></span>
<span class="line"><span>      -2162445.111079245, 4375302.7564566415,4092470.3198229605,1</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_1-1、顶级属性-asset、root、geometricerror" tabindex="-1">1.1、顶级属性：asset、root、geometricError <a class="header-anchor" href="#_1-1、顶级属性-asset、root、geometricerror" aria-label="Permalink to &quot;1.1、顶级属性：asset、root、geometricError&quot;">​</a></h2><ul><li>asset：有关整个tileset的元数据，应用于特定程序的数据有glTF版本号，生成工具等。</li><li>root：3D Tiles tileset中的根切片。</li><li>geometricError：几何误差，表示简化后的切片/瓦片(tile)与原始几何图形的差异（米为单位）。</li></ul><h2 id="_1-2、其他属性-children、refine、content、boundingvolume、transform、viewerrequestvolume" tabindex="-1">1.2、其他属性：children、refine、content、boundingVolume、transform、viewerRequestVolume <a class="header-anchor" href="#_1-2、其他属性-children、refine、content、boundingvolume、transform、viewerrequestvolume" aria-label="Permalink to &quot;1.2、其他属性：children、refine、content、boundingVolume、transform、viewerRequestVolume&quot;">​</a></h2><ul><li>children 子切片内容都由其父切片的边界范围框完全包围，并且通常具有小于其父切片的几何误差。</li><li>refine （细化）：替换 （“REPLACE”），则子图块将代替父图块进行渲染，即不再呈现父图块，附加 （“ADD”），除了父平铺之外，还会渲染子平铺。</li><li>boundingVolume （边界范围框）：作用：1、告诉渲染引擎“瓦片在什么空间范围内存在”，用于快速判断是否需要加载或渲染该瓦片。2、结合 geometricError做LOD 控制，有box、region、sphere 三种模式 <ul><li>box(Center(x,y,z), X-axis(x,y,z), Y-axis(x,y,z), Z-axis(x,y,z)) 在WGS椭球对应的地心笛卡尔坐标系下</li><li>region(west, south, east, north, minHeight, maxHeight) 经纬度坐标系转换为弧度，高度单位为米</li><li>sphere(Center(x,y,z), radius) 地心笛卡尔坐标系，半径为米</li></ul></li><li>viewerRequestVolume 根据 视点（摄像机）的位置或范围 动态决定是否请求和显示特定瓦片，可以更好优化加载效率，和动态 LOD 切换，展示细节。</li><li>transform 模型的具体坐标位置通常由模型内部数据或transform矩阵决定，正常我们从obj或者gltf转过来的数据，内部坐标在原点，需要用到transform</li></ul><h2 id="_1-3、transform-矩阵" tabindex="-1">1.3、transform 矩阵 <a class="header-anchor" href="#_1-3、transform-矩阵" aria-label="Permalink to &quot;1.3、transform 矩阵&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;transform&quot;: [</span></span>
<span class="line"><span>  1, 0, 0, 0,     </span></span>
<span class="line"><span>  0, 1, 0, 0,</span></span>
<span class="line"><span>  0, 0, 1, 0,</span></span>
<span class="line"><span>  X, Y, Z, 1     </span></span>
<span class="line"><span>]</span></span></code></pre></div><ul><li>左上 3x3 部分 控制线性变换（旋转、缩放）</li><li>左下 X, Y, Z控制平移，用笛卡尔坐标系表示</li></ul><p>用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// tx: 经度，ty: 纬度，tz: 高度</span></span>
<span class="line"><span>// rx: 俯仰(pitch)，机头上下摇摆</span></span>
<span class="line"><span>// ry: 滚转(roll)，机身绕中轴线旋转</span></span>
<span class="line"><span>// rz:偏航（heading），即机头朝左右摇摆</span></span>
<span class="line"><span>// scales放大系数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getTransform(tx, ty, tz, rx, ry, rz, scales) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let mx = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(rx));</span></span>
<span class="line"><span>    let my = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(ry));</span></span>
<span class="line"><span>    let mz = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rz));</span></span>
<span class="line"><span>    let rotationX = Cesium.Matrix4.fromRotationTranslation(mx);</span></span>
<span class="line"><span>    let rotationY = Cesium.Matrix4.fromRotationTranslation(my);</span></span>
<span class="line"><span>    let rotationZ = Cesium.Matrix4.fromRotationTranslation(mz);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //平移</span></span>
<span class="line"><span>    let position = Cesium.Cartesian3.fromDegrees(tx, ty, tz);</span></span>
<span class="line"><span>    let m = Cesium.Transforms.eastNorthUpToFixedFrame(position);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let scale = Cesium.Matrix4.fromUniformScale(scales);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // //缩放</span></span>
<span class="line"><span>    Cesium.Matrix4.multiply(m, scale, m);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //旋转、平移矩阵相乘</span></span>
<span class="line"><span>    Cesium.Matrix4.multiply(m, rotationX, m);</span></span>
<span class="line"><span>    Cesium.Matrix4.multiply(m, rotationY, m);</span></span>
<span class="line"><span>    Cesium.Matrix4.multiply(m, rotationZ, m);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(m)</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,12)]))}const h=n(l,[["render",i]]);export{d as __pageData,h as default};
