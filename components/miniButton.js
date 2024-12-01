import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Link } from "expo-router";

export default function MiniButton({
  // TODO: Implement the functionality to navigate to the details/comments page when
  // this prop is true.
  text,
  dest,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
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
    backgroundColor: "#FF8361",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: screenWidth * 0.3,
    height: screenHeight * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
