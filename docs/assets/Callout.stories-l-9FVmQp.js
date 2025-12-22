import{j as e}from"./iframe-CD6aicnh.js";import{S as C,t as m,c as N,T as c}from"./ThemeSwitcher-d6Kz93Qj.js";import{d as R,a as d,B as h,b as p,c as f,e as g}from"./index-DM4HDLjm.js";import"./preload-helper-By1u-41e.js";/**
 * @author: @devtoti
 * @description: Callout
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const z=N("flex items-start gap-2 min-h-1 shadow-sm rounded-tr-arch-rd-sm rounded-br-arch-rd-sm text-arch-primary py-2 pl-arch-sm pr-arch-sm bg-arch-surface-secondary border-l-[length:var(--stroke-extra-bold)] border-solid max-w-96",{variants:{variant:{success:"border-arch-sem-brd-success",info:"border-arch-sem-brd-info",warning:"border-arch-sem-brd-warning",error:"border-arch-sem-brd-error",neutral:"border-arch-contour-primary"},size:{sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{variant:"neutral",size:"md"}}),V=r=>{switch(r){case"success":return"text-arch-sem-i-success";case"info":return"text-arch-sem-i-info";case"warning":return"text-arch-sem-i-warning";case"error":return"text-arch-sem-i-error";default:return""}},n=({className:r,variant:a="neutral",size:t="md",label:v="This is the default callout component",title:b="Callout",asChild:w=!1,icon:u,children:T,...j})=>{const I=T||v,S=w?C:"div",y=u!==void 0?u:e.jsx(R,{});return e.jsxs(S,{className:m(z({variant:a,size:t}),r),...j,children:[e.jsx("span",{className:m("mt-1 inline-flex align-middle",V(a)),children:y}),e.jsxs("h4",{className:"font-medium inline",children:[b,":"]}),e.jsxs("p",{className:"inline",children:[" ",I]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "error" | "neutral"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'}]},description:"Visual intent of the callout",defaultValue:{value:'"neutral"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the callout",defaultValue:{value:'"md"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout title text",defaultValue:{value:'"Callout"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout label text (alternative to children)",defaultValue:{value:'"This is the default callout component"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Callout content (preferred over label)"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a different element using Radix Slot",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon as a React component, element, or custom SVG"}},composes:["Omit"]};const x=r=>{switch(r){case"success":return e.jsx(h,{});case"info":return e.jsx(d,{});case"warning":return e.jsx(p,{});case"error":return e.jsx(f,{});default:return e.jsx(g,{})}},M={title:"01 COMPONENTS/Callout",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"Highlights important content and provides feedback without interrupting the user’s experience.",description:{component:"Supports a customizable top-left icon, headings, and any text length. Each `Callout` includes a default fade-in-out animation that can be disabled if a variable `animate=none` is provided. Make sure to leverage the `Callout` designs by wrapping your components inside a `ThemeProvider` and playing around with the `order` style that better suits your needs."},artwork:"/icons/models/callout.svg"}},argTypes:{variant:{control:"select",options:["success","info","warning","error","neutral"],description:"Variant type"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},title:{control:"text",description:"Callout title"},label:{control:"text",description:"Text content (alternative to children)"},children:{control:"text",description:"Callout content (preferred over label)"},icon:{control:!1,description:"Icon element (controlled by showIcon toggle in Storybook)",table:{category:"Icon"}},showIcon:{control:"boolean",description:"Show icon based on variant (Storybook-only control, not a component prop)",table:{category:"Icon"}}},args:{variant:"info",size:"md",title:"Tip",label:"This is a callout message. Enter a fun fact here for your users.",showIcon:!0,className:"bg-arch-surface-secondary"}},s={render:({showIcon:r,...a})=>{const t=r?x(a.variant):void 0;return e.jsx(c,{theme:"ionic",children:e.jsx(n,{...a,icon:t})})}},o={render:({showIcon:r,...a})=>e.jsx(c,{theme:"doric",children:e.jsx(n,{...a,variant:"info",title:"Info",label:"This is an info message",icon:r?e.jsx(d,{}):void 0})})},i={render:({showIcon:r,...a})=>e.jsx(c,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{...a,variant:"success",title:"Success",label:"This is a success message",icon:r?e.jsx(h,{}):void 0}),e.jsx(n,{...a,variant:"info",title:"Info",label:"This is an info message",icon:r?e.jsx(d,{}):void 0}),e.jsx(n,{...a,variant:"warning",title:"Warning",label:"This is a warning message",icon:r?e.jsx(p,{}):void 0}),e.jsx(n,{...a,variant:"error",title:"Error",label:"This is an error message",icon:r?e.jsx(f,{}):void 0}),e.jsx(n,{...a,variant:"neutral",title:"Neutral",label:"This is a neutral message",icon:r?e.jsx(g,{}):void 0})]})})},l={render:({showIcon:r,...a})=>{const t=r?x(a.variant):void 0;return e.jsx(c,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{...a,size:"sm",title:"Small",label:"Small callout message",icon:t}),e.jsx(n,{...a,size:"md",title:"Medium",label:"Medium callout message",icon:t}),e.jsx(n,{...a,size:"lg",title:"Large",label:"Large callout message",icon:t})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const A=["Default","Info","AllVariants","AllSizes"];export{l as AllSizes,i as AllVariants,s as Default,o as Info,A as __namedExportsOrder,M as default};
