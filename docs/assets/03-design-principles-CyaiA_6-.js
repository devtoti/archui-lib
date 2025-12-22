import{u as r,j as e,M as t}from"./iframe-CD6aicnh.js";import"./preload-helper-By1u-41e.js";const o="/archui-lib/assets/design-system-CU7YeIyj.png";function s(n){const i={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"00 GETTING STARTED/Design Principles"}),`
`,e.jsx(i.h1,{id:"design-principles",children:"Design Principles"}),`
`,e.jsxs(i.p,{children:["ArchUI is built on three core principles: ",e.jsx(i.strong,{children:"Foundation"}),", ",e.jsx(i.strong,{children:"Flexibility"}),", and ",e.jsx(i.strong,{children:"Accessibility"}),". These principles guide every aspect of the design system, ensuring a robust, adaptable, and inclusive component library."]}),`
`,e.jsx(i.h2,{id:"foundation",children:"Foundation"}),`
`,e.jsxs(i.p,{children:["ArchUI is ",e.jsx(i.strong,{children:"written in TypeScript with predictable static types"}),", providing a solid foundation for type-safe development. This ensures better developer experience, fewer runtime errors, and improved code maintainability."]}),`
`,e.jsxs(i.p,{children:["The library offers ",e.jsx(i.strong,{children:"powerful theme customization in every detail"}),", allowing you to fine-tune every aspect of your design system to match your project's unique requirements."]}),`
`,e.jsx(i.h2,{id:"flexibility",children:"Flexibility"}),`
`,e.jsxs(i.p,{children:["One of the key aspects of ArchUI is its ability to ",e.jsx(i.strong,{children:"quickly switch between Themes"})," and easily modify each style's tokenized variables independently, without needing to edit multiple config files all at once."]}),`
`,e.jsx(i.h3,{id:"three-classical-orders",children:"Three Classical Orders"}),`
`,e.jsxs(i.p,{children:["There are three default styles that come along with ArchUI v1.0. These styles—also known as ",e.jsx(i.strong,{children:"Orders"}),"—refer to the three most emblematic architectural styles used back in Ancient Greece:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Doric"}),": Bold and robust"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Ionic"}),": Elegant and refined"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Corinthian"}),": Sophisticated and modern"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Each ",e.jsx(i.em,{children:"order (style)"})," follows very specific properties, yet remains in perfect harmony within their immediate context, regardless of Theme variations across your application."]}),`
`,e.jsx(i.h3,{id:"tokenized-design-system",children:"Tokenized Design System"}),`
`,e.jsxs(i.p,{children:["By extending a highly customizable CSS property file with ",e.jsx(i.strong,{children:"shared variable names per Theme"}),", it is possible to scope each style to specific properties that make every single ArchUI component smart enough to update their attributes on the fly, without having to worry about aspects such as:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"paddings"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"borders"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"border-radius"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"background colors"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"font families"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"and more..."}),`
`," ",`
`,e.jsx("img",{src:o,alt:"Design System Illustration",style:{width:"75%",borderRadius:"16px",height:"auto",flexShrink:0}}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["ArchUI uses the ",e.jsx(i.a,{href:"https://www.radix-ui.com/primitives/docs/overview/introduction",rel:"nofollow",children:"Radix Primitives"})," library as a foundation and base layer for its component designs. This low-level UI component library ensures that an adequate pattern implementation is achieved, strongly focusing on ",e.jsx(i.strong,{children:"web accessibility and development experience"}),"."]}),`
`,e.jsx(i.h3,{id:"radix-primitives-foundation",children:"Radix Primitives Foundation"}),`
`,e.jsx(i.p,{children:"According to their official documentation:"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Radix Primitives follow the WAI-ARIA authoring practices guidelines and are tested in a wide selection of modern browsers and commonly used assistive technologies."}),`
`]}),`
`,e.jsx(i.p,{children:"Which translates into the following perks:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Keyboard Navigation"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Accessible labels"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Clear interactive elements"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Keyboard Shortcuts"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"WAI-ARIA"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Role Attributes"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Proper Semantics"})}),`
`]}),`
`,e.jsx(i.h3,{id:"aria-support",children:"ARIA Support"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.a,{href:"https://www.w3.org/TR/wai-aria/",rel:"nofollow",children:"Accessible Rich Internet Applications (ARIA)"})," specification provides a set of attributes that can be used to enhance the accessibility of web content. These attributes can be used to provide additional information about the purpose and structure of your components, making them easier to navigate and use for users who rely on assistive technologies such as screen readers."]}),`
`,e.jsx(i.h3,{id:"design-considerations",children:"Design Considerations"}),`
`,e.jsx(i.p,{children:"Every component considers the following design principles:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Width/height proportion"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Scalability"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"AA and AAA contrasts"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Visual hierarchy"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Text/image balance"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Simple forms geometry"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Proper use of whitespace"})}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx("div",{style:{marginTop:"1rem",padding:".5rem",paddingTop:"0.2rem",backgroundColor:"var(--bg-accent-light, #e0e7ff)",borderRadius:"8px",borderLeft:"4px solid var(--bg-accent, #3b82f6)"},children:e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Ready to build with ArchUI?"})," Explore the components in the sidebar to see how these design principles are applied in practice."]})})]})}function d(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default};
