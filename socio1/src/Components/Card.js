import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import ceklis from '../assets/ceklis.png'

import { useSelector, useDispatch } from 'react-redux'
import { expIncrease } from '../redux/actions/expIncrease'
import { levelUp } from '../redux/actions/levelUp'

const Card = (props) => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(true)

  const user = useSelector((state) => state.user.user)
  const access_token = useSelector((state) => state.user.access_token)

  useEffect(() => {
    if (props.isTaken) setStatus(!props.isTaken)
  }, [])

  const updateMission = () => {
    console.log('Going to finish mission')

    let tempActiveMissions = JSON.parse(JSON.stringify(user.activeMissions))

    tempActiveMissions.forEach((el) => {
      if (el._id === props.mission._id) {
        el.isFinished = true
      }
    })

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
        })
      )
    }
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
    } else {
      showAlert()
    }
  }

  return (
    <TouchableOpacity
      disabled={!status}
      onPress={handlePickMission}
      style={styles.container}
    >
      <Text>{props.mission.title}</Text>
      {props.type !== 'Home' ? (
        <View style={styles.checkbox}>
          {props.mission.isTaken ? (
            <Image source={ceklis} style={{ width: 20, height: 20 }} />
          ) : null}
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    minHeight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
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
})

export default Card
