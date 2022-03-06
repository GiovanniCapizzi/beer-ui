import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  faBook,
  faFile,
  faHome,
  faShoppingCart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  Avatar,
  BottomBar,
  CheckBox,
  Item,
  Link,
  Rating,
  Typography,
  Units,
} from 'beer-ui';

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
  rating: {
    marginVertical: 4,
  },
  spaceLeft: {
    marginLeft: 8,
  },
});

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
  const [count, setCount] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState('Home');
  const [starLevel, setStarLevel] = useState(3);
  const [checkValue, setCheckValue] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
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
          <Text />
          <View style={styles.rating}>
            <Rating
              variant="primary"
              size="small"
              level={starLevel}
              onPress={(level) => setStarLevel(level)}
            />
          </View>
          <View style={styles.rating}>
            <Rating
              variant="primary"
              size="medium"
              level={starLevel}
              onPress={(level) => setStarLevel(level)}
            />
          </View>
          <View style={styles.rating}>
            <Rating
              variant="primary"
              size="large"
              level={starLevel}
              onPress={(level) => setStarLevel(level)}
            />
          </View>
          <Text />
          <View style={styles.stretch}>
            <CheckBox
              variant="primary"
              size="large"
              value={checkValue}
              component={
                <>
                  <Typography
                    variant="secondary"
                    text="I've read the "
                    size="small"
                    textStyle={styles.spaceLeft}
                  />
                  <Link
                    variant="secondary"
                    text="terms"
                    size="small"
                    onPress={console.log}
                  />
                  <Typography variant="secondary" text="." size="small" />
                </>
              }
              setValue={setCheckValue}
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
