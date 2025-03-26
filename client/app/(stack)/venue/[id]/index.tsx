import {ScrollView } from 'react-native'
import React from 'react'
import Section from '@/components/custom tags/Section'
import SafeAreaMain from '@/components/SafeAreaMain'
import Text from '@/components/custom tags/Text'
import HeaderStack from '@/components/HeaderStack'

const DetailScreen = () => {
    const ImageSection = ()=>{
        return(
            <Section>

            </Section>
        )
    }

    const IntroSection = () =>{
        return(
            <Section>

            </Section>
        )
    }

    const ReviewSection = () =>{
        return(
            <Section>

            </Section>
        )
    }

    const SlotSection = () =>{
        return(
            <Section>

            </Section>
        )
    }
  return (
    <SafeAreaMain>
        <ScrollView>
            <HeaderStack/>
            <Text className='heading'>turf detail screen</Text>
        </ScrollView>
    </SafeAreaMain>
  )
}

export default DetailScreen