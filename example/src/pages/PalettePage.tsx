import * as React from 'react';
import { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  defaultColors,
  Line,
  Typography,
} from '@giovannicapizzi/beer-ui';
import ColorPicker from 'react-native-wheel-color-picker';
import { useStoreActions, useStoreState } from '../redux/store';
import jp from 'jsonpath';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  paletteButton: {
    borderRadius: 16,
    padding: 32,
    margin: 12,
  },
  inlineRow: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  spaceY: {
    marginVertical: 12,
  },
});

export default function PalettePage() {
  const customTheme = useStoreState((state) => state.ui.customTheme);
  const setCustomTheme = useStoreActions((state) => state.ui.setCustomTheme);

  const newTheme = useMemo(
    () => JSON.parse(JSON.stringify(customTheme)),
    [customTheme]
  );

  const palette = useMemo(
    () =>
      jp
        .nodes(newTheme, '$..*')
        .filter((item) => typeof item.value === 'string')
        .map((item) => item.path.slice(1).join('.'))
        .sort(),
    [newTheme]
  );

  const [clrKey, setClrKey] = useState(palette[0]);

  const buttons = useMemo(
    () =>
      palette.map((key) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.paletteButton,
            { backgroundColor: jp.value(newTheme, key) },
          ]}
          onPress={() => setClrKey(key)}
        />
      )),
    [newTheme, palette]
  );

  return (
    <View style={styles.container}>
      <Typography variant="primary" text="Palette" size="medium" />
      <Line variant="primary" style={styles.spaceY} />
      <View style={styles.inlineRow}>
        <Typography variant="secondary" text="Selected color:" size="medium" />
        <Typography variant="primary" text={` ${clrKey}`} size="medium" />
      </View>
      <Text />
      <ScrollView horizontal={true} contentContainerStyle={styles.inlineRow}>
        {buttons}
      </ScrollView>
      <View style={styles.spaceY}>
        <Button
          title="Reset palette"
          onPress={() => setCustomTheme(defaultColors)}
          variant="primary"
        />
      </View>
      <ColorPicker
        color={jp.value(newTheme, clrKey)}
        onColorChangeComplete={(color) => {
          jp.value(newTheme, clrKey, color);
          setCustomTheme({ ...newTheme });
        }}
        thumbSize={32}
        sliderSize={32}
        noSnap={true}
        row={false}
        swatchesLast={true}
        swatches={true}
      />
    </View>
  );
}
