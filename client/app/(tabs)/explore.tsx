import { StyleSheet, Image, Platform, SafeAreaView, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Main from '@/components/custom tags/Main';
import Text from '@/components/custom tags/Text';

export default function TabTwoScreen() {
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
