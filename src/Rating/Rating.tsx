import * as React from 'react';
import { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import textSize from '../Common/sizes';

export interface RatingProps {
  variant: 'primary' | 'secondary';
  onPress: (level: number) => any;
  style?: ViewStyle;
  level: number;
  size?: 'small' | 'medium' | 'large';
  readOnly?: boolean;
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 2,
  },
});

export const Rating: React.FC<RatingProps> = ({
  variant = 'primary',
  style,
  size,
  onPress,
  level,
  readOnly = false,
}) => {
  const { rating: palette } = useTheme();
  const color = palette[variant];
  const fontSize = size ? textSize[size] : undefined;

  const stars = useMemo(
    () =>
      new Array(5).fill(0).map((_, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => !readOnly && onPress(idx + 1)}
          style={styles.star}
        >
          <FontAwesomeIcon
            icon={level > idx ? faStarSolid : faStarRegular}
            color={color}
            size={fontSize}
          />
        </TouchableOpacity>
      )),
    [color, fontSize, level, onPress, readOnly]
  );

  return <View style={[styles.root, style]}>{stars}</View>;
};
