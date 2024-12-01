import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import MainButton from "../../../components/mainButton";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import DropdownComponent from "../../../components/dropdownComponent";
import SecondaryButton from "../../../components/secondaryButton";
import generalStyles from "../../../styles/generalStyles";
import MiniButton from "../../../components/miniButton";

export default function TruthOrDare() {
  //   const [selectedGame, setSelectedGame] = useState(null);
  const [truth, setTruth] = useState("");
  const [dare, setDare] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.promptView}>
        <Text style={generalStyles.headerSmall}>Truth</Text>
        <TextInput
          style={styles.gameCard}
          onChangeText={setTruth}
          value={truth}
          placeholder="Ask your students a Truth (e.g. “What’s a secret hobby of yours?”)"
          multiline
        />
        <Text style={generalStyles.headerSmall}>Dare</Text>
        <TextInput
          style={styles.gameCard}
          onChangeText={setDare}
          value={dare}
          placeholder="Ask your students an academic Dare (e.g. “Factor (x + 4)³ - 9x - 36.”)"
          multiline
        />
        <MiniButton
          dest="tabs/games_stack"
          text="AI Help"
          style={{ alignSelf: "center", marginVertical: "5%" }}
        ></MiniButton>
      </View>

      <View style={styles.gameButtons}>
        <MainButton text="Start Game" dest="tabs/games"></MainButton>
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
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  promptView: {
    flex: 3,
    width: "80%",
    paddingVertical: "10%",
    // backgroundColor: "red",
  },
  gameButtons: {
    flex: 1.5,
    // backgroundColor: "red",
    justifyContent: "space-around",
  },
  gameCard: {
    flexDirection: "row",
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ADB5BD",
    paddingLeft: "5%",
    // justifyContent: "space-between",
    marginVertical: "1%",
  },
  gameDescriptionView: {
    flex: 4,
    justifyContent: "space-evenly",
  },
  checkboxView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 10,
    borderColor: "#ADB5BD",
    color: "#FF8361",
  },
});
