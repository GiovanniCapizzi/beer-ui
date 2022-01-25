import * as React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';
import textSize from '../Common/sizes';
import { useTheme } from '../Theme/ThemeProvider';

export interface TypographyProps {
  text: string;
  onPress?: () => any;
  textStyle?: StyleProp<TextStyle>;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Typography: React.FC<TypographyProps> = ({
  onPress,
  text,
  variant,
  size,
  textStyle,
}) => {
  const { text: palette } = useTheme();
  const color = variant ? palette[variant] : undefined;
  const fontSize = size ? textSize[size] : undefined;

  const component = (
    <Text style={[{ color, fontSize }, textStyle]}>{text}</Text>
  );

  if (!onPress) {
    return component;
  }

  return <TouchableOpacity onPress={onPress}>{component}</TouchableOpacity>;
};
