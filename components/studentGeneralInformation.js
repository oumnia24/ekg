import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const StudentGeneralInformation = ({ studentInfo }) => {
  return (
    <View style={styles.information}>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person" size={24} color="black" />
          <Text> Preferred Name</Text>
        </View>
        <Text>{studentInfo.preferred_name}</Text>
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="globe" size={24} color="black" />
          <Text> Language at Home</Text>
        </View>
        <Text>{studentInfo.home_language}</Text>
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="book" size={24} color="black" />
          <Text> Reading Level</Text>
        </View>
        <Text>{studentInfo.reading_level}</Text>
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="school" size={24} color="black" />
          <Text> Grade Level</Text>
        </View>
        <Text>{studentInfo.grade_level}</Text>
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person" size={24} color="black" />
          <Text> Age</Text>
        </View>
        <Text>{studentInfo.age}</Text>
      </View>

      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person" size={24} color="black" />
          <Text> Pronouns</Text>
        </View>
        <Text>{studentInfo.pronouns}</Text>
      </View>

      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="birthday-cake" size={24} color="black" />
          <Text> Birthday</Text>
        </View>
        <Text>{studentInfo.pronouns}</Text>
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="book-education"
            size={24}
            color="black"
          />
          <Text> IEP</Text>
        </View>
        <Text>{studentInfo.IEP ? "Yes" : "No"}</Text>
      </View>
      <View style={styles.infoLine}></View>
    </View>
  );
};

export default StudentGeneralInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryView: {
    // flex: 1,
    minHeight: 60,
    width: "80%",
    margin: "5%",
    justifyContent: "space-evenly",
    paddingHorizontal: "5%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
  },
  infoView: {
    flex: 2,
    backgroundColor: "yellow",
  },
  titles: {
    // flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingTop: "2%",
  },
  bulletpointsView: {
    // flex: 4,
    // backgroundColor: "red",
    justifyContent: "flex-start",
    width: "100%",
    paddingVertical: "2%",
  },
  summaryText: {
    fontSize: 13,
  },
  informationView: {
    flex: 3,
    minHeight: 60,
    width: "80%",
    margin: "5%",
    paddingHorizontal: "5%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
  },
  information: {
    flex: 6,
    // backgroundColor: "red",
    // width: "80%",
  },
  infoLine: {
    minHeight: 30,
    // backgroundColor: "green",
    marginVertical: "1%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
