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
import { useSelector, useDispatch } from 'react-redux'
import { expIncrease } from '../redux/actions/expIncrease'
import { levelUp } from '../redux/actions/levelUp'
import { useFocusEffect } from '@react-navigation/core'
import ceklis from '../assets/ceklis.png'

const Card = (props) => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(true)
  const [statusMyMission, setMyMission] = useState(true)
  const user = useSelector((state) => state.user.user)
  const access_token = useSelector((state) => state.user.access_token)
  const imageUri = useSelector((state) => state.image.imageUri)

  useFocusEffect(
    useCallback(() => {
      if (props.isTaken) setStatus(!props.isTaken)
    }, [])
  )

  useEffect(() => {
    if (props.type === 'Home') {
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
    let tempActiveMissions = JSON.parse(JSON.stringify(user.activeMissions))

    tempActiveMissions.forEach((el) => {
      if (el._id === props.mission._id) {
        el.isFinished = true
      }
    })

    if (+user.currentExperience + +props.mission.experience < 10) {
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
    }
    props.setIsPhotoSelected({
      ...props.isPhotoSelected,
      isPhotoSelectedStatus: false,
      missionId: '',
    })
  }

  const showAlert = () =>
    Alert.alert(
      'Confirmation on your mission',
      'Have you finished this mission ?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Ok',
          onPress: () => updateMission(),
        },
      ]
    )

  const handlePickMission = () => {
    if (props.type !== 'Home') {
      props.handlePickMission(props.mission._id, setStatus)
    }
  }

  const handleDetail = () => {
    if (props.type != 'Home') {
      props.setModalMission(props.mission)
      props.setModalVisibleDetail(true)
    } else {
      showAlert()
    }
  }

  const handleDetailHome = () => {
    props.setModalVisibleDetail(true)
    props.setModalMission(props.mission)
  }

  return (
    <>
      <TouchableOpacity
        style={styles.container1}
        onPress={handleDetail}
        disabled={!statusMyMission}
      >
        <View style={styles.container}>
          <View style={{ width: '90%' }}>
            <Text>{props.mission.title}</Text>
          </View>

          <TouchableOpacity
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
                ></Button>
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
    backgroundColor: '#e1e2f1',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4,
  },
  container1: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4,
    shadowColor: 'black',
    width: '100%',
    minHeight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#e1e2f1',
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
    right: 35,

    color: 'black',
  },
  buttonDetail2: {
    color: '#90e388',
  },
  textInput: {
    fontWeight: '700',
    fontFamily: 'sans-serif-light',
  },
  inner: {
    backgroundColor: '#DEE9F7',
    borderColor: '#E2ECFD',
    borderWidth: 1,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Card
