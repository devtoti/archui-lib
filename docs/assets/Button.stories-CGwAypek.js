import{j as t}from"./iframe-DKOW0GoP.js";import{B as m}from"./Button-BkEza7Ls.js";import{T as h}from"./ThemeProvider-UI1bMYyS.js";import{T as l}from"./ThemeSwitcher-Dp1Us8qn.js";import{u as p}from"./useTheme-C4aLB8DT.js";import"./preload-helper-By1u-41e.js";import"./index-DBpj5OWp.js";import"./paths-BxFImlO9.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,v={title:"01 COMPONENTS/Button",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"The main element made for custom user interaction. The Button component supports multiple Component states, animations, icons, and styles.",description:{component:"The `Button` component can be thought of as a stylized wrapper to be used with custom methods and third-party libraries. It does not easily interfere with external logic, since all its content remains within its own scope.\n\nIdeally, the `Button` component can be used along with the `LinkItem` component for internal and external navigation. For additional examples, please refer to our practical usage section."},artwork:"/storybook-assets/button.svg"}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost"],description:"Button variant"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},label:{control:"text",description:"Text content"},className:{control:"text",description:"Custom className for the Button (for Storybook usage)"}},args:{onClick:d(),variant:"primary",size:"md",label:"Button",className:""}},a={render:e=>t.jsx(l,{theme:"doric",children:t.jsx(m,{...e,label:e.label?e.label:"ArchUI Button"})})},i={render:e=>{const r=()=>{const{theme:o}=p(),n=o.substring(0,1).toUpperCase()+o.slice(1);return t.jsx(m,{...e,variant:"tertiary",label:e.label?`${n} ${e.label}`:`${n} Button`})};return t.jsx(h,{theme:"doric",themeType:"light",hasToggler:!0,children:t.jsx(r,{})})}},c={render:e=>t.jsx(l,{theme:"doric",children:t.jsx(u,{...e})})},u=e=>{const{theme:r}=p(),o=r[0].toUpperCase()+r.slice(1),n=["primary","secondary","tertiary","ghost"];return t.jsx("div",{className:"flex flex-col gap-4",children:n.map(s=>t.jsx(m,{...e,size:"sm",variant:s,label:`${o} ${s.charAt(0).toUpperCase()+s.slice(1)}`},s))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ThemeSwitcher theme="doric">
        <Button {...args} label={args.label ? args.label : "ArchUI Button"} />
      </ThemeSwitcher>;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ButtonWithName = () => {
      const {
        theme
      } = useTheme();
      const capitalizedTheme = theme.substring(0, 1).toUpperCase() + theme.slice(1);
      return <Button {...args} variant="tertiary" label={args.label ? \`\${capitalizedTheme} \${args.label}\` : \`\${capitalizedTheme} Button\`} />;
    };
    return <ThemeProvider theme="doric" themeType="light" hasToggler={true}>
        <ButtonWithName />
      </ThemeProvider>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ThemeSwitcher theme="doric">
        <DocsPreviewContent {...args} />
      </ThemeSwitcher>;
  }
}`,...c.parameters?.docs?.source}}};const S=["Default","Variants","DocsPreview"];export{a as Default,c as DocsPreview,i as Variants,S as __namedExportsOrder,v as default};
