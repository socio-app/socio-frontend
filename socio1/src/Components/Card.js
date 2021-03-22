import React, { useState, useEffect, useCallback } from 'react'
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
import { useFocusEffect } from '@react-navigation/core'

const Card = (props) => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(true)
  const [statusMyMission, setMyMission] = useState(true)

  const user = useSelector((state) => state.user.user)
  const access_token = useSelector((state) => state.user.access_token)
  console.log(props.mission.isFinished, 'tanda mission props')

  useFocusEffect(
    useCallback(() => {
      if (props.isTaken) setStatus(!props.isTaken)
    }, [])
  )

  useEffect(() => {
    if (props.mission.isFinished) setMyMission(!props.mission.isFinished)
  }, [props.mission])

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log(user?.statistic?.totalSuccessMissions, user?.statistic?.totalMissions, 'hasil itung')
  //     setPersentase(user?.statistic?.totalSuccessMissions / user?.statistic?.totalMissions)
  //     // setTotalMission(user?.statistic?.totalMissions)
  //   }, [user.statistic])
  // )

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
      alert(`Congratulation u levelled up`)
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
  console.log(status, 'handle clcik')

  return (
    <TouchableOpacity
      disabled={ !status || !statusMyMission } // true -> false(bisa diclick) , true -> false (true)
      onPress={handlePickMission}
      style={styles.container}
      >
        <View style={styles.container}>
          <View style={{ width: "90%" }}>
            <Text>{props.mission.title}</Text>
          </View>
            {props.type !== 'Home' ? (
              <View style={styles.checkbox}>
                {props.mission.isTaken ? (
                  <Image source={ceklis} style={{ width: 20, height: 20 }} />
                ) : null}
              </View>
            ) : null}
        </View>
    </TouchableOpacity>
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
})

export default Card
