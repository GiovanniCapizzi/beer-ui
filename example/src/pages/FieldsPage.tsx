import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Field } from 'beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
});

export default function FieldsPage() {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View>
          <Field
            size={'medium'}
            onChange={setText}
            text={text}
            placeholder="Simple Field"
          />
          <Text />
          <Field
            size={'medium'}
            onChange={setText}
            text={text}
            shadow
            placeholder="Elevated Field ..."
          />
          <Text />
          <Field
            size={'medium'}
            onChange={setText}
            text={text}
            invalidText="Required field"
            placeholder="Invalid Field ..."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
