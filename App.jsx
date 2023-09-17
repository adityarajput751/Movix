import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/home'
import LefttoRightAnimation from './src/screens/LefttoRightAnimation'
import ItemPopup1 from './src/screens/Final'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <HomeScreen />
      {/* <ItemPopup1 /> */}
      {/* <LefttoRightAnimation /> */}
    </View>
  )
}

export default App