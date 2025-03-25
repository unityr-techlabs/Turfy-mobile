import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import './global.css'
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Bold: require('../assets/fonts/Outfit-Bold.ttf'),
    ExtraBold: require('../assets/fonts/Outfit-ExtraBold.ttf'),
    ExtraLight: require('../assets/fonts/Outfit-ExtraLight.ttf'),
    Light: require('../assets/fonts/Outfit-Light.ttf'),
    Regular: require('../assets/fonts/Outfit-Regular.ttf'),
    Medium: require('../assets/fonts/Outfit-Medium.ttf'),
    SemiBold: require('../assets/fonts/Outfit-SemiBold.ttf'),
    Thin: require('../assets/fonts/Outfit-Thin.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </>
  );
}
