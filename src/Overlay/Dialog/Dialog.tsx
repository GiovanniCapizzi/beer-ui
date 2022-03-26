import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Line, Overlay, Typography, useTheme } from '@giovannicapizzi/beer-ui';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import textSize from '../../Common/sizes';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface DialogProps {
  show: boolean;
  onClose: (show: boolean) => any;
  content?: React.ReactElement;
  contentMaxHeight?: string;
  header?: {
    icon?: IconProp;
    title: string;
    action?: React.ReactElement;
  };
  footer?: React.ReactElement;
}

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  closeIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  spaceY: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcon: {
    marginRight: 8,
  },
  footer: {
    marginTop: 16,
  },
});

interface CardContentProps {
  background: string;
  maxHeight?: string;
}

const CardContent = styled(View)<CardContentProps>`
  border-radius: 8px;
  padding: 48px 24px 24px 24px;
  max-height: ${(p) => p.maxHeight || '64%'};
  background: ${(p) => p.background};
`;

export const Dialog: React.FC<DialogProps> = ({
  show,
  onClose,
  header,
  content,
  contentMaxHeight,
  footer,
}) => {
  const { dialog: palette } = useTheme();
  return (
    <Overlay opacity={0.8} show={show} style={styles.overlay}>
      <CardContent
        maxHeight={contentMaxHeight}
        background={palette.background}
        onStartShouldSetResponder={() => true}
      >
        <TouchableOpacity
          onPress={() => onClose(false)}
          style={styles.closeIcon}
        >
          <FontAwesomeIcon
            icon={faTimes}
            color={palette.closeIcon}
            size={textSize.medium}
          />
        </TouchableOpacity>
        {header && (
          <>
            <View style={styles.spacedRow}>
              <View style={styles.row}>
                {header.icon && (
                  <FontAwesomeIcon
                    icon={header.icon}
                    color={palette.header}
                    size={textSize.large}
                    style={styles.headerIcon}
                  />
                )}
                <Typography
                  variant="primary"
                  text={header.title}
                  size="large"
                />
              </View>
              {header.action}
            </View>
            <Line variant="primary" style={styles.spaceY} />
          </>
        )}
        <ScrollView>
          <TouchableOpacity activeOpacity={1}>{content}</TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>{footer}</View>
      </CardContent>
    </Overlay>
  );
};
