import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
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
    id: '_1',
    image: dish,
    title: 'Mushrooms Rice',
    subtitle: '35min, 2 servings',
    category: 'First Courses',
  },
  {
    id: '_2',
    image: dish,
    title: 'Grilled meat',
    subtitle: '24min, 2 servings',
    category: 'Second Courses',
  },
  {
    id: '_3',
    image: dish,
    title: 'Grilled chicken',
    subtitle: '1h, 4 servings',
    category: 'Dinner',
  },
  {
    id: '_4',
    image: dish,
    title: 'Pasta',
    subtitle: '24min, 2 servings',
    category: 'Second Courses',
  },
  {
    id: '_5',
    image: dish,
    title: 'Pasta carbonara',
    subtitle: '10min, 1 serving',
    category: 'Breakfast',
  },
  {
    id: '_6',
    image: dish,
    title: 'Sushi',
    subtitle: '24min, 1 serving',
    category: 'Dinner',
  },
  {
    id: '_7',
    image: dish,
    title: 'Sashimi',
    subtitle: '24min, 1 serving',
    category: 'Dinner',
  },
];

export default function FieldsPage() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  // Your custom search implementation ...
  const searchResults = useMemo(() => {
    return searchText
      ? data.filter((d) => d.title.startsWith(searchText))
      : undefined;
  }, [searchText]);

  // Simulate loading query ...
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 512);
  }, [searchText]);

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
            loading={loading}
            noResultMessage="No results found ..."
            results={searchResults}
            placeholder="Search field ..."
            onResultPress={console.log}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
