import React from 'react'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard'

export default function App() {
  // Utiliza a função useFonts() para fazer o
  // carregamento das fontes no App
  const fontsLoaded = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  
  // Enquanto as fonts não estiverem carregadas
  // (for falso) apenas exibir uma tela de carregamento
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Dashboard />
    </ThemeProvider>
  )
}
