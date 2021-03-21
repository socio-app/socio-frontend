import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

import Headers from "../Components/HeaderComponents";
import BoxesCard from "../Components/BoxesCard";

import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { dailyReset } from '../redux/actions/dailyReset.js'

export default function MissionList() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const access_token = useSelector(state => state.user.access_token)
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      const lastOnline = new Date(user.lastOnline).getDate()
      const currentDate = new Date().getDate()
      if (lastOnline !== currentDate) {
        console.log('dispatch daily reset')
        dispatch(dailyReset({
          _id: user._id,
          access_token
        }))
      }
    }, [user])
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../src/assets/sociobackkground.jpg")}
        style={{ width: "100%", height: "100%" }}
        resizeMode={"stretch"}
      >
        <Headers />
        <BoxesCard user={user} />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});