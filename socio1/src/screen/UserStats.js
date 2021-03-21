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
import DonutChart from "../Components/donutChart";
export default function UserStats() {
  
    const chart_wh = 250;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];

 
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../src/assets/sociobackkground.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"stretch"}
        >
          <Header />
          <DonutChart />
          {/* <Text>HAIII INI DI USE STATS</Text> */}
        </ImageBackground>
      </View>
    );
}

const { width } = Dimensions.get("window");
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
