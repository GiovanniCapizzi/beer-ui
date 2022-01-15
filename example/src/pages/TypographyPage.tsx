import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Typography } from 'beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
});

export default function TypographyPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TextDemo bg="white" size="large" variant="accent" />
        <TextDemo bg="white" size="medium" variant="accent" />
        <TextDemo bg="white" size="small" variant="accent" />
        <Typography variant="accent" text="Default Text" />
        <Text />
        <TextDemo bg="white" size="large" variant="primary" />
        <TextDemo bg="white" size="medium" variant="primary" />
        <TextDemo bg="white" size="small" variant="primary" />
        <Typography variant="primary" text="Default Text" />
        <Text />
        <TextDemo bg="black" size="large" variant="secondary" />
        <TextDemo bg="black" size="medium" variant="secondary" />
        <TextDemo bg="black" size="small" variant="secondary" />
        <View style={{ backgroundColor: 'black' }}>
          <Typography text="Default Text" variant="secondary" />
        </View>
        <Text />
      </ScrollView>
    </SafeAreaView>
  );
}

const TextDemo = ({
  size,
  variant,
  bg,
}: {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'accent';
  bg: 'black' | 'white';
}) => {
  const title = size.charAt(0).toUpperCase() + size.slice(1);
  return (
    <View style={{ backgroundColor: bg }}>
      <Typography
        variant={variant}
        text={`${title} Text`}
        size={size}
        textStyle={{ fontWeight: 'bold' }}
      />
      <Typography
        variant={variant}
        text={`${title} Text`}
        size={size}
      />
      <Typography
        variant={variant}
        text={`${title} Text`}
        size={size}
        textStyle={{ fontWeight: '300' }}
      />
      <Text />
    </View>
  );
};
