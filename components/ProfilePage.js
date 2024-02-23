import React, { useState } from 'react'

import { ScrollView, View, Image } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'

import InriaText from './InriaText'
import ClassicButton from './ClassicButton'
import AddButton from './AddButton'
import Activity from './Activity'

const ProfilePage = () => {
  const navigate = useNavigate();

  const { key } = useParams();
  const [user, setUser] = useState({username : "Rogan003", pfp : require('../assets/default_pfp.jpg'), 
  activities : [{color : 'orange', name : 'Programming', goal : 100, 
  days : {'19.02.2024' : {'description' : 'okay', 'timeSpent' : 150}, '17.02.2024' : {'description' : 'works', 'timeSpent' : 100}, 
  '16.02.2024' : {'description' : 'first time', 'timeSpent' : 200}}}, {color : 'red', name : 'Mental health', goal : 30, 
  days : {'15.02.2024' : {'description' : 'okay', 'timeSpent' : 35}, '18.02.2024' : {'description' : 'works', 'timeSpent' : 50}}}, 
  {color : 'blue', name : 'Swimming', goal : 120, 
  days : {'19.02.2024' : {'description' : 'okay', 'timeSpent' : 150}, '17.02.2024' : {'description' : 'works', 'timeSpent' : 100}, 
  '16.02.2024' : {'description' : 'first time', 'timeSpent' : 200}}}]}) // useState(props.users[key]);

  const logout = () => {
    console.log("Logout")
    navigate("/")
  }

  return (
    <ScrollView>
      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'space-evenly', alignItems : 'center'}}>
        <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
          <View>
            <InriaText text = {"Hello,\n" + user.username} bold = {true} shadows = {true} size = {40} center = {true} />
          </View>

          <View>
            <ClassicButton title = "Logout" func = {() => logout()} color = "#F04A4A" pressColor = "#D02919" fontColor = "#830000" padding = "4%" margin = "5%" />
          </View>
        </View>

        <View style = {{alignItems : 'center'}}>
          <Image style = {{borderWidth : 3, borderColor : "rgba(0,0,0,0.5)", borderRadius : 75, width : 150, height : 150,
          shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}
          source = {user.pfp} />
        </View>
      </View>

      <View style = {{padding : "2%"}}>
        {
          user.activities.map((value) => {
            return(
              <Activity activity = {value} />
            )
          })
        }
      </View>

      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'flex-end', padding : "10%"}}>
        <AddButton nav = 'addact' size = {70} />
      </View>
    </ScrollView>
  )
}

export default ProfilePage
