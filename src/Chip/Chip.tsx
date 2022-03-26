import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { Typography } from '@giovannicapizzi/beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Theme/ThemeProvider';

export interface ChipProps {
  title: string;
  style?: object;
  onConfirm: () => any;
}

interface ChipStyleProps {
  foregroundColor: string;
}

const ChipStyle = styled(TouchableOpacity)<ChipStyleProps>`
  background: ${(p) => p.foregroundColor};
  font-weight: bold;
  padding: 6px 24px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

interface ChipContainerProps {
  backgroundColor: string;
}

const ChipContainer = styled(View)<ChipContainerProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background: ${(p) => p.backgroundColor};
`;

const styles = StyleSheet.create({
  spaceLeft: {
    marginLeft: 4,
    marginRight: 8,
  },
});

export const Chip: React.FC<ChipProps> = ({ title, onConfirm, ...props }) => {
  const [show, setShow] = useState(false);
  const { chip: palette } = useTheme();

  return (
    <ChipContainer {...props} backgroundColor={palette.background}>
      <ChipStyle
        foregroundColor={palette.foreground}
        activeOpacity={0.8}
        onPress={() => setShow(!show)}
      >
        <Typography text={title} textStyle={{ color: palette.text }} />
      </ChipStyle>
      {show && (
        <TouchableOpacity onPress={onConfirm}>
          <FontAwesomeIcon
            icon={faTimes}
            color={palette.text}
            style={styles.spaceLeft}
          />
        </TouchableOpacity>
      )}
    </ChipContainer>
  );
};
