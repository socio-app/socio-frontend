import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
import MainPage from '../screen/MainPage'

const MainPageScreen = () => {
  ;<Stack.Screen name="MainPage" component={MainPage} />
}

export default MainPageScreen
