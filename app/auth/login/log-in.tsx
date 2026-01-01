import PetCare from '@/assets/svgs/petcare.svg';
import BackHeader from '@/components/layout/BackHeader';
import RNButton from '@/components/ui/button';
import { RNInput } from '@/components/ui/input';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const LogIn = () => {
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
            Login with your email
          </RNText>
          <View style={{ gap: 20 }}>
            {/* <RNInput placeholder="Email" value={email} onChangeText={setEmail} /> */}
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
          </View>
          <TouchableOpacity
            style={{ alignSelf: 'flex-start' }}
            onPress={() => router.push('/auth/login/forgotpass')}
          >
            <RNText
              variant="medium"
              size="sm"
              style={{ color: COLORS.primary, marginTop: 15, marginBottom: 40 }}
            >
              Forgot Password?
            </RNText>
          </TouchableOpacity>
          <RNButton value="Login" color={COLORS.primary} />
        </View>
      </KeyboardAwareScrollView>
      <View>
        <PetCare width={'100%'} height={100} />
      </View>
    </BackHeader>
  );
};

export default LogIn;
