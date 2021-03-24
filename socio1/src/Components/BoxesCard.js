import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Button, Title } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { pickMission } from '../redux/actions/missionUpdate.js'
import { useFocusEffect } from '@react-navigation/native'
import Card from './Card.js'

const Boxes = (props) => {
  const user = useSelector((state) => state.user.user)
  const access_token = useSelector((state) => state.user.access_token)
  const [userLocal, setUserLocal] = useState({})
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      setUserLocal(JSON.parse(JSON.stringify(user)))
      return () => {
        setUserLocal({})
      }
    }, [user])
  )

  const handleConfirm = () => {
    userLocal.statistic.totalMissions =
      user.statistic.totalMissions +
      userLocal.activeMissions.length -
      user.activeMissions.length

    const payload = {
      _id: user._id,
      statistic: userLocal.statistic,
      missionPool: userLocal.missionPool,
      activeMissions: userLocal.activeMissions,
      access_token,
    }
    dispatch(pickMission(payload))
    props.handleChangePage('Home')
  }

  const handlePickMission = (_id, cb) => {
    const userCopy = JSON.parse(JSON.stringify(userLocal))

    userCopy.missionPool.forEach((mission) => {
      if (mission._id === _id) {
        if (!mission.isTaken) {
          if (userCopy.activeMissions.length < userCopy.maxActiveMissions) {
            mission.isTaken = true
            userCopy.activeMissions.push({ ...mission, isFinished: false })
            const filter = user.activeMissions.filter((m) => {
              return m._id === _id
            })
            if (filter.length !== 0) {
              cb(false)
            }
          }
        } else {
          mission.isTaken = false
          const filter = userCopy.activeMissions.filter((m) => {
            return m._id !== _id
          })
          userCopy.activeMissions = filter
        }
      }
    })
    setUserLocal(userCopy)
  }
  return (
    <View style={styles.container}>
      {userLocal.name ? (
        <View style={styles.container}>
          <Title style={{ marginTop: 20 }}>
            List Mission ( {userLocal.activeMissions.length}/
            {userLocal.maxActiveMissions} )
          </Title>
          <View style={styles.box}>
            <FlatList
              data={userLocal.missionPool}
              renderItem={(data) => (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Card
                    handlePickMission={(_id, cb) => handlePickMission(_id, cb)}
                    mission={data.item}
                    isTaken={data.item.isTaken}
                    modalVisibleDetail={props.modalVisibleDetail}
                    setModalVisibleDetail={props.setModalVisibleDetail}
                    type="MissionList"
                    modalMission={props.modalMission}
                    setModalMission={props.setModalMission}
                  />
                </View>
              )}
              keyExtractor={(item) => item._id}
              style={{ width: '80%' }}
            />
            <View style={styles.buttoncover}>
              <Button
                style={styles.button}
                mode="contained"
                onPress={() => handleConfirm()}
              >
                <Text style={{ color: 'black', fontWeight: '800' }}>
                  {' '}
                  Confirm
                </Text>
              </Button>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
  card: {
    width: '80%',
    height: '20%',
    marginTop: 5,
  },
  card1: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#90e388',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,
    width: '50%',
    shadowColor: '#21e1eb',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  buttoncover: {
    alignItems: 'center',
  },
})

export default Boxes
