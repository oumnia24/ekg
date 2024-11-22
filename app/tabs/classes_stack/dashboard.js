import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import MainButton from "../../../components/mainButton";
import generalStyles from "../../../styles/generalStyles";

export default function ClassDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={generalStyles.header}>9th Grade Honors Biology</Text>
      </View>
      <MainButton dest="tabs/games" text="START A GAME"></MainButton>
      <View style={styles.notifications}>
        <Text style={generalStyles.header}>Notifications</Text>
      </View>
      <View style={styles.studentList}>
        <Text style={generalStyles.header}>Students</Text>
        <View style={styles.studentCard}>
          <Link
            style={styles.studentCardLink}
            href="tabs/classes_stack/student"
          >
            <Text>Christina Joo</Text>
          </Link>
        </View>
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
  },
  header: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "green",
  },
  startGame: {
    flex: 1,
    // backgroundColor: "orange",
  },
  notifications: {
    flex: 2,
    // backgroundColor: "green",
    justifyContent: "center",

    width: "80%",
  },
  studentList: {
    flex: 7,
    // backgroundColor: "orange",
    width: "80%",
  },
  studentCard: {
    width: "100%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
    height: "15%",
    marginVertical: "5%",
    justifyContent: "center",
  },
});
