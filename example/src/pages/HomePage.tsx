import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'beer-ui';
import MiscPage from './MiscPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the home demo page</Text>
      <Text />
      <Button
        title="Images"
        onPress={() => navigation.navigate('Images')}
        variant="primary"
      />
      <Text />
      <Button
        title="Buttons"
        onPress={() => navigation.navigate('Buttons')}
        variant="primary"
      />
      <Text />
      <Button
        title="Typography"
        onPress={() => navigation.navigate('Typography')}
        variant="primary"
      />
      <Text />
      <Button
        title="Misc"
        onPress={() => navigation.navigate('Misc')}
        variant="primary"
      />
    </View>
  );
}
