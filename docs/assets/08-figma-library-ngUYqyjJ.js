import{r as n,j as e,u,M as y}from"./iframe-CeqUBNmi.js";import{g as c}from"./paths-BxFImlO9.js";import"./preload-helper-By1u-41e.js";const p=({src:r,width:t="800",height:i="450"})=>{const[d,l]=n.useState(!0),[f,o]=n.useState(!1),s=n.useRef(null);n.useEffect(()=>{const b=setTimeout(()=>{d&&l(!1)},5e3);return()=>clearTimeout(b)},[d]);const a=()=>{l(!1)},h=()=>{l(!1),o(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .figma-embed-container {
            position: relative;
            width: 100%;
            max-width: ${typeof t=="number"?`${t}px`:t};
            margin: 2rem auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            background: var(--sys-bg-secondary, #f6f8fa);
          }
          .figma-embed-skeleton {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${typeof i=="number"?`${i}px`:i};
            background: linear-gradient(
              90deg,
              var(--sys-bg-tertiary, #e8ecf0) 0%,
              var(--sys-bg-secondary, #f0f2f5) 50%,
              var(--sys-bg-tertiary, #e8ecf0) 100%
            );
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s ease-in-out infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
          }
          .figma-embed-skeleton::before {
            content: "";
            width: 60px;
            height: 60px;
            border: 4px solid var(--sys-brd-tertiary, #d0d5db);
            border-top-color: var(--sys-icon-accent, #3b82f6);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          .figma-embed-skeleton::after {
            content: "Loading ArchUI Figma Component Kit...";
            position: absolute;
            bottom: 2rem;
            color: var(--sys-txt-secondary, #6b7280);
            font-size: 0.875rem;
            font-weight: 500;
          }
          @keyframes skeleton-loading {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          .figma-embed-iframe {
            width: 100%;
            height: ${typeof i=="number"?`${i}px`:i};
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            opacity: ${d?0:1};
            transition: opacity 0.3s ease-in-out;
            display: block;
          }
          .figma-embed-error {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${typeof i=="number"?`${i}px`:i};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--sys-bg-secondary, #f6f8fa);
            color: var(--sys-txt-secondary, #6b7280);
            padding: 2rem;
            text-align: center;
            z-index: 2;
          }
          .figma-embed-error-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.5;
          }
          .figma-embed-error-text {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          .figma-embed-error-subtext {
            font-size: 0.875rem;
            opacity: 0.7;
          }
        `}),e.jsxs("div",{className:"figma-embed-container",children:[d&&e.jsx("div",{className:"h-full w-full flex items-center justify-center figma-embed-skeleton","aria-label":"Loading ArchUI Figma Component Kit"}),f?e.jsxs("div",{className:"figma-embed-error",children:[e.jsx("div",{className:"figma-embed-error-icon",children:"⚠️"}),e.jsx("div",{className:"figma-embed-error-text",children:"Failed to load Figma embed"}),e.jsx("div",{className:"figma-embed-error-subtext",children:"Please check your connection or try refreshing the page"})]}):e.jsx("iframe",{ref:s,className:"figma-embed-iframe",src:r,width:t,height:i,allowFullScreen:!0,title:"Figma Design System Embed",onLoad:a,onError:h,loading:"lazy"})]})]})};p.__docgenInfo={description:"",methods:[],displayName:"FigmaEmbed",props:{src:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"800"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"450"',computed:!1}}}};const m=[{src:c("/storybook-assets/thumb5.png"),alt:"Screenshot 5",style:{height:"180px",flex:"1 1 120px",minWidth:"80px",maxWidth:"200px",objectFit:"cover",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",width:"100%"}},{src:c("/storybook-assets/thumb4.png"),alt:"Screenshot 4",style:{height:"140px",flex:"1 1 120px",minWidth:"80px",maxWidth:"200px",objectFit:"cover",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",width:"100%"}},{src:c("/storybook-assets/thumb3.png"),alt:"Screenshot 3",style:{height:"180px",flex:"1 1 120px",minWidth:"80px",maxWidth:"200px",objectFit:"cover",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",width:"100%"}},{src:c("/storybook-assets/thumb2.png"),alt:"Screenshot 2",style:{height:"140px",flex:"1 1 120px",minWidth:"80px",maxWidth:"200px",objectFit:"cover",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",width:"100%"}},{src:c("/storybook-assets/thumb1.png"),alt:"Screenshot 1",style:{height:"240px",flex:"1 1 140px",minWidth:"100px",maxWidth:"250px",objectFit:"cover",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",width:"100%"}}],x=()=>{const[r,t]=n.useState(null),i=n.useRef(null),d=n.useRef(null);n.useEffect(()=>(r!==null?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),n.useEffect(()=>{if(r===null)return;const o=s=>{s.key==="Escape"?t(null):s.key==="ArrowLeft"?t(a=>a===null||a===0?m.length-1:a-1):s.key==="ArrowRight"&&t(a=>a===null?null:a===m.length-1?0:a+1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[r]);const l=()=>{t(o=>o===null||o===0?m.length-1:o-1)},f=()=>{t(o=>o===null?null:o===m.length-1?0:o+1)};return n.useEffect(()=>{},[r]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .figma-screenshots {
            display: flex;
            gap: 0.5rem;
            align-items: flex-end;
            margin-top: 1rem;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-between;
          }
          .figma-screenshot-thumb {
            cursor: zoom-in;
            transition: box-shadow 0.2s, filter 0.2s;
            filter: brightness(0.98);
          }
          .figma-screenshot-thumb:hover {
            box-shadow: 0 4px 24px rgba(0,0,0,0.18);
            filter: brightness(1.04);
          }
          .figma-img-zoom-modal {
            z-index: 2000;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: zoom-out;
            animation: fade-in 0.18s;
          }
          .figma-img-zoom-modal img {
            max-width: 95vw;
            max-height: 90vh;
            border-radius: 12px;
            border: 2px solid #fff;
            background: #fff;
            box-shadow: 0 8px 64px rgba(0,0,0,0.28);
            cursor: zoom-out;
            transition: box-shadow 0.2s;
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .figma-img-zoom-modal__close {
            position: absolute;
            top: 2.5rem;
            right: 2.5rem;
            font-size: 2.2rem;
            color: #fff;
            background: #0007;
            border: none;
            border-radius: 50%;
            width: 2.8rem; height: 2.8rem;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            z-index: 3000;
            transition: background 0.2s;
          }
          .figma-img-zoom-modal__close:hover {
            background: #222b;
          }
          .figma-img-zoom-modal__arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #0007;
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 2.8rem;
            height: 2.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            cursor: pointer;
            z-index: 2100;
            user-select: none;
            transition: background 0.2s;
          }
          .figma-img-zoom-modal__arrow:active,
          .figma-img-zoom-modal__arrow:focus {
            outline: 2px solid #fff9;
            background: #222b;
          }
          .figma-img-zoom-modal__arrow:hover {
            background: #222b;
          }
          .figma-img-zoom-modal__arrow--prev {
            left: 2vw;
          }
          .figma-img-zoom-modal__arrow--next {
            right: 2vw;
          }
          @media (max-width: 500px) {
            .figma-img-zoom-modal__arrow,
            .figma-img-zoom-modal__close {
              width: 2.2rem;
              height: 2.2rem;
              font-size: 1.5rem;
            }
            .figma-img-zoom-modal__arrow--prev {
              left: 0.5vw;
            }
            .figma-img-zoom-modal__arrow--next {
              right: 0.5vw;
            }
            .figma-img-zoom-modal__close {
              top: 1rem;
              right: 1rem;
            }
          }
        `}),e.jsxs("div",{className:"figma-screenshots",children:[m.map((o,s)=>e.jsx("img",{src:o.src,alt:o.alt,style:o.style,className:"figma-screenshot-thumb",tabIndex:0,onClick:()=>t(s),onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),t(s))},"aria-label":`Zoom ${o.alt}`},s)),e.jsx("style",{children:`
          .figma-screenshots {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            grid-auto-rows: minmax(120px, auto);
            grid-auto-flow: dense;
            gap: 1.2rem;
            justify-content: center;
            align-items: start;
            width: 100%;
            max-width: 900px;
            margin: 1.5rem auto 1.5rem auto;
            padding: 0 1vw;
          }
          .figma-screenshot-thumb {
            cursor: zoom-in;
            transition: box-shadow 0.2s, transform 0.2s;
            background: var(--sys-bg-tertiary, #f6f8fa);
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
            border-radius: 8px;
            outline: none;
            width: 100%;
            display: block;
          }
          .figma-screenshot-thumb:focus-visible {
            box-shadow: 0 0 0 3px #2261bb80, 0 2px 8px rgba(0,0,0,0.08);
            outline: none;
            transform: scale(1.03);
            z-index: 1;
          }

          @media (max-width: 700px) {
            .figma-screenshots {
              grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
              gap: 0.7rem;
            }
          }
          @media (max-width: 500px) {
            .figma-screenshots {
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: minmax(90px, auto);
              gap: 0.45rem;
              margin: 1rem auto;
              padding: 0;
            }
          }
          /* Ensure max 2 rows of thumbnails and allow grid to grow horizontally */
          .figma-screenshots {
            max-height: 520px;
            overflow-x: auto;
            overflow-y: visible;
          }
        `})]}),r!==null&&e.jsxs("div",{className:"figma-img-zoom-modal",onClick:()=>t(null),role:"dialog","aria-modal":"true",tabIndex:-1,children:[e.jsx("button",{className:"figma-img-zoom-modal__close","aria-label":"Close",onClick:o=>{o.stopPropagation(),t(null)},tabIndex:0,type:"button",children:"×"}),e.jsx("button",{className:"figma-img-zoom-modal__arrow figma-img-zoom-modal__arrow--prev","aria-label":"Previous screenshot",onClick:o=>{o.stopPropagation(),l()},tabIndex:0,type:"button",ref:d,children:e.jsx("span",{"aria-hidden":"true",children:"←"})}),e.jsx("img",{src:m[r].src,alt:m[r].alt,draggable:!1,onClick:o=>o.stopPropagation(),style:{maxWidth:"95vw",maxHeight:"90vh"}}),e.jsx("button",{className:"figma-img-zoom-modal__arrow figma-img-zoom-modal__arrow--next","aria-label":"Next screenshot",onClick:o=>{o.stopPropagation(),f()},tabIndex:0,type:"button",ref:i,children:e.jsx("span",{"aria-hidden":"true",children:"→"})})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"FigmaScreenshots"};function g(r){const t={h1:"h1",h2:"h2",p:"p",...u(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"02 OTHER/Figma UI Kit"}),`
`,e.jsx(t.h1,{id:"figma-ui-kit",children:"Figma UI Kit"}),`
`,e.jsx(t.p,{children:"The Figma UI Kit for ArchUI Design System v1.1.0 offers a ready-to-use collection of all published components and design tokens in the palm of your hand. It's a great way to get started with ArchUI and start prototyping your designs."}),`
`,e.jsx(t.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(p,{src:"https://embed.figma.com/design/kw2Up6JfZ76d69slxJJmFJ/ArchUI-Design-System-v1.1.0?node-id=588-18047&embed-host=share",width:"800",height:"450"}),`
`,`
`,e.jsx(t.h2,{id:"screenshots",children:"Screenshots"}),`
`,e.jsx(x,{})]})}function j(r={}){const{wrapper:t}={...u(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(g,{...r})}):g(r)}export{j as default};
