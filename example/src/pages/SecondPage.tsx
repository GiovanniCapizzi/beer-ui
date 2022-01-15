import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'beer-ui';

export default function SecondPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the second demo page</Text>
      <Text />
      <Button title="Go Back" onPress={() => navigation.navigate('BeerUI')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
