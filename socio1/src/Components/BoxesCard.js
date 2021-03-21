import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { Button, Title, Paragraph, Checkbox } from "react-native-paper";
import Card from "./Card.js";


const Boxes = (props) => {
  return (
    <View style={styles.container}>
      <Title style={{ marginTop: 20 }}>List Mission</Title>
      <Title style={{ marginTop: 20 }}>Max : {props.user.activeMissions.length}/{props.user.maxActiveMissions}</Title>
      <View style={styles.box}>
        <FlatList
          data={props.user.missionPool}
          renderItem={(data) => (
            <View style={{ width: "100%", alignItems: "center" }}>
              <Card mission={data.item} />
            </View>
          )}
          keyExtractor={(item) => item._id}
          style={{ width: "100%" }}
        />
        <View style={styles.buttoncover}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Confirm
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
  card: {
    width: "80%",
    height: "20%",
    marginTop: 5,
  },
  card1: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    borderRadius: 50,
    width: 50,
  },
  buttoncover: {
    alignItems: "center",
  },
});

export default Boxes;
