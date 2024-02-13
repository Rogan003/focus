import React from 'react'

import { Button, Pressable } from 'react-native'

const ClassicButton = (props) => {
  return (
    <Pressable style = {{borderRadius : '8%', backgroundColor : props.color, boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <Button title = {props.title} onPress = {() => props.func} color = {props.color} />
    </Pressable>
  )
}

export default ClassicButton
