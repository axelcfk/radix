import { Tabs } from "@radix-ui/themes";

export function Tab2() {
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="Overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="Analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="Reports">Reports</Tabs.Trigger>
        <Tabs.Trigger value="Notifications">Notifications</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

export default Tab2;
