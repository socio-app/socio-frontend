import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ProgressBar, Colors } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const Progress = ({ step, steps, height }) => {
  return (
    <>
      <View
        style={{
          height,
          backgroundColor: "rgba(0,0,0,0,1)",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height,
            width: "50%",
            borderRadius: height,
            position: "absolute",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0.5",
          }}
        />
      </View>
    </>
  );
};

export default function Header() {
  return (
    <View container style={styles.header}>
      <View style={styles.avatar}>
        <Avatar.Image size={42} label="Avatar" />
      </View>
      <View style={styles.progressBar}>
        {/* <Avatar.Text size={45} label="ProgressBar" /> */}
        <Text style={styles.textLevel}>Exp</Text>
        <ProgressBar
          progress={0.8}
          color={Colors.red800}
          style={styles.progressbarinner}
        />
      </View>
      <View style={styles.level}>
        <Avatar.Text size={42} label="Level" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    // alignItems: "start",
    flexDirection: "row",
    // justifyContent: "center",
    backgroundColor: "#eee",
  },
  avatar: {
    justifyContent: "center",
    marginLeft: "0%",
  },
  level: {
    justifyContent: "center",

    marginLeft: "25%",
  },
  progressBar: {
    flex: 1,
    backgroundColor: "transparent",
    width: 50,
    justifyContent: "center",
    marginLeft: "8%",
  },
  progressbarinner: {
    width: "135%",
    justifyContent: "center",
  },
  textLevel: {
    marginLeft: "58%",
    paddingBottom: 5,
  },
});
