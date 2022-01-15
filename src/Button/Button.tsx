import * as React from 'react';
import {
  ButtonProps as NativeButtonProps,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import { buttonColors } from '../Common/colors';
import { Typography } from 'beer-ui';

interface ITouchableOpacityStyle {
  variant: 'primary' | 'secondary';
}

export interface ButtonProps extends NativeButtonProps {
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
`;

export const Button: React.FC<ButtonProps> = ({ variant, title, ...props }) => {

  return (
    <TouchableOpacityStyle variant={variant} activeOpacity={0.6} {...props}>
      <Typography
        text={title}
        textStyle={{ fontWeight: 'bold', color: buttonColors[variant].text }}
      />
    </TouchableOpacityStyle>
  );
};
