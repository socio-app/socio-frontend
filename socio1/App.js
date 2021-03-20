// import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./src/navigation/navigation";
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './src/screen/MainPage.js'
import Home from './src/screen/Home.js'

const Stack = createStackNavigator();

export default function App() {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Navigation /> */}
    </Provider>
  )
}
