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
  Home,
  Login,
  About,
  Profile
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;