import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import generalStyles from "../../../styles/generalStyles";
import MainButton from "../../../components/mainButton";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function Student({ name }) {
  // const params = useLocalSearchParams();
  const { first_name, last_name } = useLocalSearchParams();
  // useEffect(() => {
  //   console.log(first_name);
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={generalStyles.header}>
          {first_name} {last_name}
          {/* Oumnia */}
        </Text>
      </View>
      <MainButton dest="tabs/games" text="Edit Profile" />
      <View style={styles.summaryView}>
        <Text style={generalStyles.header}>Summary</Text>
        <Text>She found homework difficult.</Text>
      </View>
      <View style={styles.summaryView}>
        <Text style={generalStyles.header}>Information</Text>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  summaryView: {
    flex: 1,
    // backgroundColor: "green",
    width: "80%",
    margin: "5%",
    justifyContent: "space-evenly",
    borderWidth: 0.8,
    borderColor: "#212529",
    borderRadius: 10,
    paddingHorizontal: "5%",
  },
  infoView: {
    flex: 2,
    backgroundColor: "yellow",
  },
});
