import Apple from '@/assets/svgs/apple.svg';
import Google from '@/assets/svgs/google.svg';
import Playing from '@/assets/svgs/playing.svg';
import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

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
        <RNText
          variant="subtitle"
          size="2xl"
          style={{
            marginVertical: 20,
            textAlign: 'center',
            color: COLORS.primary,
          }}
        >
          Login with PetNabor
        </RNText>
        <View style={{ width: '100%', gap: 20 }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              marginTop: 20,
              borderRadius: 4,
              paddingVertical: 25,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <RNText
              variant="medium"
              size="base"
              style={{ textAlign: 'center' }}
            >
              Log In with
            </RNText>
            <View style={{ flexDirection: 'row', gap: 30 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.inputbg,
                  padding: 10,
                  borderRadius: 30,
                }}
              >
                <Google height={28} width={28} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#001935',
                  padding: 10,
                  borderRadius: 30,
                }}
              >
                <Apple height={28} width={28} />
              </TouchableOpacity>
            </View>
          </View>
          <RNText variant="medium" size="base" style={{ textAlign: 'center' }}>
            Or
          </RNText>
          <View style={{ gap: 30, marginBottom: 30 }}>
            <RNButton
              value="Log in with email"
              color={COLORS.primary}
              path={'/auth/login/log-in'}
            />
            <RNButton
              value="Log in with phone number"
              path={'/auth/login/log-in-phone'}
            />
          </View>
          <RNText variant="medium" size="base" style={{ textAlign: 'center' }}>
            Have not created an account ? Get started!
          </RNText>
          <RNButton
            value="Sign up"
            color={COLORS.secondary}
            path={'/auth/signup'}
            tag={'replace'}
          />

          <TouchableOpacity
            onPress={() => router.push('/auth')}
            style={{
              backgroundColor: COLORS.white,
              borderWidth: 1,
              alignSelf: 'center',
              borderColor: COLORS.borderColor,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 4,
            }}
          >
            <RNText variant="base" size="sm" style={{ textAlign: 'center' }}>
              Back to home
            </RNText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ bottom: 0, position: 'absolute' }}>
        <Playing />
      </View>
    </ImageBackground>
  );
};

export default index;
