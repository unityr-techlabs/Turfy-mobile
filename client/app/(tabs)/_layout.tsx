import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Feather, FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import TabBar from '@/components/TabBar';
import View from '@/components/custom tags/View';
import Header from '@/components/Header';
import SafeAreaMain from '@/components/SafeAreaMain';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
      <Tabs
          screenOptions={{
            headerShown: false,
          }}
          tabBar={(props) => <TabBar {...props} />}
        >
      <Tabs.Screen
        name="index"
        options={{
          animation:'shift',
          title: 'Home',
          tabBarAccessibilityLabel: 'Home Tab',
          iconFamily:Octicons,
          tabBarIconName: 'home', // Use this custom key
          tabBarTypeCenter: false, // Use this custom key
        }}
      />
      <Tabs.Screen
        name="nearby"
        options={{
          animation:'shift',
          title: 'Nearby',
          tabBarAccessibilityLabel: 'Diet Tab',
          iconFamily:Octicons,
          tabBarIconName: 'location',
          tabBarTypeCenter: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          animation:'shift',
          title: 'Bookings',
          tabBarAccessibilityLabel: 'Diet Tab',
          iconFamily:MaterialCommunityIcons,
          tabBarIconName: 'ticket-confirmation-outline',
          tabBarTypeCenter: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          animation:'shift',
          title: 'Profile',
          tabBarAccessibilityLabel: 'Diet Tab',
          iconFamily:Feather,
          tabBarIconName: 'user',
          tabBarTypeCenter: false,
        }}
      />
    </Tabs>
   
  );
}
