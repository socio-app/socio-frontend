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
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 0,
  textColor,
  max = 100,
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  // const animation = (toValue) => {
  //   return Animated.timing(animated, {
  //     delay: 1000,
  //     toValue,
  //     duration,
  //     useNativeDriver: true,
  //     easing: Easing.out(Easing.ease),
  //   }).start(() => {
  //     animation(toValue === 0 ? percentage : 0);
  //   });
  // };

  // React.useEffect(() => {
  //   animation(percentage);
  //   animated.addListener(
  //     (v) => {
  //       const maxPerc = (100 * v.value) / max;
  //       const strokeDashoffset =
  //         circleCircumference - (circleCircumference * maxPerc) / 100;
  //       if (inputRef?.current) {
  //         inputRef.current.setNativeProps({
  //           text: `${Math.round(v.value)}`,
  //         });
  //       }
  //       if (circleRef?.current) {
  //         circleRef.current.setNativeProps({
  //           strokeDashoffset,
  //         });
  //       }
  //     },
  //     [max, percentage]
  //   );

  //   return () => {
  //     animated.removeAllListeners();
  //   };
  // });

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
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
            strokeDashoffset={circleCircumference / 3}
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
          { fontSize: radius / 2, color: textColor ?? color },
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
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
});
