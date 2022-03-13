import * as React from 'react';
import { useMemo, useState } from 'react';
import {
  ButtonProps as NativeButtonProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import type { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
import { Typography, useTheme } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export interface ButtonProps extends NativeButtonProps {
  variant: 'primary' | 'secondary' | 'white';
  icon?: IconProp | IconName;
  iconDirection?: 'left' | 'right';
  style?: object;
  slim?: boolean;
}

interface ITouchableOpacityStyle {
  backgroundColor: string;
  borderColor: string;
  slim?: boolean;
}

const TouchableOpacityStyle = styled(TouchableOpacity)<ITouchableOpacityStyle>`
  background: ${(p) => p.backgroundColor};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  border: 1px solid ${(p) => p.borderColor};
  font-weight: bold;
  padding: ${(p) => (p.slim ? 8 : 16)}px 24px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  spaceRight: {
    marginRight: 8,
  },
  spaceLeft: {
    marginLeft: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export const Button: React.FC<ButtonProps> = ({
  variant,
  title,
  icon,
  iconDirection = 'right',
  slim,
  ...props
}) => {
  const { button, slimButton } = useTheme();
  const palette = useMemo(
    () => (slim ? slimButton[variant] : button[variant]),
    [button, slim, slimButton, variant]
  );
  const [background, setBackground] = useState(palette.background);
  const [textColor, setTextColor] = useState(palette.text);

  const fontIcon = icon && (
    <FontAwesomeIcon
      icon={icon}
      color={textColor}
      style={iconDirection === 'right' ? styles.spaceLeft : styles.spaceRight}
    />
  );

  return (
    <TouchableOpacityStyle
      activeOpacity={0.6}
      backgroundColor={background}
      borderColor={palette.border}
      onPressIn={() => {
        setBackground(palette.border);
        setTextColor(palette.textAccent);
      }}
      onPressOut={() => {
        setBackground(palette.background);
        setTextColor(palette.text);
      }}
      slim={slim}
      {...props}
    >
      {icon && iconDirection === 'left' && fontIcon}
      <Typography
        text={title}
        textStyle={[styles.bold, { color: textColor }]}
      />
      {icon && iconDirection === 'right' && fontIcon}
    </TouchableOpacityStyle>
  );
};
