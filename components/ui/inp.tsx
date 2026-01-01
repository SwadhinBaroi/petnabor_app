import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export const RNInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: Props) => {
  const focused = useSharedValue(false);

  const labelStyle = useAnimatedStyle(() => {
    const active = focused.value || value.length > 0;

    return {
      transform: [
        {
          translateY: withTiming(active ? -12 : 0, { duration: 180 }),
        },
      ],
      fontSize: withTiming(active ? 12 : 16, { duration: 180 }),
      color: active ? '#6E6E73' : '#8E8E93',
    };
  });

  return (
    <View style={styles.wrapper}>
      <Animated.Text style={[styles.placeholder, labelStyle]}>
        {placeholder}
      </Animated.Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onFocus={() => (focused.value = true)}
        onBlur={() => (focused.value = false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 12,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  placeholder: {
    position: 'absolute',
    left: 14,
  },
  input: {
    height: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    paddingTop: 18,
  },
});
