import{j as e}from"./iframe-DCq8QmLS.js";import{t as h,c as C,a as c}from"./ThemeSwitcher-DvuiuNPo.js";import{S as N}from"./index-3_hX7E3H.js";import{d as R,a as d,B as g,b as p,c as f,e as x}from"./index-CuzOEvci.js";import"./preload-helper-By1u-41e.js";import"./paths-BxFImlO9.js";import"./iconBase-D1sfk0mK.js";/**
 * @author: @devtoti
 * @description: Callout
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const z=C("flex items-start gap-2 min-h-1 shadow-sm rounded-tr-arch-rd-sm rounded-br-arch-rd-sm text-arch-txt-primary py-2 pl-arch-sm pr-arch-sm bg-arch-surface-secondary border-l-[length:var(--stroke-extra-bold)] border-solid max-w-96",{variants:{variant:{success:"border-arch-success-brd",info:"border-arch-info-brd",warning:"border-arch-warning-brd",danger:"border-arch-danger-brd",neutral:"border-arch-contour-primary"},size:{sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{variant:"neutral",size:"md"}}),V=n=>{switch(n){case"success":return"text-arch-success-icon";case"info":return"text-arch-info-icon";case"warning":return"text-arch-warning-icon";case"danger":return"text-arch-danger-icon";default:return""}},t=({className:n,variant:a="neutral",size:r="md",label:b="This is the default callout component",title:u="Callout",asChild:w=!1,icon:m,children:T,...j})=>{const y=T||b,I=w?N:"div",S=m!==void 0?m:e.jsx(R,{});return e.jsxs(I,{className:h(z({variant:a,size:r}),n),...j,children:[e.jsx("span",{className:h("mt-1 inline-flex align-middle",V(a)),children:S}),u&&e.jsxs("h4",{className:"font-medium inline",children:[u,":"]}),e.jsxs("p",{className:"inline",children:[" ",y]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "danger" | "neutral"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"neutral"'}]},description:"Visual intent of the callout",defaultValue:{value:'"neutral"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the callout",defaultValue:{value:'"md"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout title text",defaultValue:{value:'"Callout"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout label text (alternative to children)",defaultValue:{value:'"This is the default callout component"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout content (preferred over label)"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a different element using Radix Slot",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon as a React component, element, or custom SVG"}},composes:["Omit"]};const v=n=>{switch(n){case"success":return e.jsx(g,{});case"info":return e.jsx(d,{});case"warning":return e.jsx(p,{});case"danger":return e.jsx(f,{});default:return e.jsx(x,{})}},O={title:"01 COMPONENTS/Callout",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"A static, contextual message that displays important information without interrupting the user, unlike alerts that demand immediate attention.",description:{component:"Supports a customizable top-left icon, headings, and any text length. Make sure to leverage the `Callout` designs by wrapping your components inside a `ThemeProvider` and playing around with the `theme` style that better suits your needs."},artwork:"/storybook-assets/callout.svg"}},argTypes:{variant:{control:"select",options:["success","info","warning","danger","neutral"],description:"Variant type"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},title:{control:"text",description:"Callout title"},label:{control:"text",description:"Text content (alternative to children)"},children:{control:"text",description:"Callout content (preferred over label)"},icon:{control:!1,description:"Icon element (controlled by showIcon toggle in Storybook)",table:{category:"Icon"}},showIcon:{control:"boolean",description:"Show icon based on variant (Storybook-only control, not a component prop)",table:{category:"Icon"}}},args:{variant:"info",size:"md",title:"Tip",label:"This is a callout message. Enter a fun fact here for your users.",showIcon:!0,className:"bg-arch-surface-secondary"}},s={render:({showIcon:n,...a})=>{const r=n?v(a.variant):void 0;return e.jsx(c,{theme:"ionic",children:e.jsx(t,{...a,icon:r})})}},o={render:({showIcon:n,...a})=>e.jsx(c,{theme:"doric",children:e.jsx(t,{...a,variant:"info",title:"Info",label:"This is an info message",icon:n?e.jsx(d,{}):void 0})})},i={render:({showIcon:n,...a})=>e.jsx(c,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{...a,variant:"success",title:"Success",label:"This is a success message",icon:n?e.jsx(g,{}):void 0}),e.jsx(t,{...a,variant:"info",title:"Info",label:"This is an info message",icon:n?e.jsx(d,{}):void 0}),e.jsx(t,{...a,variant:"warning",title:"Warning",label:"This is a warning message",icon:n?e.jsx(p,{}):void 0}),e.jsx(t,{...a,variant:"danger",title:"Danger",label:"This is a danger message",icon:n?e.jsx(f,{}):void 0}),e.jsx(t,{...a,variant:"neutral",title:"Neutral",label:"This is a neutral message",icon:n?e.jsx(x,{}):void 0})]})})},l={render:({showIcon:n,...a})=>{const r=n?v(a.variant):void 0;return e.jsx(c,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{...a,size:"sm",title:"Small",label:"Small callout message",icon:r}),e.jsx(t,{...a,size:"md",title:"Medium",label:"Medium callout message",icon:r}),e.jsx(t,{...a,size:"lg",title:"Large",label:"Large callout message",icon:r})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return <ThemeSwitcher theme="ionic">
        <Callout {...args} icon={icon} />
      </ThemeSwitcher>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    return <ThemeSwitcher theme="doric">
        <Callout {...args} variant="info" title="Info" label="This is an info message" icon={showIcon ? <IconInfo /> : undefined} />
      </ThemeSwitcher>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-4">
          <Callout {...args} variant="success" title="Success" label="This is a success message" icon={showIcon ? <IconSuccess /> : undefined} />
          <Callout {...args} variant="info" title="Info" label="This is an info message" icon={showIcon ? <IconInfo /> : undefined} />
          <Callout {...args} variant="warning" title="Warning" label="This is a warning message" icon={showIcon ? <IconWarning /> : undefined} />
          <Callout {...args} variant="danger" title="Danger" label="This is a danger message" icon={showIcon ? <IconDanger /> : undefined} />
          <Callout {...args} variant="neutral" title="Neutral" label="This is a neutral message" icon={showIcon ? <IconNeutral /> : undefined} />
        </div>
      </ThemeSwitcher>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-4">
          <Callout {...args} size="sm" title="Small" label="Small callout message" icon={icon} />
          <Callout {...args} size="md" title="Medium" label="Medium callout message" icon={icon} />
          <Callout {...args} size="lg" title="Large" label="Large callout message" icon={icon} />
        </div>
      </ThemeSwitcher>;
  }
}`,...l.parameters?.docs?.source}}};const L=["Default","Info","AllVariants","AllSizes"];export{l as AllSizes,i as AllVariants,s as Default,o as Info,L as __namedExportsOrder,O as default};
