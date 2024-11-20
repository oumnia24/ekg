import { StyleSheet, Text, View } from "react-native";

export default function MainButton({
  // TODO: Implement the functionality to navigate to the details/comments page when
  // this prop is true.
  text,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>START A GAME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8361",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: "50%",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
