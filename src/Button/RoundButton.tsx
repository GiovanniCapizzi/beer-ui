import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { roundButtonColors } from '../Common/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { lightShadowStyle } from '../Common/styles';
import { Typography } from 'beer-ui';

export interface ButtonProps {
  title?: string;
  variant: 'primary' | 'secondary';
  size: number;
  icon: IconProp;
  shadow?: boolean;
  style?: object;
}

interface ITouchableOpacityStyle {
  variant: 'primary' | 'secondary';
  size: number;
}

const TouchableOpacityStyle = styled(TouchableOpacity)<ITouchableOpacityStyle>`
  background: ${(p) => roundButtonColors[p.variant].background};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  border: 1px solid ${(p) => roundButtonColors[p.variant].border};
  font-weight: bold;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: ${(p) => p.size / 2}px;
  justify-content: center;
  align-items: center;
`;

export const RoundButton: React.FC<ButtonProps> = ({
  variant,
  size,
  icon,
  shadow,
  style,
  title,
  ...props
}) => (
  <TouchableOpacityStyle
    variant={variant}
    activeOpacity={0.6}
    size={size}
    style={[style, shadow && lightShadowStyle]}
    {...props}
  >
    <FontAwesomeIcon
      icon={icon}
      color={roundButtonColors[variant].icon}
      size={title ? size / 3 : size / 2}
    />
    {title && (
      <Typography
        text={title}
        textStyle={{
          fontWeight: 'bold',
          color: roundButtonColors[variant].text,
          fontSize: 12,
          marginTop: 4
        }}
      />
    )}
  </TouchableOpacityStyle>
);
