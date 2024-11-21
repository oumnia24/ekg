import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/mainButton";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Link href="tabs">
        <MainButton></MainButton>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
