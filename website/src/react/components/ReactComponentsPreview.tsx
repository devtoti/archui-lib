import { useState } from 'react';
import { Button, LinkItem, Switch } from '@devtoti/archui-lib';
import { ThemeProvider } from '@devtoti/archui-lib';

export default function ReactComponentsPreview() {
  return (
    <ThemeProvider theme="doric" className="w-full h-full">
      <Button variant="primary" size="md" label="Welcome to ArchUI!" />
      <LinkItem href="https://www.google.com" label="Google" />
      <Switch variant="default" size="md" />
    </ThemeProvider>
  );
}
