import React, { useState } from 'react'

import { Pressable } from 'react-native'

import InriaText from './InriaText'

const ClassicButton = (props) => {
  const styleOne = {borderRadius : '8%', backgroundColor : props.color, shadowColor: '#171717', flexGrow : 1,
  shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4, padding : props.padding, margin : props.margin};

  const styleTwo = {borderRadius : '8%', backgroundColor : props.pressColor, shadowColor: "#171717", flexGrow : 1,
  shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4, padding : props.padding, margin : props.margin};

  const [styleReal, setStyleRead] = useState(styleOne);

  return (
    <Pressable onPress = {props.func}  onPressIn = {() => setStyleRead(styleTwo)} onPressOut = {() => setStyleRead(styleOne)} style = {styleReal}>
      <InriaText text = {props.title}  color = {props.fontColor} size = {23} center = {true} bold = {true} />
    </Pressable>
  )
}

export default ClassicButton
