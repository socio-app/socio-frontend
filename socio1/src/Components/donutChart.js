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
} from "react-native";
import Svg, { G, Circle, Rect } from "react-native-svg";
import { useEffect } from "react";

import Header from "./HeaderComponents";
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

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
    <View style={styles.container}>
      <Text>Statistic</Text>
      <Svg
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
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: radius / 2,
            color: textColor ?? color,
            marginHorizontal: 150,
          },
          styles.text,
        ]}
      />
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
  container: {
    marginLeft: 10,

    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: 331,
    height: 500,
  },
  text: {
    marginLeft: 10,
  },
});
