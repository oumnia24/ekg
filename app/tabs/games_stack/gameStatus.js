import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import MainButton from "../../../components/mainButton";
import CheckBox from "expo-checkbox";
import { useEffect, useState } from "react";
import DropdownComponent from "../../../components/dropdownComponent";
import SecondaryButton from "../../../components/secondaryButton";
import generalStyles from "../../../styles/generalStyles";
import MiniButton from "../../../components/miniButton";
import { responseData } from "../../../database/data";
import { useLocalSearchParams } from "expo-router";

export default function gameStatus() {
  //   const [selectedGame, setSelectedGame] = useState(null);
  const params = useLocalSearchParams();
  const { selectedClass } = params;
  // useEffect(() => {
  //   // console.log(selectedClass);
  // }, []);
  const [truth, setTruth] = useState("");
  const [dare, setDare] = useState("");
  const renderItem = ({ item }) => (
    <View style={styles.responseCard}>
      <Text style={generalStyles.name}> {item.name}</Text>
      <Text style={[generalStyles.details, { marginTop: 10 }]}>
        {item.response}
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.totalResponsesView}>
        <Text style={styles.responseNumber}> 5</Text>
        <Text style={styles.responses}> RESPONSES</Text>
      </View>
      <View style={styles.gameInfo}>
        <View style={styles.classInfo}>
          <Text style={generalStyles.details}>Class</Text>
          <Text style={generalStyles.headerSmall}>{selectedClass}</Text>
        </View>
        <View style={styles.timeInfo}>
          <Text style={generalStyles.details}>Time Elapsed</Text>
          <Text style={generalStyles.headerSmall}>5:21</Text>
        </View>
      </View>
      <MainButton
        text="End Game"
        dest="tabs/games_stack/gameSummary"
      ></MainButton>
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
  totalResponsesView: {
    flex: 1.5,
    backgroundColor: "#FFF0EC",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: "5%",
    marginVertical: "5%",
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

    justifyContent: "center",
    marginVertical: "2%",
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
});
