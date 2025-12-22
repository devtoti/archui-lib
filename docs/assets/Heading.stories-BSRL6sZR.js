import{j as e}from"./iframe-CD6aicnh.js";import{t as w,c,S as T,T as t}from"./ThemeSwitcher-d6Kz93Qj.js";import"./preload-helper-By1u-41e.js";/**
 * @author: @devtoti
 * @description: Heading
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const j=c("flex flex-col",{variants:{variant:{h6:"gap-[var(--sp-3xs)]",h5:"gap-[var(--sp-2xs)]",h4:"gap-[var(--sp-xs]",h3:"gap-[var(--sp-md)]",h2:"gap-[var(--sp-md)]",h1:"gap-[var(--sp-md)]"}},defaultVariants:{variant:"h1"}}),y=c("text-arch-primary font-semibold",{variants:{variant:{h1:"text-4xl font-bold",h2:"text-3xl font-bold",h3:"text-2xl font-semibold",h4:"text-xl font-semibold",h5:"text-lg font-semibold",h6:"text-base font-semibold"},align:{left:"text-left",center:"text-center",right:"text-right"}},defaultVariants:{variant:"h1",align:"left"}}),N=c("text-arch-secondary mt-arch-sm pt-0 !mt-0",{variants:{variant:{h1:"text-lg",h2:"text-base",h3:"text-sm",h4:"text-sm",h5:"text-xs",h6:"text-xs"},align:{left:"text-left",center:"text-center",right:"text-right"}},defaultVariants:{variant:"h1",align:"left"}}),i=({className:o,variant:n="h1",align:l="left",text:p,description:g,asChild:x=!1,children:m,...v})=>{const u=x?T:n,H=w(y({variant:n,align:l}),o),f=m||p;return e.jsxs("div",{className:j({variant:n}),children:[e.jsx(u,{className:H,...v,children:f}),g&&e.jsx("p",{className:N({variant:n,align:l}),children:g})]})};i.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{variant:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:"Heading level variant",defaultValue:{value:'"h1"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"Text alignment",defaultValue:{value:'"left"',computed:!1}},text:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Heading text content (alternative to children)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Heading text content (preferred over text)"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional description text displayed below the heading"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a different element using Radix Slot",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const b={title:"01 COMPONENTS/Heading",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"Display hierarchical headings with optional descriptions. The Heading component provides semantic heading levels with consistent styling and alignment options.",description:{component:"The `Heading` component is used to create semantic headings (h1-h6) with consistent typography and spacing. It supports optional description text and text alignment. Make sure to leverage the Heading designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling."}}},argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Heading level variant"},align:{control:"select",options:["left","center","right"],description:"Text alignment"},text:{control:"text",description:"Heading text content (alternative to children)"},children:{control:"text",description:"Heading text content (preferred over text)"},description:{control:"text",description:"Optional description text displayed below the heading"}},args:{variant:"h1",align:"left",children:"ArchUI Heading",description:"This is an optional description that appears below the heading"}},a={render:o=>e.jsx(t,{theme:"ionic",children:e.jsx(i,{...o})})},r={render:()=>e.jsx(t,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-arch-lg",children:[e.jsx(i,{variant:"h1",description:"This is an h1 heading with description",children:"Heading Level 1"}),e.jsx(i,{variant:"h2",description:"This is an h2 heading with description",children:"Heading Level 2"}),e.jsx(i,{variant:"h3",description:"This is an h3 heading with description",children:"Heading Level 3"}),e.jsx(i,{variant:"h4",description:"This is an h4 heading with description",children:"Heading Level 4"}),e.jsx(i,{variant:"h5",description:"This is an h5 heading with description",children:"Heading Level 5"}),e.jsx(i,{variant:"h6",description:"This is an h6 heading with description",children:"Heading Level 6"})]})})},s={render:()=>e.jsx(t,{theme:"corinthian",children:e.jsxs("div",{className:"flex flex-col gap-arch-xl w-full max-w-2xl",children:[e.jsx(i,{variant:"h2",align:"left",description:"Left-aligned heading with description text",children:"Left Aligned Heading"}),e.jsx(i,{variant:"h2",align:"center",description:"Center-aligned heading with description text",children:"Center Aligned Heading"}),e.jsx(i,{variant:"h2",align:"right",description:"Right-aligned heading with description text",children:"Right Aligned Heading"})]})})},d={render:()=>e.jsx(t,{theme:"ionic",children:e.jsxs("div",{className:"flex flex-col gap-arch-md",children:[e.jsx(i,{variant:"h1",children:"Heading 1 without description"}),e.jsx(i,{variant:"h2",children:"Heading 2 without description"}),e.jsx(i,{variant:"h3",children:"Heading 3 without description"}),e.jsx(i,{variant:"h4",children:"Heading 4 without description"}),e.jsx(i,{variant:"h5",children:"Heading 5 without description"}),e.jsx(i,{variant:"h6",children:"Heading 6 without description"})]})})},h={render:()=>e.jsx(t,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-arch-lg",children:[e.jsx(i,{variant:"h1",text:"Heading using text property",description:"This heading uses the text prop instead of children"}),e.jsx(i,{variant:"h2",text:"Another heading with text prop",description:"The text prop is an alternative to children"})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ThemeSwitcher theme="ionic">
        <Heading {...args} />
      </ThemeSwitcher>;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-arch-lg">
          <Heading variant="h1" description="This is an h1 heading with description">
            Heading Level 1
          </Heading>
          <Heading variant="h2" description="This is an h2 heading with description">
            Heading Level 2
          </Heading>
          <Heading variant="h3" description="This is an h3 heading with description">
            Heading Level 3
          </Heading>
          <Heading variant="h4" description="This is an h4 heading with description">
            Heading Level 4
          </Heading>
          <Heading variant="h5" description="This is an h5 heading with description">
            Heading Level 5
          </Heading>
          <Heading variant="h6" description="This is an h6 heading with description">
            Heading Level 6
          </Heading>
        </div>
      </ThemeSwitcher>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ThemeSwitcher theme="corinthian">
        <div className="flex flex-col gap-arch-xl w-full max-w-2xl">
          <Heading variant="h2" align="left" description="Left-aligned heading with description text">
            Left Aligned Heading
          </Heading>
          <Heading variant="h2" align="center" description="Center-aligned heading with description text">
            Center Aligned Heading
          </Heading>
          <Heading variant="h2" align="right" description="Right-aligned heading with description text">
            Right Aligned Heading
          </Heading>
        </div>
      </ThemeSwitcher>;
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ThemeSwitcher theme="ionic">
        <div className="flex flex-col gap-arch-md">
          <Heading variant="h1">Heading 1 without description</Heading>
          <Heading variant="h2">Heading 2 without description</Heading>
          <Heading variant="h3">Heading 3 without description</Heading>
          <Heading variant="h4">Heading 4 without description</Heading>
          <Heading variant="h5">Heading 5 without description</Heading>
          <Heading variant="h6">Heading 6 without description</Heading>
        </div>
      </ThemeSwitcher>;
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-arch-lg">
          <Heading variant="h1" text="Heading using text property" description="This heading uses the text prop instead of children" />
          <Heading variant="h2" text="Another heading with text prop" description="The text prop is an alternative to children" />
        </div>
      </ThemeSwitcher>;
  }
}`,...h.parameters?.docs?.source}}};const A=["Default","AllVariants","AllAlignments","WithoutDescription","WithTextProperty"];export{s as AllAlignments,r as AllVariants,a as Default,h as WithTextProperty,d as WithoutDescription,A as __namedExportsOrder,b as default};
