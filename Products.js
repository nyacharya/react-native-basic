import React from "react";
import { View, Text, Button } from "react-native";

export default ({ history }) => (
  <View>
    {console.log("value inside products page ")}
    <View>
      <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
      <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} />

      <Button title="Search Page" onPress={() => history.push("/search")} />

      <Button title="change page" onPress={() => history.push("/")} />
    </View>
    <Text>This is the products page</Text>
    <Text>Product 1</Text>
    <Text>Product 2</Text>
    <Text>Product 3</Text>
  </View>
);
