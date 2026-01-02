import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const SignUpLayout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="condition" />
      </Stack>
    </View>
  );
};

export default SignUpLayout;
