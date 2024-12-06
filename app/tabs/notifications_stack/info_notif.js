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
} from "react-native";
import { notificationsData } from "../../../database/notificationsData";

import { useState } from "react";
import generalStyles from "../../../styles/generalStyles";
import { Ionicons } from "@expo/vector-icons";
import db from "../../../database/db";
import { Link } from "expo-router";

const screenWidth = Dimensions.get("window").width;

export default function InfoNotif() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.responsesView}>
        <Text style={generalStyles.informations}>
          If another teacher becomes aware of information that they feel all
          teachers should be aware of regarding a student they can send it as an
          alert. These alerts will appear in the notifications section. You can
          choose to either save that information to the student’s profile or
          dismiss the alert.
        </Text>
        <Text style={generalStyles.informations}>
          {"\n"}
          Feel free to send alerts to other teachers when you feel it is useful
          but please consider how best to balance student privacy with helping
          students learn. Information like a death in a student’s family is one
          example of something that would usually be a good alert. Information
          where students disclose deeply personal information will probably not
          be a good alert because the harm to privacy may be too large.”
        </Text>
      </View>

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
