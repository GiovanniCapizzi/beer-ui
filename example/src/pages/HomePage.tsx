import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'beer-ui';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the home demo page</Text>
      <Text />
      <Button
        title="Buttons"
        onPress={() => navigation.navigate('Buttons')}
        variant={'primary'}
      />
      <Text />
      <Button
        title="Typography"
        onPress={() => navigation.navigate('Typography')}
        variant={'primary'}
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
