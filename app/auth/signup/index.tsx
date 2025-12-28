import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/text';
import React from 'react';
import { ImageBackground, View } from 'react-native';

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
        <View style={{ marginTop: 20, width: '90%' }}>
          <RNButton value={'Save'} path={'/'} tag={'replace'} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;
