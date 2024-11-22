import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, Pressable } from "react-native";
import { Link } from "expo-router";

const generalStyles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSmall: {
    fontSize: 16,
    color: "#495057",
  },
  listTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "10%",
    // backgroundColor: "yellow",
  },
  list: {
    flex: 9,
    width: "80%",
    // alignItems: "center",
    // backgroundColor: "red",
  },
});

export default generalStyles;
