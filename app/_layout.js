import { Tabs } from "expo-router";

export default function TabLayout() {
  // Override default layout to ensure that our screen background bleeds
  // into the status bar.
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    ></Tabs>
  );
}
