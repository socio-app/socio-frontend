import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Camera } from 'expo-camera'
import axios from 'axios'
import { setImage } from '../redux/actions/setImage'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from '@react-navigation/core'

export default function CameraModal(props) {
  const dispatch = useDispatch()
  const [imageUrlFromServer, setImageUrlFromServer] = useState('')
  const [imageUri, setImageUri] = useState('')
  const [type, setType] = useState(Camera.Constants.Type.back)
  const hasPermission = useSelector((state) => state.image.permission)

  console.log(hasPermission)

  const camRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()

      dispatch({ type: 'SET_PERMISSION ', data: status === 'granted' })
    })()

    if (hasPermission === null) {
      props.setModalVisible(false)
    }
    if (hasPermission === false) {
      props.setModalVisible(false)
    }
    return () => {}
  }, [])

  const takePicture = async () => {
    if (camRef) {
      const data = await camRef.current.takePictureAsync({ quality: 0.3 })
      console.log(data, 'ini image baru diambil')
      setImageUri(data.uri)
    }
  }

  const uploadPicture = async () => {
    try {
      dispatch(setImage(imageUri))

      console.log(imageUri, '>>> IMAGE URI DARI MODAL')

      setImageUri('')

      props.updateHandler()

      props.setModalVisible(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert('Camera has been closed.')
        props.setModalVisible(false)
      }}
    >
      <View style={styles.centeredView}>
        {!imageUri ? (
          <View style={{ width: '100%', height: 400, alignItems: 'center' }}>
            <Camera style={styles.camera} type={type} ref={camRef}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    )
                  }}
                >
                  <MaterialIcons
                    name="camera-switch"
                    color="#f0c2bd"
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            </Camera>
            <TouchableOpacity
              style={styles.takePictureButton}
              onPress={takePicture}
            >
              <MaterialIcons name="camera-iris" color="black" size={45} />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Image
              source={{
                uri: imageUri,
              }}
              style={{ height: 400, width: 400 }}
            />
            <View>
              <View style={styles.inner}>
                <TouchableOpacity style={styles.Upload} onPress={uploadPicture}>
                  <MaterialIcons name="file-upload" color="black" size={45} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Retake}
                  onPress={() => setImageUri('')}
                >
                  <MaterialIcons name="camera-retake" color="black" size={45} />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 25,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    height: '15%',
    width: '15%',
    top: 315,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    margin: 20,
    width: '100%',
  },
  takePictureButton: {
    alignItems: 'center',
    height: 50,
    top: 10,
    width: '25%',
    borderRadius: 10,
    backgroundColor: '#d0ebf0',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    bottom: 6,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  camera: {
    height: 400,
    width: '90%',
  },
  textonly: {
    top: 5,
  },

  Upload: {
    flexDirection: 'column-reverse',
    height: 50,
    width: 120,
    backgroundColor: '#d0ebf0',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    bottom: 5,
  },
  Retake: {
    height: 50,
    width: 120,
    backgroundColor: '#d0ebf0',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    top: 10,
  },
})
