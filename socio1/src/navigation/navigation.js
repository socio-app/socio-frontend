import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import MainPage from "../screen/MainPage";
import Home from "../screen/Home";
import MissionList from "../screen/MissionList";
import UserStats from "../screen/UserStats";
import MainPageScreen from "../navigation/MainpageNav";

function HomeHandling() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      {/* <Tab.Screen name="MainPage" component={MainPage} /> */}

      <Tab.Screen
        name="MissionList"
        component={MissionList}
        options={{
          tabBarLabel: "MissionList",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={size}
            />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserStats"
        component={UserStats}
        options={{
          tabBarLabel: "UserStats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Home" component={HomeHandling} />
        <Stack.Screen name="MissionList" component={MissionList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
