import React from 'react'
import { View, StyleSheet, Button, Text, Image } from 'react-native'
import ceklis from '../assets/ceklis.png'

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Mission 1</Text>
      <View style={styles.checkbox}>
        <Image
          source={ceklis}
          style={{ width: 20, height: 20 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  checkbox: {
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Card