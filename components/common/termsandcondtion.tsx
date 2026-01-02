import BackHeader from '@/components/layout/BackHeader';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import RNButton from '../ui/button';

const TermsCondition = ({
  signed,
  mode,
}: {
  signed?: boolean;
  mode?: string;
}) => {
  const dummyForm = useForm();
  const [isChecked, setChecked] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {
    if (mode === 'email') setPath('/auth/signup/sign-up');
    else if (mode === 'phone') setPath('/auth/signup/sign-up-phone');
  }, []);

  console.log(path);

  return (
    <BackHeader>
      <KeyboardAwareScrollView bottomOffset={50}>
        <View
          style={{
            flex: 1,
            width: '90%',
            marginHorizontal: 'auto',
            marginBottom: 50,
          }}
        >
          <RNText
            variant="header"
            size="xl"
            style={{ marginVertical: 40, textAlign: 'center' }}
          >
            Terms and Conditions
          </RNText>

          <View style={{ gap: 25 }}>
            <View style={{ gap: 15 }}>
              <RNText variant="medium" size="base">
                1. Conditions of use
              </RNText>
              <RNText variant="base" size="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </RNText>
            </View>
            <View style={{ gap: 15 }}>
              <RNText variant="medium" size="base">
                2. Privacy Policy
              </RNText>
              <RNText variant="base" size="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </RNText>
            </View>
            <View style={{ gap: 15 }}>
              <RNText variant="medium" size="base">
                3. Copyright
              </RNText>
              <RNText variant="base" size="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </RNText>
            </View>
          </View>
          {!signed && (
            <>
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
              <RNButton value="Continue" color={COLORS.primary} path={path} />
            </>
          )}
        </View>
      </KeyboardAwareScrollView>
    </BackHeader>
  );
};

export default TermsCondition;
