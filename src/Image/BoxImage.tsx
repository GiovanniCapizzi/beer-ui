import * as React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import { Typography } from 'beer-ui';
import { boxImageColors } from '../Common/colors';
import { shadowStyle } from '../Common/styles';

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

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    color: boxImageColors.text,
  },
  round: {
    borderRadius: 8,
  },
  center: {
    justifyContent: 'flex-end',
  },
});

export const BoxImage: React.FC<BoxImageProps> = ({
  source,
  title,
  onPress,
  height,
  width,
  shadow,
}) => {
  const titleContent = <Typography text={title} textStyle={styles.textStyle} />;

  return (
    <TouchableOpacity onPress={onPress} style={shadow && shadowStyle}>
      <ImageBackground
        source={source}
        style={[{ width, height }, styles.center]}
        imageStyle={styles.round}
      >
        <Title>{titleContent}</Title>
      </ImageBackground>
    </TouchableOpacity>
  );
};
