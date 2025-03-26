import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native';
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
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SafeAreaMain from '@/components/SafeAreaMain';
import Line from '@/components/Line';
import { useState } from 'react';
import { router, useNavigation } from 'expo-router';

export default function HomeScreen() {

  const AdSection = () =>{

    const {width} = Dimensions.get('window')
    const [currentIndex,setCurrentIndex] = useState(0)

    const onScroll = (event:any) =>{
      const offSetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offSetX / width);
      setCurrentIndex(index);
    }

    const AdBox = () =>{
      return(
          <Image
            source={require('../../assets/images/dummy.jpg')}
            style={{width:wp(100)}}
            className=' w-full h-full '
            />
        
      )
    }

    return(
      <Section>
      <Main>
      <View className=' bg-transparent rounded-xl h-44 relative overflow-hidden'>
        <FlatList
            data={Array(5).fill({})}
            renderItem={AdBox}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={onScroll}
            snapToInterval={width}
            snapToAlignment="center"
            decelerationRate="fast"
            />
            <View className=' absolute w-full justify-center flex-row gap-6 items-center bottom-4'>
              {Array.from({length:5}).map((_,index)=>(
                <View key={index} 
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-default' : 'bg-gray-400'
                }`}/>
              ))}
            </View>
          </View>
          
      </Main>
  </Section>
    )
  } 

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
          snapToInterval={wp(38.2) }
                pagingEnabled
                snapToAlignment="start"
                decelerationRate="fast"
          />
        </Main>
      </Section>
    )
  }

  const VenuesSection = () =>{

    const playList = ['cricket','football']

    const VenueBox = () =>{
      return(
        <View className='extraground rounded-3xl'>
          <View className='w-full h-48  relative overflow-hidden'> 
            <Image source={require('../../assets/images/dummy.jpg')} className=' w-full h-full absolute top-0 rounded-t-xl'
                width={wp(100)}/>
          </View>
          <View className=' p-6 gap-4'>
            <View className='gap-1'>
              <Text type='subHeading' className='heading !text-xl capitalize'>national academy turf</Text>
              <Text type='para' className='paragraph capitalize'>6500, south street, san jose, california, 95112</Text>
              <View className='flex flex-row flex-wrap mt-3 gap-3'>
                {playList.map((item,index)=>(
                  <Text key={index} className=' bg-primary-default/70 text-white capitalize px-6 py-2 rounded-full w-fit self-center'>{item}</Text>
                ))}
              </View>
            </View>
            <Line/>
            <View className='flex flex-row justify-between items-center'>
              <Text className=' heading flex flex-row items-center' type='heading'>Rs. 800 <Text className=' capitalize text-xs paragraph'>/ hour</Text> </Text>
              <TouchableOpacity onPress={()=>router.navigate('(stack)/venue/1')}>
                <Text className=' text-primary-default capitalize'>open now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }

    return(
      <Section>
        <Main className=' gap-5'>
          <View className=' flex flex-row justify-between items-center'>
            <Text className='heading capitalize' type='subHeading'>venues around you</Text>
          </View>
          <VenueBox/>
        </Main>
      </Section>
    )
  }

  return (
    <SafeAreaMain >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header/>
        <FilterSection/>
        <AdSection/>
        <Category/>
        <VenuesSection/>
      </ScrollView>
    </SafeAreaMain>
  );
}
