import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, Pressable } from "react-native";
import { Link } from "expo-router";
import generalStyles from "../../../styles/generalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={generalStyles.header}>SELECT A CLASS</Text>
        </View>
        <View style={styles.searchView}>
          <Link href="tabs/classes_stack/search">
            <Ionicons name="search" size={24} color="orange" />
          </Link>
        </View>
      </View>
      <View style={generalStyles.listTitle}>
        <Text style={generalStyles.headerSmall}>Classes</Text>
      </View>
      <View style={generalStyles.list}>
        <Link style={styles.classCard} href="tabs/classes_stack/dashboard">
          <Text style={styles.classTitle}> 9th Grade Honors Biology </Text>
          <Text style={styles.classDetails}> 1st Period </Text>
          <Text style={styles.classDetails}> 8:15am - 9:30am </Text>
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
    width: "80%",
    flexDirection: "row",
    // backgroundColor: "red",
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
    // backgroundColor: "red",
  },
  classCard: {
    // backgroundColor: "green",
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
  searchView: {
    position: "absolute",
    right: 0,
  },
});
