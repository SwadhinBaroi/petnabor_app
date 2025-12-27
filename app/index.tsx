import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => router.push('/auth/signup/sign-up')}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
