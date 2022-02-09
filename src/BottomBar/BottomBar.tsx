import * as React from 'react';
import { useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import styled from 'styled-components';
import { IconButton, RoundButton, useTheme } from 'beer-ui';
import type { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

interface BottomBarIcon {
  title: string;
  badge?: string;
  icon: IconProp | IconName;
  big?: boolean;
}

export interface BottomBarProps {
  style?: ViewStyle;
  active: string;
  icons: BottomBarIcon[];
  onPress: (icon: BottomBarIcon) => any;
}

interface BottomBarViewProps {
  background: string;
}

const BottomBarView = styled(View)<BottomBarViewProps>`
  background: ${(p) => p.background};
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 8px;
  flex-direction: row;
  min-height: 56px;
`;

const styles = StyleSheet.create({
  bigIcon: {
    marginTop: -32,
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
  },
});

export const BottomBar: React.FC<BottomBarProps> = ({
  style,
  icons,
  onPress,
  active,
}) => {
  const { bottomBar: palette } = useTheme();

  const buttons = useMemo(
    () =>
      icons.map((icon, index) => {
        const button = icon.big ? (
          <RoundButton
            title={icon.title}
            onPress={() => onPress(icon)}
            icon={icon.icon}
            variant="secondary"
            shadow
            style={styles.bigIcon}
            size={74}
          />
        ) : (
          <IconButton
            title={icon.title}
            onPress={() => onPress(icon)}
            icon={icon.icon}
            variant={'primary'}
            badge={icon.badge}
            active={active === icon.title}
          />
        );
        return (
          <View key={index} style={styles.iconView}>
            {button}
          </View>
        );
      }),
    [active, icons, onPress]
  );

  return (
    <BottomBarView background={palette.background} style={style}>
      {buttons}
    </BottomBarView>
  );
};
