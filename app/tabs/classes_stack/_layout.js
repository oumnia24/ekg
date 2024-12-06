import { Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { FontAwesome } from "@expo/vector-icons";

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
          title: "",
          headerRight: () => (
            <Pressable
              onPress={() => {
                console.log("Notification icon pressed");
                router.push("/tabs/classes_stack/search");
              }}
              style={{ marginRight: 15 }} // Adjust spacing
            >
              <Text style={{ fontWeight: "bold", color: "#FF8361" }}>
                FIND A STUDENT
              </Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="dashboard"
        options={{
          title: "",
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
      <Stack.Screen
        name="student"
        options={{
          // title: "STUDENT",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>STUDENT</Text>
              <Pressable
                onPress={() => router.push("/tabs/classes_stack/info_student")}
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
          headerShown: true,
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="search"
        options={{
          title: "",
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
      <Stack.Screen
        name="info_student"
        options={{
          title: "STUDENT",
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
