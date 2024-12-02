import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import generalStyles from "../styles/generalStyles";

export default function StudentCard({
  // TODO: Implement the functionality to navigate to the details/comments page when
  // this prop is true.
  name,
  grade,
  student,
}) {
  // const { first_name, last_name } = student;
  return (
    <View style={styles.studentCard}>
      <Link
        style={styles.studentName}
        href={{
          pathname: "tabs/classes_stack/student",
          params: {
            student: JSON.stringify(student),
          },
        }}
      >
        {name}
      </Link>
      <Text style={generalStyles.details}> {grade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  studentCard: {
    width: "100%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
    // height: "15%",
    height: 75,
    marginVertical: "5%",
    justifyContent: "space-evenly",
    paddingLeft: "5%",
  },
  studentName: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
