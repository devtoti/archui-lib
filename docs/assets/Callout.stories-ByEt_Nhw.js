import{j as e}from"./iframe-CeqUBNmi.js";import{S as C,t as h,c as N,T as c}from"./ThemeSwitcher-Cpms1UWb.js";import{d as R,a as d,B as p,b as g,c as f,e as x}from"./index-6SRO4m1H.js";import"./preload-helper-By1u-41e.js";import"./paths-BxFImlO9.js";import"./iconBase-BN7UjgVL.js";/**
 * @author: @devtoti
 * @description: Callout
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const z=N("flex items-start gap-2 min-h-1 shadow-sm rounded-tr-arch-rd-sm rounded-br-arch-rd-sm text-arch-primary py-2 pl-arch-sm pr-arch-sm bg-arch-surface-secondary border-l-[length:var(--stroke-extra-bold)] border-solid max-w-96",{variants:{variant:{success:"border-arch-sem-brd-success",info:"border-arch-sem-brd-info",warning:"border-arch-sem-brd-warning",error:"border-arch-sem-brd-error",neutral:"border-arch-contour-primary"},size:{sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{variant:"neutral",size:"md"}}),V=t=>{switch(t){case"success":return"text-arch-sem-i-success";case"info":return"text-arch-sem-i-info";case"warning":return"text-arch-sem-i-warning";case"error":return"text-arch-sem-i-error";default:return""}},r=({className:t,variant:a="neutral",size:n="md",label:b="This is the default callout component",title:u="Callout",asChild:w=!1,icon:m,children:T,...j})=>{const y=T||b,I=w?C:"div",S=m!==void 0?m:e.jsx(R,{});return e.jsxs(I,{className:h(z({variant:a,size:n}),t),...j,children:[e.jsx("span",{className:h("mt-1 inline-flex align-middle",V(a)),children:S}),u&&e.jsxs("h4",{className:"font-medium inline",children:[u,":"]}),e.jsxs("p",{className:"inline",children:[" ",y]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"Visual intent of the callout",defaultValue:{value:'"neutral"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the callout",defaultValue:{value:'"md"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout title text",defaultValue:{value:'"Callout"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout label text (alternative to children)",defaultValue:{value:'"This is the default callout component"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout content (preferred over label)"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a different element using Radix Slot",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon as a React component, element, or custom SVG"}},composes:["Omit"]};const v=t=>{switch(t){case"success":return e.jsx(p,{});case"info":return e.jsx(d,{});case"warning":return e.jsx(g,{});case"error":return e.jsx(f,{});default:return e.jsx(x,{})}},O={title:"01 COMPONENTS/Callout",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"A static, contextual message that displays important information without interrupting the user, unlike alerts that demand immediate attention.",description:{component:"Supports a customizable top-left icon, headings, and any text length. Make sure to leverage the `Callout` designs by wrapping your components inside a `ThemeProvider` and playing around with the `theme` style that better suits your needs."},artwork:"/storybook-assets/callout.svg"}},argTypes:{variant:{control:"select",options:["success","info","warning","error","neutral"],description:"Variant type"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},title:{control:"text",description:"Callout title"},label:{control:"text",description:"Text content (alternative to children)"},children:{control:"text",description:"Callout content (preferred over label)"},icon:{control:!1,description:"Icon element (controlled by showIcon toggle in Storybook)",table:{category:"Icon"}},showIcon:{control:"boolean",description:"Show icon based on variant (Storybook-only control, not a component prop)",table:{category:"Icon"}}},args:{variant:"info",size:"md",title:"Tip",label:"This is a callout message. Enter a fun fact here for your users.",showIcon:!0,className:"bg-arch-surface-secondary"}},s={render:({showIcon:t,...a})=>{const n=t?v(a.variant):void 0;return e.jsx(c,{theme:"ionic",children:e.jsx(r,{...a,icon:n})})}},o={render:({showIcon:t,...a})=>e.jsx(c,{theme:"doric",children:e.jsx(r,{...a,variant:"info",title:"Info",label:"This is an info message",icon:t?e.jsx(d,{}):void 0})})},i={render:({showIcon:t,...a})=>e.jsx(c,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{...a,variant:"success",title:"Success",label:"This is a success message",icon:t?e.jsx(p,{}):void 0}),e.jsx(r,{...a,variant:"info",title:"Info",label:"This is an info message",icon:t?e.jsx(d,{}):void 0}),e.jsx(r,{...a,variant:"warning",title:"Warning",label:"This is a warning message",icon:t?e.jsx(g,{}):void 0}),e.jsx(r,{...a,variant:"error",title:"Error",label:"This is an error message",icon:t?e.jsx(f,{}):void 0}),e.jsx(r,{...a,variant:"neutral",title:"Neutral",label:"This is a neutral message",icon:t?e.jsx(x,{}):void 0})]})})},l={render:({showIcon:t,...a})=>{const n=t?v(a.variant):void 0;return e.jsx(c,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{...a,size:"sm",title:"Small",label:"Small callout message",icon:n}),e.jsx(r,{...a,size:"md",title:"Medium",label:"Medium callout message",icon:n}),e.jsx(r,{...a,size:"lg",title:"Large",label:"Large callout message",icon:n})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <Callout {...args} variant="error" title="Error" label="This is an error message" icon={showIcon ? <IconError /> : undefined} />
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
