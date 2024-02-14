import React from 'react'

import { Button, Pressable } from 'react-native'

import InriaText from './InriaText'

const ClassicButton = (props) => {
  return (
    <Pressable onPress = {props.func} 
    style = {{borderRadius : '8%', backgroundColor : props.color, shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2,
    shadowRadius: 4, padding : props.padding}}>
      <InriaText text = {props.title}  color = {props.fontColor} size = {23} center = {true} bold = {true} />
    </Pressable>
  )
}

export default ClassicButton
