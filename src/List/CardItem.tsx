import * as React from 'react';
import { useMemo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components';
import { Typography, useTheme } from 'beer-ui';
import { shadowStyle } from '../Common/styles';
import type { IconProp, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import textSize from '../Common/sizes';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const imageSize = { width: 100, height: 100 };

interface DataItem {
  icon: IconProp | IconName;
  text: string;
}

export interface CardItemProps {
  variant: 'primary' | 'secondary';
  imageSource: ImageSourcePropType;
  title: string;
  category?: string;
  style?: ViewStyle;
  onContentPress: () => any;
  onImagePress?: () => any;
  selected?: boolean;
  data?: DataItem[];
}

interface CardItemViewProps {
  background: string;
}

const CardItemView = styled(TouchableOpacity)<CardItemViewProps>`
  background: ${(p) => p.background};
  border-radius: 8px;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    ...imageSize,
  },
  imageOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    ...imageSize,
  },
  imageOverlayBackground: {
    position: 'absolute',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#585858',
    opacity: 0.4,
    ...imageSize,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  textBold: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
  },
  footerItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spaceLeft: {
    marginHorizontal: 6,
  },
});

export const CardItem: React.FC<CardItemProps> = ({
  variant,
  style,
  title,
  category,
  data,
  onContentPress,
  selected,
  onImagePress,
  imageSource,
}) => {
  const { cardItem } = useTheme();
  const palette = cardItem[variant];

  const footer = useMemo(
    () =>
      data?.map((item, index) => (
        <View key={index} style={styles.footerItem}>
          <FontAwesomeIcon
            icon={item.icon}
            color={palette.highlight}
            size={textSize.medium}
          />
          <Typography
            text={item.text}
            size="medium"
            textStyle={[styles.spaceLeft, { color: palette.highlight }]}
          />
          {index < data.length - 1 ? (
            <Typography
              text={'|'}
              size="medium"
              textStyle={[styles.spaceLeft, { color: palette.highlight }]}
            />
          ) : (
            <Text />
          )}
        </View>
      )),
    [data, palette.highlight]
  );

  return (
    <CardItemView
      background={palette.background}
      style={[shadowStyle, style]}
      onPress={onContentPress}
    >
      <TouchableOpacity style={styles.image} onPress={onImagePress}>
        <Image source={imageSource} style={styles.image} />
        {selected && (
          <View style={styles.imageOverlay}>
            <View style={styles.imageOverlayBackground} />
            <FontAwesomeIcon
              icon={faCheck}
              color={palette.selectedIcon}
              size={42}
            />
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.heading}>
          <Typography
            text={title}
            size="medium"
            textStyle={[styles.textBold, { color: palette.text }]}
          />
          {category && (
            <Typography
              text={category}
              size="medium"
              textStyle={[styles.textBold, { color: palette.highlight }]}
            />
          )}
        </View>
        <View style={styles.footer}>{footer}</View>
      </View>
    </CardItemView>
  );
};
