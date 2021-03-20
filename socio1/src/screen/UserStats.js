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

import Header from "../Components/HeaderComponents";

export default function UserStats() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../src/assets/sociobackkground.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"stretch"}
        >
          <Header />
        </ImageBackground>
      </View>
    );
}

const { width } = Dimensions.get("window");
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});
