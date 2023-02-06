import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas
import { Home } from '../screens/Home'
import { AboutChild } from '../screens/AboutChild'
// import { Confirm } from '../screens/Confirm'
// import { Login } from '../screens/Login';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="AboutChild" component={AboutChild} />
    </Navigator>
  )
}
