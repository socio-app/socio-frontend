import React, { useState, useEffect, useCallback } from 'react'
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
} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

export default function MissionDetail(props) {
  // const [modalVisible, setModalVisible] = useState(false);
  console.log(props.modalVisibleDetail, '<<<< INI MODAL VISIBLE DETAIL')
  useEffect(() => {
    console.log(props.mission, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>updated')
  }, [props.mission])
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisibleDetail}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            props.setModalVisibleDetail(!props.modalVisibleDetail)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Title style={styles.modalText}>
                Contributor: {props.mission ? props.mission.contributor : null}
              </Title>
              <Title style={styles.Title}>
                {props.mission ? props.mission.title : null}
              </Title>
              <Text>
                EXP: {props.mission ? props.mission.experience : null}
              </Text>
              <Card style={styles.container}>
                <ScrollView style={styles.scrollView}>
                  <Card.Content style={{ alignItems: 'center' }}>
                    {/* <SafeAreaView style={styles.Paragraph}> */}
                    <Text>
                      {props.mission ? props.mission.description : null}
                    </Text>
                    {/* </SafeAreaView> */}
                  </Card.Content>
                </ScrollView>
              </Card>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>
                  props.setModalVisibleDetail(!props.modalVisibleDetail)
                }
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
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    top: 60,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#e1e2f1',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#90e388',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    width: '100%',
    minHeight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#dddddd',
  },
  scrollView: {
    backgroundColor: 'pink',
    width: '100%',
  },
  Paragraph: {
    paddingTop: StatusBar.currentHeight,
  },
})
