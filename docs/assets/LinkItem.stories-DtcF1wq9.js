import{j as e}from"./iframe-BR1oeFPx.js";import{S as B,t as H,c as O,T as d}from"./ThemeSwitcher-BhVsUde3.js";import{f as v,g as s,h as _,i as L,j as c,k as y}from"./index-CHKpshhd.js";import"./preload-helper-By1u-41e.js";import"./paths-BxFImlO9.js";/**
 * @author: @devtoti
 * @description: LinkItem
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */const M=O("bg-arch-surface-primary rounded-arch-rd-md px-arch-sm py-arch-xs inline-flex items-center gap-arch-sm text-arch-secondary transition-colors duration-200 cursor-pointer hover:bg-arch-surface-tertiary hover:text-arch-accent hover:rounded-arch-rd-sm hover:underline hover:underline-offset-4",{variants:{variant:{default:"text-arch-primary underline underline-offset-4 [&_svg]:text-arch-accent",hover:"bg-arch-surface-tertiary text-arch-accent px-arch-sm py-arch-xs rounded-arch-rd-sm underline underline-offset-4",active:"text-arch-accent bg-arch-surface-secondary px-arch-sm py-arch-xs rounded-arch-rd-sm font-medium border-arch-accent border-[length:var(--stroke-regular)]",minimal:"text-arch-secondary bg-transparent hover:text-arch-accent underline underline-offset-4",visited:"text-violet-800 hover:text-violet-600 underline underline-offset-4 visited:text-violet-800 [&_svg]:text-violet-800"}},defaultVariants:{variant:"default"}}),n=({className:t,variant:l,label:o,asChild:a=!1,leftIcon:r,rightIcon:b,children:R,blank:h=!1,noopenreferrer:x,download:w,prefetch:S,ariaLabel:N,href:T,rel:E,target:V,...k})=>{const D=a?B:"a",j=R||o,A=h?"_blank":V;let f=E;if(h||x){const i=f?f.split(" ").filter(Boolean):[];h&&!i.includes("noopener")&&i.push("noopener"),(x===!0||h&&x!==!1)&&(i.includes("noreferrer")||i.push("noreferrer")),f=i.length>0?i.join(" "):void 0}const q=w===!0?"":w||void 0,C=N||k["aria-label"],P={...k,href:T,target:A,rel:f,download:q,"aria-label":C,...S&&{"data-prefetch":"true"}};return e.jsxs(D,{className:H(M({variant:l}),t),...P,children:[r&&e.jsx("span",{className:"inline-flex items-center","aria-hidden":"true",children:r}),j&&e.jsx("span",{children:j}),b&&e.jsx("span",{className:"inline-flex items-center","aria-hidden":"true",children:b})]})};n.__docgenInfo={description:"",methods:[],displayName:"LinkItem",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "hover" | "active" | "minimal" | "visited"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"active"'},{name:"literal",value:'"minimal"'},{name:"literal",value:'"visited"'}]},description:"Visual variant of the link"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Link text content"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Link label text (alternative to children)"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a different element using Radix Slot",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon displayed on the left side"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon displayed on the right side"},blank:{required:!1,tsType:{name:"boolean"},description:'Open link in a new tab/window (sets target="_blank")',defaultValue:{value:"false",computed:!1}},noopenreferrer:{required:!1,tsType:{name:"boolean"},description:"Add noopener and noreferrer to rel attribute for security (recommended when blank=true)"},download:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Download the linked file instead of navigating"},prefetch:{required:!1,tsType:{name:"boolean"},description:"Prefetch the linked resource (adds data-prefetch attribute for frameworks like Next.js)"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers (overrides aria-label if provided)"}},composes:["Omit"]};const J={title:"01 COMPONENTS/LinkItem",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{subtitle:"A flexible link component for app navigation. Works with React Router, Nextjs Link, or plain anchors. Supports multiple styles for different navigation states.",description:{component:"The `LinkItem` component is designed for navigation and linking purposes. It supports multiple variants (default, hover, active, minimal, visited) to indicate different states and contexts. Icons can be placed on either side of the link text using the `leftIcon` and `rightIcon` props. Make sure to leverage the LinkItem designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling."},artwork:"/icons/models/linkitem.svg"}},argTypes:{variant:{control:"select",options:["default","hover","active","minimal","visited"],description:"Link variant type"},label:{control:"text",description:"Link text content (alternative to children)"},children:{control:"text",description:"Link content (preferred over label)"},leftIcon:{control:!1,description:"Icon displayed on the left side",table:{category:"Icons"}},rightIcon:{control:!1,description:"Icon displayed on the right side",table:{category:"Icons"}},showLeftIcon:{control:"boolean",description:"Show left icon (Storybook-only control, not a component prop)",table:{category:"Icons"}},showRightIcon:{control:"boolean",description:"Show right icon (Storybook-only control, not a component prop)",table:{category:"Icons"}},href:{control:"text",description:"Link destination URL"},blank:{control:"boolean",description:"Open link in a new tab/window"},noopenreferrer:{control:"boolean",description:"Add noopener and noreferrer for security"},download:{control:"boolean",description:"Download the linked file instead of navigating"},prefetch:{control:"boolean",description:"Prefetch the linked resource"},ariaLabel:{control:"text",description:"Accessible label for screen readers"}},args:{variant:"default",label:"Home",href:"#",showLeftIcon:!1,showRightIcon:!1,blank:!1,noopenreferrer:!0}},m={render:({showLeftIcon:t,showRightIcon:l,...o})=>{const a=t?e.jsx(v,{}):void 0,r=l?e.jsx(s,{}):void 0;return e.jsx(d,{theme:"ionic",children:e.jsx(n,{...o,href:"https://www.devtoti.com/",label:"Devtoti's Portfolio",leftIcon:a,rightIcon:r})})}},p={render:({showLeftIcon:t,showRightIcon:l,...o})=>{const a=t?e.jsx(v,{}):void 0,r=l?e.jsx(c,{}):void 0;return e.jsx(d,{theme:"doric",children:e.jsxs("div",{className:"flex items-center flex-col gap-4",children:[e.jsx(n,{...o,variant:"default",label:"Default",leftIcon:a,rightIcon:r}),e.jsx(n,{...o,variant:"hover",label:"Hover",leftIcon:a,rightIcon:r}),e.jsx(n,{...o,variant:"active",label:"Active",leftIcon:a,rightIcon:r}),e.jsx(n,{...o,variant:"minimal",label:"Minimal",leftIcon:a,rightIcon:r}),e.jsx(n,{...o,variant:"visited",label:"Visited",leftIcon:a,rightIcon:r})]})})}},u={render:({...t})=>e.jsx(d,{theme:"doric",children:e.jsxs("div",{className:"flex items-center flex-col gap-4",children:[e.jsx(n,{...t,label:"Left icon",leftIcon:e.jsx(v,{})}),e.jsx(n,{...t,label:"Right icon",rightIcon:e.jsx(s,{})}),e.jsx(n,{...t,label:"Both icons",leftIcon:e.jsx(L,{}),rightIcon:e.jsx(_,{})}),e.jsx(n,{...t,variant:"active",label:"Active with icons",leftIcon:e.jsx(y,{}),rightIcon:e.jsx(c,{})})]})})},g={parameters:{docs:{disable:!0}},render:({...t})=>e.jsx(d,{theme:"ionic",children:e.jsxs("nav",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...t,variant:"active",label:"Dashboard",leftIcon:e.jsx(v,{}),rightIcon:e.jsx(c,{})}),e.jsx(n,{...t,variant:"default",label:"Profile",leftIcon:e.jsx(L,{}),rightIcon:e.jsx(c,{})}),e.jsx(n,{...t,variant:"default",label:"Settings",leftIcon:e.jsx(y,{}),rightIcon:e.jsx(c,{})}),e.jsx(n,{...t,variant:"minimal",label:"External Documentation",rightIcon:e.jsx(s,{}),blank:!0,noopenreferrer:!0,href:"https://storybook.js.org"})]})})},I={render:({...t})=>e.jsx(d,{theme:"doric",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(n,{...t,label:"External Link (Secure)",href:"https://www.devtoti.com",blank:!0,noopenreferrer:!0,rightIcon:e.jsx(s,{}),ariaLabel:"Visit Devtoti's portfolio website"}),e.jsx(n,{...t,label:"External Link (No Referrer)",href:"https://github.com",blank:!0,noopenreferrer:!1,rightIcon:e.jsx(s,{})}),e.jsx(n,{...t,label:"Download File",href:"/example.pdf",download:!0,rightIcon:e.jsx(s,{})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    showLeftIcon,
    showRightIcon,
    ...args
  }) => {
    const leftIcon = showLeftIcon ? <IconHome /> : undefined;
    const rightIcon = showRightIcon ? <IconExternal /> : undefined;
    return <ThemeSwitcher theme="ionic">
        <LinkItem {...args} href="https://www.devtoti.com/" label="Devtoti's Portfolio" leftIcon={leftIcon} rightIcon={rightIcon} />
      </ThemeSwitcher>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    showLeftIcon,
    showRightIcon,
    ...args
  }) => {
    const leftIcon = showLeftIcon ? <IconHome /> : undefined;
    const rightIcon = showRightIcon ? <IconChevronRight /> : undefined;
    return <ThemeSwitcher theme="doric">
        <div className="flex items-center flex-col gap-4">
          <LinkItem {...args} variant="default" label="Default" leftIcon={leftIcon} rightIcon={rightIcon} />
          <LinkItem {...args} variant="hover" label="Hover" leftIcon={leftIcon} rightIcon={rightIcon} />
          <LinkItem {...args} variant="active" label="Active" leftIcon={leftIcon} rightIcon={rightIcon} />
          <LinkItem {...args} variant="minimal" label="Minimal" leftIcon={leftIcon} rightIcon={rightIcon} />
          <LinkItem {...args} variant="visited" label="Visited" leftIcon={leftIcon} rightIcon={rightIcon} />
        </div>
      </ThemeSwitcher>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <ThemeSwitcher theme="doric">
        <div className="flex items-center flex-col gap-4">
          <LinkItem {...args} label="Left icon" leftIcon={<IconHome />} />
          <LinkItem {...args} label="Right icon" rightIcon={<IconExternal />} />
          <LinkItem {...args} label="Both icons" leftIcon={<IconUser />} rightIcon={<IconArrowRight />} />
          <LinkItem {...args} variant="active" label="Active with icons" leftIcon={<IconSettings />} rightIcon={<IconChevronRight />} />
        </div>
      </ThemeSwitcher>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  },
  render: ({
    ...args
  }) => {
    return <ThemeSwitcher theme="ionic">
        <nav className="flex flex-col items-center gap-2">
          <LinkItem {...args} variant="active" label="Dashboard" leftIcon={<IconHome />} rightIcon={<IconChevronRight />} />
          <LinkItem {...args} variant="default" label="Profile" leftIcon={<IconUser />} rightIcon={<IconChevronRight />} />
          <LinkItem {...args} variant="default" label="Settings" leftIcon={<IconSettings />} rightIcon={<IconChevronRight />} />
          <LinkItem {...args} variant="minimal" label="External Documentation" rightIcon={<IconExternal />} blank noopenreferrer href="https://storybook.js.org" />
        </nav>
      </ThemeSwitcher>;
  }
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <ThemeSwitcher theme="doric">
        <div className="flex flex-col items-center gap-4">
          <LinkItem {...args} label="External Link (Secure)" href="https://www.devtoti.com" blank noopenreferrer rightIcon={<IconExternal />} ariaLabel="Visit Devtoti's portfolio website" />
          <LinkItem {...args} label="External Link (No Referrer)" href="https://github.com" blank noopenreferrer={false} rightIcon={<IconExternal />} />
          <LinkItem {...args} label="Download File" href="/example.pdf" download rightIcon={<IconExternal />} />
        </div>
      </ThemeSwitcher>;
  }
}`,...I.parameters?.docs?.source}}};const K=["Showcase","AllVariants","WithIcons","NavigationExample","ExternalLinks"];export{p as AllVariants,I as ExternalLinks,g as NavigationExample,m as Showcase,u as WithIcons,K as __namedExportsOrder,J as default};
