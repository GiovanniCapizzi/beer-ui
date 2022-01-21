import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, RoundButton } from 'beer-ui';
import {
  faArrowLeft,
  faArrowRight,
  faCheckSquare,
  faFileCode,
  faPlus,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

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
        <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
          <Button
            title="Small Button"
            onPress={() => {}}
            variant="primary"
            icon={faArrowRight}
          />
        </View>
        <Text />
        <Button
          title="Secondary Button"
          onPress={() => {}}
          variant="secondary"
        />
        <Text />
        <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
          <Button
            title="Small Button"
            onPress={() => {}}
            variant="secondary"
            icon={faArrowLeft}
            iconDirection="left"
          />
        </View>
        <Text />
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <RoundButton
            onPress={() => {}}
            shadow
            style={{ marginRight: 12 }}
            variant="primary"
            size={74}
            icon={faShare}
            title="Share"
          />
          <RoundButton
            onPress={() => {}}
            variant="primary"
            size={64}
            icon={faPlus}
          />
          <RoundButton
            onPress={() => {}}
            style={{ marginLeft: 12 }}
            variant="primary"
            size={44}
            icon={faCheckSquare}
          />
        </View>
        <Text />
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <RoundButton
            onPress={() => {}}
            variant="secondary"
            shadow
            style={{ marginRight: 12 }}
            size={74}
            icon={faFileCode}
            title="Create"
          />
          <RoundButton
            onPress={() => {}}
            variant="secondary"
            size={64}
            icon={faPlus}
          />
          <RoundButton
            onPress={() => {}}
            style={{ marginLeft: 12 }}
            variant="secondary"
            size={44}
            icon={faCheckSquare}
          />
        </View>
        <Text />
      </ScrollView>
    </SafeAreaView>
  );
}
