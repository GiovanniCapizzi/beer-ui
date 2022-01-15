import * as React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';
import { textColors } from '../Common/colors';
import textSize from '../Common/sizes';

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
  const color = variant ? textColors[variant] : undefined;
  const fontSize = size ? textSize[size] : undefined;

  const component = (
    <Text style={[{ color, fontSize }, textStyle]}>{text}</Text>
  );

  if (!onPress) {
    return component;
  }

  return <TouchableOpacity onPress={onPress}>{component}</TouchableOpacity>;
};
