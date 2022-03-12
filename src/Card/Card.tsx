import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Typography, useTheme } from 'beer-ui';
import styled from 'styled-components';
import { lightShadowStyle } from '../Common/styles';

export interface CardProps {
  shadow?: boolean;
  cardStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  actionStyle?: ViewStyle;
  border?: boolean;
  accentVariant?: 'primary' | 'secondary';
  action?: {
    title: string;
    onPress: () => any;
  };
}

interface CardContentProps {
  background: string;
  border?: boolean;
  borderColor: string;
}

const CardContent = styled(View)<CardContentProps>`
  border-radius: 8px;
  background: ${(p) => p.background};
  border: ${(p) => (p.border ? `1px solid ${p.borderColor}` : 'none')};
`;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 8,
  },
});

interface CardActionProps {
  background: string;
}

// Styled do not have the shorthand for border-radius ...
const CardAction = styled(TouchableOpacity)<CardActionProps>`
  padding: 2px;
  background: ${(p) => p.background};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Card: React.FC<CardProps> = ({
  children,
  shadow,
  cardStyle,
  actionStyle,
  contentStyle,
  border,
  accentVariant = 'primary',
  action,
}) => {
  const { card: palette } = useTheme();
  const accentColor = palette.accent[accentVariant];
  return (
    <CardContent
      style={[shadow && lightShadowStyle, cardStyle]}
      background={palette.background}
      border={border}
      borderColor={accentColor}
      onStartShouldSetResponder={() => true}
    >
      <View style={[styles.content, contentStyle]}>{children}</View>
      {action && (
        <CardAction background={accentColor} style={actionStyle}>
          <Typography
            variant={accentVariant}
            text={action.title}
            size="medium"
            textStyle={[styles.text, { color: palette.background }]}
          />
        </CardAction>
      )}
    </CardContent>
  );
};
