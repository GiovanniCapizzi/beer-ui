import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  faBook,
  faClock,
  faFile,
  faHome,
  faShoppingCart,
  faUserCircle,
  faUsers,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { Avatar, BottomBar, CardItem, Item, Units } from 'beer-ui';

const dish = require('../res/budae-jigae.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
  spaceY: {
    marginVertical: 42,
  },
  stretch: {
    alignItems: 'flex-start',
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

const icons = [
  {
    icon: faBook,
    title: 'Recipes',
  },
  {
    icon: faHome,
    title: 'Home',
  },
  {
    icon: faFile,
    title: 'Create',
    big: true,
  },
  {
    icon: faShoppingCart,
    title: 'Cart',
  },
  {
    icon: faUserCircle,
    title: 'Profile',
    badge: '6',
  },
];

export default function MiscPage() {
  const [itemSelected, setItemSelected] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState('Home');
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
            <Units
              variant="primary"
              text={'g'}
              unit={count}
              max={10}
              min={0}
              onAdd={() => setCount(count + 1)}
              onRemove={() => setCount(count - 1)}
              size="medium"
            />
          </View>
          <Text />
          <View>
            <Units
              variant="secondary"
              text={'g'}
              unit={count}
              max={10}
              min={0}
              onAdd={() => setCount(count + 1)}
              onRemove={() => setCount(count - 1)}
              size="medium"
            />
          </View>
          <Text />
          <View>
            <Item
              variant="primary"
              title={'List item title'}
              onPress={() => {}}
            />
          </View>
          <Text />
          <View>
            <Item
              variant="secondary"
              title={'List item title'}
              onPress={() => console.log('OnPress')}
              unitsProps={{
                variant: 'secondary',
                text: 'g',
                unit: count,
                max: 200,
                min: 0,
                onAdd: () => setCount(count + 1),
                onRemove: () => setCount(count - 1),
                size: 'medium',
              }}
            />
          </View>
          <Text />
          <View style={styles.stretch}>
            <Avatar
              source={dish}
              onPress={() => console.log('onPress')}
              onImagePress={() => console.log('onImagePress')}
              size={56}
              variant="primary"
              textProps={{
                text: 'Martha Khan Jones',
                variant: 'secondary',
                size: 'large',
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.spaceY}>
        <BottomBar
          icons={icons}
          active={selectedIcon}
          onPress={(icon) => !icon.big && setSelectedIcon(icon.title)}
        />
      </View>
    </View>
  );
}
