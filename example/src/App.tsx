import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'beer-ui';


export default function App() {

  return (
    <View style={styles.container}>
      <Button />
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
