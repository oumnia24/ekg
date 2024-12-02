import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import generalStyles from "../../../styles/generalStyles";
import MainButton from "../../../components/mainButton";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import StudentGeneralInformation from "../../../components/studentGeneralInformation";

export default function Student() {
  // const params = useLocalSearchParams();
  const { student } = useLocalSearchParams();
  const studentInfo = JSON.parse(student);
  useEffect(() => {
    console.log("this is student:", JSON.parse(student));
  }, []);
  const data = ["string1", "blablablablbalbal", "hehojroeihroei"];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={generalStyles.header}>
          {studentInfo.first_name} {studentInfo.last_name}
        </Text>
        <Text style={[generalStyles.headerSmall, { marginVertical: "1%" }]}>
          {studentInfo.period} period
        </Text>
      </View>
      <MainButton dest="tabs/games" text="Edit Profile" />
      <View style={styles.summaryView}>
        <View style={styles.titles}>
          <Text style={generalStyles.header}>Summary</Text>
        </View>
        <View style={styles.bulletpointsView}>
          {studentInfo.saved_info &&
            studentInfo.saved_info.map((item, index) => (
              <Text key={index} style={styles.summaryText}>
                • {item}
              </Text>
            ))}
        </View>
      </View>
      <View style={styles.informationView}>
        <View style={styles.titles}>
          <Text style={generalStyles.header}>General Information</Text>
        </View>
        <StudentGeneralInformation
          studentInfo={studentInfo}
        ></StudentGeneralInformation>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "10%",
  },
  summaryView: {
    // flex: 1,
    minHeight: 60,
    width: "80%",
    margin: "10%",
    justifyContent: "space-evenly",
    paddingHorizontal: "5%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
  },
  infoView: {
    flex: 2,
    backgroundColor: "yellow",
  },
  titles: {
    // flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingVertical: "3%",
  },
  bulletpointsView: {
    // flex: 4,
    // backgroundColor: "red",
    justifyContent: "flex-start",
    width: "100%",
    paddingVertical: "2%",
  },
  summaryText: {
    fontSize: 13,
  },
  informationView: {
    flex: 3,
    minHeight: 60,
    width: "80%",
    // margin: "5%",
    paddingHorizontal: "5%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
  },
  information: {
    flex: 6,
    // backgroundColor: "red",
  },
  infoLine: {
    minHeight: 50,
    // backgroundColor: "green",
    marginVertical: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
