import * as React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';
import textSize from '../Common/sizes';
import { useTheme } from '@giovannicapizzi/beer-ui';

export interface TypographyProps {
  text: string;
  onPress?: () => any;
  textStyle?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  numberOfLines?: number;
}

export const Typography: React.FC<TypographyProps> = ({
  onPress,
  text,
  variant = 'primary',
  size,
  textStyle,
  numberOfLines,
}) => {
  const { text: palette } = useTheme();
  const color = variant ? palette[variant] : undefined;
  const fontSize = size ? textSize[size] : undefined;

  const component = (
    <Text
      style={[{ color, fontSize }, textStyle]}
      numberOfLines={numberOfLines}
    >
      {text}
    </Text>
  );

  if (!onPress) {
    return component;
  }

  return <TouchableOpacity onPress={onPress}>{component}</TouchableOpacity>;
};
