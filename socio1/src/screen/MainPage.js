import React, { useState } from "react";
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

export default function MainPage() {
  const [enableButton, setEnableButton] = useState(false)
  
  const handleSignIn = () => {
    setEnableButton(true)
  }

  const handleSignUp = () => {
    setEnableButton(false)
  }

  return(
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <ImageBackground
            source={require("../../src/assets/sociobackkground.jpg")}
            style={{ width: "100%", height: "100%" }}
            resizeMode={"stretch"}
          >
            <View style={styles.logo}>
              <Image
                source={require("../../src/assets/sociologo1.png")}
                style={{
                  width: "80%",
                  height: "45%",

                  justifyContent: "center",
                  marginLeft: "11%",
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
                    color={"white"}
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
                    color={ enableButton ? "white" : "black" }
                  />
                </TouchableOpacity>
              </View>
              { 
                enableButton ? <ActionSignin /> : <ActionSignup />
              }
            </View>
          </ImageBackground>
        </View>
      </View>
  )
}


const { width } = Dimensions.get("window");
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  header: {
    flex: 1,
    paddingHorizontal: 5,
  },
  logo: {
    // flex: 1,
    width: "100%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2.62,
    elevation: 2,
  },
  tabbar: {
    position: "relative",
    width: width,
    bottom: 250,
    height: 80,
    justifyContent: "center",
  },
  box: {
    width: width / 2,
    height: 50,
    borderRadius: width / 2 / 2,
    elevation: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",

    borderColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2.62,
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
