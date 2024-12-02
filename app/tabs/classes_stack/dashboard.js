import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import MainButton from "../../../components/mainButton";
import generalStyles from "../../../styles/generalStyles";
import StudentCard from "../../../components/studentCard";
import { useEffect, useState } from "react";
// import generalStyles from "../../../styles/generalStyles";
import { useLocalSearchParams } from "expo-router";
import db from "../../../database/db";

export default function ClassDashboard() {
  let { class_name, notifications, period, student_ids, time_range } =
    useLocalSearchParams();
  student_ids = student_ids.split(",");
  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    try {
      student_ids = student_ids.map((id) => parseInt(id, 10));
      const students_search = await db
        .from("students")
        .select()
        .in("id", student_ids);
      setStudents(students_search.data);
    } catch (err) {
      console.log("got this error", err);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={generalStyles.header}>{class_name}</Text>
        <Text style={generalStyles.details}>{period} period</Text>
      </View>

      <MainButton dest="tabs/games" text="START A GAME"></MainButton>
      <View style={styles.notifications}>
        <Text style={generalStyles.header}>Notifications</Text>
      </View>
      <View style={generalStyles.list}>
        <Text style={generalStyles.header}>Students</Text>
        <FlatList
          data={students}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <StudentCard
              name={`${item.first_name} ${item.last_name}`}
              grade={item.class_name}
              student={item}
            ></StudentCard>
          )}
        ></FlatList>
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
    alignItems: "center",
    marginVertical: "5%",
  },
  startGame: {
    flex: 1,
    // paddingVertical: "5%",
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
