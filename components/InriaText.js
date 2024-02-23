import React from 'react'

import {  useFonts, InriaSans_400Regular, InriaSans_700Bold } from '@expo-google-fonts/inria-sans';

import { Text } from 'react-native';

const InriaText = (props) => {
  useFonts({
    InriaSans_700Bold,
    InriaSans_400Regular,
  });

  return (
    <Text style = {{fontFamily : (props.bold ? 'InriaSans_700Bold' : 'InriaSans_400Regular'), textAlign : (props.center ? 'center' : 'auto'), color : props.color,
     fontSize : props.size, textShadowColor: (props.shadows ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0)'), textShadowOffset: {width: 1, height: 5}, textShadowRadius: 4}}>
      {props.text}
    </Text>
  )
}

export default InriaText