import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  Button,
  FlatCardItem,
  Overlay,
  Typography,
} from '@giovannicapizzi/beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  spaceY: {
    marginVertical: 42,
  },
});

export default function OverlayPage() {
  const [show, setShow] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [starLevel, setStarLevel] = useState(3);
  const [lines, setLines] = useState(2);

  return (
    <View style={styles.container}>
      <Overlay
        opacity={0.8}
        show={show}
        onClose={() => setShow(false)}
        onOverlayClick={() => setShow(false)}
        style={styles.overlay}
      >
        {isCard ? (
          <FlatCardItem
            title="Lorem ipsum"
            numberOfContentLines={lines}
            onPress={() => setLines(lines > 4 ? 2 : 12)}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                     minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip."
            ratingProps={{
              variant: 'secondary',
              size: 'small',
              readOnly: true,
              level: starLevel,
              onPress: (level) => setStarLevel(level),
            }}
          />
        ) : (
          <Typography variant="primary" text="Overlay Test" size="large" />
        )}
      </Overlay>
      <SafeAreaView style={styles.container}>
        <Button
          title="Show Overlay"
          onPress={() => {
            setIsCard(false);
            setShow(!show);
          }}
          variant="primary"
        />
        <Text />
        <Button
          title="Show Card Overlay"
          onPress={() => {
            setIsCard(true);
            setShow(!show);
          }}
          variant="primary"
        />
      </SafeAreaView>
    </View>
  );
}
