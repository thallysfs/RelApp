import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { theme } from './src/screens/styles/theme'
import Entypo from '@expo/vector-icons/Entypo'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

import { NativeBaseProvider, Box } from 'native-base'
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto'
import { Routes } from './src/routes'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  })

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} onLayout={onLayoutRootView}>
        <Routes />

        <StatusBar style="dark" />
      </Box>
    </NativeBaseProvider>
  )
}
