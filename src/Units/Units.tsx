import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import textSize from '../Common/sizes';
import { useTheme } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export interface TypographyProps {
  text?: string;
  unit: number;
  onAdd: () => any;
  onRemove: () => any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  max?: number;
  min?: number;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  enabled: {
    marginHorizontal: 2,
    opacity: 1,
  },
  disabled: {
    marginHorizontal: 2,
    opacity: 0.8,
  },
});

export const Units: React.FC<TypographyProps> = ({
  onAdd,
  onRemove,
  text,
  variant,
  size,
  style,
  textStyle,
  max,
  min,
  unit,
}) => {
  const { text: palette } = useTheme();
  const color = variant ? palette[variant] : undefined;
  const fontSize = textSize[size];
  const notMax = max === undefined || unit < max;
  const notMin = min === undefined || unit > min;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => notMin && onRemove()}>
        <FontAwesomeIcon
          icon={faMinus}
          color={color}
          size={fontSize}
          style={notMin ? styles.enabled : styles.disabled}
        />
      </TouchableOpacity>
      <Text style={[{ color, fontSize }, textStyle]}>{`${unit}${text}`}</Text>
      <TouchableOpacity onPress={() => notMax && onAdd()}>
        <FontAwesomeIcon
          icon={faPlus}
          color={color}
          size={fontSize}
          style={notMax ? styles.enabled : styles.disabled}
        />
      </TouchableOpacity>
    </View>
  );
};
