import Happy from '@/assets/svgs/happy.svg';
import BackHeader from '@/components/layout/BackHeader';
import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const Complete = () => {
  const dummyForm = useForm();
  return (
    <BackHeader>
      <KeyboardAwareScrollView bottomOffset={50}>
        <View style={{ flex: 1, width: '90%', marginHorizontal: 'auto' }}>
          <View style={{ marginVertical: 40, alignItems: 'center' }}>
            <RNText variant="header" size="xl">
              Congratulations!
            </RNText>
            <RNText
              variant="medium"
              size="base"
              style={{ marginTop: 20, textAlign: 'center' }}
            >
              You are signed up with PetNabor now.
            </RNText>
          </View>

          <View
            style={{
              width: '70%',
              alignSelf: 'center',
              alignItems: 'center',
              marginBottom: 30,
              marginTop: 10,
            }}
          >
            <Happy style={{ alignSelf: 'center' }} />
            <RNText
              variant="medium"
              size="base"
              style={{ marginTop: 20, textAlign: 'center' }}
            >
              Happy to have you!
            </RNText>
          </View>

          <RNButton
            value="Home"
            color={COLORS.primary}
            buttonStyle={{ marginTop: 40 }}
            path={'/auth/login'}
          />
        </View>
      </KeyboardAwareScrollView>
    </BackHeader>
  );
};

export default Complete;
