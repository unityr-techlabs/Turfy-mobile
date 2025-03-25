import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'

const profile = () => {
  return (
    <SafeAreaView className='background flex-1 '>
      <ScrollView  showsVerticalScrollIndicator={false}>
      <Main>
        <Text type='heading' className='heading capitalize'>hello</Text>
        <Text type='subHeading' className='heading capitalize'>hello</Text>

        <Text type='para' className='paragraph capitalize'>hello</Text>
        <Text className='heading capitalize'>hello</Text>

      </Main>
    </ScrollView>
    </SafeAreaView>
  )
}

export default profile