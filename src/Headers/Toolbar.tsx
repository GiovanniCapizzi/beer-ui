import * as React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useTheme } from 'beer-ui';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ImageProps {
  source: ImageSourcePropType;
  imageStyle?:
    | Record<string, string | number>
    | Record<string, string | number>[];
}

export interface ToolbarProps {
  height?: number;
  onClose?: (e: GestureResponderEvent) => any;
  variant: 'primary' | 'secondary';
  logo?: ImageProps;
  cover?: ImageProps;
  onCoverPress?: (e: GestureResponderEvent) => any;
}

interface ToolbarContainerProps {
  background: string;
  height: number;
}

const ToolbarContainer = styled(View)<ToolbarContainerProps>`
  background-color: ${(p) => p.background};
  height: ${(p) => p.height}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const styles = StyleSheet.create({
  closeIcon: {
    marginRight: 4,
  },
});

export const Toolbar: React.FC<ToolbarProps> = ({
  height = 64,
  onClose,
  variant,
  logo,
  cover,
  onCoverPress,
}) => {
  const { toolbar: palette } = useTheme();
  const background = palette[variant];
  const { width } = useWindowDimensions();
  return (
    <>
      <ToolbarContainer background={background} height={height}>
        {logo && <Image source={logo.source} style={logo.imageStyle} />}
        {onClose && (
          <TouchableOpacity onPress={onClose}>
            <FontAwesomeIcon
              icon={faXmark}
              color={palette.closeIcon}
              size={height / 2}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        )}
      </ToolbarContainer>
      {cover && (
        <TouchableOpacity
          onPress={onCoverPress}
          activeOpacity={onCoverPress ? 0.5 : 1}
        >
          <Image source={cover.source} style={[{ width }, cover.imageStyle]} />
        </TouchableOpacity>
      )}
    </>
  );
};
