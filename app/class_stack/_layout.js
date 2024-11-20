import { Stack } from "expo-router";

export default function StackLayout() {
  // Override default layout to ensure that our screen background bleeds
  // into the status bar.
  return (
    <Stack
      screenOptions={
        {
          // headerShown: false,
        }
      }
    ></Stack>
  );
}
