import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Field, SearchField } from 'beer-ui';

const dish = require('../res/budae-jigae.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
});

const data = [
  {
    image: dish,
    title: 'Mushrooms Rice',
    subtitle: '35min, 2 servings',
    category: 'First Courses',
  },
  {
    image: dish,
    title: 'Grilled meat',
    subtitle: '24min, 2 servings',
    category: 'Second Courses',
  },
  {
    image: dish,
    title: 'Lorem ipsum',
    subtitle: '1h, 4 servings',
    category: 'Dinner',
  },
  {
    image: dish,
    title: 'Other dish',
    subtitle: '24min, 2 servings',
    category: 'Second Courses',
  },
  {
    image: dish,
    title: 'Kind of food',
    subtitle: '10min, 1 serving',
    category: 'Breakfast',
  },
  {
    image: dish,
    title: 'Sushi',
    subtitle: '24min, 1 serving',
    category: 'Dinner',
  },
];

export default function FieldsPage() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');

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
          <Text />
          <SearchField
            size={'medium'}
            onChange={setSearchText}
            text={searchText}
            noResultMessage="No results found ..."
            results={
              searchText
                ? data.filter((d) => d.title.startsWith(searchText))
                : undefined
            }
            placeholder="Search field ..."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
