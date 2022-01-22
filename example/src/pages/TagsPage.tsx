import * as React from 'react';
import { useMemo, useState } from 'react';
import { Chip, Line, Typography } from 'beer-ui';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  spaceY: {
    marginTop: 12,
  },
});

const tags = ['tag1', 'tag2', 'tag3', 'tag4'];

export default function TagsPage() {
  const [tagsItem, setTagsItem] = useState(tags);

  const tagsItems = useMemo(
    () =>
      tagsItem.map((t) => (
        <Chip
          key={t}
          title={t}
          style={styles.spaceY}
          onConfirm={() =>
            setTagsItem([...tagsItem.filter((tag) => t !== tag)])
          }
        />
      )),
    [tagsItem]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Typography variant="primary" text="Tags" size="medium" />
        <Line variant="primary" style={styles.spaceY} />
        <View style={styles.flexStart}>{tagsItems}</View>
        <Text />
      </ScrollView>
    </SafeAreaView>
  );
}
