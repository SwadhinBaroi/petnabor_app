import { COLORS } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { RNText } from './text';

const RNButton = ({
  path,
  value,
  tag = 'push',
  color,
  buttonStyle,
}: {
  path?: string;
  value: string;
  tag?: string;
  color?: string;
  buttonStyle?: ViewStyle;
}) => {
  // console.log(path);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('tag:', tag);
        if (tag === 'push') {
          console.log('push the path');
          router.push(path);
        } else if (tag === 'replace') {
          console.log('replace the path');
          router.replace(path);
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
