import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, Pressable } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SELECT A CLASS</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Classes</Text>
      </View>
      <View style={styles.classList}>
        <Link href="class_stack">
          <Pressable style={styles.classCard}>
            <Text style={styles.classTitle}> 9th Grade Honors Biology </Text>
            <Text style={styles.classDetails}> 1st Period </Text>
            <Text style={styles.classDetails}> 8:15am - 9:30am </Text>
          </Pressable>
        </Link>
      </View>
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
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 18,
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "10%",
  },
  titleText: {
    fontSize: 16,
    color: "#495057",
  },
  classList: {
    flex: 9,
    width: "100%",
    alignItems: "center",
  },
  classCard: {
    width: "80%",
    height: "15%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ADB5BD",
    flexDirection: "column",
    paddingLeft: "5%",
    justifyContent: "flex-start",
  },
  classTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  classDetails: {
    color: "#6C757D",
    fontSize: 13,
  },
});
