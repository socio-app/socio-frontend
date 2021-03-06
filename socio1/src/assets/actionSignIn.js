import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/login.js'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

export default function ActionSignin(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const access_token = useSelector((state) => state.user.access_token)

  const dispatch = useDispatch()

  useEffect(() => {
    if (access_token) {
      props.handleChangePage('Home')
    }
  }, [access_token])

  const handleSubmit = () => {
    dispatch(
      login({
        email,
        password,
      })
    )
  }

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
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
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
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
  input: {
    width: '100%',
  },
  TextInput: {
    borderRadius: 7,
    paddingLeft: 50,
    paddingVertical: 15,
    paddingRight: 8,
    width: '100%',
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 44,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
