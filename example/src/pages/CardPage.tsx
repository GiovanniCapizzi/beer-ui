import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  faClock,
  faUsers,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { CardItem, FlatCardItem } from 'beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
  rating: {
    marginVertical: 4,
  },
});

const mockCardItemData = [
  {
    icon: faClock,
    text: '35 min',
  },
  {
    icon: faUtensils,
    text: 'easy',
  },
  {
    icon: faUsers,
    text: '2',
  },
];

const imageSource = {
  uri: 'https://images.unsplash.com/photo-1632229095740-8c75082087c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
};

export default function CardPage() {
  const [itemSelected, setItemSelected] = useState(false);
  const [starLevel, setStarLevel] = useState(3);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View>
            <CardItem
              imageSource={imageSource}
              variant="primary"
              title={'Card title'}
              category={'category'}
              onContentPress={() => console.log('onPress')}
              onImagePress={() => {
                console.log('onImagePress');
                setItemSelected(!itemSelected);
              }}
              selected={itemSelected}
              data={mockCardItemData}
            />
          </View>
          <Text />
          <View>
            <FlatCardItem
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              onClose={console.log}
            />
          </View>
          <Text />
          <View>
            <FlatCardItem
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              ratingProps={{
                variant: 'secondary',
                size: 'small',
                level: starLevel,
                onPress: (level) => setStarLevel(level),
              }}
            />
          </View>
          <Text />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
