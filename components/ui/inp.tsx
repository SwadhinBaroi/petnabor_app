import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export const FloatingInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
}: Props) => {
  const focused = useSharedValue(false);

  const animatedLabel = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(focused.value || value ? -18 : 0, {
          duration: 180,
        }),
      },
    ],
    fontSize: withTiming(focused.value || value ? 12 : 16, { duration: 180 }),
    color: focused.value ? '#007AFF' : '#8E8E93',
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, animatedLabel]}>
        {label}
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
  container: {
    width: '100%',
    paddingTop: 0,
    marginVertical: 12,
  },
  label: {
    position: 'absolute',
    left: 12,
    top: 18,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
  },
});
