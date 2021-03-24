import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native'
import ceklis from '../assets/ceklis.png'

import { useSelector, useDispatch } from 'react-redux'
import { expIncrease } from '../redux/actions/expIncrease'
import { levelUp } from '../redux/actions/levelUp'
import { useFocusEffect } from '@react-navigation/core'
import MissionDetail from '../Components/MissionDetail'

const Card = (props) => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(true)
  const [statusMyMission, setMyMission] = useState(true)

  const user = useSelector((state) => state.user.user)
  const access_token = useSelector((state) => state.user.access_token)

  const imageUri = useSelector((state) => state.image.imageUri)

  console.log(props.mission.isFinished, 'tanda mission props')
  console.log(props.mission, '')

  useFocusEffect(
    useCallback(() => {
      if (props.isTaken) setStatus(!props.isTaken)
    }, [])
  )

  useEffect(() => {
    if (props.type === 'Home') {
      console.log(props.isPhotoSelected.isPhotoSelectedStatus)
      console.log(props.isPhotoSelected.missionId)
      if (
        props.isPhotoSelected.isPhotoSelectedStatus &&
        props.isPhotoSelected.missionId === props.mission._id
      )
        updateMissionCard()
    }
  }, [props.isPhotoSelected])

  useEffect(() => {
    if (props.mission.isFinished) setMyMission(!props.mission.isFinished)
  }, [props.mission])

  const updateMission = () => {
    props.setModalVisible(true)
    props.setIsPhotoSelected({
      ...props.isPhotoSelected,
      missionId: props.mission._id,
    })
  }

  const updateMissionCard = () => {
    console.log('Going to finish mission')

    let tempActiveMissions = JSON.parse(JSON.stringify(user.activeMissions))

    tempActiveMissions.forEach((el) => {
      if (el._id === props.mission._id) {
        el.isFinished = true
      }
    })

    console.log(imageUri, 'IMAGE URI FROM CARD')

    if (+user.currentExperience + +props.mission.experience < 10) {
      console.log('dispatch expIncrease')
      dispatch(
        expIncrease({
          _id: user._id,
          access_token: access_token,
          activeMissions: tempActiveMissions,
          currentExperience:
            +user.currentExperience + +props.mission.experience,
          statistic: {
            ...user.statistic,
            totalSuccessMissions: user.statistic.totalSuccessMissions + 1,
          },
          imageUri: imageUri,
          activeMission_Id: props.mission._id,
        })
      )
    } else {
      console.log('dispatch levelUp')
      dispatch(
        levelUp({
          _id: user._id,
          access_token: access_token,
          activeMissions: tempActiveMissions,
          currentExperience:
            (+user.currentExperience + +props.mission.experience) % 10,
          level: user.level + 1,
          maxActiveMissions:
            Math.floor(user.level / 5) + 2 < 6
              ? Math.floor(user.level / 5) + 2
              : 5,
          statistic: {
            ...user.statistic,
            totalSuccessMissions: user.statistic.totalSuccessMissions + 1,
          },
          imageUri: imageUri,
          activeMission_Id: props.mission._id,
        })
      )
      alert(`Congratulation u levelled up`)
    }
    props.setIsPhotoSelected({
      ...props.isPhotoSelected,
      isPhotoSelectedStatus: false,
      missionId: '',
    })
  }

  const showAlert = () =>
    Alert.alert('Confirmation on your Mission', 'Sudah selesaikah ?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Ok',
        onPress: () => updateMission(),
      },
    ])

  const handlePickMission = () => {
    // props.handlePickMission(props.mission._id)
    if (props.type !== 'Home') {
      props.handlePickMission(props.mission._id, setStatus)
    }
  }
  console.log(status, 'handle clcik')

  const handleDetail = () => {
    if (props.type != 'Home') {
      props.setModalVisibleDetail(true)
    } else {
      showAlert()
    }
  }

  const handleDetailHome = () => {
    console.log('MASUUKK SINI BOUSSSSS Handle visible')
    props.setModalVisibleDetail(true)
  }

  console.log(props.modalVisibleDetail, 'ini modal visible detai doang')

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={handleDetail}
        disabled={!statusMyMission}
      >
        <View style={styles.container}>
          <View style={{ width: '90%' }}>
            <Text>{props.mission.title}</Text>
          </View>
          <TouchableOpacity
            // true -> false(bisa diclick) , true -> false (true)
            disabled={!statusMyMission || !status}
            onPress={handlePickMission}
          >
            {props.type !== 'Home' ? (
              <View style={styles.checkbox}>
                {props.mission.isTaken ? (
                  <Image source={ceklis} style={{ width: 20, height: 20 }} />
                ) : null}
              </View>
            ) : (
              <View style={styles.buttonDetail}>
                <Button
                  style={styles.buttonDetail2}
                  title="Detail"
                  onPress={handleDetailHome}
                  color="green"
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#c7cfb7',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkbox: {
    borderWidth: 1,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDetail: {
    right: 20,
    borderRadius: 200,
  },
  buttonDetail2: {
    color: 'green',
  },
})

export default Card
