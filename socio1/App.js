// import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationPage from "./src/navigation/navigation";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const AppStack = createStackNavigator();

export default function App() {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <Provider store={store}>
      <NavigationPage />
    </Provider>
  );
}
