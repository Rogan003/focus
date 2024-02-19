import React from 'react'

import { TextInput } from 'react-native'

import {  useFonts, InriaSans_400Regular, InriaSans_700Bold } from '@expo-google-fonts/inria-sans';

const ClassicForm = (props) => {
  useFonts({
    InriaSans_400Regular,
  });

  return (
    <TextInput style = {{borderRadius : '8%', backgroundColor : "#E1E1E1", shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, 
    shadowOpacity: 0.2, shadowRadius: 4, padding : "4%", margin : "3%", fontSize : 18, fontFamily : "InriaSans_400Regular"}} 
    value = {props.value} autoCapitalize = {props.contType === "emailAddress" || props.contType === "password" || props.placeholder === "username" ? "none" : "sentences"} secureTextEntry = {props.contType === "password"}
    onChangeText={(e) => props.setValue(e)} placeholder = {props.placeholder} textAlign = 'center' placeholderTextColor = "#a9a9a9" textContentType = {props.contType} />
  )
}

export default ClassicForm
