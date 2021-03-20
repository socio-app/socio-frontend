import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  Platform,
} from "react-native";

import Headers from "../Components/HeaderComponents";
import BoxesCard from "../Components/BoxesCard";

export default function MissionList() {
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require("../../src/assets/sociobackkground.jpg")}
        style={{ width: "100%", height: "100%" }}
        resizeMode={"stretch"}
      >
        <Headers />
        <BoxesCard />
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