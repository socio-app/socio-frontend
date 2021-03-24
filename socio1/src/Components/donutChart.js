import React, { useState, useRef, useCallback } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  PixelRatio,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'
import { Title } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/core'
import * as Animatable from 'react-native-animatable'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const scale = SCREEN_WIDTH / 320

export default function Donut({
  radius = 90,
  strokeWidth = 40,
  color = 'tomato',
}) {
  const inputRef = React.useRef()
  const halfCircle = radius + strokeWidth
  const circleCircumference = 2 * Math.PI * radius
  const user = useSelector((state) => state.user.user)
  const [persentase, setPersentase] = useState(0)

  useFocusEffect(
    useCallback(() => {
      setPersentase(
        user?.statistic?.totalSuccessMissions / user?.statistic?.totalMissions
      )
    }, [user.statistic])
  )

  let lastTime = new Date(user?.lastOnline).getTime()
  let firstTime = new Date(user?.createdAt).getTime()

  const AnimationRef = useRef(null)
  const _onPress = () => {
    if (AnimationRef) {
      AnimationRef.current?.rubberBand()
    }
  }

  return (
    <View style={styles.containerOut}>
      <Title style={{ fontSize: 30 }}>Statistic</Title>
      <TouchableWithoutFeedback onPress={_onPress}>
        <Animatable.View ref={AnimationRef} animation="zoomIn">
          <View
            style={[
              styles.container,
              { width: radius * 3, height: radius * 3 },
            ]}
          >
            <Svg
              style={styles.chart}
              width={radius * 3}
              height={radius * 3}
              viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
              <G>
                <Circle
                  cx="50%"
                  cy="50%"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  r={radius}
                  strokeOpacity={0.2}
                  fill="transparent"
                />
                <Circle
                  cx="50%"
                  cy="50%"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  r={radius}
                  fill="transparent"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={
                    persentase
                      ? circleCircumference * (1 - persentase)
                      : circleCircumference
                  }
                  strokeLinecap="round"
                />
              </G>
            </Svg>

            <TextInput
              ref={inputRef}
              underlineColorAndroid="transparent"
              editable={false}
              defaultValue={persentase ? persentase * 100 + '%' : '0'}
              style={styles.text}
            />
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>
      <View>
        <Title style={styles.cardTitle}>
          Total Played Days :{' '}
          {Math.floor((lastTime - firstTime) / (1000 * 60 * 60 * 24)) + 1} days{' '}
        </Title>
      </View>
      <View>
        <Title style={styles.cardTitle}>
          Total Mission : {user?.statistic?.totalMissions}{' '}
        </Title>
      </View>
    </View>
  )
}

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const styles = StyleSheet.create({
  containerOut: {
    alignItems: 'center',
    height: '100%',
    marginTop: 50,
    fontFamily: 'arcadeclassic',
  },
  cardTitle: {
    fontFamily: 'arcadeclassic',
    textAlign: 'justify',
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    color: 'black',
  },
  chart: {
    position: 'absolute',
    top: 0,
  },
  card1: {
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: 'red',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 3.5,
    backgroundColor: '#b4a5a5',
  },
  cardTitle: {
    left: 10,
  },
  card2: {
    width: '80%',
    marginBottom: 10,
    alignItems: 'flex-start',
    shadowColor: 'red',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 3.5,
    backgroundColor: '#d3e0ea',
  },
  card3: {
    width: '100%',
    alignItems: 'flex-start',
  },
  viewcard1: {
    paddingTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  viewcard2: {
    paddingTop: 10,
    width: '100%',
    alignItems: 'center',
  },
})
