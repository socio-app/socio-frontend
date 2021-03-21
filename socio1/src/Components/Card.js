import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from "react-native";
import ceklis from "../assets/ceklis.png";

import { useSelector, useDispatch } from 'react-redux'

const Card = (props) => {
  const user = useSelector(state => state.user.user)
  
  const updateMission = () => {

  }
  const showAlert = () =>
    Alert.alert(
      "Confirmation on your Mission",
      "Sudah selesaikah ?",
      [
        {
          text: "Cancel",
          // onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Ok",
          // onPress: () => Alert.alert("OK bro Pressed"),
        },
      ],
      // {
      //   cancelable: true,
      //   onDismiss: () =>
      //     Alert.alert(
      //       "This alert was dismissed by tapping outside of the alert dialog."
      //     ),
      // }
  );
  const handlePickMission = () => {
    // props.handlePickMission(props.mission._id)
    if (props.type !== "Home") {
      props.handlePickMission(props.mission._id)
    } else {
      showAlert()
    }
  }
  return (
    <TouchableOpacity onPress={handlePickMission} style={styles.container}>

      <Text>{props.mission.title}</Text>
      {
        props.type !== "Home" ?
          <View style={styles.checkbox}>
          {
            props.mission.isTaken ?
              <Image source={ceklis} style={{ width: 20, height: 20 }} />
              :
              null
          }
        </View> : null
      } 

    </TouchableOpacity>
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
