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
import MainButton from "../../../components/mainButton";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import DropdownComponent from "../../../components/dropdownComponent";
import SecondaryButton from "../../../components/secondaryButton";
import generalStyles from "../../../styles/generalStyles";
import MiniButton from "../../../components/miniButton";
import { responseData } from "../../../database/data";
import { Ionicons } from "@expo/vector-icons";
import db from "../../../database/db";
import { Link } from "expo-router";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function gameStatus() {
  //   const [selectedGame, setSelectedGame] = useState(null);

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
              pathname: "tabs/games_stack/student",
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
          <Pressable
            style={styles.button}
            onPress={() => {
              alert("Other teachers have been notified!");
            }}
          >
            <Text style={styles.buttonText}>Alert</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Dismiss</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameStatsView}>
        <View style={styles.totalResponsesView}>
          <Text style={styles.responseNumber}> 10</Text>
          <Text style={styles.responses}> RESPONSES</Text>
        </View>
        <View style={styles.totalQuestionsView}>
          <View style={styles.totalPerQuestion}>
            <Text style={[styles.responseNumber, { fontSize: 30 }]}>9</Text>
            <Text style={styles.responses}> TRUTH</Text>
          </View>
          <View style={styles.totalPerQuestion}>
            <Text style={[styles.responseNumber, { fontSize: 30 }]}>1</Text>
            <Text style={styles.responses}> DARE</Text>
          </View>
          {/* <Text style={styles.responseNumber}> 10</Text>
          <Text style={styles.responses}> Responses</Text> */}
        </View>
      </View>

      <View style={styles.gameInfo}>
        <View style={styles.classInfo}>
          <Text style={generalStyles.details}>Class</Text>
          <Text style={generalStyles.headerSmall}>1st Period</Text>
        </View>
        <View style={styles.timeInfo}>
          <Text style={generalStyles.details}>Time Elapsed</Text>
          <Text style={generalStyles.headerSmall}>8:01</Text>
        </View>
      </View>
      <View style={styles.responsesView}>
        <Text style={generalStyles.headerSmall}> Responses</Text>
        <FlatList
          data={responseData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
    // paddingVertical: "2%",
    // backgroundColor: "red",
    // height: "30%",
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
