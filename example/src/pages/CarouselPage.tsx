import * as React from 'react';
import { useRef } from 'react';
import { Button, Line, Typography } from '@giovannicapizzi/beer-ui';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CardCarousel } from '../external/Carousel/CardCarousel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
  spaceY: {
    marginTop: 12,
    marginBottom: 12,
  },
  row: {
    margin: 32,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

const data = [
  {
    title: 'Card 1',
    source: {
      url: 'https://images.unsplash.com/photo-1632229095740-8c75082087c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
    },
  },
  {
    title: 'Card 2',
    source: {
      url: 'https://images.unsplash.com/photo-1614961908593-2c6bf2bdf2ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
    },
  },
  {
    title: 'Card 3',
    source: {
      uri: 'https://images.unsplash.com/photo-1634324040880-63dbf9a4e5ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
    },
  },
  {
    title: 'Card 4',
    source: {
      uri: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
    },
  },
  {
    title: 'Card 5',
    source: {
      uri: 'https://images.unsplash.com/photo-1637361973696-3ebc29f2477a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
    },
  },
];

export default function CarouselPage() {
  const carouselRef = useRef<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Typography variant="primary" text="Default Carousel" size="medium" />
        <Line variant="primary" style={styles.spaceY} />
        <CardCarousel
          data={data}
          ref={carouselRef}
          height={128}
          width={128}
          onPress={(index) =>
            carouselRef && carouselRef.current.snapToItem(index)
          }
          bordered
          variant="primary"
          layout="default"
          shadow
        />
        <View style={styles.row}>
          <Button
            title="Back"
            onPress={() => carouselRef && carouselRef.current.snapToPrev()}
            variant="secondary"
            icon={faArrowLeft}
            iconDirection="left"
          />
          <Button
            title="Next"
            onPress={() => carouselRef && carouselRef.current.snapToNext()}
            variant="secondary"
            icon={faArrowRight}
            iconDirection="right"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
