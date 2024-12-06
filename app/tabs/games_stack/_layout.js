import { Stack } from "expo-router";
import { View, Pressable, Text } from "react-native";
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
          // title: "GAMES",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>GAMES</Text>
              <Pressable
                onPress={() => router.push("/tabs/games_stack/info_games")}
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
      <Stack.Screen
        name="gameStatus"
        options={{
          title: "Game Status",
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
        name="gameSummary"
        options={{
          title: "Summary",
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
        name="gameHistory"
        options={{
          title: "Previous Games",
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
                onPress={() => router.push("/tabs/games_stack/info_student")}
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
      <Stack.Screen
        name="info_games"
        options={{
          title: "GAMES",
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
        name="chatAI"
        options={{
          title: "AI Chatbot",
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
