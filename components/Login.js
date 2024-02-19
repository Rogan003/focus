import React, { useState } from 'react'

import { View } from 'react-native'
import { useNavigate } from 'react-router-native'

import ClassicButton from './ClassicButton'
import InriaText from './InriaText'
import ClassicForm from './ClassicForm'

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = () => {
    console.log("Hey")
  }

  return (
    <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-evenly', alignItems : 'stretch'}}>

      <View style = {{padding : '10%', marginTop: '40%', paddingBottom : "3%"}}>
        <InriaText text = "Login" bold = {true} shadows = {true} size = {40} center = {true} />
      </View>

      <View style = {{padding : '5%'}}>
        <ClassicForm value = {email} setValue = {setEmail} placeholder = "Email..." contType = "emailAddress" />
        <ClassicForm value = {password} setValue = {setPassword} placeholder = "Password..." contType = "password" />
      </View>
      
      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'center', padding : '5%', paddingTop : "2%"}}>
        <ClassicButton title = "Back" func = {() => navigate(-1)} color = "#F04A4A" pressColor = "#D02919" fontColor = "#830000" padding = "4%" margin = "5%" />
        <ClassicButton title = "Login" func = {() => loginFunc()} color = "#2AD526" pressColor = "#18C314" fontColor = "#107400" padding = "4%" margin = "5%" />
      </View>

    </View>
  )
}

export default Login
