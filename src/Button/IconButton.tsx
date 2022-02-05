import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Typography, useTheme } from 'beer-ui';

export interface IconButtonProps {
  active?: boolean;
  variant: 'primary' | 'secondary';
  icon: IconProp;
  onPress: () => any;
  title?: string;
  badge?: string;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
  },
  bar: {
    width: 30,
    minHeight: 4,
    borderRadius: 8,
    marginTop: 4,
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: 0,
    zIndex: 1,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const IconButton: React.FC<IconButtonProps> = ({
  variant,
  active,
  onPress,
  badge,
  title,
  icon,
  ...props
}) => {
  const { iconButton: palette } = useTheme();
  const color = palette[variant];
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onPress}
      {...props}
    >
      {!!badge && (
        <View style={[styles.badge, { backgroundColor: palette.badge }]}>
          <Typography text={badge} textStyle={{ color: palette.light }} />
        </View>
      )}
      <FontAwesomeIcon icon={icon} color={color} size={24} />
      {title && (
        <Typography text={title} textStyle={[styles.text, { color }]} />
      )}
      {active && <View style={[styles.bar, { backgroundColor: color }]} />}
    </TouchableOpacity>
  );
};
