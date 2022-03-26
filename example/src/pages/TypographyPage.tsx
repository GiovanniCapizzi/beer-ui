import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Typography } from '@giovannicapizzi/beer-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textLight: {
    fontWeight: '300',
  },
});

export default function TypographyPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TextDemo size="large" variant="primary" />
        <TextDemo size="medium" variant="primary" />
        <TextDemo size="small" variant="primary" />
        <Typography text="Default Text" variant="primary" />
        <Text />
        <TextDemo size="large" variant="secondary" />
        <TextDemo size="medium" variant="secondary" />
        <TextDemo size="small" variant="secondary" />
        <Typography text="Default Text" variant="secondary" />
        <Text />
      </ScrollView>
    </SafeAreaView>
  );
}

const TextDemo = ({
  size,
  variant,
}: {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
}) => {
  const title = size.charAt(0).toUpperCase() + size.slice(1);
  return (
    <View>
      <Typography
        variant={variant}
        text={`${title} Text`}
        size={size}
        textStyle={styles.textBold}
      />
      <Typography variant={variant} text={`${title} Text`} size={size} />
      <Typography
        variant={variant}
        text={`${title} Text`}
        size={size}
        textStyle={styles.textLight}
      />
      <Text />
    </View>
  );
};
