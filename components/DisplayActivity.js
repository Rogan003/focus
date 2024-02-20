import React from 'react'

import { Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

const DisplayActivity = (props) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress = {() => navigate("disact")}
    style = {{borderRadius : "10%", width : "80%", height : "17%", backgroundColor : props.color, margin : '5%', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}>

    </Pressable>
  )
}

export default DisplayActivity
