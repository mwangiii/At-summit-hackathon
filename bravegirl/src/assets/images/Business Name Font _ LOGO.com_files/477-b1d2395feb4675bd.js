(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{8750:function(e,t,l){"use strict";l.r(t),l.d(t,{Banner:function(){return Banner}});var a=l(5190),s=l(7225),r=l(6695),n=l(7828);let Banner=e=>{let{content:t,queryParam:l}=e,i=(0,r.useSearchParams)(),[c,o]=(0,n.useState)(!l);return(0,n.useEffect)(()=>{l&&o(!!i.get(l))},[i,l]),(0,a.jsx)(n.Suspense,{fallback:null,children:c&&(0,a.jsx)(s.bZ,{theme:"info",canClose:!0,description:t})})}},9112:function(e,t,l){"use strict";l.d(t,{q:function(){return BlockWrapper}});var a=l(5190),s=l(5921),r=l(2481);let BlockWrapper=e=>{let{children:t,className:l,background:n,containerClasses:i,id:c}=e,o=s.pj[n||"White"];return(0,a.jsx)("div",{id:c,className:(0,r.AK)("py-8 md:py-10",o,i),children:(0,a.jsx)("div",{className:(0,r.AK)("w-full lg:max-w-6xl mx-auto px-4 md:px-8",l),children:t})})}},9993:function(e,t,l){"use strict";l.r(t),l.d(t,{HeroBlock:function(){return HeroBlock}});var a=l(5190),s=l(7828),r=l(7225),n=l(2481),i=l(9112),c=l(1812),o=l(7944),d=l.n(o),x=l(9912),u=l(5501),m=l(762),h=l(4676),f=l(8423),p=l(7066),b=l(4849),g=l(524),j=l(110),w=l(4270),v=l(8501),k=l(457),N=l(6290),y=l(9568),C=l(8384),B=l(3455),S=l(9043),Z=l(1082),A=l(6909),D=l(9844),P=l(440),I=l(7894),M=l(4483),_=l(5767),L=l(5548),K=l(5687),T=l(8991),q=l(3253);let E={ComputerDesktop:u.Z,LightBulb:m.Z,Swatch:h.Z,Sparkles:f.Z,CodeBracketSquare:p.Z,QuestionMarkCircle:b.Z,Bolt:g.Z,Share:j.Z,Printer:w.Z,ChatBubble:v.Z,Chart:k.Z,Globe:N.Z,Map:y.Z,Rocket:C.Z,Gear:B.Z,MagnifyingGlass:S.Z,Envelope:Z.Z,ShieldCheck:A.Z,Briefcase:D.Z,CurrencyDollar:P.Z,SquaresIcon:I.Z,DeviceMobilePhone:M.Z,Megaphone:_.Z,ArchiveBox:L.Z,ClipboardDocumentCheck:K.Z,Heart:T.Z,Photo:q.Z},BlockIcon=e=>{let{className:t,icon:l}=e,s=E[l];return s?(0,a.jsx)(s,{className:t}):null};var R=l(3447);let AsText=e=>{let{children:t,className:l}=e;return(0,a.jsx)("p",{className:(0,n.AK)("text-xl max-w-md mx-auto text-center",l),children:t})},AsBlock=e=>{let{block:t,className:l}=e;return(0,a.jsx)("div",{className:(0,n.AK)("max-w-md text-xl mx-auto text-center",l),children:(0,a.jsx)(R.YI,{value:t})})},Subtitle=e=>{let{children:t,className:l,block:s}=e,r="string"==typeof t?(0,a.jsx)(AsText,{className:l,children:t}):(0,a.jsx)(AsBlock,{className:l,block:s});return r};var G=l(7725),H=l.n(G);let HeroBlock=e=>{let{className:t,title:l,content:o,decoration:u,input:m,background:h,button:f,show_input:p,priority:b,topSlot:g,titleClassName:j,contentClassName:w,containerClasses:v}=e,[k,N]=(0,s.useState)(""),[y,C]=(0,s.useState)(!1),B=(0,s.useRef)(null),Z="".concat(f.href).concat(encodeURIComponent(k)),A=null==u?void 0:u.find(e=>"slideshow"===e._type),D=null==u?void 0:u.find(e=>"features"===e._type),P=null==u?void 0:u.find(e=>"hero_image"===e._type),I=(0,n.AK)(P?"md:grid md:grid-cols-5 gap-8 ":"flex flex-col justify-center",b?"lg:max-w-8xl gap-24":"gap-24",t);return(0,a.jsxs)(i.q,{containerClasses:v,className:I,background:h,children:[(0,a.jsxs)("div",{className:P?"flex flex-col justify-center col-span-2":"",children:[g,(0,a.jsx)(x.D,{className:(0,n.AK)(P?"text-center md:text-left max-w-md mx-auto md:mx-0":"",j),children:l}),o&&(0,a.jsx)(Subtitle,{className:(0,n.AK)("mt-8 text-lg",P?"text-center md:text-left max-w-md mx-auto md:mx-0":"",w),block:o}),(0,a.jsxs)("form",{ref:B,className:(0,n.AK)("flex flex-col sm:flex-row my-8 w-full  justify-center mx-auto gap-2",P?" md:justify-normal":"",p?"max-w-2xl":""),onSubmit:e=>{if(e.preventDefault(),!k||!n.Ld.test(k)){C(!0);return}C(!1),window.location.href=Z},children:[p&&(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(null==m?void 0:m.label)&&(0,a.jsx)(r.__,{children:null==m?void 0:m.label}),m&&p&&(0,a.jsx)(r.II,{IconLeft:S.Z,inputSize:"extralarge",theme:y?"danger":void 0,inputContainerClassName:"w-full group-focus-within:input-success group-focus:input-success",placeholder:m.placeholder||"",required:!0,maxLength:40,value:k,pattern:n.lx,autoFocus:b,onChange:e=>{N(e.target.value)},onKeyDown:e=>{if("Enter"===e.key){var t;null===(t=B.current)||void 0===t||t.dispatchEvent(new Event("submit"))}}})]}),(0,a.jsxs)("div",{className:p?"self-end w-full sm:w-auto":"md:self-start",children:[p&&(0,a.jsx)(r.zx,{className:(0,n.AK)("btn btn-primary btn-extralarge whitespace-nowrap px-14 w-full"),type:"submit",children:f.label}),!p&&(0,a.jsx)(H(),{className:(0,n.AK)("btn btn-primary btn-extralarge whitespace-nowrap px-14 w-full"),href:Z,children:f.label})]})]}),D&&(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-24 max-w-3xl mx-auto",children:D.content.map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-col items-center mx-auto",children:[(0,a.jsx)("div",{className:"p-4 bg-blue-500  w-24 h-24 rounded-full flex justify-center items-center",children:(0,a.jsx)(BlockIcon,{icon:e.icon,className:"text-white w-12 h-12"})}),(0,a.jsx)("h3",{className:"text-xl mt-4",children:e.title}),(0,a.jsx)("p",{className:"text-center max-w-xs",children:e.content})]},t))}),A&&(0,a.jsx)("div",{className:"mt-16 max-w-4xl mx-auto",children:(0,a.jsx)(c.Slideshow,{priority:b,images:A.images})})]}),P&&(0,a.jsx)(d(),{priority:b,className:"mx-auto mb-24 md:mb-0 rounded col-span-3",blurDataURL:P.image.lqip,placeholder:"blur",src:P.image.src,alt:l,width:P.image.width,height:P.image.height})]})}},6734:function(e,t,l){"use strict";l.r(t),l.d(t,{PricingCardsBlock:function(){return PricingCardsBlock}});var a=l(5190),s=l(7828),r=l(2481),n=l(7225),i=l(7842),c=l(9912),o=l(3447),d=l(7361),x=l(9112);let PricingCard=e=>(0,a.jsxs)(n.Zb,{className:(0,r.AK)("p-0 overflow-hidden border-gray-200 shadow-xl rounded-xl w-full",e.className),children:[(0,a.jsx)("div",{className:(0,r.AK)("w-full",e.tag?"from-blue-500 to-green-500 bg-gradient-to-r h-12 py-4":"bg-slate-800 h-8"),children:e.tag&&(0,a.jsx)("p",{className:"text-sm text-white uppercase text-center font-bold tracking-widest",children:e.tag})}),(0,a.jsxs)("div",{className:"p-8 text-center",children:[(0,a.jsx)("span",{className:"text-3xl font-black",children:e.price}),(0,a.jsx)("h1",{className:"text-2xl font-bold mt-4",children:e.title}),(0,a.jsx)("p",{className:"text-sm mt-4",children:e.description}),(0,a.jsx)("ul",{className:"text-left mt-4",children:e.features.map((e,t)=>(0,a.jsxs)("li",{className:"flex flex-row gap-2 mt-4 items-center",children:[(0,a.jsx)(i.Z,{className:"w-4 h-4 text-black stroke-2"}),(0,a.jsx)("span",{children:e.label})]},t))}),(0,a.jsx)(n.rU,{href:e.button.href,className:"btn btn-primary btn-large mt-8 mx-auto w-full",children:e.button.label})]})]}),PricingCardsBlock=e=>{let[t,l]=(0,s.useState)(!1);return(0,a.jsxs)(x.q,{className:e.className,background:e.background,children:[(0,a.jsx)(c.D,{children:e.title}),(0,a.jsx)("div",{className:"text-center mt-4",children:(0,a.jsx)(o.YI,{value:e.subtitle})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.j,{monthlyLabel:e.intervals.monthly_label,yearlyLabel:e.intervals.yearly_label,isMonthly:t,onToggle:()=>l(!t)}),(0,a.jsx)("div",{className:"flex flex-col md:flex-row mt-8 w-full px- items-center gap-8 md:gap-0",children:e.cards.map((l,s)=>(0,a.jsx)(PricingCard,{className:(0,r.AK)(0===s?"md:border-r-0 md:rounded-r-none":s===e.cards.length-1?"md:border-l-0 md:rounded-l-none":""),title:l.title,description:l.description,tag:l.tag,price:t?l.monthly_price:l.yearly_price,features:l.features,button:l.button},s))})]})]})}},9212:function(e,t,l){"use strict";l.r(t),l.d(t,{SinglePlanBlock:function(){return SinglePlanBlock}});var a=l(5190),s=l(7828),r=l(7842),n=l(9112),i=l(7361),c=l(9912),o=l(7225),d=l(7725),x=l.n(d);let SinglePlanBlock=e=>{let[t,l]=(0,s.useState)(!1),d=e.plan.monthly_price.toFixed(2),u=e.plan.yearly_price.toFixed(2);return(0,a.jsxs)(n.q,{background:e.background,className:e.className,children:[(0,a.jsx)(c.D,{children:e.title}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-16 mt-8",children:[(0,a.jsxs)(o.Zb,{className:"bg-white flex flex-col justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-black text-center",children:e.plan.title}),(0,a.jsx)(i.j,{monthlyLabel:e.plan.monthly_label,yearlyLabel:e.plan.yearly_label,isMonthly:t,onToggle:()=>l(!t)}),(0,a.jsxs)("div",{className:"flex justify-center items-center mt-8 gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"$"}),(0,a.jsx)("span",{className:"text-5xl text-black font-black tracking-tight",children:t?d:u}),(0,a.jsx)("span",{className:"text-gray-500",children:e.plan.units})]})]}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(x(),{className:"btn btn-primary",href:e.plan.href,children:e.plan.button_label})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-left",children:e.features.title}),(0,a.jsx)("ul",{className:"mt-4",children:e.features.items.map((e,t)=>(0,a.jsxs)("li",{className:"flex justify-left text-base gap-8 font-normal",children:[(0,a.jsx)(r.Z,{className:"w-4 h-4 stroke-2 text-white"})," ",e]},t))})]})]})]})}},2463:function(e,t,l){"use strict";l.r(t),l.d(t,{TestimonialsBlock:function(){return TestimonialsBlock}});var a=l(5190),s=l(7944),r=l.n(s),n=l(7828);function StarIcon({title:e,titleId:t,...l},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},l),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",clipRule:"evenodd"}))}let i=n.forwardRef(StarIcon);var c=l(7225),o=l(9112),d=l(9912),x=l(2481),u=l(3447),m=l(7725),h=l.n(m);let f={marks:{link:e=>{let{children:t,value:l}=e;return(0,a.jsx)(h(),{className:"text-blue-500 underline visited:text-purple-600",href:l.href,target:"_blank",children:t})}}},BlockPortableText=e=>{let{blocks:t,className:l}=e;return(0,a.jsx)("div",{className:(0,x.AK)("portable-text text-lg text-center max-w-lg mx-auto prose",l),children:(0,a.jsx)(u.YI,{value:t,components:f})})};var p=l(4256);l(7852);let b={desktop:{breakpoint:{max:3e3,min:768},items:3},tablet:{breakpoint:{max:768,min:640},items:2},mobile:{breakpoint:{max:640,min:0},items:1}},TestimonialCard=e=>{let{name:t,company:l,quote:s,image:n}=e;return(0,a.jsxs)(c.Zb,{className:"flex flex-col relative shadow bg-white flex-1 h-full",children:[(0,a.jsx)("div",{className:"absolute right-4 -top-8 w-24 h-24",children:(0,a.jsx)(r(),{className:"rounded-full shadow-xl border",placeholder:"blur",blurDataURL:n.lqip,src:n.src,alt:t,width:200,height:200})}),(0,a.jsxs)("div",{className:"mt-8 flex flex-col gap-4 h-full",children:[(0,a.jsxs)("span",{className:"flex flex-nowrap gap-1",children:[(0,a.jsx)(i,{className:"w-4 h-4 text-green-500"}),(0,a.jsx)(i,{className:"w-4 h-4 text-green-500"}),(0,a.jsx)(i,{className:"w-4 h-4 text-green-500"}),(0,a.jsx)(i,{className:"w-4 h-4 text-green-500"}),(0,a.jsx)(i,{className:"w-4 h-4 text-green-500"})]}),(0,a.jsxs)("p",{className:"text-sm text-gray-700 mt-4 mb-8",children:['"',s,'"']})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("p",{className:"font-bold text-black",children:t}),(0,a.jsx)("p",{className:"text-gray-800 text-sm",children:l})]}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 h-4 w-full from-blue-400 to-green-400 bg-gradient-to-r rounded-b border-gray-600"})]})},TestimonialsBlock=e=>{let{title:t,text:l,content:s,background:r}=e;return(0,a.jsxs)(o.q,{background:r,children:[(0,a.jsx)(d.D,{children:t}),(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)(BlockPortableText,{className:"mt-8",blocks:l})}),(0,a.jsx)(p.default,{responsive:b,swipeable:!0,draggable:!0,ssr:!0,arrows:!1,infinite:!0,autoPlaySpeed:4e3,autoPlay:!0,keyBoardControl:!0,children:s.testimonials.map((e,t)=>(0,a.jsx)("div",{className:"pt-24 px-2 h-full",children:(0,a.jsx)(TestimonialCard,{...e},t)},t))})]})}},7361:function(e,t,l){"use strict";l.d(t,{j:function(){return IntervalSwitch}});var a=l(5190),s=l(2481);let IntervalButton=e=>(0,a.jsx)("button",{onClick:e.onClick,className:(0,s.AK)(e.isHighlighted?"bg-blue-500 text-white":"text-slate-700","text-sm p-2 rounded-full transition duration-250"),children:e.children}),IntervalSwitch=e=>(0,a.jsxs)("div",{className:"flex mt-8 p-1 rounded-full border w-max mx-auto",children:[(0,a.jsx)(IntervalButton,{onClick:e.onToggle,isHighlighted:e.isMonthly,children:e.monthlyLabel}),(0,a.jsx)(IntervalButton,{onClick:e.onToggle,isHighlighted:!e.isMonthly,children:e.yearlyLabel})]})},1812:function(e,t,l){"use strict";l.r(t),l.d(t,{Slideshow:function(){return Slideshow}});var a=l(5190),s=l(2481),r=l(7944),n=l.n(r),i=l(7828);let Slideshow=e=>{let{images:t,priority:l}=e,[r,c]=(0,i.useState)(0),o=t[r];return((0,i.useEffect)(()=>{let e=setTimeout(()=>{c((r+1)%t.length)},5e3);return()=>clearTimeout(e)},[r,t.length]),o)?(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"rounded overflow-hidden flex justify-center",children:(0,a.jsx)(n(),{blurDataURL:o.lqip,placeholder:"blur",priority:l,src:o.src,alt:o.alt,width:o.width,height:o.height,quality:85})}),(0,a.jsx)("div",{className:"flex justify-center gap-4 mt-4",children:t.length>1&&t.map((e,t)=>(0,a.jsx)("button",{className:"w-12 h-12 md:w-4 md:h-4 flex justify-center items-center",onClick:()=>c(t),"aria-label":"Switch to slideshow image ".concat(t+1),children:(0,a.jsx)("span",{className:(0,s.AK)("w-2 h-2 rounded-full flex",t===r?"bg-black":"bg-gray-300")})},t))})]}):null}},9912:function(e,t,l){"use strict";l.d(t,{D:function(){return Title}});var a=l(5190),s=l(2481);let Title=e=>{let{children:t,className:l}=e;return(0,a.jsx)("h1",{className:(0,s.AK)("text-4xl md:text-5xl font-black max-w-xl mx-auto text-center leading-none",l),children:t})}},5921:function(e,t,l){"use strict";var a,s;l.d(t,{FQ:function(){return n},Hg:function(){return i},pj:function(){return r},vL:function(){return c}});let r={White:"bg-white text-slate-800",Blue:"bg-blue-500 text-white",Gray:"bg-gray-100 text-slate-800",Slate:"bg-slate-700 text-white"};(s=a||(a={})).LightBulb="LightBulb",s.ComputerDesktop="ComputerDesktop",s.Swatch="Swatch",s.QuestionMarkCircle="QuestionMarkCircle",s.CodeBracketSquare="CodeBracketSquare",s.Sparkles="Sparkles",s.Bolt="Bolt",s.Printer="Printer",s.Share="Share",s.ChatBubble="ChatBubble",s.Chart="Chart",s.Globe="Globe",s.Map="Map",s.Rocket="Rocket",s.Gear="Gear",s.MagnifyingGlass="MagnifyingGlass",s.Envelope="Envelope",s.ShieldCheck="ShieldCheck",s.Briefcase="Briefcase",s.CurrencyDollar="CurrencyDollar",s.SquaresIcon="SquaresIcon",s.DeviceMobilePhone="DeviceMobilePhone",s.Megaphone="Megaphone",s.ArchiveBox="ArchiveBox",s.ClipboardDocumentCheck="ClipboardDocumentCheck",s.Heart="Heart",s.Photo="Photo",Object.values(a);let n=".logo.com",i="cobrand",c=2592e6},6695:function(e,t,l){e.exports=l(5710)},7842:function(e,t,l){"use strict";var a=l(7828);function CheckIcon({title:e,titleId:t,...l},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},l),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))}let s=a.forwardRef(CheckIcon);t.Z=s}}]);