import * as React from 'react';
import { Dimensions, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get('window');

export interface OverlayProps {
  opacity: number;
  show: boolean;
  onClose?: () => any;
  onOverlayClick?: () => any;
  style?: Record<string, string | number>;
}

const styles = StyleSheet.create({
  root: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    flex: 1,
    left: 0,
    zIndex: 64,
  },
  icon: {
    position: 'absolute',
    right: 32,
    top: 42,
  },
});

export const Overlay: React.FC<OverlayProps> = ({
  opacity,
  show,
  onClose,
  onOverlayClick,
  children,
  style,
}) => {
  const { overlay: palette } = useTheme();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={onOverlayClick}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.root,
          style,
          { backgroundColor: palette.background, opacity },
        ]}
        onPress={onOverlayClick}
      >
        {onClose && (
          <TouchableOpacity onPress={onClose} style={styles.icon}>
            <FontAwesomeIcon icon={faXmark} color={palette.icon} size={36} />
          </TouchableOpacity>
        )}
        {children}
      </TouchableOpacity>
    </Modal>
  );
};
