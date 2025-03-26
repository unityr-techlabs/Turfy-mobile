import React from 'react'
import Section from './custom tags/Section'
import Main from './custom tags/Main'
import Text from './custom tags/Text'
import { Link } from 'expo-router'

const HeaderStack = () => {
  return (
    <Section>
        <Main className='flex flex-row justify-between'>
            <Text type='subHeading' className='heading capitalize'>Hello</Text>
            <Text type='para' className='paragraph capitalize'>Hello</Text>
        </Main>
    </Section>
  )
}

export default HeaderStack