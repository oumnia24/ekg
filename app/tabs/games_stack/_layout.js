import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

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
          title: "GAMES",
        }}
      />
      <Stack.Screen
        name="truthOrDare"
        options={{
          title: "Truth Or Dare",
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
