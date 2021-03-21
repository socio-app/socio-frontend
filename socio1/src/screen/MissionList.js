import React, { useCallback, useEffect } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import Headers from '../Components/HeaderComponents'
import BoxesCard from '../Components/BoxesCard'

import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { dailyReset } from '../redux/actions/dailyReset.js'

export default function MissionList(props) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const access_token = useSelector((state) => state.user.access_token)

  const handleChangePage = (value) => {
    props.navigation.navigate(value)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../src/assets/sociobackkground.jpg')}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'stretch'}
      >
        <Headers />
        <BoxesCard
          handleChangePage={(value) => handleChangePage(value)}
          user={user}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
})
