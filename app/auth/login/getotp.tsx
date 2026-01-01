import Mail from '@/assets/svgs/mail.svg';
import Shield from '@/assets/svgs/shield.svg';
import BackHeader from '@/components/layout/BackHeader';
import RNButton from '@/components/ui/button';
import { RNText } from '@/components/ui/text';
import { COLORS } from '@/constants';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { OtpInput } from 'react-native-otp-entry';

const GetOTP = () => {
  const dummyForm = useForm();
  const [verify, setVerify] = useState(false);
  return (
    <BackHeader>
      <KeyboardAwareScrollView bottomOffset={50}>
        <View style={{ flex: 1, width: '90%', marginHorizontal: 'auto' }}>
          <RNText
            variant="header"
            size="xl"
            style={{ marginTop: 40, textAlign: 'center' }}
          >
            I remove this page
          </RNText>

          <View
            style={{
              width: '70%',
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 50,
            }}
          >
            <Mail style={{ alignSelf: 'center' }} />
            <RNText
              variant="medium"
              size="base"
              style={{ marginTop: 20, textAlign: 'center' }}
            >
              Enter the OTP sent to your phone/email address
            </RNText>
          </View>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <OtpInput
              numberOfDigits={4}
              autoFocus={false}
              focusStickBlinkingDuration={500}
              type="numeric"
              onTextChange={(text) => console.log(text)}
              onFilled={(text) => {
                console.log(`OTP is ${text}`);
                setVerify(true);
              }}
              theme={{
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusStickStyle: styles.focusStick,
                containerStyle: styles.container,
                filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              }}
            />
          </View>

          <RNButton
            value="Verify OTP"
            color={COLORS.primary}
            buttonStyle={{ marginTop: 40 }}
            path={'/auth/login/passresetsuccess'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'center',
            marginTop: 30,
          }}
        >
          <RNText
            variant="medium"
            size="sm"
            style={{ color: COLORS.inputLabel }}
          >
            Didn’t receive the OTP?
          </RNText>
          <TouchableOpacity>
            <RNText
              variant="medium"
              size="sm"
              style={{ color: COLORS.primary }}
            >
              Resend OTP
            </RNText>
          </TouchableOpacity>
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

export default GetOTP;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  pinCodeContainer: {
    borderColor: COLORS.borderColor,
    width: 50,
    height: 60,
    backgroundColor: COLORS.inputbg,
    borderRadius: 4,
  },
  pinCodeText: {
    color: COLORS.text,
    fontFamily: 'Semibold',
    fontSize: 30,
  },
  focusStick: {
    backgroundColor: COLORS.primary,
  },
  filledPinCodeContainer: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.inputbg,
  },
  activePinCodeContainer: {
    borderColor: COLORS.primary,
  },
});
