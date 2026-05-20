import{j as e}from"./iframe-DCq8QmLS.js";import{t as u,c as A,a as l}from"./ThemeSwitcher-DvuiuNPo.js";import{S as j}from"./index-3_hX7E3H.js";import{B as m,a as c,b as p,c as g}from"./index-CuzOEvci.js";import"./preload-helper-By1u-41e.js";import"./paths-BxFImlO9.js";import"./iconBase-D1sfk0mK.js";/**
 * @author: @devtoti
 * @description: Alert
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const S=A("max-w-80 h-min flex items-start gap-arch-md shadow-sm rounded-tr-arch-rd-sm rounded-arch-rd-sm text-arch-txt-primary p-arch-sm bg-arch-surface-primary border-arch-contour-accent border-solid border-[length:var(--stroke-regular)] shadow-arch-dark",{variants:{variant:{success:"border-arch-success-brd bg-arch-success-bg text-arch-success-txt",info:"border-arch-info-brd bg-arch-info-bg text-arch-info-txt",warning:"border-arch-warning-brd bg-arch-warning-bg text-arch-warning-txt",danger:"border-arch-danger-brd bg-arch-danger-bg text-arch-danger-txt"},size:{sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{variant:"success",size:"md"}}),I=a=>{switch(a){case"success":return"text-arch-success-icon";case"info":return"text-arch-info-icon";case"warning":return"text-arch-warning-icon";case"danger":return"text-arch-danger-icon";default:return""}},n=({className:a,variant:r,size:t,label:f="default label",asChild:x=!1,icon:d,children:b,...v})=>{const w=x?j:"div",y=b||f;return e.jsxs(w,{className:u(S({variant:r,size:t}),a),...v,children:[d&&e.jsx("span",{className:u("inline-flex align-middle mt-1",I(r)),children:d}),e.jsx("p",{className:"inline",children:y})]})};n.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"Visual intent of the alert"},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the alert"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Alert label text (alternative to children)",defaultValue:{value:'"default label"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Alert content (preferred over label)"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a different element using Radix Slot",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon as a React component, element, or custom SVG"}}};const h=a=>{switch(a){case"success":return e.jsx(m,{});case"info":return e.jsx(c,{});case"warning":return e.jsx(p,{});case"danger":return e.jsx(g,{});default:return e.jsx(c,{})}},B={title:"01 COMPONENTS/Alert",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"Communicate important messages or alerts that require user attention. Unlike callouts, Alerts are more prominent and are used for urgent or high-priority information.",description:{component:"The `Alert` component provides a visually distinct way to display important messages. It supports multiple variants (success, info, warning, danger), customizable icons, and content. Each alert includes semantic color coding to help users quickly understand the message type. Make sure to leverage the Alert designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling."},artwork:"/storybook-assets/alert.svg"}},argTypes:{variant:{control:"select",options:["success","info","warning","danger"],description:"Alert variant type"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},label:{control:"text",description:"Alert text content (alternative to children)"},children:{control:"text",description:"Alert content (preferred over label)"},icon:{control:!1,description:"Icon element (controlled by showIcon toggle in Storybook)",table:{category:"Icon"}},showIcon:{control:"boolean",description:"Show icon based on variant (Storybook-only control, not a component prop)",table:{category:"Icon"}}},args:{variant:"success",size:"md",label:"ArchUI Alert: Use these alerts to communicate information or feedback to users when something requires their attention or action.",showIcon:!0}},s={render:({showIcon:a,...r})=>{const t=a?h(r.variant):void 0;return e.jsx(l,{theme:"ionic",children:e.jsx(n,{...r,icon:t})})}},o={render:({showIcon:a,...r})=>e.jsx(l,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx(n,{...r,variant:"success",label:"Operation successful. Your changes have been saved and systems are functioning.",icon:a?e.jsx(m,{}):void 0}),e.jsx(n,{...r,variant:"info",label:"Your session will expire soon. Save your work or refresh to keep working.",icon:a?e.jsx(c,{}):void 0}),e.jsx(n,{...r,variant:"warning",label:"Weak password. Use a stronger password for better security.",icon:a?e.jsx(p,{}):void 0}),e.jsx(n,{...r,variant:"danger",label:"A critical issue occurred processing your request. Please try again or contact support.",icon:a?e.jsx(g,{}):void 0})]})})},i={render:({showIcon:a,...r})=>{const t=a?h(r.variant):void 0;return e.jsx(l,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx(n,{...r,size:"sm",label:"This small alert notifies users of minor changes or updates.",icon:t}),e.jsx(n,{...r,size:"md",label:"This medium alert highlights information requiring user attention.",icon:t}),e.jsx(n,{...r,size:"lg",label:"This large alert emphasizes urgent actions or important updates.",icon:t})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return <ThemeSwitcher theme="ionic">
        <Alert {...args} icon={icon} />
      </ThemeSwitcher>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    showIcon,
    ...args
  }) => {
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col lg:flex-row gap-4">
          <Alert {...args} variant="success" label="Operation successful. Your changes have been saved and systems are functioning." icon={showIcon ? <IconSuccess /> : undefined} />
          <Alert {...args} variant="info" label="Your session will expire soon. Save your work or refresh to keep working." icon={showIcon ? <IconInfo /> : undefined} />
          <Alert {...args} variant="warning" label="Weak password. Use a stronger password for better security." icon={showIcon ? <IconWarning /> : undefined} />
          <Alert {...args} variant="danger" label="A critical issue occurred processing your request. Please try again or contact support." icon={showIcon ? <IconDanger /> : undefined} />
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
}`,...i.parameters?.docs?.source}}};const C=["Default","AllVariants","AllSizes"];export{i as AllSizes,o as AllVariants,s as Default,C as __namedExportsOrder,B as default};
