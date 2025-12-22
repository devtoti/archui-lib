import{j as e}from"./iframe-CD6aicnh.js";import{S as A,t as m,c as j,T as l}from"./ThemeSwitcher-d6Kz93Qj.js";import{B as u,a as c,b as h,c as p}from"./index-DM4HDLjm.js";import"./preload-helper-By1u-41e.js";/**
 * @author: @devtoti
 * @description: Alert
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const S=j("max-w-80 h-min flex items-start gap-arch-md shadow-sm rounded-tr-arch-rd-sm rounded-arch-rd-sm text-arch-primary p-arch-sm bg-arch-surface-primary border-arch-contour-accent border-solid border-[length:var(--stroke-regular)] shadow-arch-dark",{variants:{variant:{success:"border-arch-sem-brd-success bg-arch-sem-srfc-success text-arch-sem-chars-success",info:"border-arch-sem-brd-info bg-arch-sem-srfc-info text-arch-sem-chars-info",warning:"border-arch-sem-brd-warning bg-arch-sem-srfc-warning text-arch-sem-chars-warning",error:"border-arch-sem-brd-error bg-arch-sem-srfc-error text-arch-sem-chars-error"},size:{sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{variant:"success",size:"md"}}),I=s=>{switch(s){case"success":return"text-arch-sem-i-success";case"info":return"text-arch-sem-i-info";case"warning":return"text-arch-sem-i-warning";case"error":return"text-arch-sem-i-error";default:return""}},a=({className:s,variant:r,size:n,label:f="default label",asChild:x=!1,icon:d,children:v,...w})=>{const b=x?A:"div",y=v||f;return e.jsxs(b,{className:m(S({variant:r,size:n}),s),...w,children:[d&&e.jsx("span",{className:m("inline-flex align-middle mt-1",I(r)),children:d}),e.jsx("p",{className:"inline",children:y})]})};a.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"Visual intent of the alert"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the alert"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Alert label text (alternative to children)",defaultValue:{value:'"default label"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Alert content (preferred over label)"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a different element using Radix Slot",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon as a React component, element, or custom SVG"}}};const g=s=>{switch(s){case"success":return e.jsx(u,{});case"info":return e.jsx(c,{});case"warning":return e.jsx(h,{});case"error":return e.jsx(p,{});default:return e.jsx(c,{})}},R={title:"01 COMPONENTS/Alert",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"Communicate important messages or alerts that require user attention. Unlike callouts, Alerts are more prominent and are used for urgent or high-priority information.",description:{component:"The `Alert` component provides a visually distinct way to display important messages. It supports multiple variants (success, info, warning, error), customizable icons, and content. Each alert includes semantic color coding to help users quickly understand the message type. Make sure to leverage the Alert designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling."},artwork:"/icons/models/alert.svg"}},argTypes:{variant:{control:"select",options:["success","info","warning","error"],description:"Alert variant type"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},label:{control:"text",description:"Alert text content (alternative to children)"},children:{control:"text",description:"Alert content (preferred over label)"},icon:{control:!1,description:"Icon element (controlled by showIcon toggle in Storybook)",table:{category:"Icon"}},showIcon:{control:"boolean",description:"Show icon based on variant (Storybook-only control, not a component prop)",table:{category:"Icon"}}},args:{variant:"success",size:"md",label:"ArchUI Alert: Use these alerts to communicate information or feedback to users when something requires their attention or action.",showIcon:!0}},t={render:({showIcon:s,...r})=>{const n=s?g(r.variant):void 0;return e.jsx(l,{theme:"ionic",children:e.jsx(a,{...r,icon:n})})}},o={render:({showIcon:s,...r})=>e.jsx(l,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx(a,{...r,variant:"success",label:"Operation successful. Your changes have been saved and systems are functioning.",icon:s?e.jsx(u,{}):void 0}),e.jsx(a,{...r,variant:"info",label:"Your session will expire soon. Save your work or refresh to keep working.",icon:s?e.jsx(c,{}):void 0}),e.jsx(a,{...r,variant:"warning",label:"Weak password. Use a stronger password for better security.",icon:s?e.jsx(h,{}):void 0}),e.jsx(a,{...r,variant:"error",label:"An error occurred processing your request. Please try again or contact support.",icon:s?e.jsx(p,{}):void 0})]})})},i={render:({showIcon:s,...r})=>{const n=s?g(r.variant):void 0;return e.jsx(l,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx(a,{...r,size:"sm",label:"This small alert notifies users of minor changes or updates.",icon:n}),e.jsx(a,{...r,size:"md",label:"This medium alert highlights information requiring user attention.",icon:n}),e.jsx(a,{...r,size:"lg",label:"This large alert emphasizes urgent actions or important updates.",icon:n})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return <ThemeSwitcher theme="ionic">
        <Alert {...args} icon={icon} />
      </ThemeSwitcher>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col lg:flex-row gap-4">
          <Alert {...args} variant="success" label="Operation successful. Your changes have been saved and systems are functioning." icon={showIcon ? <IconSuccess /> : undefined} />
          <Alert {...args} variant="info" label="Your session will expire soon. Save your work or refresh to keep working." icon={showIcon ? <IconInfo /> : undefined} />
          <Alert {...args} variant="warning" label="Weak password. Use a stronger password for better security." icon={showIcon ? <IconWarning /> : undefined} />
          <Alert {...args} variant="error" label="An error occurred processing your request. Please try again or contact support." icon={showIcon ? <IconError /> : undefined} />
        </div>
      </ThemeSwitcher>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col lg:flex-row gap-4">
          <Alert {...args} size="sm" label="This small alert notifies users of minor changes or updates." icon={icon} />
          <Alert {...args} size="md" label="This medium alert highlights information requiring user attention." icon={icon} />
          <Alert {...args} size="lg" label="This large alert emphasizes urgent actions or important updates." icon={icon} />
        </div>
      </ThemeSwitcher>;
  }
}`,...i.parameters?.docs?.source}}};const q=["Default","AllVariants","AllSizes"];export{i as AllSizes,o as AllVariants,t as Default,q as __namedExportsOrder,R as default};
