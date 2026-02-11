import { registerRootComponent } from "expo";
import React, { useState } from "react";
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

// FIX: Ensure IDs are strings for the keyExtractor
const DATA = [
  { id: "1", title: "todo1" },
  { id: "2", title: "todo2" },
  { id: "3", title: "todo3" },
];

const App = () => {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useState("dummy text");

  function setCounter() {
    setCount(count + 1);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.container1}> Hello World </Text>
      <Text style={styles.container2}>
        Tis the number of times you have pressd the Button: {count}
      </Text>
      <Button onPress={setCounter} title="Learn More" color="#841584" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Text style={styles.itemText}>{item.title}</Text>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50, // Added space for status bar
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
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  listContainer: {
    height: 200, // Giving the list a fixed height helps on Web
    marginTop: 20,
  },
  itemText: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
  },
});

registerRootComponent(App);
