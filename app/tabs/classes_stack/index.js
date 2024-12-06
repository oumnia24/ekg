import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import generalStyles from "../../../styles/generalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useEffect } from "react";
import db from "../../../database/db";
import { useRouter } from "expo-router";

export default function App() {
  const [classes, setClasses] = useState([]);
  const fetchClasses = async () => {
    const classes_search = await db.from("classes").select();
    setClasses(classes_search.data);
  };
  useEffect(() => {
    fetchClasses();
  }, []);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={generalStyles.header}> SELECT A CLASS </Text>
        <Pressable
          onPress={() => router.push("/tabs/classes_stack/info_home")}
          style={{ marginLeft: 10 }} // Add spacing between title and icon
        >
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="orange"
          />
        </Pressable>
      </View>
      <View style={generalStyles.listTitle}>
        <Text style={generalStyles.headerSmall}>Classes</Text>
      </View>
      <View style={generalStyles.list}>
        <FlatList
          data={classes}
          renderItem={({ item }) => (
            <View style={styles.classCard}>
              <Link
                style={generalStyles.name}
                href={{
                  pathname: "tabs/classes_stack/dashboard",
                  params: {
                    class_name: item.class_name,
                    notifications: item.notifications,
                    period: item.period,
                    student_ids: item.student_ids,
                    time_range: item.time_range,
                  },
                }}
              >
                {item.class_name}
              </Link>
              <Text style={generalStyles.details}> {item.period} period </Text>
              <Text style={generalStyles.details}> {item.time_range} </Text>
            </View>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "10%",
  },
  titleText: {
    fontSize: 16,
    color: "#495057",
  },
  classList: {
    flex: 9,
    width: "100%",
    alignItems: "center",
    // backgroundColor: "red",
  },
  classCard: {
    // backgroundColor: "green",
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ADB5BD",
    flexDirection: "column",
    paddingLeft: "5%",
    justifyContent: "space-evenly",
    marginVertical: "5%",
  },
  searchView: {
    position: "absolute",
    right: 0,
  },
});
