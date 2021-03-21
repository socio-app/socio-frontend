// import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationPage from "./src/navigation/navigation";
import MainPageScreen from "./src/navigation/MainpageNav";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "./src/screen/MainPage";

const AppStack = createStackNavigator();

export default function App() {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <NavigationPage />
    // <NavigationContainer>
    //   <AppStack.Navigator>
    //     {/* <AppStack.Screen name="MainPage" component={MainPage} /> */}
    //     <AppStack.Screen name="Navigation" component={NavigationPage} />
    //   </AppStack.Navigator>
    // </NavigationContainer>
  );
}
