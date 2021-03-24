import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import Header from '../Components/HeaderComponents'
import DonutChart from '../Components/donutChart'

export default function UserStats() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../src/assets/sociobackkground.jpg')}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'stretch'}
      >
        <Header />
        <DonutChart />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
})
