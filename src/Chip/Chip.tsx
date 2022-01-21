import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { chipColors } from '../Common/colors';
import { Typography } from 'beer-ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export interface ChipProps {
  title: string;
  style?: object;
  onConfirm: () => any;
}

const TouchableOpacityStyle = styled(TouchableOpacity)`
  background: ${chipColors.foreground};
  font-weight: bold;
  padding: 6px 24px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ChipContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background: ${chipColors.background};
`;

const styles = StyleSheet.create({
  spaceLeft: {
    marginLeft: 4,
    marginRight: 8,
  },
});

export const Chip: React.FC<ChipProps> = ({ title, onConfirm, ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <ChipContainer {...props}>
      <TouchableOpacityStyle activeOpacity={0.8} onPress={() => setShow(!show)}>
        <Typography text={title} textStyle={{ color: chipColors.text }} />
      </TouchableOpacityStyle>
      {show && (
        <TouchableOpacity onPress={onConfirm}>
          <FontAwesomeIcon
            icon={faTimes}
            color={chipColors.text}
            style={styles.spaceLeft}
          />
        </TouchableOpacity>
      )}
    </ChipContainer>
  );
};
