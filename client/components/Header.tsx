import React from 'react'
import View from './custom tags/View'
import Text from './custom tags/Text'
import Main from './custom tags/Main'
import { Octicons } from '@expo/vector-icons'
import Section from './custom tags/Section'

const Header = () => {
  return (
        <Section className=' py-3'>
              <Main className='flex flex-row justify-between items-center '>
                <View className=' flex flex-row gap-4 items-center'>
                  <View className=' extraground rounded-[100%] p-[10%] flex justify-center items-center relative'>
                    <Text className=' absolute text-transparent' >i</Text>
                  </View>
                  <View className='flex gap-0'>
                    <Text type='subHeading' className=' capitalize heading !text-base'>mohammed nowfal</Text>
                    <Text type='para' className=' capitalize paragraph'>ramanathapuram, tamilnadu</Text>

                  </View>
                </View>
                {/* <Octicons className=' !text-xl xs:!text-2xl sm:!text-xl lg:!text-3xl xxl:!text-4xl !heading' name='bell'/> */}
              </Main>
            </Section>
  )
}

export default Header