import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import MainButton from "../../../components/mainButton";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import DropdownComponent from "../../../components/dropdownComponent";
import SecondaryButton from "../../../components/secondaryButton";
import generalStyles from "../../../styles/generalStyles";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);
  const nextPage = {
    truthOrDare: "tabs/games_stack/truthOrDare",
    twoTruthsAndALie: "tabs/games_stack/gameStatus",
    customActivity: "tabs/games_stack/chatAI",
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={generalStyles.header}>GAMES</Text>
      </View> */}
      <View style={styles.gamesList}>
        <View style={styles.gameCard}>
          <View style={styles.gameDescriptionView}>
            <Text style={generalStyles.name}>Truth or Dare</Text>
            <Text style={generalStyles.details}>
              Connect with your students in a fun game of truth or dare.
            </Text>
          </View>
          <View style={styles.checkboxView}>
            <CheckBox
              value={selectedGame === "truthOrDare"}
              onValueChange={() =>
                setSelectedGame(
                  selectedGame === "truthOrDare" ? null : "truthOrDare"
                )
              }
              color={selectedGame === "truthOrDare" ? "#FF8361" : undefined}
              style={styles.checkbox}
            />
          </View>
        </View>
        <View style={styles.gameCard}>
          <View style={styles.gameDescriptionView}>
            <Text style={generalStyles.name}>Two Truths and a Lie</Text>
            <Text style={generalStyles.details}>
              Connect with your students in a fun game of two truths and a lie.
            </Text>
          </View>
          <View style={styles.checkboxView}>
            <CheckBox
              value={selectedGame === "twoTruthsAndALie"}
              onValueChange={() =>
                setSelectedGame(
                  selectedGame === "twoTruthsAndALie"
                    ? null
                    : "twoTruthsAndALie"
                )
              }
              color={
                selectedGame === "twoTruthsAndALie" ? "#FF8361" : undefined
              }
              style={styles.checkbox}
            />
          </View>
        </View>
        <View style={styles.gameCard}>
          <View style={styles.gameDescriptionView}>
            <Text style={generalStyles.name}>Custom Activity</Text>
            <Text style={generalStyles.details}>
              Use Generative AI to create a tech free activity for your
              students.
            </Text>
          </View>
          <View style={styles.checkboxView}>
            <CheckBox
              value={selectedGame === "customActivity"}
              onValueChange={() =>
                setSelectedGame(
                  selectedGame === "customActivity" ? null : "customActivity"
                )
              }
              color={selectedGame === "customActivity" ? "#FF8361" : undefined}
              style={styles.checkbox}
            />
          </View>
        </View>
      </View>
      <View style={styles.classSelect}>
        <Text style={generalStyles.headerSmall}>Current class</Text>
        <DropdownComponent></DropdownComponent>
      </View>
      <View style={styles.gameButtons}>
        <MainButton
          text="Create Game"
          dest={selectedGame ? nextPage[selectedGame] : "tabs/games_stack"}
        ></MainButton>
        <SecondaryButton
          dest="tabs/games_stack/gameHistory"
          text="View Game History"
        ></SecondaryButton>
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
  gamesList: {
    flex: 3,
    width: "80%",
    justifyContent: "center",
    paddingVertical: "10%",
  },
  classSelect: {
    flex: 1,
    // backgroundColor: "green",
    width: "70%",
    // justifyContent: "center",
    alignItems: "center",
  },
  gameButtons: {
    flex: 1.5,
    // backgroundColor: "red",
    justifyContent: "space-around",
  },
  gameCard: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ADB5BD",
    paddingLeft: "5%",
    justifyContent: "space-between",
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
