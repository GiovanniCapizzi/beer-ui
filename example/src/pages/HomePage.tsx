import * as React from 'react';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Line, Typography } from '@giovannicapizzi/beer-ui';
import {
  faCreditCard,
  faHeading,
  faImage,
  faImages,
  faPencilAlt,
  faSquare,
  faSquareFull,
  faStream,
  faTags,
  faTerminal,
  faTextHeight,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  spaceY: {
    marginVertical: 16,
  },
});

const components = {
  Typography: faTextHeight,
  Images: faImages,
  Buttons: faSquare,
  Fields: faTerminal,
  Tags: faTags,
  Cards: faCreditCard,
  Headers: faHeading,
  Overlay: faSquareFull,
  Dialog: faWindowMaximize,
  Carousel: faImage,
  Misc: faStream,
};

const ComponentButtons = ({ navigation }) => {
  const buttons = useMemo(
    () =>
      Object.entries(components).map(([key, value]) => (
        <View key={key}>
          <Button
            title={key}
            onPress={() => navigation.navigate(key)}
            variant="primary"
            icon={value}
            slim
          />
          <Text />
        </View>
      )),
    [navigation]
  );
  return <View>{buttons}</View>;
};

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Typography variant="primary" text="Components" size="medium" />
        <Line variant="primary" style={styles.spaceY} />
        <ComponentButtons navigation={navigation} />
        <Typography variant="primary" text="Palette" size="medium" />
        <Line variant="primary" style={styles.spaceY} />
        <Button
          title="Change theme colors"
          onPress={() => navigation.navigate('Palette')}
          variant="secondary"
          icon={faPencilAlt}
        />
      </ScrollView>
    </View>
  );
}
