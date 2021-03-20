import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  Platform,
} from 'react-native'
import ActionSignin from '../assets/actionSignIn'
import ActionSignup from '../assets/actionSignUp'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'

export default class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enable: true,
    }
  }

  tab(value) {
    if (value == 'SignIn') {
      this.setState({
        enable: true,
      })
    } else {
      this.setState({
        enable: false,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <ImageBackground
            source={require('../../src/assets/sociobackkground.jpg')}
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}
            resizeMode={'stretch'}
          >
            <View style={styles.logo}>
              <Image
                source={require('../../src/assets/sociologo1.png')}
                style={{
                  width: '100%',
                  height: '100%',

                  // marginLeft: '11%',
                }}
                resizeMode={'stretch'}
              />
            </View>

            <View style={styles.tabbar}>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => this.tab('SignIn')}
                  style={[
                    styles.item,
                    {
                      backgroundColor: this.state.enable ? 'orange' : 'green',
                      borderTopLeftRadius: width / 2 / 2,
                      borderBottomLeftRadius: width / 2 / 2,
                    },
                  ]}
                >
                  <FontAwesome
                    name="sign-in"
                    size={30}
                    color={this.state.enable ? 'black' : 'white'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.tab('SignUp')}
                  style={[
                    styles.item,
                    {
                      backgroundColor: this.state.enable ? 'green' : 'orange',
                      borderTopRightRadius: width / 2 / 2,
                      borderBottomRightRadius: width / 2 / 2,
                    },
                  ]}
                >
                  <FontAwesome
                    name="registered"
                    size={30}
                    color={this.state.enable ? 'white' : 'black'}
                  />
                </TouchableOpacity>
              </View>
              {this.state.enable ? <ActionSignin /> : <ActionSignup />}
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  }
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

//const width = Dimensions.get("screen").width;
//tentuin topnya flex berapa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0,
    flexBasis: SCREEN_HEIGHT,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflow: 'scroll',
  },
  header: {
    flex: 1,
    // paddingHorizontal: 5,
  },
  logo: {
    // flex: 1,
    marginTop: 20,
    width: 200,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2.62,
    // elevation: 2,
  },
  tabbar: {
    // position: 'relative',
    width: width,
    // bottom: 250,
    // height: 80,
    marginTop: 20,
    justifyContent: 'center',
  },
  box: {
    width: width / 2,
    height: 50,
    borderRadius: width / 2 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2.62,
    flexDirection: 'row',
    marginLeft: 90,
  },

  item: {
    width: width / 2 / 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
