import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import { CardImage } from '@giovannicapizzi/beer-ui';
import { Dimensions, ImageSourcePropType } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface CardImageProps {
  source: ImageSourcePropType;
  title: string;
}

export interface CardImageCarouselProps {
  data: CardImageProps[];
  ref?: any;
  bordered?: boolean;
  shadow?: boolean;
  height: number;
  width: number;
  variant: 'primary' | 'secondary';
  layout?: 'stack' | 'default' | 'tinder';
  onPress: (index: number) => any;
}

export const CardCarousel: React.FC<CardImageCarouselProps> = React.forwardRef(
  (
    {
      data,
      bordered,
      shadow,
      height,
      width,
      variant,
      onPress,
      layout = 'default',
    },
    ref: any
  ) => {
    const itemWidth = bordered ? width + 4 : width;

    const renderItem = ({
      item,
      index,
    }: {
      item: CardImageProps;
      index: number;
    }) => {
      return (
        <CardImage
          {...item}
          key={index}
          variant={variant}
          bordered={bordered}
          shadow={shadow}
          width={width}
          height={height}
          onPress={() => onPress && onPress(index)}
        />
      );
    };

    return (
      <Carousel
        ref={ref}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        layout={layout}
      />
    );
  }
);
