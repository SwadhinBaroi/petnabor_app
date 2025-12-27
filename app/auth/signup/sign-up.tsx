import { FloatingInput } from '@/components/ui/inp';
import { AppleFloatingInput } from '@/components/ui/input';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        gap: 10,
      }}
    >
      <Text style={{ color: '#000' }}>Completed Signup</Text>

      <AppleFloatingInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <FloatingInput label="Email" value={email} onChangeText={setEmail} />
      <AppleFloatingInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <FloatingInput label="Email" value={email} onChangeText={setEmail} />
    </View>
  );
};

export default SignUp;
