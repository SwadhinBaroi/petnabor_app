import { COLORS } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { RNText } from './text';

type RNButtonProps = {
  path?: string;
  value: string;
  tag?: 'push' | 'replace';
  color?: string;
  buttonStyle?: ViewStyle;
  params?: Record<string, string | number | boolean>;
};

const RNButton = ({
  path,
  value,
  tag,
  color,
  buttonStyle,
  params,
}: RNButtonProps) => {
  // console.log(path);
  return (
    <TouchableOpacity
      onPress={() => {
        if (!path) return;

        const payload = params ? { pathname: path, params } : path;

        if (tag === 'replace') {
          router.replace(payload as any);
        } else {
          router.push(payload as any);
        }
      }}
      style={[
        {
          backgroundColor: color || '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 15,
          gap: 15,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: color || COLORS.primary,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        buttonStyle,
      ]}
    >
      <RNText
        variant="subtitle"
        size="base"
        style={{ color: color ? COLORS.white : COLORS.primary }}
      >
        {value}
      </RNText>
    </TouchableOpacity>
  );
};

export default RNButton;
