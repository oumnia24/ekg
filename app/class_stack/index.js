import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import MainButton from "../../components/mainButton";

export default function ClassDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>9th Grade Honors Biology</Text>
      </View>
      <MainButton></MainButton>
      <View style={styles.notifications}>
        <Text style={styles.notificationsText}>Notifications</Text>
      </View>
      <View style={styles.studentList}>
        <Text>Students</Text>

        <Link style={styles.studentCard} href="class_stack/student">
          <Text>Christina Joo</Text>
          <Text>9th Grade</Text>
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
  },
  header: {
    flex: 1,
    // backgroundColor: "green",
  },
  startGame: {
    flex: 1,
    // backgroundColor: "orange",
  },
  notifications: {
    flex: 2,
    // backgroundColor: "green",
  },
  studentList: {
    flex: 7,
    // backgroundColor: "orange",
    width: "100%",
  },
  studentCard: {
    width: "100%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    height: "15%",
    marginVertical: "5%",
  },
});
