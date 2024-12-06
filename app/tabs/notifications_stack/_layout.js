import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

export default function StackLayout() {
  // Override default layout to ensure that our screen background bleeds
  // into the status bar.
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "NOTIFICATIONS",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                NOTIFICATIONS
              </Text>
              <Pressable
                onPress={() =>
                  router.push("/tabs/notifications_stack/info_notif")
                }
                style={{ marginLeft: 10 }} // Add spacing between title and icon
              >
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="orange"
                />
              </Pressable>
            </View>
          ),
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="info_notif"
        options={{
          title: "NOTIFICATIONS",
          headerLeft: () => (
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back-outline" size={24} color="orange" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
