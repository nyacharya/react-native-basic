import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});

export default ({ history }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, backgroundColor: "powderblue" }}>
      <Button title="Search Page" onPress={() => history.push("/search")} />
      <Button title="change page" onPress={() => history.push("/products")} />
      <Text>This is the home page</Text>
      <Text style={styles.bigBlue}> This is blue color</Text>
    </View>
    <View style={{ flex: 2, backgroundColor: "skyblue" }} />
    <View style={{ flex: 3, backgroundColor: "steelblue" }} />
  </View>
);
