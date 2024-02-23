import React, { useState } from 'react'

import { View, Image } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as ImagePicker from 'expo-image-picker';

import ClassicButton from './ClassicButton'
import InriaText from './InriaText'
import ClassicForm from './ClassicForm'

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(require('../assets/default_pfp.jpg'));
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const registerFunc = () => {
    // proverimo da li taj email vec postoji (mozda radi auth to sam), nakon toga kreiramo ovog korisnika i ulogujemo ga (ne mora jedinstven username i nista bukv, mozda samo neka zastita za sifru, mada ovo bolje ostaviti auth-u i ne cuvati u realtime db)
    
    // provera da li ima vise od 8 karaktera korisnicko ime, zbog prikaza zabraniti ovo?

    navigate("/" + email)
  }

  const picPicture = async () => {
    if(!status['granted'])
      {
        requestPermission();
      }

    if(status['granted'])
    {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  }

  return (
    <View style = {{display : 'flex', flexDirection : 'column', justifyContent : 'space-evenly', alignItems : 'stretch'}}>

      <View style = {{padding : '10%', paddingBottom : "3%"}}>
        <InriaText text = "Register" bold = {true} shadows = {true} size = {40} center = {true} />
      </View>

      <View style = {{padding : '5%'}}>
        <ClassicForm value = {email} setValue = {setEmail} placeholder = "Email..." contType = "emailAddress" />
        <ClassicForm value = {username} setValue = {setUsername} placeholder = "Username..." contType = "username" />
        <ClassicForm value = {password} setValue = {setPassword} placeholder = "Password..." contType = "password" />
        <ClassicButton title = "Profile picture" func = {() => picPicture()} color = "#E1E1E1" pressColor = "#CACACA" fontColor = "#000000" padding = "4%" margin = "5%" />
        <View style = {{padding : '5%', alignItems : 'center'}}>
          <Image style = {{borderWidth : 3, borderColor : "rgba(0,0,0,0.5)", borderRadius : 75, width : 150, height : 150,
          shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 4}}
          source = {image === require('../assets/default_pfp.jpg') ? image : { uri: image }} />
        </View>
      </View>
      
      <View style = {{display : 'flex', flexDirection : 'row', justifyContent : 'center', padding : '5%', paddingTop : "0%"}}>
        <ClassicButton title = "Back" func = {() => navigate(-1)} color = "#F04A4A" pressColor = "#D02919" fontColor = "#830000" padding = "4%" margin = "5%" />
        <ClassicButton title = "Register" func = {() => registerFunc()} color = "#2AD526" pressColor = "#18C314" fontColor = "#107400" padding = "4%" margin = "5%" />
      </View>

    </View>
  )
}

export default Register
