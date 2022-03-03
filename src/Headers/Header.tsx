import * as React from 'react';
import Svg from 'react-native-svg';
import {
  Image,
  ImageSourcePropType,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  PrimaryBackwardHeader,
  PrimaryForwardHeader,
  SecondaryBackwardHeader,
  SecondaryForwardHeader,
} from './styles';

export interface HeaderProps {
  originalWidth?: number;
  originalHeight?: number;
  variant: 'primary' | 'secondary';
  reverse?: boolean;
  logo?: {
    source: ImageSourcePropType;
    imageStyle?:
      | Record<string, string | number>
      | Record<string, string | number>[];
  };
  component?: React.ReactElement;
}

const headerVariants = {
  primary: {
    forward: PrimaryForwardHeader,
    backward: PrimaryBackwardHeader,
  },
  secondary: {
    forward: SecondaryForwardHeader,
    backward: SecondaryBackwardHeader,
  },
};

export const Header: React.FC<HeaderProps> = ({
  originalWidth = 390,
  originalHeight = 192,
  reverse,
  variant,
  component,
  logo,
}) => {
  const HeaderComponent = reverse
    ? headerVariants[variant].forward
    : headerVariants[variant].backward;

  const aspectRatio = originalWidth / originalHeight;
  const { width } = useWindowDimensions();

  return (
    <View>
      {logo && <Image source={logo.source} style={logo.imageStyle} />}
      {component}
      <View style={{ width: width, aspectRatio }}>
        <Svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        >
          <HeaderComponent />
        </Svg>
      </View>
    </View>
  );
};
