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
      <TouchableOpacity onPress={() => router.push('/auth/signup')}>
        <Text style={{ fontFamily: 'PoppinsRegular' }}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/auth/login/log-in')}>
        <Text style={{ fontFamily: 'PoppinsRegular' }}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}
