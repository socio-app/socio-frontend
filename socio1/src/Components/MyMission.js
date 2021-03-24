import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import { Button, Title } from 'react-native-paper'
import { useSelector } from 'react-redux'
import Card from './Card'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CameraModal from './CameraModal'
import MissionDetail from './MissionDetail'

const { width } = Dimensions.get('window')

export default function MyMission(props) {
  const user = useSelector((state) => state.user.user)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleDetail, setModalVisibleDetail] = useState(false)
  const [modalMission, setModalMission] = useState(null)

  let updateHandler = () => {
    setIsPhotoSelected({
      ...isPhotoSelected,
      isPhotoSelectedStatus: true,
    })
  }

  const handlePickMission = (_id) => {}

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

      <MissionDetail
        modalVisibleDetail={modalVisibleDetail}
        setModalVisibleDetail={setModalVisibleDetail}
        mission={modalMission}
      />
      <View style={styles.title}>
        <Title>Your Mission</Title>
      </View>
      <View style={styles.box}>
        <FlatList
          data={user.activeMissions}
          renderItem={(data) => (
            <View style={styles.inner}>
              <Card
                mission={data.item}
                handlePickMission={(_id) => handlePickMission(_id)}
                setModalVisible={setModalVisible}
                modalVisibleDetail={modalVisibleDetail}
                setModalVisibleDetail={setModalVisibleDetail}
                isPhotoSelected={isPhotoSelected}
                setIsPhotoSelected={setIsPhotoSelected}
                setModalMission={setModalMission}
                modalMission={modalMission}
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
            <FontAwesome name="plus" size={20} color={'black'} />
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
    backgroundColor: '#90e388',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,
    width: '35%',
  },
  buttoncover: {
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    width: width,
  },
})
