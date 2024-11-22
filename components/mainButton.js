import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function MainButton({
  // TODO: Implement the functionality to navigate to the details/comments page when
  // this prop is true.
  text,
  dest,
}) {
  return (
    <View style={styles.container}>
      <Link style={styles.text} href={dest}>
        {text}
      </Link>
      {/* <Text style={styles.text}>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#FF8361",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: "50%",
    height: "7%",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
