import { ViewProps, Text,View as ExtendedView } from 'react-native'
import React from 'react'

interface CustomViewProp extends ViewProps {
    className?: string,
    children?: React.ReactNode
}

const View = ({className,children,...otherProps}:CustomViewProp) => {
  return (
    <ExtendedView className={`${className}`}>
      {children}
    </ExtendedView>
  )
}

export default View