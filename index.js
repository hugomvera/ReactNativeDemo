import { registerRootComponent } from "expo";
import React from "react";
import { Text, StyleSheet, View, Button, Alert, Platform } from "react-native";

let globalCounter = 0;

function setCounter() {
  globalCounter = 1 + globalCounter;
  showAlert(globalCounter);
}

function showAlert(message) {
  if (Platform.OS === "web") {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

const App = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.container1}> Hello World </Text>
      <Text style={styles.container2}>
        {" "}
        This is the number of times you have pressd the Button{globalCounter}
      </Text>
      <Button
        onPress={setCounter()}
        title="Learn More"
        color="#841584"
        //    accessibilityLabel="Learn more about this purple button"
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
