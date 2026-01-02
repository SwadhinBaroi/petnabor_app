import Logo from '@/assets/svgs/logo.svg';
import Meet from '@/assets/svgs/meet.svg';
import RNButton from '@/components/ui/button';
import { COLORS } from '@/constants';
import React from 'react';
import { ImageBackground, View } from 'react-native';

const index = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      resizeMode="contain"
    >
      <View
        style={{
          width: '90%',
          marginHorizontal: 'auto',
          gap: 150,
          marginBottom: 50,
        }}
      >
        <View style={{ alignSelf: 'center' }}>
          <Logo />
        </View>
        <View style={{ gap: 30 }}>
          <RNButton
            value="Log In"
            color={COLORS.primary}
            path={'/auth/login'}
          />
          <RNButton value="Sign up" path={'/auth/signup'} />
        </View>
      </View>
      <View style={{ bottom: 5, position: 'absolute' }}>
        <Meet />
      </View>
    </ImageBackground>
  );
};

export default index;
