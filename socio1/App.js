// import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationPage from "./src/navigation/navigation";


const AppStack = createStackNavigator();

export default function App() {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <NavigationPage />
   
  );
}
