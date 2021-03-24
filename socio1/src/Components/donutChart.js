import React, { useState, useRef, useCallback } from 'react'
import {
  StyleSheet,
  Easing,
  Text,
  TextInput,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  Platform,
  Animated,
  style,
  TouchableWithoutFeedback,
} from 'react-native'
import Svg, { G, Circle, Rect } from 'react-native-svg'
import { useEffect } from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'

import Header from './HeaderComponents'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/core'

export default function Donut({
  percentage = 75,
  radius = 90,
  strokeWidth = 40,
  duration = 500,
  color = 'tomato',
  delay = 500,
  textColor,
  max = 100,
}) {
  const inputRef = React.useRef()
  const halfCircle = radius + strokeWidth
  const circleCircumference = 2 * Math.PI * radius
  const user = useSelector((state) => state.user.user)
  const [persentase, setPersentase] = useState(0)
  const [totalMission, setTotalMission] = useState(0)
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      console.log(
        user?.statistic?.totalSuccessMissions,
        user?.statistic?.totalMissions,
        'hasil itung'
      )
      setPersentase(
        user?.statistic?.totalSuccessMissions / user?.statistic?.totalMissions
      )
      // setTotalMission(user?.statistic?.totalMissions)
    }, [user.statistic])
  )
  console.log(persentase, 'setelah usefocuseffect')

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

      {/* <View style={styles.viewcard1}>
        <Card style={styles.card2}>
          <Animatable.View animation="bounceInLeft">
            <Title style={styles.cardTitle}>Total Played Days: {Math.floor((lastTime - firstTime) / (1000 * 60 * 60 * 24)) + 1} days </Title>
          </Animatable.View>
        </Card>
      </View>

      <View style={styles.viewcard2}>
        <Card style={styles.card2}>
          <Title style={styles.cardTitle}>Total Mission: {user?.statistic?.totalMissions}  </Title>
        </Card>
      </View> */}
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

const { width } = Dimensions.get('window')
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const scale = SCREEN_WIDTH / 320

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
