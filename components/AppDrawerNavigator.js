import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import {createDrawerNavigator} from 'react-navigation-drawer'
import AppTabNavigator from './AppTabNavigator' 
import CustomSideBarMenu from './CustomSideBarMenu'
import EditScreen from '../screens/EditScreen'

export const AppDrawerNavigator = createDrawerNavigator(
    {
      Home : {screen : AppTabNavigator},
      Setting : {screen : EditScreen},
    },

    {
      contentComponent : CustomSideBarMenu
    },
    
    {
      initialRouteName : 'Home' 
    })