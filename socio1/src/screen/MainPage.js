import React, { useState, useCallback } from "react";

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

import ActionSignin from "../assets/actionSignIn";
import ActionSignup from "../assets/actionSignUp";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

export default function MainPage(props) {
  const [enableButton, setEnableButton] = useState(false);
  const access_token = useSelector((state) => state.user.access_token);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      if (access_token) {
        props.navigation.navigate("Home");
      }

      // return () => {
      //   // Do something when the screen is unfocused
      //   // Useful for cleanup functions
      // };
    }, [access_token])
  );

  const handleSignIn = () => {
    setEnableButton(true);
  };

  const handleSignUp = () => {
    setEnableButton(false);
  };

  const handleChangePage = (value) => {
    props.navigation.replace(value);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <ImageBackground
          source={require("../../src/assets/backgroundburung.png")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
          resizeMode={"stretch"}
        >
          <View style={styles.logo}>
            <Image
              source={require("../../src/assets/sociologo1.png")}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
              resizeMode={"stretch"}
            />
          </View>

          <View style={styles.tabbar}>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={handleSignIn}
                // onPress={() => this.tab("SignIn")}
                style={[
                  styles.item,
                  {
                    backgroundColor: enableButton ? "orange" : "green",
                    borderTopLeftRadius: width / 2 / 2,
                    borderBottomLeftRadius: width / 2 / 2,
                  },
                ]}
              >
                <FontAwesome
                  name="sign-in"
                  size={30}
                  color={enableButton ? "black" : "white"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSignUp}
                // onPress={() => this.tab("SignUp")}
                style={[
                  styles.item,
                  {
                    backgroundColor: enableButton ? "green" : "orange",
                    borderTopRightRadius: width / 2 / 2,
                    borderBottomRightRadius: width / 2 / 2,
                  },
                ]}
              >
                <FontAwesome
                  name="registered"
                  size={30}
                  color={enableButton ? "white" : "black"}
                />
              </TouchableOpacity>
            </View>
            {enableButton ? (
              <ActionSignin
                handleChangePage={(value) => handleChangePage(value)}
              />
            ) : (
              <ActionSignup
                handleChangePage={(value) => handleChangePage(value)}
              />
            )}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0,
    flexBasis: SCREEN_HEIGHT,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "scroll",
  },
  header: {
    flex: 1,
    // paddingHorizontal: 5,
  },
  logo: {
    // flex: 1,
    marginTop: 20,
    width: 200,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2.62,
    right: 2,
    // elevation: 2,
  },
  tabbar: {
    // position: 'relative',
    width: width,
    // bottom: 250,
    // height: 80,
    marginTop: 20,
    justifyContent: "center",
  },
  box: {
    width: width / 2,
    height: 50,
    borderRadius: width / 2 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    left: 10,

    borderColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2.62,
    elevation: 5,
    flexDirection: "row",
    marginLeft: 90,
  },

  item: {
    width: width / 2 / 2,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
