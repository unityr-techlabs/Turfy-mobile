import { StyleSheet, Image, Platform, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Main from '@/components/custom tags/Main';
import Text from '@/components/custom tags/Text';
import SafeAreaMain from '@/components/SafeAreaMain';
import View from '@/components/custom tags/View';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Section from '@/components/custom tags/Section';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [selectedTab,setSelectedTab] = useState<"upcoming" | "past">("upcoming");
 const ButtonSection =() =>{
 
  return(
    <Section>
      <Main>
      
      <View className='flex flex-row items-center !w-full  extraground rounded-lg '>
          <TouchableOpacity onPress={() => setSelectedTab("upcoming")} className={`p-2 extraground w-1/2 mx-auto rounded-lg items-center ${selectedTab === "upcoming" ? "bg-primary-default":"bg-transparent"}`}>
              <Text type='heading' className={` capitalize ${selectedTab === "upcoming" ? "heading":"paragraph"}`}>Upcoming Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("past")} className={`p-2 extraground mx-auto rounded-lg w-1/2 items-center ${selectedTab === "past" ? "bg-primary-default":"bg-transparent"}`}>
            <Text type='heading' className={` capitalize ${selectedTab === "past" ? "heading":"paragraph"}`}>Past Bookings</Text>
          </TouchableOpacity>
       </View>
       
      </Main>
    </Section>
  )

 }
 const Venuedetail = Array(4).fill({
     name:'Battledoor',image:require('@/assets/images/Battledoor1.jpeg'),status:'Booked', place:'Ramanathapuram' , sport:'cricket', day:'Friday', date:'24-07-2024',time:'7pm-9pm'
 })

 const VenueSection = () =>{
  const VenueBox = ({item}:{item:any}) =>{
    return(
      <View className='extraground rounded-xl p-3 border  border-gray-400'>
        <View className='flex flex-row items-center justify-between'>
          <View className='flex-col flex left-3'>
              <Image source={item.image} className='rounded-full  ' style={{width:hp(11),height:hp(11)}} />
              <Text className='heading capitalize mt-4'>{item.name}</Text>
              <Text className='heading capitalize'>{item.place}</Text>
          </View>
            <View className="w-0.5 bg-para-default h-full mt-15" />
             <View className='flex flex-col '>
               <View className='extragraound bg-primary-default rounded-l-full justify-center items-center left-3 ' style={[{width:hp(18),height:hp(6)}]}>
                 <Text className='text-heading-dark' type='heading'>{item.status}</Text>
               </View>
               <View className=''>
                    <View className="flex-row items-center mt-2 ">
                      <MaterialIcons name="sports-cricket" size={18} color="white" />
                      <Text className="heading capitalize ml-2">{item.sport}</Text>
                    </View>

                    <View className="flex-row items-center mt-1">
                      <MaterialIcons name="event" size={18} color="white" />
                      <Text className="heading capitalize ml-2">{item.day}</Text>
                    </View>

                    <View className="flex-row items-center mt-2">
                      <MaterialIcons name="calendar-today" size={18} color="white" />
                      <Text className="heading capitalize ml-2">{item.date}</Text>
                    </View>

                    <View className="flex-row items-center mt-2">
                      <MaterialIcons name="access-time" size={18} color="white" />
                      <Text className="heading capitalize ml-2">{item.time}</Text>
                    </View>
               </View>
               <TouchableOpacity className="mt-5 extraground rounded-lg px-6 py-2 w-fit border border-primary-default">
                  <Text className="text-primary-default ">View Details</Text>
               </TouchableOpacity>
             </View>
        </View>
      </View>
    )
  }
  return(
    <Section >
    <Main>
      <View className='gap-4'>
      {Venuedetail.map((item,index) =>(
      <VenueBox key={index} item={item}/>
 ))}
      </View>


</Main>
</Section>

  )
 
 }
  return (
    <SafeAreaMain>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <ButtonSection/>
         <VenueSection/>
      </ScrollView>
    </SafeAreaMain>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});