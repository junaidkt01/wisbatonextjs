(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1100],{904:function(e,s,i){Promise.resolve().then(i.bind(i,2966))},7749:function(e,s,i){"use strict";var n=i(2265);s.Z=()=>{let e=(0,n.useRef)(null),s=!1;return(0,n.useEffect)(()=>{let i=()=>{e.current&&!s&&e.current.getBoundingClientRect().top<window.innerHeight/5*4&&(e.current.classList.add("animated-ref"),s=!0,window.removeEventListener("scroll",i))};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),e}},2966:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return Z}});var n=i(7437);i(7960),i(9526);var t=i(3957),l=i(7502),r=i(4015),a=i(2796),H=i(8911);i(6453);var d=e=>{let{data:s,isOpen:i,toggleExpand:t}=e;return(0,n.jsx)("div",{className:"eye-expand-component",onClick:()=>{i===s.id?t(0):t(s.id)},children:(0,n.jsxs)("div",{className:"eye-expand-div",children:[(0,n.jsxs)("div",{className:"eye-expand-texts",children:[(0,n.jsx)("p",{children:s.title}),(0,n.jsx)("div",{className:i===s.id?"expanded":"",children:(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:s.content}})})]}),i===s.id?(0,n.jsxs)("svg",{className:"opened-eye",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M2.89899 12.7346C2.80091 12.5052 2.75 12.2542 2.75 12C2.75 11.7458 2.80091 11.4948 2.89899 11.2654C3.70725 9.34502 4.99868 7.72989 6.61515 6.61781C8.23161 5.50574 10.1029 4.945 12 5.00426C13.8971 4.945 15.7684 5.50574 17.3849 6.61781C19.0013 7.72989 20.2928 9.34502 21.101 11.2654C21.1991 11.4948 21.25 11.7458 21.25 12C21.25 12.2542 21.1991 12.5052 21.101 12.7346C20.2928 14.655 19.0013 16.2701 17.3849 17.3822C15.7684 18.4943 13.8971 19.055 12 18.9957C10.1029 19.055 8.23161 18.4943 6.61515 17.3822C4.99868 16.2701 3.70725 14.655 2.89899 12.7346Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.jsx)("path",{d:"M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}):(0,n.jsx)("svg",{className:"closed-eye",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4.83203 15.8336C6.17913 19.0342 8.33151 21.7261 11.0256 23.5795C13.7197 25.433 16.8385 26.3676 20.0004 26.2688C23.1622 26.3676 26.281 25.433 28.9752 23.5795C31.6692 21.7261 33.8217 19.0342 35.1687 15.8336",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})]})})},c=i(6132),o=i(2265),C=i(5665),h=i(1208);i(2119);var m=i(6627),x=i(7433),v=i(5085),j=i(2021),u=i(9333),p=i(3995),g=()=>(0,n.jsx)("div",{className:"service-platforms",children:C.S6.map((e,s)=>(0,n.jsxs)("div",{className:"service-platform",children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.icon}}),(0,n.jsx)("p",{children:e.title})]},s))}),w=e=>{var s,i;let{outComes:t}=e;return(0,n.jsxs)("div",{className:"outcomes",children:[(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("h1",{dangerouslySetInnerHTML:{__html:(null==t?void 0:t.title)||""}}),(0,n.jsx)("div",{children:null==t?void 0:t.description.map((e,s)=>(0,n.jsx)("p",{className:"paragraph",dangerouslySetInnerHTML:{__html:e}},s))})]}),(0,n.jsxs)("div",{className:"sub-content",children:[(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("h2",{children:null==t?void 0:t.subContent.title}),(0,n.jsx)("div",{children:null==t?void 0:t.subContent.description.map((e,s)=>(0,n.jsx)("p",{className:"paragraph",dangerouslySetInnerHTML:{__html:e}},s))})]}),(null==t?void 0:t.servicePlatform)&&(0,n.jsx)(g,{}),(0,n.jsxs)("div",{className:"adv-dis-cards",children:[(0,n.jsxs)("div",{className:"adv-card",children:[(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("h2",{children:null==t?void 0:t.subContent.advantages.title}),(0,n.jsx)("p",{children:null==t?void 0:t.subContent.advantages.description})]}),(0,n.jsx)("div",{className:"adv-card-list",children:null==t?void 0:t.subContent.advantages.points.map((e,s)=>(0,n.jsxs)("div",{className:"card-list-points",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"14",cy:"14",r:"14",fill:"#008359","fill-opacity":"0.8"}),(0,n.jsx)("path",{d:"M9.83383 12.2764H9.04483C8.3912 12.2764 7.86133 12.8063 7.86133 13.4599V18.9829C7.86133 19.6365 8.3912 20.1664 9.04483 20.1664H9.83383C10.4875 20.1664 11.0173 19.6365 11.0173 18.9829V13.4599C11.0173 12.8063 10.4875 12.2764 9.83383 12.2764Z",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.jsx)("path",{d:"M20.1069 14.162L19.1601 18.896C19.0879 19.2593 18.8903 19.5856 18.6018 19.8178C18.3133 20.0501 17.9524 20.1734 17.5821 20.1663H12.5956C12.1771 20.1663 11.7757 20.0001 11.4798 19.7041C11.1838 19.4082 11.0176 19.0068 11.0176 18.5883V13.8543C11.0303 13.5505 11.1071 13.2528 11.2431 12.9808C11.3791 12.7089 11.5711 12.4687 11.8066 12.2763L12.4615 8.33129C12.4762 8.23925 12.5125 8.15201 12.5674 8.07666C12.6222 8.00131 12.6942 7.93999 12.7772 7.89769C12.8602 7.85539 12.9521 7.83331 13.0454 7.83325C13.1386 7.83319 13.2304 7.85515 13.3136 7.89733L14.0474 8.26028C14.5321 8.49997 14.9202 8.89844 15.147 9.38939C15.3738 9.88033 15.4257 10.4341 15.294 10.9587L14.9626 12.2684H18.5604C18.7944 12.2684 19.0256 12.3204 19.237 12.4206C19.4484 12.5209 19.635 12.667 19.783 12.8483C19.931 13.0295 20.0368 13.2415 20.0929 13.4687C20.1489 13.6959 20.1537 13.9327 20.1069 14.162Z",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("p",{children:e.description})]})]},s))})]}),(0,n.jsxs)("div",{className:"dis-card",children:[(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("h2",{children:null==t?void 0:t.subContent.disAdvantages.title}),(0,n.jsx)("p",{children:null==t?void 0:t.subContent.disAdvantages.description})]}),(0,n.jsx)("div",{className:"dis-card-list",children:null==t?void 0:t.subContent.disAdvantages.points.map((e,s)=>(0,n.jsxs)("div",{className:"card-list-points",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"14",cy:"14",r:"14",fill:"#DB1F21","fill-opacity":"0.8"}),(0,n.jsx)("path",{d:"M9.83383 15.7236H9.04483C8.3912 15.7236 7.86133 15.1937 7.86133 14.5401V9.01713C7.86133 8.36347 8.3912 7.8336 9.04483 7.8336H9.83383C10.4875 7.8336 11.0173 8.36347 11.0173 9.01713V14.5401C11.0173 15.1937 10.4875 15.7236 9.83383 15.7236Z",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.jsx)("path",{d:"M20.1069 13.838L19.1601 9.10401C19.0879 8.74075 18.8903 8.41441 18.6018 8.18221C18.3133 7.94995 17.9524 7.82661 17.5821 7.83368H12.5956C12.1771 7.83368 11.7757 7.99995 11.4798 8.29588C11.1838 8.59181 11.0176 8.99321 11.0176 9.41168V14.1457C11.0303 14.4495 11.1071 14.7472 11.2431 15.0192C11.3791 15.2911 11.5711 15.5313 11.8066 15.7237L12.4615 19.6687C12.4762 19.7607 12.5125 19.848 12.5674 19.9233C12.6222 19.9987 12.6942 20.06 12.7772 20.1023C12.8602 20.1446 12.9521 20.1667 13.0454 20.1667C13.1386 20.1668 13.2304 20.1449 13.3136 20.1027L14.0474 19.7397C14.5321 19.5 14.9202 19.1016 15.147 18.6106C15.3738 18.1197 15.4257 17.5659 15.294 17.0413L14.9626 15.7316H18.5604C18.7944 15.7316 19.0256 15.6796 19.237 15.5794C19.4484 15.4791 19.635 15.333 19.783 15.1517C19.931 14.9705 20.0368 14.7585 20.0929 14.5313C20.1489 14.3041 20.1537 14.0673 20.1069 13.838Z",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("p",{children:e.description})]})]},s))})]})]})]}),(0,n.jsxs)("div",{className:"outcomes-question",children:[(0,n.jsx)("h2",{children:null==t?void 0:t.question.title}),(0,n.jsx)("div",{className:"outcomes-question-cards",children:null==t?void 0:t.question.cards.map((e,s)=>(0,n.jsxs)("div",{className:"outcomes-question-card",children:[(0,n.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title}}),(0,n.jsx)("p",{children:e.description})]},s))})]}),(0,n.jsxs)("div",{className:"summery-content",children:[(0,n.jsx)("h2",{dangerouslySetInnerHTML:{__html:(null==t?void 0:t.summery.title)||""}}),(0,n.jsx)("p",{children:null==t?void 0:null===(i=t.summery)||void 0===i?void 0:null===(s=i.description)||void 0===s?void 0:s.map((e,s)=>(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e}},s))})]})]})},k=i(8346),N=i(9376),f=i(6225),L=i.n(f),Z=()=>{var e;let[s,i]=(0,o.useState)(null),g=e=>{s===e?i(null):i(e)},[f,Z]=(0,o.useState)(0),{serviceId:b}=(0,N.useParams)(),M=b||"Default value",[y,_]=(0,o.useState)(void 0);function S(e){return e?e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ").toUpperCase():""}(0,o.useEffect)(()=>{let e=C.uZ.find(e=>(null==e?void 0:e.slug)===M);e?_(e):_(void 0)},[]);let{statusMessage:T,handleServiceSelection:V,firstName:E,setFirstName:I,lastName:B,setLastName:P,email:q,setEmail:A,phone:F,setPhone:U,message:D,setMessage:R,handleSubmit:O,loading:z}=(0,x.c)(),{setNotify:W}=(0,o.useContext)(m.X);(0,o.useEffect)(()=>{T.message?W(T):""===T.message&&setTimeout(()=>{W(T)},3e3)},[T]);let{works:J,isLoading:Q}=(0,u.z_)(),{team:X,isLoading:Y,error:G}=(0,u.PW)();return(console.log(X),Y||G)?(0,n.jsx)("h1",{children:"loading"}):(0,n.jsx)(n.Fragment,{children:y?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"services-detailed-section page-transition",children:[(0,n.jsxs)(L(),{children:[(0,n.jsx)("title",{children:y.metaTitle}),(0,n.jsx)("meta",{name:"description",content:y.metaDescription}),(0,n.jsx)("link",{rel:"canonical",href:"https://www.wisbato.com/services/".concat(y.slug)})]}),(0,n.jsxs)("div",{className:"services-detailed-banner",children:[(0,n.jsxs)("div",{className:"services-detailed-text-div",children:[(0,n.jsx)(c.Z,{title:b}),(0,n.jsx)("p",{className:"services-detailed-text",dangerouslySetInnerHTML:{__html:null==y?void 0:null===(e=y.context)||void 0===e?void 0:e.mainTitle}})]}),(0,n.jsx)("div",{style:{marginTop:"50px"},children:(0,n.jsx)(l.Z,{hide:!0,color:"#000",nextSection:".services-detailed-content-div"})})]}),(0,n.jsx)("div",{className:"work-section",children:Q?(0,n.jsx)("div",{className:"works-card-list",children:Array.from({length:2}).map((e,s)=>(0,n.jsxs)("div",{className:"works-card",children:[(0,n.jsx)("div",{className:"works-card-img",children:(0,n.jsx)(h.Z,{height:300})}),(0,n.jsx)("div",{className:"works-title",children:(0,n.jsx)("h2",{children:(0,n.jsx)(h.Z,{width:200})})})]},s))}):(0,n.jsxs)(n.Fragment,{children:[J.filter(e=>e.servicesProvides.some(e=>e.toUpperCase().includes(S(y.title)))).slice(0,1).map((e,s)=>(0,n.jsx)(a.Z,{title:"works"},s)),(0,n.jsx)("div",{className:"works-card-list",children:J.filter(e=>e.servicesProvides.some(e=>e.toUpperCase().includes(S(y.title)))).slice(0,4).map((e,s)=>(0,n.jsx)(p.Z,{data:e},s))})]})}),(0,n.jsxs)("div",{className:"services-detailed-content-div",children:[(0,n.jsxs)("div",{className:"services-detailed-content-texts",children:[(0,n.jsx)("p",{children:y.context.subTitle}),(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:y.context.content}})]}),(0,n.jsx)("svg",{width:"286",height:"285",viewBox:"0 0 286 285",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsxs)("g",{opacity:"0.5",children:[(0,n.jsx)("path",{d:"M112.213 113.32H112.006L111.973 113.353C108.104 113.244 104.982 110.055 104.982 106.16C104.982 95.4011 109.589 85.0627 117.641 77.8544L117.642 77.8537C125.657 70.6469 136.488 67.1999 147.285 68.3956L147.285 68.3956C164.758 70.3293 178.825 84.3958 180.758 101.869C182.2 114.883 177.031 127.54 166.904 135.733C156.277 144.307 150.189 157.061 150.189 170.749C150.189 174.713 146.957 177.944 142.994 177.944C139.03 177.944 135.798 174.713 135.798 170.749C135.798 152.695 143.818 135.845 157.843 124.504L157.843 124.504C164.139 119.409 167.378 111.547 166.469 103.433C165.267 92.5841 156.534 83.8867 145.721 82.6851C138.92 81.9213 132.329 83.9955 127.269 88.5459C122.284 93.022 119.408 99.4269 119.408 106.125C119.408 110.088 116.176 113.32 112.213 113.32Z",stroke:"white"}),(0,n.jsx)("path",{d:"M139.787 188.884H146.271C150.087 188.884 153.181 191.978 153.181 195.794V202.278C153.181 206.094 150.087 209.188 146.271 209.188H139.787C135.971 209.188 132.877 206.094 132.877 202.278V195.794C132.877 191.978 135.971 188.884 139.787 188.884Z",stroke:"white"}),(0,n.jsx)("path",{d:"M1.05517 144.92L1.06509 145.409C2.59161 220.777 62.7649 281.838 138.097 284.429L138.102 284.429C139.692 284.5 141.319 284.5 142.924 284.5C165.148 284.5 187.158 279.281 206.895 269.307C206.895 269.306 206.896 269.306 206.896 269.306L207.121 269.752C209.971 268.292 213.285 267.971 216.42 268.826L1.05517 144.92ZM1.05517 144.92H1.02048C0.372212 106.051 15.1313 69.5368 42.6005 42.0675C70.185 14.483 106.961 -0.284396 145.942 0.532137L145.942 0.532144C221.31 2.05866 282.37 62.2674 284.926 137.599L285.426 137.582L284.926 137.599C285.743 161.455 280.524 185.24 269.84 206.397C268.323 209.357 267.953 212.798 268.841 216.052C268.841 216.053 268.841 216.053 268.841 216.054L279.457 255.667C279.457 255.667 279.457 255.667 279.457 255.667C281.227 262.299 279.389 269.169 274.527 274.03C269.666 278.891 262.797 280.73 256.165 278.959C256.164 278.959 256.164 278.959 256.164 278.959L216.551 268.344C216.551 268.344 216.55 268.343 216.55 268.343L1.05517 144.92ZM145.668 14.9224H145.678C212.278 16.2817 268.282 71.4992 270.536 138.064C271.251 159.487 266.566 180.874 256.98 199.867L256.98 199.867C253.866 206.026 253.165 213.06 254.951 219.748L265.566 259.359L145.668 14.9224ZM145.668 14.9224H145.662H145.657H145.652H145.647H145.641H145.636H145.631H145.626H145.621H145.615H145.61H145.605H145.6H145.594H145.589H145.584H145.579H145.574H145.568H145.563H145.558H145.553H145.548H145.542H145.537H145.532H145.527H145.521H145.516H145.511H145.506H145.501H145.495H145.49H145.485H145.48H145.474H145.469H145.464H145.459H145.454H145.448H145.443H145.438H145.433H145.427H145.422H145.417H145.412H145.407H145.401H145.396H145.391H145.386H145.381H145.375H145.37H145.365H145.36H145.354H145.349H145.344H145.339H145.334H145.328H145.323H145.318H145.313H145.307H145.302H145.297H145.292H145.287H145.281H145.276H145.271H145.266H145.26H145.255H145.25H145.245H145.24H145.234H145.229H145.224H145.219H145.214H145.208H145.203H145.198H145.193H145.187H145.182H145.177H145.172H145.167H145.161H145.156H145.151H145.146H145.14H145.135H145.13H145.125H145.12H145.114H145.109H145.104H145.099H145.093H145.088H145.083H145.078H145.073H145.067H145.062H145.057H145.052H145.047H145.041H145.036H145.031H145.026H145.02H145.015H145.01H145.005H145H144.994H144.989H144.984H144.979H144.973H144.968H144.963H144.958H144.953H144.947H144.942H144.937H144.932H144.926H144.921H144.916H144.911H144.906H144.9H144.895H144.89H144.885H144.88H144.874H144.869H144.864H144.859H144.853H144.848H144.843H144.838H144.833H144.827H144.822H144.817H144.812H144.806H144.801H144.796H144.791H144.786H144.78H144.775H144.77H144.765H144.76H144.754H144.749H144.744H144.739H144.733H144.728H144.723H144.718H144.713H144.707H144.702H144.697H144.692H144.686H144.681H144.676H144.671H144.666H144.66H144.655H144.65H144.645H144.639H144.634H144.629H144.624H144.619H144.613H144.608H144.603H144.598H144.593H144.587H144.582H144.577H144.572H144.566H144.561H144.556H144.551H144.546H144.54H144.535H144.53H144.525H144.519H144.514H144.509H144.504H144.499H144.493H144.488H144.483H144.478H144.472H144.467H144.462H144.457H144.452H144.446H144.441H144.436H144.431H144.426H144.42H144.415H144.41H144.405H144.399H144.394H144.389H144.384H144.379H144.373H144.368H144.363H144.358H144.352H144.347H144.342H144.337H144.332H144.326H144.321H144.316H144.311H144.305H144.3H144.295H144.29H144.285H144.279H144.274H144.269H144.264H144.259H144.253H144.248H144.243H144.238H144.232H144.227H144.222H144.217H144.212H144.206H144.201H144.196H144.191H144.185H144.18H144.175H144.17H144.165H144.159H144.154H144.149H144.144H144.138H144.133H144.128H144.123H144.118H144.112H144.107H144.102H144.097H144.092H144.086H144.081H144.076H144.071H144.065H144.06H144.055H144.05H144.045H144.039H144.034H144.029H144.024H144.018H144.013H144.008H144.003H143.998H143.992H143.987H143.982H143.977H143.971H143.966H143.961H143.956H143.951H143.945H143.94H143.935H143.93H143.925H143.919H143.914H143.909H143.904H143.898H143.893H143.888H143.883H143.878H143.872H143.867H143.862H143.857H143.851H143.846H143.841H143.836H143.831H143.825H143.82H143.815H143.81H143.805H143.799H143.794H143.789H143.784H143.778H143.773H143.768H143.763H143.758H143.752H143.747H143.742H143.737H143.731H143.726H143.721H143.716H143.711H143.705H143.7H143.695H143.69H143.684H143.679H143.674H143.669H143.664H143.658H143.653H143.648H143.643H143.638H143.632H143.627H143.622H143.617H143.611H143.606H143.601H143.596H143.591H143.585H143.58H143.575H143.57H143.564H143.559H143.554H143.549H143.544H143.538H143.533H143.528H143.523H143.517H143.512H143.507H143.502H143.497H143.496V14.8868M145.668 14.9224L143.496 14.8868M143.496 14.8868H142.996H143.496ZM264.369 263.836C264.916 263.288 266.206 261.686 265.567 259.363L259.896 265.034C262.219 265.673 263.821 264.383 264.369 263.836ZM220.281 254.418L259.892 265.033L138.614 269.503L138.596 270.003C138.596 270.003 138.597 270.003 138.597 270.003C159.914 270.754 181.372 266.033 200.399 256.447C206.561 253.367 213.595 252.633 220.281 254.418Z",stroke:"white"}),(0,n.jsx)("path",{d:"M31.3454 142.944C23.3448 114.578 36.6581 80.7953 61.9688 65.6629C48.3625 90.6137 38.4798 115.43 31.3454 142.944Z",stroke:"white"})]})})]}),(0,n.jsxs)("div",{className:"service-working-process-section",children:[(0,n.jsx)(a.Z,{title:"working process"}),(0,n.jsx)("div",{className:"testimonials-qoutes-di",children:(0,n.jsxs)("div",{className:"testimonials-carouse",style:{position:"relative"},children:[(0,n.jsx)("div",{className:"testimonials-carousel-inne",style:{transform:"translate(-".concat(100*f,"%)")},children:y.workingProcess.map((e,i)=>(0,n.jsxs)("div",{className:"working-process-card",children:[(0,n.jsxs)("div",{className:"working-process-titles",style:{display:"flex",width:"100%",justifyContent:"space-between"},children:[(0,n.jsx)("p",{className:"working-process-title",children:e.title}),(0,n.jsxs)("p",{className:"working-process-count",children:["0",i+1,"/0",y.workingProcess.length]})]}),(0,n.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"},children:(0,n.jsxs)("div",{className:"card-bottom-div",children:[(0,n.jsx)("div",{className:"card-sub-data-list",children:e.list.map(e=>(0,n.jsx)(d,{data:e,isOpen:s,toggleExpand:g},null==e?void 0:e.id))}),(0,n.jsx)("img",{src:e.image,alt:e.alt,className:"testimonials-text-img"})]})})]},i))}),(0,n.jsx)("div",{className:"scroll-btns",children:Array.from({length:y.workingProcess.length}).map((e,s)=>(0,n.jsx)("div",{onClick:()=>Z(s),style:{width:f===s?"100px":"10px",borderRadius:f===s?"4px":"10px"},className:"scroll-btn"},s))})]})})]}),(0,n.jsx)("div",{className:"outcomes-section",children:(0,n.jsx)(w,{outComes:null==y?void 0:y.outcomes})}),(0,n.jsx)(k.Z,{service:y.title}),(0,n.jsxs)("div",{className:"services-faq-section",children:[(0,n.jsx)(a.Z,{title:"faq"}),y.FAQData.map(e=>(0,n.jsx)(d,{data:e,isOpen:s,toggleExpand:g},null==e?void 0:e.id))]}),(0,n.jsxs)("div",{className:"service-contact-section",children:[(0,n.jsx)(a.Z,{title:"get in touch"}),(0,n.jsxs)("div",{className:"contact-form-section",children:[(0,n.jsx)("p",{children:"Let's Boost Your Digital Presence!"}),(0,n.jsxs)("div",{className:"contact-form-div",children:[(0,n.jsxs)("svg",{className:"contact-form-icon",width:"291",height:"300",viewBox:"0 0 291 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M222.374 267.909C228.825 266.131 234.888 263.442 240.435 260.011C246.291 256.416 251.598 251.952 256.277 246.668C257.299 245.535 258.51 244.032 259.714 242.421C260.213 241.754 260.701 241.09 261.187 240.413C263.098 237.737 264.833 235.019 265.669 233.304C266.146 232.375 267.061 230.561 267.679 229.258C268.648 227.338 269.629 224.8 270.517 222.001C272.391 216.409 273.564 210.541 273.949 204.521C274.236 200.076 274.053 195.568 273.449 191.073C272.366 182.726 269.776 174.532 265.776 167.044C265.038 165.652 264.257 164.291 263.433 162.962C261.38 159.71 260.591 158.58 257.391 154.635C255.822 152.699 251.887 148.629 250.772 147.845C250.428 147.604 249.733 147.012 249.256 146.492C248.357 145.562 246.027 143.832 243.4 142.069C241.301 140.624 239.061 139.204 237.456 138.313L234.103 136.399L233.775 136.456C227.197 133.355 220.803 131.452 213.495 130.398C206.482 129.376 201.264 129.43 192.035 130.583C187.463 131.164 182.701 131.621 181.516 131.61C181.42 131.615 181.334 131.606 181.238 131.61L178.707 131.425C175.23 131.223 169.395 130.165 166.951 129.311C166.644 129.208 166.234 129.074 165.799 128.933C165.12 128.713 164.375 128.457 163.775 128.272C162.444 127.768 161.139 127.211 159.859 126.589C158.377 125.846 156.775 124.966 155.236 124.04C149.915 120.742 145.134 116.385 141 111.034C138.357 107.583 137.223 106.899 135.079 107.274L135.067 107.276C132.923 107.65 132.09 108.689 130.771 112.82C128.695 119.255 125.67 124.963 121.784 129.88C120.648 131.262 119.429 132.646 118.296 133.834C117.303 134.852 116.264 135.819 115.182 136.744C114.68 137.121 114.066 137.615 113.502 138.051C113.141 138.332 112.814 138.606 112.546 138.798C110.537 140.429 105.405 143.402 102.202 144.77L99.8832 145.802C99.7936 145.842 99.7136 145.868 99.6219 145.896C98.5104 146.308 93.8635 147.493 89.3774 148.494C80.306 150.549 75.3756 152.255 69.1241 155.592C62.6037 159.049 57.2351 163.017 52.0966 168.164L51.7685 168.221L49.2626 171.158C48.0433 172.542 46.4285 174.635 44.9427 176.706C43.0673 179.243 41.4492 181.663 40.9323 182.852C40.6576 183.491 40.2062 184.295 39.9644 184.639C39.181 185.754 36.8585 190.916 36.0377 193.269C34.3636 198.065 34.0043 199.396 33.1747 203.151C32.8501 204.681 32.5669 206.24 32.3442 207.8C31.1183 216.2 31.4561 224.775 33.2678 233.007C34.2209 237.429 35.578 241.744 37.3538 245.829C39.7567 251.362 42.8605 256.483 46.506 261.111C48.2918 263.456 50.0734 265.499 51.6355 266.978C52.6562 267.983 54.1336 269.391 54.8979 270.103C56.2652 271.434 58.8166 273.391 61.5238 275.273C62.1982 275.747 62.8823 276.207 63.5781 276.665C65.2683 277.771 66.905 278.777 68.2501 279.496C74.4438 282.882 80.9487 285.284 87.6767 286.681C94.0602 288.042 100.687 288.515 107.359 288.002C107.561 287.979 107.904 287.943 108.363 287.875C111.896 287.5 138.374 282.998 164.947 278.346C191.512 273.72 217.926 268.988 221.377 268.144C221.841 268.039 222.179 267.968 222.374 267.909ZM105.418 274.323C103.289 274.441 101.177 274.447 99.1075 274.35C93.0288 273.974 86.6137 272.571 80.8767 270.348C76.9515 268.752 73.1848 266.681 69.6141 264.14C60.269 257.573 53.6103 249.173 49.35 238.603C48.4022 236.148 47.6179 233.593 46.9971 230.936C46.0597 226.536 45.3419 221.179 45.3657 217.927C45.4039 213.235 46.1215 208.147 47.3533 203.308C47.5206 202.675 47.6995 202.04 47.8998 201.389C48.9821 197.699 50.3886 194.205 52.1096 190.922C53.9457 187.607 57.2029 182.957 59.6136 180.097C60.8757 178.682 62.2204 177.324 63.638 176.038C68.0819 172.099 73.8857 168.272 78.9976 166.015C82.2835 164.572 84.3072 163.784 93.2713 162.014L141.024 153.568L143.087 153.208L145.161 152.846L192.962 144.608C201.996 143.236 204.167 143.292 207.747 143.536C213.308 143.918 220.079 145.561 225.594 147.762C227.364 148.491 229.089 149.313 230.756 150.217C233.993 152.091 238.622 155.364 241.484 157.859C244.216 160.364 246.723 163.174 248.992 166.28C249.389 166.826 249.784 167.361 250.156 167.9C252.965 172.022 255.354 176.579 256.978 180.969C258.1 184.009 259.242 189.303 259.851 193.761C260.168 196.471 260.296 199.141 260.236 201.772C259.809 213.16 256.393 223.332 249.824 232.665C247.325 236.265 244.483 239.49 241.331 242.322C236.696 246.343 231.139 249.849 225.545 252.251C223.619 253.046 221.641 253.753 219.599 254.363C219.255 254.472 218.324 254.67 216.901 254.955C200.646 258.192 123.98 271.577 108.152 273.942C106.697 274.184 105.764 274.299 105.418 274.323ZM182.169 203.122C180.182 191.745 187.803 180.899 199.181 178.913C210.57 176.924 221.404 184.548 223.39 195.925C225.376 207.303 217.767 218.146 206.378 220.134C195 222.121 184.157 214.511 182.169 203.122ZM82.0091 220.609C80.0227 209.232 87.6439 198.386 99.0214 196.4C110.399 194.414 121.244 202.035 123.231 213.412C125.217 224.79 117.596 235.635 106.218 237.621C94.8292 239.61 83.9976 231.998 82.0091 220.609Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),(0,n.jsx)("path",{d:"M50.1585 112.537C50.2644 111.552 50.3702 110.568 50.474 109.572C52.0216 94.438 59.9589 83.2598 72.2224 74.9366C80.6962 69.1827 90.4629 65.9924 99.7949 61.9723C114.575 55.6126 129.986 51.0744 145.444 46.7334C158.567 43.0538 171.514 43.486 183.872 49.7443C193.579 54.6541 200.3 62.2347 203.382 72.8293C204.926 78.1501 204.725 83.4257 203.074 88.7007C202.245 91.3568 201.494 94.0357 200.906 96.7584C200.487 98.7152 199.417 100.122 197.605 100.534C193.924 101.37 190.197 102.226 186.452 102.494C180.487 102.907 174.58 102.2 168.886 100.224C167.704 99.8144 166.513 99.2858 165.485 98.5839C163.293 97.095 162.3 95.6263 163.001 92.6544C164.039 88.2954 164.935 83.8886 165.562 79.4565C166.208 74.9245 163.943 72.5308 159.328 73.0709C156.157 73.4434 153.006 74.3437 149.995 75.4248C140.002 78.9806 130.074 82.7667 120.107 86.4025C110.378 89.9484 100.584 93.3248 90.9032 97.0073C88.9319 97.7499 87.1114 99.2873 85.6609 100.869C83.7643 102.939 83.9419 104.924 85.9344 106.931C87.8519 108.854 89.9752 110.572 92.0673 112.32C93.9173 113.856 95.8274 115.322 97.7395 116.799C99.2602 117.97 99.9057 119.524 99.3251 121.316C98.7174 123.161 98.0731 125.072 97.0098 126.659C92.0836 133.991 85.7299 139.785 77.7719 143.722C74.9706 145.104 72.3671 145.269 69.7039 143.017C66.606 140.419 63.1088 138.301 59.9391 135.775C55.3368 132.099 53.2938 126.829 51.5666 121.431C51.4262 120.973 51.2037 120.529 51.0185 120.09C50.7116 117.572 50.4302 115.061 50.1585 112.537Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),(0,n.jsx)("path",{className:"ring-2 ring",d:"M238.621 97.8178C235.898 96.8805 233.29 95.9835 230.541 95.0386C234.866 81.569 234.183 68.5271 228.03 55.9693C221.909 43.4543 212.056 34.9474 198.858 30.1036C199.791 27.3567 200.677 24.751 201.562 22.1454C230.11 30.6725 250.215 64.9796 238.621 97.8178Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),(0,n.jsx)("path",{className:"ring-1 ring",d:"M194.09 44.2061C194.277 43.5457 194.413 43.0147 194.587 42.4893C195.324 40.3443 196.074 38.2089 196.824 36.0736C220.677 44.2008 232.626 70.4534 224.567 92.9666C221.922 92.064 219.263 91.1517 216.451 90.1937C219.517 80.7113 219.057 71.5063 214.741 62.6244C210.41 53.7211 203.417 47.6972 194.09 44.2061Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),(0,n.jsx)("path",{className:"ring-3 ring",d:"M253.87 101.759C250.433 100.609 247.137 99.5057 243.661 98.3377C248.974 81.3269 247.991 64.9082 240.132 49.1467C232.294 33.4417 219.803 22.8237 203.135 16.847C204.282 13.3867 205.373 10.093 206.464 6.79938C242.508 17.2536 268.156 60.2767 253.87 101.759Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"})]}),(0,n.jsxs)("div",{className:"contact-form",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(H.Z,{onChange:I,value:E,labelName:"first name*",placeHolder:"John"}),(0,n.jsx)(H.Z,{onChange:P,value:B,labelName:"second name",placeHolder:"Smith"})]}),(0,n.jsxs)("span",{children:[(0,n.jsx)(H.Z,{onChange:A,value:q,labelName:"email*",placeHolder:"johnsmith@example.com"}),(0,n.jsx)(t.Z,{value:F,onChange:U})]}),(0,n.jsx)("span",{children:(0,n.jsx)(v.Z,{onServiceSelected:V})}),(0,n.jsx)("span",{children:(0,n.jsx)(r.Z,{onChange:R,value:D,labelName:"share more",placeHolder:"Share your thoughts"})}),z?(0,n.jsx)("button",{children:(0,n.jsx)(j.Z,{})}):(0,n.jsx)("button",{onClick:O,children:"submit"})]})]})]})]})]})}):"loading"})}},8346:function(e,s,i){"use strict";var n=i(7437);i(5308);var t=i(9333),l=i(2265);s.Z=e=>{let{service:s}=e,{team:i,isLoading:r,error:a}=(0,t.PW)(),[H,d]=(0,l.useState)([]);return((0,l.useEffect)(()=>{s?d(i.filter(e=>e.services.some(e=>e.includes(s)))):d(i)},[s,i]),r)?(0,n.jsx)("h1",{children:"Loading..."}):a?(0,n.jsxs)("h1",{children:["Error: ",a.message]}):(0,n.jsx)("div",{className:"teamcatecard-container-wrapper",children:H.map((e,s)=>{var i;return(0,n.jsxs)("div",{className:"teamcatecard-container",children:[(0,n.jsxs)("div",{className:"teamcatecard",children:[(0,n.jsx)("h1",{children:e.department}),(0,n.jsx)("p",{children:e.description})]},s),(0,n.jsx)("div",{className:"card-container",children:null==e?void 0:null===(i=e.members)||void 0===i?void 0:i.map(e=>(0,n.jsxs)("div",{className:"team-member",children:[(0,n.jsx)("img",{src:e.imageUrl,alt:e.name,className:"team-member-image"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"people-info",children:[(0,n.jsx)("h2",{children:e.name}),(0,n.jsx)("a",{href:e.linkedInUrl,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("div",{className:"linked-in",children:(0,n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M15.053 0H4.44698C3.26757 0 2.13647 0.46852 1.3025 1.30249C0.46853 2.13646 0 3.26757 0 4.44698V15.053C0 16.2324 0.46853 17.3635 1.3025 18.1975C2.13647 19.0315 3.26757 19.5 4.44698 19.5H15.053C16.2324 19.5 17.3636 19.0315 18.1975 18.1975C19.0315 17.3635 19.5 16.2324 19.5 15.053V4.44698C19.5 3.26757 19.0315 2.13646 18.1975 1.30249C17.3636 0.46852 16.2324 0 15.053 0ZM6.59265 15.7423C6.59568 15.7967 6.58757 15.8511 6.56882 15.9023C6.55007 15.9535 6.52106 16.0002 6.48359 16.0398C6.44612 16.0793 6.40097 16.1108 6.3509 16.1323C6.30084 16.1538 6.24691 16.1649 6.19243 16.1648H4.41363C4.30647 16.1619 4.20468 16.1173 4.12992 16.0404C4.05517 15.9636 4.01336 15.8606 4.0134 15.7534V8.3492C4.01191 8.2957 4.02118 8.2425 4.04063 8.1926C4.06007 8.1428 4.0893 8.0973 4.12662 8.059C4.16393 8.0206 4.20857 7.9902 4.25787 7.9693C4.30716 7.9485 4.36012 7.9378 4.41363 7.9379H6.19243C6.24593 7.9378 6.29889 7.9485 6.34819 7.9693C6.39749 7.9902 6.44212 8.0206 6.47944 8.059C6.51675 8.0973 6.546 8.1428 6.56544 8.1926C6.58489 8.2425 6.59414 8.2957 6.59265 8.3492V15.7423ZM5.26968 6.38141C4.97991 6.37922 4.69729 6.29129 4.45743 6.12871C4.21757 5.96613 4.0312 5.73618 3.92183 5.46784C3.81246 5.1995 3.78499 4.90479 3.84286 4.62086C3.90073 4.33693 4.04137 4.07649 4.24704 3.87236C4.45271 3.66824 4.7142 3.52957 4.99856 3.47385C5.28292 3.41812 5.57742 3.44782 5.84492 3.55921C6.11242 3.6706 6.34096 3.85869 6.50173 4.09978C6.66249 4.34086 6.74829 4.62414 6.7483 4.91391C6.7483 5.10757 6.70998 5.29931 6.63554 5.47808C6.5611 5.65685 6.452 5.81913 6.31455 5.95554C6.1771 6.09196 6.01401 6.19982 5.83467 6.27291C5.65534 6.34601 5.46332 6.38288 5.26968 6.38141ZM16.0869 15.7312C16.087 15.8325 16.0475 15.9298 15.9769 16.0025C15.9064 16.0751 15.8102 16.1174 15.709 16.1203H13.8301C13.7288 16.1174 13.6327 16.0751 13.5621 16.0025C13.4915 15.9298 13.4521 15.8325 13.4521 15.7312V12.307C13.4521 11.7956 13.6078 10.0835 12.0958 10.0835C10.9173 10.0835 10.6839 11.2842 10.6394 11.8178V15.809C10.6394 15.9103 10.6 16.0076 10.5294 16.0803C10.4588 16.153 10.3627 16.1952 10.2614 16.1981H8.4382C8.3871 16.1981 8.3365 16.1881 8.2892 16.1685C8.242 16.1489 8.1991 16.1203 8.163 16.0842C8.1269 16.048 8.0982 16.0051 8.0787 15.9579C8.0591 15.9107 8.049 15.8601 8.049 15.809V8.3158C8.0519 8.2146 8.0942 8.1185 8.1669 8.0479C8.2395 7.9773 8.3369 7.9378 8.4382 7.9379H10.2614C10.3627 7.9378 10.46 7.9773 10.5327 8.0479C10.6054 8.1185 10.6476 8.2146 10.6505 8.3158V8.9607C10.9167 8.5712 11.2841 8.2619 11.7132 8.066C12.1422 7.87 12.6166 7.795 13.0852 7.8489C16.1203 7.8489 16.1092 10.6839 16.1092 12.2959L16.0869 15.7312Z",fill:"black"})})})})]}),(0,n.jsx)("p",{children:e.designation})]})]},e.id))})]})})})}},3995:function(e,s,i){"use strict";var n=i(7437);i(8476);var t=i(7749),l=i(9376);s.Z=e=>{let{data:s,key:i}=e,r=(0,t.Z)(),a=(0,l.useRouter)(),H=e=>{let s=e.replace(/[^\w]+/gi,"-").toLowerCase();a.push("/works/".concat(s)),window.scrollTo(0,0)};return(0,n.jsxs)("div",{className:"works-card visible-section",ref:r,onClick:()=>H(s.slug),children:[(0,n.jsx)("div",{className:"works-card-img",children:(0,n.jsx)("img",{src:null==s?void 0:s.image,className:"work-img",alt:"wisbato works card",style:{borderRadius:"4px",transition:"transform 0.3s ease"},width:"100%",height:"auto"})}),(0,n.jsx)("div",{className:"works-title",children:(0,n.jsxs)("h1",{children:[s.name," ",(0,n.jsxs)("span",{children:[" - ",s.title]})," "]})})]},i)}},5085:function(e,s,i){"use strict";var n=i(7437),t=i(2265);i(7960),s.Z=e=>{let{onServiceSelected:s}=e,[i,l]=(0,t.useState)(!1),[r,a]=(0,t.useState)(""),H=()=>{l(!i)},d=e=>{a(e),H(),s(e)};return(0,n.jsxs)("div",{className:"form-drop-down-section",children:[(0,n.jsx)("label",{htmlFor:"",children:"Services"}),(0,n.jsxs)("div",{style:{marginTop:"8px"},className:"form-drop-down-btn",onClick:H,children:[(0,n.jsx)("p",{className:"form-drop-down-selected",children:r||"service categories"}),(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 8.41693L10.5866 15.0037C10.9633 15.375 11.471 15.5831 12 15.5831C12.529 15.5831 13.0367 15.375 13.4134 15.0037L20 8.41693",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})]}),(0,n.jsx)("ul",{className:"form-dropdown-menu ".concat(i?"open":""),children:["web development","application development","branding","ecommerce development","socialmedia marketing","search engine optimization","mobile app development","IT suppot"].map((e,s)=>(0,n.jsx)("li",{onClick:()=>d(e),children:e},s))})]})}},2796:function(e,s,i){"use strict";var n=i(7437);s.Z=e=>{let{title:s}=e;return(0,n.jsx)("div",{className:"section-title",children:(0,n.jsx)("h2",{children:(0,n.jsx)("span",{children:s})})})}},7960:function(){},9526:function(){},5308:function(){},6453:function(){},2119:function(){}},function(e){e.O(0,[3587,4042,2372,1130,2264,1421,2482,9584,4705,3464,5640,3448,545,4990,2971,2117,1744],function(){return e(e.s=904)}),_N_E=e.O()}]);