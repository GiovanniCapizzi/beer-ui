import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type { IconProp, IconName } from '@fortawesome/fontawesome-svg-core';
import { lightShadowStyle } from '../Common/styles';
import { Typography } from '@giovannicapizzi/beer-ui';
import { useTheme } from '@giovannicapizzi/beer-ui';

export interface RoundButtonProps {
  title?: string;
  variant: 'primary' | 'secondary';
  size: number;
  icon: IconProp | IconName;
  shadow?: boolean;
  style?: object;
  onPress: () => any;
}

interface ITouchableOpacityStyle {
  size: number;
  backgroundColor: string;
  borderColor: string;
}

const TouchableOpacityStyle = styled(TouchableOpacity)<ITouchableOpacityStyle>`
  background: ${(p) => p.backgroundColor};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  border: 1px solid ${(p) => p.borderColor};
  font-weight: bold;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: ${(p) => p.size / 2}px;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 4,
  },
});

export const RoundButton: React.FC<RoundButtonProps> = ({
  variant,
  size,
  icon,
  shadow,
  style,
  title,
  ...props
}) => {
  const { roundButton } = useTheme();
  const palette = roundButton[variant];
  return (
    <TouchableOpacityStyle
      backgroundColor={palette.background}
      borderColor={palette.border}
      activeOpacity={0.6}
      size={size}
      style={[style, shadow && lightShadowStyle]}
      {...props}
    >
      <FontAwesomeIcon
        icon={icon}
        color={palette.icon}
        size={title ? size / 3 : size / 2}
      />
      {title && (
        <Typography
          text={title}
          textStyle={[styles.textStyle, { color: palette.text }]}
        />
      )}
    </TouchableOpacityStyle>
  );
};
