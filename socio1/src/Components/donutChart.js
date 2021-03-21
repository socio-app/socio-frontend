import React from "react";
import {
  StyleSheet,
  Easing,
  Text,
  TextInput,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  Platform,
  Animated,
  style,
} from "react-native";
import Svg, { G, Circle, Rect } from "react-native-svg";
import { useEffect } from "react";

import Header from "./HeaderComponents";

export default function Donut({
  percentage = 75,
  radius = 90,
  strokeWidth = 40,
  duration = 500,
  color = "tomato",
  delay = 500,
  textColor,
  max = 100,
}) {
  const inputRef = React.useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  return (
    <View style={styles.containerOut}>
      <Text>Statistic</Text>
      <View
        style={[styles.container, { width: radius * 3, height: radius * 3 }]}
      >
        <Svg
          style={styles.chart}
          width={radius * 3}
          height={radius * 3}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
          <G>
            <Circle
              cx="50%"
              cy="50%"
              stroke={color}
              strokeWidth={strokeWidth}
              r={radius}
              strokeOpacity={0.2}
              fill="transparent"
            />
            <Circle
              cx="50%"
              cy="50%"
              stroke={color}
              strokeWidth={strokeWidth}
              r={radius}
              fill="transparent"
              strokeDasharray={circleCircumference}
              strokeDashoffset={circleCircumference * (1 - 5 / 10)}
              strokeLinecap="round"
            />
          </G>
        </Svg>

        <TextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="100%"
          style={styles.text}
        />
      </View>

      <Text>Total Played Days:</Text>
      <Text>Total Mission:</Text>
    </View>
  );
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
  containerOut: {
    alignItems: "center",
    height: "100%",
    marginTop: 17,
  },

  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    width: "100%",
    // top: "50%",
    // left: "50%",
    // transform: [{ translateY: -10 }],
  },
  chart: {
    position: "absolute",

    top: 0,
  },
  face: {
    color: "red",
  },
  back: {
    color: "blue",
  },
});
