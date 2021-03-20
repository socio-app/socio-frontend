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
import { Card, Title, Paragraph, Button } from "react-native-paper";
import Boxes from "../Components/Boxes";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>HAII INI DI HOME PAGE</Text> */}
        <ImageBackground
          source={require("../../src/assets/—Pngtree—flat cartoon city building landscape_1017197.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"stretch"}
        >
          <Headers />

          <Boxes></Boxes>
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
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutside: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
});
