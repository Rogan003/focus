import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';

import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import ProfilePage from './components/ProfilePage'
import AddActivity from './components/AddActivity'
import DisplayActivity from './components/DisplayActivity'
import LogActivity from './components/LogActivity'
import SafeViewAndroid from "./components/SafeViewAndroid"

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style = {[{backgroundColor : "#CCCCCC", flex : 1}, SafeViewAndroid.AndroidSafeArea]}>
          <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
            <Route path = "/:key" element = {<ProfilePage />} />
            <Route path = "/:key/addact" element = {<AddActivity />} />
            <Route path = "/:key/disact" element = {<DisplayActivity />} />
            <Route path = "/:key/logact" element = {<LogActivity />} />
          </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}

/*
      <ScrollView>
        <Text style = {{fontSize : 100}}>H</Text>
        <Text style = {{fontSize : 100}}>H</Text>
        <Text style = {{fontSize : 100}}>H</Text>
        <Text style = {{fontSize : 100}}>H</Text>
        <Text style = {{fontSize : 100}}>H</Text>
        <Text style = {{fontSize : 100}}>H</Text>
        <Text style = {{fontSize : 100}}>H</Text>
        <Text style = {{fontSize : 100}}>H</Text>
      </ScrollView>
      */