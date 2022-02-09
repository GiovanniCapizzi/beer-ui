import * as React from 'react';
import { useMemo } from 'react';
import {
  ButtonProps as NativeButtonProps,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Typography, useTheme } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export interface BigButtonProps extends NativeButtonProps {
  variant: 'primary' | 'secondary';
  icon?: IconProp;
  style?: Record<string, string | number>;
  backgroundImage?: ImageSourcePropType;
  height?: number;
  width?: number;
  badgeNum?: number;
}

interface ITouchableOpacityStyle {
  backgroundColor: string;
  borderColor: string;
  slim?: boolean;
  height?: number;
  width?: number;
}

const TouchableOpacityStyle = styled(TouchableOpacity)<ITouchableOpacityStyle>`
  background: ${(p) => p.backgroundColor};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  border: 1px solid ${(p) => p.borderColor};
  font-weight: bold;
  justify-content: center;
  border-radius: 8px;
  width: ${(p) => (p.width ? `${p.width}px` : 'auto')};
  height: ${(p) => (p.height ? `${p.height}px` : 'auto')};
`;

interface ButtonBadgeProps {
  color: string;
}

const ButtonBadge = styled(View)<ButtonBadgeProps>`
  background: ${(p) => p.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -16px;
  z-index: 1;
  right: -16px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const ContentView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

const styles = StyleSheet.create({
  icon: {
    marginBottom: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    borderRadius: 8,
  },
});

export const BigButton: React.FC<BigButtonProps> = ({
  variant,
  title,
  icon,
  height,
  width,
  badgeNum,
  backgroundImage,
  ...props
}) => {
  const { bigButton } = useTheme();
  const palette = bigButton[variant];

  const content = useMemo(() => {
    const textColor = backgroundImage ? palette.white : palette.text;
    return (
      <ContentView>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            color={textColor}
            style={styles.icon}
            size={42}
          />
        )}
        <Typography
          text={title}
          textStyle={[styles.bold, { color: textColor }]}
        />
      </ContentView>
    );
  }, [backgroundImage, icon, palette.text, palette.white, title]);

  return (
    <TouchableOpacityStyle
      activeOpacity={0.6}
      height={height}
      width={width}
      backgroundColor={palette.background}
      borderColor={palette.border}
      {...props}
    >
      {badgeNum && (
        <ButtonBadge color={palette.text}>
          <Typography
            text={badgeNum.toString()}
            size="medium"
            textStyle={[styles.bold, { color: palette.white }]}
          />
        </ButtonBadge>
      )}
      {backgroundImage ? (
        <ImageBackground
          resizeMode="cover"
          source={backgroundImage}
          style={[{ width, height }, styles.center]}
          imageStyle={styles.imageBackground}
        >
          {content}
        </ImageBackground>
      ) : (
        content
      )}
    </TouchableOpacityStyle>
  );
};
