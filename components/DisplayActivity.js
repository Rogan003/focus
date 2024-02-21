import React from 'react'

import { Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

const DisplayActivity = (props) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress = {() => navigate("disact")}
    style = {{borderRadius : 8, width : 25, height : 25, backgroundColor : props.color, margin : 6, shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}>

    </Pressable>
  )
}

export default DisplayActivity
