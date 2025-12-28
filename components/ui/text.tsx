import { COLORS } from '@/constants';
import { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

const sizes = {
  xs: { fontSize: 10, lineHeight: 16 },
  sm: { fontSize: 14, lineHeight: 20 },
  base: { fontSize: 16, lineHeight: 22 },
  lg: { fontSize: 18, lineHeight: 24 },
  xl: { fontSize: 20, lineHeight: 26 },
  '2xl': { fontSize: 24, lineHeight: 30 },
  '3xl': { fontSize: 30, lineHeight: 36 },
  '4xl': {
    fontSize: 36,
    lineHeight: 42,
  },
};

const variants = {
  base: { fontFamily: 'Regular', color: COLORS.text },
  medium: { fontFamily: 'Medium', color: COLORS.text },
  title: { fontFamily: 'Bold', color: COLORS.text },
  subtitle: { fontFamily: 'Semibold', color: COLORS.text },
  header: { fontFamily: 'Bold', color: COLORS.secondary },
};

export type RNTextProps = TextProps & {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  children: ReactNode;
};

export function RNText({
  size = 'base',
  variant = 'base',
  children,
  style,
  ...props
}: RNTextProps) {
  return (
    <Text style={[sizes[size], variants[variant], style]} {...props}>
      {children}
    </Text>
  );
}
