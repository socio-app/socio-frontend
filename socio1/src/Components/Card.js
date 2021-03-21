import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import ceklis from "../assets/ceklis.png";

import { useSelector, useDispatch } from 'react-redux'

const Card = (props) => {
  const handlePickMission = () => {
    props.handlePickMission(props.mission._id)
  }
  return (
    <View style={styles.container}>
      <Text>{props.mission.title}</Text>
      <TouchableOpacity onPress={handlePickMission} style={styles.checkbox}>
        {
          props.mission.isTaken ?
            <Image source={ceklis} style={{ width: 20, height: 20 }} />
            :
            null
        }
      </TouchableOpacity>
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
