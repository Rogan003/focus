import React, { useState } from 'react'

import { View } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'

import ClassicButton from './ClassicButton'
import InriaText from './InriaText'
import ClassicForm from './ClassicForm'

const LogActivity = () => {
  const navigate = useNavigate();
  const { act } = useParams();

  const [timeSpent, setTimeSpent] = useState("");
  const [description, setDescription] = useState("");

  const logact = () => {
    // dodavanje aktivnosti
  }

  return (
    <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-evenly', alignItems : 'stretch'}}>

      <View style = {{padding : '10%', paddingBottom : "3%", marginTop : "40%"}}>
        <InriaText text = {"Log " + act} bold = {true} shadows = {true} size = {40} center = {true} />
      </View>

      <View style = {{padding : '5%'}}>
        <ClassicForm value = {timeSpent} setValue = {setTimeSpent} placeholder = "Time spent..." contType = "field" />
        <ClassicForm value = {description} setValue = {setDescription} placeholder = "Description..." contType = "field" />
      </View>
      
      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'center', padding : '5%', paddingTop : "0%"}}>
        <ClassicButton title = "Back" func = {() => navigate(-1)} color = "#F04A4A" pressColor = "#D02919" fontColor = "#830000" padding = "4%" margin = "5%" />
        <ClassicButton title = "Add" func = {() => logact()} color = "#2AD526" pressColor = "#18C314" fontColor = "#107400" padding = "4%" margin = "5%" />
      </View>

    </View>
  )
}

export default LogActivity
