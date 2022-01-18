import * as React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styled from 'styled-components';
import { cardImageColors } from '../Common/colors';
import { Typography } from 'beer-ui';

export interface BoxImageProps {
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

const Container = styled(TouchableOpacity)<ContainerProps>`
  border-radius: 10px;
  border: ${(p) => (p.bordered ? `2px solid ${p.color}` : 'none')};
`;

const Title = styled(View)`
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

export const BoxImage: React.FC<BoxImageProps> = ({
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
      <ImageBackground
        source={source}
        style={{ width, height, justifyContent: 'flex-end' }}
        imageStyle={{ borderRadius: 8 }}
      >
        <Title>{titleContent}</Title>
      </ImageBackground>
    </Container>
  );
};
