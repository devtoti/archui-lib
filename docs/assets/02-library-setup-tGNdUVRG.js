import{u as o,j as e,M as s,S as n}from"./iframe-CeqUBNmi.js";import"./preload-helper-By1u-41e.js";function r(i){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"00 GETTING STARTED/Library Setup"}),`
`,e.jsx(t.h1,{id:"library-setup",children:"Library Setup"}),`
`,e.jsx(t.p,{children:"Installing ArchUI into your existing React project is quite easy and should not take you more than just a few minutes to setup. Follow the steps below and you'll be ready to start using and editing your favorite components."}),`
`,e.jsx(t.h2,{id:"step-1-required-packages",children:e.jsx(t.strong,{children:"Step 1: Required Packages"})}),`
`,e.jsxs(t.p,{children:["Make sure you are using ",e.jsx(t.strong,{children:"React 19+"})," and ",e.jsx(t.strong,{children:"Tailwind CSS 4+"})," by heading over to your ",e.jsx(t.code,{children:"package.json"}),` file and checking under "dependencies".
If you don't already have the required versions listed, you'll need to update or install them before proceeding.`]}),`
`,e.jsx(n,{dark:!0,language:"json",code:`"dependencies": {
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "tailwindcss": "^4.1.14"
}`}),`
`,e.jsx(t.h2,{id:"step-2-tailwind-setup",children:e.jsx(t.strong,{children:"Step 2: Tailwind Setup"})}),`
`,e.jsx(t.p,{children:"Since ArchUI is built on top of Tailwind CSS, you'll need to have Tailwind 4+ set up in your project. There are two common ways to add Tailwind CSS:"}),`
`,e.jsxs(t.h4,{id:"option-a-automatic-setup",children:[e.jsx(t.strong,{children:"Option A:"})," Automatic Setup"]}),`
`,e.jsxs(t.p,{children:["Head over to ",e.jsx(t.a,{href:"https://tailwindcss.com/docs/installation",rel:"nofollow",children:"Tailwind CSS"})," and follow the installation steps that apply to your React project. In this example, we will be using Vite, so the Vite plugin will be required."]}),`
`,e.jsx(n,{dark:!0,language:"bash",code:"npm install @tailwindcss/vite"}),`
`,e.jsxs(t.h4,{id:"option-b-manual-setup",children:[e.jsx(t.strong,{children:"Option B:"})," Manual Setup"]}),`
`,e.jsxs(t.p,{children:["You can also add set up Tailwind manually by creating the following files: ",e.jsx(t.code,{children:"tailwind.config.js"}),", ",e.jsx(t.code,{children:"postcss.config.js"}),", and ",e.jsx(t.code,{children:"vite.config.ts"})," (or the build tool of your choice), then paste the following code inside each file:"]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"tailwind.config.js"})}),`
`,e.jsx(n,{dark:!0,language:"js",code:`/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
  extend: {},
},
plugins: [],
};`}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"vite.config.ts"})}),`
`,e.jsx(n,{dark:!0,language:"ts",code:`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
plugins: [react(), tailwindcss()],
css: {
postcss: "./postcss.config.js",
},
});`}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"postcss.config.js"})}),`
`,e.jsx(n,{dark:!0,language:"js",code:`export default {
plugins: {
  "@tailwindcss/postcss": {},
  autoprefixer: {},
},
};`}),`
`,e.jsx(t.h2,{id:"step-3-install-archui",children:e.jsx(t.strong,{children:"Step 3: Install ArchUI"})}),`
`,e.jsx(t.p,{children:"Open up the CLI and install the ArchUI Library with the following command:"}),`
`,e.jsx(n,{dark:!0,language:"bash",code:"npm i @devtoti/archui-lib"}),`
`,e.jsx(t.h2,{id:"step-4-setup-archui-into-your-project",children:e.jsx(t.strong,{children:"Step 4: Setup ArchUI into your project"})}),`
`,e.jsxs(t.p,{children:["Import the library's main CSS file directly inside ",e.jsx(t.code,{children:"index.css"}),`, so that your project can have access to ArchUI's design system.
Make sure to import Tailwind CSS first, and then ArchUI's styles.`]}),`
`,e.jsx(n,{dark:!0,language:"css",code:`@import "tailwindcss";
@import "@devtoti/archui-lib/styles";`}),`
`,e.jsx(t.h2,{id:"step-5-wrap-your-app-in-the-themeprovider",children:e.jsx(t.strong,{children:"Step 5: Wrap your app in the ThemeProvider"})}),`
`,e.jsx(t.p,{children:"Wrap your App in the ThemeProvider to ensure that your components will be styled correctly. You can also pass in the initial theme and theme type to the ThemeProvider:"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`import { ThemeProvider } from "@devtoti/archui-lib";

return (
<ThemeProvider theme="ionic" themeType="light">
  <App />
</ThemeProvider>
);`}),`
`,e.jsx(t.h2,{id:"step-6-import-your-first-component",children:e.jsx(t.strong,{children:"Step 6: Import Your First Component"})}),`
`,e.jsx(t.p,{children:"Now that you have configured Tailwind, ArchUI and your ThemeProvider, you can start using your favorite components by importing them into your React files. Additionally, you can import the Component's Type Props and adapt them to your needs:"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`import { Button } from "@devtoti/archui-lib";
import type { ButtonProps } from "@devtoti/archui-lib";

function App() {
return (
<AppContent>
  <Button
        variant="primary"
        size="md"
        onClick={handleRegister}
        label="Welcome to ArchUI!"
      />
</AppContent>
);
}
`}),`
`,e.jsx(t.h2,{id:"step-6-delete-default-styles-that-might-conflict-with-archui",children:e.jsx(t.strong,{children:"Step 6: Delete default styles that might conflict with ArchUI"})}),`
`,e.jsx(t.p,{children:"Delete default styles that might conflict with ArchUI. For example, if you are using Tailwind, you can delete the content of the following files:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"App.css"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"index.css"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"styles.css"})}),`
`]}),`
`,e.jsx(t.h2,{id:"step-7-browse-our-components",children:e.jsx(t.strong,{children:"Step 7: Browse Our Components"})}),`
`,e.jsxs(t.p,{children:["You can now start exploring our ",e.jsx(t.a,{href:"/docs/01-components-alert--docs",children:e.jsx(t.em,{children:"repertoire"})})," of components library, or use our experimental Drag-and-Drop Playground to get a better grasp of how things work."]}),`
`,e.jsx("aside",{style:{marginTop:"2rem",marginBottom:"2rem",padding:"1.5rem",backgroundColor:"var(--bg-warning-light, #fef3c7)",borderRadius:"8px",border:"1px solid var(--brd-warning, #fbbf24)",color:"var(--sem-text-warning, #b78100) !important"},children:e.jsxs(t.p,{children:["💡 ",e.jsx("strong",{children:"Inspiration & Acknowledgment"}),`
ArchUI has taken great inspiration from other successful libraries such as shadcn,
kokonutui, Flowbite, chakraUI, Mantine, RewindUI, Ant Design, and MUI. We acknowledge
the value of all these great projects and encourage you to try them out if you
are not convinced by the `,e.jsx("em",{children:"origo et ratio essendi"})," of the project."]})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Excited to have you with us!"})," Browse the component library in the sidebar to see what ArchUI can do for your project."]})]})}function d(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default};
