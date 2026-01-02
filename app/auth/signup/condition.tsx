import TermsCondition from '@/components/common/termsandcondtion';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
type OtpMode = 'email' | 'phone';

const Condition = () => {
  const { signed, mode } = useLocalSearchParams<{
    signed?: string;
    mode?: OtpMode;
  }>();

  return (
    <>
      <TermsCondition signed={signed} mode={mode} />
    </>
  );
};

export default Condition;
