import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Button, Title } from "react-native-paper";
import Card from "./Card";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function Congratulation() {
  const [missions, setMissions] = useState([
    "mission 1",
    "mission2",
    "mission 3",
  ]);
  return (
    <View style={styles.container}>
      <Title style={{ fontFamily: "Roboto" }}>
        Congratulation You have clear your mission
      </Title>
      <View style={styles.box}>
        <FlatList
          data={missions}
          renderItem={(data) => (
            <View style={styles.inner}>
              <Card />
            </View>
          )}
          keyExtractor={(item) => item}
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 5,
    marginTop: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "100%",
    height: "80%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#7fdbda",

    justifyContent: "center",
    marginTop: 50,
    borderRadius: 30,
    width: 50,
  },
  buttoncover: {
    alignItems: "center",
  },
});
