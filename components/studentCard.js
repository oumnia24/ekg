import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function StudentCard({
  // TODO: Implement the functionality to navigate to the details/comments page when
  // this prop is true.
  first_name,
  last_name,
  grade,
}) {
  return (
    <View style={styles.studentCard}>
      <Link
        style={styles.studentName}
        href={{
          pathname: "tabs/classes_stack/student",
          params: {
            first_name: first_name,
            last_name: last_name,
          },
        }}
      >
        {first_name} {last_name}
      </Link>

      {/*  href={{
          // pathname: "tabs/feed/details",
          pathname: pathname,
          params: {
            id: id,
            username: username,
            timestamp: timestamp,
            text: text,
            score: score,
            commentCount: commentCount,
            vote: vote,
          },
        }}
        asChild={true}
        style={styles.content}
      > */}
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
  studentCard: {
    width: "100%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
    // height: "15%",
    height: 75,
    marginVertical: "5%",
    justifyContent: "center",
    paddingLeft: "5%",
  },
  studentName: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
