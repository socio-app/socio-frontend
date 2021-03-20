// import { StatusBar } from "expo-status-bar";
import * as updates from 'expo-updates'
import React from 'react'
import Navigation from './src/navigation/navigation'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainPage from './src/screen/MainPage.js'
import Home from './src/screen/Home.js'

console.log(updates.manifest)

const Stack = createStackNavigator()

export default function App() {
  const image = { uri: 'https://reactjs.org/logo-og.png' }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Navigation /> */}
    </Provider>
  )
}
