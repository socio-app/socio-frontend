import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { dailyReset } from '../redux/actions/dailyReset.js'
import { fetchUser } from '../redux/actions/fetchUser.js'
import Headers from '../Components/HeaderComponents'
import Boxes from '../Components/Boxes'
import MyMission from '../Components/MyMission'
import Congratulation from '../Components/Congratulation'
import LoadingPageComponent from '../Components/LoadingPageComponent'

export default function Home(props) {
  const user = useSelector((state) => state.user.user)
  const isLoading = useSelector((state) => state.user.loadingUser)
  const access_token = useSelector((state) => state.user.access_token)
  const [pageToShow, setPageToShow] = useState('')
  const dispatch = useDispatch()
  const handleChangePage = (value) => {
    props.navigation.navigate(value)
  }

  useFocusEffect(
    useCallback(() => {
      let numberOfFinishedActiveMissions = 0
      user?.activeMissions?.forEach((el) => {
        if (el.isFinished === true) {
          numberOfFinishedActiveMissions = numberOfFinishedActiveMissions + 1
        }
      })
      if (numberOfFinishedActiveMissions === user.maxActiveMissions) {
        setPageToShow('Congratulation')
      } else if (user?.activeMissions?.length != 0) {
        setPageToShow('MyMission')
      } else {
        setPageToShow('Boxes')
      }
    }, [user.activeMissions])
  )

  useFocusEffect(
    useCallback(() => {
      const lastOnline = new Date(user.lastOnline).toLocaleDateString()
      const currentDate = new Date().toLocaleDateString()

      if (lastOnline !== currentDate) {
        dispatch(
          dailyReset({
            _id: user._id,
            access_token,
          })
        )
      } else {
        dispatch(
          fetchUser({
            _id: user._id,
            access_token,
          })
        )
      }

      setPageToShow('MyMission')
    }, [dispatch])
  )

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../src/assets/sociobackgroundtester.jpg')}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'stretch'}
      >
        <Headers />

        {pageToShow === 'MyMission' ? (
          <MyMission
            handleChangePage={(value) => handleChangePage(value)}
          ></MyMission>
        ) : pageToShow === 'Congratulation' ? (
          <Congratulation />
        ) : (
          <Boxes handleChangePage={(value) => handleChangePage(value)}></Boxes>
        )}
      </ImageBackground>
      <LoadingPageComponent isLoading={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    position: 'relative',
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutside: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
})
