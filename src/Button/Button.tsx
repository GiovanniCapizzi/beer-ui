import * as React from 'react';
import {
  ButtonProps as NativeButtonProps,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import { buttonColors } from '../Common/colors';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Typography } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export interface ButtonProps extends NativeButtonProps {
  variant: 'primary' | 'secondary';
  icon?: IconProp;
  iconDirection?: 'left' | 'right';
  style?: object;
}

interface ITouchableOpacityStyle {
  variant: 'primary' | 'secondary';
}

const TouchableOpacityStyle = styled(TouchableOpacity)<ITouchableOpacityStyle>`
  background: ${(p) => buttonColors[p.variant].background};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  border: 1px solid ${(p) => buttonColors[p.variant].border};
  font-weight: bold;
  padding: 16px 24px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;


export const Button: React.FC<ButtonProps> = ({
  variant,
  title,
  icon,
  iconDirection = 'right',
  ...props
}) => {
  const fontIcon = icon ? (
    <FontAwesomeIcon
      icon={icon}
      color={buttonColors[variant].text}
      style={
        iconDirection === 'right' ? { marginLeft: 12 } : { marginRight: 12 }
      }
    />
  ) : (
    <View />
  );

  return (
    <TouchableOpacityStyle variant={variant} activeOpacity={0.6} {...props}>
      {icon && iconDirection === 'left' && fontIcon}
      <Typography
        text={title}
        textStyle={{ fontWeight: 'bold', color: buttonColors[variant].text }}
      />
      {icon && iconDirection === 'right' && fontIcon}
    </TouchableOpacityStyle>
  );
};

