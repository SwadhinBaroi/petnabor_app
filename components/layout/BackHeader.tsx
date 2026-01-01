import { COLORS } from '@/constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RNText } from '../ui/text';

const BackHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <SafeAreaView
        edges={['top']}
        style={{
          backgroundColor: COLORS.borderColor,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            width: '90%',
            marginHorizontal: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            paddingBottom: 12,
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={32} color="#007AFF" />
          <RNText
            variant="medium"
            size="base"
            style={{ color: COLORS.text, fontSize: 17 }}
          >
            Back
          </RNText>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default BackHeader;
