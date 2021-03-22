import React, { useRef } from "react";
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
  TouchableWithoutFeedback
} from "react-native";
import Svg, { G, Circle, Rect } from "react-native-svg";
import { useEffect } from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import Header from "./HeaderComponents";
import { useSelector } from "react-redux";

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
  console.log(circleCircumference * (1 - 5 / 10))
  const user = useSelector((state) => state.user.user)

  let persentase = user?.statistic?.totalSuccessMissions / user?.statistic?.totalMissions
  if (!persentase) {
    persentase = 0
  }

  let lastTime = new Date(user?.lastOnline).getTime()
  let firstTime = new Date(user?.createdAt).getTime()

  const AnimationRef = useRef(null);
  const _onPress = () => {
    if (AnimationRef) {
      AnimationRef.current?.rubberBand();
    }
  };

  return (
    <View style={styles.containerOut}>
      <Card style={styles.card1}>
        <Title>Statistic</Title>
      </Card>
      <TouchableWithoutFeedback onPress={_onPress}>
        <Animatable.View ref={AnimationRef} animation="zoomIn">
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
                  strokeDashoffset={circleCircumference * (1 - persentase)}
                  strokeLinecap="round"
                />
              </G>
            </Svg>

            <TextInput
              ref={inputRef}
              underlineColorAndroid="transparent"
              editable={false}
              defaultValue= { persentase ? (persentase * 100) + "%" : "0" }
              style={styles.text}
            />
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>

      <View style={styles.viewcard1}>
        <Card style={styles.card2}>
          <Animatable.View animation="bounceInLeft">
          {/* console.log(Math.ceil((y - x)/ (1000 * 60 * 60 * 24))) */}
            <Title style={styles.cardTitle}>Total Played Days: {Math.ceil((firstTime - lastTime) / (1000 * 60 * 60 * 24))} </Title>
          </Animatable.View>
        </Card>
      </View>

      <View style={styles.viewcard2}>
        <Card style={styles.card2}>
          {/* <Card.Title title="Total Mission: " style={styles.cardTitle} /> */}
          <Title style={styles.cardTitle}>Total Mission: {user?.statistic.totalMissions}  </Title>
        </Card>
      </View>

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
    fontFamily: "arcadeclassic",
  },
  cardTitle: {
    fontFamily: "arcadeclassic",
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
  card1: {
    width: "80%",
    alignItems: "center",
    shadowColor: "red",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 3.5,
    backgroundColor: "white",
  },
  cardTitle: {
    left: 10
  },
  card2: {
    width: "80%",
    alignItems: "flex-start",
    shadowColor: "red",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 3.5,
    backgroundColor: "white",
  },
  card3: {
    width: "100%",
    alignItems: "flex-start",
  },
  viewcard1: {
    paddingTop: 10,
    width: "100%",
    alignItems: "center",
  },
  viewcard2: {
    paddingTop: 10,
    width: "100%",
    alignItems: "center",
  },
});
