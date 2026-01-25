import { registerRootComponent } from "expo";
import { React, useState } from "react";
import {
  FlatList,
  TextInput,
  Text,
  StyleSheet,
  View,
  Button,
  Alert,
  Platform,
} from "react-native";

const DATA = [
  {
    id: 1,
    title: "First Todo",
  },
  { id: 2, title: "second Todo" },
  { id: 3, title: "Third Todo" },
];

function showAlert(message) {
  if (Platform.OS === "web") {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

const App = () => {
  const [count, setCount] = useState(0);

  const [text, onChangeText] = useState("");

  function setCounter() {
    setCount(count + 1);
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.container1}> Hello World </Text>
      <Text style={styles.container2}>
        {" "}
        Tis the number of times you have pressd the Button{text}
      </Text>
      <Button
        onPress={setCounter}
        title="Learn More"
        color="#841584"
        //    accessibilityLabel="Learn more about this purple button"
      />

      <TextInput
        style={styles.container1}
        onChangeText={onChangeText}
        value={text}
      />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text> {item.title} </Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container1: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 18,
  },
  container2: {
    fontWeight: "bold",
    color: "#007AFF",
    fontSize: 20,
    marginTop: 10,
  },
});

// THIS IS THE KEY LINE:
// This tells Expo that "App" is the root component of your application.
registerRootComponent(App);
