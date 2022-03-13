import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import styled from 'styled-components';
import { Typography, useTheme } from 'beer-ui';
import { shadowStyle } from '../Common/styles';

export interface CardImageProps {
  source: ImageSourcePropType;
  title?: string;
  onPress: () => any;
  height?: number;
  width?: number;
  fullSize?: boolean;
  variant: 'primary' | 'secondary';
  shadow?: boolean;
  bordered?: boolean;
}

interface ContainerProps extends TouchableOpacityProps {
  bordered?: boolean;
  shadow?: boolean;
  color: string;
}

interface TitleProps extends ViewProps {
  color: string;
  maxWidth?: number;
}

const Container = styled(TouchableOpacity)<ContainerProps>`
  border-radius: 10px;
  border: ${(p) => (p.bordered ? `2px solid ${p.color}` : 'none')};
`;

const Picture = styled(Image)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Title = styled(View)<TitleProps>`
  background: ${(p) => p.color};
  padding: 8px 16px;
  align-items: center;
  max-width: ${(p) => (p.maxWidth ? `${p.maxWidth}px` : 'auto')};
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
  },
  rounded: {
    borderRadius: 8,
  },
});

export const CardImage: React.FC<CardImageProps> = ({
  source,
  title,
  onPress,
  height,
  width,
  fullSize,
  variant,
  shadow,
  bordered,
  ...props
}) => {
  const { cardImage: palette } = useTheme();

  const titleContent = (
    <Typography
      text={title || ''}
      textStyle={[styles.textStyle, { color: palette.text }]}
    />
  );

  return (
    <Container
      onPress={onPress}
      bordered={bordered}
      color={palette[variant]}
      style={shadow && shadowStyle}
      {...props}
    >
      <Picture
        source={source}
        style={[!title && styles.rounded, !fullSize && { width, height }]}
      />
      {title && (
        <Title maxWidth={width} color={palette[variant]}>
          {titleContent}
        </Title>
      )}
    </Container>
  );
};
