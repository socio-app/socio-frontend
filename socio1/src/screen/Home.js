import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { useFocusEffect } from "@react-navigation/native";
import { dailyReset } from "../redux/actions/dailyReset.js";

import { fetchUser } from "../redux/actions/fetchUser.js";

export default function Home(props) {
  const user = useSelector((state) => state.user.user);
  const access_token = useSelector((state) => state.user.access_token);

  const handleChangePage = (value) => {
    props.navigation.navigate(value);
  };

  const [pageToShow, setPageToShow] = useState("");

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      let numberOfFinishedActiveMissions = 0;
      user?.activeMissions?.forEach((el) => {
        if (el.isFinished === true) {
          numberOfFinishedActiveMissions = numberOfFinishedActiveMissions + 1;
        }
      });
      console.log(user?.activeMissions, "<<<<");
      if (numberOfFinishedActiveMissions === user.maxActiveMissions) {
        console.log("munculi conrats");
        setPageToShow("Congratulation");
      } else if (user?.activeMissions?.length != 0) {
        console.log("munculi MyMission");
        setPageToShow("MyMission");
      } else {
        console.log("munculi Boxes");
        setPageToShow("Boxes");
      }
      console.log(pageToShow, "page to show");
    }, [user.activeMissions])
  );

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      const lastOnline = new Date(user.lastOnline).toLocaleDateString();
      const currentDate = new Date().toLocaleDateString();

      if (lastOnline !== currentDate) {
        console.log("dispatch daily reset");
        dispatch(
          dailyReset({
            _id: user._id,
            access_token,
          })
        );
      } else {
        dispatch(
          fetchUser({
            _id: user._id,
            access_token,
          })
        );
      }

      setPageToShow("MyMission");
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../src/assets/backgroundburung.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode={"stretch"}
      >
        <Headers />

        {pageToShow === "MyMission" ? (
          <MyMission
            handleChangePage={(value) => handleChangePage(value)}
          ></MyMission>
        ) : pageToShow === "Congratulation" ? (
          <Congratulation />
        ) : (
          <Boxes handleChangePage={(value) => handleChangePage(value)}></Boxes>
        )}
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
