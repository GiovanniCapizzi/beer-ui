import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'beer-ui';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the home demo page</Text>
      <Text />
      <Button
        title="First Page"
        onPress={() => navigation.navigate('FirstPage')}
      />
      <Text />
      <Button
        title="Second Page"
        onPress={() => navigation.navigate('SecondPage')}
      />
      <Text />
      <Button
        title="Typography"
        onPress={() => navigation.navigate('Typography')}
      />
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
