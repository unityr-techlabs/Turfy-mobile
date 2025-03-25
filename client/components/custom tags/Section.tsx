import { View, Text, ViewProps } from 'react-native'
import React from 'react'

interface SectionProps extends ViewProps{
    children?:React.ReactNode,
    className?:string
}
const Section = ({children,className}:SectionProps) => {
  return (
    <View className={`${className} py-3`}>
        {children}
    </View>
  )
}

export default Section