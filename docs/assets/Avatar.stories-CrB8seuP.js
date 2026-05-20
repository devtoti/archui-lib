import{e as h,j as e}from"./iframe-DCq8QmLS.js";import{t as u,c as f,a as s}from"./ThemeSwitcher-DvuiuNPo.js";import{u as I}from"./useTheme-CZzOhTrX.js";import"./preload-helper-By1u-41e.js";import"./paths-BxFImlO9.js";/**
 * @author: @devtoti
 * @description: Avatar — profile image or initials with optional presence bead
 * @version: 1.0.0
 * @license: MIT
 * @date: 2026-05-15
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const V=f("relative inline-flex shrink-0 items-center justify-center overflow-hidden border-solid border-[length:var(--stroke-regular)]",{variants:{size:{sm:"size-[2rem]",md:"size-[3rem]",lg:"size-[4rem]"},fallback:{true:"border-arch-contour-accent bg-arch-surface-primary shadow-none",false:"border-transparent shadow-arch-regular"}},defaultVariants:{size:"sm",fallback:!1}}),q=f("select-none font-bold uppercase tracking-[0.1em] text-arch-txt-accent",{variants:{size:{sm:"text-xs",md:"text-base font-extrabold",lg:"text-2xl font-extrabold"}},defaultVariants:{size:"sm"}}),C=f("rounded-arch-rd-full ring-2 ring-arch-surface-primary",{variants:{badgeSize:{sm:"size-2",md:"size-3",lg:"size-4"}},defaultVariants:{badgeSize:"sm"}}),O={online:"bg-arch-success-icon",idle:"bg-arch-warning-icon",busy:"bg-arch-danger-icon",offline:"bg-arch-icon-tertiary"};function R(){const{theme:a}=I();return{doric:"rounded-arch-rd-sm",ionic:"rounded-arch-rd-full",corinthian:"rounded-arch-rd-xl"}[a]}function B(a){switch(a){case"bottom-left":return"bottom-0 left-0";case"top-right":return"right-0 top-0";case"top-left":return"left-0 top-0";case"bottom-right":default:return"bottom-0 right-0"}}const t=({className:a,size:d="sm",fallback:S=!1,position:j="bottom-right",status:z="online",badgeSize:T="sm",src:r,alt:y="",initials:g="",children:i,...A})=>{const k=R(),[v,x]=h.useState(!1);h.useEffect(()=>{x(!1)},[r]);const b=h.useMemo(()=>{const w=g.trim().toUpperCase();return w?w.slice(0,2):""},[g]),p=!i&&S&&!!b&&(!r||v),N=!i&&!p&&!!r&&!v;return e.jsxs("div",{className:u(V({size:d,fallback:p}),k,a),...A,children:[i?e.jsx("span",{className:"flex size-full items-center justify-center",children:i}):N?e.jsx("img",{src:r,alt:y,className:"size-full object-cover",onError:()=>x(!0)}):p?e.jsx("span",{className:u(q({size:d}),"leading-none"),children:b}):e.jsx("span",{className:"block size-full bg-arch-surface-tertiary","aria-hidden":!0}),e.jsx("span",{className:u("pointer-events-none absolute z-[1]",B(j),C({badgeSize:T}),O[z]),"aria-hidden":!0})]})};t.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Diameter scale: sm (32px) | md (48px) | lg (64px)",defaultValue:{value:'"sm"',computed:!1}},fallback:{required:!1,tsType:{name:"boolean"},description:"When true, show initials when the image is missing or fails to load",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"Corner anchor for the presence bead",defaultValue:{value:'"bottom-right"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"online" | "idle" | "busy" | "offline"',elements:[{name:"literal",value:'"online"'},{name:"literal",value:'"idle"'},{name:"literal",value:'"busy"'},{name:"literal",value:'"offline"'}]},description:"Presence state for the nested bead",defaultValue:{value:'"online"',computed:!1}},badgeSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Visual scale of the presence bead",defaultValue:{value:'"sm"',computed:!1}},src:{required:!1,tsType:{name:"string"},description:"Image URL for the avatar artwork"},alt:{required:!1,tsType:{name:"string"},description:"Alt text when `src` is used",defaultValue:{value:'""',computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"Initials shown when `fallback` is true and the image is unavailable",defaultValue:{value:'""',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Inner content (overrides image and initials when provided)"}}};const D="https://picsum.photos/id/64/128/128",M={title:"01 COMPONENTS/Avatar",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"Shows who is behind an action—a face or initials—while a tiny anchored bead conveys presence in lists, timelines, and account surfaces.",description:{component:"The `Avatar` component renders profile imagery or initials and supports ArchUI theme-driven silhouettes (Doric square, Ionic circle, Corinthian rounded square). Wrap stories in `ThemeProvider` via `ThemeSwitcher` so tokens resolve correctly."}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Diameter scale for canvas placement"},fallback:{control:"boolean",description:"Show initials when imagery is missing or fails to load"},position:{control:"select",options:["bottom-right","bottom-left","top-right","top-left"],description:"Corner anchor for the presence bead"},status:{control:"select",options:["online","idle","busy","offline"],description:"Presence state for the nested bead"},badgeSize:{control:"select",options:["sm","md","lg"],description:"Scale token for the presence bead"},src:{control:"text",description:"Image URL"},alt:{control:"text",description:"Alternative text for the image"},initials:{control:"text",description:"Fallback initials (up to two characters)"},children:{control:!1,description:"Optional inner content overriding image and initials"}},args:{size:"sm",fallback:!1,position:"bottom-right",status:"online",badgeSize:"sm",src:D,alt:"Sample profile photo",initials:"FB"}},n={render:a=>e.jsx(s,{theme:"ionic",children:e.jsx(t,{...a})})},l={render:a=>e.jsx(s,{theme:"doric",children:e.jsxs("div",{className:"flex flex-row flex-wrap items-center gap-arch-sp-lg",children:[e.jsx(t,{...a,size:"sm"}),e.jsx(t,{...a,size:"md"}),e.jsx(t,{...a,size:"lg"})]})})},o={render:a=>e.jsx(s,{theme:"corinthian",children:e.jsxs("div",{className:"flex flex-row flex-wrap items-center gap-arch-sp-lg",children:[e.jsx(t,{...a,status:"online",alt:"Online sample"}),e.jsx(t,{...a,status:"idle",alt:"Idle sample"}),e.jsx(t,{...a,status:"busy",alt:"Busy sample"}),e.jsx(t,{...a,status:"offline",alt:"Offline sample"})]})})},c={render:a=>e.jsxs("div",{className:"flex flex-col gap-arch-sp-xl md:flex-row md:items-start",children:[e.jsx(s,{theme:"doric",children:e.jsx(t,{...a,alt:"Doric theme preview"})}),e.jsx(s,{theme:"ionic",children:e.jsx(t,{...a,alt:"Ionic theme preview"})}),e.jsx(s,{theme:"corinthian",children:e.jsx(t,{...a,alt:"Corinthian theme preview"})})]})},m={args:{fallback:!0,src:void 0,initials:"AU"},render:a=>e.jsx(s,{theme:"ionic",children:e.jsxs("div",{className:"flex flex-row flex-wrap items-center gap-arch-sp-lg",children:[e.jsx(t,{...a,size:"sm"}),e.jsx(t,{...a,size:"md"}),e.jsx(t,{...a,size:"lg"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ThemeSwitcher theme="ionic">
      <Avatar {...args} />
    </ThemeSwitcher>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ThemeSwitcher theme="doric">
      <div className="flex flex-row flex-wrap items-center gap-arch-sp-lg">
        <Avatar {...args} size="sm" />
        <Avatar {...args} size="md" />
        <Avatar {...args} size="lg" />
      </div>
    </ThemeSwitcher>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ThemeSwitcher theme="corinthian">
      <div className="flex flex-row flex-wrap items-center gap-arch-sp-lg">
        <Avatar {...args} status="online" alt="Online sample" />
        <Avatar {...args} status="idle" alt="Idle sample" />
        <Avatar {...args} status="busy" alt="Busy sample" />
        <Avatar {...args} status="offline" alt="Offline sample" />
      </div>
    </ThemeSwitcher>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-arch-sp-xl md:flex-row md:items-start">
      <ThemeSwitcher theme="doric">
        <Avatar {...args} alt="Doric theme preview" />
      </ThemeSwitcher>
      <ThemeSwitcher theme="ionic">
        <Avatar {...args} alt="Ionic theme preview" />
      </ThemeSwitcher>
      <ThemeSwitcher theme="corinthian">
        <Avatar {...args} alt="Corinthian theme preview" />
      </ThemeSwitcher>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: true,
    src: undefined,
    initials: "AU"
  },
  render: args => <ThemeSwitcher theme="ionic">
      <div className="flex flex-row flex-wrap items-center gap-arch-sp-lg">
        <Avatar {...args} size="sm" />
        <Avatar {...args} size="md" />
        <Avatar {...args} size="lg" />
      </div>
    </ThemeSwitcher>
}`,...m.parameters?.docs?.source}}};const L=["Default","AllSizes","AllStates","AllThemes","FallbackInitials"];export{l as AllSizes,o as AllStates,c as AllThemes,n as Default,m as FallbackInitials,L as __namedExportsOrder,M as default};
