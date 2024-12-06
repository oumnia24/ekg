import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import generalStyles from "../../../styles/generalStyles";
import MainButton from "../../../components/mainButton";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useState } from "react";
import { fetchResponse } from "../../../gemini/chatWithGemini";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ChatAI() {
  // const params = useLocalSearchParams();
  //   const { name, id } = useLocalSearchParams();
  // useEffect(() => {
  //   console.log(first_name);
  // }, []);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    // { text: "blablabla", sender: "user" },
  ]);

  const handleSend = async () => {
    // if (!message.trim()) return;

    // Set loading state while waiting for the response
    // setIsLoading(true);

    try {
      // Add the user's message to the chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);
      //Get response from Gemini:
      const geminiResponse = await fetchResponse(message);
      console.log("this is what gemini said:", geminiResponse);
      // Add the Gemini's response to the chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: geminiResponse, sender: "AI" },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
    setMessage("");
  };

  // useEffect(() => {
  //   handleSend();
  // }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      {/* <View style={styles.container}> */}
      <ScrollView style={styles.chatView}>
        {messages.map((msg, index) => (
          <View
            style={[
              msg.sender === "user" ? styles.userMessage : styles.AIMessage,
            ]}
            key={index}
          >
            <Text style={styles.message}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.sendMessageView}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Ask AI for help to design your game!"
          multiline
        ></TextInput>
        <Pressable style={styles.sendButton} onPress={handleSend}>
          <FontAwesome name="send" size={24} color="#FF8361" />
        </Pressable>
      </View>
      {/* <Text>test</Text> */}

      <StatusBar style="auto" />
      {/* </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chatView: {
    // backgroundColor: "red",
    width: "95%",
    // height: 700,
  },
  sendMessageView: {
    flexDirection: "row",
    height: "7.5%",
    marginVertical: "2%",
  },
  input: {
    width: "80%",
    height: "100%",
    borderColor: "#ADB5BD",
    borderWidth: 1,
    borderRadius: 10,
  },
  sendButton: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    paddingHorizontal: "2%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#FF8361",
    borderRadius: 10,
    padding: "5%",
    marginVertical: "2%",
  },
  AIMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#FF8361",
    borderRadius: 10,
    padding: "5%",
    marginVertical: "2%",
  },
  message: {
    color: "white",
  },
});
