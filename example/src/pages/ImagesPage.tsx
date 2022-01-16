import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableImage } from 'beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
});

export default function ImagesPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TouchableImage/>
      </ScrollView>
    </SafeAreaView>
  );
}
