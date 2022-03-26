import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { BoxImage, CardImage } from '@giovannicapizzi/beer-ui';

const dish = require('../res/budae-jigae.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
  flexStart: {
    alignItems: 'flex-start',
  },
});

export default function ImagesPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.flexStart}
      >
        <BoxImage
          title="Micro"
          shadow
          onPress={() => {}}
          source={dish}
          width={80}
          height={80}
        />
        <Text />
        <CardImage
          variant="primary"
          title="Fixed and flat"
          onPress={() => {}}
          source={dish}
          width={128}
          height={128}
        />
        <Text />
        <CardImage
          variant="secondary"
          title="Fixed and border"
          bordered
          onPress={() => {}}
          width={150}
          height={150}
          source={dish}
        />
        <Text />
        <CardImage
          variant="secondary"
          title="Responsive and shadow"
          onPress={() => {}}
          shadow
          source={dish}
          height={128}
          width={undefined}
        />
        <Text />
        <CardImage
          variant="secondary"
          onPress={() => {}}
          fullSize
          source={dish}
        />
        <Text />
        <Text />
        <Text />
      </ScrollView>
    </SafeAreaView>
  );
}
