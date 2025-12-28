import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Regular: require('@/assets/fonts/Poppins-Regular.ttf'),
    Medium: require('@/assets/fonts/Poppins-Medium.ttf'),
    Semibold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
    Bold: require('@/assets/fonts/Poppins-Bold.ttf'),
    Light: require('@/assets/fonts/Poppins-Light.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      console.log('Fonts loaded');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
