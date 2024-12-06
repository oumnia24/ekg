import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { Link } from "expo-router";

export default function MainButton({
  // TODO: Implement the functionality to navigate to the details/comments page when
  // this prop is true.
  text,
  dest,
  onPress,
  params,
}) {
  return (
    // <Pressable style={styles.container}>
    //   <Link style={styles.text} href={dest}>
    //     {text}
    //   </Link>
    //   {/* <Text>{text}</Text> */}
    //   {/* <Text style={styles.text}>{text}</Text> */}
    // </Pressable>

    <Link
      href={{
        pathname: dest,
        params: params,
      }}
      asChild
    >
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}> {text} </Text>
      </Pressable>
    </Link>
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
    width: screenWidth * 0.5,
    height: screenHeight * 0.07,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
