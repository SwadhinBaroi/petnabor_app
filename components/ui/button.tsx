import { COLORS } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RNText } from './text';

const RNButton = ({
  path,
  value,
  tag = 'push',
}: {
  path?: string;
  value: string;
  tag?: string;
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
      style={{
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        gap: 15,
        borderRadius: 30,
      }}
    >
      <RNText variant="title" size="lg" style={{ color: COLORS.secondary }}>
        {value}
      </RNText>
    </TouchableOpacity>
  );
};

export default RNButton;
