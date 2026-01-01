import { COLORS } from '@/constants';
import Feather from '@expo/vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import { Control, FieldErrors, useController } from 'react-hook-form';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props<T> = {
  title: keyof T;
  control: Control<T>;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'number-pad';
  errors: FieldErrors<T>;
};

export const RNInput = ({
  title,
  control,
  placeholder,
  secureTextEntry,
  keyboardType,
  errors,
}: Props) => {
  const { field } = useController({
    control,
    name: title,
  });

  const { value, onChange } = field;

  const focused = useSharedValue(false);
  const hasValue = useSharedValue(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    hasValue.value = !!value;
  }, [value]);

  const labelStyle = useAnimatedStyle(() => {
    const active = focused.value || hasValue.value;

    return {
      transform: [
        {
          translateY: withTiming(active ? -12 : 0, { duration: 180 }),
        },
      ],
      fontSize: withTiming(active ? 13 : 17, { duration: 180 }),
      color: active ? '#4E6184' : '#212121',
    };
  });

  const wrapperStyle = useAnimatedStyle(() => {
    return {
      borderColor: errors[title]
        ? 'red'
        : focused.value
        ? COLORS.borderColor
        : COLORS.inputbg,
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.wrapper,
          wrapperStyle,
          errors[title] && {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      >
        <Animated.Text style={[styles.placeholder, labelStyle]}>
          {placeholder}
        </Animated.Text>

        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry && !isVisible}
          style={styles.input}
          onFocus={() => (focused.value = true)}
          onBlur={() => (focused.value = false)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
        />
        {secureTextEntry && (
          <Pressable
            onPress={() => setIsVisible((prev) => !prev)}
            style={styles.eye}
          >
            <Feather
              name={isVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#4E6184"
            />
          </Pressable>
        )}
      </Animated.View>
      {errors[title] && (
        <Animated.Text style={{ color: 'red', marginTop: 4, fontSize: 12 }}>
          {/* {errors[title]?.message as string} */}
          Hello
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    backgroundColor: COLORS.inputbg,
    borderRadius: 4,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  placeholder: {
    position: 'absolute',
    left: 18,
    fontFamily: 'Medium',
  },
  input: {
    height: '100%',
    fontSize: 17,
    fontFamily: 'Medium',
    color: COLORS.text,
    paddingTop: 18,
    paddingLeft: 4,
  },
  eye: {
    position: 'absolute',
    right: 25,
    height: '100%',
    justifyContent: 'center',
  },
});
