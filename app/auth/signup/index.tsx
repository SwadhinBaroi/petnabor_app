import Apple from '@/assets/svgs/apple.svg';
import Google from '@/assets/svgs/google.svg';
import Walking from '@/assets/svgs/walking.svg';
import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/text';
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
          flex: 1,
          width: '90%',
          marginHorizontal: 'auto',

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ width: '100%', gap: 20 }}>
          <RNText variant="medium" size="base" style={{ textAlign: 'center' }}>
            Already have an account?
          </RNText>
          <RNButton value="Login" color={COLORS.secondary} />
          <RNText variant="medium" size="base" style={{ textAlign: 'center' }}>
            Or
          </RNText>
          <RNButton value="Sign up with email" color={COLORS.primary} />
          <RNButton value="Sign up with phone number" />
          <RNText variant="base" size="sm" style={{ textAlign: 'center' }}>
            Terms and conditions
          </RNText>
          <View>
            <RNText
              variant="medium"
              size="base"
              style={{ textAlign: 'center' }}
            >
              Sign up with
            </RNText>
            <View style={{ flexDirection: 'row' }}>
              <Google height={48} width={48} />
              <Apple height={48} width={48} />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Walking />
      </View>
    </ImageBackground>
  );
};

export default index;
