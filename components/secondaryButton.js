import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Link } from "expo-router";

export default function SecondaryButton({
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

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#FF8361",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    borderColor: "ADB5BD",
    borderWidth: 1,
    width: screenWidth * 0.5,
    height: screenHeight * 0.07,
  },
  text: {
    color: "#FF8361",
    fontSize: 14,
    fontWeight: "bold",
  },
});
