import React from "react";
import { View, StyleSheet, Button, Text, Image, FlatList } from "react-native";
import ceklis from "../assets/ceklis.png";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.mission}</Text>
      <View style={styles.checkbox}>
        <Image source={ceklis} style={{ width: 20, height: 20 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    minHeight: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkbox: {
    borderWidth: 1,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
