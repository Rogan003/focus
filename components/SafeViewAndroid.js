import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS !== "ios" ? StatusBar.currentHeight : 0
    }
});