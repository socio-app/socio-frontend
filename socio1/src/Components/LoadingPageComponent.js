import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import LottieView from 'lottie-react-native'

export default function LoadingPageComponent(props) {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    'window'
  )
  const scale = SCREEN_WIDTH / 320

  console.log(SCREEN_WIDTH, SCREEN_HEIGHT, scale)

  if (props.isLoading === false) {
    return <></>
  }

  if (props.isLoading === true) {
    console.log(
      'LONGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG LLOADING'
    )
    return (
      <View style={styles.container}>
        <View style={styles.activityIndicatorContainer}>
          {/* <ActivityIndicator size="large" color="#87c8d6" /> */}
          <LottieView
            autoPlay
            style={{
              width: 400,
              height: 400,
            }}
            source={require('../assets/24175-purple-loading.json')}
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
        </View>
      </View>
    )
  }
}

// activeTintColor: '#e91e63',
// activeBackgroundColor: '#87c8d6',

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
