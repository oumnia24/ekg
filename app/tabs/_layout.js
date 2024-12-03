import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  // Override default layout to ensure that our screen background bleeds
  // into the status bar.
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="classes_stack"
        options={{
          title: "Classes",
          // headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="games_stack"
        options={{
          title: "Games",
          // headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="puzzle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "NOTIFICATIONS",
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="bell" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "SETTINGS",
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
