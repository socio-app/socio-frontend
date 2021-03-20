import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

export default class ActionSignin extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Animatable.View animation="bounceInLeft" style={styles.container}>
          <View style={styles.section}>
            <View style={styles.icon}>
              <MaterialIcons name="email" color="gray" size={20} />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Your email ...."
                style={styles.TextInput}
              />
            </View>
          </View>
          <View
            style={[
              styles.section,
              {
                marginTop: 15,
              },
            ]}
          >
            <View style={styles.icon}>
              <MaterialIcons name="lock" color="gray" size={20} />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Your password ...."
                style={styles.TextInput}
                secureTextEntry={true}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button_container}>
            <View style={styles.button}>
              <Text style={styles.text}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
    paddingHorizontal: 20,
    width: '90%',
  },
  section: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 7,
    opacity: 0.9,
    position: 'relative',
  },
  icon: {
    borderRightWidth: 1,
    borderRightColor: 'gray',
    paddingRight: 10,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -10 }],
    left: 10,
  },

  input: {},

  TextInput: {
    borderRadius: 7,
    paddingLeft: 50,
    paddingVertical: 15,
    paddingRight: 8,
    width: '100%',
  },

  button_container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 7,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
