import Shield from '@/assets/svgs/shield.svg';
import Tic from '@/assets/svgs/tic.svg';
import BackHeader from '@/components/layout/BackHeader';
import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const ResetPasswordSuccessfull = () => {
  const dummyForm = useForm();
  return (
    <BackHeader>
      <KeyboardAwareScrollView bottomOffset={50}>
        <View style={{ flex: 1, width: '90%', marginHorizontal: 'auto' }}>
          <RNText
            variant="header"
            size="xl"
            style={{ marginVertical: 40, textAlign: 'center' }}
          >
            Password reset completed!
          </RNText>

          <View
            style={{
              width: '70%',
              alignSelf: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <Tic style={{ alignSelf: 'center' }} />
            <RNText
              variant="medium"
              size="base"
              style={{ marginTop: 20, textAlign: 'center' }}
            >
              You have successfully reset your password.
            </RNText>
          </View>

          <RNButton
            value="Login"
            color={COLORS.primary}
            buttonStyle={{ marginTop: 40 }}
            path={'/auth/login'}
          />
        </View>
      </KeyboardAwareScrollView>
      <View
        style={{
          marginBottom: 50,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <Shield />
        <RNText variant="medium" size="sm" style={{ color: '#000' }}>
          Never share your code with anyone.
        </RNText>
      </View>
    </BackHeader>
  );
};

export default ResetPasswordSuccessfull;
