import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import Google from './../../../assets/svgs/google.svg';

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <ImageBackground
        source={require('@/assets/images/background.png')}
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        // resizeMode="cover"
      >
        <RNText> Already have an account?</RNText>
        <View style={{ marginTop: 20, width: '88%' }}>
          <RNButton
            value={'Login'}
            path={''}
            tag={'replace'}
            color={COLORS.secondary}
          />
        </View>
        <Google width={100} height={100} />
      </ImageBackground>
    </View>
  );
};

export default index;
