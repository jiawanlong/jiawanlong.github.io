      38, ${l(i)-11} 41, ${l(i)-8} 73, ${l(i)-8} 75, ${l(i)-10} 81, ${l(i)-10}
      85, ${l(i)-6} ${l(n)-85}, ${l(i)-6} ${l(n)-81}, ${l(i)-10} ${l(n)-75}, ${l(i)-10}
      ${l(n)-73}, ${l(i)-8} ${l(n)-41}, ${l(i)-8} ${l(n)-38}, ${l(i)-11}
      ${l(n)-24}, ${l(i)-11} ${l(n)-13}, ${l(i)-21} ${l(n)-13}, ${l(i)-24}
      ${l(n)-10}, ${l(i)-27} ${l(n)-10}, 27 ${l(n)-13}, 25 ${l(n)-13}, 21
      ${l(n)-24}, 11 ${l(n)-38}, 11 ${l(n)-41}, 8 ${l(n)-73}, 8 ${l(n)-75}, 10
      ${l(n)-81}, 10 ${l(n)-85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`},null,8,Gh)],8,Bh)),(R(),X(b1,null,j1(t,f=>j("svg",{width:l(n),height:l(i),key:f,class:P5(`border-item ${f}`)},[j("polygon",{fill:l(a)[0],points:"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"},[j("animate",{attributeName:"fill",values:`${l(a)[0]};${l(a)[1]};${l(a)[0]}`,dur:`${l(r)}s`,begin:"0s",repeatCount:"indefinite"},null,8,Wh)],8,jh),j("polygon",{fill:l(a)[1],points:"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"},[j("animate",{attributeName:"fill",values:`${l(a)[1]};${l(a)[0]};${l(a)[1]}`,dur:`${l(r)}s`,begin:"0s",repeatCount:"indefinite"},null,8,$h)],8,Hh),j("polygon",{fill:l(a)[0],points:"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"},[j("animate",{attributeName:"fill",values:`${l(a)[0]};${l(a)[1]};transparent`,dur:`${l(r)+1}s`,begin:"0s",repeatCount:"indefinite"},null,8,Jh)],8,Yh)],10,Vh)),64))]))}});const qh=r2(Zh,[["__scopeId","data-v-3b5570ca"]]),Xh=Object.freeze(Object.defineProperty({__proto__:null,default:qh},Symbol.toStringTag,{value:"Module"})),Qh={class:"go-border-box"},Kh=["width","height"],em=["fill","stroke","d"],tm=["stroke"],nm=["stroke"],im=["stroke","d"],om=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,backgroundColor:a}=M1(e.chartConfig.option);return(r,s)=>(R(),X("div",Qh,[(R(),X("svg",{width:l(t),height:l(n)},[j("path",{fill:l(a),stroke:l(i)[0],d:`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${l(t)-20} 10 L ${l(t)-5} 25
          L ${l(t)-5} ${l(n)-5} L 20 ${l(n)-5}
          L 5 ${l(n)-20} L 5 20
        `},null,8,em),j("path",{fill:"transparent","stroke-w":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:l(i)[0],d:"M 16 9 L 61 9"},null,8,tm),j("path",{fill:"transparent",stroke:l(i)[1],d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"},null,8,nm),j("path",{fill:"transparent",stroke:l(i)[1],d:`M ${l(t)-5} ${l(n)-30} L ${l(t)-5} ${l(n)-5} L ${l(t)-30} ${l(n)-5}`},null,8,im)],8,Kh))]))}});const am=r2(om,[["__scopeId","data-v-b0e8cacd"]]),rm=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"})),Q8=o=>(G4("data-v-26e5636f"),o=o(),V4(),o),sm={class:"go-border-box"},lm=["width","height"],um=Q8(()=>j("feMorphology",{operator:"dilate",radius:"1",in:"SourceAlpha",result:"thicken"},null,-1)),cm=Q8(()=>j("feGaussianBlur",{in:"thicken",stdDeviation:"2",result:"blurred"},null,-1)),dm=["flood-color"],fm=["values"],pm=Q8(()=>j("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),hm=Q8(()=>j("feMerge",null,[j("feMergeNode",{in:"softGlowColored"}),j("feMergeNode",{in:"SourceGraphic"})],-1)),mm=["fill","stroke","d"],gm=["filter","stroke"],vm=["filter","stroke","d"],_m=["filter","stroke","d"],ym=["filter","stroke","d"],bm=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-03-filterId-${P4()}`,{w:n,h:i}=M1(e.chartConfig.attr),{colors:a,backgroundColor:r}=M1(e.chartConfig.option);return(s,u)=>(R(),X("div",sm,[(R(),X("svg",{width:l(n),height:l(i)},[j("defs",null,[j("filter",{id:t,height:"150%",width:"150%",x:"-25%",y:"-25%"},[um,cm,j("feFlood",{"flood-color":l($5)(l(a)[1],.7),result:"glowColor"},[j("animate",{attributeName:"flood-color",values:`
                ${l($5)(l(a)[1],.7)};
                ${l($5)(l(a)[1],.3)};
                ${l($5)(l(a)[1],.7)};
              `,dur:"3s",begin:"0s",repeatCount:"indefinite"},null,8,fm)],8,dm),pm,hm])]),l(n)&&l(i)?(R(),X("path",{key:0,fill:l(r),"stroke-width":"2",stroke:l(a)[0],d:`
          M15 5 L ${l(n)-15} 5 Q ${l(n)-5} 5, ${l(n)-5} 15
          L ${l(n)-5} ${l(i)-15} Q ${l(n)-5} ${l(i)-5}, ${l(n)-15} ${l(i)-5}
          L 15, ${l(i)-5} Q 5 ${l(i)-5} 5 ${l(i)-15} L 5 15
          Q 5 5 15 5
        `},null,8,mm)):f2("",!0),j("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:l(a)[1],d:"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"},null,8,gm),j("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:l(a)[1],d:`M ${l(n)-20} 5 L ${l(n)-15} 5 Q ${l(n)-5} 5 ${l(n)-5} 15 L ${l(n)-5} 20`},null,8,vm),j("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:l(a)[1],d:`
          M ${l(n)-20} ${l(i)-5} L ${l(n)-15} ${l(i)-5}
          Q ${l(n)-5} ${l(i)-5} ${l(n)-5} ${l(i)-15}
          L ${l(n)-5} ${l(i)-20}
        `},null,8,_m),j("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:l(a)[1],d:`
          M 20 ${l(i)-5} L 15 ${l(i)-5}
          Q 5 ${l(i)-5} 5 ${l(i)-15}
          L 5 ${l(i)-20}
        `},null,8,ym)],8,lm))]))}});const xm=r2(bm,[["__scopeId","data-v-26e5636f"]]),Sm=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),x4=o=>(G4("data-v-793b894f"),o=o(),V4(),o),Mm={class:"go-border-box"},wm=["width","height"],Am=x4(()=>j("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null,-1)),Cm=x4(()=>j("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null,-1)),Tm=["flood-color"],Dm=x4(()=>j("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),Em=x4(()=>j("feMerge",null,[j("feMergeNode",{in:"softGlowColored"}),j("feMergeNode",{in:"SourceGraphic"})],-1)),Rm=["fill","points"],Im=["fill","stroke","filter","points"],Om=["stroke","points"],Lm=["stroke","points"],zm=["stroke","fill","filter","points"],Pm=["filter","fill","points"],km=x4(()=>j("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Um=[km],Nm=["filter","fill","points"],Fm=x4(()=>j("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Bm=[Fm],Gm=["filter","fill","points"],Vm=x4(()=>j("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),jm=[Vm],Wm=["filter","fill","points"],Hm=x4(()=>j("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),$m=[Hm],Ym=["filter","fill","points"],Jm=x4(()=>j("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Zm=[Jm],qm=["filter","fill","points"],Xm=x4(()=>j("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Qm=[Xm],Km=["x","y","fill","font-size"],eg=["fill","filter","points"],tg=["fill","filter","points"],ng=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-04-filterId-${P4()}`,{w:n,h:i}=M1(e.chartConfig.attr),{colors:a,borderTitle:r,borderTitleColor:s,borderTitleSize:u,borderTitleHeight:d,borderTitleWidth:f,backgroundColor:h}=M1(e.chartConfig.option);return(p,g)=>(R(),X("div",Mm,[(R(),X("svg",{width:l(n),height:l(i)},[j("defs",null,[j("filter",{id:t,height:"150%",width:"150%",x:"-25%",y:"-25%"},[Am,Cm,j("feFlood",{"flood-color":l(a)[1],result:"glowColor"},null,8,Tm),Dm,Em])]),j("polygon",{fill:l(h),points:`
        20, 32 ${l(n)*.5-l(f)/2}, 32 ${l(n)*.5-l(f)/2+20}, 53
        ${l(n)*.5+l(f)/2-20}, 53 ${l(n)*.5+l(f)/2}, 32
        ${l(n)-20}, 32 ${l(n)-8}, 48 ${l(n)-8}, ${l(i)-25} ${l(n)-20}, ${l(i)-8}
        20, ${l(i)-8} 8, ${l(i)-25} 8, 50
      `},null,8,Rm),j("polyline",{fill:l(h),stroke:l(a)[0],filter:`url(#${t})`,points:`
          ${(l(n)-l(f))/2}, 30
          20, 30 7, 50 7, ${50+(l(i)-167)/2}
          13, ${55+(l(i)-167)/2} 13, ${135+(l(i)-167)/2}
          7, ${140+(l(i)-167)/2} 7, ${l(i)-27}
          20, ${l(i)-7} ${l(n)-20}, ${l(i)-7} ${l(n)-7}, ${l(i)-27}
          ${l(n)-7}, ${140+(l(i)-167)/2} ${l(n)-13}, ${135+(l(i)-167)/2}
          ${l(n)-13}, ${55+(l(i)-167)/2} ${l(n)-7}, ${50+(l(i)-167)/2}
          ${l(n)-7}, 50 ${l(n)-20}, 30 ${(l(n)+l(f))/2}, 30
          ${(l(n)+l(f))/2-20}, 7 ${(l(n)-l(f))/2+20}, 7
          ${(l(n)-l(f))/2}, 30 ${(l(n)-l(f))/2+20}, 52
          ${(l(n)+l(f))/2-20}, 52 ${(l(n)+l(f))/2}, 30
        `},null,8,Im),j("polygon",{stroke:l(a)[0],fill:"transparent",points:`
          ${(l(n)+l(f))/2-5}, 30 ${(l(n)+l(f))/2-21}, 11
          ${(l(n)+l(f))/2-27}, 11 ${(l(n)+l(f))/2-8}, 34
        `},null,8,Om),j("polygon",{stroke:l(a)[0],fill:"transparent",points:`
          ${(l(n)-l(f))/2+5}, 30 ${(l(n)-l(f))/2+22}, 49
          ${(l(n)-l(f))/2+28}, 49 ${(l(n)-l(f))/2+8}, 26
        `},null,8,Lm),j("polygon",{stroke:l(a)[0],fill:l(a)[1],filter:`url(#${t})`,points:`
          ${(l(n)+l(f))/2-11}, 37 ${(l(n)+l(f))/2-32}, 11
          ${(l(n)-l(f))/2+23}, 11 ${(l(n)-l(f))/2+11}, 23
          ${(l(n)-l(f))/2+33}, 49 ${(l(n)+l(f))/2-22}, 49
        `},null,8,zm),j("polygon",{filter:`url(#${t})`,fill:l(a)[0],opacity:"1",points:`
          ${(l(n)-l(f))/2-10}, 37 ${(l(n)-l(f))/2-31}, 37
          ${(l(n)-l(f))/2-25}, 46 ${(l(n)-l(f))/2-4}, 46
        `},Um,8,Pm),j("polygon",{filter:`url(#${t})`,fill:l(a)[0],opacity:"0.7",points:`
          ${(l(n)-l(f))/2-40}, 37 ${(l(n)-l(f))/2-61}, 37
          ${(l(n)-l(f))/2-55}, 46 ${(l(n)-l(f))/2-34}, 46
        `},Bm,8,Nm),j("polygon",{filter:`url(#${t})`,fill:l(a)[0],opacity:"0.5",points:`
          ${(l(n)-l(f))/2-70}, 37 ${(l(n)-l(f))/2-91}, 37
          ${(l(n)-l(f))/2-85}, 46 ${(l(n)-l(f))/2-64}, 46
        `},jm,8,Gm),j("polygon",{filter:`url(#${t})`,fill:l(a)[0],opacity:"1",points:`
          ${(l(n)+l(f))/2+30}, 37 ${(l(n)+l(f))/2+9}, 37
          ${(l(n)+l(f))/2+3}, 46 ${(l(n)+l(f))/2+24}, 46
        `},$m,8,Wm),j("polygon",{filter:`url(#${t})`,fill:l(a)[0],opacity:"0.7",points:`
          ${(l(n)+l(f))/2+60}, 37 ${(l(n)+l(f))/2+39}, 37
          ${(l(n)+l(f))/2+33}, 46 ${(l(n)+l(f))/2+54}, 46
        `},Zm,8,Ym),j("polygon",{filter:`url(#${t})`,fill:l(a)[0],opacity:"0.5",points:`
          ${(l(n)+l(f))/2+90}, 37 ${(l(n)+l(f))/2+69}, 37
          ${(l(n)+l(f))/2+63}, 46 ${(l(n)+l(f))/2+84}, 46
        `},Qm,8,qm),j("text",{x:`${l(n)/2}`,y:l(d),fill:l(s),"font-size":l(u),"text-anchor":"middle","dominant-baseline":"middle"},C2(l(r)),9,Km),j("polygon",{fill:l(a)[0],filter:`url(#${t})`,points:`
          7, ${53+(l(i)-167)/2} 11, ${57+(l(i)-167)/2}
          11, ${133+(l(i)-167)/2} 7, ${137+(l(i)-167)/2}
        `},null,8,eg),j("polygon",{fill:l(a)[0],filter:`url(#${t})`,points:`
          ${l(n)-7}, ${53+(l(i)-167)/2} ${l(n)-11}, ${57+(l(i)-167)/2}
          ${l(n)-11}, ${133+(l(i)-167)/2} ${l(n)-7}, ${137+(l(i)-167)/2}
        `},null,8,tg)],8,wm))]))}});const ig=r2(ng,[["__scopeId","data-v-793b894f"]]),og=Object.freeze(Object.defineProperty({__proto__:null,default:ig},Symbol.toStringTag,{value:"Module"})),ag=["width","height"],rg=["fill","points"],sg=["width","height"],lg=["fill"],ug=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=["left-top","right-top","left-bottom","right-bottom"],{w:n,h:i}=M1(e.chartConfig.attr),{colors:a,backgroundColor:r}=M1(e.chartConfig.option);return(s,u)=>(R(),X("div",{class:"go-border-box",style:c2(`box-shadow: inset 0 0 25px 3px ${l(a)[0]}`)},[(R(),X("svg",{width:l(n),height:l(i)},[j("polygon",{fill:l(r),points:`
        4, 0 ${l(n)-4}, 0 ${l(n)}, 4 ${l(n)}, ${l(i)-4} ${l(n)-4}, ${l(i)}
        4, ${l(i)} 0, ${l(i)-4} 0, 4
      `},null,8,rg)],8,ag)),(R(),X(b1,null,j1(t,d=>j("svg",{width:l(n),height:l(i),key:d,class:P5(`border-item ${d}`)},[j("polygon",{fill:l(a)[1],points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"},null,8,lg)],10,sg)),64))],4))}});const cg=r2(ug,[["__scopeId","data-v-3bcfff71"]]),dg=Object.freeze(Object.defineProperty({__proto__:null,default:cg},Symbol.toStringTag,{value:"Module"})),fg=["width","height"],pg=["stroke"],hg=["stroke","points"],mg=["stroke","points"],gg=["stroke","points"],vg=["stroke"],_g=["stroke","points"],yg=["stroke","points"],bg=["stroke","points"],xg=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,backgroundColor:a}=M1(e.chartConfig.option);return(r,s)=>(R(),X("div",{class:"go-border-box",style:c2(`
      box-shadow: inset 0 0 40px ${l(i)[0]}; 
      border: 1px solid ${l(i)[1]};
      background-color: ${l(a)};
    `)},[(R(),X("svg",{width:l(t),height:l(n)},[j("polyline",{class:"go-border-line-w-2",stroke:l(i)[0],points:"0, 25 0, 0 25, 0"},null,8,pg),j("polyline",{class:"go-border-line-w-2",stroke:l(i)[0],points:`${l(t)-25}, 0 ${l(t)}, 0 ${l(t)}, 25`},null,8,hg),j("polyline",{class:"go-border-line-w-2",stroke:l(i)[0],points:`${l(t)-25}, ${l(n)} ${l(t)}, ${l(n)} ${l(t)}, ${l(n)-25}`},null,8,mg),j("polyline",{class:"go-border-line-w-2",stroke:l(i)[0],points:`0, ${l(n)-25} 0, ${l(n)} 25, ${l(n)}`},null,8,gg),j("polyline",{class:"go-border-line-w-5",stroke:l(i)[1],points:"0, 10 0, 0 10, 0"},null,8,vg),j("polyline",{class:"go-border-line-w-5",stroke:l(i)[1],points:`${l(t)-10}, 0 ${l(t)}, 0 ${l(t)}, 10`},null,8,_g),j("polyline",{class:"go-border-line-w-5",stroke:l(i)[1],points:`${l(t)-10}, ${l(n)} ${l(t)}, ${l(n)} ${l(t)}, ${l(n)-10}`},null,8,yg),j("polyline",{class:"go-border-line-w-5",stroke:l(i)[1],points:`0, ${l(n)-10} 0, ${l(n)} 10, ${l(n)}`},null,8,bg)],8,fg))],4))}});const Sg=r2(xg,[["__scopeId","data-v-04cd6141"]]),Mg=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),Sa=o=>(G4("data-v-0f224815"),o=o(),V4(),o),wg={class:"go-border-box"},Ag=["width","height"],Cg=Sa(()=>j("animate",{attributeName:"x1",values:"0%;100%;0%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),Tg=Sa(()=>j("animate",{attributeName:"x2",values:"100%;0%;100%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),Dg=["stop-color"],Eg=["values"],Rg=["stop-color"],Ig=["values"],Og=["points"],Lg=["points"],zg=["points"],Pg=["points"],kg=["points"],Ug=["points"],Ng=["points"],Fg=["points"],Bg=["points"],Gg=["fill","points"],Vg=["width","height","fill","mask"],jg=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-07-filter-${P4()}`,n=`border-box-07-mask-${P4()}`,{w:i,h:a}=M1(e.chartConfig.attr),{colors:r,backgroundColor:s}=M1(e.chartConfig.option);return(u,d)=>(R(),X("div",wg,[(R(),X("svg",{width:l(i),height:l(a)},[j("defs",null,[j("linearGradient",{id:t,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[Cg,Tg,j("stop",{offset:"0%","stop-color":l(r)[0]},[j("animate",{attributeName:"stop-color",values:`${l(r)[0]};${l(r)[1]};${l(r)[0]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,Eg)],8,Dg),j("stop",{offset:"100%","stop-color":l(r)[1]},[j("animate",{attributeName:"stop-color",values:`${l(r)[1]};${l(r)[0]};${l(r)[1]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,Ig)],8,Rg)]),j("mask",{id:n},[j("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${l(a)*.4} 8, 3, ${l(i)*.4+7}, 3`},null,8,Og),j("polyline",{fill:"#fff",points:`8, ${l(a)*.15} 8, 3, ${l(i)*.1+7}, 3
              ${l(i)*.1}, 8 14, 8 14, ${l(a)*.15-7}
            `},null,8,Lg),j("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${l(i)*.5}, 3 ${l(i)-3}, 3, ${l(i)-3}, ${l(a)*.25}`},null,8,zg),j("polyline",{fill:"#fff",points:`
              ${l(i)*.52}, 3 ${l(i)*.58}, 3
              ${l(i)*.58-7}, 9 ${l(i)*.52+7}, 9
            `},null,8,Pg),j("polyline",{fill:"#fff",points:`
              ${l(i)*.9}, 3 ${l(i)-3}, 3 ${l(i)-3}, ${l(a)*.1}
              ${l(i)-9}, ${l(a)*.1-7} ${l(i)-9}, 9 ${l(i)*.9+7}, 9
            `},null,8,kg),j("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${l(a)*.5} 8, ${l(a)-3} ${l(i)*.3+7}, ${l(a)-3}`},null,8,Ug),j("polyline",{fill:"#fff",points:`
              8, ${l(a)*.55} 8, ${l(a)*.7}
              2, ${l(a)*.7-7} 2, ${l(a)*.55+7}
            `},null,8,Ng),j("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${l(i)*.35}, ${l(a)-3} ${l(i)-3}, ${l(a)-3} ${l(i)-3}, ${l(a)*.35}`},null,8,Fg),j("polyline",{fill:"#fff",points:`
              ${l(i)*.92}, ${l(a)-3} ${l(i)-3}, ${l(a)-3} ${l(i)-3}, ${l(a)*.8}
              ${l(i)-9}, ${l(a)*.8+7} ${l(i)-9}, ${l(a)-9} ${l(i)*.92+7}, ${l(a)-9}
            `},null,8,Bg)])]),j("polygon",{fill:l(s),points:`
        15, 9 ${l(i)*.1+1}, 9 ${l(i)*.1+4}, 6 ${l(i)*.52+2}, 6
        ${l(i)*.52+6}, 10 ${l(i)*.58-7}, 10 ${l(i)*.58-2}, 6
        ${l(i)*.9+2}, 6 ${l(i)*.9+6}, 10 ${l(i)-10}, 10 ${l(i)-10}, ${l(a)*.1-6}
        ${l(i)-6}, ${l(a)*.1-1} ${l(i)-6}, ${l(a)*.8+1} ${l(i)-10}, ${l(a)*.8+6}
        ${l(i)-10}, ${l(a)-10} ${l(i)*.92+7}, ${l(a)-10}  ${l(i)*.92+2}, ${l(a)-6}
        11, ${l(a)-6} 11, ${l(a)*.15-2} 15, ${l(a)*.15-7}
      `},null,8,Gg),j("rect",{x:"0",y:"0",width:l(i),height:l(a),fill:`url(#${t})`,mask:`url(#${n})`},null,8,Vg)],8,Ag))]))}});const Wg=r2(jg,[["__scopeId","data-v-0f224815"]]),Hg=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),Ma=o=>(G4("data-v-403f3edb"),o=o(),V4(),o),$g={class:"go-border-box"},Yg=["width","height"],Jg=["d"],Zg=Ma(()=>j("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"},null,-1)),qg=Ma(()=>j("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)),Xg=[Zg,qg],Qg=["fill"],Kg=["dur","path"],ev=["fill","points"],tv=["stroke","xlink:href"],nv=["stroke","xlink:href","mask"],iv=["from","to","dur"],ov=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-08-path-${P4()}`,n=`border-box-08-gradient-${P4()}`,i=`border-box-08-mask-${P4()}`,{w:a,h:r}=M1(e.chartConfig.attr),{colors:s,dur:u,backgroundColor:d,reverse:f}=M1(e.chartConfig.option),h=q1(()=>(a.value+r.value-5)*2),p=q1(()=>f.value?`M 2.5, 2.5 L 2.5, ${r.value-2.5} L ${a.value-2.5}, ${r.value-2.5} L ${a.value-2.5}, 2.5 L 2.5, 2.5`:`M2.5, 2.5 L${a.value-2.5}, 2.5 L${a.value-2.5}, ${r.value-2.5} L2.5, ${r.value-2.5} L2.5, 2.5`);return(g,y)=>(R(),X("div",$g,[(R(),X("svg",{width:l(a),height:l(r)},[j("defs",null,[j("path",{id:t,d:p.value,fill:"transparent"},null,8,Jg),j("radialGradient",{id:n,cx:"50%",cy:"50%",r:"50%"},Xg),j("mask",{id:i},[j("circle",{cx:"0",cy:"0",r:"150",fill:`url(#${n})`},[j("animateMotion",{dur:`${l(u)}s`,path:p.value,rotate:"auto",repeatCount:"indefinite"},null,8,Kg)],8,Qg)])]),j("polygon",{fill:l(d),points:`5, 5 ${l(a)-5}, 5 ${l(a)-5} ${l(r)-5} 5, ${l(r)-5}`},null,8,ev),j("use",{stroke:l(s)[0],"stroke-width":"1","xlink:href":`#${t}`},null,8,tv),j("use",{stroke:l(s)[1],"stroke-width":"3","xlink:href":`#${t}`,mask:`url(#${i})`},[j("animate",{attributeName:"stroke-dasharray",from:`0, ${h.value}`,to:`${h.value}, 0`,dur:`${l(u)}s`,repeatCount:"indefinite"},null,8,iv)],8,nv)],8,Yg))]))}});const av=r2(ov,[["__scopeId","data-v-403f3edb"]]),rv=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),sv={class:"go-border-box"},lv=["width","height"],uv=["fill","points"],cv=["fill"],dv=["fill","cx"],fv=["fill","cx","cy"],pv=["fill","cy"],hv=["stroke","points"],mv=["stroke","points"],gv=["stroke","points"],vv=["stroke","points"],_v=["stroke"],yv=["stroke"],bv=["stroke","points"],xv=["stroke","points"],Sv=["stroke","points"],Mv=["stroke","points"],wv=["stroke","points"],Av=["stroke","points"],Cv=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,backgroundColor:a}=M1(e.chartConfig.option);return(r,s)=>(R(),X("div",sv,[(R(),X("svg",{width:l(t),height:l(n)},[j("polygon",{fill:l(a),points:` 9, 7 ${l(t)-9}, 7 ${l(t)-9}, ${l(n)-7} 9, ${l(n)-7}`},null,8,uv),j("circle",{fill:l(i)[1],cx:"5",cy:"5",r:"2"},null,8,cv),j("circle",{fill:l(i)[1],cx:l(t)-5,cy:"5",r:"2"},null,8,dv),j("circle",{fill:l(i)[1],cx:l(t)-5,cy:l(n)-5,r:"2"},null,8,fv),j("circle",{fill:l(i)[1],cx:"5",cy:l(n)-5,r:"2"},null,8,pv),j("polyline",{stroke:l(i)[0],points:`10, 4 ${l(t)-10}, 4`},null,8,hv),j("polyline",{stroke:l(i)[0],points:`10, ${l(n)-4} ${l(t)-10}, ${l(n)-4}`},null,8,mv),j("polyline",{stroke:l(i)[0],points:`5, 70 5, ${l(n)-70}`},null,8,gv),j("polyline",{stroke:l(i)[0],points:`${l(t)-5}, 70 ${l(t)-5}, ${l(n)-70}`},null,8,vv),j("polyline",{stroke:l(i)[0],points:"3, 10, 3, 50"},null,8,_v),j("polyline",{stroke:l(i)[0],points:"7, 30 7, 80"},null,8,yv),j("polyline",{stroke:l(i)[0],points:`${l(t)-3}, 10 ${l(t)-3}, 50`},null,8,bv),j("polyline",{stroke:l(i)[0],points:`${l(t)-7}, 30 ${l(t)-7}, 80`},null,8,xv),j("polyline",{stroke:l(i)[0],points:`3, ${l(n)-10} 3, ${l(n)-50}`},null,8,Sv),j("polyline",{stroke:l(i)[0],points:`7, ${l(n)-30} 7, ${l(n)-80}`},null,8,Mv),j("polyline",{stroke:l(i)[0],points:`${l(t)-3}, ${l(n)-10} ${l(t)-3}, ${l(n)-50}`},null,8,wv),j("polyline",{stroke:l(i)[0],points:`${l(t)-7}, ${l(n)-30} ${l(t)-7}, ${l(n)-80}`},null,8,Av)],8,lv))]))}});const Tv=r2(Cv,[["__scopeId","data-v-f624cc05"]]),Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Tv},Symbol.toStringTag,{value:"Module"})),Ev={class:"go-border-box"},Rv=["width","height"],Iv=["fill","points"],Ov=["stroke","points"],Lv=["stroke","points"],zv=["stroke","points"],Pv=["stroke"],kv=["stroke"],Uv=["stroke"],Nv=["stroke"],Fv=["stroke"],Bv=["stroke","points"],Gv=["stroke","points"],Vv=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,backgroundColor:a}=M1(e.chartConfig.option);return(r,s)=>(R(),X("div",Ev,[(R(),X("svg",{width:l(t),height:l(n)},[j("polygon",{fill:l(a),points:`
        ${l(t)-15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${l(n)-32} 41, ${l(n)-7} ${l(t)-15}, ${l(n)-7}
      `},null,8,Iv),j("polyline",{class:"go-border-line-1",stroke:l(i)[0],points:`145, ${l(n)-5} 40, ${l(n)-5} 10, ${l(n)-35}
          10, 40 40, 5 150, 5 170, 20 ${l(t)-15}, 20`},null,8,Ov),j("polyline",{stroke:l(i)[1],class:"go-border-line-2",points:`245, ${l(n)-1} 36, ${l(n)-1} 14, ${l(n)-23}
          14, ${l(n)-100}`},null,8,Lv),j("polyline",{class:"go-border-line-3",stroke:l(i)[0],points:`7, ${l(n)-40} 7, ${l(n)-75}`},null,8,zv),j("polyline",{class:"go-border-line-4",stroke:l(i)[0],points:"28, 24 13, 41 13, 64"},null,8,Pv),j("polyline",{class:"go-border-line-5",stroke:l(i)[0],points:"5, 45 5, 140"},null,8,kv),j("polyline",{class:"go-border-line-6",stroke:l(i)[1],points:"14, 75 14, 180"},null,8,Uv),j("polyline",{class:"go-border-line-7",stroke:l(i)[1],points:"55, 11 147, 11 167, 26 250, 26"},null,8,Nv),j("polyline",{class:"go-border-line-8",stroke:l(i)[1],points:"158, 5 173, 16"},null,8,Fv),j("polyline",{class:"go-border-line-9",stroke:l(i)[0],points:`200, 17 ${l(t)-10}, 17`},null,8,Bv),j("polyline",{class:"go-border-line-10",stroke:l(i)[1],points:`385, 17 ${l(t)-10}, 17`},null,8,Gv)],8,Rv))]))}});const jv=r2(Vv,[["__scopeId","data-v-d292c6e9"]]),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),Hv={class:"go-border-box"},$v=["width","height"],Yv=["fill","points"],Jv=["stroke","points"],Zv=["stroke","points"],qv=["stroke","points"],Xv=["stroke","points"],Qv=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,backgroundColor:a}=M1(e.chartConfig.option);return(r,s)=>(R(),X("div",Hv,[(R(),X("svg",{class:"bv-border-svg-container",width:l(t),height:l(n)},[j("polygon",{fill:l(a),points:`
        23, 23 ${l(t)-24}, 23 ${l(t)-24}, ${l(n)-24} 23, ${l(n)-24}
      `},null,8,Yv),j("polyline",{class:"go-border-line-1",stroke:l(i)[0],points:`4, 4 ${l(t)-22} ,4 ${l(t)-22}, ${l(n)-22} 4, ${l(n)-22} 4, 4`},null,8,Jv),j("polyline",{class:"go-border-line-3",stroke:l(i)[1],points:`10, 10 ${l(t)-16}, 10 ${l(t)-16}, ${l(n)-16} 10, ${l(n)-16} 10, 10`},null,8,Zv),j("polyline",{class:"go-border-line-3",stroke:l(i)[1],points:`16, 16 ${l(t)-10}, 16 ${l(t)-10}, ${l(n)-10} 16, ${l(n)-10} 16, 16`},null,8,qv),j("polyline",{class:"go-border-line-3",stroke:l(i)[1],points:`22, 22 ${l(t)-4}, 22 ${l(t)-4}, ${l(n)-4} 22, ${l(n)-4} 22, 22`},null,8,Xv)],8,$v))]))}});const Kv=r2(Qv,[["__scopeId","data-v-49ac5663"]]),e_=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),t_={class:"go-border-box"},n_=["width","height"],i_=["fill","points"],o_=["stroke","points"],a_=["stroke","points"],r_=["stroke","points"],s_=["stroke","points"],l_=["stroke","points"],u_=["stroke","points"],c_=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,backgroundColor:a}=M1(e.chartConfig.option);return(r,s)=>(R(),X("div",t_,[(R(),X("svg",{width:l(t),height:l(n)},[j("polygon",{fill:l(a),points:`
        10, 22 ${l(t)-22}, 22 ${l(t)-22}, ${l(n)-86} ${l(t)-84}, ${l(n)-24} 10, ${l(n)-24}
      `},null,8,i_),j("polyline",{class:"bv-bb5-line-1",stroke:l(i)[0],points:`8, 5 ${l(t)-5}, 5 ${l(t)-5}, ${l(n)-100}
          ${l(t)-100}, ${l(n)-5} 8, ${l(n)-5} 8, 5`},null,8,o_),j("polyline",{class:"bv-bb5-line-2",stroke:l(i)[1],points:`3, 5 ${l(t)-20}, 5 ${l(t)-20}, ${l(n)-60}
          ${l(t)-74}, ${l(n)-5} 3, ${l(n)-5} 3, 5`},null,8,a_),j("polyline",{class:"bv-bb5-line-3",stroke:l(i)[1],points:`50, 13 ${l(t)-35}, 13`},null,8,r_),j("polyline",{class:"bv-bb5-line-4",stroke:l(i)[1],points:`15, 20 ${l(t)-35}, 20`},null,8,s_),j("polyline",{class:"bv-bb5-line-5",stroke:l(i)[1],points:`15, ${l(n)-20} ${l(t)-110}, ${l(n)-20}`},null,8,l_),j("polyline",{class:"bv-bb5-line-6",stroke:l(i)[1],points:`15, ${l(n)-13} ${l(t)-110}, ${l(n)-13}`},null,8,u_)],8,n_))]))}});const d_=r2(c_,[["__scopeId","data-v-dacc16ab"]]),f_=Object.freeze(Object.defineProperty({__proto__:null,default:d_},Symbol.toStringTag,{value:"Module"})),p_={class:"go-border-box"},h_=["width","height"],m_=["fill","points"],g_=["stroke","points"],v_=["stroke","points"],__=["fill"],y_=["fill","cx"],b_=["fill","cx","cy"],x_=["fill","cy"],S_=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,backgroundColor:a}=M1(e.chartConfig.option);return(r,s)=>(R(),X("div",p_,[(R(),X("svg",{width:l(t),height:l(n)},[j("polygon",{fill:l(a),points:`
        7, 7 ${l(t)-7}, 7 ${l(t)-7}, ${l(n)-7} 7, ${l(n)-7}
      `},null,8,m_),j("polyline",{stroke:l(i)[0],points:`2, 2 ${l(t)-2} ,2 ${l(t)-2}, ${l(n)-2} 2, ${l(n)-2} 2, 2`},null,8,g_),j("polyline",{stroke:l(i)[1],points:`6, 6 ${l(t)-6}, 6 ${l(t)-6}, ${l(n)-6} 6, ${l(n)-6} 6, 6`},null,8,v_),j("circle",{fill:l(i)[0],cx:"11",cy:"11",r:"1"},null,8,__),j("circle",{fill:l(i)[0],cx:l(t)-11,cy:"11",r:"1"},null,8,y_),j("circle",{fill:l(i)[0],cx:l(t)-11,cy:l(n)-11,r:"1"},null,8,b_),j("circle",{fill:l(i)[0],cx:"11",cy:l(n)-11,r:"1"},null,8,x_)],8,h_))]))}});const M_=r2(S_,[["__scopeId","data-v-9c92a0b8"]]),w_=Object.freeze(Object.defineProperty({__proto__:null,default:M_},Symbol.toStringTag,{value:"Module"})),A_=["width","height"],C_=["x","y","width","height","fill"],T_=["to","dur"],D_=["x","y","width","height","fill"],E_=["to","dur"],R_=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,dur:a,endWidth:r,lineHeight:s}=M1(e.chartConfig.option),u=q1(()=>0),d=q1(()=>n.value/2);return(f,h)=>(R(),X("svg",{width:l(t),height:l(n)},[j("rect",{x:u.value,y:d.value,width:l(t),height:l(s),fill:l(i)[0]},[j("animate",{attributeName:"width",from:"0",to:l(t),dur:`${l(a)}s`,calcMode:"spline",keyTimes:"0;1",keySplines:".42,0,.58,1",repeatCount:"indefinite"},null,8,T_)],8,C_),j("rect",{x:u.value,y:d.value,width:l(r),height:l(s),fill:l(i)[1]},[j("animate",{attributeName:"x",from:"0",to:l(t),dur:`${l(a)}s`,calcMode:"spline",keyTimes:"0;1",keySplines:"0.42,0,0.58,1",repeatCount:"indefinite"},null,8,E_)],8,D_)],8,A_))}}),I_=Object.freeze(Object.defineProperty({__proto__:null,default:R_},Symbol.toStringTag,{value:"Module"})),O_=["width"],L_=["stroke","points"],z_=["stroke","points"],P_=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,dur:a,lineHeight:r}=M1(e.chartConfig.option);return(s,u)=>(R(),X("div",{class:"go-decorates-2",style:c2(`width:${l(t)}px; height: ${l(r)}px animation-duration:${l(a)}s`)},[(R(),X("svg",{width:l(t),height:3},[j("polyline",{stroke:l(i)[0],points:`0, 2.5 ${l(t)}, 2.5`},null,8,L_),j("polyline",{stroke:l(i)[1],"stroke-width":"3","stroke-dasharray":"20, 80","stroke-dashoffset":"-30",points:`0, 2.5 ${l(t)}, 2.5`},null,8,z_)],8,O_))],4))}});const k_=r2(P_,[["__scopeId","data-v-bc35517f"]]),U_=Object.freeze(Object.defineProperty({__proto__:null,default:k_},Symbol.toStringTag,{value:"Module"})),N_={width:20,height:20},F_=["stroke"],B_=["stroke"],G_={width:20,height:20},V_=["stroke"],j_=["stroke"],W_=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,dataset:a,textSize:r,textColor:s}=M1(e.chartConfig.option);return(u,d)=>(R(),X("div",{class:"go-border-03",style:c2(`width: ${l(t)}px; height: ${l(n)}px`)},[(R(),X("svg",N_,[j("polyline",{"stroke-width":"4",fill:"transparent",stroke:l(i)[0],points:"10, 0 19, 10 10, 20"},null,8,F_),j("polyline",{"stroke-width":"2",fill:"transparent",stroke:l(i)[1],points:"2, 0 11, 10 2, 20"},null,8,B_)])),j("span",{style:c2(`color: ${l(s)};font-size: ${l(r)}px`)},C2(l(a)),5),(R(),X("svg",G_,[j("polyline",{"stroke-width":"4",fill:"transparent",stroke:l(i)[0],points:"11, 0 2, 10 11, 20"},null,8,V_),j("polyline",{"stroke-width":"2",fill:"transparent",stroke:l(i)[1],points:"19, 0 10, 10 19, 20"},null,8,j_)]))],4))}});const H_=r2(W_,[["__scopeId","data-v-2d657cf1"]]),$_=Object.freeze(Object.defineProperty({__proto__:null,default:H_},Symbol.toStringTag,{value:"Module"})),Y_={class:"go-border-04"},J_=["width","height"],Z_=["stroke","points"],q_=["stroke","points"],X_=["stroke","points"],Q_=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,reverse:a}=M1(e.chartConfig.option),r=s=>a.value?t.value-s:s;return(s,u)=>(R(),X("div",Y_,[(R(),X("svg",{width:l(t),height:l(n)},[j("polyline",{stroke:l(i)[0],"stroke-width":"2",fill:"transparent",points:`${r(0)}, 0 ${r(30)}, ${l(n)/2}`},null,8,Z_),j("polyline",{stroke:l(i)[0],"stroke-width":"2",fill:"transparent",points:`${r(20)}, 0 ${r(50)}, ${l(n)/2} ${r(l(t))}, ${l(n)/2}`},null,8,q_),j("polyline",{stroke:l(i)[1],fill:"transparent","stroke-width":"3",points:`${r(0)}, ${l(n)-3}, ${r(200)}, ${l(n)-3}`},null,8,X_)],8,J_))]))}});const K_=r2(Q_,[["__scopeId","data-v-08a272d6"]]),ey=Object.freeze(Object.defineProperty({__proto__:null,default:K_},Symbol.toStringTag,{value:"Module"})),ty={class:"go-border-05"},ny=["width","height"],iy=["stroke","points"],oy=["stroke","points","stroke-dasharray"],ay=["values","dur","begin"],ry=["values","begin"],sy=["stroke","points","stroke-dasharray"],ly=["values","dur","begin"],uy=["values","begin"],cy=["stroke","points","stroke-dasharray"],dy=["values","dur","begin"],fy=["values","begin"],py=["cy","fill"],hy=["values","begin"],my=["cx","cy","fill"],gy=["values","begin"],vy=["values","begin"],_y=["cx","cy","fill"],yy=["values","begin"],by=["values","begin"],xy=["cx","cy","fill"],Sy=["values","begin"],My=["values","begin"],wy=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=P4(),{w:n,h:i}=M1(e.chartConfig.attr),{colors:a,dur:r}=M1(e.chartConfig.option),s=`d10ani1${t}`,u=`d10ani2${t}`,d=`d10ani3${t}`,f=`d10ani4${t}`,h=`d10ani5${t}`,p=`d10ani6${t}`,g=`d10ani7${t}`;return(y,v)=>(R(),X("div",ty,[(R(),X("svg",{width:l(n),height:l(i)},[j("polyline",{stroke:l(a)[1],"stroke-width":"2",points:`0, ${l(i)/2} ${l(n)}, ${l(i)/2}`},null,8,iy),j("polyline",{stroke:l(a)[0],"stroke-width":"2",points:`5, ${l(i)/2} ${l(n)*.2-3}, ${l(i)/2}`,"stroke-dasharray":`0, ${l(n)*.2}`,fill:"freeze"},[j("animate",{id:u,attributeName:"stroke-dasharray",values:`0, ${l(n)*.2};${l(n)*.2}, 0;`,dur:l(r),begin:`${s}.end`,fill:"freeze"},null,8,ay),j("animate",{attributeName:"stroke-dasharray",values:`${l(n)*.2}, 0;0, ${l(n)*.2}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,ry)],8,oy),j("polyline",{stroke:l(a)[0],"stroke-width":"2",points:`${l(n)*.2+3}, ${l(i)/2} ${l(n)*.8-3}, ${l(i)/2}`,"stroke-dasharray":`0, ${l(n)*.6}`},[j("animate",{id:f,attributeName:"stroke-dasharray",values:`0, ${l(n)*.6};${l(n)*.6}, 0`,dur:l(r),begin:`${d}.end + 1s`,fill:"freeze"},null,8,ly),j("animate",{attributeName:"stroke-dasharray",values:`${l(n)*.6}, 0;0, ${l(n)*.6}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,uy)],8,sy),j("polyline",{stroke:l(a)[0],"stroke-width":"2",points:`${l(n)*.8+3}, ${l(i)/2} ${l(n)-5}, ${l(i)/2}`,"stroke-dasharray":`0, ${l(n)*.2}`},[j("animate",{id:p,attributeName:"stroke-dasharray",values:`0, ${l(n)*.2};${l(n)*.2}, 0`,dur:l(r),begin:`${h}.end + 1s`,fill:"freeze"},null,8,dy),j("animate",{attributeName:"stroke-dasharray",values:`${l(n)*.2}, 0;0, ${l(n)*.3}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,fy)],8,cy),j("circle",{cx:"2",cy:l(i)/2,r:"2",fill:l(a)[1]},[j("animate",{id:s,attributeName:"fill",values:`${l(a)[1]};${l(a)[0]}`,begin:`0s;${g}.end`,dur:"0.3s",fill:"freeze"},null,8,hy)],8,py),j("circle",{cx:l(n)*.2,cy:l(i)/2,r:"2",fill:l(a)[1]},[j("animate",{id:d,attributeName:"fill",values:`${l(a)[1]};${l(a)[0]}`,begin:`${u}.end`,dur:"0.3s",fill:"freeze"},null,8,gy),j("animate",{attributeName:"fill",values:`${l(a)[1]};${l(a)[1]}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,vy)],8,my),j("circle",{cx:l(n)*.8,cy:l(i)/2,r:"2",fill:l(a)[1]},[j("animate",{id:h,attributeName:"fill",values:`${l(a)[1]};${l(a)[0]}`,begin:`${f}.end`,dur:"0.3s",fill:"freeze"},null,8,yy),j("animate",{attributeName:"fill",values:`${l(a)[1]};${l(a)[1]}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,by)],8,_y),j("circle",{cx:l(n)-2,cy:l(i)/2,r:"2",fill:l(a)[1]},[j("animate",{id:g,attributeName:"fill",values:`${l(a)[1]};${l(a)[0]}`,begin:`${p}.end`,dur:"0.3s",fill:"freeze"},null,8,Sy),j("animate",{attributeName:"fill",values:`${l(a)[1]};${l(a)[1]}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,My)],8,xy)],8,ny))]))}});const Ay=r2(wy,[["__scopeId","data-v-5bc9012e"]]),Cy=Object.freeze(Object.defineProperty({__proto__:null,default:Ay},Symbol.toStringTag,{value:"Module"})),Ty=o=>(G4("data-v-e09af764"),o=o(),V4(),o),Dy={class:"go-border-06"},Ey=["width","height"],Ry=Ty(()=>j("polygon",{class:"stroke fill",points:"15.5 6.5 20.5 0.5 50.5 0.5 55.5 6.5 15.5 6.5"},null,-1)),Iy=["points"],Oy=["points"],Ly=["points"],zy=["points"],Py=["points"],ky=["points"],Uy={class:"text"},Ny=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(u=>({"40fa92e0":l(i)[0],"40fa92ff":l(i)[1],e9154e84:l(s),"502e16dd":l(r)+"px"}));const e=o;P4();const{w:t,h:n}=M1(e.chartConfig.attr),{colors:i,dataset:a,textSize:r,textColor:s}=M1(e.chartConfig.option);return(u,d)=>(R(),X("div",Dy,[(R(),X("svg",{xmlns:"http://www.w3.org/2000/svg",width:l(t),height:l(n)},[Ry,j("polygon",{class:"stroke fill",points:`15.5 ${l(n)-6.5} 20.5 ${l(n)-.5} 50.5 ${l(n)-.5} 55.5 ${l(n)-6.5} 15.5 ${l(n)-6.5}`},null,8,Iy),j("polygon",{class:"stroke fill",points:`${l(t)-15.5} 6.5 ${l(t)-20.5} 0.5 ${l(t)-50.5} 0.5 ${l(t)-55.5} 6.5 ${l(t)-15.5} 6.5`},null,8,Oy),j("polygon",{class:"stroke fill",points:`${l(t)-15.5} ${l(n)-6.5} ${l(t)-20.5} ${l(n)-.5} ${l(t)-50.5} ${l(n)-.5} ${l(t)-55.5} ${l(n)-6.5} ${l(t)-15.5} ${l(n)-6.5}`},null,8,Ly),j("polygon",{class:"stroke fill",points:`15.5 6.5 0.5 ${l(n)/2} 15.5 ${l(n)-6.5} ${l(t)-15.5} ${l(n)-6.5} ${l(t)-.5} ${l(n)/2} ${l(t)-15.5} 6.5 15.5 6.5`},null,8,zy),j("polyline",{class:"stroke fill-none",points:`20.5 14.5 8.5 ${l(n)/2} 20.5 ${l(n)-14.5}`},null,8,Py),j("polyline",{class:"stroke fill-none",points:`${l(t)-20.5} 14.5 ${l(t)-8.5} ${l(n)/2} ${l(t)-20.5} ${l(n)-14.5}`},null,8,ky)],8,Ey)),j("span",Uy,C2(l(a)),1)]))}});const Fy=r2(Ny,[["__scopeId","data-v-e09af764"]]),By=Object.freeze(Object.defineProperty({__proto__:null,default:Fy},Symbol.toStringTag,{value:"Module"})),Gy=["width","height"],Vy=["stroke-width","points","stroke"],jy=["stroke-width","points","stroke"],Wy=["stroke-width","points","stroke"],Hy=["stroke-width","points","stroke"],$y=["stroke-width","points","stroke"],Yy=["stroke-width","points","stroke"],Jy=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{lineNum:i,lineNumUp:a,lineWidth:r,backgroundCol:s,animateCol:u}=M1(e.chartConfig.option),d=(f,h)=>{const p=t.value/2,g=n.value/(a.value+i.value)-r.value/(a.value+i.value);if(f===-1&&h==="")return`0,${n.value/2} ${p},${n.value/2} ${p*2},${n.value/2}`;if(f!==-1&&h==="down")return`0,${n.value/2} ${p},${n.value/2} ${p},${n.value/2+f*g},${p*2},${n.value/2+f*g}`;if(f!==-1&&h==="up")return`0,${n.value/2} ${p},${n.value/2} ${p},${n.value/2-f*g},${p*2},${n.value/2-f*g}`};return(f,h)=>(R(),X("svg",{width:l(t),height:l(n)},[j("polyline",{"stroke-width":l(r),points:d(-1,""),stroke:l(s),fill:"none"},null,8,Vy),j("polyline",{"stroke-width":l(r),class:"g-dashed-line",points:d(-1,""),stroke:l(u),fill:"none"},null,8,jy),(R(!0),X(b1,null,j1(l(i),(p,g)=>(R(),X("polyline",{"stroke-width":l(r),key:g,points:d(g+1,"down"),stroke:l(s),fill:"none"},null,8,Wy))),128)),(R(!0),X(b1,null,j1(l(i),(p,g)=>(R(),X("polyline",{"stroke-width":l(r),class:"g-dashed-line",key:g,points:d(g+1,"down"),stroke:l(u),fill:"none"},null,8,Hy))),128)),(R(!0),X(b1,null,j1(l(a),(p,g)=>(R(),X("polyline",{"stroke-width":l(r),key:g,points:d(g+1,"up"),stroke:l(s),fill:"none"},null,8,$y))),128)),(R(!0),X(b1,null,j1(l(a),(p,g)=>(R(),X("polyline",{"stroke-width":l(r),class:"g-dashed-line",key:g,points:d(g+1,"up"),stroke:l(u),fill:"none"},null,8,Yy))),128))],8,Gy))}});const Zy=r2(Jy,[["__scopeId","data-v-fd39e299"]]),qy=Object.freeze(Object.defineProperty({__proto__:null,default:Zy},Symbol.toStringTag,{value:"Module"})),Xy=["width","height"],Qy=j("defs",null,[j("filter",{id:"blurFilter",x:"-20%",y:"-20%",width:"140%",height:"140%"},[j("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})])],-1),Ky=["cx","cy","r","fill"],eb=["cx","cy","r","stroke","stroke-width"],tb=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{outCircle:i,inCircle:a,outCircleColor:r,inCircleColor:s,outCircleWidth:u}=M1(e.chartConfig.option);return(d,f)=>(R(),X("svg",{width:l(t),height:l(n)},[Qy,j("circle",{cx:l(t)/2,cy:l(n)/2,r:l(a),fill:l(s),filter:"url(#blurFilter)"},null,8,Ky),j("circle",{cx:l(t)/2,cy:l(n)/2,r:l(i),fill:"none",stroke:l(r),"stroke-width":l(u)},null,8,eb)],8,Xy))}}),nb=Object.freeze(Object.defineProperty({__proto__:null,default:tb},Symbol.toStringTag,{value:"Module"})),ib=o=>(G4("data-v-765cb1c3"),o=o(),V4(),o),ob={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"},ab=Ns('<filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%" data-v-765cb1c3><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" data-v-765cb1c3></feGaussianBlur><feOffset in="blur" dx="2.5" dy="2.5" data-v-765cb1c3></feOffset></filter><g data-v-765cb1c3><circle id="shadow" style="fill:rgba(0, 0, 0, 0.1);" cx="100" cy="100" r="87" filter="url(#innerShadow)" data-v-765cb1c3></circle><circle id="circle" class="clock-border" cx="100" cy="100" r="80" data-v-765cb1c3></circle></g>',2),rb={x1:"100",y1:"100",x2:"100",y2:"55",style:{"stroke-width":"3px"},class:"clock-line"},sb=["from","to"],lb={x1:"100",y1:"100",x2:"100",y2:"40",style:{"stroke-width":"4px"},class:"clock-line"},ub=["from","to"],cb={x1:"100",y1:"100",x2:"100",y2:"30",style:{"stroke-width":"2px"},class:"clock-line"},db=["from","to"],fb=ib(()=>j("circle",{id:"center",style:{fill:"#128a86",stroke:"#c1efed","stroke-width":"2px"},cx:"100",cy:"100",r:"3"},null,-1)),pb=["transform"],hb=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(f=>({"020f4b75":l(a),"009a2695":l(t)+"px","76960c08":l(i),"0dd51a7e":l(n)}));const e=o;let{border:t,color:n,bgColor:i,borderColor:a}=M1(e.chartConfig.option);const r=new Date,s=360*r.getHours()/12+r.getMinutes()/2,u=360*r.getMinutes()/60,d=360*r.getSeconds()/60;return(f,h)=>(R(),X("svg",ob,[ab,j("g",null,[j("line",rb,[j("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"43200s",repeatCount:"indefinite",from:`${s} 100 100`,to:`${s+360} 100 100`},null,8,sb)]),j("line",lb,[j("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"3600s",repeatCount:"indefinite",from:`${u} 100 100`,to:`${u+360} 100 100`},null,8,ub)]),j("line",cb,[j("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"60s",repeatCount:"indefinite",from:`${d} 100 100`,to:`${d+360} 100 100`},null,8,db)])]),fb,(R(),X(b1,null,j1(12,p=>j("line",{x1:"100",y1:"30",x2:"100",y2:"40",class:"clock-line",transform:`rotate(${(p+1)*360/12} 100 100)`,key:`line_${p+1}`},null,8,pb)),64))]))}});const mb=r2(hb,[["__scopeId","data-v-765cb1c3"]]),gb=Object.freeze(Object.defineProperty({__proto__:null,default:mb},Symbol.toStringTag,{value:"Module"})),vb=["data-front"],_b=["data-back"],yb=s1({__name:"index",props:{flipType:{type:String,default:()=>"down"},count:{type:[Number,String],default:0},duration:{type:Number,default:600},width:{type:Number,default:60},height:{type:Number,default:100},radius:{type:Number,default:10},frontColor:{type:String,default:"#ffffff"},backColor:{type:String,default:"#000000"},borderWidth:{type:Number,default:2}},setup(o){n4(s=>({"6c489b99":e.frontColor,"20a651fd":e.backColor,a25d42fe:`${e.radius}px`,"54dbe4cd":`${e.width}px`,"07059ed4":`${e.height}px`,"566d4ab2":`${e.height*2}px`,"4c2bf4c6":`${e.borderWidth*2}px`,f0ffacfc:`${e.duration/1e3}s`}));const e=o,t=J1(!1),n=J1(e.count||0),i=J1(e.count||0);let a=0;const r=async(s,u)=>{if(t.value){t.value=!1,clearTimeout(a),await $0(),await r(s,u);return}i.value=u,n.value=s,t.value=!0,a=setTimeout(()=>{t.value=!1,n.value=u},e.duration)};return N1(()=>e.count,(s,u)=>{r(u,s)},{immediate:!0}),(s,u)=>(R(),X("div",{class:P5(["go-flipper",[o.flipType,{go:t.value}]])},[j("div",{class:"digital front","data-front":n.value},null,8,vb),j("div",{class:"digital back","data-back":i.value},null,8,_b)],2))}});const c5=r2(yb,[["__scopeId","data-v-c324e15b"]]),bb={key:0},xb={key:1},Sb={key:1},Mb={key:2},wb={key:3},Ab={key:4},Cb={key:5},Tb=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(q=>({"00ae8eeb":`${l(t)}px`,"0049a348":`${l(n)}px`,"391e8a10":`${l(h)}px`,"40831fcb":`${l(p)}px`,"744fbcd4":l(f)}));const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{dataset:i,useEndDate:a,endDate:r,style:s,showDay:u,flipperBgColor:d,flipperTextColor:f,flipperWidth:h,flipperHeight:p,flipperRadius:g,flipperGap:y,flipperType:v,flipperSpeed:_}=M1(e.chartConfig.option),S=J1(),x=J1(!1),M=J1(i.value*1e3),b=J1([]),C=J1([]),w=J1([]),I=J1([]),T=q=>{const $=Math.max(q.toString().length,2);return q.toString().padStart($,"0").split("")},D=(q,$,k)=>{const B=Math.floor(q/24);b.value=T(B),C.value=T(u.value?q%24:q),w.value=T($),I.value=T(k)},N=({hours:q,minutes:$,seconds:k})=>{D(q,$,k)},V=()=>{try{x.value=!1,M.value=a.value?r.value-new Date().getTime():i.value*1e3,S.value?.reset&&S.value?.reset(),x.value=!0}catch(q){console.log(q)}};return N1(()=>e.chartConfig.option.dataset,()=>{V()},{immediate:!0}),N1(()=>e.chartConfig.option.endDate,()=>{V()},{immediate:!0}),N1(()=>e.chartConfig.option.useEndDate,()=>{V()},{immediate:!0}),m0(()=>{V()}),(q,$)=>{const k=L("n-countdown"),B=L("n-space");return R(),X("div",null,[Fs(c(k,{ref_key:"countdownRef",ref:S,duration:M.value,render:N,active:x.value},null,8,["duration","active"]),[[Bs,!1]]),c(B,{class:"go-decorates-more-countdown",size:l(y),align:"center",justify:"center"},{default:m(()=>[l(u)?(R(),X(b1,{key:0},[(R(!0),X(b1,null,j1(b.value,(G,J)=>(R(),p1(l(c5),{count:G,width:l(h),height:l(p),"front-color":l(f),"back-color":l(d),radius:l(g),"flip-type":l(v),duration:l(_),key:J,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),l(s)==="时分秒"?(R(),X("div",bb,"天")):(R(),X("div",xb,":"))],64)):f2("",!0),(R(!0),X(b1,null,j1(C.value,(G,J)=>(R(),p1(l(c5),{count:G,width:l(h),height:l(p),"front-color":l(f),"back-color":l(d),radius:l(g),"flip-type":l(v),duration:l(_),key:J,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),l(s)==="时分秒"?(R(),X("div",Sb,"时")):(R(),X("div",Mb,":")),(R(!0),X(b1,null,j1(w.value,(G,J)=>(R(),p1(l(c5),{count:G,width:l(h),height:l(p),"front-color":l(f),"back-color":l(d),radius:l(g),"flip-type":l(v),duration:l(_),key:J,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),l(s)==="时分秒"?(R(),X("div",wb,"分")):(R(),X("div",Ab,":")),(R(!0),X(b1,null,j1(I.value,(G,J)=>(R(),p1(l(c5),{count:G,width:l(h),height:l(p),"front-color":l(f),"back-color":l(d),radius:l(g),"flip-type":l(v),duration:l(_),key:J,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),l(s)==="时分秒"?(R(),X("div",Cb,"秒")):f2("",!0)]),_:1},8,["size"])])}}});const Db=r2(Tb,[["__scopeId","data-v-bc7ad025"]]),Eb=Object.freeze(Object.defineProperty({__proto__:null,default:Db},Symbol.toStringTag,{value:"Module"})),Rb=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(S=>({eaef08da:`${l(t)}px`,ec95c9f8:`${l(n)}px`}));const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{flipperLength:i,flipperBgColor:a,flipperTextColor:r,flipperWidth:s,flipperHeight:u,flipperRadius:d,flipperGap:f,flipperType:h,flipperSpeed:p,flipperBorderWidth:g}=M1(e.chartConfig.option),y=J1([]),v=S=>S.toString().padStart(i.value,"0").split("").slice(i.value*-1),_=S=>{y.value=v(S)};return N1(()=>e.chartConfig.option,S=>{try{_(S.dataset)}catch(x){console.log(x)}},{immediate:!0,deep:!0}),d2(e.chartConfig,Q1,S=>{_(S)}),(S,x)=>{const M=L("n-space");return R(),p1(M,{class:"go-decorates-flipper-number",size:l(f),align:"center",justify:"center"},{default:m(()=>[(R(!0),X(b1,null,j1(y.value,(b,C)=>(R(),p1(l(c5),{count:b,width:l(s),height:l(u),"front-color":l(r),"back-color":l(a),radius:l(d),"flip-type":l(h),duration:l(p),"border-width":l(g),key:C,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration","border-width"]))),128))]),_:1},8,["size"])}}});const Ib=r2(Rb,[["__scopeId","data-v-eb31c291"]]),Ob=Object.freeze(Object.defineProperty({__proto__:null,default:Ib},Symbol.toStringTag,{value:"Module"})),wa=o=>(G4("data-v-e5f9cdb3"),o=o(),V4(),o),Lb=wa(()=>j("path",{d:"M665.6 1017.6c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h268.8l6.4-268.8c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v294.4c0 32-25.6 51.2-51.2 51.2h-300.8zM51.2 396.8c-19.2 0-38.4-19.2-38.4-38.4V64C12.8 32 38.4 12.8 64 12.8h294.4c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H89.6v268.8c0 19.2-19.2 38.4-38.4 38.4zM64 1017.6c-32 0-51.2-25.6-51.2-51.2v-294.4c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v217.6l198.4-198.4c6.4-6.4 19.2-12.8 25.6-12.8s19.2 6.4 25.6 12.8c6.4 6.4 12.8 19.2 12.8 25.6 0 12.8-6.4 19.2-12.8 25.6l-198.4 198.4h217.6c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H64z m915.2-620.8c-19.2 0-38.4-19.2-38.4-38.4V140.8l-198.4 198.4c-6.4 6.4-19.2 12.8-25.6 12.8-12.8 0-19.2-6.4-25.6-12.8-12.8-12.8-12.8-38.4 0-51.2l198.4-198.4h-217.6c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h294.4c32 0 51.2 25.6 51.2 51.2v294.4c0 19.2-19.2 38.4-38.4 38.4z",class:"fullScreen-border"},null,-1)),zb=[Lb],Pb=wa(()=>j("path",{d:"M379.336 697.237L153.362 921.55c-14.11 14.007-36.905 13.922-50.912-0.188-14.007-14.11-13.922-36.905 0.188-50.912l227.6-225.927H138.645c-18.99 0-34.385-15.446-34.385-34.5 0-19.053 15.395-34.5 34.385-34.5H413.72c18.99 0 34.384 15.447 34.384 34.5v276c0 9.15-3.622 17.926-10.07 24.396a34.326 34.326 0 0 1-24.314 10.104 34.326 34.326 0 0 1-24.314-10.104 34.559 34.559 0 0 1-10.071-24.396V697.237z m263.395-366.88l227.813-227.813c14.059-14.059 36.853-14.059 50.912 0 14.059 14.059 14.059 36.853 0 50.912l-225.18 225.18h187.147c18.99 0 34.385 15.445 34.385 34.5 0 19.053-15.395 34.5-34.385 34.5H608.346c-18.99 0-34.384-15.447-34.384-34.5v-276c0-9.15 3.622-17.926 10.07-24.396a34.326 34.326 0 0 1 24.314-10.105c9.12 0 17.865 3.635 24.314 10.105a34.559 34.559 0 0 1 10.07 24.395v193.223zM99.385 410a34.326 34.326 0 0 1-24.314-10.105A34.559 34.559 0 0 1 65 375.5v-276C65 80.446 80.395 65 99.385 65h275.077c18.99 0 34.384 15.446 34.384 34.5 0 19.054-15.394 34.5-34.384 34.5H133.769v241.5c0 9.15-3.622 17.925-10.07 24.395A34.326 34.326 0 0 1 99.384 410z m825.23 552H649.538c-18.99 0-34.384-15.446-34.384-34.5 0-19.054 15.394-34.5 34.384-34.5h240.693V651.5c0-19.054 15.394-34.5 34.384-34.5 18.99 0 34.385 15.446 34.385 34.5v276c0 19.054-15.395 34.5-34.385 34.5z",class:"fullScreen-border"},null,-1)),kb=[Pb],Ub=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(f=>({"0b37a00c":l(i),"09c27b2c":l(t)+"px",17753213:l(n)}));const e=o;let{border:t,bgColor:n,borderColor:i}=M1(e.chartConfig.option);const a=J1(!1),r=()=>{a.value=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)};r();const s=f=>{f.requestFullscreen?f.requestFullscreen():document.mozRequestFullScreen?document.mozRequestFullScreen():document.webkitRequestFullscreen?document.webkitRequestFullscreen():document.msRequestFullscreen&&document.msRequestFullscreen()},u=()=>{document.fullscreenElement&&document.exitFullscreen?document.exitFullscreen():document.mozFullScreenElement&&document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitFullscreenElement&&document.webkitExitFullscreen?document.webkitExitFullscreen():document.msFullscreenElement&&document.msExitFullscreen&&document.msExitFullscreen()},d=()=>{a.value?u():s(document.documentElement),a.value=!a.value,setTimeout(()=>{r()},1e3)};return m0(()=>{document.addEventListener("fullscreenchange",r),document.addEventListener("webkitfullscreenchange",r),document.addEventListener("mozfullscreenchange",r),document.addEventListener("MSFullscreenChange",r)}),t0(()=>{document.removeEventListener("fullscreenchange",r),document.removeEventListener("webkitfullscreenchange",r),document.removeEventListener("mozfullscreenchange",r),document.removeEventListener("MSFullscreenChange",r)}),(f,h)=>a.value?(R(),X("svg",{key:1,onClick:d,viewBox:"0 0 1024 1024"},kb)):(R(),X("svg",{key:0,onClick:d,viewBox:"0 0 1024 1024"},zb))}});const Nb=r2(Ub,[["__scopeId","data-v-e5f9cdb3"]]),Fb=Object.freeze(Object.defineProperty({__proto__:null,default:Nb},Symbol.toStringTag,{value:"Module"})),Bb=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=G3({from:0,dataset:0});M1(e.chartConfig.attr);let{dur:n,showSeparator:i,prefixText:a,prefixColor:r,suffixText:s,suffixColor:u,precision:d,numberSize:f,numberColor:h}=M1(e.chartConfig.option);const p=g=>{t.from=t.dataset,t.dataset=g};return N1(()=>e.chartConfig.option.from,()=>{t.from=e.chartConfig.option.from},{immediate:!0}),N1(()=>e.chartConfig.option.dataset,()=>{t.dataset=e.chartConfig.option.dataset},{immediate:!0,deep:!1}),d2(e.chartConfig,Q1,p),(g,y)=>{const v=L("n-number-animation"),_=L("n-statistic");return R(),p1(_,{"tabular-nums":"",class:"go-decorates-number"},{prefix:m(()=>[j("span",{style:c2(`color:${l(r)};font-size:${l(f)}px`)},C2(l(a)),5)]),suffix:m(()=>[j("span",{style:c2(`color:${l(u)};font-size:${l(f)}px`)},C2(l(s)),5)]),default:m(()=>[j("span",{style:c2(`color:${l(h)};font-size:${l(f)}px`)},[c(v,{from:t.from,to:t.dataset,duration:l(n)*1e3,"show-separator":l(i),precision:l(d)},null,8,["from","to","duration","show-separator","precision"])],4)]),_:1})}}});const Gb=r2(Bb,[["__scopeId","data-v-81a0eb05"]]),Vb=Object.freeze(Object.defineProperty({__proto__:null,default:Gb},Symbol.toStringTag,{value:"Module"})),jb={class:"go-decorates-line"},Wb=["width","height"],Hb=["y1","x2","y2","stroke","stroke-width"],$b=["y1","x2","y2","stroke","stroke-width"],Yb=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{o_color:i,i_color:a,line_class:r}=M1(e.chartConfig.option);return(s,u)=>(R(),X("div",jb,[(R(),X("svg",{width:l(t),height:l(n)},[j("line",{x1:0,y1:l(n)/2,x2:l(t),y2:l(n)/2,stroke:l(i),"stroke-width":l(n)},null,8,Hb),j("line",{x1:0,y1:l(n)/2,x2:l(t),y2:l(n)/2,stroke:l(a),"stroke-width":l(n)/2,class:P5(l(r))},null,10,$b)],8,Wb))]))}});const Jb=r2(Yb,[["__scopeId","data-v-de46e148"]]),Zb=Object.freeze(Object.defineProperty({__proto__:null,default:Jb},Symbol.toStringTag,{value:"Module"})),qb={class:"go-decorates-line"},Xb=["width","height"],Qb=["x1","x2","y2","stroke","stroke-width"],Kb=["x1","x2","y2","stroke","stroke-width"],ex=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{o_color:i,i_color:a,line_class:r}=M1(e.chartConfig.option);return(s,u)=>(R(),X("div",qb,[(R(),X("svg",{width:l(t),height:l(n)},[j("line",{x1:l(t)/2,y1:0,x2:l(t)/2,y2:l(n),stroke:l(i),"stroke-width":l(t)},null,8,Qb),j("line",{x1:l(t)/2,y1:0,x2:l(t)/2,y2:l(n),stroke:l(a),"stroke-width":l(t)/2,class:P5(l(r))},null,10,Kb)],8,Xb))]))}});const tx=r2(ex,[["__scopeId","data-v-e16a5446"]]),nx=Object.freeze(Object.defineProperty({__proto__:null,default:tx},Symbol.toStringTag,{value:"Module"})),ix=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;let t=J1("2021-2-3"),n=J1("08:00:00"),i=J1("2021-2-3 08:00:00"),a=J1("none"),r=null;const{w:s,h:u}=M1(e.chartConfig.attr);let{timeColor:d,timeSize:f,timeLineHeight:h,timeTextIndent:p,fontWeight:g,showShadow:y,hShadow:v,vShadow:_,blurShadow:S,colorShadow:x}=M1(e.chartConfig.option);return N1(e.chartConfig.option,()=>{try{e.chartConfig.option.showShadow?a.value=`${e.chartConfig.option.hShadow}px ${e.chartConfig.option.vShadow}px ${e.chartConfig.option.blurShadow}px ${e.chartConfig.option.colorShadow}`:a.value="none"}catch(M){console.log(M)}},{immediate:!0}),m0(()=>{r=setInterval(()=>{var M=new Date,b=M.getFullYear(),C=M.getMonth()+1<10?"0"+(M.getMonth()+1):M.getMonth()+1,w=M.getDate()<10?"0"+M.getDate():M.getDate(),I=M.getHours(),T=M.getMinutes(),D=M.getSeconds();let N="";I<10&&(N+="0"),N+=I+":",T<10&&(N+="0"),N+=T+":",D<10&&(N+="0"),N+=D,t.value=`${b}-${C}-${w}`,n.value=N,i.value=t.value+" "+n.value},500)}),t0(()=>{clearInterval(r)}),d2(e.chartConfig,Q1),(M,b)=>(R(),X("div",{class:"go-decorates-number",style:c2(`width:${l(s)}px;height:${l(u)}px;`)},[j("div",{style:c2(`color:${l(d)};font-size:${l(f)}px;line-height:${l(h)}px;
      letter-spacing:${l(p)}px;font-weight:${l(g)};
      text-shadow: ${l(a)}`)},C2(l(i)),5)],4))}});const ox=r2(ix,[["__scopeId","data-v-edb32742"]]),ax=Object.freeze(Object.defineProperty({__proto__:null,default:ox},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bt="145",K0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},e9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rx=0,In=1,sx=2,Aa=1,lx=2,d5=3,N9=0,K3=1,m4=2,s0=0,z0=1,On=2,Ln=3,zn=4,ux=5,S9=100,cx=101,dx=102,Pn=103,kn=104,fx=200,px=201,hx=202,mx=203,Ca=204,Ta=205,gx=206,vx=207,_x=208,yx=209,bx=210,xx=0,Sx=1,Mx=2,ue=3,wx=4,Ax=5,Cx=6,Tx=7,Da=0,Dx=1,Ex=2,k4=0,Rx=1,Ix=2,Ox=3,Lx=4,zx=5,Ea=300,F9=301,B9=302,ce=303,de=304,K8=306,fe=1e3,l4=1001,pe=1002,b3=1003,Un=1004,Nn=1005,Y3=1006,Px=1007,e6=1008,G0=1009,kx=1010,Ux=1011,Ra=1012,Nx=1013,E0=1014,R0=1015,w5=1016,Fx=1017,Bx=1018,L9=1020,Gx=1021,Vx=1022,g4=1023,jx=1024,Wx=1025,P0=1026,G9=1027,Hx=1028,$x=1029,Yx=1030,Jx=1031,Zx=1033,g6=33776,v6=33777,_6=33778,y6=33779,Fn=35840,Bn=35841,Gn=35842,Vn=35843,qx=36196,jn=37492,Wn=37496,Hn=37808,$n=37809,Yn=37810,Jn=37811,Zn=37812,qn=37813,Xn=37814,Qn=37815,Kn=37816,ei=37817,ti=37818,ni=37819,ii=37820,oi=37821,ai=36492,V0=3e3,U2=3001,Xx=3200,Qx=3201,Kx=0,eS=1,E4="srgb",I0="srgb-linear",b6=7680,tS=519,he=35044,ri="300 es",me=1035;class Y0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const c3=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],x6=Math.PI/180,si=180/Math.PI;function l0(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(c3[o&255]+c3[o>>8&255]+c3[o>>16&255]+c3[o>>24&255]+"-"+c3[e&255]+c3[e>>8&255]+"-"+c3[e>>16&15|64]+c3[e>>24&255]+"-"+c3[t&63|128]+c3[t>>8&255]+"-"+c3[t>>16&255]+c3[t>>24&255]+c3[n&255]+c3[n>>8&255]+c3[n>>16&255]+c3[n>>24&255]).toLowerCase()}function f3(o,e,t){return Math.max(e,Math.min(t,o))}function nS(o,e){return(o%e+e)%e}function S6(o,e,t){return(1-t)*o+t*e}function li(o){return(o&o-1)===0&&o!==0}function ge(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function n0(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function M2(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class B1{constructor(e=0,t=0){B1.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Z3{constructor(){Z3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,a,r,s,u,d){const f=this.elements;return f[0]=e,f[1]=i,f[2]=s,f[3]=t,f[4]=a,f[5]=u,f[6]=n,f[7]=r,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],s=n[3],u=n[6],d=n[1],f=n[4],h=n[7],p=n[2],g=n[5],y=n[8],v=i[0],_=i[3],S=i[6],x=i[1],M=i[4],b=i[7],C=i[2],w=i[5],I=i[8];return a[0]=r*v+s*x+u*C,a[3]=r*_+s*M+u*w,a[6]=r*S+s*b+u*I,a[1]=d*v+f*x+h*C,a[4]=d*_+f*M+h*w,a[7]=d*S+f*b+h*I,a[2]=p*v+g*x+y*C,a[5]=p*_+g*M+y*w,a[8]=p*S+g*b+y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],s=e[5],u=e[6],d=e[7],f=e[8];return t*r*f-t*s*d-n*a*f+n*s*u+i*a*d-i*r*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],s=e[5],u=e[6],d=e[7],f=e[8],h=f*r-s*d,p=s*u-f*a,g=d*a-r*u,y=t*h+n*p+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=h*v,e[1]=(i*d-f*n)*v,e[2]=(s*n-i*r)*v,e[3]=p*v,e[4]=(f*t-i*u)*v,e[5]=(i*a-s*t)*v,e[6]=g*v,e[7]=(n*u-d*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,s){const u=Math.cos(a),d=Math.sin(a);return this.set(n*u,n*d,-n*(u*r+d*s)+r+e,-i*d,i*u,-i*(-d*r+u*s)+s+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,a=i[0],r=i[3],s=i[6],u=i[1],d=i[4],f=i[7];return i[0]=t*a+n*u,i[3]=t*r+n*d,i[6]=t*s+n*f,i[1]=-n*a+t*u,i[4]=-n*r+t*d,i[7]=-n*s+t*f,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ia(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function A5(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function k0(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function D8(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const M6={[E4]:{[I0]:k0},[I0]:{[E4]:D8}},o4={legacyMode:!0,get workingColorSpace(){return I0},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(M6[e]&&M6[e][t]!==void 0){const n=M6[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},q2={r:0,g:0,b:0},a4={h:0,s:0,l:0},Q5={h:0,s:0,l:0};function w6(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function K5(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class v2{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=E4){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,o4.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=I0){return this.r=e,this.g=t,this.b=n,o4.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=I0){if(e=nS(e,1),t=f3(t,0,1),n=f3(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=w6(r,a,e+1/3),this.g=w6(r,a,e),this.b=w6(r,a,e-1/3)}return o4.toWorkingColorSpace(this,i),this}setStyle(e,t=E4){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],s=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,o4.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,o4.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const u=parseFloat(a[1])/360,d=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return n(a[4]),this.setHSL(u,d,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,o4.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,o4.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=E4){const n=Oa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=k0(e.r),this.g=k0(e.g),this.b=k0(e.b),this}copyLinearToSRGB(e){return this.r=D8(e.r),this.g=D8(e.g),this.b=D8(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=E4){return o4.fromWorkingColorSpace(K5(this,q2),e),f3(q2.r*255,0,255)<<16^f3(q2.g*255,0,255)<<8^f3(q2.b*255,0,255)<<0}getHexString(e=E4){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=I0){o4.fromWorkingColorSpace(K5(this,q2),t);const n=q2.r,i=q2.g,a=q2.b,r=Math.max(n,i,a),s=Math.min(n,i,a);let u,d;const f=(s+r)/2;if(s===r)u=0,d=0;else{const h=r-s;switch(d=f<=.5?h/(r+s):h/(2-r-s),r){case n:u=(i-a)/h+(i<a?6:0);break;case i:u=(a-n)/h+2;break;case a:u=(n-i)/h+4;break}u/=6}return e.h=u,e.s=d,e.l=f,e}getRGB(e,t=I0){return o4.fromWorkingColorSpace(K5(this,q2),t),e.r=q2.r,e.g=q2.g,e.b=q2.b,e}getStyle(e=E4){return o4.fromWorkingColorSpace(K5(this,q2),e),e!==E4?`color(${e} ${q2.r} ${q2.g} ${q2.b})`:`rgb(${q2.r*255|0},${q2.g*255|0},${q2.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(a4),a4.h+=e,a4.s+=t,a4.l+=n,this.setHSL(a4.h,a4.s,a4.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(a4),e.getHSL(Q5);const n=S6(a4.h,Q5.h,t),i=S6(a4.s,Q5.s,t),a=S6(a4.l,Q5.l,t);return this.setHSL(n,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}v2.NAMES=Oa;let t9;class La{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{t9===void 0&&(t9=A5("canvas")),t9.width=e.width,t9.height=e.height;const n=t9.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=t9}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=A5("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=k0(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(k0(t[n]/255)*255):t[n]=k0(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class za{constructor(e=null){this.isSource=!0,this.uuid=l0(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,s=i.length;r<s;r++)i[r].isDataTexture?a.push(A6(i[r].image)):a.push(A6(i[r]))}else a=A6(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function A6(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?La.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iS=0;class e4 extends Y0{constructor(e=e4.DEFAULT_IMAGE,t=e4.DEFAULT_MAPPING,n=l4,i=l4,a=Y3,r=e6,s=g4,u=G0,d=1,f=V0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=l0(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=d,this.format=s,this.internalFormat=null,this.type=u,this.offset=new B1(0,0),this.repeat=new B1(1,1),this.center=new B1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Z3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ea)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fe:e.x=e.x-Math.floor(e.x);break;case l4:e.x=e.x<0?0:1;break;case pe:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fe:e.y=e.y-Math.floor(e.y);break;case l4:e.y=e.y<0?0:1;break;case pe:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}e4.DEFAULT_IMAGE=null;e4.DEFAULT_MAPPING=Ea;class s3{constructor(e=0,t=0,n=0,i=1){s3.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const u=e.elements,d=u[0],f=u[4],h=u[8],p=u[1],g=u[5],y=u[9],v=u[2],_=u[6],S=u[10];if(Math.abs(f-p)<.01&&Math.abs(h-v)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+v)<.1&&Math.abs(y+_)<.1&&Math.abs(d+g+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(d+1)/2,b=(g+1)/2,C=(S+1)/2,w=(f+p)/4,I=(h+v)/4,T=(y+_)/4;return M>b&&M>C?M<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(M),i=w/n,a=I/n):b>C?b<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(b),n=w/i,a=T/i):C<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(C),n=I/a,i=T/a),this.set(n,i,a,t),this}let x=Math.sqrt((_-y)*(_-y)+(h-v)*(h-v)+(p-f)*(p-f));return Math.abs(x)<.001&&(x=1),this.x=(_-y)/x,this.y=(h-v)/x,this.z=(p-f)/x,this.w=Math.acos((d+g+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j0 extends Y0{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new s3(0,0,e,t),this.scissorTest=!1,this.viewport=new s3(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new e4(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Y3,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pa extends e4{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=b3,this.minFilter=b3,this.wrapR=l4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oS extends e4{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=b3,this.minFilter=b3,this.wrapR=l4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U4{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,s){let u=n[i+0],d=n[i+1],f=n[i+2],h=n[i+3];const p=a[r+0],g=a[r+1],y=a[r+2],v=a[r+3];if(s===0){e[t+0]=u,e[t+1]=d,e[t+2]=f,e[t+3]=h;return}if(s===1){e[t+0]=p,e[t+1]=g,e[t+2]=y,e[t+3]=v;return}if(h!==v||u!==p||d!==g||f!==y){let _=1-s;const S=u*p+d*g+f*y+h*v,x=S>=0?1:-1,M=1-S*S;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,S*x);_=Math.sin(_*w)/C,s=Math.sin(s*w)/C}const b=s*x;if(u=u*_+p*b,d=d*_+g*b,f=f*_+y*b,h=h*_+v*b,_===1-s){const C=1/Math.sqrt(u*u+d*d+f*f+h*h);u*=C,d*=C,f*=C,h*=C}}e[t]=u,e[t+1]=d,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,r){const s=n[i],u=n[i+1],d=n[i+2],f=n[i+3],h=a[r],p=a[r+1],g=a[r+2],y=a[r+3];return e[t]=s*y+f*h+u*g-d*p,e[t+1]=u*y+f*p+d*h-s*g,e[t+2]=d*y+f*g+s*p-u*h,e[t+3]=f*y-s*h-u*p-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,a=e._z,r=e._order,s=Math.cos,u=Math.sin,d=s(n/2),f=s(i/2),h=s(a/2),p=u(n/2),g=u(i/2),y=u(a/2);switch(r){case"XYZ":this._x=p*f*h+d*g*y,this._y=d*g*h-p*f*y,this._z=d*f*y+p*g*h,this._w=d*f*h-p*g*y;break;case"YXZ":this._x=p*f*h+d*g*y,this._y=d*g*h-p*f*y,this._z=d*f*y-p*g*h,this._w=d*f*h+p*g*y;break;case"ZXY":this._x=p*f*h-d*g*y,this._y=d*g*h+p*f*y,this._z=d*f*y+p*g*h,this._w=d*f*h-p*g*y;break;case"ZYX":this._x=p*f*h-d*g*y,this._y=d*g*h+p*f*y,this._z=d*f*y-p*g*h,this._w=d*f*h+p*g*y;break;case"YZX":this._x=p*f*h+d*g*y,this._y=d*g*h+p*f*y,this._z=d*f*y-p*g*h,this._w=d*f*h-p*g*y;break;case"XZY":this._x=p*f*h-d*g*y,this._y=d*g*h-p*f*y,this._z=d*f*y+p*g*h,this._w=d*f*h+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],u=t[9],d=t[2],f=t[6],h=t[10],p=n+s+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-u)*g,this._y=(a-d)*g,this._z=(r-i)*g}else if(n>s&&n>h){const g=2*Math.sqrt(1+n-s-h);this._w=(f-u)/g,this._x=.25*g,this._y=(i+r)/g,this._z=(a+d)/g}else if(s>h){const g=2*Math.sqrt(1+s-n-h);this._w=(a-d)/g,this._x=(i+r)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+h-n-s);this._w=(r-i)/g,this._x=(a+d)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(f3(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,s=t._x,u=t._y,d=t._z,f=t._w;return this._x=n*f+r*s+i*d-a*u,this._y=i*f+r*u+a*s-n*d,this._z=a*f+r*d+n*u-i*s,this._w=r*f-n*s-i*u-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let s=r*e._w+n*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const u=1-s*s;if(u<=Number.EPSILON){const g=1-t;return this._w=g*r+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(u),f=Math.atan2(d,s),h=Math.sin((1-t)*f)/d,p=Math.sin(t*f)/d;return this._w=r*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=a*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ui.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ui.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,s=e.z,u=e.w,d=u*t+r*i-s*n,f=u*n+s*t-a*i,h=u*i+a*n-r*t,p=-a*t-r*n-s*i;return this.x=d*u+p*-a+f*-s-h*-r,this.y=f*u+p*-r+h*-a-d*-s,this.z=h*u+p*-s+d*-r-f*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,s=t.y,u=t.z;return this.x=i*u-a*s,this.y=a*r-n*u,this.z=n*s-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return C6.copy(this).projectOnVector(e),this.sub(C6)}reflect(e){return this.sub(C6.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(f3(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const C6=new Y,ui=new U4;class U5{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,a=-1/0,r=-1/0,s=-1/0;for(let u=0,d=e.length;u<d;u+=3){const f=e[u],h=e[u+1],p=e[u+2];f<t&&(t=f),h<n&&(n=h),p<i&&(i=p),f>a&&(a=f),h>r&&(r=h),p>s&&(s=p)}return this.min.set(t,n,i),this.max.set(a,r,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,a=-1/0,r=-1/0,s=-1/0;for(let u=0,d=e.count;u<d;u++){const f=e.getX(u),h=e.getY(u),p=e.getZ(u);f<t&&(t=f),h<n&&(n=h),p<i&&(i=p),f>a&&(a=f),h>r&&(r=h),p>s&&(s=p)}return this.min.set(t,n,i),this.max.set(a,r,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=b0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let r=0,s=a.count;r<s;r++)b0.fromBufferAttribute(a,r).applyMatrix4(e.matrixWorld),this.expandByPoint(b0)}else n.boundingBox===null&&n.computeBoundingBox(),T6.copy(n.boundingBox),T6.applyMatrix4(e.matrixWorld),this.union(T6);const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,b0),b0.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(t5),e8.subVectors(this.max,t5),n9.subVectors(e.a,t5),i9.subVectors(e.b,t5),o9.subVectors(e.c,t5),$4.subVectors(i9,n9),Y4.subVectors(o9,i9),x0.subVectors(n9,o9);let t=[0,-$4.z,$4.y,0,-Y4.z,Y4.y,0,-x0.z,x0.y,$4.z,0,-$4.x,Y4.z,0,-Y4.x,x0.z,0,-x0.x,-$4.y,$4.x,0,-Y4.y,Y4.x,0,-x0.y,x0.x,0];return!D6(t,n9,i9,o9,e8)||(t=[1,0,0,0,1,0,0,0,1],!D6(t,n9,i9,o9,e8))?!1:(t8.crossVectors($4,Y4),t=[t8.x,t8.y,t8.z],D6(t,n9,i9,o9,e8))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return b0.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(b0).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(w4[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),w4[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),w4[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),w4[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),w4[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),w4[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),w4[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),w4[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(w4),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const w4=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],b0=new Y,T6=new U5,n9=new Y,i9=new Y,o9=new Y,$4=new Y,Y4=new Y,x0=new Y,t5=new Y,e8=new Y,t8=new Y,S0=new Y;function D6(o,e,t,n,i){for(let a=0,r=o.length-3;a<=r;a+=3){S0.fromArray(o,a);const s=i.x*Math.abs(S0.x)+i.y*Math.abs(S0.y)+i.z*Math.abs(S0.z),u=e.dot(S0),d=t.dot(S0),f=n.dot(S0);if(Math.max(-Math.max(u,d,f),Math.min(u,d,f))>s)return!1}return!0}const aS=new U5,ci=new Y,n8=new Y,E6=new Y;class N5{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):aS.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;E6.subVectors(e,this.center);const t=E6.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(E6.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?n8.set(0,0,1).multiplyScalar(e.radius):n8.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ci.copy(e.center).add(n8)),this.expandByPoint(ci.copy(e.center).sub(n8)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const A4=new Y,R6=new Y,i8=new Y,J4=new Y,I6=new Y,o8=new Y,O6=new Y;class Gt{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,A4)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=A4.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(A4.copy(this.direction).multiplyScalar(t).add(this.origin),A4.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){R6.copy(e).add(t).multiplyScalar(.5),i8.copy(t).sub(e).normalize(),J4.copy(this.origin).sub(R6);const a=e.distanceTo(t)*.5,r=-this.direction.dot(i8),s=J4.dot(this.direction),u=-J4.dot(i8),d=J4.lengthSq(),f=Math.abs(1-r*r);let h,p,g,y;if(f>0)if(h=r*u-s,p=r*s-u,y=a*f,h>=0)if(p>=-y)if(p<=y){const v=1/f;h*=v,p*=v,g=h*(h+r*p+2*s)+p*(r*h+p+2*u)+d}else p=a,h=Math.max(0,-(r*p+s)),g=-h*h+p*(p+2*u)+d;else p=-a,h=Math.max(0,-(r*p+s)),g=-h*h+p*(p+2*u)+d;else p<=-y?(h=Math.max(0,-(-r*a+s)),p=h>0?-a:Math.min(Math.max(-a,-u),a),g=-h*h+p*(p+2*u)+d):p<=y?(h=0,p=Math.min(Math.max(-a,-u),a),g=p*(p+2*u)+d):(h=Math.max(0,-(r*a+s)),p=h>0?a:Math.min(Math.max(-a,-u),a),g=-h*h+p*(p+2*u)+d);else p=r>0?-a:a,h=Math.max(0,-(r*p+s)),g=-h*h+p*(p+2*u)+d;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(i8).multiplyScalar(p).add(R6),g}intersectSphere(e,t){A4.subVectors(e.center,this.origin);const n=A4.dot(this.direction),i=A4.dot(A4)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),s=n-r,u=n+r;return s<0&&u<0?null:s<0?this.at(u,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,s,u;const d=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return d>=0?(n=(e.min.x-p.x)*d,i=(e.max.x-p.x)*d):(n=(e.max.x-p.x)*d,i=(e.min.x-p.x)*d),f>=0?(a=(e.min.y-p.y)*f,r=(e.max.y-p.y)*f):(a=(e.max.y-p.y)*f,r=(e.min.y-p.y)*f),n>r||a>i||((a>n||n!==n)&&(n=a),(r<i||i!==i)&&(i=r),h>=0?(s=(e.min.z-p.z)*h,u=(e.max.z-p.z)*h):(s=(e.max.z-p.z)*h,u=(e.min.z-p.z)*h),n>u||s>i)||((s>n||n!==n)&&(n=s),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,A4)!==null}intersectTriangle(e,t,n,i,a){I6.subVectors(t,e),o8.subVectors(n,e),O6.crossVectors(I6,o8);let r=this.direction.dot(O6),s;if(r>0){if(i)return null;s=1}else if(r<0)s=-1,r=-r;else return null;J4.subVectors(this.origin,e);const u=s*this.direction.dot(o8.crossVectors(J4,o8));if(u<0)return null;const d=s*this.direction.dot(I6.cross(J4));if(d<0||u+d>r)return null;const f=-s*J4.dot(O6);return f<0?null:this.at(f/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class G2{constructor(){G2.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,a,r,s,u,d,f,h,p,g,y,v,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=i,S[1]=a,S[5]=r,S[9]=s,S[13]=u,S[2]=d,S[6]=f,S[10]=h,S[14]=p,S[3]=g,S[7]=y,S[11]=v,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new G2().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/a9.setFromMatrixColumn(e,0).length(),a=1/a9.setFromMatrixColumn(e,1).length(),r=1/a9.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),s=Math.sin(n),u=Math.cos(i),d=Math.sin(i),f=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const p=r*f,g=r*h,y=s*f,v=s*h;t[0]=u*f,t[4]=-u*h,t[8]=d,t[1]=g+y*d,t[5]=p-v*d,t[9]=-s*u,t[2]=v-p*d,t[6]=y+g*d,t[10]=r*u}else if(e.order==="YXZ"){const p=u*f,g=u*h,y=d*f,v=d*h;t[0]=p+v*s,t[4]=y*s-g,t[8]=r*d,t[1]=r*h,t[5]=r*f,t[9]=-s,t[2]=g*s-y,t[6]=v+p*s,t[10]=r*u}else if(e.order==="ZXY"){const p=u*f,g=u*h,y=d*f,v=d*h;t[0]=p-v*s,t[4]=-r*h,t[8]=y+g*s,t[1]=g+y*s,t[5]=r*f,t[9]=v-p*s,t[2]=-r*d,t[6]=s,t[10]=r*u}else if(e.order==="ZYX"){const p=r*f,g=r*h,y=s*f,v=s*h;t[0]=u*f,t[4]=y*d-g,t[8]=p*d+v,t[1]=u*h,t[5]=v*d+p,t[9]=g*d-y,t[2]=-d,t[6]=s*u,t[10]=r*u}else if(e.order==="YZX"){const p=r*u,g=r*d,y=s*u,v=s*d;t[0]=u*f,t[4]=v-p*h,t[8]=y*h+g,t[1]=h,t[5]=r*f,t[9]=-s*f,t[2]=-d*f,t[6]=g*h+y,t[10]=p-v*h}else if(e.order==="XZY"){const p=r*u,g=r*d,y=s*u,v=s*d;t[0]=u*f,t[4]=-h,t[8]=d*f,t[1]=p*h+v,t[5]=r*f,t[9]=g*h-y,t[2]=y*h-g,t[6]=s*f,t[10]=v*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rS,e,sS)}lookAt(e,t,n){const i=this.elements;return I3.subVectors(e,t),I3.lengthSq()===0&&(I3.z=1),I3.normalize(),Z4.crossVectors(n,I3),Z4.lengthSq()===0&&(Math.abs(n.z)===1?I3.x+=1e-4:I3.z+=1e-4,I3.normalize(),Z4.crossVectors(n,I3)),Z4.normalize(),a8.crossVectors(I3,Z4),i[0]=Z4.x,i[4]=a8.x,i[8]=I3.x,i[1]=Z4.y,i[5]=a8.y,i[9]=I3.y,i[2]=Z4.z,i[6]=a8.z,i[10]=I3.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],s=n[4],u=n[8],d=n[12],f=n[1],h=n[5],p=n[9],g=n[13],y=n[2],v=n[6],_=n[10],S=n[14],x=n[3],M=n[7],b=n[11],C=n[15],w=i[0],I=i[4],T=i[8],D=i[12],N=i[1],V=i[5],q=i[9],$=i[13],k=i[2],B=i[6],G=i[10],J=i[14],O=i[3],U=i[7],F=i[11],t1=i[15];return a[0]=r*w+s*N+u*k+d*O,a[4]=r*I+s*V+u*B+d*U,a[8]=r*T+s*q+u*G+d*F,a[12]=r*D+s*$+u*J+d*t1,a[1]=f*w+h*N+p*k+g*O,a[5]=f*I+h*V+p*B+g*U,a[9]=f*T+h*q+p*G+g*F,a[13]=f*D+h*$+p*J+g*t1,a[2]=y*w+v*N+_*k+S*O,a[6]=y*I+v*V+_*B+S*U,a[10]=y*T+v*q+_*G+S*F,a[14]=y*D+v*$+_*J+S*t1,a[3]=x*w+M*N+b*k+C*O,a[7]=x*I+M*V+b*B+C*U,a[11]=x*T+M*q+b*G+C*F,a[15]=x*D+M*$+b*J+C*t1,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],s=e[5],u=e[9],d=e[13],f=e[2],h=e[6],p=e[10],g=e[14],y=e[3],v=e[7],_=e[11],S=e[15];return y*(+a*u*h-i*d*h-a*s*p+n*d*p+i*s*g-n*u*g)+v*(+t*u*g-t*d*p+a*r*p-i*r*g+i*d*f-a*u*f)+_*(+t*d*h-t*s*g-a*r*h+n*r*g+a*s*f-n*d*f)+S*(-i*s*f-t*u*h+t*s*p+i*r*h-n*r*p+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],s=e[5],u=e[6],d=e[7],f=e[8],h=e[9],p=e[10],g=e[11],y=e[12],v=e[13],_=e[14],S=e[15],x=h*_*d-v*p*d+v*u*g-s*_*g-h*u*S+s*p*S,M=y*p*d-f*_*d-y*u*g+r*_*g+f*u*S-r*p*S,b=f*v*d-y*h*d+y*s*g-r*v*g-f*s*S+r*h*S,C=y*h*u-f*v*u-y*s*p+r*v*p+f*s*_-r*h*_,w=t*x+n*M+i*b+a*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=x*I,e[1]=(v*p*a-h*_*a-v*i*g+n*_*g+h*i*S-n*p*S)*I,e[2]=(s*_*a-v*u*a+v*i*d-n*_*d-s*i*S+n*u*S)*I,e[3]=(h*u*a-s*p*a-h*i*d+n*p*d+s*i*g-n*u*g)*I,e[4]=M*I,e[5]=(f*_*a-y*p*a+y*i*g-t*_*g-f*i*S+t*p*S)*I,e[6]=(y*u*a-r*_*a-y*i*d+t*_*d+r*i*S-t*u*S)*I,e[7]=(r*p*a-f*u*a+f*i*d-t*p*d-r*i*g+t*u*g)*I,e[8]=b*I,e[9]=(y*h*a-f*v*a-y*n*g+t*v*g+f*n*S-t*h*S)*I,e[10]=(r*v*a-y*s*a+y*n*d-t*v*d-r*n*S+t*s*S)*I,e[11]=(f*s*a-r*h*a-f*n*d+t*h*d+r*n*g-t*s*g)*I,e[12]=C*I,e[13]=(f*v*i-y*h*i+y*n*p-t*v*p-f*n*_+t*h*_)*I,e[14]=(y*s*i-r*v*i-y*n*u+t*v*u+r*n*_-t*s*_)*I,e[15]=(r*h*i-f*s*i+f*n*u-t*h*u-r*n*p+t*s*p)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,s=e.y,u=e.z,d=a*r,f=a*s;return this.set(d*r+n,d*s-i*u,d*u+i*s,0,d*s+i*u,f*s+n,f*u-i*r,0,d*u-i*s,f*u+i*r,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,s=t._z,u=t._w,d=a+a,f=r+r,h=s+s,p=a*d,g=a*f,y=a*h,v=r*f,_=r*h,S=s*h,x=u*d,M=u*f,b=u*h,C=n.x,w=n.y,I=n.z;return i[0]=(1-(v+S))*C,i[1]=(g+b)*C,i[2]=(y-M)*C,i[3]=0,i[4]=(g-b)*w,i[5]=(1-(p+S))*w,i[6]=(_+x)*w,i[7]=0,i[8]=(y+M)*I,i[9]=(_-x)*I,i[10]=(1-(p+v))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=a9.set(i[0],i[1],i[2]).length();const r=a9.set(i[4],i[5],i[6]).length(),s=a9.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],r4.copy(this);const d=1/a,f=1/r,h=1/s;return r4.elements[0]*=d,r4.elements[1]*=d,r4.elements[2]*=d,r4.elements[4]*=f,r4.elements[5]*=f,r4.elements[6]*=f,r4.elements[8]*=h,r4.elements[9]*=h,r4.elements[10]*=h,t.setFromRotationMatrix(r4),n.x=a,n.y=r,n.z=s,this}makePerspective(e,t,n,i,a,r){const s=this.elements,u=2*a/(t-e),d=2*a/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),p=-(r+a)/(r-a),g=-2*r*a/(r-a);return s[0]=u,s[4]=0,s[8]=f,s[12]=0,s[1]=0,s[5]=d,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=p,s[14]=g,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,a,r){const s=this.elements,u=1/(t-e),d=1/(n-i),f=1/(r-a),h=(t+e)*u,p=(n+i)*d,g=(r+a)*f;return s[0]=2*u,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*d,s[9]=0,s[13]=-p,s[2]=0,s[6]=0,s[10]=-2*f,s[14]=-g,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const a9=new Y,r4=new G2,rS=new Y(0,0,0),sS=new Y(1,1,1),Z4=new Y,a8=new Y,I3=new Y,di=new G2,fi=new U4;class F5{constructor(e=0,t=0,n=0,i=F5.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],s=i[8],u=i[1],d=i[5],f=i[9],h=i[2],p=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(f3(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-f3(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(f3(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-r,d)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-f3(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-r,d));break;case"YZX":this._z=Math.asin(f3(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-f3(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return di.makeRotationFromQuaternion(e),this.setFromRotationMatrix(di,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fi.setFromEuler(this),this.setFromQuaternion(fi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}F5.DefaultOrder="XYZ";F5.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const pi=new Y,r9=new U4,C4=new G2,r8=new Y,n5=new Y,uS=new Y,cS=new U4,hi=new Y(1,0,0),mi=new Y(0,1,0),gi=new Y(0,0,1),dS={type:"added"},vi={type:"removed"};class h3 extends Y0{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=l0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=h3.DefaultUp.clone();const e=new Y,t=new F5,n=new U4,i=new Y(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new G2},normalMatrix:{value:new Z3}}),this.matrix=new G2,this.matrixWorld=new G2,this.matrixAutoUpdate=h3.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=h3.DefaultMatrixWorldAutoUpdate,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return r9.setFromAxisAngle(e,t),this.quaternion.multiply(r9),this}rotateOnWorldAxis(e,t){return r9.setFromAxisAngle(e,t),this.quaternion.premultiply(r9),this}rotateX(e){return this.rotateOnAxis(hi,e)}rotateY(e){return this.rotateOnAxis(mi,e)}rotateZ(e){return this.rotateOnAxis(gi,e)}translateOnAxis(e,t){return pi.copy(e).applyQuaternion(this.quaternion),this.position.add(pi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hi,e)}translateY(e){return this.translateOnAxis(mi,e)}translateZ(e){return this.translateOnAxis(gi,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(C4.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?r8.copy(e):r8.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),n5.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?C4.lookAt(n5,r8,this.up):C4.lookAt(r8,n5,this.up),this.quaternion.setFromRotationMatrix(C4),i&&(C4.extractRotation(i.matrixWorld),r9.setFromRotationMatrix(C4),this.quaternion.premultiply(r9.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vi)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(vi)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),C4.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),C4.multiply(e.parent.matrixWorld)),e.applyMatrix4(C4),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n5,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n5,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++){const s=i[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(s,u){return s[u.uuid]===void 0&&(s[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const u=s.shapes;if(Array.isArray(u))for(let d=0,f=u.length;d<f;d++){const h=u[d];a(e.shapes,h)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let u=0,d=this.material.length;u<d;u++)s.push(a(e.materials,this.material[u]));i.material=s}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const u=this.animations[s];i.animations.push(a(e.animations,u))}}if(t){const s=r(e.geometries),u=r(e.materials),d=r(e.textures),f=r(e.images),h=r(e.shapes),p=r(e.skeletons),g=r(e.animations),y=r(e.nodes);s.length>0&&(n.geometries=s),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function r(s){const u=[];for(const d in s){const f=s[d];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}h3.DefaultUp=new Y(0,1,0);h3.DefaultMatrixAutoUpdate=!0;h3.DefaultMatrixWorldAutoUpdate=!0;const s4=new Y,T4=new Y,L6=new Y,D4=new Y,s9=new Y,l9=new Y,_i=new Y,z6=new Y,P6=new Y,k6=new Y;class p4{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),s4.subVectors(e,t),i.cross(s4);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){s4.subVectors(i,t),T4.subVectors(n,t),L6.subVectors(e,t);const r=s4.dot(s4),s=s4.dot(T4),u=s4.dot(L6),d=T4.dot(T4),f=T4.dot(L6),h=r*d-s*s;if(h===0)return a.set(-2,-1,-1);const p=1/h,g=(d*u-s*f)*p,y=(r*f-s*u)*p;return a.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,D4),D4.x>=0&&D4.y>=0&&D4.x+D4.y<=1}static getUV(e,t,n,i,a,r,s,u){return this.getBarycoord(e,t,n,i,D4),u.set(0,0),u.addScaledVector(a,D4.x),u.addScaledVector(r,D4.y),u.addScaledVector(s,D4.z),u}static isFrontFacing(e,t,n,i){return s4.subVectors(n,t),T4.subVectors(e,t),s4.cross(T4).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return s4.subVectors(this.c,this.b),T4.subVectors(this.a,this.b),s4.cross(T4).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return p4.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return p4.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return p4.getUV(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return p4.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return p4.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,s;s9.subVectors(i,n),l9.subVectors(a,n),z6.subVectors(e,n);const u=s9.dot(z6),d=l9.dot(z6);if(u<=0&&d<=0)return t.copy(n);P6.subVectors(e,i);const f=s9.dot(P6),h=l9.dot(P6);if(f>=0&&h<=f)return t.copy(i);const p=u*h-f*d;if(p<=0&&u>=0&&f<=0)return r=u/(u-f),t.copy(n).addScaledVector(s9,r);k6.subVectors(e,a);const g=s9.dot(k6),y=l9.dot(k6);if(y>=0&&g<=y)return t.copy(a);const v=g*d-u*y;if(v<=0&&d>=0&&y<=0)return s=d/(d-y),t.copy(n).addScaledVector(l9,s);const _=f*y-g*h;if(_<=0&&h-f>=0&&g-y>=0)return _i.subVectors(a,i),s=(h-f)/(h-f+(g-y)),t.copy(i).addScaledVector(_i,s);const S=1/(_+v+p);return r=v*S,s=p*S,t.copy(n).addScaledVector(s9,r).addScaledVector(l9,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fS=0;class J0 extends Y0{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=l0(),this.name="",this.type="Material",this.blending=z0,this.side=N9,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ca,this.blendDst=Ta,this.blendEquation=S9,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ue,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=b6,this.stencilZFail=b6,this.stencilZPass=b6,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==z0&&(n.blending=this.blending),this.side!==N9&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(a){const r=[];for(const s in a){const u=a[s];delete u.metadata,r.push(u)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class L4 extends J0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new v2(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $2=new Y,s8=new B1;class N3{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=he,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)s8.fromBufferAttribute(this,t),s8.applyMatrix3(e),this.setXY(t,s8.x,s8.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$2.fromBufferAttribute(this,t),$2.applyMatrix3(e),this.setXYZ(t,$2.x,$2.y,$2.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$2.fromBufferAttribute(this,t),$2.applyMatrix4(e),this.setXYZ(t,$2.x,$2.y,$2.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$2.fromBufferAttribute(this,t),$2.applyNormalMatrix(e),this.setXYZ(t,$2.x,$2.y,$2.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$2.fromBufferAttribute(this,t),$2.transformDirection(e),this.setXYZ(t,$2.x,$2.y,$2.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=n0(t,this.array)),t}setX(e,t){return this.normalized&&(t=M2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=n0(t,this.array)),t}setY(e,t){return this.normalized&&(t=M2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=n0(t,this.array)),t}setZ(e,t){return this.normalized&&(t=M2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=n0(t,this.array)),t}setW(e,t){return this.normalized&&(t=M2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=M2(t,this.array),n=M2(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=M2(t,this.array),n=M2(n,this.array),i=M2(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=M2(t,this.array),n=M2(n,this.array),i=M2(i,this.array),a=M2(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==he&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ua extends N3{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Na extends N3{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class x3 extends N3{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pS=0;const H3=new G2,U6=new h3,u9=new Y,O3=new U5,i5=new U5,n3=new Y;class E3 extends Y0{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=l0(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ia(e)?Na:Ua)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Z3().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return H3.makeRotationFromQuaternion(e),this.applyMatrix4(H3),this}rotateX(e){return H3.makeRotationX(e),this.applyMatrix4(H3),this}rotateY(e){return H3.makeRotationY(e),this.applyMatrix4(H3),this}rotateZ(e){return H3.makeRotationZ(e),this.applyMatrix4(H3),this}translate(e,t,n){return H3.makeTranslation(e,t,n),this.applyMatrix4(H3),this}scale(e,t,n){return H3.makeScale(e,t,n),this.applyMatrix4(H3),this}lookAt(e){return U6.lookAt(e),U6.updateMatrix(),this.applyMatrix4(U6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(u9).negate(),this.translate(u9.x,u9.y,u9.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new x3(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new U5);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];O3.setFromBufferAttribute(a),this.morphTargetsRelative?(n3.addVectors(this.boundingBox.min,O3.min),this.boundingBox.expandByPoint(n3),n3.addVectors(this.boundingBox.max,O3.max),this.boundingBox.expandByPoint(n3)):(this.boundingBox.expandByPoint(O3.min),this.boundingBox.expandByPoint(O3.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new N5);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(O3.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const s=t[a];i5.setFromBufferAttribute(s),this.morphTargetsRelative?(n3.addVectors(O3.min,i5.min),O3.expandByPoint(n3),n3.addVectors(O3.max,i5.max),O3.expandByPoint(n3)):(O3.expandByPoint(i5.min),O3.expandByPoint(i5.max))}O3.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)n3.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(n3));if(t)for(let a=0,r=t.length;a<r;a++){const s=t[a],u=this.morphTargetsRelative;for(let d=0,f=s.count;d<f;d++)n3.fromBufferAttribute(s,d),u&&(u9.fromBufferAttribute(e,d),n3.add(u9)),i=Math.max(i,n.distanceToSquared(n3))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,r=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new N3(new Float32Array(4*s),4));const u=this.getAttribute("tangent").array,d=[],f=[];for(let N=0;N<s;N++)d[N]=new Y,f[N]=new Y;const h=new Y,p=new Y,g=new Y,y=new B1,v=new B1,_=new B1,S=new Y,x=new Y;function M(N,V,q){h.fromArray(i,N*3),p.fromArray(i,V*3),g.fromArray(i,q*3),y.fromArray(r,N*2),v.fromArray(r,V*2),_.fromArray(r,q*2),p.sub(h),g.sub(h),v.sub(y),_.sub(y);const $=1/(v.x*_.y-_.x*v.y);isFinite($)&&(S.copy(p).multiplyScalar(_.y).addScaledVector(g,-v.y).multiplyScalar($),x.copy(g).multiplyScalar(v.x).addScaledVector(p,-_.x).multiplyScalar($),d[N].add(S),d[V].add(S),d[q].add(S),f[N].add(x),f[V].add(x),f[q].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let N=0,V=b.length;N<V;++N){const q=b[N],$=q.start,k=q.count;for(let B=$,G=$+k;B<G;B+=3)M(n[B+0],n[B+1],n[B+2])}const C=new Y,w=new Y,I=new Y,T=new Y;function D(N){I.fromArray(a,N*3),T.copy(I);const V=d[N];C.copy(V),C.sub(I.multiplyScalar(I.dot(V))).normalize(),w.crossVectors(T,V);const $=w.dot(f[N])<0?-1:1;u[N*4]=C.x,u[N*4+1]=C.y,u[N*4+2]=C.z,u[N*4+3]=$}for(let N=0,V=b.length;N<V;++N){const q=b[N],$=q.start,k=q.count;for(let B=$,G=$+k;B<G;B+=3)D(n[B+0]),D(n[B+1]),D(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new N3(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const i=new Y,a=new Y,r=new Y,s=new Y,u=new Y,d=new Y,f=new Y,h=new Y;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),v=e.getX(p+1),_=e.getX(p+2);i.fromBufferAttribute(t,y),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),f.subVectors(r,a),h.subVectors(i,a),f.cross(h),s.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,_),s.add(f),u.add(f),d.add(f),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(_,d.x,d.y,d.z)}else for(let p=0,g=t.count;p<g;p+=3)i.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),f.subVectors(r,a),h.subVectors(i,a),f.cross(h),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)n3.fromBufferAttribute(e,t),n3.normalize(),e.setXYZ(t,n3.x,n3.y,n3.z)}toNonIndexed(){function e(s,u){const d=s.array,f=s.itemSize,h=s.normalized,p=new d.constructor(u.length*f);let g=0,y=0;for(let v=0,_=u.length;v<_;v++){s.isInterleavedBufferAttribute?g=u[v]*s.data.stride+s.offset:g=u[v]*f;for(let S=0;S<f;S++)p[y++]=d[g++]}return new N3(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new E3,n=this.index.array,i=this.attributes;for(const s in i){const u=i[s],d=e(u,n);t.setAttribute(s,d)}const a=this.morphAttributes;for(const s in a){const u=[],d=a[s];for(let f=0,h=d.length;f<h;f++){const p=d[f],g=e(p,n);u.push(g)}t.morphAttributes[s]=u}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let s=0,u=r.length;s<u;s++){const d=r[s];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const d=n[u];e.data.attributes[u]=d.toJSON(e.data)}const i={};let a=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],f=[];for(let h=0,p=d.length;h<p;h++){const g=d[h];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const d in i){const f=i[d];this.setAttribute(d,f.clone(t))}const a=e.morphAttributes;for(const d in a){const f=[],h=a[d];for(let p=0,g=h.length;p<g;p++)f.push(h[p].clone(t));this.morphAttributes[d]=f}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let d=0,f=r.length;d<f;d++){const h=r[d];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const yi=new G2,c9=new Gt,N6=new N5,q4=new Y,X4=new Y,Q4=new Y,F6=new Y,B6=new Y,G6=new Y,l8=new Y,u8=new Y,c8=new Y,d8=new B1,f8=new B1,p8=new B1,V6=new Y,h8=new Y;class r3 extends h3{constructor(e=new E3,t=new L4){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),N6.copy(n.boundingSphere),N6.applyMatrix4(a),e.ray.intersectsSphere(N6)===!1)||(yi.copy(a).invert(),c9.copy(e.ray).applyMatrix4(yi),n.boundingBox!==null&&c9.intersectsBox(n.boundingBox)===!1))return;let r;const s=n.index,u=n.attributes.position,d=n.morphAttributes.position,f=n.morphTargetsRelative,h=n.attributes.uv,p=n.attributes.uv2,g=n.groups,y=n.drawRange;if(s!==null)if(Array.isArray(i))for(let v=0,_=g.length;v<_;v++){const S=g[v],x=i[S.materialIndex],M=Math.max(S.start,y.start),b=Math.min(s.count,Math.min(S.start+S.count,y.start+y.count));for(let C=M,w=b;C<w;C+=3){const I=s.getX(C),T=s.getX(C+1),D=s.getX(C+2);r=m8(this,x,e,c9,u,d,f,h,p,I,T,D),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const v=Math.max(0,y.start),_=Math.min(s.count,y.start+y.count);for(let S=v,x=_;S<x;S+=3){const M=s.getX(S),b=s.getX(S+1),C=s.getX(S+2);r=m8(this,i,e,c9,u,d,f,h,p,M,b,C),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(i))for(let v=0,_=g.length;v<_;v++){const S=g[v],x=i[S.materialIndex],M=Math.max(S.start,y.start),b=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let C=M,w=b;C<w;C+=3){const I=C,T=C+1,D=C+2;r=m8(this,x,e,c9,u,d,f,h,p,I,T,D),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const v=Math.max(0,y.start),_=Math.min(u.count,y.start+y.count);for(let S=v,x=_;S<x;S+=3){const M=S,b=S+1,C=S+2;r=m8(this,i,e,c9,u,d,f,h,p,M,b,C),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function hS(o,e,t,n,i,a,r,s){let u;if(e.side===K3?u=n.intersectTriangle(r,a,i,!0,s):u=n.intersectTriangle(i,a,r,e.side!==m4,s),u===null)return null;h8.copy(s),h8.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(h8);return d<t.near||d>t.far?null:{distance:d,point:h8.clone(),object:o}}function m8(o,e,t,n,i,a,r,s,u,d,f,h){q4.fromBufferAttribute(i,d),X4.fromBufferAttribute(i,f),Q4.fromBufferAttribute(i,h);const p=o.morphTargetInfluences;if(a&&p){l8.set(0,0,0),u8.set(0,0,0),c8.set(0,0,0);for(let y=0,v=a.length;y<v;y++){const _=p[y],S=a[y];_!==0&&(F6.fromBufferAttribute(S,d),B6.fromBufferAttribute(S,f),G6.fromBufferAttribute(S,h),r?(l8.addScaledVector(F6,_),u8.addScaledVector(B6,_),c8.addScaledVector(G6,_)):(l8.addScaledVector(F6.sub(q4),_),u8.addScaledVector(B6.sub(X4),_),c8.addScaledVector(G6.sub(Q4),_)))}q4.add(l8),X4.add(u8),Q4.add(c8)}o.isSkinnedMesh&&(o.boneTransform(d,q4),o.boneTransform(f,X4),o.boneTransform(h,Q4));const g=hS(o,e,t,n,q4,X4,Q4,V6);if(g){s&&(d8.fromBufferAttribute(s,d),f8.fromBufferAttribute(s,f),p8.fromBufferAttribute(s,h),g.uv=p4.getUV(V6,q4,X4,Q4,d8,f8,p8,new B1)),u&&(d8.fromBufferAttribute(u,d),f8.fromBufferAttribute(u,f),p8.fromBufferAttribute(u,h),g.uv2=p4.getUV(V6,q4,X4,Q4,d8,f8,p8,new B1));const y={a:d,b:f,c:h,normal:new Y,materialIndex:0};p4.getNormal(q4,X4,Q4,y.normal),g.face=y}return g}class B5 extends E3{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const s=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const u=[],d=[],f=[],h=[];let p=0,g=0;y("z","y","x",-1,-1,n,t,e,r,a,0),y("z","y","x",1,-1,n,t,-e,r,a,1),y("x","z","y",1,1,e,n,t,i,r,2),y("x","z","y",1,-1,e,n,-t,i,r,3),y("x","y","z",1,-1,e,t,n,i,a,4),y("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(u),this.setAttribute("position",new x3(d,3)),this.setAttribute("normal",new x3(f,3)),this.setAttribute("uv",new x3(h,2));function y(v,_,S,x,M,b,C,w,I,T,D){const N=b/I,V=C/T,q=b/2,$=C/2,k=w/2,B=I+1,G=T+1;let J=0,O=0;const U=new Y;for(let F=0;F<G;F++){const t1=F*V-$;for(let n1=0;n1<B;n1++){const u1=n1*N-q;U[v]=u1*x,U[_]=t1*M,U[S]=k,d.push(U.x,U.y,U.z),U[v]=0,U[_]=0,U[S]=w>0?1:-1,f.push(U.x,U.y,U.z),h.push(n1/I),h.push(1-F/T),J+=1}}for(let F=0;F<T;F++)for(let t1=0;t1<I;t1++){const n1=p+t1+B*F,u1=p+t1+B*(F+1),a1=p+(t1+1)+B*(F+1),K=p+(t1+1)+B*F;u.push(n1,u1,K),u.push(u1,a1,K),O+=6}s.addGroup(g,O,D),g+=O,p+=J}}static fromJSON(e){return new B5(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function V9(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function d3(o){const e={};for(let t=0;t<o.length;t++){const n=V9(o[t]);for(const i in n)e[i]=n[i]}return e}function mS(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const gS={clone:V9,merge:d3};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class N4 extends J0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=_S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=V9(e.uniforms),this.uniformsGroups=mS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fa extends h3{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new G2,this.projectionMatrix=new G2,this.projectionMatrixInverse=new G2}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class J3 extends Fa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=si*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(x6*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return si*2*Math.atan(Math.tan(x6*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(x6*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const u=r.fullWidth,d=r.fullHeight;a+=r.offsetX*i/u,t-=r.offsetY*n/d,i*=r.width/u,n*=r.height/d}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const d9=90,f9=1;class yS extends h3{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new J3(d9,f9,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new Y(1,0,0)),this.add(i);const a=new J3(d9,f9,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Y(-1,0,0)),this.add(a);const r=new J3(d9,f9,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new Y(0,1,0)),this.add(r);const s=new J3(d9,f9,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new Y(0,-1,0)),this.add(s);const u=new J3(d9,f9,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new Y(0,0,1)),this.add(u);const d=new J3(d9,f9,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new Y(0,0,-1)),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,a,r,s,u,d]=this.children,f=e.getRenderTarget(),h=e.toneMapping,p=e.xr.enabled;e.toneMapping=k4,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,d),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ba extends e4{constructor(e,t,n,i,a,r,s,u,d,f){e=e!==void 0?e:[],t=t!==void 0?t:F9,super(e,t,n,i,a,r,s,u,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends j0{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ba(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Y3}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new B5(5,5,5),a=new N4({name:"CubemapFromEquirect",uniforms:V9(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:K3,blending:s0});a.uniforms.tEquirect.value=t;const r=new r3(i,a),s=t.minFilter;return t.minFilter===e6&&(t.minFilter=Y3),new yS(1,10,this).update(e,r),t.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const j6=new Y,xS=new Y,SS=new Z3;class A0{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=j6.subVectors(n,t).cross(xS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(j6),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||SS.getNormalMatrix(e),i=this.coplanarPoint(j6).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const p9=new N5,g8=new Y;class Ga{constructor(e=new A0,t=new A0,n=new A0,i=new A0,a=new A0,r=new A0){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(a),s[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],a=n[1],r=n[2],s=n[3],u=n[4],d=n[5],f=n[6],h=n[7],p=n[8],g=n[9],y=n[10],v=n[11],_=n[12],S=n[13],x=n[14],M=n[15];return t[0].setComponents(s-i,h-u,v-p,M-_).normalize(),t[1].setComponents(s+i,h+u,v+p,M+_).normalize(),t[2].setComponents(s+a,h+d,v+g,M+S).normalize(),t[3].setComponents(s-a,h-d,v-g,M-S).normalize(),t[4].setComponents(s-r,h-f,v-y,M-x).normalize(),t[5].setComponents(s+r,h+f,v+y,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),p9.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(p9)}intersectsSprite(e){return p9.center.set(0,0,0),p9.radius=.7071067811865476,p9.applyMatrix4(e.matrixWorld),this.intersectsSphere(p9)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(g8.x=i.normal.x>0?e.max.x:e.min.x,g8.y=i.normal.y>0?e.max.y:e.min.y,g8.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(g8)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Va(){let o=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function MS(o,e){const t=e.isWebGL2,n=new WeakMap;function i(d,f){const h=d.array,p=d.usage,g=o.createBuffer();o.bindBuffer(f,g),o.bufferData(f,h,p),d.onUploadCallback();let y;if(h instanceof Float32Array)y=5126;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(h instanceof Int16Array)y=5122;else if(h instanceof Uint32Array)y=5125;else if(h instanceof Int32Array)y=5124;else if(h instanceof Int8Array)y=5120;else if(h instanceof Uint8Array)y=5121;else if(h instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version}}function a(d,f,h){const p=f.array,g=f.updateRange;o.bindBuffer(h,d),g.count===-1?o.bufferSubData(h,0,p):(t?o.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):o.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1)}function r(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function s(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=n.get(d);f&&(o.deleteBuffer(f.buffer),n.delete(d))}function u(d,f){if(d.isGLBufferAttribute){const p=n.get(d);(!p||p.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=n.get(d);h===void 0?n.set(d,i(d,f)):h.version<d.version&&(a(h.buffer,d,f),h.version=d.version)}return{get:r,remove:s,update:u}}class Z9 extends E3{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,s=Math.floor(n),u=Math.floor(i),d=s+1,f=u+1,h=e/s,p=t/u,g=[],y=[],v=[],_=[];for(let S=0;S<f;S++){const x=S*p-r;for(let M=0;M<d;M++){const b=M*h-a;y.push(b,-x,0),v.push(0,0,1),_.push(M/s),_.push(1-S/u)}}for(let S=0;S<u;S++)for(let x=0;x<s;x++){const M=x+d*S,b=x+d*(S+1),C=x+1+d*(S+1),w=x+1+d*S;g.push(M,b,w),g.push(b,C,w)}this.setIndex(g),this.setAttribute("position",new x3(y,3)),this.setAttribute("normal",new x3(v,3)),this.setAttribute("uv",new x3(_,2))}static fromJSON(e){return new Z9(e.width,e.height,e.widthSegments,e.heightSegments)}}var wS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,AS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ES=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RS="vec3 transformed = vec3( position );",IS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,LS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,fM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,gM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,NM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,HM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iw=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,hw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,mw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,gw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_w=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ew=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,u2={alphamap_fragment:wS,alphamap_pars_fragment:AS,alphatest_fragment:CS,alphatest_pars_fragment:TS,aomap_fragment:DS,aomap_pars_fragment:ES,begin_vertex:RS,beginnormal_vertex:IS,bsdfs:OS,iridescence_fragment:LS,bumpmap_pars_fragment:zS,clipping_planes_fragment:PS,clipping_planes_pars_fragment:kS,clipping_planes_pars_vertex:US,clipping_planes_vertex:NS,color_fragment:FS,color_pars_fragment:BS,color_pars_vertex:GS,color_vertex:VS,common:jS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:HS,displacementmap_pars_vertex:$S,displacementmap_vertex:YS,emissivemap_fragment:JS,emissivemap_pars_fragment:ZS,encodings_fragment:qS,encodings_pars_fragment:XS,envmap_fragment:QS,envmap_common_pars_fragment:KS,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:pM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:oM,fog_fragment:aM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_fragment:lM,lightmap_pars_fragment:uM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:dM,lights_pars_begin:fM,lights_toon_fragment:hM,lights_toon_pars_fragment:mM,lights_phong_fragment:gM,lights_phong_pars_fragment:vM,lights_physical_fragment:_M,lights_physical_pars_fragment:yM,lights_fragment_begin:bM,lights_fragment_maps:xM,lights_fragment_end:SM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:wM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:CM,map_fragment:TM,map_pars_fragment:DM,map_particle_fragment:EM,map_particle_pars_fragment:RM,metalnessmap_fragment:IM,metalnessmap_pars_fragment:OM,morphcolor_vertex:LM,morphnormal_vertex:zM,morphtarget_pars_vertex:PM,morphtarget_vertex:kM,normal_fragment_begin:UM,normal_fragment_maps:NM,normal_pars_fragment:FM,normal_pars_vertex:BM,normal_vertex:GM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:$M,output_fragment:YM,packing:JM,premultiplied_alpha_fragment:ZM,project_vertex:qM,dithering_fragment:XM,dithering_pars_fragment:QM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:ew,shadowmap_pars_fragment:tw,shadowmap_pars_vertex:nw,shadowmap_vertex:iw,shadowmask_pars_fragment:ow,skinbase_vertex:aw,skinning_pars_vertex:rw,skinning_vertex:sw,skinnormal_vertex:lw,specularmap_fragment:uw,specularmap_pars_fragment:cw,tonemapping_fragment:dw,tonemapping_pars_fragment:fw,transmission_fragment:pw,transmission_pars_fragment:hw,uv_pars_fragment:mw,uv_pars_vertex:gw,uv_vertex:vw,uv2_pars_fragment:_w,uv2_pars_vertex:yw,uv2_vertex:bw,worldpos_vertex:xw,background_vert:Sw,background_frag:Mw,cube_vert:ww,cube_frag:Aw,depth_vert:Cw,depth_frag:Tw,distanceRGBA_vert:Dw,distanceRGBA_frag:Ew,equirect_vert:Rw,equirect_frag:Iw,linedashed_vert:Ow,linedashed_frag:Lw,meshbasic_vert:zw,meshbasic_frag:Pw,meshlambert_vert:kw,meshlambert_frag:Uw,meshmatcap_vert:Nw,meshmatcap_frag:Fw,meshnormal_vert:Bw,meshnormal_frag:Gw,meshphong_vert:Vw,meshphong_frag:jw,meshphysical_vert:Ww,meshphysical_frag:Hw,meshtoon_vert:$w,meshtoon_frag:Yw,points_vert:Jw,points_frag:Zw,shadow_vert:qw,shadow_frag:Xw,sprite_vert:Qw,sprite_frag:Kw},R1={common:{diffuse:{value:new v2(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Z3},uv2Transform:{value:new Z3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new B1(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new v2(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new v2(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Z3}},sprite:{diffuse:{value:new v2(16777215)},opacity:{value:1},center:{value:new B1(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Z3}}},f4={basic:{uniforms:d3([R1.common,R1.specularmap,R1.envmap,R1.aomap,R1.lightmap,R1.fog]),vertexShader:u2.meshbasic_vert,fragmentShader:u2.meshbasic_frag},lambert:{uniforms:d3([R1.common,R1.specularmap,R1.envmap,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.fog,R1.lights,{emissive:{value:new v2(0)}}]),vertexShader:u2.meshlambert_vert,fragmentShader:u2.meshlambert_frag},phong:{uniforms:d3([R1.common,R1.specularmap,R1.envmap,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.fog,R1.lights,{emissive:{value:new v2(0)},specular:{value:new v2(1118481)},shininess:{value:30}}]),vertexShader:u2.meshphong_vert,fragmentShader:u2.meshphong_frag},standard:{uniforms:d3([R1.common,R1.envmap,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.roughnessmap,R1.metalnessmap,R1.fog,R1.lights,{emissive:{value:new v2(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:u2.meshphysical_vert,fragmentShader:u2.meshphysical_frag},toon:{uniforms:d3([R1.common,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.gradientmap,R1.fog,R1.lights,{emissive:{value:new v2(0)}}]),vertexShader:u2.meshtoon_vert,fragmentShader:u2.meshtoon_frag},matcap:{uniforms:d3([R1.common,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.fog,{matcap:{value:null}}]),vertexShader:u2.meshmatcap_vert,fragmentShader:u2.meshmatcap_frag},points:{uniforms:d3([R1.points,R1.fog]),vertexShader:u2.points_vert,fragmentShader:u2.points_frag},dashed:{uniforms:d3([R1.common,R1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:u2.linedashed_vert,fragmentShader:u2.linedashed_frag},depth:{uniforms:d3([R1.common,R1.displacementmap]),vertexShader:u2.depth_vert,fragmentShader:u2.depth_frag},normal:{uniforms:d3([R1.common,R1.bumpmap,R1.normalmap,R1.displacementmap,{opacity:{value:1}}]),vertexShader:u2.meshnormal_vert,fragmentShader:u2.meshnormal_frag},sprite:{uniforms:d3([R1.sprite,R1.fog]),vertexShader:u2.sprite_vert,fragmentShader:u2.sprite_frag},background:{uniforms:{uvTransform:{value:new Z3},t2D:{value:null}},vertexShader:u2.background_vert,fragmentShader:u2.background_frag},cube:{uniforms:d3([R1.envmap,{opacity:{value:1}}]),vertexShader:u2.cube_vert,fragmentShader:u2.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:u2.equirect_vert,fragmentShader:u2.equirect_frag},distanceRGBA:{uniforms:d3([R1.common,R1.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:u2.distanceRGBA_vert,fragmentShader:u2.distanceRGBA_frag},shadow:{uniforms:d3([R1.lights,R1.fog,{color:{value:new v2(0)},opacity:{value:1}}]),vertexShader:u2.shadow_vert,fragmentShader:u2.shadow_frag}};f4.physical={uniforms:d3([f4.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new B1(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new v2(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new B1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new v2(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new v2(1,1,1)},specularColorMap:{value:null}}]),vertexShader:u2.meshphysical_vert,fragmentShader:u2.meshphysical_frag};function eA(o,e,t,n,i,a){const r=new v2(0);let s=i===!0?0:1,u,d,f=null,h=0,p=null;function g(v,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=e.get(x));const M=o.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?y(r,s):x&&x.isColor&&(y(x,1),S=!0),(o.autoClear||S)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===K8)?(d===void 0&&(d=new r3(new B5(1,1,1),new N4({name:"BackgroundCubeMaterial",uniforms:V9(f4.cube.uniforms),vertexShader:f4.cube.vertexShader,fragmentShader:f4.cube.fragmentShader,side:K3,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(f!==x||h!==x.version||p!==o.toneMapping)&&(d.material.needsUpdate=!0,f=x,h=x.version,p=o.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new r3(new Z9(2,2),new N4({name:"BackgroundMaterial",uniforms:V9(f4.background.uniforms),vertexShader:f4.background.vertexShader,fragmentShader:f4.background.fragmentShader,side:N9,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=o.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function y(v,_){t.buffers.color.setClear(v.r,v.g,v.b,_,a)}return{getClearColor:function(){return r},setClearColor:function(v,_=1){r.set(v),s=_,y(r,s)},getClearAlpha:function(){return s},setClearAlpha:function(v){s=v,y(r,s)},render:g}}function tA(o,e,t,n){const i=o.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||a!==null,s={},u=_(null);let d=u,f=!1;function h(k,B,G,J,O){let U=!1;if(r){const F=v(J,G,B);d!==F&&(d=F,g(d.object)),U=S(k,J,G,O),U&&x(k,J,G,O)}else{const F=B.wireframe===!0;(d.geometry!==J.id||d.program!==G.id||d.wireframe!==F)&&(d.geometry=J.id,d.program=G.id,d.wireframe=F,U=!0)}O!==null&&t.update(O,34963),(U||f)&&(f=!1,T(k,B,G,J),O!==null&&o.bindBuffer(34963,t.get(O).buffer))}function p(){return n.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function g(k){return n.isWebGL2?o.bindVertexArray(k):a.bindVertexArrayOES(k)}function y(k){return n.isWebGL2?o.deleteVertexArray(k):a.deleteVertexArrayOES(k)}function v(k,B,G){const J=G.wireframe===!0;let O=s[k.id];O===void 0&&(O={},s[k.id]=O);let U=O[B.id];U===void 0&&(U={},O[B.id]=U);let F=U[J];return F===void 0&&(F=_(p()),U[J]=F),F}function _(k){const B=[],G=[],J=[];for(let O=0;O<i;O++)B[O]=0,G[O]=0,J[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:J,object:k,attributes:{},index:null}}function S(k,B,G,J){const O=d.attributes,U=B.attributes;let F=0;const t1=G.getAttributes();for(const n1 in t1)if(t1[n1].location>=0){const a1=O[n1];let K=U[n1];if(K===void 0&&(n1==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),n1==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),a1===void 0||a1.attribute!==K||K&&a1.data!==K.data)return!0;F++}return d.attributesNum!==F||d.index!==J}function x(k,B,G,J){const O={},U=B.attributes;let F=0;const t1=G.getAttributes();for(const n1 in t1)if(t1[n1].location>=0){let a1=U[n1];a1===void 0&&(n1==="instanceMatrix"&&k.instanceMatrix&&(a1=k.instanceMatrix),n1==="instanceColor"&&k.instanceColor&&(a1=k.instanceColor));const K={};K.attribute=a1,a1&&a1.data&&(K.data=a1.data),O[n1]=K,F++}d.attributes=O,d.attributesNum=F,d.index=J}function M(){const k=d.newAttributes;for(let B=0,G=k.length;B<G;B++)k[B]=0}function b(k){C(k,0)}function C(k,B){const G=d.newAttributes,J=d.enabledAttributes,O=d.attributeDivisors;G[k]=1,J[k]===0&&(o.enableVertexAttribArray(k),J[k]=1),O[k]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,B),O[k]=B)}function w(){const k=d.newAttributes,B=d.enabledAttributes;for(let G=0,J=B.length;G<J;G++)B[G]!==k[G]&&(o.disableVertexAttribArray(G),B[G]=0)}function I(k,B,G,J,O,U){n.isWebGL2===!0&&(G===5124||G===5125)?o.vertexAttribIPointer(k,B,G,O,U):o.vertexAttribPointer(k,B,G,J,O,U)}function T(k,B,G,J){if(n.isWebGL2===!1&&(k.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const O=J.attributes,U=G.getAttributes(),F=B.defaultAttributeValues;for(const t1 in U){const n1=U[t1];if(n1.location>=0){let u1=O[t1];if(u1===void 0&&(t1==="instanceMatrix"&&k.instanceMatrix&&(u1=k.instanceMatrix),t1==="instanceColor"&&k.instanceColor&&(u1=k.instanceColor)),u1!==void 0){const a1=u1.normalized,K=u1.itemSize,Z=t.get(u1);if(Z===void 0)continue;const d1=Z.buffer,m1=Z.type,g1=Z.bytesPerElement;if(u1.isInterleavedBufferAttribute){const c1=u1.data,z1=c1.stride,w1=u1.offset;if(c1.isInstancedInterleavedBuffer){for(let x1=0;x1<n1.locationSize;x1++)C(n1.location+x1,c1.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=c1.meshPerAttribute*c1.count)}else for(let x1=0;x1<n1.locationSize;x1++)b(n1.location+x1);o.bindBuffer(34962,d1);for(let x1=0;x1<n1.locationSize;x1++)I(n1.location+x1,K/n1.locationSize,m1,a1,z1*g1,(w1+K/n1.locationSize*x1)*g1)}else{if(u1.isInstancedBufferAttribute){for(let c1=0;c1<n1.locationSize;c1++)C(n1.location+c1,u1.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=u1.meshPerAttribute*u1.count)}else for(let c1=0;c1<n1.locationSize;c1++)b(n1.location+c1);o.bindBuffer(34962,d1);for(let c1=0;c1<n1.locationSize;c1++)I(n1.location+c1,K/n1.locationSize,m1,a1,K*g1,K/n1.locationSize*c1*g1)}}else if(F!==void 0){const a1=F[t1];if(a1!==void 0)switch(a1.length){case 2:o.vertexAttrib2fv(n1.location,a1);break;case 3:o.vertexAttrib3fv(n1.location,a1);break;case 4:o.vertexAttrib4fv(n1.location,a1);break;default:o.vertexAttrib1fv(n1.location,a1)}}}}w()}function D(){q();for(const k in s){const B=s[k];for(const G in B){const J=B[G];for(const O in J)y(J[O].object),delete J[O];delete B[G]}delete s[k]}}function N(k){if(s[k.id]===void 0)return;const B=s[k.id];for(const G in B){const J=B[G];for(const O in J)y(J[O].object),delete J[O];delete B[G]}delete s[k.id]}function V(k){for(const B in s){const G=s[B];if(G[k.id]===void 0)continue;const J=G[k.id];for(const O in J)y(J[O].object),delete J[O];delete G[k.id]}}function q(){$(),f=!0,d!==u&&(d=u,g(d.object))}function $(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:q,resetDefaultState:$,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:V,initAttributes:M,enableAttribute:b,disableUnusedAttributes:w}}function nA(o,e,t,n){const i=n.isWebGL2;let a;function r(d){a=d}function s(d,f){o.drawArrays(a,d,f),t.update(f,a,1)}function u(d,f,h){if(h===0)return;let p,g;if(i)p=o,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,d,f,h),t.update(f,a,h)}this.setMode=r,this.render=s,this.renderInstances=u}function iA(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(I){if(I==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const u=a(s);u!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",u,"instead."),s=u);const d=r||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),p=o.getParameter(35660),g=o.getParameter(3379),y=o.getParameter(34076),v=o.getParameter(34921),_=o.getParameter(36347),S=o.getParameter(36348),x=o.getParameter(36349),M=p>0,b=r||e.has("OES_texture_float"),C=M&&b,w=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:d,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:w}}function oA(o){const e=this;let t=null,n=0,i=!1,a=!1;const r=new A0,s=new Z3,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p,g){const y=h.length!==0||p||n!==0||i;return i=p,t=f(h,g,0),n=h.length,y},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1,d()},this.setState=function(h,p,g){const y=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,S=o.get(h);if(!i||y===null||y.length===0||a&&!_)a?f(null):d();else{const x=a?0:n,M=x*4;let b=S.clippingState||null;u.value=b,b=f(y,p,M,g);for(let C=0;C!==M;++C)b[C]=t[C];S.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function d(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,p,g,y){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=u.value,y!==!0||_===null){const S=g+v*4,x=p.matrixWorldInverse;s.getNormalMatrix(x),(_===null||_.length<S)&&(_=new Float32Array(S));for(let M=0,b=g;M!==v;++M,b+=4)r.copy(h[M]).applyMatrix4(x,s),r.normal.toArray(_,b),_[b+3]=r.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function aA(o){let e=new WeakMap;function t(r,s){return s===ce?r.mapping=F9:s===de&&(r.mapping=B9),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const s=r.mapping;if(s===ce||s===de)if(e.has(r)){const u=e.get(r).texture;return t(u,r.mapping)}else{const u=r.image;if(u&&u.height>0){const d=new bS(u.height/2);return d.fromEquirectangularTexture(o,r),e.set(r,d),r.addEventListener("dispose",i),t(d.texture,r.mapping)}else return null}}return r}function i(r){const s=r.target;s.removeEventListener("dispose",i);const u=e.get(s);u!==void 0&&(e.delete(s),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class rA extends Fa{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,s=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,r=a+d*this.view.width,s-=f*this.view.offsetY,u=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,s,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const E9=4,bi=[.125,.215,.35,.446,.526,.582],D0=20,W6=new rA,xi=new v2;let H6=null;const C0=(1+Math.sqrt(5))/2,h9=1/C0,Si=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,C0,h9),new Y(0,C0,-h9),new Y(h9,0,C0),new Y(-h9,0,C0),new Y(C0,h9,0),new Y(-C0,h9,0)];class Mi{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){H6=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ci(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ai(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(H6),e.scissorTest=!1,v8(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===F9||e.mapping===B9?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),H6=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Y3,minFilter:Y3,generateMipmaps:!1,type:w5,format:g4,encoding:V0,depthBuffer:!1},i=wi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wi(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sA(a)),this._blurMaterial=lA(a,e,t)}return i}_compileMaterial(e){const t=new r3(this._lodPlanes[0],e);this._renderer.compile(t,W6)}_sceneToCubeUV(e,t,n,i){const s=new J3(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(xi),f.toneMapping=k4,f.autoClear=!1;const g=new L4({name:"PMREM.Background",side:K3,depthWrite:!1,depthTest:!1}),y=new r3(new B5,g);let v=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,v=!0):(g.color.copy(xi),v=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(s.up.set(0,u[S],0),s.lookAt(d[S],0,0)):x===1?(s.up.set(0,0,u[S]),s.lookAt(0,d[S],0)):(s.up.set(0,u[S],0),s.lookAt(0,0,d[S]));const M=this._cubeSize;v8(i,x*M,S>2?M:0,M,M),f.setRenderTarget(i),v&&f.render(y,s),f.render(e,s)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===F9||e.mapping===B9;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ci()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ai());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new r3(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const u=this._cubeSize;v8(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(r,W6)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Si[(i-1)%Si.length];this._blur(e,i-1,i,a,r)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,s){const u=this._renderer,d=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new r3(this._lodPlanes[i],d),p=d.uniforms,g=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*D0-1),v=a/y,_=isFinite(a)?1+Math.floor(f*v):D0;_>D0&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${D0}`);const S=[];let x=0;for(let I=0;I<D0;++I){const T=I/v,D=Math.exp(-T*T/2);S.push(D),I===0?x+=D:I<_&&(x+=2*D)}for(let I=0;I<S.length;I++)S[I]=S[I]/x;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=S,p.latitudinal.value=r==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:M}=this;p.dTheta.value=y,p.mipInt.value=M-n;const b=this._sizeLods[i],C=3*b*(i>M-E9?i-M+E9:0),w=4*(this._cubeSize-b);v8(t,C,w,3*b,2*b),u.setRenderTarget(t),u.render(h,W6)}}function sA(o){const e=[],t=[],n=[];let i=o;const a=o-E9+1+bi.length;for(let r=0;r<a;r++){const s=Math.pow(2,i);t.push(s);let u=1/s;r>o-E9?u=bi[r-o+E9-1]:r===0&&(u=0),n.push(u);const d=1/(s-2),f=-d,h=1+d,p=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,v=3,_=2,S=1,x=new Float32Array(v*y*g),M=new Float32Array(_*y*g),b=new Float32Array(S*y*g);for(let w=0;w<g;w++){const I=w%3*2/3-1,T=w>2?0:-1,D=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];x.set(D,v*y*w),M.set(p,_*y*w);const N=[w,w,w,w,w,w];b.set(N,S*y*w)}const C=new E3;C.setAttribute("position",new N3(x,v)),C.setAttribute("uv",new N3(M,_)),C.setAttribute("faceIndex",new N3(b,S)),e.push(C),i>E9&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wi(o,e,t){const n=new j0(o,e,t);return n.texture.mapping=K8,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function v8(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function lA(o,e,t){const n=new Float32Array(D0),i=new Y(0,1,0);return new N4({name:"SphericalGaussianBlur",defines:{n:D0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:s0,depthTest:!1,depthWrite:!1})}function Ai(){return new N4({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:s0,depthTest:!1,depthWrite:!1})}function Ci(){return new N4({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:s0,depthTest:!1,depthWrite:!1})}function Vt(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uA(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const u=s.mapping,d=u===ce||u===de,f=u===F9||u===B9;if(d||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Mi(o)),h=d?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(d&&h&&h.height>0||f&&h&&i(h)){t===null&&(t=new Mi(o));const p=d?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function i(s){let u=0;const d=6;for(let f=0;f<d;f++)s[f]!==void 0&&u++;return u===d}function a(s){const u=s.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function cA(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dA(o,e,t,n){const i={},a=new WeakMap;function r(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);p.removeEventListener("dispose",r),delete i[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(h,p){return i[p.id]===!0||(p.addEventListener("dispose",r),i[p.id]=!0,t.memory.geometries++),p}function u(h){const p=h.attributes;for(const y in p)e.update(p[y],34962);const g=h.morphAttributes;for(const y in g){const v=g[y];for(let _=0,S=v.length;_<S;_++)e.update(v[_],34962)}}function d(h){const p=[],g=h.index,y=h.attributes.position;let v=0;if(g!==null){const x=g.array;v=g.version;for(let M=0,b=x.length;M<b;M+=3){const C=x[M+0],w=x[M+1],I=x[M+2];p.push(C,w,w,I,I,C)}}else{const x=y.array;v=y.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const C=M+0,w=M+1,I=M+2;p.push(C,w,w,I,I,C)}}const _=new(Ia(p)?Na:Ua)(p,1);_.version=v;const S=a.get(h);S&&e.remove(S),a.set(h,_)}function f(h){const p=a.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&d(h)}else d(h);return a.get(h)}return{get:s,update:u,getWireframeAttribute:f}}function fA(o,e,t,n){const i=n.isWebGL2;let a;function r(p){a=p}let s,u;function d(p){s=p.type,u=p.bytesPerElement}function f(p,g){o.drawElements(a,g,s,p*u),t.update(g,a,1)}function h(p,g,y){if(y===0)return;let v,_;if(i)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](a,g,s,p*u,y),t.update(g,a,y)}this.setMode=r,this.setIndex=d,this.render=f,this.renderInstances=h}function pA(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,s){switch(t.calls++,r){case 4:t.triangles+=s*(a/3);break;case 1:t.lines+=s*(a/2);break;case 3:t.lines+=s*(a-1);break;case 2:t.lines+=s*a;break;case 0:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hA(o,e){return o[0]-e[0]}function mA(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gA(o,e,t){const n={},i=new Float32Array(8),a=new WeakMap,r=new s3,s=[];for(let d=0;d<8;d++)s[d]=[d,0];function u(d,f,h,p){const g=d.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=y!==void 0?y.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let B=function(){$.dispose(),a.delete(f),f.removeEventListener("dispose",B)};_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let D=0;M===!0&&(D=1),b===!0&&(D=2),C===!0&&(D=3);let N=f.attributes.position.count*D,V=1;N>e.maxTextureSize&&(V=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const q=new Float32Array(N*V*4*v),$=new Pa(q,N,V,v);$.type=R0,$.needsUpdate=!0;const k=D*4;for(let G=0;G<v;G++){const J=w[G],O=I[G],U=T[G],F=N*V*4*G;for(let t1=0;t1<J.count;t1++){const n1=t1*k;M===!0&&(r.fromBufferAttribute(J,t1),q[F+n1+0]=r.x,q[F+n1+1]=r.y,q[F+n1+2]=r.z,q[F+n1+3]=0),b===!0&&(r.fromBufferAttribute(O,t1),q[F+n1+4]=r.x,q[F+n1+5]=r.y,q[F+n1+6]=r.z,q[F+n1+7]=0),C===!0&&(r.fromBufferAttribute(U,t1),q[F+n1+8]=r.x,q[F+n1+9]=r.y,q[F+n1+10]=r.z,q[F+n1+11]=U.itemSize===4?r.w:1)}}_={count:v,texture:$,size:new B1(N,V)},a.set(f,_),f.addEventListener("dispose",B)}let S=0;for(let M=0;M<g.length;M++)S+=g[M];const x=f.morphTargetsRelative?1:1-S;p.getUniforms().setValue(o,"morphTargetBaseInfluence",x),p.getUniforms().setValue(o,"morphTargetInfluences",g),p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const y=g===void 0?0:g.length;let v=n[f.id];if(v===void 0||v.length!==y){v=[];for(let b=0;b<y;b++)v[b]=[b,0];n[f.id]=v}for(let b=0;b<y;b++){const C=v[b];C[0]=b,C[1]=g[b]}v.sort(mA);for(let b=0;b<8;b++)b<y&&v[b][1]?(s[b][0]=v[b][0],s[b][1]=v[b][1]):(s[b][0]=Number.MAX_SAFE_INTEGER,s[b][1]=0);s.sort(hA);const _=f.morphAttributes.position,S=f.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const C=s[b],w=C[0],I=C[1];w!==Number.MAX_SAFE_INTEGER&&I?(_&&f.getAttribute("morphTarget"+b)!==_[w]&&f.setAttribute("morphTarget"+b,_[w]),S&&f.getAttribute("morphNormal"+b)!==S[w]&&f.setAttribute("morphNormal"+b,S[w]),i[b]=I,x+=I):(_&&f.hasAttribute("morphTarget"+b)===!0&&f.deleteAttribute("morphTarget"+b),S&&f.hasAttribute("morphNormal"+b)===!0&&f.deleteAttribute("morphNormal"+b),i[b]=0)}const M=f.morphTargetsRelative?1:1-x;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:u}}function vA(o,e,t,n){let i=new WeakMap;function a(u){const d=n.render.frame,f=u.geometry,h=e.get(u,f);return i.get(h)!==d&&(e.update(h),i.set(h,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",s)===!1&&u.addEventListener("dispose",s),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function r(){i=new WeakMap}function s(u){const d=u.target;d.removeEventListener("dispose",s),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:r}}const ja=new e4,Wa=new Pa,Ha=new oS,$a=new Ba,Ti=[],Di=[],Ei=new Float32Array(16),Ri=new Float32Array(9),Ii=new Float32Array(4);function q9(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let a=Ti[i];if(a===void 0&&(a=new Float32Array(i),Ti[i]=a),e!==0){n.toArray(a,0);for(let r=1,s=0;r!==e;++r)s+=t,o[r].toArray(a,s)}return a}function Q2(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function K2(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function t6(o,e){let t=Di[e];t===void 0&&(t=new Int32Array(e),Di[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function _A(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function yA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Q2(t,e))return;o.uniform2fv(this.addr,e),K2(t,e)}}function bA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Q2(t,e))return;o.uniform3fv(this.addr,e),K2(t,e)}}function xA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Q2(t,e))return;o.uniform4fv(this.addr,e),K2(t,e)}}function SA(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Q2(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),K2(t,e)}else{if(Q2(t,n))return;Ii.set(n),o.uniformMatrix2fv(this.addr,!1,Ii),K2(t,n)}}function MA(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Q2(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),K2(t,e)}else{if(Q2(t,n))return;Ri.set(n),o.uniformMatrix3fv(this.addr,!1,Ri),K2(t,n)}}function wA(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Q2(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),K2(t,e)}else{if(Q2(t,n))return;Ei.set(n),o.uniformMatrix4fv(this.addr,!1,Ei),K2(t,n)}}function AA(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function CA(o,e){const t=this.cache;Q2(t,e)||(o.uniform2iv(this.addr,e),K2(t,e))}function TA(o,e){const t=this.cache;Q2(t,e)||(o.uniform3iv(this.addr,e),K2(t,e))}function DA(o,e){const t=this.cache;Q2(t,e)||(o.uniform4iv(this.addr,e),K2(t,e))}function EA(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function RA(o,e){const t=this.cache;Q2(t,e)||(o.uniform2uiv(this.addr,e),K2(t,e))}function IA(o,e){const t=this.cache;Q2(t,e)||(o.uniform3uiv(this.addr,e),K2(t,e))}function OA(o,e){const t=this.cache;Q2(t,e)||(o.uniform4uiv(this.addr,e),K2(t,e))}function LA(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ja,i)}function zA(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ha,i)}function PA(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$a,i)}function kA(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wa,i)}function UA(o){switch(o){case 5126:return _A;case 35664:return yA;case 35665:return bA;case 35666:return xA;case 35674:return SA;case 35675:return MA;case 35676:return wA;case 5124:case 35670:return AA;case 35667:case 35671:return CA;case 35668:case 35672:return TA;case 35669:case 35673:return DA;case 5125:return EA;case 36294:return RA;case 36295:return IA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return kA}}function NA(o,e){o.uniform1fv(this.addr,e)}function FA(o,e){const t=q9(e,this.size,2);o.uniform2fv(this.addr,t)}function BA(o,e){const t=q9(e,this.size,3);o.uniform3fv(this.addr,t)}function GA(o,e){const t=q9(e,this.size,4);o.uniform4fv(this.addr,t)}function VA(o,e){const t=q9(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function jA(o,e){const t=q9(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function WA(o,e){const t=q9(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function HA(o,e){o.uniform1iv(this.addr,e)}function $A(o,e){o.uniform2iv(this.addr,e)}function YA(o,e){o.uniform3iv(this.addr,e)}function JA(o,e){o.uniform4iv(this.addr,e)}function ZA(o,e){o.uniform1uiv(this.addr,e)}function qA(o,e){o.uniform2uiv(this.addr,e)}function XA(o,e){o.uniform3uiv(this.addr,e)}function QA(o,e){o.uniform4uiv(this.addr,e)}function KA(o,e,t){const n=this.cache,i=e.length,a=t6(t,i);Q2(n,a)||(o.uniform1iv(this.addr,a),K2(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ja,a[r])}function eC(o,e,t){const n=this.cache,i=e.length,a=t6(t,i);Q2(n,a)||(o.uniform1iv(this.addr,a),K2(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ha,a[r])}function tC(o,e,t){const n=this.cache,i=e.length,a=t6(t,i);Q2(n,a)||(o.uniform1iv(this.addr,a),K2(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||$a,a[r])}function nC(o,e,t){const n=this.cache,i=e.length,a=t6(t,i);Q2(n,a)||(o.uniform1iv(this.addr,a),K2(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Wa,a[r])}function iC(o){switch(o){case 5126:return NA;case 35664:return FA;case 35665:return BA;case 35666:return GA;case 35674:return VA;case 35675:return jA;case 35676:return WA;case 5124:case 35670:return HA;case 35667:case 35671:return $A;case 35668:case 35672:return YA;case 35669:case 35673:return JA;case 5125:return ZA;case 36294:return qA;case 36295:return XA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return nC}}class oC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=UA(t.type)}}class aC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=iC(t.type)}}class rC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const s=i[a];s.setValue(e,t[s.id],n)}}}const $6=/(\w+)(\])?(\[|\.)?/g;function Oi(o,e){o.seq.push(e),o.map[e.id]=e}function sC(o,e,t){const n=o.name,i=n.length;for($6.lastIndex=0;;){const a=$6.exec(n),r=$6.lastIndex;let s=a[1];const u=a[2]==="]",d=a[3];if(u&&(s=s|0),d===void 0||d==="["&&r+2===i){Oi(t,d===void 0?new oC(s,o,e):new aC(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new rC(s),Oi(t,h)),t=h}}}class E8{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);sC(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const s=t[a],u=n[s.id];u.needsUpdate!==!1&&s.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Li(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let lC=0;function uC(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const s=r+1;n.push(`${s===e?">":" "} ${s}: ${t[r]}`)}return n.join(`
`)}function cC(o){switch(o){case V0:return["Linear","( value )"];case U2:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function zi(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+uC(o.getShaderSource(e),r)}else return i}function dC(o,e){const t=cC(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fC(o,e){let t;switch(e){case Rx:t="Linear";break;case Ix:t="Reinhard";break;case Ox:t="OptimizedCineon";break;case Lx:t="ACESFilmic";break;case zx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pC(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(f5).join(`
`)}function hC(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mC(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=o.getActiveAttrib(e,i),r=a.name;let s=1;a.type===35674&&(s=2),a.type===35675&&(s=3),a.type===35676&&(s=4),t[r]={type:a.type,location:o.getAttribLocation(e,r),locationSize:s}}return t}function f5(o){return o!==""}function Pi(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ki(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gC=/^[ \t]*#include +<([\w\d./]+)>/gm;function ve(o){return o.replace(gC,vC)}function vC(o,e){const t=u2[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ve(t)}const _C=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ui(o){return o.replace(_C,yC)}function yC(o,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Ni(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Aa?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===d5&&(e="SHADOWMAP_TYPE_VSM"),e}function xC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case F9:case B9:e="ENVMAP_TYPE_CUBE";break;case K8:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SC(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case B9:e="ENVMAP_MODE_REFRACTION";break}return e}function MC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Da:e="ENVMAP_BLENDING_MULTIPLY";break;case Dx:e="ENVMAP_BLENDING_MIX";break;case Ex:e="ENVMAP_BLENDING_ADD";break}return e}function wC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AC(o,e,t,n){const i=o.getContext(),a=t.defines;let r=t.vertexShader,s=t.fragmentShader;const u=bC(t),d=xC(t),f=SC(t),h=MC(t),p=wC(t),g=t.isWebGL2?"":pC(t),y=hC(a),v=i.createProgram();let _,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[y].filter(f5).join(`
`),_.length>0&&(_+=`
`),S=[g,y].filter(f5).join(`
`),S.length>0&&(S+=`
`)):(_=[Ni(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(f5).join(`
`),S=[g,Ni(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==k4?"#define TONE_MAPPING":"",t.toneMapping!==k4?u2.tonemapping_pars_fragment:"",t.toneMapping!==k4?fC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",u2.encodings_pars_fragment,dC("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(f5).join(`
`)),r=ve(r),r=Pi(r,t),r=ki(r,t),s=ve(s),s=Pi(s,t),s=ki(s,t),r=Ui(r),s=Ui(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===ri?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ri?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=x+_+r,b=x+S+s,C=Li(i,35633,M),w=Li(i,35632,b);if(i.attachShader(v,C),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),o.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(w).trim();let q=!0,$=!0;if(i.getProgramParameter(v,35714)===!1){q=!1;const k=zi(i,C,"vertex"),B=zi(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+D+`
`+k+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||V==="")&&($=!1);$&&(this.diagnostics={runnable:q,programLog:D,vertexShader:{log:N,prefix:_},fragmentShader:{log:V,prefix:S}})}i.deleteShader(C),i.deleteShader(w);let I;this.getUniforms=function(){return I===void 0&&(I=new E8(i,v)),I};let T;return this.getAttributes=function(){return T===void 0&&(T=mC(i,v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=lC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let CC=0;class TC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DC(e),t.set(e,n)),n}}class DC{constructor(e){this.id=CC++,this.code=e,this.usedTimes=0}}function EC(o,e,t,n,i,a,r){const s=new ka,u=new TC,d=[],f=i.isWebGL2,h=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T,D,N,V,q){const $=V.fog,k=q.geometry,B=T.isMeshStandardMaterial?V.environment:null,G=(T.isMeshStandardMaterial?t:e).get(T.envMap||B),J=G&&G.mapping===K8?G.image.height:null,O=y[T.type];T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,F=U!==void 0?U.length:0;let t1=0;k.morphAttributes.position!==void 0&&(t1=1),k.morphAttributes.normal!==void 0&&(t1=2),k.morphAttributes.color!==void 0&&(t1=3);let n1,u1,a1,K;if(O){const z1=f4[O];n1=z1.vertexShader,u1=z1.fragmentShader}else n1=T.vertexShader,u1=T.fragmentShader,u.update(T),a1=u.getVertexShaderID(T),K=u.getFragmentShaderID(T);const Z=o.getRenderTarget(),d1=T.alphaTest>0,m1=T.clearcoat>0,g1=T.iridescence>0;return{isWebGL2:f,shaderID:O,shaderName:T.type,vertexShader:n1,fragmentShader:u1,defines:T.defines,customVertexShaderID:a1,customFragmentShaderID:K,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:p,outputEncoding:Z===null?o.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:V0,map:!!T.map,matcap:!!T.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:J,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===eS,tangentSpaceNormalMap:T.normalMapType===Kx,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===U2,clearcoat:m1,clearcoatMap:m1&&!!T.clearcoatMap,clearcoatRoughnessMap:m1&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:m1&&!!T.clearcoatNormalMap,iridescence:g1,iridescenceMap:g1&&!!T.iridescenceMap,iridescenceThicknessMap:g1&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===z0,alphaMap:!!T.alphaMap,alphaTest:d1,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!k.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.iridescenceMap||T.iridescenceThicknessMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularColorMap||T.sheen>0||T.sheenColorMap||T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!$,useFog:T.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:t1,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:T.toneMapped?o.toneMapping:k4,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===m4,flipSided:T.side===K3,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function _(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)D.push(N),D.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(S(D,T),x(D,T),D.push(o.outputEncoding)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputEncoding),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.combine),T.push(D.vertexUvs),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function x(T,D){s.disableAll(),D.isWebGL2&&s.enable(0),D.supportsVertexTextures&&s.enable(1),D.instancing&&s.enable(2),D.instancingColor&&s.enable(3),D.map&&s.enable(4),D.matcap&&s.enable(5),D.envMap&&s.enable(6),D.lightMap&&s.enable(7),D.aoMap&&s.enable(8),D.emissiveMap&&s.enable(9),D.bumpMap&&s.enable(10),D.normalMap&&s.enable(11),D.objectSpaceNormalMap&&s.enable(12),D.tangentSpaceNormalMap&&s.enable(13),D.clearcoat&&s.enable(14),D.clearcoatMap&&s.enable(15),D.clearcoatRoughnessMap&&s.enable(16),D.clearcoatNormalMap&&s.enable(17),D.iridescence&&s.enable(18),D.iridescenceMap&&s.enable(19),D.iridescenceThicknessMap&&s.enable(20),D.displacementMap&&s.enable(21),D.specularMap&&s.enable(22),D.roughnessMap&&s.enable(23),D.metalnessMap&&s.enable(24),D.gradientMap&&s.enable(25),D.alphaMap&&s.enable(26),D.alphaTest&&s.enable(27),D.vertexColors&&s.enable(28),D.vertexAlphas&&s.enable(29),D.vertexUvs&&s.enable(30),D.vertexTangents&&s.enable(31),D.uvsVertexOnly&&s.enable(32),T.push(s.mask),s.disableAll(),D.fog&&s.enable(0),D.useFog&&s.enable(1),D.flatShading&&s.enable(2),D.logarithmicDepthBuffer&&s.enable(3),D.skinning&&s.enable(4),D.morphTargets&&s.enable(5),D.morphNormals&&s.enable(6),D.morphColors&&s.enable(7),D.premultipliedAlpha&&s.enable(8),D.shadowMapEnabled&&s.enable(9),D.physicallyCorrectLights&&s.enable(10),D.doubleSided&&s.enable(11),D.flipSided&&s.enable(12),D.useDepthPacking&&s.enable(13),D.dithering&&s.enable(14),D.specularIntensityMap&&s.enable(15),D.specularColorMap&&s.enable(16),D.transmission&&s.enable(17),D.transmissionMap&&s.enable(18),D.thicknessMap&&s.enable(19),D.sheen&&s.enable(20),D.sheenColorMap&&s.enable(21),D.sheenRoughnessMap&&s.enable(22),D.decodeVideoTexture&&s.enable(23),D.opaque&&s.enable(24),T.push(s.mask)}function M(T){const D=y[T.type];let N;if(D){const V=f4[D];N=gS.clone(V.uniforms)}else N=T.uniforms;return N}function b(T,D){let N;for(let V=0,q=d.length;V<q;V++){const $=d[V];if($.cacheKey===D){N=$,++N.usedTimes;break}}return N===void 0&&(N=new AC(o,D,T,a),d.push(N)),N}function C(T){if(--T.usedTimes===0){const D=d.indexOf(T);d[D]=d[d.length-1],d.pop(),T.destroy()}}function w(T){u.remove(T)}function I(){u.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:M,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:d,dispose:I}}function RC(){let o=new WeakMap;function e(a){let r=o.get(a);return r===void 0&&(r={},o.set(a,r)),r}function t(a){o.delete(a)}function n(a,r,s){o.get(a)[r]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function IC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Fi(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Bi(){const o=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(h,p,g,y,v,_){let S=o[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:g,groupOrder:y,renderOrder:h.renderOrder,z:v,group:_},o[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=g,S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=v,S.group=_),e++,S}function s(h,p,g,y,v,_){const S=r(h,p,g,y,v,_);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function u(h,p,g,y,v,_){const S=r(h,p,g,y,v,_);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function d(h,p){t.length>1&&t.sort(h||IC),n.length>1&&n.sort(p||Fi),i.length>1&&i.sort(p||Fi)}function f(){for(let h=e,p=o.length;h<p;h++){const g=o[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:s,unshift:u,finish:f,sort:d}}function OC(){let o=new WeakMap;function e(n,i){const a=o.get(n);let r;return a===void 0?(r=new Bi,o.set(n,[r])):i>=a.length?(r=new Bi,a.push(r)):r=a[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function LC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new v2};break;case"SpotLight":t={position:new Y,direction:new Y,color:new v2,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new v2,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new v2,groundColor:new v2};break;case"RectAreaLight":t={color:new v2,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=t,t}}}function zC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B1};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B1};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B1,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let PC=0;function kC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function UC(o,e){const t=new LC,n=zC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new Y);const a=new Y,r=new G2,s=new G2;function u(f,h){let p=0,g=0,y=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let v=0,_=0,S=0,x=0,M=0,b=0,C=0,w=0,I=0,T=0;f.sort(kC);const D=h!==!0?Math.PI:1;for(let V=0,q=f.length;V<q;V++){const $=f[V],k=$.color,B=$.intensity,G=$.distance,J=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)p+=k.r*B*D,g+=k.g*B*D,y+=k.b*B*D;else if($.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector($.sh.coefficients[O],B);else if($.isDirectionalLight){const O=t.get($);if(O.color.copy($.color).multiplyScalar($.intensity*D),$.castShadow){const U=$.shadow,F=n.get($);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.directionalShadow[v]=F,i.directionalShadowMap[v]=J,i.directionalShadowMatrix[v]=$.shadow.matrix,b++}i.directional[v]=O,v++}else if($.isSpotLight){const O=t.get($);O.position.setFromMatrixPosition($.matrixWorld),O.color.copy(k).multiplyScalar(B*D),O.distance=G,O.coneCos=Math.cos($.angle),O.penumbraCos=Math.cos($.angle*(1-$.penumbra)),O.decay=$.decay,i.spot[S]=O;const U=$.shadow;if($.map&&(i.spotLightMap[I]=$.map,I++,U.updateMatrices($),$.castShadow&&T++),i.spotLightMatrix[S]=U.matrix,$.castShadow){const F=n.get($);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.spotShadow[S]=F,i.spotShadowMap[S]=J,w++}S++}else if($.isRectAreaLight){const O=t.get($);O.color.copy(k).multiplyScalar(B),O.halfWidth.set($.width*.5,0,0),O.halfHeight.set(0,$.height*.5,0),i.rectArea[x]=O,x++}else if($.isPointLight){const O=t.get($);if(O.color.copy($.color).multiplyScalar($.intensity*D),O.distance=$.distance,O.decay=$.decay,$.castShadow){const U=$.shadow,F=n.get($);F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=$.shadow.matrix,C++}i.point[_]=O,_++}else if($.isHemisphereLight){const O=t.get($);O.skyColor.copy($.color).multiplyScalar(B*D),O.groundColor.copy($.groundColor).multiplyScalar(B*D),i.hemi[M]=O,M++}}x>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=R1.LTC_FLOAT_1,i.rectAreaLTC2=R1.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=R1.LTC_HALF_1,i.rectAreaLTC2=R1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=y;const N=i.hash;(N.directionalLength!==v||N.pointLength!==_||N.spotLength!==S||N.rectAreaLength!==x||N.hemiLength!==M||N.numDirectionalShadows!==b||N.numPointShadows!==C||N.numSpotShadows!==w||N.numSpotMaps!==I)&&(i.directional.length=v,i.spot.length=S,i.rectArea.length=x,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,N.directionalLength=v,N.pointLength=_,N.spotLength=S,N.rectAreaLength=x,N.hemiLength=M,N.numDirectionalShadows=b,N.numPointShadows=C,N.numSpotShadows=w,N.numSpotMaps=I,i.version=PC++)}function d(f,h){let p=0,g=0,y=0,v=0,_=0;const S=h.matrixWorldInverse;for(let x=0,M=f.length;x<M;x++){const b=f[x];if(b.isDirectionalLight){const C=i.directional[p];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),p++}else if(b.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),s.identity(),r.copy(b.matrixWorld),r.premultiply(S),s.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),v++}else if(b.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),g++}else if(b.isHemisphereLight){const C=i.hemi[_];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(S),_++}}}return{setup:u,setupView:d,state:i}}function Gi(o,e){const t=new UC(o,e),n=[],i=[];function a(){n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function u(h){t.setup(n,h)}function d(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:d,pushLight:r,pushShadow:s}}function NC(o,e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let u;return s===void 0?(u=new Gi(o,e),t.set(a,[u])):r>=s.length?(u=new Gi(o,e),s.push(u)):u=s[r],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class FC extends J0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BC extends J0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jC(o,e,t){let n=new Ga;const i=new B1,a=new B1,r=new s3,s=new FC({depthPacking:Qx}),u=new BC,d={},f=t.maxTextureSize,h={0:K3,1:N9,2:m4},p=new N4({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B1},radius:{value:4}},vertexShader:GC,fragmentShader:VC}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new E3;y.setAttribute("position",new N3(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new r3(y,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa,this.render=function(b,C,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;const I=o.getRenderTarget(),T=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),N=o.state;N.setBlending(s0),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let V=0,q=b.length;V<q;V++){const $=b[V],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const B=k.getFrameExtents();if(i.multiply(B),a.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/B.x),i.x=a.x*B.x,k.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/B.y),i.y=a.y*B.y,k.mapSize.y=a.y)),k.map===null){const J=this.type!==d5?{minFilter:b3,magFilter:b3}:{};k.map=new j0(i.x,i.y,J),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const G=k.getViewportCount();for(let J=0;J<G;J++){const O=k.getViewport(J);r.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),N.viewport(r),k.updateMatrices($,J),n=k.getFrustum(),M(C,w,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===d5&&S(k,w),k.needsUpdate=!1}_.needsUpdate=!1,o.setRenderTarget(I,T,D)};function S(b,C){const w=e.update(v);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new j0(i.x,i.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(C,null,w,p,v,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(C,null,w,g,v,null)}function x(b,C,w,I,T,D){let N=null;const V=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0?N=V:N=w.isPointLight===!0?u:s,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const q=N.uuid,$=C.uuid;let k=d[q];k===void 0&&(k={},d[q]=k);let B=k[$];B===void 0&&(B=N.clone(),k[$]=B),N=B}return N.visible=C.visible,N.wireframe=C.wireframe,D===d5?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:h[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaTest,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(w.matrixWorld),N.nearDistance=I,N.farDistance=T),N}function M(b,C,w,I,T){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===d5)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const V=e.update(b),q=b.material;if(Array.isArray(q)){const $=V.groups;for(let k=0,B=$.length;k<B;k++){const G=$[k],J=q[G.materialIndex];if(J&&J.visible){const O=x(b,J,I,w.near,w.far,T);o.renderBufferDirect(w,null,V,O,b,G)}}}else if(q.visible){const $=x(b,q,I,w.near,w.far,T);o.renderBufferDirect(w,null,V,$,b,null)}}const N=b.children;for(let V=0,q=N.length;V<q;V++)M(N[V],C,w,I,T)}}function WC(o,e,t){const n=t.isWebGL2;function i(){let e1=!1;const U1=new s3;let E1=null;const v1=new s3(0,0,0,0);return{setMask:function(I1){E1!==I1&&!e1&&(o.colorMask(I1,I1,I1,I1),E1=I1)},setLocked:function(I1){e1=I1},setClear:function(I1,e2,T2,F2,W4){W4===!0&&(I1*=F2,e2*=F2,T2*=F2),U1.set(I1,e2,T2,F2),v1.equals(U1)===!1&&(o.clearColor(I1,e2,T2,F2),v1.copy(U1))},reset:function(){e1=!1,E1=null,v1.set(-1,0,0,0)}}}function a(){let e1=!1,U1=null,E1=null,v1=null;return{setTest:function(I1){I1?d1(2929):m1(2929)},setMask:function(I1){U1!==I1&&!e1&&(o.depthMask(I1),U1=I1)},setFunc:function(I1){if(E1!==I1){switch(I1){case xx:o.depthFunc(512);break;case Sx:o.depthFunc(519);break;case Mx:o.depthFunc(513);break;case ue:o.depthFunc(515);break;case wx:o.depthFunc(514);break;case Ax:o.depthFunc(518);break;case Cx:o.depthFunc(516);break;case Tx:o.depthFunc(517);break;default:o.depthFunc(515)}E1=I1}},setLocked:function(I1){e1=I1},setClear:function(I1){v1!==I1&&(o.clearDepth(I1),v1=I1)},reset:function(){e1=!1,U1=null,E1=null,v1=null}}}function r(){let e1=!1,U1=null,E1=null,v1=null,I1=null,e2=null,T2=null,F2=null,W4=null;return{setTest:function(P2){e1||(P2?d1(2960):m1(2960))},setMask:function(P2){U1!==P2&&!e1&&(o.stencilMask(P2),U1=P2)},setFunc:function(P2,S4,j3){(E1!==P2||v1!==S4||I1!==j3)&&(o.stencilFunc(P2,S4,j3),E1=P2,v1=S4,I1=j3)},setOp:function(P2,S4,j3){(e2!==P2||T2!==S4||F2!==j3)&&(o.stencilOp(P2,S4,j3),e2=P2,T2=S4,F2=j3)},setLocked:function(P2){e1=P2},setClear:function(P2){W4!==P2&&(o.clearStencil(P2),W4=P2)},reset:function(){e1=!1,U1=null,E1=null,v1=null,I1=null,e2=null,T2=null,F2=null,W4=null}}}const s=new i,u=new a,d=new r,f=new WeakMap,h=new WeakMap;let p={},g={},y=new WeakMap,v=[],_=null,S=!1,x=null,M=null,b=null,C=null,w=null,I=null,T=null,D=!1,N=null,V=null,q=null,$=null,k=null;const B=o.getParameter(35661);let G=!1,J=0;const O=o.getParameter(7938);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=J>=2);let U=null,F={};const t1=o.getParameter(3088),n1=o.getParameter(2978),u1=new s3().fromArray(t1),a1=new s3().fromArray(n1);function K(e1,U1,E1){const v1=new Uint8Array(4),I1=o.createTexture();o.bindTexture(e1,I1),o.texParameteri(e1,10241,9728),o.texParameteri(e1,10240,9728);for(let e2=0;e2<E1;e2++)o.texImage2D(U1+e2,0,6408,1,1,0,6408,5121,v1);return I1}const Z={};Z[3553]=K(3553,3553,1),Z[34067]=K(34067,34069,6),s.setClear(0,0,0,1),u.setClear(1),d.setClear(0),d1(2929),u.setFunc(ue),$1(!1),t2(In),d1(2884),X1(s0);function d1(e1){p[e1]!==!0&&(o.enable(e1),p[e1]=!0)}function m1(e1){p[e1]!==!1&&(o.disable(e1),p[e1]=!1)}function g1(e1,U1){return g[e1]!==U1?(o.bindFramebuffer(e1,U1),g[e1]=U1,n&&(e1===36009&&(g[36160]=U1),e1===36160&&(g[36009]=U1)),!0):!1}function c1(e1,U1){let E1=v,v1=!1;if(e1)if(E1=y.get(U1),E1===void 0&&(E1=[],y.set(U1,E1)),e1.isWebGLMultipleRenderTargets){const I1=e1.texture;if(E1.length!==I1.length||E1[0]!==36064){for(let e2=0,T2=I1.length;e2<T2;e2++)E1[e2]=36064+e2;E1.length=I1.length,v1=!0}}else E1[0]!==36064&&(E1[0]=36064,v1=!0);else E1[0]!==1029&&(E1[0]=1029,v1=!0);v1&&(t.isWebGL2?o.drawBuffers(E1):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(E1))}function z1(e1){return _!==e1?(o.useProgram(e1),_=e1,!0):!1}const w1={[S9]:32774,[cx]:32778,[dx]:32779};if(n)w1[Pn]=32775,w1[kn]=32776;else{const e1=e.get("EXT_blend_minmax");e1!==null&&(w1[Pn]=e1.MIN_EXT,w1[kn]=e1.MAX_EXT)}const x1={[fx]:0,[px]:1,[hx]:768,[Ca]:770,[bx]:776,[_x]:774,[gx]:772,[mx]:769,[Ta]:771,[yx]:775,[vx]:773};function X1(e1,U1,E1,v1,I1,e2,T2,F2){if(e1===s0){S===!0&&(m1(3042),S=!1);return}if(S===!1&&(d1(3042),S=!0),e1!==ux){if(e1!==x||F2!==D){if((M!==S9||w!==S9)&&(o.blendEquation(32774),M=S9,w=S9),F2)switch(e1){case z0:o.blendFuncSeparate(1,771,1,771);break;case On:o.blendFunc(1,1);break;case Ln:o.blendFuncSeparate(0,769,0,1);break;case zn:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",e1);break}else switch(e1){case z0:o.blendFuncSeparate(770,771,1,771);break;case On:o.blendFunc(770,1);break;case Ln:o.blendFuncSeparate(0,769,0,1);break;case zn:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",e1);break}b=null,C=null,I=null,T=null,x=e1,D=F2}return}I1=I1||U1,e2=e2||E1,T2=T2||v1,(U1!==M||I1!==w)&&(o.blendEquationSeparate(w1[U1],w1[I1]),M=U1,w=I1),(E1!==b||v1!==C||e2!==I||T2!==T)&&(o.blendFuncSeparate(x1[E1],x1[v1],x1[e2],x1[T2]),b=E1,C=v1,I=e2,T=T2),x=e1,D=null}function Y1(e1,U1){e1.side===m4?m1(2884):d1(2884);let E1=e1.side===K3;U1&&(E1=!E1),$1(E1),e1.blending===z0&&e1.transparent===!1?X1(s0):X1(e1.blending,e1.blendEquation,e1.blendSrc,e1.blendDst,e1.blendEquationAlpha,e1.blendSrcAlpha,e1.blendDstAlpha,e1.premultipliedAlpha),u.setFunc(e1.depthFunc),u.setTest(e1.depthTest),u.setMask(e1.depthWrite),s.setMask(e1.colorWrite);const v1=e1.stencilWrite;d.setTest(v1),v1&&(d.setMask(e1.stencilWriteMask),d.setFunc(e1.stencilFunc,e1.stencilRef,e1.stencilFuncMask),d.setOp(e1.stencilFail,e1.stencilZFail,e1.stencilZPass)),G1(e1.polygonOffset,e1.polygonOffsetFactor,e1.polygonOffsetUnits),e1.alphaToCoverage===!0?d1(32926):m1(32926)}function $1(e1){N!==e1&&(e1?o.frontFace(2304):o.frontFace(2305),N=e1)}function t2(e1){e1!==rx?(d1(2884),e1!==V&&(e1===In?o.cullFace(1029):e1===sx?o.cullFace(1028):o.cullFace(1032))):m1(2884),V=e1}function s2(e1){e1!==q&&(G&&o.lineWidth(e1),q=e1)}function G1(e1,U1,E1){e1?(d1(32823),($!==U1||k!==E1)&&(o.polygonOffset(U1,E1),$=U1,k=E1)):m1(32823)}function n2(e1){e1?d1(3089):m1(3089)}function W1(e1){e1===void 0&&(e1=33984+B-1),U!==e1&&(o.activeTexture(e1),U=e1)}function z(e1,U1,E1){E1===void 0&&(U===null?E1=33984+B-1:E1=U);let v1=F[E1];v1===void 0&&(v1={type:void 0,texture:void 0},F[E1]=v1),(v1.type!==e1||v1.texture!==U1)&&(U!==E1&&(o.activeTexture(E1),U=E1),o.bindTexture(e1,U1||Z[e1]),v1.type=e1,v1.texture=U1)}function E(){const e1=F[U];e1!==void 0&&e1.type!==void 0&&(o.bindTexture(e1.type,null),e1.type=void 0,e1.texture=void 0)}function l1(){try{o.compressedTexImage2D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function S1(){try{o.texSubImage2D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function C1(){try{o.texSubImage3D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function O1(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function H1(){try{o.texStorage2D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function H(){try{o.texStorage3D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function i1(){try{o.texImage2D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function L1(){try{o.texImage3D.apply(o,arguments)}catch(e1){console.error("THREE.WebGLState:",e1)}}function P1(e1){u1.equals(e1)===!1&&(o.scissor(e1.x,e1.y,e1.z,e1.w),u1.copy(e1))}function F1(e1){a1.equals(e1)===!1&&(o.viewport(e1.x,e1.y,e1.z,e1.w),a1.copy(e1))}function V1(e1,U1){let E1=h.get(U1);E1===void 0&&(E1=new WeakMap,h.set(U1,E1));let v1=E1.get(e1);v1===void 0&&(v1=o.getUniformBlockIndex(U1,e1.name),E1.set(e1,v1))}function i2(e1,U1){const v1=h.get(U1).get(e1);f.get(e1)!==v1&&(o.uniformBlockBinding(U1,v1,e1.__bindingPointIndex),f.set(e1,v1))}function g2(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},U=null,F={},g={},y=new WeakMap,v=[],_=null,S=!1,x=null,M=null,b=null,C=null,w=null,I=null,T=null,D=!1,N=null,V=null,q=null,$=null,k=null,u1.set(0,0,o.canvas.width,o.canvas.height),a1.set(0,0,o.canvas.width,o.canvas.height),s.reset(),u.reset(),d.reset()}return{buffers:{color:s,depth:u,stencil:d},enable:d1,disable:m1,bindFramebuffer:g1,drawBuffers:c1,useProgram:z1,setBlending:X1,setMaterial:Y1,setFlipSided:$1,setCullFace:t2,setLineWidth:s2,setPolygonOffset:G1,setScissorTest:n2,activeTexture:W1,bindTexture:z,unbindTexture:E,compressedTexImage2D:l1,texImage2D:i1,texImage3D:L1,updateUBOMapping:V1,uniformBlockBinding:i2,texStorage2D:H1,texStorage3D:H,texSubImage2D:S1,texSubImage3D:C1,compressedTexSubImage2D:O1,scissor:P1,viewport:F1,reset:g2}}function HC(o,e,t,n,i,a,r){const s=i.isWebGL2,u=i.maxTextures,d=i.maxCubemapSize,f=i.maxTextureSize,h=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(z,E){return S?new OffscreenCanvas(z,E):A5("canvas")}function M(z,E,l1,S1){let C1=1;if((z.width>S1||z.height>S1)&&(C1=S1/Math.max(z.width,z.height)),C1<1||E===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const O1=E?ge:Math.floor,H1=O1(C1*z.width),H=O1(C1*z.height);v===void 0&&(v=x(H1,H));const i1=l1?x(H1,H):v;return i1.width=H1,i1.height=H,i1.getContext("2d").drawImage(z,0,0,H1,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+H1+"x"+H+")."),i1}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function b(z){return li(z.width)&&li(z.height)}function C(z){return s?!1:z.wrapS!==l4||z.wrapT!==l4||z.minFilter!==b3&&z.minFilter!==Y3}function w(z,E){return z.generateMipmaps&&E&&z.minFilter!==b3&&z.minFilter!==Y3}function I(z){o.generateMipmap(z)}function T(z,E,l1,S1,C1=!1){if(s===!1)return E;if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let O1=E;return E===6403&&(l1===5126&&(O1=33326),l1===5131&&(O1=33325),l1===5121&&(O1=33321)),E===33319&&(l1===5126&&(O1=33328),l1===5131&&(O1=33327),l1===5121&&(O1=33323)),E===6408&&(l1===5126&&(O1=34836),l1===5131&&(O1=34842),l1===5121&&(O1=S1===U2&&C1===!1?35907:32856),l1===32819&&(O1=32854),l1===32820&&(O1=32855)),(O1===33325||O1===33326||O1===33327||O1===33328||O1===34842||O1===34836)&&e.get("EXT_color_buffer_float"),O1}function D(z,E,l1){return w(z,l1)===!0||z.isFramebufferTexture&&z.minFilter!==b3&&z.minFilter!==Y3?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function N(z){return z===b3||z===Un||z===Nn?9728:9729}function V(z){const E=z.target;E.removeEventListener("dispose",V),$(E),E.isVideoTexture&&y.delete(E)}function q(z){const E=z.target;E.removeEventListener("dispose",q),B(E)}function $(z){const E=n.get(z);if(E.__webglInit===void 0)return;const l1=z.source,S1=_.get(l1);if(S1){const C1=S1[E.__cacheKey];C1.usedTimes--,C1.usedTimes===0&&k(z),Object.keys(S1).length===0&&_.delete(l1)}n.remove(z)}function k(z){const E=n.get(z);o.deleteTexture(E.__webglTexture);const l1=z.source,S1=_.get(l1);delete S1[E.__cacheKey],r.memory.textures--}function B(z){const E=z.texture,l1=n.get(z),S1=n.get(E);if(S1.__webglTexture!==void 0&&(o.deleteTexture(S1.__webglTexture),r.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let C1=0;C1<6;C1++)o.deleteFramebuffer(l1.__webglFramebuffer[C1]),l1.__webglDepthbuffer&&o.deleteRenderbuffer(l1.__webglDepthbuffer[C1]);else{if(o.deleteFramebuffer(l1.__webglFramebuffer),l1.__webglDepthbuffer&&o.deleteRenderbuffer(l1.__webglDepthbuffer),l1.__webglMultisampledFramebuffer&&o.deleteFramebuffer(l1.__webglMultisampledFramebuffer),l1.__webglColorRenderbuffer)for(let C1=0;C1<l1.__webglColorRenderbuffer.length;C1++)l1.__webglColorRenderbuffer[C1]&&o.deleteRenderbuffer(l1.__webglColorRenderbuffer[C1]);l1.__webglDepthRenderbuffer&&o.deleteRenderbuffer(l1.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let C1=0,O1=E.length;C1<O1;C1++){const H1=n.get(E[C1]);H1.__webglTexture&&(o.deleteTexture(H1.__webglTexture),r.memory.textures--),n.remove(E[C1])}n.remove(E),n.remove(z)}let G=0;function J(){G=0}function O(){const z=G;return z>=u&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+u),G+=1,z}function U(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.encoding),E.join()}function F(z,E){const l1=n.get(z);if(z.isVideoTexture&&n2(z),z.isRenderTargetTexture===!1&&z.version>0&&l1.__version!==z.version){const S1=z.image;if(S1===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(S1.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{m1(l1,z,E);return}}t.bindTexture(3553,l1.__webglTexture,33984+E)}function t1(z,E){const l1=n.get(z);if(z.version>0&&l1.__version!==z.version){m1(l1,z,E);return}t.bindTexture(35866,l1.__webglTexture,33984+E)}function n1(z,E){const l1=n.get(z);if(z.version>0&&l1.__version!==z.version){m1(l1,z,E);return}t.bindTexture(32879,l1.__webglTexture,33984+E)}function u1(z,E){const l1=n.get(z);if(z.version>0&&l1.__version!==z.version){g1(l1,z,E);return}t.bindTexture(34067,l1.__webglTexture,33984+E)}const a1={[fe]:10497,[l4]:33071,[pe]:33648},K={[b3]:9728,[Un]:9984,[Nn]:9986,[Y3]:9729,[Px]:9985,[e6]:9987};function Z(z,E,l1){if(l1?(o.texParameteri(z,10242,a1[E.wrapS]),o.texParameteri(z,10243,a1[E.wrapT]),(z===32879||z===35866)&&o.texParameteri(z,32882,a1[E.wrapR]),o.texParameteri(z,10240,K[E.magFilter]),o.texParameteri(z,10241,K[E.minFilter])):(o.texParameteri(z,10242,33071),o.texParameteri(z,10243,33071),(z===32879||z===35866)&&o.texParameteri(z,32882,33071),(E.wrapS!==l4||E.wrapT!==l4)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(z,10240,N(E.magFilter)),o.texParameteri(z,10241,N(E.minFilter)),E.minFilter!==b3&&E.minFilter!==Y3&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const S1=e.get("EXT_texture_filter_anisotropic");if(E.type===R0&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===w5&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(o.texParameterf(z,S1.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function d1(z,E){let l1=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",V));const S1=E.source;let C1=_.get(S1);C1===void 0&&(C1={},_.set(S1,C1));const O1=U(E);if(O1!==z.__cacheKey){C1[O1]===void 0&&(C1[O1]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,l1=!0),C1[O1].usedTimes++;const H1=C1[z.__cacheKey];H1!==void 0&&(C1[z.__cacheKey].usedTimes--,H1.usedTimes===0&&k(E)),z.__cacheKey=O1,z.__webglTexture=C1[O1].texture}return l1}function m1(z,E,l1){let S1=3553;E.isDataArrayTexture&&(S1=35866),E.isData3DTexture&&(S1=32879);const C1=d1(z,E),O1=E.source;t.bindTexture(S1,z.__webglTexture,33984+l1);const H1=n.get(O1);if(O1.version!==H1.__version||C1===!0){t.activeTexture(33984+l1),o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const H=C(E)&&b(E.image)===!1;let i1=M(E.image,H,!1,f);i1=W1(E,i1);const L1=b(i1)||s,P1=a.convert(E.format,E.encoding);let F1=a.convert(E.type),V1=T(E.internalFormat,P1,F1,E.encoding,E.isVideoTexture);Z(S1,E,L1);let i2;const g2=E.mipmaps,e1=s&&E.isVideoTexture!==!0,U1=H1.__version===void 0||C1===!0,E1=D(E,i1,L1);if(E.isDepthTexture)V1=6402,s?E.type===R0?V1=36012:E.type===E0?V1=33190:E.type===L9?V1=35056:V1=33189:E.type===R0&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===P0&&V1===6402&&E.type!==Ra&&E.type!==E0&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=E0,F1=a.convert(E.type)),E.format===G9&&V1===6402&&(V1=34041,E.type!==L9&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=L9,F1=a.convert(E.type))),U1&&(e1?t.texStorage2D(3553,1,V1,i1.width,i1.height):t.texImage2D(3553,0,V1,i1.width,i1.height,0,P1,F1,null));else if(E.isDataTexture)if(g2.length>0&&L1){e1&&U1&&t.texStorage2D(3553,E1,V1,g2[0].width,g2[0].height);for(let v1=0,I1=g2.length;v1<I1;v1++)i2=g2[v1],e1?t.texSubImage2D(3553,v1,0,0,i2.width,i2.height,P1,F1,i2.data):t.texImage2D(3553,v1,V1,i2.width,i2.height,0,P1,F1,i2.data);E.generateMipmaps=!1}else e1?(U1&&t.texStorage2D(3553,E1,V1,i1.width,i1.height),t.texSubImage2D(3553,0,0,0,i1.width,i1.height,P1,F1,i1.data)):t.texImage2D(3553,0,V1,i1.width,i1.height,0,P1,F1,i1.data);else if(E.isCompressedTexture){e1&&U1&&t.texStorage2D(3553,E1,V1,g2[0].width,g2[0].height);for(let v1=0,I1=g2.length;v1<I1;v1++)i2=g2[v1],E.format!==g4?P1!==null?e1?t.compressedTexSubImage2D(3553,v1,0,0,i2.width,i2.height,P1,i2.data):t.compressedTexImage2D(3553,v1,V1,i2.width,i2.height,0,i2.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e1?t.texSubImage2D(3553,v1,0,0,i2.width,i2.height,P1,F1,i2.data):t.texImage2D(3553,v1,V1,i2.width,i2.height,0,P1,F1,i2.data)}else if(E.isDataArrayTexture)e1?(U1&&t.texStorage3D(35866,E1,V1,i1.width,i1.height,i1.depth),t.texSubImage3D(35866,0,0,0,0,i1.width,i1.height,i1.depth,P1,F1,i1.data)):t.texImage3D(35866,0,V1,i1.width,i1.height,i1.depth,0,P1,F1,i1.data);else if(E.isData3DTexture)e1?(U1&&t.texStorage3D(32879,E1,V1,i1.width,i1.height,i1.depth),t.texSubImage3D(32879,0,0,0,0,i1.width,i1.height,i1.depth,P1,F1,i1.data)):t.texImage3D(32879,0,V1,i1.width,i1.height,i1.depth,0,P1,F1,i1.data);else if(E.isFramebufferTexture){if(U1)if(e1)t.texStorage2D(3553,E1,V1,i1.width,i1.height);else{let v1=i1.width,I1=i1.height;for(let e2=0;e2<E1;e2++)t.texImage2D(3553,e2,V1,v1,I1,0,P1,F1,null),v1>>=1,I1>>=1}}else if(g2.length>0&&L1){e1&&U1&&t.texStorage2D(3553,E1,V1,g2[0].width,g2[0].height);for(let v1=0,I1=g2.length;v1<I1;v1++)i2=g2[v1],e1?t.texSubImage2D(3553,v1,0,0,P1,F1,i2):t.texImage2D(3553,v1,V1,P1,F1,i2);E.generateMipmaps=!1}else e1?(U1&&t.texStorage2D(3553,E1,V1,i1.width,i1.height),t.texSubImage2D(3553,0,0,0,P1,F1,i1)):t.texImage2D(3553,0,V1,P1,F1,i1);w(E,L1)&&I(S1),H1.__version=O1.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function g1(z,E,l1){if(E.image.length!==6)return;const S1=d1(z,E),C1=E.source;t.bindTexture(34067,z.__webglTexture,33984+l1);const O1=n.get(C1);if(C1.version!==O1.__version||S1===!0){t.activeTexture(33984+l1),o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const H1=E.isCompressedTexture||E.image[0].isCompressedTexture,H=E.image[0]&&E.image[0].isDataTexture,i1=[];for(let v1=0;v1<6;v1++)!H1&&!H?i1[v1]=M(E.image[v1],!1,!0,d):i1[v1]=H?E.image[v1].image:E.image[v1],i1[v1]=W1(E,i1[v1]);const L1=i1[0],P1=b(L1)||s,F1=a.convert(E.format,E.encoding),V1=a.convert(E.type),i2=T(E.internalFormat,F1,V1,E.encoding),g2=s&&E.isVideoTexture!==!0,e1=O1.__version===void 0||S1===!0;let U1=D(E,L1,P1);Z(34067,E,P1);let E1;if(H1){g2&&e1&&t.texStorage2D(34067,U1,i2,L1.width,L1.height);for(let v1=0;v1<6;v1++){E1=i1[v1].mipmaps;for(let I1=0;I1<E1.length;I1++){const e2=E1[I1];E.format!==g4?F1!==null?g2?t.compressedTexSubImage2D(34069+v1,I1,0,0,e2.width,e2.height,F1,e2.data):t.compressedTexImage2D(34069+v1,I1,i2,e2.width,e2.height,0,e2.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):g2?t.texSubImage2D(34069+v1,I1,0,0,e2.width,e2.height,F1,V1,e2.data):t.texImage2D(34069+v1,I1,i2,e2.width,e2.height,0,F1,V1,e2.data)}}}else{E1=E.mipmaps,g2&&e1&&(E1.length>0&&U1++,t.texStorage2D(34067,U1,i2,i1[0].width,i1[0].height));for(let v1=0;v1<6;v1++)if(H){g2?t.texSubImage2D(34069+v1,0,0,0,i1[v1].width,i1[v1].height,F1,V1,i1[v1].data):t.texImage2D(34069+v1,0,i2,i1[v1].width,i1[v1].height,0,F1,V1,i1[v1].data);for(let I1=0;I1<E1.length;I1++){const T2=E1[I1].image[v1].image;g2?t.texSubImage2D(34069+v1,I1+1,0,0,T2.width,T2.height,F1,V1,T2.data):t.texImage2D(34069+v1,I1+1,i2,T2.width,T2.height,0,F1,V1,T2.data)}}else{g2?t.texSubImage2D(34069+v1,0,0,0,F1,V1,i1[v1]):t.texImage2D(34069+v1,0,i2,F1,V1,i1[v1]);for(let I1=0;I1<E1.length;I1++){const e2=E1[I1];g2?t.texSubImage2D(34069+v1,I1+1,0,0,F1,V1,e2.image[v1]):t.texImage2D(34069+v1,I1+1,i2,F1,V1,e2.image[v1])}}}w(E,P1)&&I(34067),O1.__version=C1.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function c1(z,E,l1,S1,C1){const O1=a.convert(l1.format,l1.encoding),H1=a.convert(l1.type),H=T(l1.internalFormat,O1,H1,l1.encoding);n.get(E).__hasExternalTextures||(C1===32879||C1===35866?t.texImage3D(C1,0,H,E.width,E.height,E.depth,0,O1,H1,null):t.texImage2D(C1,0,H,E.width,E.height,0,O1,H1,null)),t.bindFramebuffer(36160,z),G1(E)?p.framebufferTexture2DMultisampleEXT(36160,S1,C1,n.get(l1).__webglTexture,0,s2(E)):o.framebufferTexture2D(36160,S1,C1,n.get(l1).__webglTexture,0),t.bindFramebuffer(36160,null)}function z1(z,E,l1){if(o.bindRenderbuffer(36161,z),E.depthBuffer&&!E.stencilBuffer){let S1=33189;if(l1||G1(E)){const C1=E.depthTexture;C1&&C1.isDepthTexture&&(C1.type===R0?S1=36012:C1.type===E0&&(S1=33190));const O1=s2(E);G1(E)?p.renderbufferStorageMultisampleEXT(36161,O1,S1,E.width,E.height):o.renderbufferStorageMultisample(36161,O1,S1,E.width,E.height)}else o.renderbufferStorage(36161,S1,E.width,E.height);o.framebufferRenderbuffer(36160,36096,36161,z)}else if(E.depthBuffer&&E.stencilBuffer){const S1=s2(E);l1&&G1(E)===!1?o.renderbufferStorageMultisample(36161,S1,35056,E.width,E.height):G1(E)?p.renderbufferStorageMultisampleEXT(36161,S1,35056,E.width,E.height):o.renderbufferStorage(36161,34041,E.width,E.height),o.framebufferRenderbuffer(36160,33306,36161,z)}else{const S1=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let C1=0;C1<S1.length;C1++){const O1=S1[C1],H1=a.convert(O1.format,O1.encoding),H=a.convert(O1.type),i1=T(O1.internalFormat,H1,H,O1.encoding),L1=s2(E);l1&&G1(E)===!1?o.renderbufferStorageMultisample(36161,L1,i1,E.width,E.height):G1(E)?p.renderbufferStorageMultisampleEXT(36161,L1,i1,E.width,E.height):o.renderbufferStorage(36161,i1,E.width,E.height)}}o.bindRenderbuffer(36161,null)}function w1(z,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const S1=n.get(E.depthTexture).__webglTexture,C1=s2(E);if(E.depthTexture.format===P0)G1(E)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,S1,0,C1):o.framebufferTexture2D(36160,36096,3553,S1,0);else if(E.depthTexture.format===G9)G1(E)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,S1,0,C1):o.framebufferTexture2D(36160,33306,3553,S1,0);else throw new Error("Unknown depthTexture format")}function x1(z){const E=n.get(z),l1=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!E.__autoAllocateDepthBuffer){if(l1)throw new Error("target.depthTexture not supported in Cube render targets");w1(E.__webglFramebuffer,z)}else if(l1){E.__webglDepthbuffer=[];for(let S1=0;S1<6;S1++)t.bindFramebuffer(36160,E.__webglFramebuffer[S1]),E.__webglDepthbuffer[S1]=o.createRenderbuffer(),z1(E.__webglDepthbuffer[S1],z,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),z1(E.__webglDepthbuffer,z,!1);t.bindFramebuffer(36160,null)}function X1(z,E,l1){const S1=n.get(z);E!==void 0&&c1(S1.__webglFramebuffer,z,z.texture,36064,3553),l1!==void 0&&x1(z)}function Y1(z){const E=z.texture,l1=n.get(z),S1=n.get(E);z.addEventListener("dispose",q),z.isWebGLMultipleRenderTargets!==!0&&(S1.__webglTexture===void 0&&(S1.__webglTexture=o.createTexture()),S1.__version=E.version,r.memory.textures++);const C1=z.isWebGLCubeRenderTarget===!0,O1=z.isWebGLMultipleRenderTargets===!0,H1=b(z)||s;if(C1){l1.__webglFramebuffer=[];for(let H=0;H<6;H++)l1.__webglFramebuffer[H]=o.createFramebuffer()}else{if(l1.__webglFramebuffer=o.createFramebuffer(),O1)if(i.drawBuffers){const H=z.texture;for(let i1=0,L1=H.length;i1<L1;i1++){const P1=n.get(H[i1]);P1.__webglTexture===void 0&&(P1.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&z.samples>0&&G1(z)===!1){const H=O1?E:[E];l1.__webglMultisampledFramebuffer=o.createFramebuffer(),l1.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,l1.__webglMultisampledFramebuffer);for(let i1=0;i1<H.length;i1++){const L1=H[i1];l1.__webglColorRenderbuffer[i1]=o.createRenderbuffer(),o.bindRenderbuffer(36161,l1.__webglColorRenderbuffer[i1]);const P1=a.convert(L1.format,L1.encoding),F1=a.convert(L1.type),V1=T(L1.internalFormat,P1,F1,L1.encoding,z.isXRRenderTarget===!0),i2=s2(z);o.renderbufferStorageMultisample(36161,i2,V1,z.width,z.height),o.framebufferRenderbuffer(36160,36064+i1,36161,l1.__webglColorRenderbuffer[i1])}o.bindRenderbuffer(36161,null),z.depthBuffer&&(l1.__webglDepthRenderbuffer=o.createRenderbuffer(),z1(l1.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(36160,null)}}if(C1){t.bindTexture(34067,S1.__webglTexture),Z(34067,E,H1);for(let H=0;H<6;H++)c1(l1.__webglFramebuffer[H],z,E,36064,34069+H);w(E,H1)&&I(34067),t.unbindTexture()}else if(O1){const H=z.texture;for(let i1=0,L1=H.length;i1<L1;i1++){const P1=H[i1],F1=n.get(P1);t.bindTexture(3553,F1.__webglTexture),Z(3553,P1,H1),c1(l1.__webglFramebuffer,z,P1,36064+i1,3553),w(P1,H1)&&I(3553)}t.unbindTexture()}else{let H=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(s?H=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,S1.__webglTexture),Z(H,E,H1),c1(l1.__webglFramebuffer,z,E,36064,H),w(E,H1)&&I(H),t.unbindTexture()}z.depthBuffer&&x1(z)}function $1(z){const E=b(z)||s,l1=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let S1=0,C1=l1.length;S1<C1;S1++){const O1=l1[S1];if(w(O1,E)){const H1=z.isWebGLCubeRenderTarget?34067:3553,H=n.get(O1).__webglTexture;t.bindTexture(H1,H),I(H1),t.unbindTexture()}}}function t2(z){if(s&&z.samples>0&&G1(z)===!1){const E=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],l1=z.width,S1=z.height;let C1=16384;const O1=[],H1=z.stencilBuffer?33306:36096,H=n.get(z),i1=z.isWebGLMultipleRenderTargets===!0;if(i1)for(let L1=0;L1<E.length;L1++)t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+L1,36161,null),t.bindFramebuffer(36160,H.__webglFramebuffer),o.framebufferTexture2D(36009,36064+L1,3553,null,0);t.bindFramebuffer(36008,H.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,H.__webglFramebuffer);for(let L1=0;L1<E.length;L1++){O1.push(36064+L1),z.depthBuffer&&O1.push(H1);const P1=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(P1===!1&&(z.depthBuffer&&(C1|=256),z.stencilBuffer&&(C1|=1024)),i1&&o.framebufferRenderbuffer(36008,36064,36161,H.__webglColorRenderbuffer[L1]),P1===!0&&(o.invalidateFramebuffer(36008,[H1]),o.invalidateFramebuffer(36009,[H1])),i1){const F1=n.get(E[L1]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,F1,0)}o.blitFramebuffer(0,0,l1,S1,0,0,l1,S1,C1,9728),g&&o.invalidateFramebuffer(36008,O1)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),i1)for(let L1=0;L1<E.length;L1++){t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+L1,36161,H.__webglColorRenderbuffer[L1]);const P1=n.get(E[L1]).__webglTexture;t.bindFramebuffer(36160,H.__webglFramebuffer),o.framebufferTexture2D(36009,36064+L1,3553,P1,0)}t.bindFramebuffer(36009,H.__webglMultisampledFramebuffer)}}function s2(z){return Math.min(h,z.samples)}function G1(z){const E=n.get(z);return s&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function n2(z){const E=r.render.frame;y.get(z)!==E&&(y.set(z,E),z.update())}function W1(z,E){const l1=z.encoding,S1=z.format,C1=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===me||l1!==V0&&(l1===U2?s===!1?e.has("EXT_sRGB")===!0&&S1===g4?(z.format=me,z.minFilter=Y3,z.generateMipmaps=!1):E=La.sRGBToLinear(E):(S1!==g4||C1!==G0)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",l1)),E}this.allocateTextureUnit=O,this.resetTextureUnits=J,this.setTexture2D=F,this.setTexture2DArray=t1,this.setTexture3D=n1,this.setTextureCube=u1,this.rebindTextures=X1,this.setupRenderTarget=Y1,this.updateRenderTargetMipmap=$1,this.updateMultisampleRenderTarget=t2,this.setupDepthRenderbuffer=x1,this.setupFrameBufferTexture=c1,this.useMultisampledRTT=G1}function $C(o,e,t){const n=t.isWebGL2;function i(a,r=null){let s;if(a===G0)return 5121;if(a===Fx)return 32819;if(a===Bx)return 32820;if(a===kx)return 5120;if(a===Ux)return 5122;if(a===Ra)return 5123;if(a===Nx)return 5124;if(a===E0)return 5125;if(a===R0)return 5126;if(a===w5)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Gx)return 6406;if(a===g4)return 6408;if(a===jx)return 6409;if(a===Wx)return 6410;if(a===P0)return 6402;if(a===G9)return 34041;if(a===Hx)return 6403;if(a===Vx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===me)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===$x)return 36244;if(a===Yx)return 33319;if(a===Jx)return 33320;if(a===Zx)return 36249;if(a===g6||a===v6||a===_6||a===y6)if(r===U2)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===g6)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===v6)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===_6)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===y6)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===g6)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===v6)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===_6)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===y6)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fn||a===Bn||a===Gn||a===Vn)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Fn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Gn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Vn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===qx)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===jn||a===Wn)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===jn)return r===U2?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Wn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Hn||a===$n||a===Yn||a===Jn||a===Zn||a===qn||a===Xn||a===Qn||a===Kn||a===ei||a===ti||a===ni||a===ii||a===oi)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Hn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===$n)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Jn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Xn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Qn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Kn)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ei)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ti)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ni)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ii)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===oi)return r===U2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ai)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===ai)return r===U2?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===L9?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:i}}class YC extends J3{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class z4 extends h3{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JC={type:"move"};class Y6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new z4,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new z4,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new z4,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const s=this._targetRay,u=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){r=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n);if(d.joints[v.jointName]===void 0){const x=new z4;x.matrixAutoUpdate=!1,x.visible=!1,d.joints[v.jointName]=x,d.add(x)}const S=d.joints[v.jointName];_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=_.radius),S.visible=_!==null}const f=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],p=f.position.distanceTo(h.position),g=.02,y=.005;d.inputState.pinching&&p>g+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=g-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(JC)))}return s!==null&&(s.visible=i!==null),u!==null&&(u.visible=a!==null),d!==null&&(d.visible=r!==null),this}}class ZC extends e4{constructor(e,t,n,i,a,r,s,u,d,f){if(f=f!==void 0?f:P0,f!==P0&&f!==G9)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===P0&&(n=E0),n===void 0&&f===G9&&(n=L9),super(null,i,a,r,s,u,f,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:b3,this.minFilter=u!==void 0?u:b3,this.flipY=!1,this.generateMipmaps=!1}}class qC extends Y0{constructor(e,t){super();const n=this;let i=null,a=1,r=null,s="local-floor",u=null,d=null,f=null,h=null,p=null,g=null;const y=t.getContextAttributes();let v=null,_=null;const S=[],x=[],M=new J3;M.layers.enable(1),M.viewport=new s3;const b=new J3;b.layers.enable(2),b.viewport=new s3;const C=[M,b],w=new YC;w.layers.enable(1),w.layers.enable(2);let I=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let F=S[U];return F===void 0&&(F=new Y6,S[U]=F),F.getTargetRaySpace()},this.getControllerGrip=function(U){let F=S[U];return F===void 0&&(F=new Y6,S[U]=F),F.getGripSpace()},this.getHand=function(U){let F=S[U];return F===void 0&&(F=new Y6,S[U]=F),F.getHandSpace()};function D(U){const F=x.indexOf(U.inputSource);if(F===-1)return;const t1=S[F];t1!==void 0&&t1.dispatchEvent({type:U.type,data:U.inputSource})}function N(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",V);for(let U=0;U<S.length;U++){const F=x[U];F!==null&&(x[U]=null,S[U].disconnect(F))}I=null,T=null,e.setRenderTarget(v),p=null,h=null,f=null,i=null,_=null,O.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",N),i.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:p}),_=new j0(p.framebufferWidth,p.framebufferHeight,{format:g4,type:G0,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let F=null,t1=null,n1=null;y.depth&&(n1=y.stencil?35056:33190,F=y.stencil?G9:P0,t1=y.stencil?L9:E0);const u1={colorFormat:32856,depthFormat:n1,scaleFactor:a};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(u1),i.updateRenderState({layers:[h]}),_=new j0(h.textureWidth,h.textureHeight,{format:g4,type:G0,depthTexture:new ZC(h.textureWidth,h.textureHeight,t1,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const a1=e.properties.get(_);a1.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),u=null,r=await i.requestReferenceSpace(s),O.setContext(i),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(U){for(let F=0;F<U.removed.length;F++){const t1=U.removed[F],n1=x.indexOf(t1);n1>=0&&(x[n1]=null,S[n1].dispatchEvent({type:"disconnected",data:t1}))}for(let F=0;F<U.added.length;F++){const t1=U.added[F];let n1=x.indexOf(t1);if(n1===-1){for(let a1=0;a1<S.length;a1++)if(a1>=x.length){x.push(t1),n1=a1;break}else if(x[a1]===null){x[a1]=t1,n1=a1;break}if(n1===-1)break}const u1=S[n1];u1&&u1.dispatchEvent({type:"connected",data:t1})}}const q=new Y,$=new Y;function k(U,F,t1){q.setFromMatrixPosition(F.matrixWorld),$.setFromMatrixPosition(t1.matrixWorld);const n1=q.distanceTo($),u1=F.projectionMatrix.elements,a1=t1.projectionMatrix.elements,K=u1[14]/(u1[10]-1),Z=u1[14]/(u1[10]+1),d1=(u1[9]+1)/u1[5],m1=(u1[9]-1)/u1[5],g1=(u1[8]-1)/u1[0],c1=(a1[8]+1)/a1[0],z1=K*g1,w1=K*c1,x1=n1/(-g1+c1),X1=x1*-g1;F.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(X1),U.translateZ(x1),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Y1=K+x1,$1=Z+x1,t2=z1-X1,s2=w1+(n1-X1),G1=d1*Z/$1*Y1,n2=m1*Z/$1*Y1;U.projectionMatrix.makePerspective(t2,s2,G1,n2,Y1,$1)}function B(U,F){F===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(F.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;w.near=b.near=M.near=U.near,w.far=b.far=M.far=U.far,(I!==w.near||T!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,T=w.far);const F=U.parent,t1=w.cameras;B(w,F);for(let u1=0;u1<t1.length;u1++)B(t1[u1],F);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),U.matrix.copy(w.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const n1=U.children;for(let u1=0,a1=n1.length;u1<a1;u1++)n1[u1].updateMatrixWorld(!0);t1.length===2?k(w,M,b):w.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let G=null;function J(U,F){if(d=F.getViewerPose(u||r),g=F,d!==null){const t1=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let n1=!1;t1.length!==w.cameras.length&&(w.cameras.length=0,n1=!0);for(let u1=0;u1<t1.length;u1++){const a1=t1[u1];let K=null;if(p!==null)K=p.getViewport(a1);else{const d1=f.getViewSubImage(h,a1);K=d1.viewport,u1===0&&(e.setRenderTargetTextures(_,d1.colorTexture,h.ignoreDepthValues?void 0:d1.depthStencilTexture),e.setRenderTarget(_))}let Z=C[u1];Z===void 0&&(Z=new J3,Z.layers.enable(u1),Z.viewport=new s3,C[u1]=Z),Z.matrix.fromArray(a1.transform.matrix),Z.projectionMatrix.fromArray(a1.projectionMatrix),Z.viewport.set(K.x,K.y,K.width,K.height),u1===0&&w.matrix.copy(Z.matrix),n1===!0&&w.cameras.push(Z)}}for(let t1=0;t1<S.length;t1++){const n1=x[t1],u1=S[t1];n1!==null&&u1!==void 0&&u1.update(n1,F,u||r)}G&&G(U,F),g=null}const O=new Va;O.setAnimationLoop(J),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}}function XC(o,e){function t(v,_){v.fogColor.value.copy(_.color),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function n(v,_,S,x,M){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(v,_):_.isMeshToonMaterial?(i(v,_),f(v,_)):_.isMeshPhongMaterial?(i(v,_),d(v,_)):_.isMeshStandardMaterial?(i(v,_),h(v,_),_.isMeshPhysicalMaterial&&p(v,_,M)):_.isMeshMatcapMaterial?(i(v,_),g(v,_)):_.isMeshDepthMaterial?i(v,_):_.isMeshDistanceMaterial?(i(v,_),y(v,_)):_.isMeshNormalMaterial?i(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&r(v,_)):_.isPointsMaterial?s(v,_,S,x):_.isSpriteMaterial?u(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.bumpMap&&(v.bumpMap.value=_.bumpMap,v.bumpScale.value=_.bumpScale,_.side===K3&&(v.bumpScale.value*=-1)),_.displacementMap&&(v.displacementMap.value=_.displacementMap,v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap),_.normalMap&&(v.normalMap.value=_.normalMap,v.normalScale.value.copy(_.normalScale),_.side===K3&&v.normalScale.value.negate()),_.specularMap&&(v.specularMap.value=_.specularMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const S=e.get(_).envMap;if(S&&(v.envMap.value=S,v.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*b}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity);let x;_.map?x=_.map:_.specularMap?x=_.specularMap:_.displacementMap?x=_.displacementMap:_.normalMap?x=_.normalMap:_.bumpMap?x=_.bumpMap:_.roughnessMap?x=_.roughnessMap:_.metalnessMap?x=_.metalnessMap:_.alphaMap?x=_.alphaMap:_.emissiveMap?x=_.emissiveMap:_.clearcoatMap?x=_.clearcoatMap:_.clearcoatNormalMap?x=_.clearcoatNormalMap:_.clearcoatRoughnessMap?x=_.clearcoatRoughnessMap:_.iridescenceMap?x=_.iridescenceMap:_.iridescenceThicknessMap?x=_.iridescenceThicknessMap:_.specularIntensityMap?x=_.specularIntensityMap:_.specularColorMap?x=_.specularColorMap:_.transmissionMap?x=_.transmissionMap:_.thicknessMap?x=_.thicknessMap:_.sheenColorMap?x=_.sheenColorMap:_.sheenRoughnessMap&&(x=_.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),v.uvTransform.value.copy(x.matrix));let M;_.aoMap?M=_.aoMap:_.lightMap&&(M=_.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),v.uv2Transform.value.copy(M.matrix))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity}function r(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function s(v,_,S,x){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*S,v.scale.value=x*.5,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let M;_.map?M=_.map:_.alphaMap&&(M=_.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),v.uvTransform.value.copy(M.matrix))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let S;_.map?S=_.map:_.alphaMap&&(S=_.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),v.uvTransform.value.copy(S.matrix))}function d(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function f(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function h(v,_){v.roughness.value=_.roughness,v.metalness.value=_.metalness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function p(v,_,S){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),v.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===K3&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=S.texture,v.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap)}function g(v,_){_.matcap&&(v.matcap.value=_.matcap)}function y(v,_){v.referencePosition.value.copy(_.referencePosition),v.nearDistance.value=_.nearDistance,v.farDistance.value=_.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function QC(o,e,t,n){let i={},a={},r=[];const s=t.isWebGL2?o.getParameter(35375):0;function u(x,M){const b=M.program;n.uniformBlockBinding(x,b)}function d(x,M){let b=i[x.id];b===void 0&&(y(x),b=f(x),i[x.id]=b,x.addEventListener("dispose",_));const C=M.program;n.updateUBOMapping(x,C);const w=e.render.frame;a[x.id]!==w&&(p(x),a[x.id]=w)}function f(x){const M=h();x.__bindingPointIndex=M;const b=o.createBuffer(),C=x.__size,w=x.usage;return o.bindBuffer(35345,b),o.bufferData(35345,C,w),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,b),b}function h(){for(let x=0;x<s;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const M=i[x.id],b=x.uniforms,C=x.__cache;o.bindBuffer(35345,M);for(let w=0,I=b.length;w<I;w++){const T=b[w];if(g(T,w,C)===!0){const D=T.value,N=T.__offset;typeof D=="number"?(T.__data[0]=D,o.bufferSubData(35345,N,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):D.toArray(T.__data),o.bufferSubData(35345,N,T.__data))}}o.bindBuffer(35345,null)}function g(x,M,b){const C=x.value;if(b[M]===void 0)return typeof C=="number"?b[M]=C:b[M]=C.clone(),!0;if(typeof C=="number"){if(b[M]!==C)return b[M]=C,!0}else{const w=b[M];if(w.equals(C)===!1)return w.copy(C),!0}return!1}function y(x){const M=x.uniforms;let b=0;const C=16;let w=0;for(let I=0,T=M.length;I<T;I++){const D=M[I],N=v(D);if(D.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,I>0){w=b%C;const V=C-w;w!==0&&V-N.boundary<0&&(b+=C-w,D.__offset=b)}b+=N.storage}return w=b%C,w>0&&(b+=C-w),x.__size=b,x.__cache={},this}function v(x){const M=x.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function _(x){const M=x.target;M.removeEventListener("dispose",_);const b=r.indexOf(M.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete a[M.id]}function S(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},a={}}return{bind:u,update:d,dispose:S}}function KC(){const o=A5("canvas");return o.style.display="block",o}function Ya(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:KC(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,a=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,u=o.powerPreference!==void 0?o.powerPreference:"default",d=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=o.alpha!==void 0?o.alpha:!1;let h=null,p=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=V0,this.physicallyCorrectLights=!1,this.toneMapping=k4,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let _=!1,S=0,x=0,M=null,b=-1,C=null;const w=new s3,I=new s3;let T=null,D=e.width,N=e.height,V=1,q=null,$=null;const k=new s3(0,0,D,N),B=new s3(0,0,D,N);let G=!1;const J=new Ga;let O=!1,U=!1,F=null;const t1=new G2,n1=new B1,u1=new Y,a1={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return M===null?V:1}let Z=t;function d1(P,r1){for(let f1=0;f1<P.length;f1++){const o1=P[f1],h1=e.getContext(o1,r1);if(h1!==null)return h1}return null}try{const P={alpha:!0,depth:n,stencil:i,antialias:a,premultipliedAlpha:r,preserveDrawingBuffer:s,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bt}`),e.addEventListener("webglcontextlost",V1,!1),e.addEventListener("webglcontextrestored",i2,!1),e.addEventListener("webglcontextcreationerror",g2,!1),Z===null){const r1=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&r1.shift(),Z=d1(r1,P),Z===null)throw d1(r1)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let m1,g1,c1,z1,w1,x1,X1,Y1,$1,t2,s2,G1,n2,W1,z,E,l1,S1,C1,O1,H1,H,i1,L1;function P1(){m1=new cA(Z),g1=new iA(Z,m1,o),m1.init(g1),H=new $C(Z,m1,g1),c1=new WC(Z,m1,g1),z1=new pA,w1=new RC,x1=new HC(Z,m1,c1,w1,g1,H,z1),X1=new aA(v),Y1=new uA(v),$1=new MS(Z,g1),i1=new tA(Z,m1,$1,g1),t2=new dA(Z,$1,z1,i1),s2=new vA(Z,t2,$1,z1),C1=new gA(Z,g1,x1),E=new oA(w1),G1=new EC(v,X1,Y1,m1,g1,i1,E),n2=new XC(v,w1),W1=new OC,z=new NC(m1,g1),S1=new eA(v,X1,c1,s2,f,r),l1=new jC(v,s2,g1),L1=new QC(Z,z1,g1,c1),O1=new nA(Z,m1,z1,g1),H1=new fA(Z,m1,z1,g1),z1.programs=G1.programs,v.capabilities=g1,v.extensions=m1,v.properties=w1,v.renderLists=W1,v.shadowMap=l1,v.state=c1,v.info=z1}P1();const F1=new qC(v,Z);this.xr=F1,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const P=m1.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=m1.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(D,N,!1))},this.getSize=function(P){return P.set(D,N)},this.setSize=function(P,r1,f1){if(F1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,N=r1,e.width=Math.floor(P*V),e.height=Math.floor(r1*V),f1!==!1&&(e.style.width=P+"px",e.style.height=r1+"px"),this.setViewport(0,0,P,r1)},this.getDrawingBufferSize=function(P){return P.set(D*V,N*V).floor()},this.setDrawingBufferSize=function(P,r1,f1){D=P,N=r1,V=f1,e.width=Math.floor(P*f1),e.height=Math.floor(r1*f1),this.setViewport(0,0,P,r1)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,r1,f1,o1){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,r1,f1,o1),c1.viewport(w.copy(k).multiplyScalar(V).floor())},this.getScissor=function(P){return P.copy(B)},this.setScissor=function(P,r1,f1,o1){P.isVector4?B.set(P.x,P.y,P.z,P.w):B.set(P,r1,f1,o1),c1.scissor(I.copy(B).multiplyScalar(V).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(P){c1.setScissorTest(G=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(S1.getClearColor())},this.setClearColor=function(){S1.setClearColor.apply(S1,arguments)},this.getClearAlpha=function(){return S1.getClearAlpha()},this.setClearAlpha=function(){S1.setClearAlpha.apply(S1,arguments)},this.clear=function(P=!0,r1=!0,f1=!0){let o1=0;P&&(o1|=16384),r1&&(o1|=256),f1&&(o1|=1024),Z.clear(o1)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",V1,!1),e.removeEventListener("webglcontextrestored",i2,!1),e.removeEventListener("webglcontextcreationerror",g2,!1),W1.dispose(),z.dispose(),w1.dispose(),X1.dispose(),Y1.dispose(),s2.dispose(),i1.dispose(),L1.dispose(),G1.dispose(),F1.dispose(),F1.removeEventListener("sessionstart",e2),F1.removeEventListener("sessionend",T2),F&&(F.dispose(),F=null),F2.stop()};function V1(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function i2(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=z1.autoReset,r1=l1.enabled,f1=l1.autoUpdate,o1=l1.needsUpdate,h1=l1.type;P1(),z1.autoReset=P,l1.enabled=r1,l1.autoUpdate=f1,l1.needsUpdate=o1,l1.type=h1}function g2(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function e1(P){const r1=P.target;r1.removeEventListener("dispose",e1),U1(r1)}function U1(P){E1(P),w1.remove(P)}function E1(P){const r1=w1.get(P).programs;r1!==void 0&&(r1.forEach(function(f1){G1.releaseProgram(f1)}),P.isShaderMaterial&&G1.releaseShaderCache(P))}this.renderBufferDirect=function(P,r1,f1,o1,h1,Z1){r1===null&&(r1=a1);const o2=h1.isMesh&&h1.matrixWorld.determinant()<0,l2=ds(P,r1,f1,o1,h1);c1.setMaterial(o1,o2);let a2=f1.index;const x2=f1.attributes.position;if(a2===null){if(x2===void 0||x2.count===0)return}else if(a2.count===0)return;let h2=1;o1.wireframe===!0&&(a2=t2.getWireframeAttribute(f1),h2=2),i1.setup(h1,o1,l2,f1,a2);let m2,k2=O1;a2!==null&&(m2=$1.get(a2),k2=H1,k2.setIndex(m2));const _0=a2!==null?a2.count:x2.count,q0=f1.drawRange.start*h2,X0=f1.drawRange.count*h2,c4=Z1!==null?Z1.start*h2:0,b2=Z1!==null?Z1.count*h2:1/0,Q0=Math.max(q0,c4),H2=Math.min(_0,q0+X0,c4+b2)-1,W3=Math.max(0,H2-Q0+1);if(W3!==0){if(h1.isMesh)o1.wireframe===!0?(c1.setLineWidth(o1.wireframeLinewidth*K()),k2.setMode(1)):k2.setMode(4);else if(h1.isLine){let H4=o1.linewidth;H4===void 0&&(H4=1),c1.setLineWidth(H4*K()),h1.isLineSegments?k2.setMode(1):h1.isLineLoop?k2.setMode(2):k2.setMode(3)}else h1.isPoints?k2.setMode(0):h1.isSprite&&k2.setMode(4);if(h1.isInstancedMesh)k2.renderInstances(Q0,W3,h1.count);else if(f1.isInstancedBufferGeometry){const H4=Math.min(f1.instanceCount,f1._maxInstanceCount);k2.renderInstances(Q0,W3,H4)}else k2.render(Q0,W3)}},this.compile=function(P,r1){function f1(o1,h1,Z1){o1.transparent===!0&&o1.side===m4?(o1.side=K3,o1.needsUpdate=!0,W5(o1,h1,Z1),o1.side=N9,o1.needsUpdate=!0,W5(o1,h1,Z1),o1.side=m4):W5(o1,h1,Z1)}p=z.get(P),p.init(),y.push(p),P.traverseVisible(function(o1){o1.isLight&&o1.layers.test(r1.layers)&&(p.pushLight(o1),o1.castShadow&&p.pushShadow(o1))}),p.setupLights(v.physicallyCorrectLights),P.traverse(function(o1){const h1=o1.material;if(h1)if(Array.isArray(h1))for(let Z1=0;Z1<h1.length;Z1++){const o2=h1[Z1];f1(o2,P,o1)}else f1(h1,P,o1)}),y.pop(),p=null};let v1=null;function I1(P){v1&&v1(P)}function e2(){F2.stop()}function T2(){F2.start()}const F2=new Va;F2.setAnimationLoop(I1),typeof self<"u"&&F2.setContext(self),this.setAnimationLoop=function(P){v1=P,F1.setAnimationLoop(P),P===null?F2.stop():F2.start()},F1.addEventListener("sessionstart",e2),F1.addEventListener("sessionend",T2),this.render=function(P,r1){if(r1!==void 0&&r1.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),r1.parent===null&&r1.matrixWorldAutoUpdate===!0&&r1.updateMatrixWorld(),F1.enabled===!0&&F1.isPresenting===!0&&(F1.cameraAutoUpdate===!0&&F1.updateCamera(r1),r1=F1.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,r1,M),p=z.get(P,y.length),p.init(),y.push(p),t1.multiplyMatrices(r1.projectionMatrix,r1.matrixWorldInverse),J.setFromProjectionMatrix(t1),U=this.localClippingEnabled,O=E.init(this.clippingPlanes,U,r1),h=W1.get(P,g.length),h.init(),g.push(h),W4(P,r1,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(q,$),O===!0&&E.beginShadows();const f1=p.state.shadowsArray;if(l1.render(f1,P,r1),O===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),S1.render(h,P),p.setupLights(v.physicallyCorrectLights),r1.isArrayCamera){const o1=r1.cameras;for(let h1=0,Z1=o1.length;h1<Z1;h1++){const o2=o1[h1];P2(h,P,o2,o2.viewport)}}else P2(h,P,r1);M!==null&&(x1.updateMultisampleRenderTarget(M),x1.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(v,P,r1),i1.resetDefaultState(),b=-1,C=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,g.pop(),g.length>0?h=g[g.length-1]:h=null};function W4(P,r1,f1,o1){if(P.visible===!1)return;if(P.layers.test(r1.layers)){if(P.isGroup)f1=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(r1);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){o1&&u1.setFromMatrixPosition(P.matrixWorld).applyMatrix4(t1);const o2=s2.update(P),l2=P.material;l2.visible&&h.push(P,o2,l2,f1,u1.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==z1.render.frame&&(P.skeleton.update(),P.skeleton.frame=z1.render.frame),!P.frustumCulled||J.intersectsObject(P))){o1&&u1.setFromMatrixPosition(P.matrixWorld).applyMatrix4(t1);const o2=s2.update(P),l2=P.material;if(Array.isArray(l2)){const a2=o2.groups;for(let x2=0,h2=a2.length;x2<h2;x2++){const m2=a2[x2],k2=l2[m2.materialIndex];k2&&k2.visible&&h.push(P,o2,k2,f1,u1.z,m2)}}else l2.visible&&h.push(P,o2,l2,f1,u1.z,null)}}const Z1=P.children;for(let o2=0,l2=Z1.length;o2<l2;o2++)W4(Z1[o2],r1,f1,o1)}function P2(P,r1,f1,o1){const h1=P.opaque,Z1=P.transmissive,o2=P.transparent;p.setupLightsView(f1),Z1.length>0&&S4(h1,r1,f1),o1&&c1.viewport(w.copy(o1)),h1.length>0&&j3(h1,r1,f1),Z1.length>0&&j3(Z1,r1,f1),o2.length>0&&j3(o2,r1,f1),c1.buffers.depth.setTest(!0),c1.buffers.depth.setMask(!0),c1.buffers.color.setMask(!0),c1.setPolygonOffset(!1)}function S4(P,r1,f1){const o1=g1.isWebGL2;F===null&&(F=new j0(1,1,{generateMipmaps:!0,type:m1.has("EXT_color_buffer_half_float")?w5:G0,minFilter:e6,samples:o1&&a===!0?4:0})),v.getDrawingBufferSize(n1),o1?F.setSize(n1.x,n1.y):F.setSize(ge(n1.x),ge(n1.y));const h1=v.getRenderTarget();v.setRenderTarget(F),v.clear();const Z1=v.toneMapping;v.toneMapping=k4,j3(P,r1,f1),v.toneMapping=Z1,x1.updateMultisampleRenderTarget(F),x1.updateRenderTargetMipmap(F),v.setRenderTarget(h1)}function j3(P,r1,f1){const o1=r1.isScene===!0?r1.overrideMaterial:null;for(let h1=0,Z1=P.length;h1<Z1;h1++){const o2=P[h1],l2=o2.object,a2=o2.geometry,x2=o1===null?o2.material:o1,h2=o2.group;l2.layers.test(f1.layers)&&cs(l2,r1,f1,a2,x2,h2)}}function cs(P,r1,f1,o1,h1,Z1){P.onBeforeRender(v,r1,f1,o1,h1,Z1),P.modelViewMatrix.multiplyMatrices(f1.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),h1.onBeforeRender(v,r1,f1,o1,P,Z1),h1.transparent===!0&&h1.side===m4?(h1.side=K3,h1.needsUpdate=!0,v.renderBufferDirect(f1,r1,o1,h1,P,Z1),h1.side=N9,h1.needsUpdate=!0,v.renderBufferDirect(f1,r1,o1,h1,P,Z1),h1.side=m4):v.renderBufferDirect(f1,r1,o1,h1,P,Z1),P.onAfterRender(v,r1,f1,o1,h1,Z1)}function W5(P,r1,f1){r1.isScene!==!0&&(r1=a1);const o1=w1.get(P),h1=p.state.lights,Z1=p.state.shadowsArray,o2=h1.state.version,l2=G1.getParameters(P,h1.state,Z1,r1,f1),a2=G1.getProgramCacheKey(l2);let x2=o1.programs;o1.environment=P.isMeshStandardMaterial?r1.environment:null,o1.fog=r1.fog,o1.envMap=(P.isMeshStandardMaterial?Y1:X1).get(P.envMap||o1.environment),x2===void 0&&(P.addEventListener("dispose",e1),x2=new Map,o1.programs=x2);let h2=x2.get(a2);if(h2!==void 0){if(o1.currentProgram===h2&&o1.lightsStateVersion===o2)return mn(P,l2),h2}else l2.uniforms=G1.getUniforms(P),P.onBuild(f1,l2,v),P.onBeforeCompile(l2,v),h2=G1.acquireProgram(l2,a2),x2.set(a2,h2),o1.uniforms=l2.uniforms;const m2=o1.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(m2.clippingPlanes=E.uniform),mn(P,l2),o1.needsLights=ps(P),o1.lightsStateVersion=o2,o1.needsLights&&(m2.ambientLightColor.value=h1.state.ambient,m2.lightProbe.value=h1.state.probe,m2.directionalLights.value=h1.state.directional,m2.directionalLightShadows.value=h1.state.directionalShadow,m2.spotLights.value=h1.state.spot,m2.spotLightShadows.value=h1.state.spotShadow,m2.rectAreaLights.value=h1.state.rectArea,m2.ltc_1.value=h1.state.rectAreaLTC1,m2.ltc_2.value=h1.state.rectAreaLTC2,m2.pointLights.value=h1.state.point,m2.pointLightShadows.value=h1.state.pointShadow,m2.hemisphereLights.value=h1.state.hemi,m2.directionalShadowMap.value=h1.state.directionalShadowMap,m2.directionalShadowMatrix.value=h1.state.directionalShadowMatrix,m2.spotShadowMap.value=h1.state.spotShadowMap,m2.spotLightMatrix.value=h1.state.spotLightMatrix,m2.spotLightMap.value=h1.state.spotLightMap,m2.pointShadowMap.value=h1.state.pointShadowMap,m2.pointShadowMatrix.value=h1.state.pointShadowMatrix);const k2=h2.getUniforms(),_0=E8.seqWithValue(k2.seq,m2);return o1.currentProgram=h2,o1.uniformsList=_0,h2}function mn(P,r1){const f1=w1.get(P);f1.outputEncoding=r1.outputEncoding,f1.instancing=r1.instancing,f1.skinning=r1.skinning,f1.morphTargets=r1.morphTargets,f1.morphNormals=r1.morphNormals,f1.morphColors=r1.morphColors,f1.morphTargetsCount=r1.morphTargetsCount,f1.numClippingPlanes=r1.numClippingPlanes,f1.numIntersection=r1.numClipIntersection,f1.vertexAlphas=r1.vertexAlphas,f1.vertexTangents=r1.vertexTangents,f1.toneMapping=r1.toneMapping}function ds(P,r1,f1,o1,h1){r1.isScene!==!0&&(r1=a1),x1.resetTextureUnits();const Z1=r1.fog,o2=o1.isMeshStandardMaterial?r1.environment:null,l2=M===null?v.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:V0,a2=(o1.isMeshStandardMaterial?Y1:X1).get(o1.envMap||o2),x2=o1.vertexColors===!0&&!!f1.attributes.color&&f1.attributes.color.itemSize===4,h2=!!o1.normalMap&&!!f1.attributes.tangent,m2=!!f1.morphAttributes.position,k2=!!f1.morphAttributes.normal,_0=!!f1.morphAttributes.color,q0=o1.toneMapped?v.toneMapping:k4,X0=f1.morphAttributes.position||f1.morphAttributes.normal||f1.morphAttributes.color,c4=X0!==void 0?X0.length:0,b2=w1.get(o1),Q0=p.state.lights;if(O===!0&&(U===!0||P!==C)){const R3=P===C&&o1.id===b;E.setState(o1,P,R3)}let H2=!1;o1.version===b2.__version?(b2.needsLights&&b2.lightsStateVersion!==Q0.state.version||b2.outputEncoding!==l2||h1.isInstancedMesh&&b2.instancing===!1||!h1.isInstancedMesh&&b2.instancing===!0||h1.isSkinnedMesh&&b2.skinning===!1||!h1.isSkinnedMesh&&b2.skinning===!0||b2.envMap!==a2||o1.fog===!0&&b2.fog!==Z1||b2.numClippingPlanes!==void 0&&(b2.numClippingPlanes!==E.numPlanes||b2.numIntersection!==E.numIntersection)||b2.vertexAlphas!==x2||b2.vertexTangents!==h2||b2.morphTargets!==m2||b2.morphNormals!==k2||b2.morphColors!==_0||b2.toneMapping!==q0||g1.isWebGL2===!0&&b2.morphTargetsCount!==c4)&&(H2=!0):(H2=!0,b2.__version=o1.version);let W3=b2.currentProgram;H2===!0&&(W3=W5(o1,r1,h1));let H4=!1,X9=!1,l6=!1;const v3=W3.getUniforms(),y0=b2.uniforms;if(c1.useProgram(W3.program)&&(H4=!0,X9=!0,l6=!0),o1.id!==b&&(b=o1.id,X9=!0),H4||C!==P){if(v3.setValue(Z,"projectionMatrix",P.projectionMatrix),g1.logarithmicDepthBuffer&&v3.setValue(Z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),C!==P&&(C=P,X9=!0,l6=!0),o1.isShaderMaterial||o1.isMeshPhongMaterial||o1.isMeshToonMaterial||o1.isMeshStandardMaterial||o1.envMap){const R3=v3.map.cameraPosition;R3!==void 0&&R3.setValue(Z,u1.setFromMatrixPosition(P.matrixWorld))}(o1.isMeshPhongMaterial||o1.isMeshToonMaterial||o1.isMeshLambertMaterial||o1.isMeshBasicMaterial||o1.isMeshStandardMaterial||o1.isShaderMaterial)&&v3.setValue(Z,"isOrthographic",P.isOrthographicCamera===!0),(o1.isMeshPhongMaterial||o1.isMeshToonMaterial||o1.isMeshLambertMaterial||o1.isMeshBasicMaterial||o1.isMeshStandardMaterial||o1.isShaderMaterial||o1.isShadowMaterial||h1.isSkinnedMesh)&&v3.setValue(Z,"viewMatrix",P.matrixWorldInverse)}if(h1.isSkinnedMesh){v3.setOptional(Z,h1,"bindMatrix"),v3.setOptional(Z,h1,"bindMatrixInverse");const R3=h1.skeleton;R3&&(g1.floatVertexTextures?(R3.boneTexture===null&&R3.computeBoneTexture(),v3.setValue(Z,"boneTexture",R3.boneTexture,x1),v3.setValue(Z,"boneTextureSize",R3.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const u6=f1.morphAttributes;if((u6.position!==void 0||u6.normal!==void 0||u6.color!==void 0&&g1.isWebGL2===!0)&&C1.update(h1,f1,o1,W3),(X9||b2.receiveShadow!==h1.receiveShadow)&&(b2.receiveShadow=h1.receiveShadow,v3.setValue(Z,"receiveShadow",h1.receiveShadow)),o1.isMeshGouraudMaterial&&o1.envMap!==null&&(y0.envMap.value=a2,y0.flipEnvMap.value=a2.isCubeTexture&&a2.isRenderTargetTexture===!1?-1:1),X9&&(v3.setValue(Z,"toneMappingExposure",v.toneMappingExposure),b2.needsLights&&fs(y0,l6),Z1&&o1.fog===!0&&n2.refreshFogUniforms(y0,Z1),n2.refreshMaterialUniforms(y0,o1,V,N,F),E8.upload(Z,b2.uniformsList,y0,x1)),o1.isShaderMaterial&&o1.uniformsNeedUpdate===!0&&(E8.upload(Z,b2.uniformsList,y0,x1),o1.uniformsNeedUpdate=!1),o1.isSpriteMaterial&&v3.setValue(Z,"center",h1.center),v3.setValue(Z,"modelViewMatrix",h1.modelViewMatrix),v3.setValue(Z,"normalMatrix",h1.normalMatrix),v3.setValue(Z,"modelMatrix",h1.matrixWorld),o1.isShaderMaterial||o1.isRawShaderMaterial){const R3=o1.uniformsGroups;for(let c6=0,hs=R3.length;c6<hs;c6++)if(g1.isWebGL2){const gn=R3[c6];L1.update(gn,W3),L1.bind(gn,W3)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return W3}function fs(P,r1){P.ambientLightColor.needsUpdate=r1,P.lightProbe.needsUpdate=r1,P.directionalLights.needsUpdate=r1,P.directionalLightShadows.needsUpdate=r1,P.pointLights.needsUpdate=r1,P.pointLightShadows.needsUpdate=r1,P.spotLights.needsUpdate=r1,P.spotLightShadows.needsUpdate=r1,P.rectAreaLights.needsUpdate=r1,P.hemisphereLights.needsUpdate=r1}function ps(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,r1,f1){w1.get(P.texture).__webglTexture=r1,w1.get(P.depthTexture).__webglTexture=f1;const o1=w1.get(P);o1.__hasExternalTextures=!0,o1.__hasExternalTextures&&(o1.__autoAllocateDepthBuffer=f1===void 0,o1.__autoAllocateDepthBuffer||m1.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),o1.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,r1){const f1=w1.get(P);f1.__webglFramebuffer=r1,f1.__useDefaultFramebuffer=r1===void 0},this.setRenderTarget=function(P,r1=0,f1=0){M=P,S=r1,x=f1;let o1=!0;if(P){const a2=w1.get(P);a2.__useDefaultFramebuffer!==void 0?(c1.bindFramebuffer(36160,null),o1=!1):a2.__webglFramebuffer===void 0?x1.setupRenderTarget(P):a2.__hasExternalTextures&&x1.rebindTextures(P,w1.get(P.texture).__webglTexture,w1.get(P.depthTexture).__webglTexture)}let h1=null,Z1=!1,o2=!1;if(P){const a2=P.texture;(a2.isData3DTexture||a2.isDataArrayTexture)&&(o2=!0);const x2=w1.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(h1=x2[r1],Z1=!0):g1.isWebGL2&&P.samples>0&&x1.useMultisampledRTT(P)===!1?h1=w1.get(P).__webglMultisampledFramebuffer:h1=x2,w.copy(P.viewport),I.copy(P.scissor),T=P.scissorTest}else w.copy(k).multiplyScalar(V).floor(),I.copy(B).multiplyScalar(V).floor(),T=G;if(c1.bindFramebuffer(36160,h1)&&g1.drawBuffers&&o1&&c1.drawBuffers(P,h1),c1.viewport(w),c1.scissor(I),c1.setScissorTest(T),Z1){const a2=w1.get(P.texture);Z.framebufferTexture2D(36160,36064,34069+r1,a2.__webglTexture,f1)}else if(o2){const a2=w1.get(P.texture),x2=r1||0;Z.framebufferTextureLayer(36160,36064,a2.__webglTexture,f1||0,x2)}b=-1},this.readRenderTargetPixels=function(P,r1,f1,o1,h1,Z1,o2){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let l2=w1.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&o2!==void 0&&(l2=l2[o2]),l2){c1.bindFramebuffer(36160,l2);try{const a2=P.texture,x2=a2.format,h2=a2.type;if(x2!==g4&&H.convert(x2)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const m2=h2===w5&&(m1.has("EXT_color_buffer_half_float")||g1.isWebGL2&&m1.has("EXT_color_buffer_float"));if(h2!==G0&&H.convert(h2)!==Z.getParameter(35738)&&!(h2===R0&&(g1.isWebGL2||m1.has("OES_texture_float")||m1.has("WEBGL_color_buffer_float")))&&!m2){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}r1>=0&&r1<=P.width-o1&&f1>=0&&f1<=P.height-h1&&Z.readPixels(r1,f1,o1,h1,H.convert(x2),H.convert(h2),Z1)}finally{const a2=M!==null?w1.get(M).__webglFramebuffer:null;c1.bindFramebuffer(36160,a2)}}},this.copyFramebufferToTexture=function(P,r1,f1=0){const o1=Math.pow(2,-f1),h1=Math.floor(r1.image.width*o1),Z1=Math.floor(r1.image.height*o1);x1.setTexture2D(r1,0),Z.copyTexSubImage2D(3553,f1,0,0,P.x,P.y,h1,Z1),c1.unbindTexture()},this.copyTextureToTexture=function(P,r1,f1,o1=0){const h1=r1.image.width,Z1=r1.image.height,o2=H.convert(f1.format),l2=H.convert(f1.type);x1.setTexture2D(f1,0),Z.pixelStorei(37440,f1.flipY),Z.pixelStorei(37441,f1.premultiplyAlpha),Z.pixelStorei(3317,f1.unpackAlignment),r1.isDataTexture?Z.texSubImage2D(3553,o1,P.x,P.y,h1,Z1,o2,l2,r1.image.data):r1.isCompressedTexture?Z.compressedTexSubImage2D(3553,o1,P.x,P.y,r1.mipmaps[0].width,r1.mipmaps[0].height,o2,r1.mipmaps[0].data):Z.texSubImage2D(3553,o1,P.x,P.y,o2,l2,r1.image),o1===0&&f1.generateMipmaps&&Z.generateMipmap(3553),c1.unbindTexture()},this.copyTextureToTexture3D=function(P,r1,f1,o1,h1=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Z1=P.max.x-P.min.x+1,o2=P.max.y-P.min.y+1,l2=P.max.z-P.min.z+1,a2=H.convert(o1.format),x2=H.convert(o1.type);let h2;if(o1.isData3DTexture)x1.setTexture3D(o1,0),h2=32879;else if(o1.isDataArrayTexture)x1.setTexture2DArray(o1,0),h2=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,o1.flipY),Z.pixelStorei(37441,o1.premultiplyAlpha),Z.pixelStorei(3317,o1.unpackAlignment);const m2=Z.getParameter(3314),k2=Z.getParameter(32878),_0=Z.getParameter(3316),q0=Z.getParameter(3315),X0=Z.getParameter(32877),c4=f1.isCompressedTexture?f1.mipmaps[0]:f1.image;Z.pixelStorei(3314,c4.width),Z.pixelStorei(32878,c4.height),Z.pixelStorei(3316,P.min.x),Z.pixelStorei(3315,P.min.y),Z.pixelStorei(32877,P.min.z),f1.isDataTexture||f1.isData3DTexture?Z.texSubImage3D(h2,h1,r1.x,r1.y,r1.z,Z1,o2,l2,a2,x2,c4.data):f1.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(h2,h1,r1.x,r1.y,r1.z,Z1,o2,l2,a2,c4.data)):Z.texSubImage3D(h2,h1,r1.x,r1.y,r1.z,Z1,o2,l2,a2,x2,c4),Z.pixelStorei(3314,m2),Z.pixelStorei(32878,k2),Z.pixelStorei(3316,_0),Z.pixelStorei(3315,q0),Z.pixelStorei(32877,X0),h1===0&&o1.generateMipmaps&&Z.generateMipmap(h2),c1.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?x1.setTextureCube(P,0):P.isData3DTexture?x1.setTexture3D(P,0):P.isDataArrayTexture?x1.setTexture2DArray(P,0):x1.setTexture2D(P,0),c1.unbindTexture()},this.resetState=function(){S=0,x=0,M=null,c1.reset(),i1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class eT extends Ya{}eT.prototype.isWebGL1Renderer=!0;class tT extends h3{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class nT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=he,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=l0()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=l0()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=l0()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _3=new Y;class N8{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_3.fromBufferAttribute(this,t),_3.applyMatrix4(e),this.setXYZ(t,_3.x,_3.y,_3.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_3.fromBufferAttribute(this,t),_3.applyNormalMatrix(e),this.setXYZ(t,_3.x,_3.y,_3.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_3.fromBufferAttribute(this,t),_3.transformDirection(e),this.setXYZ(t,_3.x,_3.y,_3.z);return this}setX(e,t){return this.normalized&&(t=M2(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=M2(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=M2(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=M2(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=n0(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=n0(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=n0(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=n0(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=M2(t,this.array),n=M2(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=M2(t,this.array),n=M2(n,this.array),i=M2(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=M2(t,this.array),n=M2(n,this.array),i=M2(i,this.array),a=M2(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new N3(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new N8(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ja extends J0{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new v2(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let m9;const o5=new Y,g9=new Y,v9=new Y,_9=new B1,a5=new B1,Za=new G2,_8=new Y,r5=new Y,y8=new Y,Vi=new B1,J6=new B1,ji=new B1;class iT extends h3{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",m9===void 0){m9=new E3;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nT(t,5);m9.setIndex([0,1,2,0,2,3]),m9.setAttribute("position",new N8(n,3,0,!1)),m9.setAttribute("uv",new N8(n,2,3,!1))}this.geometry=m9,this.material=e!==void 0?e:new Ja,this.center=new B1(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),g9.setFromMatrixScale(this.matrixWorld),Za.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),v9.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&g9.multiplyScalar(-v9.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;b8(_8.set(-.5,-.5,0),v9,r,g9,i,a),b8(r5.set(.5,-.5,0),v9,r,g9,i,a),b8(y8.set(.5,.5,0),v9,r,g9,i,a),Vi.set(0,0),J6.set(1,0),ji.set(1,1);let s=e.ray.intersectTriangle(_8,r5,y8,!1,o5);if(s===null&&(b8(r5.set(-.5,.5,0),v9,r,g9,i,a),J6.set(0,1),s=e.ray.intersectTriangle(_8,y8,r5,!1,o5),s===null))return;const u=e.ray.origin.distanceTo(o5);u<e.near||u>e.far||t.push({distance:u,point:o5.clone(),uv:p4.getUV(o5,_8,r5,y8,Vi,J6,ji,new B1),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function b8(o,e,t,n,i,a){_9.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(a5.x=a*_9.x-i*_9.y,a5.y=i*_9.x+a*_9.y):a5.copy(_9),o.copy(e),o.x+=a5.x,o.y+=a5.y,o.applyMatrix4(Za)}class qa extends J0{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new v2(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wi=new Y,Hi=new Y,$i=new G2,Z6=new Gt,x8=new N5;class oT extends h3{constructor(e=new E3,t=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Wi.fromBufferAttribute(t,i-1),Hi.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wi.distanceTo(Hi);e.setAttribute("lineDistance",new x3(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),x8.copy(n.boundingSphere),x8.applyMatrix4(i),x8.radius+=a,e.ray.intersectsSphere(x8)===!1)return;$i.copy(i).invert(),Z6.copy(e.ray).applyMatrix4($i);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=s*s,d=new Y,f=new Y,h=new Y,p=new Y,g=this.isLineSegments?2:1,y=n.index,_=n.attributes.position;if(y!==null){const S=Math.max(0,r.start),x=Math.min(y.count,r.start+r.count);for(let M=S,b=x-1;M<b;M+=g){const C=y.getX(M),w=y.getX(M+1);if(d.fromBufferAttribute(_,C),f.fromBufferAttribute(_,w),Z6.distanceSqToSegment(d,f,p,h)>u)continue;p.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(p);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,r.start),x=Math.min(_.count,r.start+r.count);for(let M=S,b=x-1;M<b;M+=g){if(d.fromBufferAttribute(_,M),f.fromBufferAttribute(_,M+1),Z6.distanceSqToSegment(d,f,p,h)>u)continue;p.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(p);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}class jt extends J0{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new v2(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yi=new G2,_e=new Gt,S8=new N5,M8=new Y;class Xa extends h3{constructor(e=new E3,t=new jt){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),S8.copy(n.boundingSphere),S8.applyMatrix4(i),S8.radius+=a,e.ray.intersectsSphere(S8)===!1)return;Yi.copy(i).invert(),_e.copy(e.ray).applyMatrix4(Yi);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=s*s,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let y=p,v=g;y<v;y++){const _=d.getX(y);M8.fromBufferAttribute(h,_),Ji(M8,_,u,i,e,t,this)}}else{const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let y=p,v=g;y<v;y++)M8.fromBufferAttribute(h,y),Ji(M8,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Ji(o,e,t,n,i,a,r){const s=_e.distanceSqToPoint(o);if(s<t){const u=new Y;_e.closestPointToPoint(o,u),u.applyMatrix4(n);const d=i.ray.origin.distanceTo(u);if(d<i.near||d>i.far)return;a.push({distance:d,distanceToRay:Math.sqrt(s),point:u,index:e,face:null,object:r})}}class j4{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let s=0,u=a-1,d;for(;s<=u;)if(i=Math.floor(s+(u-s)/2),d=n[i]-r,d<0)s=i+1;else if(d>0)u=i-1;else{u=i;break}if(i=u,n[i]===r)return i/(a-1);const f=n[i],p=n[i+1]-f,g=(r-f)/p;return(i+g)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),s=this.getPoint(a),u=t||(r.isVector2?new B1:new Y);return u.copy(s).sub(r).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Y,i=[],a=[],r=[],s=new Y,u=new G2;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new Y)}a[0]=new Y,r[0]=new Y;let d=Number.MAX_VALUE;const f=Math.abs(i[0].x),h=Math.abs(i[0].y),p=Math.abs(i[0].z);f<=d&&(d=f,n.set(1,0,0)),h<=d&&(d=h,n.set(0,1,0)),p<=d&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],s),r[0].crossVectors(i[0],a[0]);for(let g=1;g<=e;g++){if(a[g]=a[g-1].clone(),r[g]=r[g-1].clone(),s.crossVectors(i[g-1],i[g]),s.length()>Number.EPSILON){s.normalize();const y=Math.acos(f3(i[g-1].dot(i[g]),-1,1));a[g].applyMatrix4(u.makeRotationAxis(s,y))}r[g].crossVectors(i[g],a[g])}if(t===!0){let g=Math.acos(f3(a[0].dot(a[e]),-1,1));g/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(g=-g);for(let y=1;y<=e;y++)a[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),r[y].crossVectors(i[y],a[y])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qa extends j4{constructor(e=0,t=0,n=1,i=1,a=0,r=Math.PI*2,s=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=s,this.aRotation=u}getPoint(e,t){const n=t||new B1,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const s=this.aStartAngle+e*a;let u=this.aX+this.xRadius*Math.cos(s),d=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=u-this.aX,g=d-this.aY;u=p*f-g*h+this.aX,d=p*h+g*f+this.aY}return n.set(u,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wt extends Qa{constructor(e,t,n,i,a,r){super(e,t,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ht(){let o=0,e=0,t=0,n=0;function i(a,r,s,u){o=a,e=s,t=-3*a+3*r-2*s-u,n=2*a-2*r+s+u}return{initCatmullRom:function(a,r,s,u,d){i(r,s,d*(s-a),d*(u-r))},initNonuniformCatmullRom:function(a,r,s,u,d,f,h){let p=(r-a)/d-(s-a)/(d+f)+(s-r)/f,g=(s-r)/f-(u-r)/(f+h)+(u-s)/h;p*=f,g*=f,i(r,s,p,g)},calc:function(a){const r=a*a,s=r*a;return o+e*a+t*r+n*s}}}const w8=new Y,q6=new Ht,X6=new Ht,Q6=new Ht;class Ka extends j4{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Y){const n=t,i=this.points,a=i.length,r=(a-(this.closed?0:1))*e;let s=Math.floor(r),u=r-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:u===0&&s===a-1&&(s=a-2,u=1);let d,f;this.closed||s>0?d=i[(s-1)%a]:(w8.subVectors(i[0],i[1]).add(i[0]),d=w8);const h=i[s%a],p=i[(s+1)%a];if(this.closed||s+2<a?f=i[(s+2)%a]:(w8.subVectors(i[a-1],i[a-2]).add(i[a-1]),f=w8),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(d.distanceToSquared(h),g),v=Math.pow(h.distanceToSquared(p),g),_=Math.pow(p.distanceToSquared(f),g);v<1e-4&&(v=1),y<1e-4&&(y=v),_<1e-4&&(_=v),q6.initNonuniformCatmullRom(d.x,h.x,p.x,f.x,y,v,_),X6.initNonuniformCatmullRom(d.y,h.y,p.y,f.y,y,v,_),Q6.initNonuniformCatmullRom(d.z,h.z,p.z,f.z,y,v,_)}else this.curveType==="catmullrom"&&(q6.initCatmullRom(d.x,h.x,p.x,f.x,this.tension),X6.initCatmullRom(d.y,h.y,p.y,f.y,this.tension),Q6.initCatmullRom(d.z,h.z,p.z,f.z,this.tension));return n.set(q6.calc(u),X6.calc(u),Q6.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zi(o,e,t,n,i){const a=(n-e)*.5,r=(i-t)*.5,s=o*o,u=o*s;return(2*t-2*n+a+r)*u+(-3*t+3*n-2*a-r)*s+a*o+t}function aT(o,e){const t=1-o;return t*t*e}function rT(o,e){return 2*(1-o)*o*e}function sT(o,e){return o*o*e}function v5(o,e,t,n){return aT(o,e)+rT(o,t)+sT(o,n)}function lT(o,e){const t=1-o;return t*t*t*e}function uT(o,e){const t=1-o;return 3*t*t*o*e}function cT(o,e){return 3*(1-o)*o*o*e}function dT(o,e){return o*o*o*e}function _5(o,e,t,n,i){return lT(o,e)+uT(o,t)+cT(o,n)+dT(o,i)}class fT extends j4{constructor(e=new B1,t=new B1,n=new B1,i=new B1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B1){const n=t,i=this.v0,a=this.v1,r=this.v2,s=this.v3;return n.set(_5(e,i.x,a.x,r.x,s.x),_5(e,i.y,a.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pT extends j4{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,a=this.v1,r=this.v2,s=this.v3;return n.set(_5(e,i.x,a.x,r.x,s.x),_5(e,i.y,a.y,r.y,s.y),_5(e,i.z,a.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hT extends j4{constructor(e=new B1,t=new B1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new B1){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new B1;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mT extends j4{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gT extends j4{constructor(e=new B1,t=new B1,n=new B1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B1){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(v5(e,i.x,a.x,r.x),v5(e,i.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class er extends j4{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,a=this.v1,r=this.v2;return n.set(v5(e,i.x,a.x,r.x),v5(e,i.y,a.y,r.y),v5(e,i.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vT extends j4{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new B1){const n=t,i=this.points,a=(i.length-1)*e,r=Math.floor(a),s=a-r,u=i[r===0?r:r-1],d=i[r],f=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Zi(s,u.x,d.x,f.x,h.x),Zi(s,u.y,d.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B1().fromArray(i))}return this}}var _T=Object.freeze({__proto__:null,ArcCurve:Wt,CatmullRomCurve3:Ka,CubicBezierCurve:fT,CubicBezierCurve3:pT,EllipseCurve:Qa,LineCurve:hT,LineCurve3:mT,QuadraticBezierCurve:gT,QuadraticBezierCurve3:er,SplineCurve:vT});class e0 extends E3{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(r+s,Math.PI);let d=0;const f=[],h=new Y,p=new Y,g=[],y=[],v=[],_=[];for(let S=0;S<=n;S++){const x=[],M=S/n;let b=0;S==0&&r==0?b=.5/t:S==n&&u==Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(i+w*a)*Math.sin(r+M*s),h.y=e*Math.cos(r+M*s),h.z=e*Math.sin(i+w*a)*Math.sin(r+M*s),y.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),_.push(w+b,1-M),x.push(d++)}f.push(x)}for(let S=0;S<n;S++)for(let x=0;x<t;x++){const M=f[S][x+1],b=f[S][x],C=f[S+1][x],w=f[S+1][x+1];(S!==0||r>0)&&g.push(M,b,w),(S!==n-1||u<Math.PI)&&g.push(b,C,w)}this.setIndex(g),this.setAttribute("position",new x3(y,3)),this.setAttribute("normal",new x3(v,3)),this.setAttribute("uv",new x3(_,2))}static fromJSON(e){return new e0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $t extends E3{constructor(e=new er(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:a};const r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const s=new Y,u=new Y,d=new B1;let f=new Y;const h=[],p=[],g=[],y=[];v(),this.setIndex(y),this.setAttribute("position",new x3(h,3)),this.setAttribute("normal",new x3(p,3)),this.setAttribute("uv",new x3(g,2));function v(){for(let M=0;M<t;M++)_(M);_(a===!1?t:0),x(),S()}function _(M){f=e.getPointAt(M/t,f);const b=r.normals[M],C=r.binormals[M];for(let w=0;w<=i;w++){const I=w/i*Math.PI*2,T=Math.sin(I),D=-Math.cos(I);u.x=D*b.x+T*C.x,u.y=D*b.y+T*C.y,u.z=D*b.z+T*C.z,u.normalize(),p.push(u.x,u.y,u.z),s.x=f.x+n*u.x,s.y=f.y+n*u.y,s.z=f.z+n*u.z,h.push(s.x,s.y,s.z)}}function S(){for(let M=1;M<=t;M++)for(let b=1;b<=i;b++){const C=(i+1)*(M-1)+(b-1),w=(i+1)*M+(b-1),I=(i+1)*M+b,T=(i+1)*(M-1)+b;y.push(C,w,T),y.push(w,I,T)}}function x(){for(let M=0;M<=t;M++)for(let b=0;b<=i;b++)d.x=M/t,d.y=b/i,g.push(d.x,d.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $t(new _T[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const qi={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tr{constructor(e,t,n){const i=this;let a=!1,r=0,s=0,u;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){s++,a===!1&&i.onStart!==void 0&&i.onStart(f,r,s),a=!0},this.itemEnd=function(f){r++,i.onProgress!==void 0&&i.onProgress(f,r,s),r===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,h){return d.push(f,h),this},this.removeHandler=function(f){const h=d.indexOf(f);return h!==-1&&d.splice(h,2),this},this.getHandler=function(f){for(let h=0,p=d.length;h<p;h+=2){const g=d[h],y=d[h+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const yT=new tr;class nr{constructor(e){this.manager=e!==void 0?e:yT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class bT extends nr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=qi.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const s=A5("img");function u(){f(),qi.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(h){f(),i&&i(h),a.manager.itemError(e),a.manager.itemEnd(e)}function f(){s.removeEventListener("load",u,!1),s.removeEventListener("error",d,!1)}return s.addEventListener("load",u,!1),s.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class xT extends nr{constructor(e){super(e)}load(e,t,n,i){const a=new e4,r=new bT(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class Xi{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(f3(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bt}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bt);const Qi={type:"change"},K6={type:"start"},Ki={type:"end"};class ST extends Y0{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:K0.ROTATE,MIDDLE:K0.DOLLY,RIGHT:K0.PAN},this.touches={ONE:e9.ROTATE,TWO:e9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",W1),this._domElementKeyEvents=H},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qi),n.update(),a=i.NONE},this.update=function(){const H=new Y,i1=new U4().setFromUnitVectors(e.up,new Y(0,1,0)),L1=i1.clone().invert(),P1=new Y,F1=new U4,V1=2*Math.PI;return function(){const g2=n.object.position;H.copy(g2).sub(n.target),H.applyQuaternion(i1),s.setFromVector3(H),n.autoRotate&&a===i.NONE&&D(I()),n.enableDamping?(s.theta+=u.theta*n.dampingFactor,s.phi+=u.phi*n.dampingFactor):(s.theta+=u.theta,s.phi+=u.phi);let e1=n.minAzimuthAngle,U1=n.maxAzimuthAngle;return isFinite(e1)&&isFinite(U1)&&(e1<-Math.PI?e1+=V1:e1>Math.PI&&(e1-=V1),U1<-Math.PI?U1+=V1:U1>Math.PI&&(U1-=V1),e1<=U1?s.theta=Math.max(e1,Math.min(U1,s.theta)):s.theta=s.theta>(e1+U1)/2?Math.max(e1,s.theta):Math.min(U1,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=d,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),H.setFromSpherical(s),H.applyQuaternion(L1),g2.copy(n.target).add(H),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),f.set(0,0,0)),d=1,h||P1.distanceToSquared(n.object.position)>r||8*(1-F1.dot(n.object.quaternion))>r?(n.dispatchEvent(Qi),P1.copy(n.object.position),F1.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",l1),n.domElement.removeEventListener("pointerdown",X1),n.domElement.removeEventListener("pointercancel",t2),n.domElement.removeEventListener("wheel",n2),n.domElement.removeEventListener("pointermove",Y1),n.domElement.removeEventListener("pointerup",$1),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",W1)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const r=1e-6,s=new Xi,u=new Xi;let d=1;const f=new Y;let h=!1;const p=new B1,g=new B1,y=new B1,v=new B1,_=new B1,S=new B1,x=new B1,M=new B1,b=new B1,C=[],w={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function D(H){u.theta-=H}function N(H){u.phi-=H}const V=function(){const H=new Y;return function(L1,P1){H.setFromMatrixColumn(P1,0),H.multiplyScalar(-L1),f.add(H)}}(),q=function(){const H=new Y;return function(L1,P1){n.screenSpacePanning===!0?H.setFromMatrixColumn(P1,1):(H.setFromMatrixColumn(P1,0),H.crossVectors(n.object.up,H)),H.multiplyScalar(L1),f.add(H)}}(),$=function(){const H=new Y;return function(L1,P1){const F1=n.domElement;if(n.object.isPerspectiveCamera){const V1=n.object.position;H.copy(V1).sub(n.target);let i2=H.length();i2*=Math.tan(n.object.fov/2*Math.PI/180),V(2*L1*i2/F1.clientHeight,n.object.matrix),q(2*P1*i2/F1.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(L1*(n.object.right-n.object.left)/n.object.zoom/F1.clientWidth,n.object.matrix),q(P1*(n.object.top-n.object.bottom)/n.object.zoom/F1.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(H){n.object.isPerspectiveCamera?d/=H:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*H)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(H){n.object.isPerspectiveCamera?d*=H:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/H)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(H){p.set(H.clientX,H.clientY)}function J(H){x.set(H.clientX,H.clientY)}function O(H){v.set(H.clientX,H.clientY)}function U(H){g.set(H.clientX,H.clientY),y.subVectors(g,p).multiplyScalar(n.rotateSpeed);const i1=n.domElement;D(2*Math.PI*y.x/i1.clientHeight),N(2*Math.PI*y.y/i1.clientHeight),p.copy(g),n.update()}function F(H){M.set(H.clientX,H.clientY),b.subVectors(M,x),b.y>0?k(T()):b.y<0&&B(T()),x.copy(M),n.update()}function t1(H){_.set(H.clientX,H.clientY),S.subVectors(_,v).multiplyScalar(n.panSpeed),$(S.x,S.y),v.copy(_),n.update()}function n1(H){H.deltaY<0?B(T()):H.deltaY>0&&k(T()),n.update()}function u1(H){let i1=!1;switch(H.code){case n.keys.UP:$(0,n.keyPanSpeed),i1=!0;break;case n.keys.BOTTOM:$(0,-n.keyPanSpeed),i1=!0;break;case n.keys.LEFT:$(n.keyPanSpeed,0),i1=!0;break;case n.keys.RIGHT:$(-n.keyPanSpeed,0),i1=!0;break}i1&&(H.preventDefault(),n.update())}function a1(){if(C.length===1)p.set(C[0].pageX,C[0].pageY);else{const H=.5*(C[0].pageX+C[1].pageX),i1=.5*(C[0].pageY+C[1].pageY);p.set(H,i1)}}function K(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const H=.5*(C[0].pageX+C[1].pageX),i1=.5*(C[0].pageY+C[1].pageY);v.set(H,i1)}}function Z(){const H=C[0].pageX-C[1].pageX,i1=C[0].pageY-C[1].pageY,L1=Math.sqrt(H*H+i1*i1);x.set(0,L1)}function d1(){n.enableZoom&&Z(),n.enablePan&&K()}function m1(){n.enableZoom&&Z(),n.enableRotate&&a1()}function g1(H){if(C.length==1)g.set(H.pageX,H.pageY);else{const L1=H1(H),P1=.5*(H.pageX+L1.x),F1=.5*(H.pageY+L1.y);g.set(P1,F1)}y.subVectors(g,p).multiplyScalar(n.rotateSpeed);const i1=n.domElement;D(2*Math.PI*y.x/i1.clientHeight),N(2*Math.PI*y.y/i1.clientHeight),p.copy(g)}function c1(H){if(C.length===1)_.set(H.pageX,H.pageY);else{const i1=H1(H),L1=.5*(H.pageX+i1.x),P1=.5*(H.pageY+i1.y);_.set(L1,P1)}S.subVectors(_,v).multiplyScalar(n.panSpeed),$(S.x,S.y),v.copy(_)}function z1(H){const i1=H1(H),L1=H.pageX-i1.x,P1=H.pageY-i1.y,F1=Math.sqrt(L1*L1+P1*P1);M.set(0,F1),b.set(0,Math.pow(M.y/x.y,n.zoomSpeed)),k(b.y),x.copy(M)}function w1(H){n.enableZoom&&z1(H),n.enablePan&&c1(H)}function x1(H){n.enableZoom&&z1(H),n.enableRotate&&g1(H)}function X1(H){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(H.pointerId),n.domElement.addEventListener("pointermove",Y1),n.domElement.addEventListener("pointerup",$1)),S1(H),H.pointerType==="touch"?z(H):s2(H))}function Y1(H){n.enabled!==!1&&(H.pointerType==="touch"?E(H):G1(H))}function $1(H){C1(H),C.length===0&&(n.domElement.releasePointerCapture(H.pointerId),n.domElement.removeEventListener("pointermove",Y1),n.domElement.removeEventListener("pointerup",$1)),n.dispatchEvent(Ki),a=i.NONE}function t2(H){C1(H)}function s2(H){let i1;switch(H.button){case 0:i1=n.mouseButtons.LEFT;break;case 1:i1=n.mouseButtons.MIDDLE;break;case 2:i1=n.mouseButtons.RIGHT;break;default:i1=-1}switch(i1){case K0.DOLLY:if(n.enableZoom===!1)return;J(H),a=i.DOLLY;break;case K0.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enablePan===!1)return;O(H),a=i.PAN}else{if(n.enableRotate===!1)return;G(H),a=i.ROTATE}break;case K0.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enableRotate===!1)return;G(H),a=i.ROTATE}else{if(n.enablePan===!1)return;O(H),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(K6)}function G1(H){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;U(H);break;case i.DOLLY:if(n.enableZoom===!1)return;F(H);break;case i.PAN:if(n.enablePan===!1)return;t1(H);break}}function n2(H){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(H.preventDefault(),n.dispatchEvent(K6),n1(H),n.dispatchEvent(Ki))}function W1(H){n.enabled===!1||n.enablePan===!1||u1(H)}function z(H){switch(O1(H),C.length){case 1:switch(n.touches.ONE){case e9.ROTATE:if(n.enableRotate===!1)return;a1(),a=i.TOUCH_ROTATE;break;case e9.PAN:if(n.enablePan===!1)return;K(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case e9.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;d1(),a=i.TOUCH_DOLLY_PAN;break;case e9.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;m1(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(K6)}function E(H){switch(O1(H),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;g1(H),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;c1(H),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w1(H),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;x1(H),n.update();break;default:a=i.NONE}}function l1(H){n.enabled!==!1&&H.preventDefault()}function S1(H){C.push(H)}function C1(H){delete w[H.pointerId];for(let i1=0;i1<C.length;i1++)if(C[i1].pointerId==H.pointerId){C.splice(i1,1);return}}function O1(H){let i1=w[H.pointerId];i1===void 0&&(i1=new B1,w[H.pointerId]=i1),i1.set(H.pageX,H.pageY)}function H1(H){const i1=H.pointerId===C[0].pointerId?C[1]:C[0];return w[i1.pointerId]}n.domElement.addEventListener("contextmenu",l1),n.domElement.addEventListener("pointerdown",X1),n.domElement.addEventListener("pointercancel",t2),n.domElement.addEventListener("wheel",n2,{passive:!1}),this.update()}}class MT{constructor(e){Q(this,"scene");Q(this,"camera");Q(this,"renderer");Q(this,"controls");Q(this,"dom");this.dom=e,this.initScenes(),this.setControls()}initScenes(){this.scene=new tT,this.camera=new J3(45,window.innerWidth/window.innerHeight,1,1e5),this.camera.position.set(0,30,-250),this.renderer=new Ya({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.dom.appendChild(this.renderer.domElement)}setControls(){this.controls=new ST(this.camera,this.renderer.domElement),this.controls.autoRotateSpeed=3,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enableZoom=!0,this.controls.minDistance=100,this.controls.maxDistance=300,this.controls.enablePan=!1}}const wT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA/CAYAAAC8aKvcAAAOHElEQVRogb2b268dVR3Hv3Pb+1zYqR7hGBCIgqg0LdbwgGJU5MEoMSQSfdEQJSbGBFFfjDz4D5AYDQneEh4wchENkcgDii8QUxBKEUpRaAqFFmlt6UG6z+m+zMwas37ru9asmT2zz96nhWmms8/ec1mf9fut322tCVAUeAe24Cze8qw2MD6Da2eF2gq8D9l2/ZY6YisSbmtA/ft20Ee9366Z2vD6b23nzgwxD3ATQND42QL1Gq5ZbPhuUGtw3/u72iFtn5t+b4GYDXia9MxnH9JCdbzzXp9BtS9kg8c82o6wHVDCz9MJtYZvDtwG2wyqIS1cl3/rLdkEOK3BjlBIB/jwVfAtQc8LPAlbB7WQGnCNR4h5NMd+A3iPjcxQCPgK/04FUjlwX+KT0p4Jeh7g6bAnEDrQPkIB1HAx94jXnW4AXkKB3INehKrAb0BVJG6lXYU+K8CTsFaFVwlopbqMUCS6iBADAmvIEUI56n3Aay28hVzkMRcg5TpgCCXwGrwHJbDn8bhF6GnAzbB1Fe4hFIkmAhRiAaFAdhBiTNiUx5C7vyk2TB8TKAHt8Kjhu1AOXEP70n4bagr0XMD1cTsJq1V4mbB10ByRQCYIkSEUyBghUgTyr74VAlsgg0Is6qwEXgN35LscI0IPCF4f21dCzSLpOnCTRa7CHkfoVLgvEBG6AhaJRJX8HckxF8mG7pgR2JeyEtxCrsjkqhLadJ3ZxwSvS9uq+HGoWdTbB54N1qqwHau6OYuuWQZU22SNoHcfOKe0rZQLNiQkdg6FgHdJ5exc5B7ys36Cht5Avgl0HdhBt8XSJXwbbCpgZt+QEWrsseLn2APXMoUbwWHlKQUNlIHO3TEWfcjlOnBgiIDYYbpD+tI+4AQg0D0RkPbTE6D2aVbCzb5WS9daYztmBzI+I1HhnHDgHrhjgpTQhbfrRhcO2OAqwipKN5SxmNFBZe6z3vVdR8ixjAwDSjxBXpF0acjsmPahi7qEJy1y3UCl0uAqrDZPEJkk/JwIbsbfIzomJchaOcsOjgTajFe43UKm0k0Fh1cq/wfYALAs0ZfpFr0toBCvsSr+v3AdWuObnh4uOtcTOAOVU4192EycUoJI+jsRncjlO3OOkqOVdFgzWlqyRro5YSMXdhiNyDlgQjlfx+gF3Vch3bnBqKwr3wU11a7Ax43Gypdul9FTJg80bmZIiYWeCofiSDpsRofRc8epOxiKFByLdrPqDFFno8a5dK3RCCVXGXnHDsCYO0XwBdEB5WKDUsqoSzqsgDZJt0PpDuhnc7oda6SyCmxXfjVpw4JWtINX49aHrsANn1jGqjiUAEsSTOo9kBhraVcPqw/uxFcOXo0fy3WBIJj7QEKPDiJ03LNGNI6KGjdi+/p0maWUJ3z+5BiuS9dY5cAZnCFVWnkSziVsMI0qCM5c6T0Rzv/yebjyunNxw/4NPH/XG3jq9sM4qMfiDy7Gpd88H1ftXMaOMEB0coyjMhqN9TfRWU6pFpQiOATsv658Zz1Am5SdpKeP4Q5H14BuBYIYMoqKZAQF4npiSjlxUoEZUfvW8eLnV3CBBrriHOz62Uew6ycfwpq+/UqCFf9x+zbwEoGtCwJNViGmzQLHMtojicJSOrUlIhspG9DJsVxRabiTrDontWwn5Rj2gws7hgMaKzN+u1bK1z6Dh395BA8qMwphQX3YvEB+xxH8+dq9+CuUAHedLSicAUwq9qAQ02baYpOUAWP6DveG6orvE0udt+oM5q/6hmPGxoXYYhM2+g3IKeEqvEDffAD7btyPe09lWK834FSO9Rv3475bDmC/gNrrAsLa+ykPWLfB+nircZEnHLRXWCYl7G9rvIFN8TIvRLQBBdxjSott8p2EDkSg7z2KN297FX+vP+K2Q9h933GcdGPfQvqwQU2yftgasnttZoZadaVWV5scw349SjGUy+h5lah1QEmHdCplA6pRV8JHW8l3xqaDKtvYXN9hyGhHrqLTySTIDOnHfV9uDZVi7q2vPM32DrzKS61A2CzhujpolKGXz2YCbx4WUNohpV3frZQKJKoBWJm7J57qxtSOqFGqNloLvfaMvcJC3KDKnnuartKxdyM/gbf/lJH0P6/Cd+7ejmu3L+EcRkdlNFaUDW8FVpWILPY6L7r8HPR+uwPX7L0K3yZswEA0ZBJh2hQ1j9lJpLYt8VS56s1sPuvAP7SEHbt6uO7r5yN/+TQOPHwS//75Ybx8aMDuMncJi2Kygwuwuca/iqpesoCl71+EHV96Hz522TIuDYDorbHoXfncQqKvZsjEq5bODDzH9t8hXtu2jIt1wz68hMtvWcLlN18I9a/TeO2hN/HKr47gP0cGKIp6eUcDG40ILlrEwnc/gEuvX8UHty/hojCods6xDK+6Dp+llD5uPkunh0HFLel00Oa+OttJGWCk6CAWn9hhcLCADAuIsKTLbvfsxBe/topvJNr71TZVQD23jqMnUoy+sIJL/F8fWcOhc2Ms7Orh/XVIvaUFBvccxf03vYBHxCyFUuQ5LSW+BENJGHWtJcFYYnCbaXWRN6SLxXTgIWH1rm+f0HUoxsq5lAIkHtYx8ue24YI7t+NbWspnQ3MODPDSTftx9+Nv4w2BVQQOcRrAUHbtNDOMERO4EDHlFWBT75KkY9JoDVgRtFvmZSSKhbaIJZnQpXb6b/XYW1i77An8+heH8cBI1xa3uOlrbz+CBz+6G3c+fgprrIIolzsX/Ke423Rxie1eaVd6H7h60pgZqQXORc5KHIyFtQ0JJGPNGern3zuAJz+zB3e8sI5X5kXev4FDn96D3/zwReyRlFG5aoiSCNqmk2Gt4LfINtpZjJE3TdMAXJ2s0ieOWPXvUYk77NvcA8xZobBHrySz5xTWdjyBe376Gv4y1DXHTbahwvi2V/G3nf/AH/b2JbnIK+Udv1P1nslTlcuJcwrHlg7s1t8s8PBPSL2b5HIjW5lQ8sCqZLNKacakGumPDuKZTz2Nu55fx+E25H3rOPzJp/C7Ww/iWXmKKdqlrvrRBB1RwiGj+LE3PTPmsKxPw7YGHgNvHsdCj1kcjydUuCy2hXJ2yupTah//7CmcvOJJ/PH+Y6Kmle33x/D0x5/En55bF6mOJW4yOmafnk4U9eyzQ5G00b6uVC2NVvrqXCvbhhMF67pa91j47rK+kLk4p1ThyGtYwMYGtV1hvG9dEvyqdPs4BmPgxuxWe33Ke6WuIyMPHmKbq9IdcB7KGt3+pIT9wKNwZR57or7wBKGP03BELKermhqHkorbINRWRAIXP+lqg1HTagPMdyMBNKAlfCntVFBCT8LV4rwxYtpwrUFhW8OqggbgctNS3sv+HdHsL9Iih5zcCpksKmlARkmUsLZWEbhyu4oxCRyZ8T7iuB8LvOmAMbXGSDeu1ajH4muNdG12pbz5pnKSrQJeBy4rfXUpp/TBxmCErGBmrG+lrEimXqoRsJ5s7htAxUGLhHXUVHA4WFhIFm4kXdqGdunGjKjGjcZqohBf1KqWhdSBHuXcrYlYTIpY0BEMpQKSy6i20LGrI5fJuC2nauAmlQ4o4cBBjd2YNuAppV+VbswJNivdrptCbZVum0pX4ctlBgorMseksMxxbBpgZiIsbOFmF+CSQVNFzpMGCXeMFIesSY+pLeX4DRgyBtwjWuvI8xQLMm5Viyq3+uH69KK5sE8VuZBLD+xcrZ0vLJhiGKMylt2qY87xCFHZYaNKG38tv3vjd+SptLlv7FnokNIdenPFk1OmTUyNY7hZtSGKFsgDhgIauNqDlXTBPo+oaFahI5F3nGAy4uJ3Q28uKXWQih1osyArWXj7Bg3V27Mtf5hW8SgmJL3KnuyxdweeL04o5Vjck2lo4CQsUt59Ci/WG7L7f1KLLjOfnBK2sMqZy9QBx96s4chb+oDK3iTlmdZ4wKWPexFiG0KZTVTMleHKMho5YWXYTrDFlXpygfDhXbj+s+/FV/VNH3sLD1z3HB4SQwgXtaWVYaLkrqkDXkIqE+KryLAmRzVlInwCbtZVPGC+HLbmy+AxJWDYUDi3RTh/nYc/N+yHqhY8qUVXTQm+l+9Og8UMJR5/Bs4EJI9CYRUQN2UjsGWO6dwMSrlu5M0FgXGXseYGLeAESsDz2hMRG75WrXLfCzBmWL0zK3BTb5lar/XNZs2FqTUtUjELzi4pzgkpzgVFTrpVYDB4yGrQoZsvNuM25NqODdqTQcVQbQo7D3C5GSmbgKQvbsGYG22qBvI9XHasGI4qNwFmgCNX/jXnRdIlilFTLnbZrgjwF7KYQq7t7CbpbrptZfnwpAHzlzCZWb1yrVaXk16xt2Yr9cZwwqJCIipqoFJvyVJXJGokuyALWVSLoZoJZB4JV310XxIK09snuJqm7+5qCgbLTCLhql9mGtQvx2dMTqz6Q2yCcXkxF6uUS5TK8LFs01zbVuvShRvLYP2oQ/+soTdY9Bvw+wXOPnYZj9e3gFJeZnAZsJqRcHarvh6reTXtTNtWgA2sHctgRvU6i7c9fhfTuQQiLZNIQlbwVYHtAtOI58YMYXtM6K1kR62Z0FzQ877z0L7gVI9nf720XXDatoy4Dm29b88dlatPNa+gndkVnQlwHXrzheJ9hq+JN7PnLxJvWhxuQdvXSNdB3zVgtEKD065NrwGsecD+6nd4tbT2VfBNkO8o8HRoNLzo4c83dxtUeuRVV1B7yaP5PYctweIsADd/rr/G4y8uaZrG9GcINn+TZcuwOANgzPRqD2ovZTW9x4SGcurs7yq9q8CY4eWttnOmbbO6nS01/EwnxKvZ1Bk0pOW+8/626fZOvF06r0Q3285eAwH8H5voqTrwCB3hAAAAAElFTkSuQmCC",AT=Object.freeze(Object.defineProperty({__proto__:null,default:wT},Symbol.toStringTag,{value:"Module"})),CT=""+new URL("../png/label.png",import.meta.url).href,TT=Object.freeze(Object.defineProperty({__proto__:null,default:CT},Symbol.toStringTag,{value:"Module"})),DT=""+new URL("../png/earth.png",import.meta.url).href,ET=Object.freeze(Object.defineProperty({__proto__:null,default:DT},Symbol.toStringTag,{value:"Module"})),RT=""+new URL("../png/glow.png",import.meta.url).href,IT=Object.freeze(Object.defineProperty({__proto__:null,default:RT},Symbol.toStringTag,{value:"Module"})),OT=""+new URL("../png/gradient.png",import.meta.url).href,LT=Object.freeze(Object.defineProperty({__proto__:null,default:OT},Symbol.toStringTag,{value:"Module"})),zT=""+new URL("../png/label-old.png",import.meta.url).href,PT=Object.freeze(Object.defineProperty({__proto__:null,default:zT},Symbol.toStringTag,{value:"Module"})),kT=""+new URL("../png/label.png",import.meta.url).href,UT=Object.freeze(Object.defineProperty({__proto__:null,default:kT},Symbol.toStringTag,{value:"Module"})),NT=""+new URL("../png/light_column.png",import.meta.url).href,FT=Object.freeze(Object.defineProperty({__proto__:null,default:NT},Symbol.toStringTag,{value:"Module"})),BT=""+new URL("../png/redCircle.png",import.meta.url).href,GT=Object.freeze(Object.defineProperty({__proto__:null,default:BT},Symbol.toStringTag,{value:"Module"})),ir=[],eo=Object.assign({"../../images/earth/aircraft.png":AT,"../../images/earth/aperture.png":TT,"../../images/earth/earth.png":ET,"../../images/earth/glow.png":IT,"../../images/earth/gradient.png":LT,"../../images/earth/label-old.png":PT,"../../images/earth/label.png":UT,"../../images/earth/light_column.png":FT,"../../images/earth/redCircle.png":GT});for(let o in eo){const e=o.split("/").pop();e&&ir.push({name:e.split(".")[0],url:eo[o].default})}const VT={textures:ir};class jT{constructor(e){Q(this,"manager");Q(this,"callback");Q(this,"textureLoader");Q(this,"textures");this.callback=e,this.textures={},this.setLoadingManager(),this.loadResources()}setLoadingManager(){this.manager=new tr,this.manager.onStart=()=>{Js()},this.manager.onLoad=()=>{this.callback()},this.manager.onProgress=e=>{Zs()},this.manager.onError=e=>{qs(),window.$message.error("数据加载失败，请刷新重试！")}}loadResources(){this.textureLoader=new xT(this.manager),VT.textures?.forEach(e=>{this.textureLoader.load(e.url,t=>{this.textures[e.name]=t})})}}const C5=(o,e,t)=>{let n=e*Math.PI/180;const i=t*Math.PI/180;n=-n;const a=o*Math.cos(i)*Math.cos(n),r=o*Math.sin(i),s=o*Math.cos(i)*Math.sin(n);return new Y(a,r,s)},to=o=>{const e=new Z9(1,1),t=o.textures.aperture,n=new L4({color:15310696,map:t,transparent:!0,opacity:1,depthWrite:!1}),i=new r3(e,n),a=C5(o.radius*1.001,o.lon,o.lat),r=o.radius*.12;i.scale.set(r,r,r),i.userData.size=r,i.userData.scale=Math.random()*1,i.position.set(a.x,a.y,a.z);const s=new Y(a.x,a.y,a.z).normalize(),u=new Y(0,0,1);return i.quaternion.setFromUnitVectors(u,s),i},no=o=>{const e=o.radius*.3,t=new Z9(o.radius*.05,e);t.rotateX(Math.PI/2),t.translate(0,0,e/2);const n=new L4({map:o.textures.light_column,color:o.index==0?o.punctuation.lightColumn.startColor:o.punctuation.lightColumn.endColor,transparent:!0,side:m4,depthWrite:!1}),i=new r3(t,n),a=new z4;a.add(i,i.clone().rotateZ(Math.PI/2));const r=C5(o.radius,o.lon,o.lat);a.position.set(r.x,r.y,r.z);const s=new Y(r.x,r.y,r.z).normalize(),u=new Y(0,0,1);return a.quaternion.setFromUnitVectors(u,s),a},io=o=>{const e=new Z9(1,1),t=new r3(e,o.material),n=C5(o.radius*1.001,o.lon,o.lat),i=o.radius*.05;t.scale.set(i,i,i),t.position.set(n.x,n.y,n.z);const a=new Y(n.x,n.y,n.z).normalize(),r=new Y(0,0,1);return t.quaternion.setFromUnitVectors(r,a),t},WT=o=>{const e=[];for(let t=0;t<2*Math.PI-.1;t+=2*Math.PI/(o.number||100))e.push([parseFloat((Math.cos(t)*(o.radius||10)).toFixed(2)),0,parseFloat((Math.sin(t)*(o.radius||10)).toFixed(2))]);return o.closed&&e.push(e[0]),e},HT=o=>{const e=[];o.pointList.forEach(i=>e.push(new Y(i[0],i[1],i[2])));const t=new Ka(e),n=new $t(t,o.number||50,o.radius||1,o.radialSegments);return new r3(n,o.material)};function R4(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function or(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var F3={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},j9={duration:.5,overwrite:!1,delay:0},Yt,m3,D2,q3=1e8,w2=1/q3,ye=Math.PI*2,$T=ye/4,YT=0,ar=Math.sqrt,JT=Math.cos,ZT=Math.sin,a3=function(e){return typeof e=="string"},N2=function(e){return typeof e=="function"},F4=function(e){return typeof e=="number"},Jt=function(e){return typeof e>"u"},b4=function(e){return typeof e=="object"},S3=function(e){return e!==!1},Zt=function(){return typeof window<"u"},A8=function(e){return N2(e)||a3(e)},rr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},g3=Array.isArray,be=/(?:-?\.?\d|\.)+/gi,sr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,R9=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,e7=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lr=/[+-]=-?[.\d]+/,ur=/[^,'"\[\]\s]+/gi,qT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,O2,d4,xe,qt,B3={},F8={},cr,dr=function(e){return(F8=W0(e,B3))&&C3},Xt=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},T5=function(e,t){return!t&&console.warn(e)},fr=function(e,t){return e&&(B3[e]=t)&&F8&&(F8[e]=t)||B3},D5=function(){return 0},XT={suppressEvents:!0,isStart:!0,kill:!1},R8={suppressEvents:!0,kill:!1},QT={suppressEvents:!0},Qt={},u0=[],Se={},pr,P3={},t7={},oo=30,I8=[],Kt="",en=function(e){var t=e[0],n,i;if(b4(t)||N2(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=I8.length;i--&&!I8[i].targetTest(t););n=I8[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ur(e[i],n)))||e.splice(i,1);return e},U0=function(e){return e._gsap||en(X3(e))[0]._gsap},hr=function(e,t,n){return(n=e[t])&&N2(n)?e[t]():Jt(n)&&e.getAttribute&&e.getAttribute(t)||n},M3=function(e,t){return(e=e.split(",")).forEach(t)||e},B2=function(e){return Math.round(e*1e5)/1e5||0},o3=function(e){return Math.round(e*1e7)/1e7||0},z9=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},KT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},B8=function(){var e=u0.length,t=u0.slice(0),n,i;for(Se={},u0.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mr=function(e,t,n,i){u0.length&&!m3&&B8(),e.render(t,n,i||m3&&t<0&&(e._initted||e._startAt)),u0.length&&!m3&&B8()},gr=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ur).length<2?t:a3(e)?e.trim():e},vr=function(e){return e},t4=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},eD=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},W0=function(e,t){for(var n in t)e[n]=t[n];return e},ao=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=b4(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},G8=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},y5=function(e){var t=e.parent||O2,n=e.keyframes?eD(g3(e.keyframes)):t4;if(S3(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tD=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},_r=function(e,t,n,i,a){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e[i],s;if(a)for(s=t[a];r&&r[a]>s;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},n6=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t._prev,r=t._next;a?a._next=r:e[n]===t&&(e[n]=r),r?r._prev=a:e[i]===t&&(e[i]=a),t._next=t._prev=t.parent=null},f0=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},N0=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Me=function(e,t,n,i){return e._startAt&&(m3?e._startAt.revert(R8):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},iD=function o(e){return!e||e._ts&&o(e.parent)},ro=function(e){return e._repeat?W9(e._tTime,e=e.duration()+e._rDelay)*e:0},W9=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},V8=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},i6=function(e){return e._end=o3(e._start+(e._tDur/Math.abs(e._ts||e._rts||w2)||0))},o6=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=o3(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),i6(e),n._dirty||N0(n,e)),e},yr=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=V8(e.rawTime(),t),(!t._dur||G5(0,t.totalDuration(),n)-t._tTime>w2)&&t.render(n,!0)),N0(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-w2}},h4=function(e,t,n,i){return t.parent&&f0(t),t._start=o3((F4(n)?n:n||e!==O2?$3(e,n,t):e._time)+t._delay),t._end=o3(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_r(e,t,"_first","_last",e._sort?"_start":0),we(t)||(e._recent=t),i||yr(e,t),e._ts<0&&o6(e,e._tTime),e},br=function(e,t){return(B3.ScrollTrigger||Xt("scrollTrigger",t))&&B3.ScrollTrigger.create(t,e)},xr=function(e,t,n,i,a){if(nn(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!m3&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pr!==k3.frame)return u0.push(e),e._lazy=[a,i],1},oD=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},we=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},aD=function(e,t,n,i){var a=e.ratio,r=t<0||!t&&(!e._start&&oD(e)&&!(!e._initted&&we(e))||(e._ts<0||e._dp._ts<0)&&!we(e))?0:1,s=e._rDelay,u=0,d,f,h;if(s&&e._repeat&&(u=G5(0,e._tDur,t),f=W9(u,s),e._yoyo&&f&1&&(r=1-r),f!==W9(e._tTime,s)&&(a=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==a||m3||i||e._zTime===w2||!t&&e._zTime){if(!e._initted&&xr(e,t,i,n,u))return;for(h=e._zTime,e._zTime=t||(n?w2:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=u,d=e._pt;d;)d.r(r,d.d),d=d._next;t<0&&Me(e,t,n,!0),e._onUpdate&&!n&&U3(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&U3(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&f0(e,1),!n&&!m3&&(U3(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rD=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},H9=function(e,t,n,i){var a=e._repeat,r=o3(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=a?a<0?1e10:o3(r*(a+1)+e._rDelay*a):r,s>0&&!i&&o6(e,e._tTime=e._tDur*s),e.parent&&i6(e),n||N0(e.parent,e),e},so=function(e){return e instanceof y3?N0(e):H9(e,e._dur)},sD={_start:0,endTime:D5,totalDuration:D5},$3=function o(e,t,n){var i=e.labels,a=e._recent||sD,r=e.duration()>=q3?a.endTime(!1):e._dur,s,u,d;return a3(t)&&(isNaN(t)||t in i)?(u=t.charAt(0),d=t.substr(-1)==="%",s=t.indexOf("="),u==="<"||u===">"?(s>=0&&(t=t.replace(/=/,"")),(u==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(s<0?a:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=r),i[t]):(u=parseFloat(t.charAt(s-1)+t.substr(s+1)),d&&n&&(u=u/100*(g3(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+u:r+u)):t==null?r:+t},b5=function(e,t,n){var i=F4(t[1]),a=(i?2:1)+(e<2?0:1),r=t[a],s,u;if(i&&(r.duration=t[1]),r.parent=n,e){for(s=r,u=n;u&&!("immediateRender"in s);)s=u.vars.defaults||{},u=S3(u.vars.inherit)&&u.parent;r.immediateRender=S3(s.immediateRender),e<2?r.runBackwards=1:r.startAt=t[a-1]}return new Y2(t[0],r,t[a+1])},v0=function(e,t){return e||e===0?t(e):t},G5=function(e,t,n){return n<e?e:n>t?t:n},p3=function(e,t){return!a3(e)||!(t=qT.exec(e))?"":t[1]},lD=function(e,t,n){return v0(n,function(i){return G5(e,t,i)})},Ae=[].slice,Sr=function(e,t){return e&&b4(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&b4(e[0]))&&!e.nodeType&&e!==d4},uD=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return a3(i)&&!t||Sr(i,1)?(a=n).push.apply(a,X3(i)):n.push(i)})||n},X3=function(e,t,n){return D2&&!t&&D2.selector?D2.selector(e):a3(e)&&!n&&(xe||!$9())?Ae.call((t||qt).querySelectorAll(e),0):g3(e)?uD(e,n):Sr(e)?Ae.call(e,0):e?[e]:[]},Ce=function(e){return e=X3(e)[0]||T5("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return X3(t,n.querySelectorAll?n:n===e?T5("Invalid scope")||qt.createElement("div"):e)}},Mr=function(e){return e.sort(function(){return .5-Math.random()})},wr=function(e){if(N2(e))return e;var t=b4(e)?e:{each:e},n=F0(t.ease),i=t.from||0,a=parseFloat(t.base)||0,r={},s=i>0&&i<1,u=isNaN(i)||s,d=t.axis,f=i,h=i;return a3(i)?f=h={center:.5,edges:.5,end:1}[i]||0:!s&&u&&(f=i[0],h=i[1]),function(p,g,y){var v=(y||t).length,_=r[v],S,x,M,b,C,w,I,T,D;if(!_){if(D=t.grid==="auto"?0:(t.grid||[1,q3])[1],!D){for(I=-q3;I<(I=y[D++].getBoundingClientRect().left)&&D<v;);D<v&&D--}for(_=r[v]=[],S=u?Math.min(D,v)*f-.5:i%D,x=D===q3?0:u?v*h/D-.5:i/D|0,I=0,T=q3,w=0;w<v;w++)M=w%D-S,b=x-(w/D|0),_[w]=C=d?Math.abs(d==="y"?b:M):ar(M*M+b*b),C>I&&(I=C),C<T&&(T=C);i==="random"&&Mr(_),_.max=I-T,_.min=T,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(D>v?v-1:d?d==="y"?v/D:D:Math.max(D,v/D))||0)*(i==="edges"?-1:1),_.b=v<0?a-v:a,_.u=p3(t.amount||t.each)||0,n=n&&v<0?zr(n):n}return v=(_[p]-_.min)/_.max||0,o3(_.b+(n?n(v):v)*_.v)+_.u}},Te=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=o3(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(F4(n)?0:p3(n))}},Ar=function(e,t){var n=g3(e),i,a;return!n&&b4(e)&&(i=n=e.radius||q3,e.values?(e=X3(e.values),(a=!F4(e[0]))&&(i*=i)):e=Te(e.increment)),v0(t,n?N2(e)?function(r){return a=e(r),Math.abs(a-r)<=i?a:r}:function(r){for(var s=parseFloat(a?r.x:r),u=parseFloat(a?r.y:0),d=q3,f=0,h=e.length,p,g;h--;)a?(p=e[h].x-s,g=e[h].y-u,p=p*p+g*g):p=Math.abs(e[h]-s),p<d&&(d=p,f=h);return f=!i||d<=i?e[f]:r,a||f===r||F4(r)?f:f+p3(r)}:Te(e))},Cr=function(e,t,n,i){return v0(g3(e)?!t:n===!0?!!(n=0):!i,function(){return g3(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cD=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(a,r){return r(a)},i)}},dD=function(e,t){return function(n){return e(parseFloat(n))+(t||p3(n))}},fD=function(e,t,n){return Dr(e,t,0,1,n)},Tr=function(e,t,n){return v0(n,function(i){return e[~~t(i)]})},pD=function o(e,t,n){var i=t-e;return g3(e)?Tr(e,o(0,e.length),t):v0(n,function(a){return(i+(a-e)%i)%i+e})},hD=function o(e,t,n){var i=t-e,a=i*2;return g3(e)?Tr(e,o(0,e.length-1),t):v0(n,function(r){return r=(a+(r-e)%a)%a||0,e+(r>i?a-r:r)})},E5=function(e){for(var t=0,n="",i,a,r,s;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),s=e.charAt(i+7)==="[",a=e.substr(i+7,r-i-7).match(s?ur:be),n+=e.substr(t,i-t)+Cr(s?a:+a[0],s?0:+a[1],+a[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},Dr=function(e,t,n,i,a){var r=t-e,s=i-n;return v0(a,function(u){return n+((u-e)/r*s||0)})},mD=function o(e,t,n,i){var a=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!a){var r=a3(e),s={},u,d,f,h,p;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(g3(e)&&!g3(t)){for(f=[],h=e.length,p=h-2,d=1;d<h;d++)f.push(o(e[d-1],e[d]));h--,a=function(y){y*=h;var v=Math.min(p,~~y);return f[v](y-v)},n=t}else i||(e=W0(g3(e)?[]:{},e));if(!f){for(u in t)tn.call(s,e,u,"get",t[u]);a=function(y){return rn(y,s)||(r?e.p:e)}}}return v0(n,a)},lo=function(e,t,n){var i=e.labels,a=q3,r,s,u;for(r in i)s=i[r]-t,s<0==!!n&&s&&a>(s=Math.abs(s))&&(u=r,a=s);return u},U3=function(e,t,n){var i=e.vars,a=i[t],r=D2,s=e._ctx,u,d,f;if(a)return u=i[t+"Params"],d=i.callbackScope||e,n&&u0.length&&B8(),s&&(D2=s),f=u?a.apply(d,u):a.call(d),D2=r,f},p5=function(e){return f0(e),e.scrollTrigger&&e.scrollTrigger.kill(!!m3),e.progress()<1&&U3(e,"onInterrupt"),e},I9,Er=[],Rr=function(e){if(e)if(e=!e.name&&e.default||e,Zt()||e.headless){var t=e.name,n=N2(e),i=t&&!n&&e.init?function(){this._props=[]}:e,a={init:D5,render:rn,add:tn,kill:ID,modifier:RD,rawVars:0},r={targetTest:0,get:0,getSetter:an,aliases:{},register:0};if($9(),e!==i){if(P3[t])return;t4(i,t4(G8(e,a),r)),W0(i.prototype,W0(a,G8(e,r))),P3[i.prop=t]=i,e.targetTest&&(I8.push(i),Qt[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}fr(t,i),e.register&&e.register(C3,i,w3)}else Er.push(e)},S2=255,h5={aqua:[0,S2,S2],lime:[0,S2,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,S2],navy:[0,0,128],white:[S2,S2,S2],olive:[128,128,0],yellow:[S2,S2,0],orange:[S2,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[S2,0,0],pink:[S2,192,203],cyan:[0,S2,S2],transparent:[S2,S2,S2,0]},n7=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*S2+.5|0},Ir=function(e,t,n){var i=e?F4(e)?[e>>16,e>>8&S2,e&S2]:0:h5.black,a,r,s,u,d,f,h,p,g,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),h5[e])i=h5[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),r=e.charAt(2),s=e.charAt(3),e="#"+a+a+r+r+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&S2,i&S2,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&S2,e&S2]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(be),!t)u=+i[0]%360/360,d=+i[1]/100,f=+i[2]/100,r=f<=.5?f*(d+1):f+d-f*d,a=f*2-r,i.length>3&&(i[3]*=1),i[0]=n7(u+1/3,a,r),i[1]=n7(u,a,r),i[2]=n7(u-1/3,a,r);else if(~e.indexOf("="))return i=e.match(sr),n&&i.length<4&&(i[3]=1),i}else i=e.match(be)||h5.transparent;i=i.map(Number)}return t&&!y&&(a=i[0]/S2,r=i[1]/S2,s=i[2]/S2,h=Math.max(a,r,s),p=Math.min(a,r,s),f=(h+p)/2,h===p?u=d=0:(g=h-p,d=f>.5?g/(2-h-p):g/(h+p),u=h===a?(r-s)/g+(r<s?6:0):h===r?(s-a)/g+2:(a-r)/g+4,u*=60),i[0]=~~(u+.5),i[1]=~~(d*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},Or=function(e){var t=[],n=[],i=-1;return e.split(c0).forEach(function(a){var r=a.match(R9)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},uo=function(e,t,n){var i="",a=(e+i).match(c0),r=t?"hsla(":"rgba(",s=0,u,d,f,h;if(!a)return e;if(a=a.map(function(p){return(p=Ir(p,t,1))&&r+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(f=Or(e),u=n.c,u.join(i)!==f.c.join(i)))for(d=e.replace(c0,"1").split(R9),h=d.length-1;s<h;s++)i+=d[s]+(~u.indexOf(s)?a.shift()||r+"0,0,0,0)":(f.length?f:a.length?a:n).shift());if(!d)for(d=e.split(c0),h=d.length-1;s<h;s++)i+=d[s]+a[s];return i+d[h]},c0=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in h5)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),gD=/hsl[a]?\(/,Lr=function(e){var t=e.join(" "),n;if(c0.lastIndex=0,c0.test(t))return n=gD.test(t),e[1]=uo(e[1],n),e[0]=uo(e[0],n,Or(e[1])),!0},R5,k3=function(){var o=Date.now,e=500,t=33,n=o(),i=n,a=1e3/240,r=a,s=[],u,d,f,h,p,g,y=function v(_){var S=o()-i,x=_===!0,M,b,C,w;if((S>e||S<0)&&(n+=S-t),i+=S,C=i-n,M=C-r,(M>0||x)&&(w=++h.frame,p=C-h.time*1e3,h.time=C=C/1e3,r+=M+(M>=a?4:a-M),b=1),x||(u=d(v)),b)for(g=0;g<s.length;g++)s[g](C,p,w,_)};return h={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return p/(1e3/(_||60))},wake:function(){cr&&(!xe&&Zt()&&(d4=xe=window,qt=d4.document||{},B3.gsap=C3,(d4.gsapVersions||(d4.gsapVersions=[])).push(C3.version),dr(F8||d4.GreenSockGlobals||!d4.gsap&&d4||{}),Er.forEach(Rr)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&h.sleep(),d=f||function(_){return setTimeout(_,r-h.time*1e3+1|0)},R5=1,y(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(u),R5=0,d=D5},lagSmoothing:function(_,S){e=_||1/0,t=Math.min(S||33,e)},fps:function(_){a=1e3/(_||240),r=h.time*1e3+a},add:function(_,S,x){var M=S?function(b,C,w,I){_(b,C,w,I),h.remove(M)}:_;return h.remove(_),s[x?"unshift":"push"](M),$9(),M},remove:function(_,S){~(S=s.indexOf(_))&&s.splice(S,1)&&g>=S&&g--},_listeners:s},h}(),$9=function(){return!R5&&k3.wake()},p2={},vD=/^[\d.\-M][\d.\-,\s]/,_D=/["']/g,yD=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,r=n.length,s,u,d;a<r;a++)u=n[a],s=a!==r-1?u.lastIndexOf(","):u.length,d=u.substr(0,s),t[i]=isNaN(d)?d.replace(_D,"").trim():+d,i=u.substr(s+1).trim();return t},bD=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},xD=function(e){var t=(e+"").split("("),n=p2[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yD(t[1])]:bD(e).split(",").map(gr)):p2._CE&&vD.test(e)?p2._CE("",e):n},zr=function(e){return function(t){return 1-e(1-t)}},Pr=function o(e,t){for(var n=e._first,i;n;)n instanceof y3?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},F0=function(e,t){return e&&(N2(e)?e:p2[e]||xD(e))||t},Z0=function(e,t,n,i){n===void 0&&(n=function(u){return 1-t(1-u)}),i===void 0&&(i=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:i},r;return M3(e,function(s){p2[s]=B3[s]=a,p2[r=s.toLowerCase()]=n;for(var u in a)p2[r+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=p2[s+"."+u]=a[u]}),a},kr=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},i7=function o(e,t,n){var i=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),r=a/ye*(Math.asin(1/i)||0),s=function(f){return f===1?1:i*Math.pow(2,-10*f)*ZT((f-r)*a)+1},u=e==="out"?s:e==="in"?function(d){return 1-s(1-d)}:kr(s);return a=ye/a,u.config=function(d,f){return o(e,d,f)},u},o7=function o(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:kr(n);return i.config=function(a){return o(e,a)},i};M3("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Z0(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});p2.Linear.easeNone=p2.none=p2.Linear.easeIn;Z0("Elastic",i7("in"),i7("out"),i7());(function(o,e){var t=1/e,n=2*t,i=2.5*t,a=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Z0("Bounce",function(r){return 1-a(1-r)},a)})(7.5625,2.75);Z0("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Z0("Circ",function(o){return-(ar(1-o*o)-1)});Z0("Sine",function(o){return o===1?1:-JT(o*$T)+1});Z0("Back",o7("in"),o7("out"),o7());p2.SteppedEase=p2.steps=B3.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),a=t?1:0,r=1-w2;return function(s){return((i*G5(0,r,s)|0)+a)*n}}};j9.ease=p2["quad.out"];M3("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Kt+=o+","+o+"Params,"});var Ur=function(e,t){this.id=YT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hr,this.set=t?t.getSetter:an},I5=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,H9(this,+t.duration,1,1),this.data=t.data,D2&&(this._ctx=D2,D2.data.push(this)),R5||k3.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,H9(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($9(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(o6(this,n),!a._dp||a.parent||yr(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&h4(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===w2||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mr(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ro(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ro(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?W9(this._tTime,a)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-w2?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?V8(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-w2?0:this._rts,this.totalTime(G5(-Math.abs(this._delay),this._tDur,a),i!==!1),i6(this),nD(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($9(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==w2&&(this._tTime-=w2)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&h4(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(S3(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?V8(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=QT);var i=m3;return m3=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),m3=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,so(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,so(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime($3(this,n),S3(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,S3(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-w2:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-w2,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-w2)},e.eventCallback=function(n,i,a){var r=this.vars;return arguments.length>1?(i?(r[n]=i,a&&(r[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(a){var r=N2(n)?n:vr,s=function(){var d=i.then;i.then=null,N2(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=d),a(r),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){p5(this)},o}();t4(I5.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-w2,_prom:0,_ps:!1,_rts:1});var y3=function(o){or(e,o);function e(n,i){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=S3(n.sortChildren),O2&&h4(n.parent||O2,R4(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&br(R4(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(i,a,r){return b5(0,arguments,this),this},t.from=function(i,a,r){return b5(1,arguments,this),this},t.fromTo=function(i,a,r,s){return b5(2,arguments,this),this},t.set=function(i,a,r){return a.duration=0,a.parent=this,y5(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Y2(i,a,$3(this,r),1),this},t.call=function(i,a,r){return h4(this,Y2.delayedCall(0,i,a),r)},t.staggerTo=function(i,a,r,s,u,d,f){return r.duration=a,r.stagger=r.stagger||s,r.onComplete=d,r.onCompleteParams=f,r.parent=this,new Y2(i,r,$3(this,u)),this},t.staggerFrom=function(i,a,r,s,u,d,f){return r.runBackwards=1,y5(r).immediateRender=S3(r.immediateRender),this.staggerTo(i,a,r,s,u,d,f)},t.staggerFromTo=function(i,a,r,s,u,d,f,h){return s.startAt=r,y5(s).immediateRender=S3(s.immediateRender),this.staggerTo(i,a,s,u,d,f,h)},t.render=function(i,a,r){var s=this._time,u=this._dirty?this.totalDuration():this._tDur,d=this._dur,f=i<=0?0:o3(i),h=this._zTime<0!=i<0&&(this._initted||!d),p,g,y,v,_,S,x,M,b,C,w,I;if(this!==O2&&f>u&&i>=0&&(f=u),f!==this._tTime||r||h){if(s!==this._time&&d&&(f+=this._time-s,i+=this._time-s),p=f,b=this._start,M=this._ts,S=!M,h&&(d||(s=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,_=d+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,a,r);if(p=o3(f%_),f===u?(v=this._repeat,p=d):(v=~~(f/_),v&&v===f/_&&(p=d,v--),p>d&&(p=d)),C=W9(this._tTime,_),!s&&this._tTime&&C!==v&&this._tTime-C*_-this._dur<=0&&(C=v),w&&v&1&&(p=d-p,I=1),v!==C&&!this._lock){var T=w&&C&1,D=T===(w&&v&1);if(v<C&&(T=!T),s=T?0:f%d?d:f,this._lock=1,this.render(s||(I?0:o3(v*_)),a,!d)._lock=0,this._tTime=f,!a&&this.parent&&U3(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),s&&s!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,u=this._tDur,D&&(this._lock=2,s=T?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;Pr(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=rD(this,o3(s),o3(p)),x&&(f-=p-(p=x._start))),this._tTime=f,this._time=p,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&p&&!a&&!v&&(U3(this,"onStart"),this._tTime!==f))return this;if(p>=s&&i>=0)for(g=this._first;g;){if(y=g._next,(g._act||p>=g._start)&&g._ts&&x!==g){if(g.parent!==this)return this.render(i,a,r);if(g.render(g._ts>0?(p-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(p-g._start)*g._ts,a,r),p!==this._time||!this._ts&&!S){x=0,y&&(f+=this._zTime=-w2);break}}g=y}else{g=this._last;for(var N=i<0?i:p;g;){if(y=g._prev,(g._act||N<=g._end)&&g._ts&&x!==g){if(g.parent!==this)return this.render(i,a,r);if(g.render(g._ts>0?(N-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(N-g._start)*g._ts,a,r||m3&&(g._initted||g._startAt)),p!==this._time||!this._ts&&!S){x=0,y&&(f+=this._zTime=N?-w2:w2);break}}g=y}}if(x&&!a&&(this.pause(),x.render(p>=s?0:-w2)._zTime=p>=s?1:-1,this._ts))return this._start=b,i6(this),this.render(i,a,r);this._onUpdate&&!a&&U3(this,"onUpdate",!0),(f===u&&this._tTime>=this.totalDuration()||!f&&s)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!d)&&(f===u&&this._ts>0||!f&&this._ts<0)&&f0(this,1),!a&&!(i<0&&!s)&&(f||s||!u)&&(U3(this,f===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,a){var r=this;if(F4(a)||(a=$3(this,a,i)),!(i instanceof I5)){if(g3(i))return i.forEach(function(s){return r.add(s,a)}),this;if(a3(i))return this.addLabel(i,a);if(N2(i))i=Y2.delayedCall(0,i);else return this}return this!==i?h4(this,i,a):this},t.getChildren=function(i,a,r,s){i===void 0&&(i=!0),a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=-q3);for(var u=[],d=this._first;d;)d._start>=s&&(d instanceof Y2?a&&u.push(d):(r&&u.push(d),i&&u.push.apply(u,d.getChildren(!0,a,r)))),d=d._next;return u},t.getById=function(i){for(var a=this.getChildren(1,1,1),r=a.length;r--;)if(a[r].vars.id===i)return a[r]},t.remove=function(i){return a3(i)?this.removeLabel(i):N2(i)?this.killTweensOf(i):(n6(this,i),i===this._recent&&(this._recent=this._last),N0(this))},t.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=o3(k3.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},t.addLabel=function(i,a){return this.labels[i]=$3(this,a),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,a,r){var s=Y2.delayedCall(0,a||D5,r);return s.data="isPause",this._hasPause=1,h4(this,s,$3(this,i))},t.removePause=function(i){var a=this._first;for(i=$3(this,i);a;)a._start===i&&a.data==="isPause"&&f0(a),a=a._next},t.killTweensOf=function(i,a,r){for(var s=this.getTweensOf(i,r),u=s.length;u--;)i0!==s[u]&&s[u].kill(i,a);return this},t.getTweensOf=function(i,a){for(var r=[],s=X3(i),u=this._first,d=F4(a),f;u;)u instanceof Y2?KT(u._targets,s)&&(d?(!i0||u._initted&&u._ts)&&u.globalTime(0)<=a&&u.globalTime(u.totalDuration())>a:!a||u.isActive())&&r.push(u):(f=u.getTweensOf(s,a)).length&&r.push.apply(r,f),u=u._next;return r},t.tweenTo=function(i,a){a=a||{};var r=this,s=$3(r,i),u=a,d=u.startAt,f=u.onStart,h=u.onStartParams,p=u.immediateRender,g,y=Y2.to(r,t4({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(d&&"time"in d?d.time:r._time))/r.timeScale())||w2,onStart:function(){if(r.pause(),!g){var _=a.duration||Math.abs((s-(d&&"time"in d?d.time:r._time))/r.timeScale());y._dur!==_&&H9(y,_,0,1).render(y._time,!0,!0),g=1}f&&f.apply(y,h||[])}},a));return p?y.render(0):y},t.tweenFromTo=function(i,a,r){return this.tweenTo(a,t4({startAt:{time:$3(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),lo(this,$3(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),lo(this,$3(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+w2)},t.shiftChildren=function(i,a,r){r===void 0&&(r=0);for(var s=this._first,u=this.labels,d;s;)s._start>=r&&(s._start+=i,s._end+=i),s=s._next;if(a)for(d in u)u[d]>=r&&(u[d]+=i);return N0(this)},t.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,r;a;)r=a._next,this.remove(a),a=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),N0(this)},t.totalDuration=function(i){var a=0,r=this,s=r._last,u=q3,d,f,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(h=r.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),f=s._start,f>u&&r._sort&&s._ts&&!r._lock?(r._lock=1,h4(r,s,f-s._delay,1)._lock=0):u=f,f<0&&s._ts&&(a-=f,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=f/r._ts,r._time-=f,r._tTime-=f),r.shiftChildren(-f,!1,-1/0),u=0),s._end>a&&s._ts&&(a=s._end),s=d;H9(r,r===O2&&r._time>a?r._time:a,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(O2._ts&&(mr(O2,V8(i,O2)),pr=k3.frame),k3.frame>=oo){oo+=F3.autoSleep||120;var a=O2._first;if((!a||!a._ts)&&F3.autoSleep&&k3._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||k3.sleep()}}},e}(I5);t4(y3.prototype,{_lock:0,_hasPause:0,_forcing:0});var SD=function(e,t,n,i,a,r,s){var u=new w3(this._pt,e,t,0,1,jr,null,a),d=0,f=0,h,p,g,y,v,_,S,x;for(u.b=n,u.e=i,n+="",i+="",(S=~i.indexOf("random("))&&(i=E5(i)),r&&(x=[n,i],r(x,e,t),n=x[0],i=x[1]),p=n.match(e7)||[];h=e7.exec(i);)y=h[0],v=i.substring(d,h.index),g?g=(g+1)%5:v.substr(-5)==="rgba("&&(g=1),y!==p[f++]&&(_=parseFloat(p[f-1])||0,u._pt={_next:u._pt,p:v||f===1?v:",",s:_,c:y.charAt(1)==="="?z9(_,y)-_:parseFloat(y)-_,m:g&&g<4?Math.round:0},d=e7.lastIndex);return u.c=d<i.length?i.substring(d,i.length):"",u.fp=s,(lr.test(i)||S)&&(u.e=0),this._pt=u,u},tn=function(e,t,n,i,a,r,s,u,d,f){N2(i)&&(i=i(a||0,e,r));var h=e[t],p=n!=="get"?n:N2(h)?d?e[t.indexOf("set")||!N2(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():h,g=N2(h)?d?TD:Gr:on,y;if(a3(i)&&(~i.indexOf("random(")&&(i=E5(i)),i.charAt(1)==="="&&(y=z9(p,i)+(p3(p)||0),(y||y===0)&&(i=y))),!f||p!==i||De)return!isNaN(p*i)&&i!==""?(y=new w3(this._pt,e,t,+p||0,i-(p||0),typeof h=="boolean"?ED:Vr,0,g),d&&(y.fp=d),s&&y.modifier(s,this,e),this._pt=y):(!h&&!(t in e)&&Xt(t,i),SD.call(this,e,t,p,i,g,u||F3.stringFilter,d))},MD=function(e,t,n,i,a){if(N2(e)&&(e=x5(e,a,t,n,i)),!b4(e)||e.style&&e.nodeType||g3(e)||rr(e))return a3(e)?x5(e,a,t,n,i):e;var r={},s;for(s in e)r[s]=x5(e[s],a,t,n,i);return r},Nr=function(e,t,n,i,a,r){var s,u,d,f;if(P3[e]&&(s=new P3[e]).init(a,s.rawVars?t[e]:MD(t[e],i,a,r,n),n,i,r)!==!1&&(n._pt=u=new w3(n._pt,a,e,0,1,s.render,s,0,s.priority),n!==I9))for(d=n._ptLookup[n._targets.indexOf(a)],f=s._props.length;f--;)d[s._props[f]]=u;return s},i0,De,nn=function o(e,t,n){var i=e.vars,a=i.ease,r=i.startAt,s=i.immediateRender,u=i.lazy,d=i.onUpdate,f=i.runBackwards,h=i.yoyoEase,p=i.keyframes,g=i.autoRevert,y=e._dur,v=e._startAt,_=e._targets,S=e.parent,x=S&&S.data==="nested"?S.vars.targets:_,M=e._overwrite==="auto"&&!Yt,b=e.timeline,C,w,I,T,D,N,V,q,$,k,B,G,J;if(b&&(!p||!a)&&(a="none"),e._ease=F0(a,j9.ease),e._yEase=h?zr(F0(h===!0?a:h,j9.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!i.runBackwards,!b||p&&!i.stagger){if(q=_[0]?U0(_[0]).harness:0,G=q&&i[q.prop],C=G8(i,Qt),v&&(v._zTime<0&&v.progress(1),t<0&&f&&s&&!g?v.render(-1,!0):v.revert(f&&y?R8:XT),v._lazy=0),r){if(f0(e._startAt=Y2.set(_,t4({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!v&&S3(u),startAt:null,delay:0,onUpdate:d&&function(){return U3(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(m3||!s&&!g)&&e._startAt.revert(R8),s&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&y&&!v){if(t&&(s=!1),I=t4({overwrite:!1,data:"isFromStart",lazy:s&&!v&&S3(u),immediateRender:s,stagger:0,parent:S},C),G&&(I[q.prop]=G),f0(e._startAt=Y2.set(_,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(m3?e._startAt.revert(R8):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,w2,w2);else if(!t)return}for(e._pt=e._ptCache=0,u=y&&S3(u)||u&&!y,w=0;w<_.length;w++){if(D=_[w],V=D._gsap||en(_)[w]._gsap,e._ptLookup[w]=k={},Se[V.id]&&u0.length&&B8(),B=x===_?w:x.indexOf(D),q&&($=new q).init(D,G||C,e,B,x)!==!1&&(e._pt=T=new w3(e._pt,D,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(O){k[O]=T}),$.priority&&(N=1)),!q||G)for(I in C)P3[I]&&($=Nr(I,C,e,B,D,x))?$.priority&&(N=1):k[I]=T=tn.call(e,D,I,"get",C[I],B,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(D,e._op[w]),M&&e._pt&&(i0=e,O2.killTweensOf(D,k,e.globalTime(t)),J=!e.parent,i0=0),e._pt&&u&&(Se[V.id]=1)}N&&Wr(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!J,p&&t<=0&&b.render(q3,!0,!0)},wD=function(e,t,n,i,a,r,s,u){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,h,p,g;if(!d)for(d=e._ptCache[t]=[],p=e._ptLookup,g=e._targets.length;g--;){if(f=p[g][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return De=1,e.vars[t]="+=0",nn(e,s),De=0,u?T5(t+" not eligible for reset"):1;d.push(f)}for(g=d.length;g--;)h=d[g],f=h._pt||h,f.s=(i||i===0)&&!a?i:f.s+(i||0)+r*f.c,f.c=n-f.s,h.e&&(h.e=B2(n)+p3(h.e)),h.b&&(h.b=f.s+p3(h.b))},AD=function(e,t){var n=e[0]?U0(e[0]).harness:0,i=n&&n.aliases,a,r,s,u;if(!i)return t;a=W0({},t);for(r in i)if(r in a)for(u=i[r].split(","),s=u.length;s--;)a[u[s]]=a[r];return a},CD=function(e,t,n,i){var a=t.ease||i||"power1.inOut",r,s;if(g3(t))s=n[e]||(n[e]=[]),t.forEach(function(u,d){return s.push({t:d/(t.length-1)*100,v:u,e:a})});else for(r in t)s=n[r]||(n[r]=[]),r==="ease"||s.push({t:parseFloat(e),v:t[r],e:a})},x5=function(e,t,n,i,a){return N2(e)?e.call(t,n,i,a):a3(e)&&~e.indexOf("random(")?E5(e):e},Fr=Kt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Br={};M3(Fr+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Br[o]=1});var Y2=function(o){or(e,o);function e(n,i,a,r){var s;typeof i=="number"&&(a.duration=i,i=a,a=null),s=o.call(this,r?i:y5(i))||this;var u=s.vars,d=u.duration,f=u.delay,h=u.immediateRender,p=u.stagger,g=u.overwrite,y=u.keyframes,v=u.defaults,_=u.scrollTrigger,S=u.yoyoEase,x=i.parent||O2,M=(g3(n)||rr(n)?F4(n[0]):"length"in i)?[n]:X3(n),b,C,w,I,T,D,N,V;if(s._targets=M.length?en(M):T5("GSAP target "+n+" not found. https://gsap.com",!F3.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=g,y||p||A8(d)||A8(f)){if(i=s.vars,b=s.timeline=new y3({data:"nested",defaults:v||{},targets:x&&x.data==="nested"?x.vars.targets:M}),b.kill(),b.parent=b._dp=R4(s),b._start=0,p||A8(d)||A8(f)){if(I=M.length,N=p&&wr(p),b4(p))for(T in p)~Fr.indexOf(T)&&(V||(V={}),V[T]=p[T]);for(C=0;C<I;C++)w=G8(i,Br),w.stagger=0,S&&(w.yoyoEase=S),V&&W0(w,V),D=M[C],w.duration=+x5(d,R4(s),C,D,M),w.delay=(+x5(f,R4(s),C,D,M)||0)-s._delay,!p&&I===1&&w.delay&&(s._delay=f=w.delay,s._start+=f,w.delay=0),b.to(D,w,N?N(C,D,M):0),b._ease=p2.none;b.duration()?d=f=0:s.timeline=0}else if(y){y5(t4(b.vars.defaults,{ease:"none"})),b._ease=F0(y.ease||i.ease||"none");var q=0,$,k,B;if(g3(y))y.forEach(function(G){return b.to(M,G,">")}),b.duration();else{w={};for(T in y)T==="ease"||T==="easeEach"||CD(T,y[T],w,y.easeEach);for(T in w)for($=w[T].sort(function(G,J){return G.t-J.t}),q=0,C=0;C<$.length;C++)k=$[C],B={ease:k.e,duration:(k.t-(C?$[C-1].t:0))/100*d},B[T]=k.v,b.to(M,B,q),q+=B.duration;b.duration()<d&&b.to({},{duration:d-b.duration()})}}d||s.duration(d=b.duration())}else s.timeline=0;return g===!0&&!Yt&&(i0=R4(s),O2.killTweensOf(M),i0=0),h4(x,R4(s),a),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!d&&!y&&s._start===o3(x._time)&&S3(h)&&iD(R4(s))&&x.data!=="nested")&&(s._tTime=-w2,s.render(Math.max(0,-f)||0)),_&&br(R4(s),_),s}var t=e.prototype;return t.render=function(i,a,r){var s=this._time,u=this._tDur,d=this._dur,f=i<0,h=i>u-w2&&!f?u:i<w2?0:i,p,g,y,v,_,S,x,M,b;if(!d)aD(this,i,a,r);else if(h!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(p=h,M=this.timeline,this._repeat){if(v=d+this._rDelay,this._repeat<-1&&f)return this.totalTime(v*100+i,a,r);if(p=o3(h%v),h===u?(y=this._repeat,p=d):(y=~~(h/v),y&&y===o3(h/v)&&(p=d,y--),p>d&&(p=d)),S=this._yoyo&&y&1,S&&(b=this._yEase,p=d-p),_=W9(this._tTime,v),p===s&&!r&&this._initted&&y===_)return this._tTime=h,this;y!==_&&(M&&this._yEase&&Pr(M,S),this.vars.repeatRefresh&&!S&&!this._lock&&this._time!==v&&this._initted&&(this._lock=r=1,this.render(o3(v*y),!0).invalidate()._lock=0))}if(!this._initted){if(xr(this,f?i:p,r,a,h))return this._tTime=0,this;if(s!==this._time&&!(r&&this.vars.repeatRefresh&&y!==_))return this;if(d!==this._dur)return this.render(i,a,r)}if(this._tTime=h,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(b||this._ease)(p/d),this._from&&(this.ratio=x=1-x),p&&!s&&!a&&!y&&(U3(this,"onStart"),this._tTime!==h))return this;for(g=this._pt;g;)g.r(x,g.d),g=g._next;M&&M.render(i<0?i:M._dur*M._ease(p/this._dur),a,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(f&&Me(this,i,a,r),U3(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!a&&this.parent&&U3(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(f&&!this._onUpdate&&Me(this,i,!0,!0),(i||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&f0(this,1),!a&&!(f&&!s)&&(h||s||S)&&(U3(this,h===u?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,a,r,s,u){R5||k3.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||nn(this,d),f=this._ease(d/this._dur),wD(this,i,a,r,s,f,d,u)?this.resetTo(i,a,r,s,1):(o6(this,0),this.parent||_r(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?p5(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,i0&&i0.vars.overwrite!==!0)._first||p5(this),this.parent&&r!==this.timeline.totalDuration()&&H9(this,this._dur*this.timeline._tDur/r,0,1),this}var s=this._targets,u=i?X3(i):s,d=this._ptLookup,f=this._pt,h,p,g,y,v,_,S;if((!a||a==="all")&&tD(s,u))return a==="all"&&(this._pt=0),p5(this);for(h=this._op=this._op||[],a!=="all"&&(a3(a)&&(v={},M3(a,function(x){return v[x]=1}),a=v),a=AD(s,a)),S=s.length;S--;)if(~u.indexOf(s[S])){p=d[S],a==="all"?(h[S]=a,y=p,g={}):(g=h[S]=h[S]||{},y=a);for(v in y)_=p&&p[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&n6(this,_,"_pt"),delete p[v]),g!=="all"&&(g[v]=1)}return this._initted&&!this._pt&&f&&p5(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return b5(1,arguments)},e.delayedCall=function(i,a,r,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:s})},e.fromTo=function(i,a,r){return b5(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,r){return O2.killTweensOf(i,a,r)},e}(I5);t4(Y2.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});M3("staggerTo,staggerFrom,staggerFromTo",function(o){Y2[o]=function(){var e=new y3,t=Ae.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var on=function(e,t,n){return e[t]=n},Gr=function(e,t,n){return e[t](n)},TD=function(e,t,n,i){return e[t](i.fp,n)},DD=function(e,t,n){return e.setAttribute(t,n)},an=function(e,t){return N2(e[t])?Gr:Jt(e[t])&&e.setAttribute?DD:on},Vr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ED=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jr=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},RD=function(e,t,n,i){for(var a=this._pt,r;a;)r=a._next,a.p===i&&a.modifier(e,t,n),a=r},ID=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?n6(this,t,"_pt"):t.dep||(n=1),t=i;return!n},OD=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Wr=function(e){for(var t=e._pt,n,i,a,r;t;){for(n=t._next,i=a;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:a=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=a},w3=function(){function o(t,n,i,a,r,s,u,d,f){this.t=n,this.s=a,this.c=r,this.p=i,this.r=s||Vr,this.d=u||this,this.set=d||on,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=OD,this.m=n,this.mt=a,this.tween=i},o}();M3(Kt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Qt[o]=1});B3.TweenMax=B3.TweenLite=Y2;B3.TimelineLite=B3.TimelineMax=y3;O2=new y3({sortChildren:!1,defaults:j9,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});F3.stringFilter=Lr;var B0=[],O8={},LD=[],co=0,zD=0,a7=function(e){return(O8[e]||LD).map(function(t){return t()})},Ee=function(){var e=Date.now(),t=[];e-co>2&&(a7("matchMediaInit"),B0.forEach(function(n){var i=n.queries,a=n.conditions,r,s,u,d;for(s in i)r=d4.matchMedia(i[s]).matches,r&&(u=1),r!==a[s]&&(a[s]=r,d=1);d&&(n.revert(),u&&t.push(n))}),a7("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),co=e,a7("matchMedia"))},Hr=function(){function o(t,n){this.selector=n&&Ce(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zD++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,a){N2(n)&&(a=i,i=n,n=N2);var r=this,s=function(){var d=D2,f=r.selector,h;return d&&d!==r&&d.data.push(r),a&&(r.selector=Ce(a)),D2=r,h=i.apply(r,arguments),N2(h)&&r._r.push(h),D2=d,r.selector=f,r.isReverted=!1,h};return r.last=s,n===N2?s(r,function(u){return r.add(null,u)}):n?r[n]=s:s},e.ignore=function(n){var i=D2;D2=null,n(this),D2=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Y2&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n?function(){for(var s=a.getTweens(),u=a.data.length,d;u--;)d=a.data[u],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(f){return s.splice(s.indexOf(f),1)}));for(s.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,h){return h.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),u=a.data.length;u--;)d=a.data[u],d instanceof y3?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Y2)&&d.revert&&d.revert(n);a._r.forEach(function(f){return f(n,a)}),a.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var r=B0.length;r--;)B0[r].id===this.id&&B0.splice(r,1)},e.revert=function(n){this.kill(n||{})},o}(),PD=function(){function o(t){this.contexts=[],this.scope=t,D2&&D2.data.push(this)}var e=o.prototype;return e.add=function(n,i,a){b4(n)||(n={matches:n});var r=new Hr(0,a||this.scope),s=r.conditions={},u,d,f;D2&&!r.selector&&(r.selector=D2.selector),this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(d in n)d==="all"?f=1:(u=d4.matchMedia(n[d]),u&&(B0.indexOf(r)<0&&B0.push(r),(s[d]=u.matches)&&(f=1),u.addListener?u.addListener(Ee):u.addEventListener("change",Ee)));return f&&i(r,function(h){return r.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),j8={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Rr(i)})},timeline:function(e){return new y3(e)},getTweensOf:function(e,t){return O2.getTweensOf(e,t)},getProperty:function(e,t,n,i){a3(e)&&(e=X3(e)[0]);var a=U0(e||{}).get,r=n?vr:gr;return n==="native"&&(n=""),e&&(t?r((P3[t]&&P3[t].get||a)(e,t,n,i)):function(s,u,d){return r((P3[s]&&P3[s].get||a)(e,s,u,d))})},quickSetter:function(e,t,n){if(e=X3(e),e.length>1){var i=e.map(function(f){return C3.quickSetter(f,t,n)}),a=i.length;return function(f){for(var h=a;h--;)i[h](f)}}e=e[0]||{};var r=P3[t],s=U0(e),u=s.harness&&(s.harness.aliases||{})[t]||t,d=r?function(f){var h=new r;I9._pt=0,h.init(e,n?f+n:f,I9,0,[e]),h.render(1,h),I9._pt&&rn(1,I9)}:s.set(e,u);return r?d:function(f){return d(e,u,n?f+n:f,s,1)}},quickTo:function(e,t,n){var i,a=C3.to(e,W0((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(u,d,f){return a.resetTo(t,u,d,f)};return r.tween=a,r},isTweening:function(e){return O2.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=F0(e.ease,j9.ease)),ao(j9,e||{})},config:function(e){return ao(F3,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,a=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!P3[s]&&!B3[s]&&T5(t+" effect requires "+s+" plugin.")}),t7[t]=function(s,u,d){return n(X3(s),t4(u||{},a),d)},r&&(y3.prototype[t]=function(s,u,d){return this.add(t7[t](s,b4(u)?u:(d=u)&&{},this),d)})},registerEase:function(e,t){p2[e]=F0(t)},parseEase:function(e,t){return arguments.length?F0(e,t):p2},getById:function(e){return O2.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new y3(e),i,a;for(n.smoothChildTiming=S3(e.smoothChildTiming),O2.remove(n),n._dp=0,n._time=n._tTime=O2._time,i=O2._first;i;)a=i._next,(t||!(!i._dur&&i instanceof Y2&&i.vars.onComplete===i._targets[0]))&&h4(n,i,i._start-i._delay),i=a;return h4(O2,n,0),n},context:function(e,t){return e?new Hr(e,t):D2},matchMedia:function(e){return new PD(e)},matchMediaRefresh:function(){return B0.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ee()},addEventListener:function(e,t){var n=O8[e]||(O8[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=O8[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:pD,wrapYoyo:hD,distribute:wr,random:Cr,snap:Ar,normalize:fD,getUnit:p3,clamp:lD,splitColor:Ir,toArray:X3,selector:Ce,mapRange:Dr,pipe:cD,unitize:dD,interpolate:mD,shuffle:Mr},install:dr,effects:t7,ticker:k3,updateRoot:y3.updateRoot,plugins:P3,globalTimeline:O2,core:{PropTween:w3,globals:fr,Tween:Y2,Timeline:y3,Animation:I5,getCache:U0,_removeLinkedListItem:n6,reverting:function(){return m3},context:function(e){return e&&D2&&(D2.data.push(e),e._ctx=D2),D2},suppressOverwrites:function(e){return Yt=e}}};M3("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return j8[o]=Y2[o]});k3.add(y3.updateRoot);I9=j8.to({},{duration:0});var kD=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},UD=function(e,t){var n=e._targets,i,a,r;for(i in t)for(a=n.length;a--;)r=e._ptLookup[a][i],r&&(r=r.d)&&(r._pt&&(r=kD(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[a],i))},r7=function(e,t){return{name:e,rawVars:1,init:function(i,a,r){r._onInit=function(s){var u,d;if(a3(a)&&(u={},M3(a,function(f){return u[f]=1}),a=u),t){u={};for(d in a)u[d]=t(a[d]);a=u}UD(s,a)}}}},C3=j8.registerPlugin({name:"attr",init:function(e,t,n,i,a){var r,s,u;this.tween=n;for(r in t)u=e.getAttribute(r)||"",s=this.add(e,"setAttribute",(u||0)+"",t[r],i,a,0,0,r),s.op=r,s.b=u,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)m3?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},r7("roundProps",Te),r7("modifiers"),r7("snap",Ar))||j8;Y2.version=y3.version=C3.version="3.12.5";cr=1;Zt()&&$9();p2.Power0;p2.Power1;p2.Power2;p2.Power3;p2.Power4;p2.Linear;p2.Quad;p2.Cubic;p2.Quart;p2.Quint;p2.Strong;p2.Elastic;p2.Back;p2.SteppedEase;p2.Bounce;p2.Sine;p2.Expo;p2.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fo,o0,P9,sn,O0,po,ln,ND=function(){return typeof window<"u"},B4={},T0=180/Math.PI,k9=Math.PI/180,y9=Math.atan2,ho=1e8,un=/([A-Z])/g,FD=/(left|right|width|margin|padding|x)/i,BD=/[\s,\(]\S/,v4={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Re=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jD=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$r=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Yr=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WD=function(e,t,n){return e.style[t]=n},HD=function(e,t,n){return e.style.setProperty(t,n)},$D=function(e,t,n){return e._gsap[t]=n},YD=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},JD=function(e,t,n,i,a){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(a,r)},ZD=function(e,t,n,i,a){var r=e._gsap;r[t]=n,r.renderTransform(a,r)},L2="transform",A3=L2+"Origin",qD=function o(e,t){var n=this,i=this.target,a=i.style,r=i._gsap;if(e in B4&&a){if(this.tfm=this.tfm||{},e!=="transform")e=v4[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=O4(i,s)}):this.tfm[e]=r.x?r[e]:O4(i,e),e===A3&&(this.tfm.zOrigin=r.zOrigin);else return v4.transform.split(",").forEach(function(s){return o.call(n,s,t)});if(this.props.indexOf(L2)>=0)return;r.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(A3,t,"")),e=L2}(a||t)&&this.props.push(e,t,a[e])},Jr=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},XD=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,a,r;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(un,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=ln(),(!a||!a.isStart)&&!n[L2]&&(Jr(n),i.zOrigin&&n[A3]&&(n[A3]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Zr=function(e,t){var n={target:e,props:[],revert:XD,save:qD};return e._gsap||C3.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},qr,Ie=function(e,t){var n=o0.createElementNS?o0.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):o0.createElement(e);return n&&n.style?n:o0.createElement(e)},y4=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(un,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Y9(t)||t,1)||""},mo="O,Moz,ms,Ms,Webkit".split(","),Y9=function(e,t,n){var i=t||O0,a=i.style,r=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(mo[r]+e in a););return r<0?null:(r===3?"ms":r>=0?mo[r]:"")+e},Oe=function(){ND()&&window.document&&(fo=window,o0=fo.document,P9=o0.documentElement,O0=Ie("div")||{style:{}},Ie("div"),L2=Y9(L2),A3=L2+"Origin",O0.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qr=!!Y9("perspective"),ln=C3.core.reverting,sn=1)},s7=function o(e){var t=Ie("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,a=this.style.cssText,r;if(P9.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),P9.removeChild(t),this.style.cssText=a,r},go=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xr=function(e){var t;try{t=e.getBBox()}catch{t=s7.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===s7||(t=s7.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+go(e,["x","cx","x1"])||0,y:+go(e,["y","cy","y1"])||0,width:0,height:0}:t},Qr=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xr(e))},H0=function(e,t){if(t){var n=e.style,i;t in B4&&t!==A3&&(t=L2),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(un,"-$1").toLowerCase())):n.removeAttribute(t)}},a0=function(e,t,n,i,a,r){var s=new w3(e._pt,t,n,0,1,r?Yr:$r);return e._pt=s,s.b=i,s.e=a,e._props.push(n),s},vo={deg:1,rad:1,turn:1},QD={grid:1,flex:1},p0=function o(e,t,n,i){var a=parseFloat(n)||0,r=(n+"").trim().substr((a+"").length)||"px",s=O0.style,u=FD.test(t),d=e.tagName.toLowerCase()==="svg",f=(d?"client":"offset")+(u?"Width":"Height"),h=100,p=i==="px",g=i==="%",y,v,_,S;if(i===r||!a||vo[i]||vo[r])return a;if(r!=="px"&&!p&&(a=o(e,t,n,"px")),S=e.getCTM&&Qr(e),(g||r==="%")&&(B4[t]||~t.indexOf("adius")))return y=S?e.getBBox()[u?"width":"height"]:e[f],B2(g?a/y*h:a/100*y);if(s[u?"width":"height"]=h+(p?r:i),v=~t.indexOf("adius")||i==="em"&&e.appendChild&&!d?e:e.parentNode,S&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===o0||!v.appendChild)&&(v=o0.body),_=v._gsap,_&&g&&_.width&&u&&_.time===k3.time&&!_.uncache)return B2(a/_.width*h);if(g&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,y=e[f],x?e.style[t]=x:H0(e,t)}else(g||r==="%")&&!QD[y4(v,"display")]&&(s.position=y4(e,"position")),v===e&&(s.position="static"),v.appendChild(O0),y=O0[f],v.removeChild(O0),s.position="absolute";return u&&g&&(_=U0(v),_.time=k3.time,_.width=v[f]),B2(p?y*a/h:y&&a?h/y*a:0)},O4=function(e,t,n,i){var a;return sn||Oe(),t in v4&&t!=="transform"&&(t=v4[t],~t.indexOf(",")&&(t=t.split(",")[0])),B4[t]&&t!=="transform"?(a=L5(e,i),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:H8(y4(e,A3))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=W8[t]&&W8[t](e,t,n)||y4(e,t)||hr(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?p0(e,t,a,n)+n:a},KD=function(e,t,n,i){if(!n||n==="none"){var a=Y9(t,e,1),r=a&&y4(e,a,1);r&&r!==n?(t=a,n=r):t==="borderColor"&&(n=y4(e,"borderTopColor"))}var s=new w3(this._pt,e.style,t,0,1,jr),u=0,d=0,f,h,p,g,y,v,_,S,x,M,b,C;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(v=e.style[t],e.style[t]=i,i=y4(e,t)||i,v?e.style[t]=v:H0(e,t)),f=[n,i],Lr(f),n=f[0],i=f[1],p=n.match(R9)||[],C=i.match(R9)||[],C.length){for(;h=R9.exec(i);)_=h[0],x=i.substring(u,h.index),y?y=(y+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(y=1),_!==(v=p[d++]||"")&&(g=parseFloat(v)||0,b=v.substr((g+"").length),_.charAt(1)==="="&&(_=z9(g,_)+b),S=parseFloat(_),M=_.substr((S+"").length),u=R9.lastIndex-M.length,M||(M=M||F3.units[t]||b,u===i.length&&(i+=M,s.e+=M)),b!==M&&(g=p0(e,t,v,M)||0),s._pt={_next:s._pt,p:x||d===1?x:",",s:g,c:S-g,m:y&&y<4||t==="zIndex"?Math.round:0});s.c=u<i.length?i.substring(u,i.length):""}else s.r=t==="display"&&i==="none"?Yr:$r;return lr.test(i)&&(s.e=0),this._pt=s,s},_o={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=_o[n]||n,t[1]=_o[i]||i,t.join(" ")},tE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,a=t.u,r=n._gsap,s,u,d;if(a==="all"||a===!0)i.cssText="",u=1;else for(a=a.split(","),d=a.length;--d>-1;)s=a[d],B4[s]&&(u=1,s=s==="transformOrigin"?A3:L2),H0(n,s);u&&(H0(n,L2),r&&(r.svg&&n.removeAttribute("transform"),L5(n,1),r.uncache=1,Jr(i)))}},W8={clearProps:function(e,t,n,i,a){if(a.data!=="isFromStart"){var r=e._pt=new w3(e._pt,t,n,0,0,tE);return r.u=i,r.pr=-10,r.tween=a,e._props.push(n),1}}},O5=[1,0,0,1,0,0],Kr={},es=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yo=function(e){var t=y4(e,L2);return es(t)?O5:t.substr(7).match(sr).map(B2)},cn=function(e,t){var n=e._gsap||U0(e),i=e.style,a=yo(e),r,s,u,d;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,a=[u.a,u.b,u.c,u.d,u.e,u.f],a.join(",")==="1,0,0,1,0,0"?O5:a):(a===O5&&!e.offsetParent&&e!==P9&&!n.svg&&(u=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(d=1,s=e.nextElementSibling,P9.appendChild(e)),a=yo(e),u?i.display=u:H0(e,"display"),d&&(s?r.insertBefore(e,s):r?r.appendChild(e):P9.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Le=function(e,t,n,i,a,r){var s=e._gsap,u=a||cn(e,!0),d=s.xOrigin||0,f=s.yOrigin||0,h=s.xOffset||0,p=s.yOffset||0,g=u[0],y=u[1],v=u[2],_=u[3],S=u[4],x=u[5],M=t.split(" "),b=parseFloat(M[0])||0,C=parseFloat(M[1])||0,w,I,T,D;n?u!==O5&&(I=g*_-y*v)&&(T=b*(_/I)+C*(-v/I)+(v*x-_*S)/I,D=b*(-y/I)+C*(g/I)-(g*x-y*S)/I,b=T,C=D):(w=Xr(e),b=w.x+(~M[0].indexOf("%")?b/100*w.width:b),C=w.y+(~(M[1]||M[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&s.smooth?(S=b-d,x=C-f,s.xOffset=h+(S*g+x*v)-S,s.yOffset=p+(S*y+x*_)-x):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=C,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[A3]="0px 0px",r&&(a0(r,s,"xOrigin",d,b),a0(r,s,"yOrigin",f,C),a0(r,s,"xOffset",h,s.xOffset),a0(r,s,"yOffset",p,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+C)},L5=function(e,t){var n=e._gsap||new Ur(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,r="px",s="deg",u=getComputedStyle(e),d=y4(e,A3)||"0",f,h,p,g,y,v,_,S,x,M,b,C,w,I,T,D,N,V,q,$,k,B,G,J,O,U,F,t1,n1,u1,a1,K;return f=h=p=v=_=S=x=M=b=0,g=y=1,n.svg=!!(e.getCTM&&Qr(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[L2]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[L2]!=="none"?u[L2]:"")),i.scale=i.rotate=i.translate="none"),I=cn(e,n.svg),n.svg&&(n.uncache?(O=e.getBBox(),d=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",J=""):J=!t&&e.getAttribute("data-svg-origin"),Le(e,J||d,!!J||n.originIsAbsolute,n.smooth!==!1,I)),C=n.xOrigin||0,w=n.yOrigin||0,I!==O5&&(V=I[0],q=I[1],$=I[2],k=I[3],f=B=I[4],h=G=I[5],I.length===6?(g=Math.sqrt(V*V+q*q),y=Math.sqrt(k*k+$*$),v=V||q?y9(q,V)*T0:0,x=$||k?y9($,k)*T0+v:0,x&&(y*=Math.abs(Math.cos(x*k9))),n.svg&&(f-=C-(C*V+w*$),h-=w-(C*q+w*k))):(K=I[6],u1=I[7],F=I[8],t1=I[9],n1=I[10],a1=I[11],f=I[12],h=I[13],p=I[14],T=y9(K,n1),_=T*T0,T&&(D=Math.cos(-T),N=Math.sin(-T),J=B*D+F*N,O=G*D+t1*N,U=K*D+n1*N,F=B*-N+F*D,t1=G*-N+t1*D,n1=K*-N+n1*D,a1=u1*-N+a1*D,B=J,G=O,K=U),T=y9(-$,n1),S=T*T0,T&&(D=Math.cos(-T),N=Math.sin(-T),J=V*D-F*N,O=q*D-t1*N,U=$*D-n1*N,a1=k*N+a1*D,V=J,q=O,$=U),T=y9(q,V),v=T*T0,T&&(D=Math.cos(T),N=Math.sin(T),J=V*D+q*N,O=B*D+G*N,q=q*D-V*N,G=G*D-B*N,V=J,B=O),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,S=180-S),g=B2(Math.sqrt(V*V+q*q+$*$)),y=B2(Math.sqrt(G*G+K*K)),T=y9(B,G),x=Math.abs(T)>2e-4?T*T0:0,b=a1?1/(a1<0?-a1:a1):0),n.svg&&(J=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!es(y4(e,L2)),J&&e.setAttribute("transform",J))),Math.abs(x)>90&&Math.abs(x)<270&&(a?(g*=-1,x+=v<=0?180:-180,v+=v<=0?180:-180):(y*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=p+r,n.scaleX=B2(g),n.scaleY=B2(y),n.rotation=B2(v)+s,n.rotationX=B2(_)+s,n.rotationY=B2(S)+s,n.skewX=x+s,n.skewY=M+s,n.transformPerspective=b+r,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(i[A3]=H8(d)),n.xOffset=n.yOffset=0,n.force3D=F3.force3D,n.renderTransform=n.svg?iE:qr?ts:nE,n.uncache=0,n},H8=function(e){return(e=e.split(" "))[0]+" "+e[1]},l7=function(e,t,n){var i=p3(t);return B2(parseFloat(t)+parseFloat(p0(e,"x",n+"px",i)))+i},nE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ts(e,t)},M0="0deg",s5="0px",w0=") ",ts=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,r=n.x,s=n.y,u=n.z,d=n.rotation,f=n.rotationY,h=n.rotationX,p=n.skewX,g=n.skewY,y=n.scaleX,v=n.scaleY,_=n.transformPerspective,S=n.force3D,x=n.target,M=n.zOrigin,b="",C=S==="auto"&&e&&e!==1||S===!0;if(M&&(h!==M0||f!==M0)){var w=parseFloat(f)*k9,I=Math.sin(w),T=Math.cos(w),D;w=parseFloat(h)*k9,D=Math.cos(w),r=l7(x,r,I*D*-M),s=l7(x,s,-Math.sin(w)*-M),u=l7(x,u,T*D*-M+M)}_!==s5&&(b+="perspective("+_+w0),(i||a)&&(b+="translate("+i+"%, "+a+"%) "),(C||r!==s5||s!==s5||u!==s5)&&(b+=u!==s5||C?"translate3d("+r+", "+s+", "+u+") ":"translate("+r+", "+s+w0),d!==M0&&(b+="rotate("+d+w0),f!==M0&&(b+="rotateY("+f+w0),h!==M0&&(b+="rotateX("+h+w0),(p!==M0||g!==M0)&&(b+="skew("+p+", "+g+w0),(y!==1||v!==1)&&(b+="scale("+y+", "+v+w0),x.style[L2]=b||"translate(0, 0)"},iE=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,r=n.x,s=n.y,u=n.rotation,d=n.skewX,f=n.skewY,h=n.scaleX,p=n.scaleY,g=n.target,y=n.xOrigin,v=n.yOrigin,_=n.xOffset,S=n.yOffset,x=n.forceCSS,M=parseFloat(r),b=parseFloat(s),C,w,I,T,D;u=parseFloat(u),d=parseFloat(d),f=parseFloat(f),f&&(f=parseFloat(f),d+=f,u+=f),u||d?(u*=k9,d*=k9,C=Math.cos(u)*h,w=Math.sin(u)*h,I=Math.sin(u-d)*-p,T=Math.cos(u-d)*p,d&&(f*=k9,D=Math.tan(d-f),D=Math.sqrt(1+D*D),I*=D,T*=D,f&&(D=Math.tan(f),D=Math.sqrt(1+D*D),C*=D,w*=D)),C=B2(C),w=B2(w),I=B2(I),T=B2(T)):(C=h,T=p,w=I=0),(M&&!~(r+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(M=p0(g,"x",r,"px"),b=p0(g,"y",s,"px")),(y||v||_||S)&&(M=B2(M+y-(y*C+v*I)+_),b=B2(b+v-(y*w+v*T)+S)),(i||a)&&(D=g.getBBox(),M=B2(M+i/100*D.width),b=B2(b+a/100*D.height)),D="matrix("+C+","+w+","+I+","+T+","+M+","+b+")",g.setAttribute("transform",D),x&&(g.style[L2]=D)},oE=function(e,t,n,i,a){var r=360,s=a3(a),u=parseFloat(a)*(s&&~a.indexOf("rad")?T0:1),d=u-i,f=i+d+"deg",h,p;return s&&(h=a.split("_")[1],h==="short"&&(d%=r,d!==d%(r/2)&&(d+=d<0?r:-r)),h==="cw"&&d<0?d=(d+r*ho)%r-~~(d/r)*r:h==="ccw"&&d>0&&(d=(d-r*ho)%r-~~(d/r)*r)),e._pt=p=new w3(e._pt,t,n,i,d,GD),p.e=f,p.u="deg",e._props.push(n),p},bo=function(e,t){for(var n in t)e[n]=t[n];return e},aE=function(e,t,n){var i=bo({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",r=n.style,s,u,d,f,h,p,g,y;i.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),r[L2]=t,s=L5(n,1),H0(n,L2),n.setAttribute("transform",d)):(d=getComputedStyle(n)[L2],r[L2]=t,s=L5(n,1),r[L2]=d);for(u in B4)d=i[u],f=s[u],d!==f&&a.indexOf(u)<0&&(g=p3(d),y=p3(f),h=g!==y?p0(n,u,d,y):parseFloat(d),p=parseFloat(f),e._pt=new w3(e._pt,s,u,h,p-h,Re),e._pt.u=y||0,e._props.push(u));bo(s,i)};M3("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",a="Left",r=(e<3?[t,n,i,a]:[t+a,t+n,i+n,i+a]).map(function(s){return e<2?o+s:"border"+s+o});W8[e>1?"border"+o:o]=function(s,u,d,f,h){var p,g;if(arguments.length<4)return p=r.map(function(y){return O4(s,y,d)}),g=p.join(" "),g.split(p[0]).length===5?p[0]:g;p=(f+"").split(" "),g={},r.forEach(function(y,v){return g[y]=p[v]=p[v]||p[(v-1)/2|0]}),s.init(u,g,h)}});var ns={name:"css",register:Oe,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,a){var r=this._props,s=e.style,u=n.vars.startAt,d,f,h,p,g,y,v,_,S,x,M,b,C,w,I,T;sn||Oe(),this.styles=this.styles||Zr(e),T=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(f=t[v],!(P3[v]&&Nr(v,t,n,i,e,a)))){if(g=typeof f,y=W8[v],g==="function"&&(f=f.call(n,i,e,a),g=typeof f),g==="string"&&~f.indexOf("random(")&&(f=E5(f)),y)y(this,e,v,f,n)&&(I=1);else if(v.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(v)+"").trim(),f+="",c0.lastIndex=0,c0.test(d)||(_=p3(d),S=p3(f)),S?_!==S&&(d=p0(e,v,d,S)+S):_&&(f+=_),this.add(s,"setProperty",d,f,i,a,0,0,v),r.push(v),T.push(v,0,s[v]);else if(g!=="undefined"){if(u&&v in u?(d=typeof u[v]=="function"?u[v].call(n,i,e,a):u[v],a3(d)&&~d.indexOf("random(")&&(d=E5(d)),p3(d+"")||d==="auto"||(d+=F3.units[v]||p3(O4(e,v))||""),(d+"").charAt(1)==="="&&(d=O4(e,v))):d=O4(e,v),p=parseFloat(d),x=g==="string"&&f.charAt(1)==="="&&f.substr(0,2),x&&(f=f.substr(2)),h=parseFloat(f),v in v4&&(v==="autoAlpha"&&(p===1&&O4(e,"visibility")==="hidden"&&h&&(p=0),T.push("visibility",0,s.visibility),a0(this,s,"visibility",p?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=v4[v],~v.indexOf(",")&&(v=v.split(",")[0]))),M=v in B4,M){if(this.styles.save(v),b||(C=e._gsap,C.renderTransform&&!t.parseTransform||L5(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,b=this._pt=new w3(this._pt,s,L2,0,1,C.renderTransform,C,0,-1),b.dep=1),v==="scale")this._pt=new w3(this._pt,C,"scaleY",C.scaleY,(x?z9(C.scaleY,x+h):h)-C.scaleY||0,Re),this._pt.u=0,r.push("scaleY",v),v+="X";else if(v==="transformOrigin"){T.push(A3,0,s[A3]),f=eE(f),C.svg?Le(e,f,0,w,0,this):(S=parseFloat(f.split(" ")[2])||0,S!==C.zOrigin&&a0(this,C,"zOrigin",C.zOrigin,S),a0(this,s,v,H8(d),H8(f)));continue}else if(v==="svgOrigin"){Le(e,f,1,w,0,this);continue}else if(v in Kr){oE(this,C,v,p,x?z9(p,x+f):f);continue}else if(v==="smoothOrigin"){a0(this,C,"smooth",C.smooth,f);continue}else if(v==="force3D"){C[v]=f;continue}else if(v==="transform"){aE(this,f,e);continue}}else v in s||(v=Y9(v)||v);if(M||(h||h===0)&&(p||p===0)&&!BD.test(f)&&v in s)_=(d+"").substr((p+"").length),h||(h=0),S=p3(f)||(v in F3.units?F3.units[v]:_),_!==S&&(p=p0(e,v,d,S)),this._pt=new w3(this._pt,M?C:s,v,p,(x?z9(p,x+h):h)-p,!M&&(S==="px"||v==="zIndex")&&t.autoRound!==!1?jD:Re),this._pt.u=S||0,_!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=VD);else if(v in s)KD.call(this,e,v,d,x?x+f:f);else if(v in e)this.add(e,v,d||e[v],x?x+f:f,i,a);else if(v!=="parseTransform"){Xt(v,f);continue}M||(v in s?T.push(v,0,s[v]):T.push(v,1,d||e[v])),r.push(v)}}I&&Wr(this)},render:function(e,t){if(t.tween._time||!ln())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:O4,aliases:v4,getSetter:function(e,t,n){var i=v4[t];return i&&i.indexOf(",")<0&&(t=i),t in B4&&t!==A3&&(e._gsap.x||O4(e,"x"))?n&&po===n?t==="scale"?YD:$D:(po=n||{})&&(t==="scale"?JD:ZD):e.style&&!Jt(e.style[t])?WD:~t.indexOf("-")?HD:an(e,t)},core:{_removeProperty:H0,_getMatrix:cn}};C3.utils.checkPrefix=Y9;C3.core.getStyleSaver=Zr;(function(o,e,t,n){var i=M3(o+","+e+","+t,function(a){B4[a]=1});M3(e,function(a){F3.units[a]="deg",Kr[a]=1}),v4[i[13]]=o+","+e,M3(n,function(a){var r=a.split(":");v4[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");M3("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){F3.units[o]="px"});C3.registerPlugin(ns);var is=C3.registerPlugin(ns)||C3;is.core.Tween;function rE(o,e,t,n){const i=new E3,r=new Wt(0,0,o,e,t,!1).getSpacedPoints(100);i.setFromPoints(r);const s=[];for(let g=0;g<r.length;g++)s.push(g/r.length);const u=new N3(new Float32Array(s),1);i.attributes.percent=u;const d=[];for(let g=0;g<r.length;g++){const y=new v2(15503171),v=new v2(15969910),_=y.lerp(v,g/r.length);d.push(_.r,_.g,_.b)}i.attributes.color=new N3(new Float32Array(d),3);const f=1.3,h=new jt({size:f,transparent:!0,depthWrite:!1});h.onBeforeCompile=function(g){g.vertexShader=g.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),g.vertexShader=g.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`
`))};const p=new Xa(i,h);return h.color=new v2(n),p.name="飞行线",p}function sE(o,e,t,n,i,a){const r=C5(o,e,t),s=new Y(r.x,r.y,r.z),u=C5(o,n,i),d=new Y(u.x,u.y,u.z),f=lE(s,d),h=uE(o,f.startPoint,f.endPoint,a);return h.quaternion.multiply(f.quaternion),h}function lE(o,e){const t=new Y(0,0,0),n=o.clone().sub(t),i=e.clone().sub(t),a=n.clone().cross(i).normalize(),r=new Y(0,0,1),s=new U4().setFromUnitVectors(a,r),u=o.clone().applyQuaternion(s),d=e.clone().applyQuaternion(s),h=u.clone().add(d).multiplyScalar(.5).clone().sub(t).normalize(),p=new Y(0,1,0),g=new U4().setFromUnitVectors(h,p),y=u.clone().applyQuaternion(g),v=d.clone().applyQuaternion(g);return{quaternion:s.clone().invert().multiply(g.clone().invert()),startPoint:y,endPoint:v}}function uE(o,e,t,n){const a=new Y().addVectors(e,t).multiplyScalar(.5).clone().normalize(),r=xo(e,t,new Y(0,0,0)),s=a.multiplyScalar(o+r*o*.2),u=dE(e,t,s),d=Math.abs(u.y-s.y),f=xo(e,new Y(0,-1,0),u),h=-Math.PI/2+f,p=Math.PI-h,g=cE(u.x,u.y,d,h,p,n.color);g.center=u,g.topCoord=s;const y=(p-h)/7,v=rE(d,h,h+y,n.flyLineColor);return v.position.y=u.y,g.add(v),v.flyEndAngle=p-h-y,v.startAngle=h,v.AngleZ=g.flyEndAngle*Math.random(),g.userData.flyLine=v,g}function xo(o,e,t){const n=o.clone().sub(t).normalize(),i=e.clone().sub(t).normalize(),a=n.clone().dot(i);return Math.acos(a)}function cE(o,e,t,n,i,a){const r=new E3,u=new Wt(o,e,t,n,i,!1).getSpacedPoints(80);r.setFromPoints(u);const d=new qa({color:a||13731143});return new oT(r,d)}function dE(o,e,t){const n=o.lengthSq(),i=e.lengthSq(),a=t.lengthSq(),r=o.x,s=o.y,u=e.x,d=e.y,f=t.x,h=t.y,p=r*d+u*h+f*s-r*h-u*s-f*d,g=(i*h+n*d+a*s-i*s-a*d-n*h)/p/2,y=(a*u+i*r+n*f-n*u-i*f-a*r)/p/2;return new Y(g,y,0)}const fE=`\r
varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vp;\r
varying vec3 vPositionNormal;\r
void main(void){\r
  vUv = uv;\r
  vNormal = normalize( normalMatrix * normal ); // 转换到视图空间\r
  vp = position;\r
  vPositionNormal = normalize(( modelViewMatrix * vec4(position, 1.0) ).xyz);\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r
}`,pE=`uniform vec3 glowColor;\r
uniform float bias;\r
uniform float power;\r
uniform float time;\r
varying vec3 vp;\r
varying vec3 vNormal;\r
varying vec3 vPositionNormal;\r
uniform float scale;\r
// 获取纹理\r
uniform sampler2D map;\r
// 纹理坐标\r
varying vec2 vUv;\r
\r
void main(void){\r
  float a = pow( bias + scale * abs(dot(vNormal, vPositionNormal)), power );\r
  if(vp.y > time && vp.y < time + 20.0) {\r
    float t =  smoothstep(0.0, 0.8,  (1.0 - abs(0.5 - (vp.y - time) / 20.0)) / 3.0  );\r
    gl_FragColor = mix(gl_FragColor, vec4(glowColor, 1.0), t * t );\r
  }\r
  gl_FragColor = mix(gl_FragColor, vec4( glowColor, 1.0 ), a);\r
  float b = 0.8;\r
  gl_FragColor = gl_FragColor + texture2D( map, vUv );\r
}`;class hE{constructor(e){Q(this,"group");Q(this,"earthGroup");Q(this,"around");Q(this,"aroundPoints");Q(this,"options");Q(this,"uniforms");Q(this,"timeValue");Q(this,"earth");Q(this,"punctuationMaterial");Q(this,"markupPoint");Q(this,"waveMeshArr");Q(this,"circleLineList");Q(this,"circleList");Q(this,"x");Q(this,"n");Q(this,"isRotation");Q(this,"flyLineArcGroup");this.options=e,this.group=new z4,this.group.name="group",this.group.scale.set(0,0,0),this.earthGroup=new z4,this.group.add(this.earthGroup),this.earthGroup.name="EarthGroup",this.markupPoint=new z4,this.markupPoint.name="markupPoint",this.waveMeshArr=[],this.circleLineList=[],this.circleList=[],this.x=0,this.n=0,this.isRotation=this.options.earth.isRotation,this.timeValue=200,this.uniforms={glowColor:{value:new v2(840171)},scale:{type:"f",value:-1},bias:{type:"f",value:1},power:{type:"f",value:3.3},time:{type:"f",value:this.timeValue},isHover:{value:!1},map:{value:void 0}}}async init(){return new Promise(e=>{(async()=>{this.createEarth(),this.createEarthGlow(),this.createEarthAperture(),await this.createMarkupPoint(),this.createAnimateCircle(),this.createFlyLine(),this.show(),e()})()})}createEarth(){const e=new e0(this.options.earth.radius,50,50),t=new e0(this.options.earth.radius+10,60,60),n=new jt({color:8519679,transparent:!0,sizeAttenuation:!0,opacity:.1,vertexColors:!1,size:.2}),i=new Xa(t,n);this.earthGroup.add(i),this.uniforms.map.value=this.options.textures.earth;const a=new N4({uniforms:this.uniforms,vertexShader:fE,fragmentShader:pE});a.needsUpdate=!0,this.earth=new r3(e,a),this.earth.name="earth",this.earthGroup.add(this.earth)}createEarthGlow(){const e=this.options.earth.radius,t=this.options.textures.glow,n=new Ja({map:t,color:4427985,transparent:!0,opacity:.7,depthWrite:!1}),i=new iT(n);i.scale.set(e*3,e*3,1),this.earthGroup.add(i)}createEarthAperture(){const e=["varying vec3	vVertexWorldPosition;","varying vec3	vVertexNormal;","varying vec4	vFragColor;","void main(){","	vVertexNormal	= normalize(normalMatrix * normal);","	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;","	// set gl_Position","	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),t={uniforms:{coeficient:{type:"f",value:1},power:{type:"f",value:3},glowColor:{type:"c",value:new v2(4427985)}},vertexShader:e,fragmentShader:["uniform vec3	glowColor;","uniform float	coeficient;","uniform float	power;","varying vec3	vVertexNormal;","varying vec3	vVertexWorldPosition;","varying vec4	vFragColor;","void main(){","	vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;","	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;","	viewCameraToVertex= normalize(viewCameraToVertex);","	float intensity	= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);","	gl_FragColor = vec4(glowColor, intensity);","}"].join(`
`)},n=new N4({uniforms:t.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:z0,transparent:!0,depthWrite:!1}),i=new e0(this.options.earth.radius+0,50,50),a=new r3(i,n);this.earthGroup.add(a)}async createMarkupPoint(){await Promise.all(this.options.data.map(async e=>{const t=this.options.earth.radius,n=e.startArray.E,i=e.startArray.N;this.punctuationMaterial=new L4({color:this.options.punctuation.circleColor,map:this.options.textures.label,transparent:!0,depthWrite:!1});const a=io({radius:t,lon:n,lat:i,material:this.punctuationMaterial});this.markupPoint.add(a);const r=no({radius:this.options.earth.radius,lon:n,lat:i,index:0,textures:this.options.textures,punctuation:this.options.punctuation});this.markupPoint.add(r);const s=to({radius:t,lon:n,lat:i,textures:this.options.textures});this.markupPoint.add(s),this.waveMeshArr.push(s),await Promise.all(e.endArray.map(u=>{const d=u.E,f=u.N,h=io({radius:t,lon:d,lat:f,material:this.punctuationMaterial});this.markupPoint.add(h);const p=no({radius:this.options.earth.radius,lon:d,lat:f,index:1,textures:this.options.textures,punctuation:this.options.punctuation});this.markupPoint.add(p);const g=to({radius:t,lon:d,lat:f,textures:this.options.textures});this.markupPoint.add(g),this.waveMeshArr.push(g)})),this.earthGroup.add(this.markupPoint)}))}createAnimateCircle(){const e=WT({radius:this.options.earth.radius+15,number:150,closed:!0}),t=new L4({color:"#0c3172",transparent:!0,opacity:.4,side:m4}),n=HT({pointList:e,material:t,number:100,radius:.1});this.earthGroup.add(n);const i=n.clone();i.scale.set(1.2,1.2,1.2),i.rotateZ(Math.PI/6),this.earthGroup.add(i);const a=n.clone();a.scale.set(.8,.8,.8),a.rotateZ(-Math.PI/6),this.earthGroup.add(a);const r=new r3(new e0(this.options.satellite.size,32,32),new L4({color:"#e0b187"})),s=new r3(new e0(this.options.satellite.size,32,32),new L4({color:"#628fbb"})),u=new r3(new e0(this.options.satellite.size,32,32),new L4({color:"#806bdf"}));this.circleLineList.push(n,i,a),r.name=s.name=u.name="卫星";for(let d=0;d<this.options.satellite.number;d++){const f=r.clone(),h=Math.floor(e.length/this.options.satellite.number);f.position.set(e[h*(d+1)][0]*1,e[h*(d+1)][1]*1,e[h*(d+1)][2]*1),n.add(f);const p=s.clone(),g=Math.floor(e.length/this.options.satellite.number);p.position.set(e[g*(d+1)][0]*1,e[g*(d+1)][1]*1,e[g*(d+1)][2]*1),i.add(p);const y=s.clone(),v=Math.floor(e.length/this.options.satellite.number);y.position.set(e[v*(d+1)][0]*1,e[v*(d+1)][1]*1,e[v*(d+1)][2]*1),a.add(y)}}createFlyLine(){this.flyLineArcGroup=new z4,this.flyLineArcGroup.userData.flyLineArray=[],this.earthGroup.add(this.flyLineArcGroup),this.options.data.forEach(e=>{e.endArray.forEach(t=>{const n=sE(this.options.earth.radius,e.startArray.E,e.startArray.N,t.E,t.N,this.options.flyLine);this.flyLineArcGroup.add(n),this.flyLineArcGroup.userData.flyLineArray.push(n.userData.flyLine)})})}show(){is.to(this.group.scale,{x:1,y:1,z:1,duration:2,ease:"Quadratic"})}render(){this.flyLineArcGroup?.userData.flyLineArray?.forEach(e=>{e.rotation.z+=this.options.flyLine.speed,e.rotation.z>=e.flyEndAngle&&(e.rotation.z=0)}),this.isRotation&&(this.earthGroup.rotation.y+=this.options.earth.rotateSpeed),this.circleLineList.forEach(e=>{e.rotateY(this.options.satellite.rotateSpeed)}),this.uniforms.time.value=this.uniforms.time.value<-this.timeValue?this.timeValue:this.uniforms.time.value-1,this.waveMeshArr.length&&this.waveMeshArr.forEach(e=>{e.userData.scale+=.007,e.scale.set(e.userData.size*e.userData.scale,e.userData.size*e.userData.scale,e.userData.size*e.userData.scale),e.userData.scale<=1.5?e.material.opacity=(e.userData.scale-1)*2:e.userData.scale>1.5&&e.userData.scale<=2?e.material.opacity=1-(e.userData.scale-1.5)*2:e.userData.scale=1})}}class mE{constructor(e){Q(this,"basic");Q(this,"scene");Q(this,"camera");Q(this,"renderer");Q(this,"controls");Q(this,"material");Q(this,"resources");Q(this,"option");Q(this,"earth");this.option=e,this.basic=new MT(e.dom),this.scene=this.basic.scene,this.renderer=this.basic.renderer,this.controls=this.basic.controls,this.camera=this.basic.camera,this.updateSize(),this.resources=new jT(async()=>{await this.createEarth(),this.render()})}async createEarth(e){this.earth=new hE({data:e||this.option.data,dom:this.option.dom,textures:this.resources.textures,earth:{radius:50,rotateSpeed:.002,isRotation:!0},satellite:{show:!0,rotateSpeed:-.01,size:1,number:2},punctuation:{circleColor:3707647,lightColumn:{startColor:14942335,endColor:16777215}},flyLine:{color:15969910,flyLineColor:16742164,speed:.004}}),this.scene.add(this.earth.group),await this.earth.init()}render(){requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera),this.controls&&this.controls.update(),this.earth&&this.earth.render()}updateSize(e,t){let n=e||this.option.width,i=t||this.option.height;n<i?i=n:n=i,this.renderer.setSize(n,i),this.camera.aspect=n/i,this.camera.updateProjectionMatrix()}updateData(e){this.earth.group&&(this.scene.remove(this.earth.group),this.earth.group.traverse(t=>{t.type==="Mesh"&&(t.geometry.dispose(),t.material.dispose())}),this.createEarth(e))}}const gE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=Q1(),n=J1(),{w:i,h:a}=M1(e.chartConfig.attr);let r;const s=()=>{const d=n.value;d&&(r=new mE({dom:d,data:e.chartConfig.option.dataset,width:i.value,height:a.value}))},u=d=>{try{r.updateData(d)}catch(f){console.log(f)}};return N1(()=>[i.value,a.value],z5(([d],[f])=>{r.updateSize(d,f)},100)),N1(()=>e.chartConfig.option.dataset,d=>{u(d)},{deep:!1}),m0(()=>{try{if(navigator.userAgent.indexOf("Chrome")<-1||navigator.userAgent.indexOf("Edg")<-1){window.$message.error("三维地图组件仅在【谷歌】浏览器上能正常展示！"),t.removeComponentList(void 0,!1);return}s()}catch(d){console.log(d)}}),d2(e.chartConfig,Q1,u),(d,f)=>(R(),X("div",{ref_key:"chartRef",ref:n},null,512))}}),vE=Object.freeze(Object.defineProperty({__proto__:null,default:gE},Symbol.toStringTag,{value:"Module"})),_E=["icon","rotate","width"],yE=s1({__name:"index",props:{icon:{type:String,required:!0},color:{type:String,default:"#999999",required:!1},width:{type:[String,Number],default:"20",required:!1},rotate:{type:[String,Number],default:"0",required:!1}},setup(o){return(e,t)=>(R(),X("iconify-icon",{icon:o.icon,rotate:`${o.rotate}deg`,width:o.width,style:c2({color:o.color})},null,12,_E))}}),bE={class:"go-icon-box"},xE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(u=>({"03aa6d58":`${l(t)}px`,"05512e76":`${l(n)}px`}));const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{dataset:i,color:a,size:r,rotate:s}=M1(e.chartConfig.option);return(u,d)=>(R(),X("div",bE,[c(l(yE),{icon:l(i)||"",color:l(a),width:l(r),rotate:l(s)},null,8,["icon","color","width","rotate"])]))}});const SE=r2(xE,[["__scopeId","data-v-f200a7de"]]),ME=Object.freeze(Object.defineProperty({__proto__:null,default:SE},Symbol.toStringTag,{value:"Module"}));var os={exports:{}};(function(o,e){(function(t,n){o.exports=n()})(J8,function(){var t="month",n="quarter";return function(i,a){var r=a.prototype;r.quarter=function(d){return this.$utils().u(d)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(d-1))};var s=r.add;r.add=function(d,f){return d=Number(d),this.$utils().p(f)===n?this.add(3*d,t):s.bind(this)(d,f)};var u=r.startOf;r.startOf=function(d,f){var h=this.$utils(),p=!!h.u(f)||f;if(h.p(d)===n){var g=this.quarter()-1;return p?this.month(3*g).startOf(t).startOf("day"):this.month(3*g+2).endOf(t).endOf("day")}return u.bind(this)(d,f)}}})})(os);var wE=os.exports;const AE=Z8(wE),CE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(u=>({"63c595e7":l(n)+"px"}));const e=o,{w:t,h:n}=M1(e.chartConfig.attr);J1();const i=V3({dataset:e.chartConfig.option.dataset}),a=q1(()=>e.chartConfig.option.componentInteractEventKey.endsWith("range")),r=u=>{if(a.value){let d=null,f=null,h=null;u instanceof Array&&(d=u[0],f=u[1],h=`${u[0]}-${u[1]}`),U9(e.chartConfig,Q1,{[u5.DATE_START]:d,[u5.DATE_END]:f,[u5.DATE_RANGE]:h},u4.CHANGE)}else U9(e.chartConfig,Q1,{[u5.DATE]:u},u4.CHANGE)},s=(u,d)=>{switch(g5.extend(AE),u){case i3.DATE:case i3.DATE_RANGE:d=d.startOf("day");break;case i3.MONTH:case i3.MONTH_RANGE:d=d.startOf("month");break;case i3.YEAR:case i3.YEAR_RANGE:d=d.startOf("year");break;case i3.QUARTER:case i3.QUARTER_RANGE:d=d.startOf("quarter");break}return d};return N1(()=>({type:e.chartConfig.option.componentInteractEventKey,defaultType:e.chartConfig.option.defaultType,differValue:e.chartConfig.option.differValue,differUnit:e.chartConfig.option.differUnit,dataset:e.chartConfig.option.dataset}),(u,d)=>{const f=u.type!==d?.type,h=u.defaultType!==d?.defaultType,p=u.differValue!==d?.differValue,g=u.differUnit!==d?.differUnit;if(f||h||p||g){if(u.defaultType===I4.NONE)e.chartConfig.option.dataset=null;else if(u.defaultType===I4.DYNAMIC){let y=g5();a.value?e.chartConfig.option.dataset=[s(u.type,y.add(u.differValue[0],u.differUnit[0])).valueOf(),s(u.type,y.add(u.differValue[1],u.differUnit[1])).valueOf()]:e.chartConfig.option.dataset=s(u.type,y.add(u.differValue[0],u.differUnit[0])).valueOf()}}i.dataset=e.chartConfig.option.dataset,r(i.dataset)},{immediate:!0}),(u,d)=>{const f=L("n-date-picker");return R(),p1(f,{value:l(i).dataset,"onUpdate:value":[d[0]||(d[0]=h=>l(i).dataset=h),r],clearable:"",panel:!!o.chartConfig.option.isPanel,type:o.chartConfig.option.componentInteractEventKey,style:c2(`width:${l(t)}px;`)},null,8,["value","panel","type","style"])}}});const TE=r2(CE,[["__scopeId","data-v-8391085f"]]),DE=Object.freeze(Object.defineProperty({__proto__:null,default:TE},Symbol.toStringTag,{value:"Module"}));var EE=(o=>(o.DATA="data",o))(EE||{}),as=(o=>(o.DATA="data",o))(as||{});const kP=[{interactType:u4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"选择项"}]}}],RE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),i=V3({value:{inputValue:e.chartConfig.option.inputValue,dataset:e.chartConfig.option.dataset}}),a=r=>{r!=null&&U9(e.chartConfig,Q1,{[as.DATA]:r},u4.CHANGE)};return N1(()=>e.chartConfig.option,r=>{i.value=r,a(r.inputValue)},{immediate:!0,deep:!0}),(r,s)=>{const u=L("n-input");return R(),X("div",null,[c(u,{style:c2(`width:${l(t)}px;`),type:"text",value:l(i).value.dataset,"onUpdate:value":s[0]||(s[0]=d=>l(i).value.dataset=d),placeholder:"请输入",onChange:a},null,8,["style","value"])])}}}),IE=Object.freeze(Object.defineProperty({__proto__:null,default:RE},Symbol.toStringTag,{value:"Module"}));var OE=(o=>(o.DATA="data",o))(OE||{}),ze=(o=>(o.DATA="data",o.DATA2="data2",o))(ze||{});const UP=[{interactType:u4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"页数"},{value:"data2",label:"每页条数"}]}}],LE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),i=V3({value:{pageValue:e.chartConfig.option.pageValue,dataset:e.chartConfig.option.dataset,sizeValue:e.chartConfig.option.sizeValue,pageSize:e.chartConfig.option.pageSize}}),a=(r,s)=>{r!=null&&U9(e.chartConfig,Q1,{[ze.DATA]:r,[ze.DATA2]:s},u4.CHANGE)};return N1(()=>e.chartConfig.option,r=>{i.value=r,a(r.pageValue,r.pageSize)},{immediate:!0,deep:!0}),(r,s)=>{const u=L("n-pagination");return R(),X("div",null,[c(u,{"onOnUpdate:page":a,style:c2(`width:${l(t)}px;`),page:l(i).value.pageValue,"onUpdate:page":s[0]||(s[0]=d=>l(i).value.pageValue=d),"page-count":l(i).value.dataset,"page-slot":7,"show-size-picker":"","page-sizes":l(i).value.sizeValue,"page-size":l(i).value.pageSize,"onUpdate:pageSize":s[1]||(s[1]=d=>l(i).value.pageSize=d)},null,8,["style","page","page-count","page-sizes","page-size"])])}}}),zE=Object.freeze(Object.defineProperty({__proto__:null,default:LE},Symbol.toStringTag,{value:"Module"}));var PE=(o=>(o.DATA="data",o))(PE||{}),rs=(o=>(o.DATA="data",o))(rs||{});const NP=[{interactType:u4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"选择项"}]}}],kE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(r=>({dedf49c0:l(n)+"px"}));const e=o,{w:t,h:n}=M1(e.chartConfig.attr),i=V3({value:{selectValue:e.chartConfig.option.selectValue,dataset:e.chartConfig.option.dataset}}),a=r=>{U9(e.chartConfig,Q1,{[rs.DATA]:r},u4.CHANGE)};return N1(()=>e.chartConfig.option,r=>{i.value=r,a(r.selectValue)},{immediate:!0,deep:!0}),(r,s)=>{const u=L("n-select");return R(),p1(u,{value:l(i).value.selectValue,"onUpdate:value":[s[0]||(s[0]=d=>l(i).value.selectValue=d),a],options:l(i).value.dataset,style:c2(`width:${l(t)}px;`)},null,8,["value","options","style"])}}});const UE=r2(kE,[["__scopeId","data-v-ccd348c5"]]),NE=Object.freeze(Object.defineProperty({__proto__:null,default:UE},Symbol.toStringTag,{value:"Module"}));var FE=(o=>(o.DATA="data",o))(FE||{}),ss=(o=>(o.DATA="data",o))(ss||{});const FP=[{interactType:u4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"选择项"}]}}],BE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;M1(e.chartConfig.attr);const t=V3({value:D1(e.chartConfig.option)}),n=i=>{if(i===void 0)return;const a=t.value.dataset.find(r=>r.label===i);U9(e.chartConfig,Q1,{[ss.DATA]:a.value},u4.CHANGE)};return N1(()=>e.chartConfig.option,i=>{t.value=i,n(i.tabValue)},{immediate:!0,deep:!0}),(i,a)=>{const r=L("n-tab"),s=L("n-tabs");return R(),p1(s,{type:l(t).value.tabType,"onUpdate:value":n,"default-value":l(t).value.tabLabel},{default:m(()=>[(R(!0),X(b1,null,j1(l(t).value.dataset,(u,d)=>(R(),p1(r,{name:u.label,key:d},{default:m(()=>[A1(C2(u.label),1)]),_:2},1032,["name"]))),128))]),_:1},8,["type","default-value"])}}}),GE=Object.freeze(Object.defineProperty({__proto__:null,default:BE},Symbol.toStringTag,{value:"Module"})),VE=["src","width","height"],jE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{borderRadius:i}=M1(e.chartConfig.option),a=V3({dataset:""}),r=s=>({borderRadius:`${s}px`,overflow:"hidden"});return N1(()=>e.chartConfig.option.dataset,s=>{a.dataset=s},{immediate:!0}),d2(e.chartConfig,Q1,s=>{a.dataset=s}),(s,u)=>(R(),X("div",{style:c2(r(l(i)))},[j("iframe",{src:l(a).dataset,width:l(t),height:l(n),style:{"border-width":"0"}},null,8,VE)],4))}}),WE=Object.freeze(Object.defineProperty({__proto__:null,default:jE},Symbol.toStringTag,{value:"Module"})),HE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{dataset:i,fit:a,borderRadius:r}=M1(e.chartConfig.option),s=V3({dataset:""}),u=d=>({borderRadius:`${d}px`,overflow:"hidden"});return N1(()=>e.chartConfig.option.dataset,d=>{s.dataset=d},{immediate:!0}),d2(e.chartConfig,Q1,d=>{s.dataset=d}),(d,f)=>{const h=L("n-image");return R(),X("div",{style:c2(u(l(r)))},[c(h,{"object-fit":l(a),"preview-disabled":"",src:l(s).dataset,"fallback-src":l(zo)(),width:l(t),height:l(n),lazy:""},null,8,["object-fit","src","fallback-src","width","height"])],4)}}}),$E=Object.freeze(Object.defineProperty({__proto__:null,default:HE},Symbol.toStringTag,{value:"Module"})),Pe={key:"ImageCarousel",chartKey:"VImageCarousel",conKey:"VCImageCarousel",title:"轮播图",category:T3.MORE,categoryName:D3.MORE,package:T1.INFORMATIONS,chartFrame:k1.NAIVE_UI,image:"photo_carousel.png"},dn={dataset:["https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg","https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg","https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"],autoplay:!0,interval:5e3,slidesPerview:1,direction:"horizontal",draggable:!0,centeredSlides:!1,effect:"slide",showDots:!0,dotType:"dot",dotPlacement:"bottom",showArrow:!1,fit:"contain"};let YE=class extends K1{constructor(){super(...arguments);Q(this,"key",Pe.key);Q(this,"chartConfig",D1(Pe));Q(this,"option",D1(dn))}};const JE=Object.freeze(Object.defineProperty({__proto__:null,default:YE,option:dn},Symbol.toStringTag,{value:"Module"})),ZE=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=V3({dataset:dn.dataset}),{w:n,h:i}=M1(e.chartConfig.attr),{autoplay:a,interval:r,slidesPerview:s,direction:u,draggable:d,centeredSlides:f,effect:h,dotType:p,dotPlacement:g,showArrow:y,showDots:v,fit:_}=M1(e.chartConfig.option);return N1(()=>e.chartConfig.option.dataset,S=>{t.dataset=S},{immediate:!0,deep:!1}),d2(e.chartConfig,Q1,S=>{t.dataset=S}),(S,x)=>{const M=L("n-image"),b=L("n-carousel");return R(),X("div",null,[c(b,{autoplay:l(a),interval:l(r),"centered-slides":l(f),direction:l(u),"dot-placement":l(g),"dot-type":l(p),draggable:l(d),effect:l(h),"slides-per-view":l(s),"show-arrow":l(y),"show-dots":l(v)},{default:m(()=>[(R(!0),X(b1,null,j1(l(t).dataset,(C,w)=>(R(),p1(M,{"preview-disabled":"",key:w,"object-fit":l(_),src:C,"fallback-src":l(zo)(),width:l(n),height:l(i)},null,8,["object-fit","src","fallback-src","width","height"]))),128))]),_:1},8,["autoplay","interval","centered-slides","direction","dot-placement","dot-type","draggable","effect","slides-per-view","show-arrow","show-dots"])])}}}),qE=Object.freeze(Object.defineProperty({__proto__:null,default:ZE},Symbol.toStringTag,{value:"Module"})),ke={key:"Video",chartKey:"VVideo",conKey:"VCVideo",title:"视频",category:T3.MORE,categoryName:D3.MORE,package:T1.INFORMATIONS,chartFrame:k1.COMMON,image:"video.png"},XE=""+new URL("../mp4/earth-1d58aa0e.mp4",import.meta.url).href,fn={dataset:XE,loop:!0,muted:!0,fit:"contain",borderRadius:10};let QE=class extends K1{constructor(){super(...arguments);Q(this,"key",ke.key);Q(this,"chartConfig",D1(ke));Q(this,"option",D1(fn))}};const KE=Object.freeze(Object.defineProperty({__proto__:null,default:QE,option:fn},Symbol.toStringTag,{value:"Module"})),eR=["loop","muted","width","height","src"],tR=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(r=>({b3a22574:l(i).fit}));const e=o,{w:t,h:n}=M1(e.chartConfig.attr);let i=V3({...fn});const a=J1(null);return d2(e.chartConfig,Q1,r=>{i.dataset=r}),N1(()=>e.chartConfig.option,r=>{if(i=r,!a.value)return;const s=a.value;s.loop=i.loop,s.muted=i.muted,s.play()},{immediate:!0,deep:!0}),(r,s)=>(R(),X("video",{ref_key:"vVideoRef",ref:a,class:"go-video",preload:"auto",crossOrigin:"anonymous",playsinline:"",autoplay:"",loop:l(i).loop,muted:l(i).muted,width:l(t),height:l(n),src:l(i).dataset},null,8,eR))}});const nR=r2(tR,[["__scopeId","data-v-d58af42b"]]),iR=Object.freeze(Object.defineProperty({__proto__:null,default:nR},Symbol.toStringTag,{value:"Module"}));Do({type:"series.wordCloud",visualStyleAccessPath:"textStyle",visualStyleMapper:function(o){return{fill:o.get("color")}},visualDrawType:"fill",optionUpdated:function(){var o=this.option;o.gridSize=Math.max(Math.floor(o.gridSize),4)},getInitialData:function(o,e){var t=Eo(o.data,{coordDimensions:["value"]}),n=new Ro(t,this);return n.initData(o.data),n},defaultOption:{maskImage:null,shape:"circle",keepAspect:!1,left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,textStyle:{fontWeight:"normal"}}});Io({type:"wordCloud",render:function(o,e,t){var n=this.group;n.removeAll();var i=o.getData(),a=o.get("gridSize");o.layoutInstance.ondraw=function(r,s,u,d){var f=i.getItemModel(u),h=f.getModel("textStyle"),p=new d7({style:C8(h),scaleX:1/d.info.mu,scaleY:1/d.info.mu,x:(d.gx+d.info.gw/2)*a,y:(d.gy+d.info.gh/2)*a,rotation:d.rot});p.setStyle({x:d.info.fillTextOffsetX,y:d.info.fillTextOffsetY+s*.5,text:r,verticalAlign:"middle",fill:i.getItemVisual(u,"style").fill,fontSize:s}),n.add(p),i.setItemGraphicEl(u,p),p.ensureState("emphasis").style=C8(f.getModel(["emphasis","textStyle"]),{state:"emphasis"}),p.ensureState("blur").style=C8(f.getModel(["blur","textStyle"]),{state:"blur"}),Oo(p,f.get(["emphasis","focus"]),f.get(["emphasis","blurScope"])),p.stateTransition={duration:o.get("animation")?o.get(["stateAnimation","duration"]):0,easing:o.get(["stateAnimation","easing"])},p.__highDownDispatcher=!0},this._model=o},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}});/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
 * Released under the MIT license
 */window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],n="zero-timeout-message",i=function(r){var s=t.length;return t.push(r),window.postMessage(n+s.toString(36),"*"),s};return window.addEventListener("message",function(r){if(!(typeof r.data!="string"||r.data.substr(0,n.length)!==n)){r.stopImmediatePropagation();var s=parseInt(r.data.substr(n.length),36);t[s]&&(t[s](),t[s]=void 0)}},!0),window.clearImmediate=function(r){t[r]&&(t[r]=void 0)},i}()||function(t){window.setTimeout(t,0)}}());window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}}());var pn=function(){var e=document.createElement("canvas");if(!e||!e.getContext)return!1;var t=e.getContext("2d");return!(!t||!t.getImageData||!t.fillText||!Array.prototype.some||!Array.prototype.push)}(),Ue=function(){if(pn){for(var e=document.createElement("canvas").getContext("2d"),t=20,n,i;t;){if(e.font=t.toString(10)+"px sans-serif",e.measureText("Ｗ").width===n&&e.measureText("m").width===i)return t+1;n=e.measureText("Ｗ").width,i=e.measureText("m").width,t--}return 0}}(),oR=function(o){if(Array.isArray(o)){var e=o.slice();return e.splice(0,2),e}else return[]},aR=function(e){for(var t,n,i=e.length;i;)t=Math.floor(Math.random()*i),n=e[--i],e[i]=e[t],e[t]=n;return e},b9={},a6=function(e,t){if(!pn)return;var n=Math.floor(Math.random()*Date.now());Array.isArray(e)||(e=[e]),e.forEach(function(a1,K){if(typeof a1=="string"){if(e[K]=document.getElementById(a1),!e[K])throw new Error("The element id specified is not found.")}else if(!a1.tagName&&!a1.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")});var i={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,layoutAnimation:!0,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(t)for(var a in t)a in i&&(i[a]=t[a]);if(typeof i.weightFactor!="function"){var r=i.weightFactor;i.weightFactor=function(K){return K*r}}if(typeof i.shape!="function")switch(i.shape){case"circle":default:i.shape="circle";break;case"cardioid":i.shape=function(K){return 1-Math.sin(K)};break;case"diamond":i.shape=function(K){var Z=K%(2*Math.PI/4);return 1/(Math.cos(Z)+Math.sin(Z))};break;case"square":i.shape=function(K){return Math.min(1/Math.abs(Math.cos(K)),1/Math.abs(Math.sin(K)))};break;case"triangle-forward":i.shape=function(K){var Z=K%(2*Math.PI/3);return 1/(Math.cos(Z)+Math.sqrt(3)*Math.sin(Z))};break;case"triangle":case"triangle-upright":i.shape=function(K){var Z=(K+Math.PI*3/2)%(2*Math.PI/3);return 1/(Math.cos(Z)+Math.sqrt(3)*Math.sin(Z))};break;case"pentagon":i.shape=function(K){var Z=(K+.955)%(2*Math.PI/5);return 1/(Math.cos(Z)+.726543*Math.sin(Z))};break;case"star":i.shape=function(K){var Z=(K+.955)%(2*Math.PI/10);return(K+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-Z)+3.07768*Math.sin(2*Math.PI/10-Z)):1/(Math.cos(Z)+3.07768*Math.sin(Z))};break}i.gridSize=Math.max(Math.floor(i.gridSize),4);var s=i.gridSize,u=s-i.maskGapWidth,d=Math.abs(i.maxRotation-i.minRotation),f=Math.min(i.maxRotation,i.minRotation),h=i.rotationStep,p,g,y,v,_,S,x;function M(a1,K){return"hsl("+(Math.random()*360).toFixed()+","+(Math.random()*30+70).toFixed()+"%,"+(Math.random()*(K-a1)+a1).toFixed()+"%)"}switch(i.color){case"random-dark":x=function(){return M(10,50)};break;case"random-light":x=function(){return M(50,90)};break;default:typeof i.color=="function"&&(x=i.color);break}var b;typeof i.fontWeight=="function"&&(b=i.fontWeight);var C=null;typeof i.classes=="function"&&(C=i.classes);var w=!1,I=[],T,D=function(K){var Z=K.currentTarget,d1=Z.getBoundingClientRect(),m1,g1;K.touches?(m1=K.touches[0].clientX,g1=K.touches[0].clientY):(m1=K.clientX,g1=K.clientY);var c1=m1-d1.left,z1=g1-d1.top,w1=Math.floor(c1*(Z.width/d1.width||1)/s),x1=Math.floor(z1*(Z.height/d1.height||1)/s);return I[w1]?I[w1][x1]:null},N=function(K){var Z=D(K);if(T!==Z){if(T=Z,!Z){i.hover(void 0,void 0,K);return}i.hover(Z.item,Z.dimension,K)}},V=function(K){var Z=D(K);Z&&(i.click(Z.item,Z.dimension,K),K.preventDefault())},q=[],$=function(K){if(q[K])return q[K];var Z=K*8,d1=Z,m1=[];for(K===0&&m1.push([v[0],v[1],0]);d1--;){var g1=1;i.shape!=="circle"&&(g1=i.shape(d1/Z*2*Math.PI)),m1.push([v[0]+K*g1*Math.cos(-d1/Z*2*Math.PI),v[1]+K*g1*Math.sin(-d1/Z*2*Math.PI)*i.ellipticity,d1/Z*2*Math.PI])}return q[K]=m1,m1},k=function(){return i.abortThreshold>0&&new Date().getTime()-S>i.abortThreshold},B=function(){return i.rotateRatio===0||Math.random()>i.rotateRatio?0:d===0?f:f+Math.round(Math.random()*d/h)*h},G=function(K,Z,d1,m1){var g1=i.weightFactor(Z);if(g1<=i.minSize)return!1;var c1=1;g1<Ue&&(c1=function(){for(var V1=2;V1*g1<Ue;)V1+=2;return V1}());var z1;b?z1=b(K,Z,g1,m1):z1=i.fontWeight;var w1=document.createElement("canvas"),x1=w1.getContext("2d",{willReadFrequently:!0});x1.font=z1+" "+(g1*c1).toString(10)+"px "+i.fontFamily;var X1=x1.measureText(K).width/c1,Y1=Math.max(g1*c1,x1.measureText("m").width,x1.measureText("Ｗ").width)/c1,$1=X1+Y1*2,t2=Y1*3,s2=Math.ceil($1/s),G1=Math.ceil(t2/s);$1=s2*s,t2=G1*s;var n2=-X1/2,W1=-Y1*.4,z=Math.ceil(($1*Math.abs(Math.sin(d1))+t2*Math.abs(Math.cos(d1)))/s),E=Math.ceil(($1*Math.abs(Math.cos(d1))+t2*Math.abs(Math.sin(d1)))/s),l1=E*s,S1=z*s;w1.setAttribute("width",l1),w1.setAttribute("height",S1),x1.scale(1/c1,1/c1),x1.translate(l1*c1/2,S1*c1/2),x1.rotate(-d1),x1.font=z1+" "+(g1*c1).toString(10)+"px "+i.fontFamily,x1.fillStyle="#000",x1.textBaseline="middle",x1.fillText(K,n2*c1,(W1+g1*.5)*c1);var C1=x1.getImageData(0,0,l1,S1).data;if(k())return!1;for(var O1=[],H1=E,H,i1,L1,P1=[z/2,E/2,z/2,E/2];H1--;)for(H=z;H--;){L1=s;e:for(;L1--;)for(i1=s;i1--;)if(C1[((H*s+L1)*l1+(H1*s+i1))*4+3]){O1.push([H1,H]),H1<P1[3]&&(P1[3]=H1),H1>P1[1]&&(P1[1]=H1),H<P1[0]&&(P1[0]=H),H>P1[2]&&(P1[2]=H);break e}}return{mu:c1,occupied:O1,bounds:P1,gw:E,gh:z,fillTextOffsetX:n2,fillTextOffsetY:W1,fillTextWidth:X1,fillTextHeight:Y1,fontSize:g1}},J=function(K,Z,d1,m1,g1){for(var c1=g1.length;c1--;){var z1=K+g1[c1][0],w1=Z+g1[c1][1];if(z1>=g||w1>=y||z1<0||w1<0){if(!i.drawOutOfBound)return!1;continue}if(!p[z1][w1])return!1}return!0},O=function(K,Z,d1,m1,g1,c1,z1,w1,x1,X1){var Y1=d1.fontSize,$1;x?$1=x(m1,g1,Y1,c1,z1,X1):$1=i.color;var t2;b?t2=b(m1,g1,Y1,X1):t2=i.fontWeight;var s2;C?s2=C(m1,g1,Y1,X1):s2=i.classes,e.forEach(function(G1){if(G1.getContext){var n2=G1.getContext("2d"),W1=d1.mu;n2.save(),n2.scale(1/W1,1/W1),n2.font=t2+" "+(Y1*W1).toString(10)+"px "+i.fontFamily,n2.fillStyle=$1,n2.translate((K+d1.gw/2)*s*W1,(Z+d1.gh/2)*s*W1),w1!==0&&n2.rotate(-w1),n2.textBaseline="middle",n2.fillText(m1,d1.fillTextOffsetX*W1,(d1.fillTextOffsetY+Y1*.5)*W1),n2.restore()}else{var z=document.createElement("span"),E="";E="rotate("+-w1/Math.PI*180+"deg) ",d1.mu!==1&&(E+="translateX(-"+d1.fillTextWidth/4+"px) scale("+1/d1.mu+")");var l1={position:"absolute",display:"block",font:t2+" "+Y1*d1.mu+"px "+i.fontFamily,left:(K+d1.gw/2)*s+d1.fillTextOffsetX+"px",top:(Z+d1.gh/2)*s+d1.fillTextOffsetY+"px",width:d1.fillTextWidth+"px",height:d1.fillTextHeight+"px",lineHeight:Y1+"px",whiteSpace:"nowrap",transform:E,webkitTransform:E,msTransform:E,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};$1&&(l1.color=$1),z.textContent=m1;for(var S1 in l1)z.style[S1]=l1[S1];if(x1)for(var C1 in x1)z.setAttribute(C1,x1[C1]);s2&&(z.className+=s2),G1.appendChild(z)}})},U=function(K,Z,d1,m1,g1){if(!(K>=g||Z>=y||K<0||Z<0)){if(p[K][Z]=!1,d1){var c1=e[0].getContext("2d");c1.fillRect(K*s,Z*s,u,u)}w&&(I[K][Z]={item:g1,dimension:m1})}},F=function(K,Z,d1,m1,g1,c1){var z1=g1.occupied,w1=i.drawMask,x1;w1&&(x1=e[0].getContext("2d"),x1.save(),x1.fillStyle=i.maskColor);var X1;if(w){var Y1=g1.bounds;X1={x:(K+Y1[3])*s,y:(Z+Y1[0])*s,w:(Y1[1]-Y1[3]+1)*s,h:(Y1[2]-Y1[0]+1)*s}}for(var $1=z1.length;$1--;){var t2=K+z1[$1][0],s2=Z+z1[$1][1];t2>=g||s2>=y||t2<0||s2<0||U(t2,s2,w1,X1,c1)}w1&&x1.restore()},t1=function a1(K,Z){if(Z>20)return null;var d1,m1,g1;Array.isArray(K)?(d1=K[0],m1=K[1]):(d1=K.word,m1=K.weight,g1=K.attributes);var c1=B(),z1=oR(K),w1=G(d1,m1,c1,z1);if(!w1||k())return!1;if(!i.drawOutOfBound&&!i.shrinkToFit){var x1=w1.bounds;if(x1[1]-x1[3]+1>g||x1[2]-x1[0]+1>y)return!1}for(var X1=_+1,Y1=function(G1){var n2=Math.floor(G1[0]-w1.gw/2),W1=Math.floor(G1[1]-w1.gh/2),z=w1.gw,E=w1.gh;return J(n2,W1,z,E,w1.occupied)?(O(n2,W1,w1,d1,m1,_-X1,G1[2],c1,g1,z1),F(n2,W1,z,E,w1,K),{gx:n2,gy:W1,rot:c1,info:w1}):!1};X1--;){var $1=$(_-X1);i.shuffle&&($1=[].concat($1),aR($1));for(var t2=0;t2<$1.length;t2++){var s2=Y1($1[t2]);if(s2)return s2}}return i.shrinkToFit?(Array.isArray(K)?K[1]=K[1]*3/4:K.weight=K.weight*3/4,a1(K,Z+1)):null},n1=function(K,Z,d1){if(Z)return!e.some(function(m1){var g1=new CustomEvent(K,{detail:d1||{}});return!m1.dispatchEvent(g1)},this);e.forEach(function(m1){var g1=new CustomEvent(K,{detail:d1||{}});m1.dispatchEvent(g1)},this)},u1=function(){var K=e[0];if(K.getContext)g=Math.ceil(K.width/s),y=Math.ceil(K.height/s);else{var Z=K.getBoundingClientRect();g=Math.ceil(Z.width/s),y=Math.ceil(Z.height/s)}if(n1("wordcloudstart",!0)){v=i.origin?[i.origin[0]/s,i.origin[1]/s]:[g/2,y/2],_=Math.floor(Math.sqrt(g*g+y*y)),p=[];var d1,m1,g1;if(!K.getContext||i.clearCanvas)for(e.forEach(function(W1){if(W1.getContext){var z=W1.getContext("2d");z.fillStyle=i.backgroundColor,z.clearRect(0,0,g*(s+1),y*(s+1)),z.fillRect(0,0,g*(s+1),y*(s+1))}else W1.textContent="",W1.style.backgroundColor=i.backgroundColor,W1.style.position="relative"}),d1=g;d1--;)for(p[d1]=[],m1=y;m1--;)p[d1][m1]=!0;else{var c1=document.createElement("canvas").getContext("2d");c1.fillStyle=i.backgroundColor,c1.fillRect(0,0,1,1);var z1=c1.getImageData(0,0,1,1).data,w1=K.getContext("2d").getImageData(0,0,g*s,y*s).data;d1=g;for(var x1,X1;d1--;)for(p[d1]=[],m1=y;m1--;){X1=s;e:for(;X1--;)for(x1=s;x1--;)for(g1=4;g1--;)if(w1[((m1*s+X1)*g*s+(d1*s+x1))*4+g1]!==z1[g1]){p[d1][m1]=!1;break e}p[d1][m1]!==!1&&(p[d1][m1]=!0)}w1=c1=z1=void 0}if(i.hover||i.click){for(w=!0,d1=g+1;d1--;)I[d1]=[];i.hover&&K.addEventListener("mousemove",N),i.click&&(K.addEventListener("click",V),K.addEventListener("touchstart",V),K.addEventListener("touchend",function(W1){W1.preventDefault()}),K.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),K.addEventListener("wordcloudstart",function W1(){K.removeEventListener("wordcloudstart",W1),K.removeEventListener("mousemove",N),K.removeEventListener("click",V),T=void 0})}g1=0;var Y1,$1,t2=!0;i.layoutAnimation?i.wait!==0?(Y1=window.setTimeout,$1=window.clearTimeout):(Y1=window.setImmediate,$1=window.clearImmediate):(Y1=function(W1){W1()},$1=function(){t2=!1});var s2=function(z,E){e.forEach(function(l1){l1.addEventListener(z,E)},this)},G1=function(z,E){e.forEach(function(l1){l1.removeEventListener(z,E)},this)},n2=function W1(){G1("wordcloudstart",W1),$1(b9[n])};s2("wordcloudstart",n2),b9[n]=(i.layoutAnimation?Y1:setTimeout)(function W1(){if(t2){if(g1>=i.list.length){$1(b9[n]),n1("wordcloudstop",!1),G1("wordcloudstart",n2),delete b9[n];return}S=new Date().getTime();var z=t1(i.list[g1],0),E=!n1("wordclouddrawn",!0,{item:i.list[g1],drawn:z});if(k()||E){$1(b9[n]),i.abort(),n1("wordcloudabort",!1),n1("wordcloudstop",!1),G1("wordcloudstart",n2);return}g1++,b9[n]=Y1(W1,i.wait)}},i.wait)}};u1()};a6.isSupported=pn;a6.minFontSize=Ue;if(!a6.isSupported)throw new Error("Sorry your browser not support wordCloud");function rR(o){for(var e=o.getContext("2d"),t=e.getImageData(0,0,o.width,o.height),n=e.createImageData(t),i=0,a=0,r=0;r<t.data.length;r+=4){var s=t.data[r+3];if(s>128){var u=t.data[r]+t.data[r+1]+t.data[r+2];i+=u,++a}}for(var d=i/a,r=0;r<t.data.length;r+=4){var u=t.data[r]+t.data[r+1]+t.data[r+2],s=t.data[r+3];s<128||u>d?(n.data[r]=0,n.data[r+1]=0,n.data[r+2]=0,n.data[r+3]=0):(n.data[r]=255,n.data[r+1]=255,n.data[r+2]=255,n.data[r+3]=255)}e.putImageData(n,0,0)}Gs(function(o,e){o.eachSeriesByType("wordCloud",function(t){var n=Hs(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),i=t.get("keepAspect"),a=t.get("maskImage"),r=a?a.width/a.height:1;i&&sR(n,r);var s=t.getData(),u=document.createElement("canvas");u.width=n.width,u.height=n.height;var d=u.getContext("2d");if(a)try{d.drawImage(a,0,0,u.width,u.height),rR(u)}catch(_){console.error("Invalid mask image"),console.error(_.toString())}var f=t.get("sizeRange"),h=t.get("rotationRange"),p=s.getDataExtent("value"),g=Math.PI/180,y=t.get("gridSize");a6(u,{list:s.mapArray("value",function(_,S){var x=s.getItemModel(S);return[s.getName(S),x.get("textStyle.fontSize",!0)||$s(_,p,f),S]}).sort(function(_,S){return S[1]-_[1]}),fontFamily:t.get("textStyle.fontFamily")||t.get("emphasis.textStyle.fontFamily")||o.get("textStyle.fontFamily"),fontWeight:t.get("textStyle.fontWeight")||t.get("emphasis.textStyle.fontWeight")||o.get("textStyle.fontWeight"),gridSize:y,ellipticity:n.height/n.width,minRotation:h[0]*g,maxRotation:h[1]*g,clearCanvas:!a,rotateRatio:1,rotationStep:t.get("rotationStep")*g,drawOutOfBound:t.get("drawOutOfBound"),shrinkToFit:t.get("shrinkToFit"),layoutAnimation:t.get("layoutAnimation"),shuffle:!1,shape:t.get("shape")});function v(_){var S=_.detail.item;_.detail.drawn&&t.layoutInstance.ondraw&&(_.detail.drawn.gx+=n.x/y,_.detail.drawn.gy+=n.y/y,t.layoutInstance.ondraw(S[0],S[1],S[2],_.detail.drawn))}u.addEventListener("wordclouddrawn",v),t.layoutInstance&&t.layoutInstance.dispose(),t.layoutInstance={ondraw:null,dispose:function(){u.removeEventListener("wordclouddrawn",v),u.addEventListener("wordclouddrawn",function(_){_.preventDefault()})}}})});Vs(function(o){var e=(o||{}).series;!js(e)&&(e=e?[e]:[]);var t=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];wn(e,function(i){if(i&&i.type==="wordCloud"){var a=i.textStyle||{};n(a.normal),n(a.emphasis)}});function n(i){i&&wn(t,function(a){i.hasOwnProperty(a)&&(i["text"+Ws(a)]=i[a])})}});function sR(o,e){var t=o.width,n=o.height;t>n*e?(o.x+=(t-n*e)/2,o.width=n*e):(o.y+=(n-t/e)/2,o.height=t/e)}const lR=s1({__name:"index",props:{themeSetting:{type:Object,required:!0},themeColor:{type:Object,required:!0},chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=W2(e.chartConfig.option,e.themeSetting);E2([z2,J2,t3]);const n=J1(),i=q1(()=>Z2(e.chartConfig.option,e.themeSetting,xt)),a=s=>{try{s&&(e.chartConfig.option.series[0].data=s),r.value&&A2()&&g0(r.value,e.chartConfig.option)}catch(u){console.log(u)}};N1(()=>e.chartConfig.option.dataset,s=>{a(s)},{deep:!1});const{vChartRef:r}=d2(e.chartConfig,Q1,s=>{a(s)});return(s,u)=>(R(),p1(l(j2),{ref_key:"vChartRef",ref:r,"init-options":l(t),theme:o.themeColor,option:i.value,"manual-update":l(A2)(),"update-options":{replaceMerge:n.value},autoresize:""},null,8,["init-options","theme","option","manual-update","update-options"]))}}),uR=Object.freeze(Object.defineProperty({__proto__:null,default:lR},Symbol.toStringTag,{value:"Module"})),cR={class:"go-text-box"},dR={class:"content"},fR=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(p=>({"70d729ef":l(n),71001118:l(i)+"px",b58b5356:l(a)+"px","68becd28":l(r),"0b128734":l(d),e56c6f2c:h.value+"s","704340b0":l(s)+"s"}));const e=o,{w:t}=M1(e.chartConfig.attr),{fontColor:n,fontSize:i,letterSpacing:a,fontWeight:r,animationTime:s,animationSpeed:u,boxShadow:d}=M1(e.chartConfig.option),f=V3({dataset:St.dataset});N1(()=>e.chartConfig.option.dataset,p=>{f.dataset=p},{immediate:!0,deep:!1}),N1(e.chartConfig.option,()=>{try{e.chartConfig.option.showShadow?d.value=`${e.chartConfig.option.hShadow}px ${e.chartConfig.option.vShadow}px ${e.chartConfig.option.blurShadow}px ${e.chartConfig.option.colorShadow}`:d.value="none"}catch(p){console.log(p)}},{immediate:!0});const h=q1(()=>Math.floor(t.value/u.value));return d2(e.chartConfig,Q1,p=>{f.dataset=p}),(p,g)=>(R(),X("div",cR,[j("div",dR,[j("span",null,C2(l(f).dataset),1)])]))}});const pR=r2(fR,[["__scopeId","data-v-bdaf5f90"]]),hR=Object.freeze(Object.defineProperty({__proto__:null,default:pR},Symbol.toStringTag,{value:"Module"})),mR={class:"go-text-box"},gR={class:"content"},vR={key:1,style:{"white-space":"pre-wrap"}},_R=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){n4(x=>({a7772b6c:l(d),e31d3e74:l(i),"4f9c10f6":`${l(s)}px ${l(u)}px`,"70f58aaf":l(a)+"px","5b1779c4":l(r)+"px","6a745891":l(g),"614d3d75":l(v),"0cb4bc41":l(f)+"px","26badf01":l(p)+"px",40790689:l(h),"03962dc7":l(y)}));const e=o,{linkHead:t,link:n,fontColor:i,fontSize:a,letterSpacing:r,paddingY:s,paddingX:u,textAlign:d,borderWidth:f,borderColor:h,borderRadius:p,writingMode:g,backgroundColor:y,fontWeight:v}=M1(e.chartConfig.option),_=V3({dataset:Mt.dataset});N1(()=>e.chartConfig.option.dataset,x=>{_.dataset=x},{immediate:!0,deep:!1}),d2(e.chartConfig,Q1,x=>{_.dataset=x});const S=()=>{window.open(t.value+n.value)};return(x,M)=>(R(),X("div",mR,[j("div",gR,[l(n)?(R(),X("span",{key:0,style:{cursor:"pointer","white-space":"pre-wrap"},onClick:S},C2(l(_).dataset),1)):(R(),X("span",vR,C2(l(_).dataset),1))])]))}});const yR=r2(_R,[["__scopeId","data-v-6d81d896"]]),bR=Object.freeze(Object.defineProperty({__proto__:null,default:yR},Symbol.toStringTag,{value:"Module"})),Ne={key:"TextGradient",chartKey:"VTextGradient",conKey:"VCTextGradient",title:"渐变文字",category:T3.TEXT,categoryName:D3.TEXT,package:T1.INFORMATIONS,chartFrame:k1.NAIVE_UI,image:"text_gradient.png"},hn={dataset:"我是渐变文本",size:20,gradient:{from:"#0000FFFF",to:"#00FF00FF",deg:45}};class xR extends K1{constructor(){super(...arguments);Q(this,"key",Ne.key);Q(this,"chartConfig",D1(Ne));Q(this,"option",D1(hn))}}const SR=Object.freeze(Object.defineProperty({__proto__:null,default:xR,option:hn},Symbol.toStringTag,{value:"Module"})),MR={class:"go-text-box"},wR=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=V3({dataset:hn.dataset});M1(e.chartConfig.attr);const{size:n,gradient:i}=M1(e.chartConfig.option);return N1(()=>e.chartConfig.option.dataset,a=>{t.dataset=a},{immediate:!0,deep:!1}),d2(e.chartConfig,Q1,a=>{t.dataset=a}),(a,r)=>{const s=L("n-gradient-text");return R(),X("div",MR,[c(s,{size:l(n),gradient:l(i)},{default:m(()=>[A1(C2(l(t).dataset),1)]),_:1},8,["size","gradient"])])}}});const AR=r2(wR,[["__scopeId","data-v-6d1bbf35"]]),CR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),TR=o=>(G4("data-v-9724c8d8"),o=o(),V4(),o),DR={class:"ranking-info"},ER=["innerHTML"],RR=TR(()=>j("div",{class:"shine"},null,-1)),IR=[RR],OR=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),{rowNum:i,unit:a,color:r,textColor:s,borderColor:u,indexFontSize:d,leftFontSize:f,rightFontSize:h}=M1(e.chartConfig.option),p=G3({mergedConfig:e.chartConfig.option,rowsData:[],rows:[{scroll:0,ranking:1,name:"",value:"",percent:0}],heights:[0],animationIndex:0,animationHandler:0,updater:0,avgHeight:0}),g=()=>{let{dataset:x,rowNum:M,sort:b}=p.mergedConfig;b&&x.sort(({value:V},{value:q})=>{if(V>q)return-1;if(V<q)return 1;if(V===q)return 0});const C=x.map(({value:V})=>V),w=Math.min(...C)||0,I=Math.abs(w),D=(Math.max(...C)||0)+I;x=x.map((V,q)=>({...V,ranking:q+1,percent:(V.value+I)/D*100}));const N=x.length;N>M&&N<2*M&&(x=[...x,...x]),x=x.map((V,q)=>({...V,scroll:q})),p.rowsData=x,p.rows=x},y=(x=!1)=>{const{rowNum:M,dataset:b}=p.mergedConfig,C=n.value/M;p.avgHeight=C,x||(p.heights=new Array(b.length).fill(C))},v=async(x=!1)=>{let{avgHeight:M,animationIndex:b,mergedConfig:C,rowsData:w,updater:I}=p;const{waitTime:T,carousel:D,rowNum:N}=C,V=w.length;if(N>=V||x&&(await new Promise(B=>setTimeout(B,T)),I!==p.updater))return;const q=D==="single"?1:N;let $=w.slice(b);if($.push(...w.slice(0,b)),p.rows=$.slice(0,N+1),p.heights=new Array(V).fill(M),await new Promise(B=>setTimeout(B,300)),I!==p.updater)return;p.heights.splice(0,q,...new Array(q).fill(0)),b+=q;const k=b-V;k>=0&&(b=k),p.animationIndex=b,p.animationHandler=setTimeout(v,T*1e3-300)},_=()=>{p.updater=(p.updater+1)%999999,p.animationHandler&&clearTimeout(p.animationHandler)},S=async()=>{try{if(!p.mergedConfig)return;let{dataset:x,rowNum:M,sort:b}=p.mergedConfig;_(),g();let C=!0;x.length<=M&&(C=!1),y(C),v(C)}catch(x){console.error(x)}};return S(),N1(()=>t.value,()=>{S()}),N1(()=>n.value,()=>{S()}),N1(()=>i.value,()=>{S()}),N1(()=>e.chartConfig.option.dataset,()=>{S()},{deep:!1}),d2(e.chartConfig,Q1,x=>{e.chartConfig.option.dataset=x,S()}),t0(()=>{_()}),(x,M)=>(R(),X("div",{class:"go-tables-rank",style:c2(`color: ${l(s)}`)},[(R(!0),X(b1,null,j1(p.rows,(b,C)=>(R(),X("div",{class:"row-item",key:b.toString()+b.scroll,style:c2(`height: ${p.heights[C]}px;`)},[j("div",DR,[j("div",{class:"rank",style:c2(`color: ${l(r)};font-size: ${l(d)}px`)},"No."+C2(b.ranking),5),j("div",{class:"info-name",style:c2(`font-size: ${l(f)}px`),innerHTML:b.name},null,12,ER),j("div",{class:"ranking-value",style:c2(`color: ${l(s)};font-size: ${l(h)}px`)},C2(p.mergedConfig.valueFormatter?p.mergedConfig.valueFormatter(b):b.value)+" "+C2(l(a)),5)]),j("div",{class:"ranking-column",style:c2(`border-color: ${l(u)}`)},[j("div",{class:"inside-column",style:c2(`width: ${b.percent}%;background-color: ${l(r)}`)},IR,4)],4)],4))),128))],4))}});const LR=r2(OR,[["__scopeId","data-v-9724c8d8"]]),zR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),PR={class:"dv-scroll-board"},kR=["align","innerHTML"],UR=["align","innerHTML"],NR=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=M1(e.chartConfig.attr),i=G3({defaultConfig:{header:[],dataset:[],rowNum:5,headerBGC:"#00BAFF",oddRowBGC:"#003B51",evenRowBGC:"#0A2732",waitTime:2,headerHeight:35,columnWidth:[],align:[],index:!1,indexHeader:"#",carousel:"single",hoverPause:!0},mergedConfig:e.chartConfig.option,header:[],rowsData:[],rows:[{ceils:[],rowIndex:0,scroll:0}],widths:[],heights:[0],avgHeight:0,aligns:[],animationIndex:0,animationHandler:0,updater:0,needCalc:!1}),a=()=>{r(),s(),u(),d(),f(),h(),p(!0)};m0(()=>{a()});const r=()=>{i.mergedConfig=p6(D1(i.defaultConfig),e.chartConfig.option)},s=()=>{let{header:v,index:_,indexHeader:S}=i.mergedConfig;if(!v.length){i.header=[];return}v=[...v],_&&v.unshift(S),i.header=v},u=()=>{let{dataset:v,index:_,headerBGC:S,rowNum:x}=i.mergedConfig;_&&(v=v.map((b,C)=>{b=[...b];const w=`<span class="index" style="background-color: ${S};border-radius: 3px;padding: 0px 3px;">${C+1}</span>`;return b.unshift(w),b})),v=v.map((b,C)=>({ceils:b,rowIndex:C}));const M=v.length;M>x&&M<2*x&&(v=[...v,...v]),v=v.map((b,C)=>({...b,scroll:C})),i.rowsData=v,i.rows=v},d=()=>{const{mergedConfig:v,rowsData:_}=i,{columnWidth:S,header:x}=v,M=S.reduce((I,T)=>I+T,0);let b=0;_[0]?b=_[0].ceils.length:x.length&&(b=x.length);const C=(t.value-M)/(b-S.length),w=new Array(b).fill(C);i.widths=p6(w,S)},f=(v=!1)=>{const{mergedConfig:_,header:S}=i,{headerHeight:x,rowNum:M,dataset:b}=_;let C=n.value;S.length&&(C-=x);const w=C/M;i.avgHeight=w,v||(i.heights=new Array(b.length).fill(w))},h=()=>{const{header:v,mergedConfig:_}=i,S=v.length;let x=new Array(S).fill("left");const{align:M}=_;i.aligns=p6(x,M)},p=async(v=!1)=>{const{needCalc:_}=i;_&&(u(),f(),i.needCalc=!1);let{avgHeight:S,animationIndex:x,mergedConfig:M,rowsData:b,updater:C}=i;const{waitTime:w,carousel:I,rowNum:T}=M,D=b.length;if(T>=D||v&&(await new Promise($=>setTimeout($,w*1e3)),C!==i.updater))return;const N=I==="single"?1:T;let V=b.slice(x);if(V.push(...b.slice(0,x)),i.rows=V.slice(0,I==="page"?T*2:T+1),i.heights=new Array(D).fill(S),await new Promise($=>setTimeout($,300)),C!==i.updater)return;i.heights.splice(0,N,...new Array(N).fill(0)),x+=N;const q=x-D;q>=0&&(x=q),i.animationIndex=x,i.animationHandler=setTimeout(p,w*1e3-300)},g=()=>{i.updater=(i.updater+1)%999999,i.animationHandler&&clearTimeout(i.animationHandler)},y=async()=>{try{if(!i.mergedConfig)return;g(),a()}catch(v){console.log(v)}};return N1(()=>t.value,()=>{y()}),N1(()=>n.value,()=>{y()}),N1(()=>e.chartConfig.option,()=>{y()},{deep:!0}),d2(e.chartConfig,Q1,v=>{e.chartConfig.option.dataset=v,y()}),t0(()=>{g()}),(v,_)=>(R(),X("div",PR,[i.header.length&&i.mergedConfig?(R(),X("div",{key:0,class:"header",style:c2(`background-color: ${i.mergedConfig.headerBGC};`)},[(R(!0),X(b1,null,j1(i.header,(S,x)=>(R(),X("div",{class:"header-item",key:`${S}${x}`,style:c2(`
        height: ${i.mergedConfig.headerHeight}px;
        line-height: ${i.mergedConfig.headerHeight}px;
        width: ${i.widths[x]}px;
      `),align:i.aligns[x],innerHTML:S},null,12,kR))),128))],4)):f2("",!0),i.mergedConfig?(R(),X("div",{key:1,class:"rows",style:c2(`height: ${l(n)-(i.header.length?i.mergedConfig.headerHeight:0)}px;`)},[(R(!0),X(b1,null,j1(i.rows,(S,x)=>(R(),X("div",{class:"row-item",key:`${S.toString()}${S.scroll}`,style:c2(`
        height: ${i.heights[x]}px;
        line-height: ${i.heights[x]}px;
        background-color: ${i.mergedConfig[S.rowIndex%2===0?"evenRowBGC":"oddRowBGC"]};
      `)},[(R(!0),X(b1,null,j1(S.ceils,(M,b)=>(R(),X("div",{class:"ceil",key:`${M}${x}${b}`,style:c2(`width: ${i.widths[b]}px;`),align:i.aligns[b],innerHTML:M},null,12,UR))),128))],4))),128))],4)):f2("",!0)]))}});const FR=r2(NR,[["__scopeId","data-v-4e3d940b"]]),BR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),GR={class:"go-tables-basic"},VR=s1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{SearchIcon:t}=q8.ionicons5,n=J1(""),i=q1(()=>f?.dataset?.source?.filter(h=>Object.values(h).some(p=>String(p).toLowerCase().includes(n.value.toLowerCase())))),{align:a,pagination:r,inputShow:s}=M1(e.chartConfig.option);r.value.onChange=h=>{r.value.page=h};const{w:u,h:d}=M1(e.chartConfig.attr),f=G3({dataset:e.chartConfig.option.dataset,style:e.chartConfig.option.style});return N1(()=>e.chartConfig.option.dataset,h=>{f.dataset=h,f?.dataset?.dimensions?.forEach(p=>{p.align=a.value})},{immediate:!0,deep:!0}),(h,p)=>{const g=L("n-icon"),y=L("n-input"),v=L("n-data-table");return R(),X("div",GR,[c(y,{value:n.value,"onUpdate:value":p[0]||(p[0]=_=>n.value=_),placeholder:"请输入信息",style:c2([`display: ${l(s)}`,{"margin-bottom":"5px",float:"right",width:"240px"}])},{prefix:m(()=>[c(g,{component:l(t)},null,8,["component"])]),_:1},8,["value","style"]),c(v,{style:c2(`
      width: ${l(u)}px;
      height: ${l(d)}px;
      font-size: ${f.style.fontSize}px;
      border-width: ${f.style.border==="on"?f.style.borderWidth:0}px;
      border-color: ${f.style.borderColor};