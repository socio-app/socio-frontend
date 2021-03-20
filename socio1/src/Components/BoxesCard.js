import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Title, Paragraph, Checkbox } from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default function Boxes() {
  return (
    <View style={styles.container}>
      <Title>List Mission</Title>

      <View style={styles.box}>
        <ScrollView style={styles.scrollView}>
          <Animatable.View animation="bounceInLeft" style={styles.inner}>
            <Card style={styles.card}>
              <Card.Content style={styles.card1}>
                <Checkbox.Item
                  label="Nelpon mantan katakan maaf"
                  status="unchecked"
                />
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content style={styles.card1}>
                <Checkbox.Item
                  label="bersedekah kepada siapapun hari ini "
                  status="unchecked"
                />
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content style={styles.card1}>
                <Checkbox.Item label="Nelpon mantan" status="unchecked" />
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content style={styles.card1}>
                <Checkbox.Item label="Nelpon mantan" status="unchecked" />
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content style={styles.card1}>
                <Checkbox.Item label="Nelpon mantan" status="unchecked" />
              </Card.Content>
            </Card>
          </Animatable.View>
        </ScrollView>

        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          confirm
        </Button>
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
  card: {
    width: "80%",
    height: "20%",
    marginTop: 5,
  },
  card1: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
