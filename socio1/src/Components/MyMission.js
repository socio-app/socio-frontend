import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { Button, Title } from 'react-native-paper'
import Card from './Card'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import CameraModal from './CameraModal'

export default function MyMission(props) {
  const user = useSelector((state) => state.user.user)
  const [modalVisible, setModalVisible] = useState(false)

  let updateHandler = () => {
    setIsPhotoSelected({
      ...isPhotoSelected,
      isPhotoSelectedStatus: true,
    })
  }

  const handlePickMission = (_id) => {
    console.log(_id, 'dari Home')
  }

  const [isPhotoSelected, setIsPhotoSelected] = useState({
    isPhotoSelectedStatus: false,
    missionId: '',
  })

  return (
    <View style={styles.container}>
      <CameraModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        updateHandler={updateHandler}
      />
      <Title>Your Mission</Title>
      <View style={styles.box}>
        <FlatList
          data={user.activeMissions}
          renderItem={(data) => (
            <View style={styles.inner}>
              <Card
                mission={data.item}
                handlePickMission={(_id) => handlePickMission(_id)}
                setModalVisible={setModalVisible}
                isPhotoSelected={isPhotoSelected}
                setIsPhotoSelected={setIsPhotoSelected}
                type="Home"
              />
            </View>
          )}
          keyExtractor={(item) => item._id}
          style={{ width: '100%' }}
        />

        <View style={styles.buttoncover}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => props.handleChangePage('MissionList')}
          >
            <FontAwesome name="plus" size={20} color={'white'} />
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    marginTop: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '80%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,
    width: '35%',
  },
  buttoncover: {
    alignItems: 'center',
  },
})
