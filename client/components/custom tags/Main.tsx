import { View as ExtendedMain, Text, ViewProps } from 'react-native'
import React from 'react'

interface MainProps extends ViewProps{
    className?:string,
    children?:React.ReactNode
}
const Main = ({children,className,...otherProps}:MainProps) => {
  return (
    <ExtendedMain className={`${className} main`}>
        {children}
    </ExtendedMain>
  )
}

export default Main