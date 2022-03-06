import * as React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import textSize from '../Common/sizes';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

export interface CheckBoxProps {
  variant: 'primary' | 'secondary';
  style?: ViewStyle;
  value: boolean;
  size: 'small' | 'medium' | 'large';
  setValue: (e: boolean) => void;
  component?: React.ReactElement;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const CheckBox: React.FC<CheckBoxProps> = ({
  variant,
  value,
  setValue,
  size,
  component,
}) => {
  const { checkBox: palette } = useTheme();
  const color = palette[variant];
  return (
    <TouchableOpacity onPress={() => setValue(!value)} style={styles.row}>
      <FontAwesomeIcon
        icon={value ? faSquare : faCheckSquare}
        color={color}
        size={textSize[size]}
      />
      {component}
    </TouchableOpacity>
  );
};
