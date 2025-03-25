import React, { ReactNode } from "react";
import { SafeAreaView as IosView, Platform } from "react-native";
import { SafeAreaView as AndroidView } from "react-native-safe-area-context";


interface SafeAreaMainProp{
    children:ReactNode
}
const SafeAreaMain = ({children}:SafeAreaMainProp) =>{
  
    const SafeAreaView = Platform.OS === "ios" ? IosView : AndroidView; // if required use AndroidView for android
    return(
        <SafeAreaView className="flex-1 background">{children}</SafeAreaView>
    )
}

export default SafeAreaMain