import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import styled from 'styled-components';
import { useTheme } from '@giovannicapizzi/beer-ui';

export interface LineProps {
  variant: 'primary' | 'secondary';
  style?: ViewStyle;
}

interface LineViewProps {
  background: string;
}

const LineView = styled(View)<LineViewProps>`
  height: 1px;
  background: ${(p) => p.background};
`;

export const Line: React.FC<LineProps> = ({ variant, style }) => {
  const { text: palette } = useTheme();
  const background = palette[variant];
  return <LineView background={background} style={style} />;
};
