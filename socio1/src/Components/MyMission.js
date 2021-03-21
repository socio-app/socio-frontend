import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Button, Title } from "react-native-paper";
import Card from "./Card";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from 'react-redux'

export default function MyMission() {
  const user = useSelector(state => state.user.user)

  return (
    <View style={styles.container}>
      <Title>Your Mission</Title>
      <View style={styles.box}>
        <FlatList
          data={user.activeMissions}
          renderItem={(data) => (
            <View style={styles.inner}>
              <Card missions={data.item} />
            </View>
          )}
          keyExtractor={(item) => item}
          style={{ width: "100%" }}
        />

        <View style={styles.buttoncover}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <FontAwesome name="plus" size={30} color={"#e45826"} />
          </Button>
        </View>
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
