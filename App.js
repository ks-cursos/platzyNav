/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./src/screen/home";
import Login from "./src/screen/login";
import About from "./src/screen/about";
import Profile from "./src/screen/profile";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    path: "home/",
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.nombre}- title`
    })
  },
  Login,
  About,
  Profile
}, {
    initialRouteName: "Home",
    navigationOptions: {
      headerTitle: "Titulo Generico",
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'red'
      },
      gesturesEnabled: true,
      headerTitleAllowFontScaling: true
    },
    initialRouteKey: "home",
    initialRouteParams: {
      nombre: "FReddy Castillo"
    },
    headerMode: "screen",
    mode: "modal",
    cardStyle: {
      borderWidth: 2,
      backgroundColor: "red"
    },
    headerTransitionPreset: "uikit"

  });

const Main = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    Login: {
      screen: Login,
      navigationOptions:{
        title:"INgrese sus datos"
      }
    }
  },
  {
    initialRouteName: "Login",
    mode:"modal"
  }
)
const AppContainer = createAppContainer(Main);
export default AppContainer;