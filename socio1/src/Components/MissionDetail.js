import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function MissionDetail(props) {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.setModalVisible(!props.modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Title style={styles.modalText}>
                Mission Contributor: Mr Budiman
              </Title>
              <Title style={styles.Title}>Unfinished Business</Title>
              <Text>EXP: 5</Text>
              <Card style={styles.container}>
                <ScrollView style={styles.scrollView}>
                  <Card.Content style={{ alignItems: "center" }}>
                    {/* <SafeAreaView style={styles.Paragraph}> */}
                    <Text>
                      Disini bukan untuk mengungkit masa lalu tetapi memperbaiki
                      segala kesalahan yang pernah kamu lakukan tetapi kamu
                      belum pernah meminta maaf sebelumnya, telpon mantanmu,
                      orang tua mu, sahabat mu atau teman mu tanyakan kabr dan
                      minta maaf untuk kesalahan yg pernah kamu lakukan{" "}
                    </Text>
                    {/* </SafeAreaView> */}
                  </Card.Content>
                </ScrollView>
              </Card>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.setModalVisible(!props.modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => props.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    width: "100%",
    minHeight: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#dddddd",
  },
  scrollView: {
    backgroundColor: "pink",
  },
  Paragraph: {
    paddingTop: StatusBar.currentHeight,
  },
});
