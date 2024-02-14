import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
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
      <SafeAreaView style = {[SafeViewAndroid.AndroidSafeArea, {flexGrow : 1, backgroundColor : "#FBFBFB"}]}>
          <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
            <Route path = "/:key" element = {<ProfilePage />} />
            <Route path = "/addact" element = {<AddActivity />} />
            <Route path = "/disact" element = {<DisplayActivity />} />
            <Route path = "/logact" element = {<LogActivity />} />
          </Routes>
          <StatusBar style = 'auto'></StatusBar>
      </SafeAreaView>
    </NativeRouter>
  );
}
