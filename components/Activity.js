import React, { useEffect, useState } from 'react'

import { View } from 'react-native'

import InriaText from './InriaText'
import AddButton from './AddButton'
import DisplayActivity from './DisplayActivity'

const Activity = (props) => {
  const [allDates, setAllDates] = useState([[]]);

  useEffect(() => {
    let day = new Date();

    let allDatesHelp = [];
    let dateList = [];

    for(var i = 0;i < 10;i++)
    {
      for(var j = 0;j < 3;j++)
      {
        dateList.push((day.getDate() < 10 ? "0" + day.getDate() : day.getDate()) + "." + (day.getMonth() < 9 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1))
        + "." + day.getFullYear());
        day.setDate(day.getDate() - 1);
      }

      allDatesHelp.push(dateList.reverse());
      dateList = [];
    }

    setAllDates(allDatesHelp.reverse());
  }, []);

  return (
    <View>
      <View style = {{display : 'flex', flexDirection : 'row', padding : "5%"}}>
        <InriaText text = {props.activity.name} bold = {true} shadows = {false} size = {25} center = {true} />

        <View style = {{paddingLeft : '5%'}}>
          <AddButton nav = {props.activity.name} size = {35} />
        </View>
      </View>

      <View style = {{display : 'flex', flexDirection : 'row', padding : "1%", backgroundColor : props.activity.color, 
      borderRadius : "10%", shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}>
        {
          allDates.map((value) => {
            return(
              <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-evenly'}}>
                {
                  value.map((value2) => {
                    return(
                      <DisplayActivity 
                      color = {(value2 in props.activity.days && props.activity.days[value2]['timeSpent'] >= props.activity.goal) ? props.activity.color : "#FFFFFF"} 
                      activity = {value2} /> 
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>

      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'center', padding : "3%"}}>
        <InriaText text = {allDates[0][0] + " - " + allDates[allDates.length - 1][2]} bold = {false} shadows = {false} size = {22} center = {true} />
      </View>
    </View>
  )
}

export default Activity
{/* dodati kod koji proverava jel ovaj dan odradjen i jel cilj odradjen */}