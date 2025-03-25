import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Text from '@/components/custom tags/Text';
import Main from '@/components/custom tags/Main';
import View from '@/components/custom tags/View';
import Header from '@/components/Header';
import Section from '@/components/custom tags/Section';
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HomeScreen() {

  const FilterSection = () =>{
    return(
      <Section>
        <Main>
          <View className=' flex flex-row justify-between '>
            <TextInput placeholder='Search Here......' className='extraground w-[82%] p-5 rounded-2xl'/>
            <TouchableOpacity className=' bg-primary-default p-5 rounded-2xl  w-[15%]'>
              <Ionicons name='filter' size={hp(2.5)} className='heading'/>
            </TouchableOpacity>
          </View>
        </Main>
      </Section>
    )
  }

  const Category = () =>{
    const dummyData = [
      { name: 'Football', icon: 'futbol' },
      { name: 'Basketball', icon: 'basketball-ball' },
      { name: 'Tennis', icon: 'table-tennis' },
      { name: 'Cricket', icon: 'baseball-ball' }, // No direct cricket icon, using baseball-ball
      { name: 'Hockey', icon: 'hockey-puck' },
    ];
    
    return(
      <Section>
        <Main className=' gap-3'>
          <View className=' flex flex-row justify-between items-center'>
            <Text className='heading capitalize' type='subHeading'>sports</Text>
          </View>
          <FlatList
          className=' overflow-visible'
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dummyData}
          keyExtractor={(item,index) => index.toString() }
          renderItem={({ item }) => (
            <View className=" extraground mr-5 p-2 rounded-full flex flex-row justify-between items-center">
              <View className=' rounded-full background p-3'>
                <Icon name={item.icon} size={hp(2.5)} className='heading' />
              </View>
              <Text className="heading mx-5 capitalize" type='para'>{item.name}</Text>
            </View>
          )}
          />
        </Main>
      </Section>
    )
  }

  const VenuesSection = () =>{
    return(
      <Section>
        <Main>
        <View className=' flex flex-row justify-between items-center'>
            <Text className='heading capitalize' type='subHeading'>venues around you</Text>
          </View>
        </Main>
      </Section>
    )
  }

  return (
    <SafeAreaView className='background flex-1 '>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header/>
        <FilterSection/>
        <Category/>
        <VenuesSection/>
      </ScrollView>
    </SafeAreaView>
  );
}
