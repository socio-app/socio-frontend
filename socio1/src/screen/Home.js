import React from "react";
import { useSelector } from "react-redux";
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
import Boxes from "../Components/Boxes";
import MyMission from "../Components/MyMission";
import Congratulation from "../Components/Congratulation";

export default function Home(props) {
  const user = useSelector((state) => state.user.user)

  const handleChangePage = value => {
    props.navigation.navigate(value)
  }

  return (
    <View style={styles.container}>
      {/* <Text>HAII INI DI HOME PAGE</Text> */}
      <ImageBackground
        source={require("../../src/assets/sociobackkground.jpg")}
        style={{ width: "100%", height: "100%" }}
        resizeMode={"stretch"}
      >
        <Headers />

        {
          user.activeMissions.length !== 0 ?
            <MyMission></MyMission> : null
        }
        {/* <MyMission></MyMission> */}
        <Boxes handleChangePage={(value) => handleChangePage(value)}></Boxes>

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
