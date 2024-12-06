import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import MainButton from "../../../components/mainButton";
import generalStyles from "../../../styles/generalStyles";
import StudentCard from "../../../components/studentCard";
import { useEffect, useState } from "react";
// import generalStyles from "../../../styles/generalStyles";
import { useLocalSearchParams } from "expo-router";
import db from "../../../database/db";
import { notificationsData } from "../../../database/notificationsData";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

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
  const [expandedCards, setExpandedCards] = useState({});
  // Toggle the expanded state of a response card
  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const saveInfo = async (id, response) => {
    try {
      const studentInfo = await db
        .from("students")
        .select("saved_info")
        .eq("id", id)
        .single();

      const updatedInfo = studentInfo.data.saved_info
        ? [...studentInfo.data.saved_info, response]
        : [response];
      // console.log("updated info:", updatedInfo);
      const error = await db
        .from("students")
        .update({ saved_info: updatedInfo })
        .eq("id", id);
      console.log(error);
      //   if (updateError) throw updateError;
      alert("Info saved successfully!");
    } catch (err) {
      console.log("got this error while trying to save", err);
    }
  };
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.responseCard}>
        <View style={styles.responseText}>
          <Link
            style={generalStyles.name}
            href={{
              pathname: "tabs/classes_stack/student",
              params: {
                name: item.name,
                id: item.id,
              },
            }}
          >
            {item.name}
          </Link>
          {/* <Text style={generalStyles.name}> {item.name}</Text> */}
          <Text style={[generalStyles.details, { marginTop: 10 }]}>
            {item.response}
          </Text>
        </View>
        <View style={styles.dropView}>
          <Pressable onPress={() => toggleExpand(item.id)}>
            <Ionicons
              name={expandedCards[item.id] ? "chevron-up" : "chevron-down"}
              size={24}
              color="gray"
            />
          </Pressable>
        </View>
      </View>
      {expandedCards[item.id] && (
        <View style={styles.buttonRow}>
          <Pressable
            style={styles.button}
            onPress={() => saveInfo(parseInt(item.id), item.response)}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Dismiss</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={generalStyles.header}>{class_name}</Text>
        <Text style={generalStyles.details}>{period} period</Text>
      </View>

      <MainButton dest="tabs/games" text="START A GAME"></MainButton>
      <View style={styles.notifications}>
        <Text style={generalStyles.header}>Notifications</Text>
        <FlatList
          data={notificationsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
  },
  notifications: {
    height: "40%",
    justifyContent: "center",
    marginVertical: "10%",
    width: "80%",
    // backgroundColor: "blue",
  },
  studentList: {
    flex: 7,
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
  responseCard: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ADB5BD",
    paddingLeft: "5%",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  responseText: {
    flex: 7,
  },
  dropView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    height: "100%",
    padding: 10,
    marginHorizontal: screenWidth * 0.01,
    borderRadius: 20,
    width: screenWidth * 0.2,
    // justifyContent: "center",
    alignItems: "center",
  },
});
