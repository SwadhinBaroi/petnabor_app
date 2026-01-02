import PetCare from '@/assets/svgs/petcare.svg';
import BackHeader from '@/components/layout/BackHeader';
import RNButton from '@/components/ui/button';
import { RNInput } from '@/components/ui/input';
import Sheet from '@/components/ui/sheet';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const SignUP = () => {
  const dummyForm = useForm();
  const [isChecked, setChecked] = useState(false);

  return (
    <BackHeader>
      <KeyboardAwareScrollView bottomOffset={50}>
        <View style={{ flex: 1, width: '90%', marginHorizontal: 'auto' }}>
          <RNText
            variant="header"
            size="xl"
            style={{ marginVertical: 40, textAlign: 'center' }}
          >
            Sign up with your email
          </RNText>
          <View style={{ gap: 20 }}>
            {/* <RNInput placeholder="Email" value={email} onChangeText={setEmail} /> */}
            <RNInput
              title="firstName"
              control={dummyForm.control}
              placeholder="First Name"
              errors={dummyForm.formState.errors}
            />
            <RNInput
              title="lastName"
              control={dummyForm.control}
              placeholder="Last Name"
              errors={dummyForm.formState.errors}
            />

            <RNInput
              title="email"
              control={dummyForm.control}
              placeholder="Email"
              errors={dummyForm.formState.errors}
            />
            <RNInput
              title="password"
              control={dummyForm.control}
              placeholder="Password"
              secureTextEntry
              errors={dummyForm.formState.errors}
            />
            <Sheet
              onSelect={(category) => {
                console.log('Selected:', category);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <Checkbox
              style={{
                marginRight: 8,
                borderColor: COLORS.primary,
                borderWidth: 1,
                borderRadius: 4,
                height: 24,
                width: 24,
              }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? COLORS.primary : undefined}
            />
            <RNText
              variant="medium"
              size="sm"
              style={{ color: COLORS.inputLabel }}
            >
              I agree to the terms and condtions
            </RNText>
          </View>
          <RNButton
            value="Sign Up"
            color={COLORS.primary}
            path={'/auth/otp'}
            params={{ mode: 'signup' }}
          />
        </View>
      </KeyboardAwareScrollView>
      <View>
        <PetCare width={'100%'} height={100} />
      </View>
    </BackHeader>
  );
};

export default SignUP;
