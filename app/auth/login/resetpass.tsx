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

const ResetPassword = () => {
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
            Reset password
          </RNText>
          <View style={{ gap: 20 }}>
            <RNInput
              title="password"
              control={dummyForm.control}
              placeholder="Enter password"
              secureTextEntry
              errors={dummyForm.formState.errors}
            />
            <RNInput
              title="password"
              control={dummyForm.control}
              placeholder="Confirm password"
              secureTextEntry
              errors={dummyForm.formState.errors}
            />
          </View>

          <RNButton
            value="Submit"
            color={COLORS.primary}
            buttonStyle={{ marginTop: 40 }}
            path={'/auth/otp'}
          />
        </View>
      </KeyboardAwareScrollView>
      <View>
        <PetCare width={'100%'} height={100} />
      </View>
    </BackHeader>
  );
};

export default ResetPassword;
