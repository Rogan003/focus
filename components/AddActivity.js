import React, { useState } from 'react'

import { View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import Slider from '@react-native-community/slider'

import ClassicButton from './ClassicButton'
import InriaText from './InriaText'
import ClassicForm from './ClassicForm'

const AddActivity = () => {
    const navigate = useNavigate();

    const [activityName, setActivityName] = useState("");
    const [goal, setGoal] = useState("");
    const [color, setColor] = useState(toHsv("black"));

    const addact = () => {
      // dodavanje aktivnosti, dodaje se fromHsv(color)
    }

    return (
      <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-evenly', alignItems : 'stretch'}}>

        <View style = {{padding : '10%', paddingBottom : "3%", marginTop : "10%"}}>
          <InriaText text = "New Activity" bold = {true} shadows = {true} size = {40} center = {true} />
        </View>

        <View style = {{padding : '5%'}}>
          <ClassicForm value = {activityName} setValue = {setActivityName} placeholder = "Activity..." contType = "field" />
          <ClassicForm value = {goal} setValue = {setGoal} placeholder = "Goal (minutes)..." contType = "field" />
          
          <View style = {{padding : "1%", alignItems : 'center'}}>
            <ColorPicker
              color={color}
              onColorChange={(color) => setColor(color)}
              sliderComponent={Slider}
              style = {{height : 300, width : 300}}
            />
          </View>
        </View>
        
        <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'center', padding : '5%', paddingTop : "0%"}}>
          <ClassicButton title = "Back" func = {() => navigate(-1)} color = "#F04A4A" pressColor = "#D02919" fontColor = "#830000" padding = "4%" margin = "5%" />
          <ClassicButton title = "Add" func = {() => addact()} color = "#2AD526" pressColor = "#18C314" fontColor = "#107400" padding = "4%" margin = "5%" />
        </View>

      </View>
    )
}

export default AddActivity
