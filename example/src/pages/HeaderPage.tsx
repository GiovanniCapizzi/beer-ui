import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, Line, Typography } from 'beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spaceY: {
    marginVertical: 12,
  },
});

export default function HeaderPage() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Typography
          variant="primary"
          text="Primary Header"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Line variant="primary" />
        <Header variant="primary"/>
        <Typography
          variant="primary"
          text="Primary Header (reverse)"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Line variant="primary" />
        <Header variant="primary" reverse />
        <Typography
          variant="primary"
          text="Secondary Header"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Line variant="primary" />
        <Header variant="secondary" />
        <Typography
          variant="primary"
          text="Secondary Header (reverse)"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Line variant="primary" />
        <Header variant="secondary" reverse />
      </ScrollView>
    </View>
  );
}
