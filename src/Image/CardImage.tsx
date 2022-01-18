import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import styled from 'styled-components';
import { Typography } from 'beer-ui';
import { cardImageColors } from '../Common/colors';

export interface CardImageProps {
  source: ImageSourcePropType;
  title: string;
  onPress: () => any;
  height: number;
  width?: number;
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
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

export const CardImage: React.FC<CardImageProps> = ({
  source,
  title,
  onPress,
  height,
  width,
  variant,
  shadow,
  bordered,
}) => {
  const color = cardImageColors[variant];

  const titleContent = (
    <Typography
      text={title}
      textStyle={{ fontWeight: 'bold', color: cardImageColors.text }}
    />
  );

  return (
    <Container
      onPress={onPress}
      bordered={bordered}
      color={color}
      style={shadow && shadowStyle}
    >
      <Picture source={source} style={{ width, height }} />
      <Title color={color}>{titleContent}</Title>
    </Container>
  );
};
