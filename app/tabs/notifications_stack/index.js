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
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Dismiss</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={[generalStyles.details, { fontSize: 14, textAlign: "center" }]}
        >
          Other teachers have sent you the following alerts:
        </Text>
      </View>
      <View style={styles.responsesView}>
        <Text style={generalStyles.headerSmall}> Today</Text>
        <FlatList
          data={notificationsData}
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
  header: {
    flex: 1,
    // backgroundColor: "red",
    width: "70%",
    alignItems: "center",
    // justifyContent: "center",
  },

  responsesView: {
    flex: 10,
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
