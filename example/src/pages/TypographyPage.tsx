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
        <TextDemo bg="white" size="large" variant="accentDark" />
        <TextDemo bg="white" size="medium" variant="accentDark" />
        <TextDemo bg="white" size="small" variant="accentDark" />
        <Typography variant="accentDark" text="Default Text" />
        <Text />
        <TextDemo bg="white" size="large" variant="accent" />
        <TextDemo bg="white" size="medium" variant="accent" />
        <TextDemo bg="white" size="small" variant="accent" />
        <Typography variant="accent" text="Default Text" />
        <Text />
        <TextDemo bg="white" size="large" variant="secondary" />
        <TextDemo bg="white" size="medium" variant="secondary" />
        <TextDemo bg="white" size="small" variant="secondary" />
        <Typography variant="secondary" text="Default Text" />
        <Text />
        <TextDemo bg="black" size="large" variant="primary" />
        <TextDemo bg="black" size="medium" variant="primary" />
        <TextDemo bg="black" size="small" variant="primary" />
        <View style={{ backgroundColor: 'black' }}>
          <Typography text="Default Text" variant="primary" />
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
  variant: 'primary' | 'secondary' | 'accent' | 'accentDark';
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
