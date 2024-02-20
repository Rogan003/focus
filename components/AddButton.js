import React, { useState } from 'react'

import { Pressable } from 'react-native'
import { useNavigate } from 'react-router-native';

import Icon from 'react-native-vector-icons/AntDesign';

const AddButton = (props) => {
  const navigate = useNavigate();

  const [plusColor, setPlusColor] = useState('#000000')

  return (
    <Pressable onPress = {() => navigate(props.nav)} onPressIn = {() => setPlusColor('#2A2A2A')} onPressOut = {() => setPlusColor("#000000")}>
      <Icon name = "pluscircle" size = {props.size} color = {plusColor} />
    </Pressable>
  )
}

export default AddButton
