import React, { useState } from 'react'

import { ScrollView, View, Image, Pressable } from 'react-native'
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
  '16.02.2024' : {'description' : 'first time', 'timeSpent' : 200}}}]}) // useState(props.users[key]);

  const logout = () => {
    console.log("Logout")
    navigate("/")
  }

  return (
    <ScrollView contentContainerStyle = {{display : 'flex', flexDirection : 'column', padding : "3%"}}>
      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'space-evenly'}}>
        <View style = {{display : 'flex', flexDirection : 'column', flexGrow : 1}}>
          <View style = {{flexGrow : 2}}>
            <InriaText text = {"Hello,\n" + user.username} bold = {true} shadows = {true} size = {40} center = {true} />
          </View>

          <View style = {{flexGrow : 1}}>
            <ClassicButton title = "Logout" func = {() => logout()} color = "#F04A4A" pressColor = "#D02919" fontColor = "#830000" padding = "4%" margin = "5%" />
          </View>
        </View>

        <View style = {{flexGrow : 1, alignItems : 'center'}}>
          <Image style = {{borderWidth : 3, borderColor : "rgba(0,0,0,0.5)", borderRadius : 75, width : 150, height : 150,
          shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}
          source = {user.pfp} />
        </View>
      </View>

      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'space-evenly', padding : "2%", paddingTop : "8%"}}>
        {
          user.activities.map((value) => {
            return(
              <Activity activity = {value} />
            )
          })
        }
      </View>

      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'flex-end', padding : "12%", paddingTop : "2%"}}>
        <AddButton nav = 'addact' size = {70} />
      </View>
    </ScrollView>
  )
}

export default ProfilePage
