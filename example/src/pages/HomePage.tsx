import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'beer-ui';
import {
  faHeading,
  faImage,
  faImages,
  faSquare,
  faTags,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.center}>
          <Text>This is the home demo page</Text>
        </View>
        <Text />
        <Button
          title="Headers"
          onPress={() => navigation.navigate('Headers')}
          variant="primary"
          icon={faHeading}
        />
        <Text />
        <Button
          title="Images"
          onPress={() => navigation.navigate('Images')}
          variant="primary"
          icon={faImages}
        />
        <Text />
        <Button
          title="Buttons"
          onPress={() => navigation.navigate('Buttons')}
          variant="primary"
          icon={faSquare}
        />
        <Text />
        <Button
          title="Typography"
          onPress={() => navigation.navigate('Typography')}
          variant="primary"
          icon={faTextHeight}
        />
        <Text />
        <Button
          title="Tags"
          onPress={() => navigation.navigate('Tags')}
          variant="primary"
          icon={faTags}
        />
        <Text />
        <Button
          title="Carousel"
          onPress={() => navigation.navigate('Carousel')}
          variant="primary"
          icon={faImage}
        />
      </ScrollView>
    </View>
  );
}
