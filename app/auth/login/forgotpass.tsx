import Forgot from '@/assets/svgs/forgot.svg';
import PetCare from '@/assets/svgs/petcare.svg';
import BackHeader from '@/components/layout/BackHeader';
import RNButton from '@/components/ui/button';
import { RNInput } from '@/components/ui/input';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const ForgotPassword = () => {
  const dummyForm = useForm();
  return (
    <BackHeader>
      <KeyboardAwareScrollView bottomOffset={50}>
        <View style={{ flex: 1, width: '90%', marginHorizontal: 'auto' }}>
          <RNText
            variant="header"
            size="xl"
            style={{ marginTop: 40, marginBottom: 25, textAlign: 'center' }}
          >
            Forgot your password?
          </RNText>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <Forgot width={120} height={110} style={{ alignSelf: 'center' }} />
            <RNText
              variant="medium"
              size="base"
              style={{ marginTop: 20, textAlign: 'center' }}
            >
              Enter your phone number or email to recover your password.
            </RNText>
          </View>
          <View style={{ gap: 20 }}>
            <RNInput
              title="email"
              control={dummyForm.control}
              placeholder="Enter phone number or email"
              errors={dummyForm.formState.errors}
            />
          </View>

          <RNButton
            value="Submit"
            color={COLORS.primary}
            buttonStyle={{ marginTop: 40 }}
            path={'/auth/login/resetpass'}
          />
        </View>
      </KeyboardAwareScrollView>
      <View>
        <PetCare width={'100%'} height={100} />
      </View>
    </BackHeader>
  );
};

export default ForgotPassword;
