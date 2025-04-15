import { Image, SafeAreaView, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'
import Section from '@/components/custom tags/Section'
import View from '@/components/custom tags/View'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SafeAreaMain from '@/components/SafeAreaMain'
import {
  AntDesign,
  Octicons,
  Foundation,
  Feather,
  MaterialIcons,
  FontAwesome,
  Ionicons,
  FontAwesome6,
  FontAwesome5,
  EvilIcons,
} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

// Mapping for dynamic icon rendering
const IconMap: any = {
  AntDesign,
  Octicons,
  Ionicons,
  Foundation,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
  EvilIcons,
}

// Profile section at the top
const ProfileSection = () => (
  <View className="flex flex-row justify-between items-center">
    <View>
      <Text type="subHeading" className="capitalize heading !text-base">
        James Martin
      </Text>
      <Text type="para" className="capitalize paragraph">
        Personal account
      </Text>
    </View>
    <Image
      className="rounded-full"
      style={{ width: hp(6), height: hp(6) }}
      source={require('@/assets/images/profile.jpg')}
    />
  </View>
)

const profileItems = [
  { IconName: 'person', title: 'Card Conformation', IconFamily: 'Ionicons' },
  { IconName: 'bank', title: 'Account details', IconFamily: 'FontAwesome' },
  { IconName: 'creditcard', title: 'Transaction history', IconFamily: 'AntDesign' },
  { IconName: 'document', title: 'Documents', IconFamily: 'Ionicons' },
]

// Profile settings section
const SettingSection = () => {
  const Setting = ({ item }: { item: any }) => {
    const Icon = IconMap[item.IconFamily]
    return (
      <View className="flex flex-row justify-between items-center ">
        <View className="flex flex-row items-center">
          <Icon name={item.IconName} size={hp(2)} color="green" />
          <Text type="heading" className="paragraph capitalize ml-3">
            {item.title}
          </Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="right" size={hp(2)} color="green" />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View className="extraground rounded-xl px-3 py-5 gap-8 mt-3">
      {profileItems.map((item, index) => (
        <Setting key={index} item={item} />
      ))}
    </View>
  )
}

// Profile wrapper
const Profile = () => (
  <View className="mt-8">
    <Text type="heading" className="capitalize paragraph">
      Profile
    </Text>
    <SettingSection />
  </View>
)

// Security settings
const Security = () => {
  const [faceID, setFaceID] = useState(true)
  const [hide, setHide] = useState(false)

  const options = [
    { IconName: 'device-desktop', title: 'Devices', IconFamily: 'Octicons', type: 'arrow' },
    { IconName: 'lock', title: 'Privacy', IconFamily: 'AntDesign', type: 'arrow' },
    {
      IconName: 'smile-beam',
      title: 'Face ID',
      IconFamily: 'FontAwesome5',
      type: 'switch',
      value: faceID,
      onToggle: () => setFaceID(!faceID),
    },
    {
      IconName: 'eye-off',
      title: 'Hide balance',
      IconFamily: 'Ionicons',
      type: 'switch',
      value: hide,
      onToggle: () => setHide(!hide),
    },
  ]

  return (
    <View className="mt-8">
      <Text type="heading" className="capitalize paragraph">
        Security
      </Text>
      <View className=" extraground rounded-xl px-3 py-5 gap-5 mt-5">
        {options.map((item, index) => {
          const Icon = IconMap[item.IconFamily]
          return (
            <View
              key={index}
              className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center">
                <Icon name={item.IconName} size={hp(2.2)} color="green" />
                <Text type="heading" className="ml-3 capitalize paragraph">
                  {item.title}
                </Text>
              </View>
              {item.type === 'arrow' ? (
                <TouchableOpacity>
                  <AntDesign name="right" size={hp(2)} color="green" />
                </TouchableOpacity>
              ) : (
                <Switch
                  trackColor={{ false: '#ccc', true: 'green' }}
                  thumbColor="#fff"
                  ios_backgroundColor="#ccc"
                  onValueChange={item.onToggle}
                  value={item.value}
                />
              )}
            </View>
          )
        })}
      </View>
    </View>
  )
}

// Main profile component
const ProfileScreen = () => {
  return (
    <SafeAreaMain>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Section>
          <Main>
            <View>
              <ProfileSection />
              <Profile />
              <Security />
            </View>
          </Main>
        </Section>
      </ScrollView>
    </SafeAreaMain>
  )
}

export default ProfileScreen
