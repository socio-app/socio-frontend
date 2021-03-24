import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function LoadingPageComponent(props) {
  if (props.isLoading === false) {
    return <></>
  }

  if (props.isLoading === true) {
    return (
      <View style={styles.container}>
        <View style={styles.activityIndicatorContainer}>
          <LottieView
            autoPlay
            style={{
              width: 400,
              height: 400,
            }}
            source={require('../assets/24175-purple-loading.json')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000050',
    width: '100%',
    height: '100%',
    marginTop: '15%',
    position: 'absolute',
    alignItems: 'center',
  },
  activityIndicatorContainer: {},
})
