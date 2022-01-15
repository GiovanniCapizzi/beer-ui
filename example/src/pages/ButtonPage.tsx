import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
});

export default function ButtonPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Button title="Primary Button" onPress={() => {}} variant="primary" />
        <Text />
        <Button
          title="Disabled Button"
          onPress={() => {}}
          disabled
          variant="primary"
        />
        <Text />
        <View style={{ alignItems: 'flex-start' }}>
          <Button title="Small Button" onPress={() => {}} variant="primary" />
        </View>
        <Text />
        <Button title="Secondary Button" onPress={() => {}} variant="secondary" />
        <Text />
        <View style={{ alignItems: 'flex-start' }}>
          <Button title="Small Button" onPress={() => {}} variant="secondary" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
