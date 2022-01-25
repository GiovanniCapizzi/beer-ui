import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Line, Typography, useTheme } from 'beer-ui';
import {
  faHeading,
  faImage,
  faImages,
  faSquare,
  faTags,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginVertical: 16,
  },
});

const PageButtons = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Headers"
        onPress={() => navigation.navigate('Headers')}
        variant="primary"
        icon={faHeading}
      />
      <Text />
      <Button
        title="Images"
        onPress={() => navigation.navigate('Images')}
        variant="primary"
        icon={faImages}
      />
      <Text />
      <Button
        title="Buttons"
        onPress={() => navigation.navigate('Buttons')}
        variant="primary"
        icon={faSquare}
      />
      <Text />
      <Button
        title="Typography"
        onPress={() => navigation.navigate('Typography')}
        variant="primary"
        icon={faTextHeight}
      />
      <Text />
      <Button
        title="Tags"
        onPress={() => navigation.navigate('Tags')}
        variant="primary"
        icon={faTags}
      />
      <Text />
      <Button
        title="Carousel"
        onPress={() => navigation.navigate('Carousel')}
        variant="primary"
        icon={faImage}
      />
      <Text />
    </View>
  );
};

const PalettePanel = () => {
  const { colors } = useTheme();
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.inlineRow}>
      <TouchableOpacity
        style={[styles.paletteButton, { backgroundColor: colors.accent.light }]}
      />
      <TouchableOpacity
        style={[styles.paletteButton, { backgroundColor: colors.accent.base }]}
      />
      <TouchableOpacity
        style={[styles.paletteButton, { backgroundColor: colors.accent.dark }]}
      />
      <TouchableOpacity
        style={[styles.paletteButton, { backgroundColor: colors.white }]}
      />
      <TouchableOpacity
        style={[styles.paletteButton, { backgroundColor: colors.black }]}
      />
    </ScrollView>
  );
};

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Typography variant="primary" text="Components" size="medium" />
        <Line variant="primary" style={styles.spaceY} />
        <PageButtons navigation={navigation} />
        <Typography variant="primary" text="Palette" size="medium" />
        <Line variant="primary" style={styles.spaceY} />
        <PalettePanel />
      </ScrollView>
    </View>
  );
}
