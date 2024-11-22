import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import generalStyles from "../../../styles/generalStyles";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import db from "../../../database/db";

export default function Notifications() {
  const [studentName, setStudentName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //Searches for student's name in the database:
  const fetchSearch = async () => {
    console.log(studentName);
    const student_entry_match = await db
      .from("students")
      .select()
      .or(`first_name.eq.${studentName},last_name.eq.${studentName}`);
    console.log("data:", student_entry_match.data);
    setSearchResults(student_entry_match.data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={generalStyles.header}>ALL STUDENTS</Text>
      </View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchBar}
          placeholder="Enter Student Name"
          placeholderTextColor="grey"
          onChangeText={setStudentName}
        />
        <Pressable onPress={fetchSearch}>
          <Ionicons name="search" size={32} color="black"></Ionicons>
        </Pressable>
      </View>
      <View style={generalStyles.listTitle}>
        <Text style={generalStyles.headerSmall}>Students</Text>
      </View>
      {/* <View style={generalStyles.list}> */}
      {/* <Text>Oumnia Chellah</Text>
        <Text>Jessica Yauney</Text>
        <Text>Matthew Guck</Text>
        <Text>Christina Joo</Text> */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View>
            <Text>{item.first_name}</Text>
            <Text>{item.last_name}</Text>
          </View>
        )}
        contentContainerStyle={styles.posts}
        style={styles.postsContainer}
      />
      {/* </View> */}

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
    justifyContent: "center",
    alignItems: "center",
  },
  searchView: {
    flex: 1,
    // backgroundColor: "red",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "10%",
    // backgroundColor: "yellow",
  },
  classList: {
    flex: 9,
    width: "100%",
    alignItems: "center",
    // backgroundColor: "red",
  },
  searchBar: {
    width: "80%",
    height: "70%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    color: "black",
    padding: 10,
  },
  posts: {
    gap: 8,
  },
  postsContainer: {
    width: "100%",
  },
});
