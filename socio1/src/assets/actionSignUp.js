import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

export default class ActionSignup extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Animatable.View animation="bounceInRight" style={styles.container}>
          <View style={styles.section}>
            <View style={styles.icon}>
              <MaterialIcons name="email" color="gray" size={20} />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="  Your email ...."
                style={styles.TextInput}
              />
            </View>
          </View>
          <View
            style={[
              styles.section,
              {
                marginTop: 15,
              },
            ]}
          >
            <View style={styles.icon}>
              <MaterialIcons name="lock" color="gray" size={20} />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="  Your password ...."
                style={styles.TextInput}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button_container}>
            <View style={styles.button}>
              <Text style={styles.text}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20%",
    paddingHorizontal: 20,
    width: "90%",
  },
  section: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderRadius: 7,
    opacity: 0.9,
    height: 50,
  },
  icon: {
    borderRightWidth: 1,
    borderRightColor: "gray",
    paddingRight: 10,
  },
  input: {
    flex: 1,
    width: "100%",
  },
  textInput: {
    borderRadius: 7,
    paddingLeft: 10,
    width: "100%",
  },

  button_container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
