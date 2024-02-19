import React from 'react'

import { View } from 'react-native'
import { useNavigate } from 'react-router-native'

import ClassicButton from './ClassicButton'
import InriaText from './InriaText'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-evenly', alignItems : 'stretch'}}>

      <View style = {{padding : '10%', marginTop: '40%'}}>
        <InriaText text = "Welcome To Focus!" bold = {true} shadows = {true} size = {40} center = {true} />
      </View>
      
      <View style = {{padding : '5%'}}>
        <ClassicButton title = "Login" func = {() => navigate("/login")} color = "#E1E1E1" pressColor = "#CACACA" fontColor = "#000000" padding = "3%" margin = "2%" />
        <ClassicButton title = "Register" func = {() => navigate("/register")} color = "#E1E1E1" pressColor = "#CACACA" fontColor = "#000000" padding = "3%" margin = "2%" />
      </View>

    </View>
  )
}

export default HomePage
