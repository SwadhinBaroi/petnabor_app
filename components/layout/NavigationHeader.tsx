import Bell from '@/assets/svgs/bell.svg';
import Dot from '@/assets/svgs/dot.svg';
import Logo from '@/assets/svgs/logo.svg';
import Paw from '@/assets/svgs/paw.svg';
import { COLORS } from '@/constants';
import Feather from '@expo/vector-icons/Feather';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NavigationHeader = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <SafeAreaView
        edges={['top']}
        style={{
          backgroundColor: COLORS.navbg,
        }}
      >
        <View
          style={{
            width: '85%',
            marginHorizontal: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            paddingBottom: 12,
            paddingVertical: 2,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Paw />
          </TouchableOpacity>
          <TouchableOpacity>
            <Logo height={30} width={66} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', right: 40, top: 4 }}>
            <Feather name="users" size={24} color="#3E77BC" />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Bell />
            <View style={{ position: 'absolute', right: -5, top: -5 }}>
              <Dot />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default NavigationHeader;
