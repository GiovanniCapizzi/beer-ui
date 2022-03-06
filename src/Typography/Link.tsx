import * as React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { Typography, useTheme } from 'beer-ui';

export interface LinkProps {
  text: string;
  onPress?: () => any;
  textStyle?: StyleProp<TextStyle>;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
  },
});

export const Link: React.FC<LinkProps> = ({
  text,
  onPress,
  textStyle,
  variant,
  size,
}) => {
  const { link: palette } = useTheme();
  const color = variant ? palette[variant] : undefined;
  return (
    <Typography
      text={text}
      onPress={onPress}
      textStyle={[textStyle, styles.text, { color }]}
      size={size}
    />
  );
};
