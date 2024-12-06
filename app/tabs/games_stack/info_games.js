import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { notificationsData } from "../../../database/notificationsData";

import { useState } from "react";
import generalStyles from "../../../styles/generalStyles";
import { Ionicons } from "@expo/vector-icons";
import db from "../../../database/db";
import { Link } from "expo-router";

const screenWidth = Dimensions.get("window").width;

export default function infoStudent() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.responsesView}>
        <Text style={generalStyles.header}> Truth or Dare</Text>
        <Text style={generalStyles.informations}>
          {"\n"}
          Truth or Dare is a social game in which players choose to either
          answer a question truthfully or perform a challenging or amusing task
          as a dare. In this case, this game is used as a tool to invite but not
          require students to share personal information. As a teacher you can
          enter a question you would like students to answer like “What is
          causing you the most trouble in this class?”. If students do not want
          to answer that question they can complete a different task. These
          tasks will usually be of an academic nature. Teachers can enter a task
          like “Calculate the mean, median and mode of this list: 9, 5, 10, 8,
          2”. This tool is a great way to check in on your students. Student
          answers can be saved to their profiles.
        </Text>
        <Text style={generalStyles.header}> {"\n"} 2 Truths and 1 Lie</Text>
        <Text style={generalStyles.informations}>
          {"\n"}
          Two Truths and a Lie is a social game where each player shares three
          statements about themselves—two true and one false—and others guess
          which statement is the lie. This activity requires no additional input
          from teachers. This is a great tool to improve camaraderie and get to
          know students. Students can choose what information they are
          comfortable sharing. Students’ truths can be saved to their profiles.
        </Text>
        <Text style={generalStyles.header}> {"\n"} Live Activity</Text>
        <Text style={generalStyles.informations}>
          {"\n"}
          While most of the activities in EKG are digital to make getting to
          know students fast and easy, sometimes it is worth customizing a
          non-digital activity. An AI chat bot is provided here to help you
          design activities that will be useful in your classroom. For example,
          if you would like to help students be willing to participate in class,
          the AI chat bot can suggest low risk improvisational activities. You
          can make notes in the app about information gained during the activity
          but no information will be automatically saved.
        </Text>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameStatsView: {
    flex: 2,
    // backgroundColor: "#FFF0EC",
    // backgroundColor: "red",
    width: "75%",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 30,
    // paddingVertical: "10%",
    marginVertical: "5%",
    flexDirection: "row",
  },
  totalResponsesView: {
    // flex: 1,
    width: screenWidth * 0.35,
    borderRadius: 30,
    // paddingVertical: "10%",
    backgroundColor: "#FFF0EC",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  totalQuestionsView: {
    width: screenWidth * 0.35,
    // backgroundColor: "green",
    height: "100%",
    // padding: 10,
    justifyContent: "space-between",
  },
  totalPerQuestion: {
    backgroundColor: "#FFF0EC",
    // flex: 1,
    width: "100%",
    height: "48%",
    borderRadius: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  responsesView: {
    flex: 6,
    // backgroundColor: "red",
    paddingVertical: "5%",
    width: "80%",
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
  responseText: {
    flex: 7,
  },
  dropView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  responseNumber: {
    fontSize: 60,
    color: "#FF8361",
    fontWeight: "bold",
  },
  responses: {
    color: "#6C757D",
    fontSize: 18,
    fontWeight: "bold",
  },
  gameInfo: {
    // backgroundColor: "blue",
    flex: 1,
    width: "80%",
    flexDirection: "row",
  },
  classInfo: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  timeInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
