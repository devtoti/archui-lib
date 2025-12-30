import { useState } from 'react';
import {
  Button,
  LinkItem,
  Switch,
  Callout,
  Alert,
  Toast,
  ToastProvider,
  ToastViewport,
  Heading,
} from '@devtoti/archui-lib';
import { ThemeProvider } from '@devtoti/archui-lib';
import { RxCookie, RxExternalLink, RxBell } from 'react-icons/rx';

export default function ReactComponentsPreview() {
  const [open, setOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);

  const handleSwitchChange = (checked: boolean) => {
    setSwitchChecked(checked);
  };

  return (
    <ToastProvider duration={5000} swipeDirection="left">
      <ThemeProvider
        theme="ionic"
        themeType="light"
        className="w-full h-full grainy squares-sm px-6 py-6 bg-sys-surface-primary grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_2fr_3fr] place-items-center grid-rows-auto items-center justify-center gap-8 md:grid-rows-auto text-start"
        hasToggler={true}
      >
        <Button variant="primary" size="md" label="Welcome to ArchUI!" />
        <LinkItem
          href="https://www.devtoti.com"
          label="Portfolio"
          blank
          noopenreferrer
          rightIcon={<RxExternalLink />}
          ariaLabel="Visit Devtoti's portfolio website"
        />
        <Callout
          title="Tip"
          label="You can switch themes by adding 'ionic', 'corinthian' or 'doric' to the className of the ThemeProvider component."
          variant="info"
          size="md"
          className="col-span-full"
        />
        <Alert
          title="Alert"
          label="This is your friendly reminder to try out ArchUI library in your next project."
          variant="warning"
          size="md"
          icon={<RxBell />}
        />
        {/* <div className="flex w-full items-center justify-center">
          <Button
          variant="secondary"
          size="md"
          label={open ? 'Close Toast' : 'Open Toast'}
          onClick={() => setOpen(!open)}
          />
          </div> */}
        <Toast
          variant="minimal"
          className="ionic text-start"
          title="Hello from Toast!"
          description="This toast is triggered by the button above."
          open={open}
          onOpenChange={setOpen}
          hasDivider={true}
          icon={<RxCookie />}
        />
        <Switch
          variant="default"
          size="md"
          checked={switchChecked}
          onCheckedChange={handleSwitchChange}
        />
        <Heading
          variant="h3"
          align="left"
          text="Upcoming updates"
          description="We are working on a new version of ArchUI library with some exciting new features. Stay tuned for more updates."
        />
      </ThemeProvider>
      <ToastViewport className="!fixed !bottom-0 !right-0 !z-[2147483647]" />
    </ToastProvider>
  );
}
