import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Title } from "react-native-paper";

export default function Boxes(props) {
  const handleChangePage = value => {
    props.handleChangePage(value)
  }
  return (
    <View style={styles.container}>
      <Title>Your Mission</Title>
      <View style={styles.box}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.inner}>
            <Text>You havent pick a missions yet, go pick one</Text>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => handleChangePage('MissionList')}
            >
              go to mission
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 5,
    marginTop: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "100%",
    height: "80%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
