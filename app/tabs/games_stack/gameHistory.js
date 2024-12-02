import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import generalStyles from "../../../styles/generalStyles";
import { gameHistoryData } from "../../../database/gameHistoryData";
import { Link } from "expo-router";

export default function gameHistory() {
  const renderItem = ({ item, index }) => (
    <View style={styles.responseCard}>
      <Link
        style={generalStyles.name}
        key={index}
        href="tabs/games_stack/gameSummary"
      >
        {item.class}
      </Link>
      <Text style={[generalStyles.details, { marginTop: 10 }]}>
        {item.period}
      </Text>
      <Text style={generalStyles.details}>{item.date}</Text>
      <Text style={generalStyles.details}>{item.game}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.responsesView}>
        <FlatList
          data={gameHistoryData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
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
    justifyContent: "space-evenly",
  },
});
