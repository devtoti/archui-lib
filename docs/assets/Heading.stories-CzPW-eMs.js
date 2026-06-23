import{j as e}from"./iframe-DKOW0GoP.js";import{H as i}from"./Heading-qCg9PbF7.js";import{T as n}from"./ThemeSwitcher-Dp1Us8qn.js";import"./preload-helper-By1u-41e.js";import"./index-DBpj5OWp.js";import"./paths-BxFImlO9.js";const m={title:"01 COMPONENTS/Heading",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"Display hierarchical headings with optional descriptions. The Heading component provides semantic heading levels with consistent styling and alignment options.",description:{component:"The `Heading` component is used to create semantic headings (h1-h6) with consistent typography and spacing. It supports optional description text and text alignment. Make sure to leverage the Heading designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling."}}},argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Heading level variant"},align:{control:"select",options:["left","center","right"],description:"Text alignment"},text:{control:"text",description:"Heading text content (alternative to children)"},children:{control:"text",description:"Heading text content (preferred over text)"},description:{control:"text",description:"Optional description text displayed below the heading"}},args:{variant:"h1",align:"left",children:"ArchUI Heading",description:"This is an optional description that appears below the heading"}},t={render:h=>e.jsx(n,{theme:"ionic",children:e.jsx(i,{...h})})},a={render:()=>e.jsx(n,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-arch-lg",children:[e.jsx(i,{variant:"h1",description:"This is an h1 heading with description",children:"Heading Level 1"}),e.jsx(i,{variant:"h2",description:"This is an h2 heading with description",children:"Heading Level 2"}),e.jsx(i,{variant:"h3",description:"This is an h3 heading with description",children:"Heading Level 3"}),e.jsx(i,{variant:"h4",description:"This is an h4 heading with description",children:"Heading Level 4"}),e.jsx(i,{variant:"h5",description:"This is an h5 heading with description",children:"Heading Level 5"}),e.jsx(i,{variant:"h6",description:"This is an h6 heading with description",children:"Heading Level 6"})]})})},r={render:()=>e.jsx(n,{theme:"corinthian",children:e.jsxs("div",{className:"flex flex-col gap-arch-xl w-full max-w-2xl",children:[e.jsx(i,{variant:"h2",align:"left",description:"Left-aligned heading with description text",children:"Left Aligned Heading"}),e.jsx(i,{variant:"h2",align:"center",description:"Center-aligned heading with description text",children:"Center Aligned Heading"}),e.jsx(i,{variant:"h2",align:"right",description:"Right-aligned heading with description text",children:"Right Aligned Heading"})]})})},d={render:()=>e.jsx(n,{theme:"ionic",children:e.jsxs("div",{className:"flex flex-col gap-arch-md",children:[e.jsx(i,{variant:"h1",children:"Heading 1 without description"}),e.jsx(i,{variant:"h2",children:"Heading 2 without description"}),e.jsx(i,{variant:"h3",children:"Heading 3 without description"}),e.jsx(i,{variant:"h4",children:"Heading 4 without description"}),e.jsx(i,{variant:"h5",children:"Heading 5 without description"}),e.jsx(i,{variant:"h6",children:"Heading 6 without description"})]})})},s={render:()=>e.jsx(n,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-arch-lg",children:[e.jsx(i,{variant:"h1",text:"Heading using text property",description:"This heading uses the text prop instead of children"}),e.jsx(i,{variant:"h2",text:"Another heading with text prop",description:"The text prop is an alternative to children"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ThemeSwitcher theme="ionic">
        <Heading {...args} />
      </ThemeSwitcher>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-arch-lg">
          <Heading variant="h1" text="Heading using text property" description="This heading uses the text prop instead of children" />
          <Heading variant="h2" text="Another heading with text prop" description="The text prop is an alternative to children" />
        </div>
      </ThemeSwitcher>;
  }
}`,...s.parameters?.docs?.source}}};const H=["Default","AllVariants","AllAlignments","WithoutDescription","WithTextProperty"];export{r as AllAlignments,a as AllVariants,t as Default,s as WithTextProperty,d as WithoutDescription,H as __namedExportsOrder,m as default};
