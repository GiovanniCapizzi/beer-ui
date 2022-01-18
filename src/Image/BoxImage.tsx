import * as React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import { Typography } from 'beer-ui';
import { boxImageColors } from '../Common/colors';

export interface BoxImageProps {
  source: ImageSourcePropType;
  title: string;
  onPress: () => any;
  height: number;
  width?: number;
  shadow?: boolean;
}

const Title = styled(View)`
  padding: 4px 16px;
  align-items: center;
  background: rgba(0, 0, 0, 0.24);
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
  shadow,
}) => {
  const titleContent = (
    <Typography
      text={title}
      textStyle={{ fontWeight: 'bold', color: boxImageColors.text }}
    />
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={shadow && shadowStyle}
    >
      <ImageBackground
        source={source}
        style={{ width, height, justifyContent: 'flex-end' }}
        imageStyle={{ borderRadius: 8 }}
      >
        <Title>{titleContent}</Title>
      </ImageBackground>
    </TouchableOpacity>
  );
};
