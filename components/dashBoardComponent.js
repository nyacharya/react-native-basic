// DashboardComponent.js

import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

export default class DashBoardComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Dashboard Page</Text>

        <Button
          title="Back to Search Page"
          onPress={() => this.props.history.push("/search")}
        />
        {/* <Image
          source={{ uri: this.props.userInfo.avatar_url }}
          style={styles.image}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  }
});
