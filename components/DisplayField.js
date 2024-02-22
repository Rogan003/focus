import React, { useEffect, useState } from 'react'

import { View } from 'react-native'
import { useNavigate } from 'react-router-native'

import ClassicButton from './ClassicButton'
import InriaText from './InriaText'
import ClassicForm from './ClassicForm'

const DisplayField = (props) => {
  const navigate = useNavigate();

  const [activity, setActivity] = useState({activity : "Mental health", description : "No description", timeSpent : 0});
  // dodati da se activity zapravo ucitava kao i dole popunjava, a ne samo sad
  useEffect(() => {

  });

  return (
    <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-evenly', alignItems : 'stretch'}}>

      <View style = {{padding : '10%', paddingBottom : "3%", marginTop : "40%"}}>
        <InriaText text = "Display activity" bold = {true} shadows = {true} size = {40} center = {true} />
      </View>

      <View style = {{padding : '10%'}}>
        <View style = {{padding : '2%', marginBottom : '5%', borderRadius : '8%', backgroundColor : 'red', shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}>
          <InriaText text = {activity.activity} bold = {true} shadows = {false} size = {23} center = {true} color = "#222222" />
        </View>

        <View style = {{padding : '2%', marginBottom : '5%', borderRadius : '8%', backgroundColor : 'red', shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}>
          <InriaText text = {activity.description} bold = {true} shadows = {false} size = {23} center = {true} color = "#222222" />
        </View>

        <View style = {{padding : '2%', borderRadius : '8%', backgroundColor : 'red', shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}>
          <InriaText text = {activity.timeSpent + ' minutes'} bold = {true} shadows = {false} size = {23} center = {true} color = "#222222" />
        </View>
      </View>
      
      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'center', padding : '5%', paddingTop : "0%"}}>
        <ClassicButton title = "Back" func = {() => navigate(-1)} color = "#F04A4A" pressColor = "#D02919" fontColor = "#830000" padding = "4%" margin = "5%" />
      </View>

    </View>
  )
}

export default DisplayField
