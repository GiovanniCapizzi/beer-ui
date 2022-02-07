import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import type { TypographyProps } from '../Typography/Typography';
import { Typography, useTheme } from 'beer-ui';

export interface AvatarProps {
  source: ImageSourcePropType;
  onPress: () => any;
  onImagePress?: () => any;
  size: number;
  variant: 'primary' | 'secondary';
  textProps?: TypographyProps;
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 5,
  },
  spaceLeft: {
    marginLeft: 8,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Avatar: React.FC<AvatarProps> = ({
  source,
  onPress,
  variant,
  size,
  textProps,
  onImagePress,
}) => {
  const { avatar: palette } = useTheme();
  const background = palette[variant].background;
  const radius = size / 2;
  return (
    <TouchableOpacity onPress={onPress} style={styles.center}>
      <TouchableOpacity onPress={onImagePress}>
        <Image
          source={source}
          style={[
            {
              width: size,
              height: size,
              borderRadius: radius,
              borderColor: background,
            },
            styles.border,
          ]}
        />
      </TouchableOpacity>
      {textProps && <Typography textStyle={styles.spaceLeft} {...textProps} />}
    </TouchableOpacity>
  );
};
