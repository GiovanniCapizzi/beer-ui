import * as React from 'react';
import {
  ButtonProps as NativeButtonProps,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import colors from '../Common/colors';
import { Typography } from 'beer-ui';

interface ITouchableOpacityStyle {
  background: string;
}

export interface ButtonProps extends NativeButtonProps {
  variant: 'primary' | 'secondary';
}

const TouchableOpacityStyle = styled(TouchableOpacity)<ITouchableOpacityStyle>`
  background: ${(p) => p.background};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  border: 1px solid ${colors.primary};
  font-weight: bold;
  padding: 16px 24px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;

export const Button: React.FC<ButtonProps> = ({ variant, title, ...props }) => {
  const background = variant === 'primary' ? colors.primary : colors.light;
  const textVariant = variant === 'secondary' ? 'accent' : 'primary';

  return (
    <TouchableOpacityStyle
      background={background}
      activeOpacity={0.6}
      {...props}
    >
      <Typography
        variant={textVariant}
        text={title}
        textStyle={{ fontWeight: 'bold' }}
      />
    </TouchableOpacityStyle>
  );
};
