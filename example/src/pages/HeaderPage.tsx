import * as React from 'react';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Header, Typography } from 'beer-ui';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const appLogo = require('../res/app-logo.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spaceY: {
    marginVertical: 12,
  },
  action: {
    top: 110,
    left: 12,
    zIndex: 1,
    position: 'absolute',
  },
  header: {
    flex: 1,
    width: 232,
    height: 64,
    top: 42,
    zIndex: 1,
    position: 'absolute',
    resizeMode: 'contain',
  },
});

export default function HeaderPage() {
  const action = useMemo(
    () => (
      <View style={styles.action}>
        <Button
          slim
          title="Login"
          onPress={() => {}}
          variant="white"
          icon={faArrowAltCircleLeft}
          iconDirection="left"
        />
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Typography
          variant="primary"
          text="Primary Header"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Header
          variant="primary"
          logo={{
            source: appLogo,
            imageStyle: styles.header,
          }}
          component={action}
        />
        <Typography
          variant="primary"
          text="Primary Header (reverse)"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Header
          variant="primary"
          reverse
          logo={{
            source: appLogo,
            imageStyle: [styles.header, { right: 0 }],
          }}
        />
        <Typography
          variant="primary"
          text="Secondary Header"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Header
          variant="secondary"
          logo={{
            source: appLogo,
            imageStyle: styles.header,
          }}
        />
        <Typography
          variant="primary"
          text="Secondary Header (reverse)"
          size="medium"
          textStyle={styles.spaceY}
        />
        <Header
          variant="secondary"
          reverse
          logo={{
            source: appLogo,
            imageStyle: [styles.header, { right: 0 }],
          }}
        />
      </ScrollView>
    </View>
  );
}
