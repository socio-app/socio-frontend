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

export default class MissionList extends React.Component {
  render() {
    return (
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
    );
  }
}

const { width } = Dimensions.get("window");
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});
