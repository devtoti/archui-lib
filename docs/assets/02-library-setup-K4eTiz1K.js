import{u as o,j as e,M as r,S as t}from"./iframe-BR1oeFPx.js";import"./preload-helper-By1u-41e.js";function s(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",strong:"strong",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"00 GETTING STARTED/Library Setup"}),`
`,e.jsx(n.h1,{id:"library-setup",children:"Library Setup"}),`
`,e.jsx(n.p,{children:"Installing ArchUI into your existing React project is quite easy and should not take you more than just a few minutes to setup. Follow the steps below and you'll be ready to start using and editing your favorite components."}),`
`,e.jsx(n.h2,{id:"step-1-required-packages",children:e.jsx(n.strong,{children:"Step 1: Required Packages"})}),`
`,e.jsxs(n.p,{children:["Make sure you are using ",e.jsx(n.strong,{children:"React 19+"})," and ",e.jsx(n.strong,{children:"Tailwind CSS 4+"})," by heading over to your ",e.jsx(n.code,{children:"package.json"}),` file and checking under "dependencies".
If you don't already have the required versions listed, you'll need to update or install them before proceeding.`]}),`
`,e.jsx(t,{dark:!0,language:"json",code:`"dependencies": {
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "tailwindcss": "^4.1.14"
}`}),`
`,e.jsx(n.h2,{id:"step-2-required-dependencies",children:e.jsx(n.strong,{children:"Step 2: Required Dependencies"})}),`
`,e.jsxs(n.p,{children:["If you don't have Tailwind and its ",e.jsx(n.code,{children:"postcss"})," and ",e.jsx(n.code,{children:"autoprefixer"})," dependencies installed, run the following command:"]}),`
`,e.jsx(t,{dark:!0,language:"bash",code:"npm install tailwindcss @tailwindcss/postcss autoprefixer"}),`
`,e.jsx(n.h2,{id:"step-3-tailwind-setup",children:e.jsx(n.strong,{children:"Step 3: Tailwind Setup"})}),`
`,e.jsx(n.p,{children:"Since ArchUI is built on top of Tailwind CSS, you'll need to have Tailwind set up in your project. There are two common ways to add Tailwind CSS:"}),`
`,e.jsxs(n.h4,{id:"option-a-automatic-setup",children:[e.jsx(n.strong,{children:"Option A:"})," Automatic Setup"]}),`
`,e.jsxs(n.p,{children:["Create Tailwind CSS configuration files ",e.jsx(n.code,{children:"tailwind.config.js"})," and ",e.jsx(n.code,{children:"postcss.config.js"})," with the following command:"]}),`
`,e.jsx(t,{dark:!0,language:"bash",code:"npx tailwindcss init -p"}),`
`,e.jsxs(n.h4,{id:"option-b-manual-setup",children:[e.jsx(n.strong,{children:"Option B:"})," Manual Setup"]}),`
`,e.jsxs(n.p,{children:["Add them manually by creating the following files: ",e.jsx(n.code,{children:"tailwind.config.js"}),", ",e.jsx(n.code,{children:"vite.config.ts"}),", and ",e.jsx(n.code,{children:"postcss.config.js"}),", then paste the following code inside each file:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tailwind.config.js"})}),`
`,e.jsx(t,{dark:!0,language:"js",code:`/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
  extend: {},
},
plugins: [],
};`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"vite.config.ts"})}),`
`,e.jsx(t,{dark:!0,language:"ts",code:`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
plugins: [react()],
css: {
postcss: "./postcss.config.js",
},
});`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"postcss.config.js"})}),`
`,e.jsx(t,{dark:!0,language:"js",code:`export default {
plugins: {
  "@tailwindcss/postcss": {},
  autoprefixer: {},
},
};`}),`
`,e.jsx(n.h2,{id:"step-4-install--setup-archui",children:e.jsx(n.strong,{children:"Step 4: Install & Setup archUI"})}),`
`,e.jsx(n.p,{children:"Open up the CLI and install the ArchUI Library with the following command:"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:"npm i @devtoti/archui-lib"}),`
`,e.jsxs(n.p,{children:["Import the library's main CSS file directly inside ",e.jsx(n.code,{children:"index.css"}),", so that your project can have access to archUI's design system:"]}),`
`,e.jsx(t,{dark:!0,language:"css",code:`@import "tailwindcss";
@import "@devtoti/archui-lib/styles";`}),`
`,e.jsx(n.h2,{id:"step-5-import-your-first-component",children:e.jsx(n.strong,{children:"Step 5: Import Your First Component"})}),`
`,e.jsx(n.p,{children:"Now that you have configured Tailwind and the ArchUI Library, you can start using your favorite components by importing them into your React files. Additionally, you can import the Component's Type Props and adapt them to your needs:"}),`
`,e.jsx(t,{dark:!0,language:"tsx",code:`import { Button } from "@devtoti/archui-lib";
import type { ButtonProps } from "@devtoti/archui-lib";

function CardComponent() {
return (
<Card>
<Button
      variant="primary"
      size="md"
      onClick={handleRegister}
      label="Welcome to ArchUI!"
    />
</Card>
);
}
`}),`
`,e.jsx(n.h2,{id:"step-6-browse-our-components",children:e.jsx(n.strong,{children:"Step 6: Browse Our Components"})}),`
`,e.jsxs(n.p,{children:["You can now start exploring our ",e.jsx(n.a,{href:"/docs/01-components-alert--docs",children:e.jsx(n.em,{children:"repertoire"})})," of components library, or use our experimental Drag-and-Drop Playground to get a better grasp of how things work."]}),`
`,e.jsx("aside",{style:{marginTop:"2rem",marginBottom:"2rem",padding:"1.5rem",backgroundColor:"var(--bg-warning-light, #fef3c7)",borderRadius:"8px",border:"1px solid var(--brd-warning, #fbbf24)",color:"var(--sem-text-warning, #b78100) !important"},children:e.jsxs(n.p,{children:["💡 ",e.jsx("strong",{children:"Inspiration & Acknowledgment"}),`
ArchUI has taken great inspiration from other successful libraries such as shadcn,
kokonutui, Flowbite, chakraUI, Mantine, RewindUI, Ant Design, and MUI. We acknowledge
the value of all these great projects and encourage you to try them out if you
are not convinced by the `,e.jsx("em",{children:"origo et ratio essendi"})," of the project."]})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Excited to have you with us!"})," Browse the component library in the sidebar to see what ArchUI can do for your project."]})]})}function c(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as default};
