import * as React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components';
import { Rating, Typography, useTheme } from '@giovannicapizzi/beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import type { RatingProps } from '../Rating/Rating';

export interface FlatCardItemProps {
  title: string;
  content: string;
  numberOfContentLines?: number;
  style?: ViewStyle;
  onClose?: (e: GestureResponderEvent) => any;
  onPress?: (e: GestureResponderEvent) => any;
  ratingProps?: RatingProps;
}

interface FlatCardViewProps {
  background: string;
}

const FlatCardItemView = styled(TouchableOpacity)<FlatCardViewProps>`
  background: ${(p) => p.background};
  border-radius: 8px;
  padding: 8px 16px;
`;

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export const FlatCardItem: React.FC<FlatCardItemProps> = ({
  title,
  content,
  onClose,
  style,
  ratingProps,
  numberOfContentLines,
  onPress,
}) => {
  const { flatCardItem: palette } = useTheme();
  return (
    <FlatCardItemView
      background={palette.background}
      style={style}
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={styles.header}>
        <Typography
          text={title}
          size="medium"
          textStyle={[styles.title, { color: palette.highlight }]}
        />
        {ratingProps && <Rating {...ratingProps} />}
      </View>
      {onClose && (
        <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
          <FontAwesomeIcon icon={faXmark} color={palette.highlight} size={20} />
        </TouchableOpacity>
      )}
      <Typography
        text={content}
        size="small"
        numberOfLines={numberOfContentLines}
        textStyle={[{ color: palette.text }]}
      />
    </FlatCardItemView>
  );
};
