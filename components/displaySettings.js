import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import CheckBox from "expo-checkbox";

const DisplaySettings = () => {
  const [checkedStates, setCheckedStates] = useState(new Array(10).fill(true));
  const handleCheckboxChange = (key) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const Box = ({ id }) => (
    <CheckBox
      value={checkedStates[id]}
      onValueChange={() => handleCheckboxChange(id)}
      color={checkedStates[id] ? "#FF8361" : undefined}
      style={styles.checkbox}
    />
  );

  return (
    <View style={styles.information}>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person" size={24} color="black" />
          <Text> Preferred Name</Text>
        </View>
        <Box id={0} />
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="globe" size={24} color="black" />
          <Text> Language at Home</Text>
        </View>
        <Box id={1} />
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="book" size={24} color="black" />
          <Text> Reading Level</Text>
        </View>
        <Box id={2} />
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="school" size={24} color="black" />
          <Text> Grade Level</Text>
        </View>
        <Box id={3} />
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person" size={24} color="black" />
          <Text> Age</Text>
        </View>
        <Box id={4} />
      </View>

      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person" size={24} color="black" />
          <Text> Pronouns</Text>
        </View>
        <Box id={5} />
      </View>

      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="birthday-cake" size={24} color="black" />
          <Text> Birthday</Text>
        </View>
        <Box id={6} />
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
        <Box id={7} />
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="laptop" size={24} color="black" />
          <Text> Technology Access </Text>
        </View>
        <Box id={8} />
      </View>
      <View style={styles.infoLine}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="activity" size={24} color="black" />
          <Text> Extra-curriculars </Text>
        </View>
        <Box id={9} />
      </View>
    </View>
  );
};

export default DisplaySettings;

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
