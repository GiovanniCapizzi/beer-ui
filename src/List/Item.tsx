import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import styled from 'styled-components';
import { Typography, Units, useTheme } from 'beer-ui';
import type { UnitsProps } from '../Units/Units';

export interface ItemProps {
  variant: 'primary' | 'secondary';
  title: string;
  style?: ViewStyle;
  onPress: () => any;
  unitsProps?: UnitsProps;
}

interface CardItemViewProps {
  background: string;
  borderColor: string;
}

const ItemView = styled(View)<CardItemViewProps>`
  background: ${(p) => p.background};
  border: 1px solid ${(p) => p.borderColor};
  border-radius: 8px;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  content: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const Item: React.FC<ItemProps> = ({
  variant,
  style,
  title,
  onPress,
  unitsProps,
}) => {
  const { item } = useTheme();
  const palette = item[variant];

  return (
    <ItemView
      background={palette.background}
      borderColor={palette.border}
      style={style}
    >
      <TouchableOpacity style={styles.content} onPress={onPress}>
        <Typography
          text={title}
          size="medium"
          textStyle={[{ color: palette.text }]}
        />
        {unitsProps && <Units {...unitsProps} />}
      </TouchableOpacity>
    </ItemView>
  );
};
