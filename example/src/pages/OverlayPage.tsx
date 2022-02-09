import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Overlay, Typography } from 'beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceY: {
    marginVertical: 42,
  },
});

export default function OverlayPage() {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Overlay
        opacity={0.8}
        show={show}
        onClose={() => setShow(false)}
        onOverlayClick={() => setShow(false)}
        style={styles.overlay}
      >
        <Typography variant="primary" text="Overlay Test" size="large" />
      </Overlay>
      <SafeAreaView style={styles.container}>
        <Button
          title="Show Overlay"
          onPress={() => setShow(!show)}
          variant="primary"
        />
      </SafeAreaView>
    </View>
  );
}
