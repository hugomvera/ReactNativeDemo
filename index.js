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

// This is the data its in object with id and title
const DATA = [
  { id: "1", title: "todo1" },
  { id: "2", title: "todo2" },
  { id: "3", title: "todo3" },
];

const App = () => {
  //this keeps a count so at first it should be the lenght of the data
  const [count, setCount] = useState(DATA.length + 1);

  //this keeps track of the input text
  //on changetext gets called when it changes
  const [text, onChangeText] = useState("Todo ...");

  //increments the lenght of the count of todo items by 1
  function setCounter() {
    setCount(count + 1);
  }

  return (
    <View style={styles.screen}>
      {/*

      <Text style={styles.container2}>
        is the number of times you have pressd the Button: {count}
      </Text>
      */}
      {/*
          this is the button that will add the todo task*/}
      <Button onPress={setCounter} title="Add Task" color="#841584" />

      {/* text input for the item users will write here */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      {/*this is the flatlist container this is where the data will be rendered
      and every item shown as a list
            data takes in the data
            render item will go though every item and make a text 
            keyextractor will grab the unique id and keep track

        */}

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
