import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';

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
    <KeyboardProvider>
      <ActionSheetProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ActionSheetProvider>
    </KeyboardProvider>
  );
}
