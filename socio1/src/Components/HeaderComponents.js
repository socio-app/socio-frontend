import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ProgressBar, Colors } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'

const Progress = ({ step, steps, height }) => {
  return (
    <>
      <View
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0,1)',
          borderRadius: height,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            height,
            width: '50%',
            borderRadius: height,
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: 'rgba(0,0,0,0.5',
          }}
        />
      </View>
    </>
  )
}

export default function Header() {
  const user = useSelector((state) => state.user.user)
  return (
    <View container style={styles.header}>
      <View style={styles.avatar}>
        <Avatar.Image size={42} source={{ uri: user.photo }} />
      </View>
      <View style={styles.progressBar}>
        {/* <Avatar.Text size={45} label="ProgressBar" /> */}
        <View style={styles.textLevel}>
          <Text>Exp {user?.currentExperience} / 10</Text>
        </View>
        <ProgressBar
          progress={(user?.currentExperience / 10) * 1.5}
          color={Colors.red800}
          style={styles.progressbarinner}
        />
      </View>
      <View style={styles.level}>
        <Avatar.Text size={42} label={user?.level} style={{ backgroundColor: "#dddddd" }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    // alignItems: "start",
    flexDirection: 'row',
    // justifyContent: "center",
    backgroundColor: '#eee',
  },
  avatar: {
    justifyContent: 'center',
    left: 15
  },
  level: {
    justifyContent: 'center',
    right: 15,
    marginLeft: '25%',
  },
  progressBar: {
    flex: 1,
    backgroundColor: 'transparent',
    width: 50,
    justifyContent: 'center',
    marginLeft: '8%',
  },
  progressbarinner: {
    width: '135%',
    justifyContent: 'center',
  },
  textLevel: {
    paddingBottom: 5,
    left: "50%"
  },
})
