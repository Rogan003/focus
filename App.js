import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';

import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import ProfilePage from './components/ProfilePage'
import AddActivity from './components/AddActivity'
import DisplayField from './components/DisplayField';
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
            <Route path = "/:key/disact" element = {<DisplayField />} />
            <Route path = "/:key/:act" element = {<LogActivity />} />
          </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}