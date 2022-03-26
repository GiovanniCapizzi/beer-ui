import * as React from 'react';
import type { ImageSourcePropType, ImageURISource } from 'react-native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@giovannicapizzi/beer-ui';

type style = Record<string, string | number>;

export interface ImageButtonProps {
  onPress: () => any;
  source: ImageURISource | ImageSourcePropType;
  width: number;
  height: number;
  style?: style | style[];
  sourceStyle?: style | style[];
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 28,
    paddingVertical: 8,
  },
});

export const ImageButton: React.FC<ImageButtonProps> = ({
  onPress,
  source,
  sourceStyle,
  width,
  height,
  style,
  ...props
}) => {
  const { imageButton: palette } = useTheme();
  return (
    <TouchableOpacity
      {...props}
      style={[style, styles.container, { borderColor: palette.border }]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Image
        resizeMode="stretch"
        source={source}
        style={[{ width, height }, sourceStyle]}
      />
    </TouchableOpacity>
  );
};
