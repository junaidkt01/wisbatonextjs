(()=>{var e={};e.id=513,e.ids=[513],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7790:e=>{"use strict";e.exports=require("assert")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},5240:e=>{"use strict";e.exports=require("https")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},7469:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>C,originalPathname:()=>h,pages:()=>c,routeModule:()=>x,tree:()=>d}),t(3748),t(212),t(996);var i=t(170),l=t(5002),r=t(3876),o=t.n(r),a=t(6299),n={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>a[e]);t.d(s,n);let d=["",{children:["blogs",{children:["[blogId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3748)),"C:\\Users\\junai\\Desktop\\WISBATO\\wisbato_v2_nextjs\\app\\blogs\\[blogId]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,212)),"C:\\Users\\junai\\Desktop\\WISBATO\\wisbato_v2_nextjs\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,996,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\junai\\Desktop\\WISBATO\\wisbato_v2_nextjs\\app\\blogs\\[blogId]\\page.tsx"],h="/blogs/[blogId]/page",C={require:t,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/blogs/[blogId]/page",pathname:"/blogs/[blogId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1302:(e,s,t)=>{Promise.resolve().then(t.bind(t,2508))},2508:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>L});var i=t(7247);t(1959),t(4047);var l=t(8964),r=t(7833),o=t(9441),a=t(967),n=t.n(a),d=t(4178);let c=()=>(0,i.jsxs)("div",{className:"detailed-blog-title-div",children:[i.jsx("p",{className:"detailed-blog-title",children:i.jsx(r.Z,{width:150,height:30})}),i.jsx(r.Z,{width:100,height:30})]}),h=({title:e})=>(0,i.jsxs)("div",{className:"detailed-blog-title-div",children:[i.jsx("p",{className:"detailed-blog-title",children:e}),i.jsx(C,{})]}),C=()=>(0,i.jsxs)("button",{children:[(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M6.01472 15.8088C7.81776 15.8088 9.27942 14.3472 9.27942 12.5441C9.27942 10.7411 7.81776 9.27942 6.01472 9.27942C4.21167 9.27942 2.75001 10.7411 2.75001 12.5441C2.75001 14.3472 4.21167 15.8088 6.01472 15.8088Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M17.9853 9.27941C19.7883 9.27941 21.25 7.81775 21.25 6.01471C21.25 4.21166 19.7883 2.75 17.9853 2.75C16.1822 2.75 14.7206 4.21166 14.7206 6.01471C14.7206 7.81775 16.1822 9.27941 17.9853 9.27941Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M17.9853 21.25C19.7883 21.25 21.25 19.7883 21.25 17.9853C21.25 16.1822 19.7883 14.7206 17.9853 14.7206C16.1822 14.7206 14.7206 16.1822 14.7206 17.9853C14.7206 19.7883 16.1822 21.25 17.9853 21.25Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M15.0144 16.6359L8.9856 13.8935",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),i.jsx("path",{d:"M15.1124 7.58176L8.88765 10.9771",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),i.jsx("p",{children:"share"})]}),x=({headings:e,onTitleClick:s})=>(0,i.jsxs)("div",{className:"blog-title-navigate-section",children:[i.jsx("p",{children:"table of content"}),i.jsx("div",{className:"blog-title-navigates",children:e.map((e,t)=>i.jsx("p",{onClick:()=>s(e.id),children:e.title},t))})]}),u=()=>(0,i.jsxs)("div",{className:"subtitle-content-section",style:{width:"100%"},children:[i.jsx("p",{className:"paragraph",style:{width:"100%"},children:i.jsx(r.Z,{count:3})}),(0,i.jsxs)("div",{className:"blog-points-section",style:{width:"100%"},children:[i.jsx("p",{className:"numbered-list",children:i.jsx(r.Z,{height:30})}),i.jsx("p",{className:"paragraph",children:i.jsx(r.Z,{count:3})}),i.jsx(r.Z,{height:200})]})]}),m=()=>(0,i.jsxs)("div",{className:"sub-blogs-section",style:{width:"100%"},children:[i.jsx(p,{}),i.jsx(p,{})]}),p=()=>(0,i.jsxs)("div",{className:"sub-blogs",children:[i.jsx("p",{children:i.jsx(r.Z,{width:100})}),Array.from({length:2}).map((e,s)=>(0,i.jsxs)("div",{className:"sub-blog",children:[i.jsx("p",{children:i.jsx(r.Z,{height:130})}),i.jsx("p",{children:i.jsx(r.Z,{count:2})})]},s))]}),g=({recentBlogs:e,popularBlogs:s})=>(0,i.jsxs)("div",{className:"sub-blogs-section",children:[i.jsx(j,{title:"recent posts",blogs:e}),i.jsx(j,{title:"popular posts",blogs:s})]}),j=({title:e,blogs:s})=>{let t=(0,d.useRouter)();return(0,i.jsxs)("div",{className:"sub-blogs",children:[i.jsx("p",{children:e}),s.map((e,s)=>(0,i.jsxs)("div",{style:{cursor:"pointer"},className:"sub-blog",onClick:()=>{t.push(`/blogs/${e.slug}`),scrollTo(0,0)},children:[i.jsx("img",{className:"sub-blog-img",src:e.image,alt:e.title}),i.jsx("p",{children:e.title})]},s))]})},b=({detailedBlog:e})=>{let s=(0,l.useRef)(null),[t,r]=(0,l.useState)([]),[a,d]=(0,l.useState)(""),{blogs:C,isLoading:p}=(0,o.Bk)(),j=e?.content[0]?.description;return(0,l.useEffect)(()=>{if(!e?.content)return;let s=document.createElement("div");s.innerHTML=j,r(Array.from(s.querySelectorAll("h2, h3")).map((e,s)=>{let t=`heading-${s}`;return e.id=t,{id:t,title:e.textContent||"",tagName:e.tagName.toLowerCase()}})),d(s.innerHTML)},[e?.content]),(0,i.jsxs)("div",{className:"blog-content-section",children:[(0,i.jsxs)(n(),{children:[i.jsx("title",{children:e?.meta_title}),i.jsx("meta",{name:"description",content:e?.meta_description}),i.jsx("link",{rel:"canonical",href:`https://www.wisbato.com/blogs/${e?.slug}`})]}),p?i.jsx(c,{}):i.jsx(h,{title:e?.title}),(0,i.jsxs)("div",{className:"detailed-blog-seperate-section",children:[i.jsx(x,{headings:t,onTitleClick:e=>{let s=document.getElementById(e);if(s){let e=s.getBoundingClientRect().top+window.scrollY-70;window.scrollTo({top:e,behavior:"smooth"})}}}),p?i.jsx(u,{}):i.jsx("span",{className:"subtitle-content-section",children:i.jsx("div",{ref:s,dangerouslySetInnerHTML:{__html:a}})}),p?i.jsx(m,{}):i.jsx(g,{recentBlogs:C.slice(0,3).filter(s=>s?.slug!==e?.slug),popularBlogs:C.slice(0,-1).filter(s=>s?.slug!==e?.slug)})]})]})};var v=t(3531),w=t(5366),k=t(8924),N=t(4934),f=t(4726),Z=t(9965),_=t(9372);t(5520);var y=t(1174),q=t(4473);let L=()=>{let{blogId:e}=(0,d.useParams)(),s=e||"Default value",[t,a]=(0,l.useState)(null),{blogs:n,isLoading:c}=(0,o.Bk)(),{statusMessage:h,handleServiceSelection:C,firstName:x,setFirstName:u,lastName:m,setLastName:p,email:g,setEmail:j,phone:L,setPhone:M,message:P,setMessage:S,handleSubmit:B,loading:I}=(0,_.c)(),{setNotify:T}=(0,l.useContext)(y.X);return(0,l.useEffect)(()=>{h.message?T(h):""===h.message&&setTimeout(()=>{T(h)},3e3)},[h]),(0,l.useEffect)(()=>{c||a(n.find(e=>e.slug===s))},[n,c,s]),(0,i.jsxs)("div",{className:"page-transition",children:[c?i.jsx("div",{className:"blog-detailed-banner",children:(0,i.jsxs)("div",{className:"blog-detailed-text-div",children:[i.jsx(r.Z,{width:300}),(0,i.jsxs)("div",{className:"detailed-blog",children:[i.jsx(r.Z,{className:"detail-blog-skeleton-img"}),(0,i.jsxs)("div",{className:"blog-author-div",children:[(0,i.jsxs)("div",{className:"blog-author-details",children:[i.jsx(r.Z,{width:60,height:60,circle:!0}),i.jsx(r.Z,{width:100})]}),i.jsx("div",{className:"blog-date",children:i.jsx(r.Z,{width:100,count:2})})]})]})]})}):i.jsx("div",{className:"blog-detailed-banner",children:(0,i.jsxs)("div",{className:"blog-detailed-text-div",children:[i.jsx(v.Z,{title:t?.title}),(0,i.jsxs)("div",{className:"detailed-blog",children:[i.jsx("img",{src:t?.image,alt:"Your image alt text",className:"detailed-blog-img",width:930,height:386}),(0,i.jsxs)("div",{className:"blog-author-div",children:[(0,i.jsxs)("div",{className:"blog-author-details",children:[i.jsx("img",{src:"/images/avatar.webp",alt:"Your image alt text",className:"author-blog-img",width:60,height:60}),(0,i.jsxs)("span",{children:[i.jsx("p",{className:"blog-author-name",children:"By Admin"}),i.jsx("p",{children:"Admin@Wisbato"})]})]}),i.jsx("div",{className:"blog-date",children:i.jsx("p",{children:"February 21, 2024"})})]})]})]})}),i.jsx(b,{detailedBlog:t}),(0,i.jsxs)("div",{className:"blog-contact-section",children:[i.jsx(Z.Z,{title:"get in touch"}),(0,i.jsxs)("div",{className:"contact-form-section",children:[i.jsx("p",{children:"Let's Boost Your Digital Presence!"}),(0,i.jsxs)("div",{className:"contact-form-div",children:[(0,i.jsxs)("svg",{className:"contact-form-icon",width:"291",height:"300",viewBox:"0 0 291 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M222.374 267.909C228.825 266.131 234.888 263.442 240.435 260.011C246.291 256.416 251.598 251.952 256.277 246.668C257.299 245.535 258.51 244.032 259.714 242.421C260.213 241.754 260.701 241.09 261.187 240.413C263.098 237.737 264.833 235.019 265.669 233.304C266.146 232.375 267.061 230.561 267.679 229.258C268.648 227.338 269.629 224.8 270.517 222.001C272.391 216.409 273.564 210.541 273.949 204.521C274.236 200.076 274.053 195.568 273.449 191.073C272.366 182.726 269.776 174.532 265.776 167.044C265.038 165.652 264.257 164.291 263.433 162.962C261.38 159.71 260.591 158.58 257.391 154.635C255.822 152.699 251.887 148.629 250.772 147.845C250.428 147.604 249.733 147.012 249.256 146.492C248.357 145.562 246.027 143.832 243.4 142.069C241.301 140.624 239.061 139.204 237.456 138.313L234.103 136.399L233.775 136.456C227.197 133.355 220.803 131.452 213.495 130.398C206.482 129.376 201.264 129.43 192.035 130.583C187.463 131.164 182.701 131.621 181.516 131.61C181.42 131.615 181.334 131.606 181.238 131.61L178.707 131.425C175.23 131.223 169.395 130.165 166.951 129.311C166.644 129.208 166.234 129.074 165.799 128.933C165.12 128.713 164.375 128.457 163.775 128.272C162.444 127.768 161.139 127.211 159.859 126.589C158.377 125.846 156.775 124.966 155.236 124.04C149.915 120.742 145.134 116.385 141 111.034C138.357 107.583 137.223 106.899 135.079 107.274L135.067 107.276C132.923 107.65 132.09 108.689 130.771 112.82C128.695 119.255 125.67 124.963 121.784 129.88C120.648 131.262 119.429 132.646 118.296 133.834C117.303 134.852 116.264 135.819 115.182 136.744C114.68 137.121 114.066 137.615 113.502 138.051C113.141 138.332 112.814 138.606 112.546 138.798C110.537 140.429 105.405 143.402 102.202 144.77L99.8832 145.802C99.7936 145.842 99.7136 145.868 99.6219 145.896C98.5104 146.308 93.8635 147.493 89.3774 148.494C80.306 150.549 75.3756 152.255 69.1241 155.592C62.6037 159.049 57.2351 163.017 52.0966 168.164L51.7685 168.221L49.2626 171.158C48.0433 172.542 46.4285 174.635 44.9427 176.706C43.0673 179.243 41.4492 181.663 40.9323 182.852C40.6576 183.491 40.2062 184.295 39.9644 184.639C39.181 185.754 36.8585 190.916 36.0377 193.269C34.3636 198.065 34.0043 199.396 33.1747 203.151C32.8501 204.681 32.5669 206.24 32.3442 207.8C31.1183 216.2 31.4561 224.775 33.2678 233.007C34.2209 237.429 35.578 241.744 37.3538 245.829C39.7567 251.362 42.8605 256.483 46.506 261.111C48.2918 263.456 50.0734 265.499 51.6355 266.978C52.6562 267.983 54.1336 269.391 54.8979 270.103C56.2652 271.434 58.8166 273.391 61.5238 275.273C62.1982 275.747 62.8823 276.207 63.5781 276.665C65.2683 277.771 66.905 278.777 68.2501 279.496C74.4438 282.882 80.9487 285.284 87.6767 286.681C94.0602 288.042 100.687 288.515 107.359 288.002C107.561 287.979 107.904 287.943 108.363 287.875C111.896 287.5 138.374 282.998 164.947 278.346C191.512 273.72 217.926 268.988 221.377 268.144C221.841 268.039 222.179 267.968 222.374 267.909ZM105.418 274.323C103.289 274.441 101.177 274.447 99.1075 274.35C93.0288 273.974 86.6137 272.571 80.8767 270.348C76.9515 268.752 73.1848 266.681 69.6141 264.14C60.269 257.573 53.6103 249.173 49.35 238.603C48.4022 236.148 47.6179 233.593 46.9971 230.936C46.0597 226.536 45.3419 221.179 45.3657 217.927C45.4039 213.235 46.1215 208.147 47.3533 203.308C47.5206 202.675 47.6995 202.04 47.8998 201.389C48.9821 197.699 50.3886 194.205 52.1096 190.922C53.9457 187.607 57.2029 182.957 59.6136 180.097C60.8757 178.682 62.2204 177.324 63.638 176.038C68.0819 172.099 73.8857 168.272 78.9976 166.015C82.2835 164.572 84.3072 163.784 93.2713 162.014L141.024 153.568L143.087 153.208L145.161 152.846L192.962 144.608C201.996 143.236 204.167 143.292 207.747 143.536C213.308 143.918 220.079 145.561 225.594 147.762C227.364 148.491 229.089 149.313 230.756 150.217C233.993 152.091 238.622 155.364 241.484 157.859C244.216 160.364 246.723 163.174 248.992 166.28C249.389 166.826 249.784 167.361 250.156 167.9C252.965 172.022 255.354 176.579 256.978 180.969C258.1 184.009 259.242 189.303 259.851 193.761C260.168 196.471 260.296 199.141 260.236 201.772C259.809 213.16 256.393 223.332 249.824 232.665C247.325 236.265 244.483 239.49 241.331 242.322C236.696 246.343 231.139 249.849 225.545 252.251C223.619 253.046 221.641 253.753 219.599 254.363C219.255 254.472 218.324 254.67 216.901 254.955C200.646 258.192 123.98 271.577 108.152 273.942C106.697 274.184 105.764 274.299 105.418 274.323ZM182.169 203.122C180.182 191.745 187.803 180.899 199.181 178.913C210.57 176.924 221.404 184.548 223.39 195.925C225.376 207.303 217.767 218.146 206.378 220.134C195 222.121 184.157 214.511 182.169 203.122ZM82.0091 220.609C80.0227 209.232 87.6439 198.386 99.0214 196.4C110.399 194.414 121.244 202.035 123.231 213.412C125.217 224.79 117.596 235.635 106.218 237.621C94.8292 239.61 83.9976 231.998 82.0091 220.609Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),i.jsx("path",{d:"M50.1585 112.537C50.2644 111.552 50.3702 110.568 50.474 109.572C52.0216 94.438 59.9589 83.2598 72.2224 74.9366C80.6962 69.1827 90.4629 65.9924 99.7949 61.9723C114.575 55.6126 129.986 51.0744 145.444 46.7334C158.567 43.0538 171.514 43.486 183.872 49.7443C193.579 54.6541 200.3 62.2347 203.382 72.8293C204.926 78.1501 204.725 83.4257 203.074 88.7007C202.245 91.3568 201.494 94.0357 200.906 96.7584C200.487 98.7152 199.417 100.122 197.605 100.534C193.924 101.37 190.197 102.226 186.452 102.494C180.487 102.907 174.58 102.2 168.886 100.224C167.704 99.8144 166.513 99.2858 165.485 98.5839C163.293 97.095 162.3 95.6263 163.001 92.6544C164.039 88.2954 164.935 83.8886 165.562 79.4565C166.208 74.9245 163.943 72.5308 159.328 73.0709C156.157 73.4434 153.006 74.3437 149.995 75.4248C140.002 78.9806 130.074 82.7667 120.107 86.4025C110.378 89.9484 100.584 93.3248 90.9032 97.0073C88.9319 97.7499 87.1114 99.2873 85.6609 100.869C83.7643 102.939 83.9419 104.924 85.9344 106.931C87.8519 108.854 89.9752 110.572 92.0673 112.32C93.9173 113.856 95.8274 115.322 97.7395 116.799C99.2602 117.97 99.9057 119.524 99.3251 121.316C98.7174 123.161 98.0731 125.072 97.0098 126.659C92.0836 133.991 85.7299 139.785 77.7719 143.722C74.9706 145.104 72.3671 145.269 69.7039 143.017C66.606 140.419 63.1088 138.301 59.9391 135.775C55.3368 132.099 53.2938 126.829 51.5666 121.431C51.4262 120.973 51.2037 120.529 51.0185 120.09C50.7116 117.572 50.4302 115.061 50.1585 112.537Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),i.jsx("path",{className:"ring-2 ring",d:"M238.621 97.8178C235.898 96.8805 233.29 95.9835 230.541 95.0386C234.866 81.569 234.183 68.5271 228.03 55.9693C221.909 43.4543 212.056 34.9474 198.858 30.1036C199.791 27.3567 200.677 24.751 201.562 22.1454C230.11 30.6725 250.215 64.9796 238.621 97.8178Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),i.jsx("path",{className:"ring-1 ring",d:"M194.09 44.2061C194.277 43.5457 194.413 43.0147 194.587 42.4893C195.324 40.3443 196.074 38.2089 196.824 36.0736C220.677 44.2008 232.626 70.4534 224.567 92.9666C221.922 92.064 219.263 91.1517 216.451 90.1937C219.517 80.7113 219.057 71.5063 214.741 62.6244C210.41 53.7211 203.417 47.6972 194.09 44.2061Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"}),i.jsx("path",{className:"ring-3 ring",d:"M253.87 101.759C250.433 100.609 247.137 99.5057 243.661 98.3377C248.974 81.3269 247.991 64.9082 240.132 49.1467C232.294 33.4417 219.803 22.8237 203.135 16.847C204.282 13.3867 205.373 10.093 206.464 6.79938C242.508 17.2536 268.156 60.2767 253.87 101.759Z",stroke:"#878787","stroke-width":"0.75","stroke-miterlimit":"10"})]}),(0,i.jsxs)("div",{className:"contact-form",children:[(0,i.jsxs)("span",{children:[i.jsx(w.Z,{onChange:u,value:x,labelName:"first name*",placeHolder:"John"}),i.jsx(w.Z,{onChange:p,value:m,labelName:"second name",placeHolder:"Smith"})]}),(0,i.jsxs)("span",{children:[i.jsx(w.Z,{onChange:j,value:g,labelName:"email*",placeHolder:"johnsmith@example.com"}),i.jsx(k.Z,{value:L,onChange:M})]}),i.jsx("span",{children:i.jsx(f.Z,{onServiceSelected:C})}),i.jsx("span",{children:i.jsx(N.Z,{onChange:S,value:P,labelName:"share more",placeHolder:"Share your thoughts"})}),I?i.jsx("button",{children:i.jsx(q.Z,{})}):i.jsx("button",{onClick:B,children:"submit"})]})]})]})]})]})}},4726:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var i=t(7247),l=t(8964);t(4047);let r=({onServiceSelected:e})=>{let[s,t]=(0,l.useState)(!1),[r,o]=(0,l.useState)(""),a=()=>{t(!s)},n=s=>{o(s),a(),e(s)};return(0,i.jsxs)("div",{className:"form-drop-down-section",children:[i.jsx("label",{htmlFor:"",children:"Services"}),(0,i.jsxs)("div",{style:{marginTop:"8px"},className:"form-drop-down-btn",onClick:a,children:[i.jsx("p",{className:"form-drop-down-selected",children:r||"service categories"}),i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M4 8.41693L10.5866 15.0037C10.9633 15.375 11.471 15.5831 12 15.5831C12.529 15.5831 13.0367 15.375 13.4134 15.0037L20 8.41693",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})]}),i.jsx("ul",{className:`form-dropdown-menu ${s?"open":""}`,children:["web development","application development","branding","ecommerce development","socialmedia marketing","search engine optimization","mobile app development","IT suppot"].map((e,s)=>i.jsx("li",{onClick:()=>n(e),children:e},s))})]})}},9965:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var i=t(7247);let l=({title:e})=>i.jsx("div",{className:"section-title",children:i.jsx("h2",{children:i.jsx("span",{children:e})})})},3748:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i=(0,t(5347).createProxy)(String.raw`C:\Users\junai\Desktop\WISBATO\wisbato_v2_nextjs\app\blogs\[blogId]\page.tsx#default`)},1959:()=>{},4047:()=>{},5520:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[211,863,483,265,350],()=>t(7469));module.exports=i})();