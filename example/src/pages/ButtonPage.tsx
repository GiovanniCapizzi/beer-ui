import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  BigButton,
  Button,
  defaultColors,
  IconButton,
  RoundButton,
} from 'beer-ui';
import {
  faArrowLeft,
  faArrowRight,
  faCheckSquare,
  faEgg,
  faEye,
  faFileCode,
  faImage,
  faPlus,
  faShare,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const dish = require('../res/budae-jigae.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    padding: 24,
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundPanel: {
    paddingVertical: 12,
    paddingLeft: 12,
    borderRadius: 4,
    backgroundColor: defaultColors.accent.light,
  },
  iconButtonBackground: {
    padding: 12,
    marginLeft: 12,
    backgroundColor: defaultColors.accent.light,
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  spaceLeft: {
    marginLeft: 24,
  },
  spaceRight: {
    marginRight: 24,
  },
});

export default function ButtonPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Button title="Primary Button" onPress={() => {}} variant="primary" />
        <Text />
        <Button
          title="Disabled Button"
          onPress={() => {}}
          disabled
          variant="primary"
        />
        <Text />
        <View style={styles.rowStart}>
          <Button
            title="Small Button"
            onPress={() => {}}
            variant="primary"
            icon={faArrowRight}
          />
        </View>
        <Text />
        <Button
          title="Secondary Button"
          onPress={() => {}}
          variant="secondary"
        />
        <Text />
        <View style={styles.rowStart}>
          <Button
            title="Small Button"
            onPress={() => {}}
            variant="secondary"
            icon={faArrowLeft}
            iconDirection="left"
          />
        </View>
        <Text />
        <View style={styles.rowStart}>
          <Button
            slim
            title="Primary slim button"
            onPress={() => {}}
            variant="primary"
            icon={faEye}
          />
        </View>
        <Text />
        <View style={styles.rowStart}>
          <Button
            slim
            title="Secondary slim button"
            onPress={() => {}}
            variant="secondary"
          />
        </View>
        <Text />
        <View style={[styles.rowStart, styles.backgroundPanel]}>
          <Button
            slim
            title="White slim button"
            onPress={() => {}}
            variant="white"
          />
        </View>
        <Text />
        <View style={styles.rowEnd}>
          <RoundButton
            onPress={() => {}}
            shadow
            style={styles.spaceRight}
            variant="primary"
            size={74}
            icon={faShare}
            title="Share"
          />
          <RoundButton
            onPress={() => {}}
            variant="primary"
            size={64}
            icon={faPlus}
          />
          <RoundButton
            onPress={() => {}}
            style={styles.spaceLeft}
            variant="primary"
            size={44}
            icon={faCheckSquare}
          />
        </View>
        <Text />
        <View style={styles.rowEnd}>
          <RoundButton
            onPress={() => {}}
            variant="secondary"
            shadow
            style={styles.spaceRight}
            size={74}
            icon={faFileCode}
            title="Create"
          />
          <RoundButton
            onPress={() => {}}
            variant="secondary"
            size={64}
            icon={faPlus}
          />
          <RoundButton
            onPress={() => {}}
            style={styles.spaceLeft}
            variant="secondary"
            size={44}
            icon={faCheckSquare}
          />
        </View>
        <Text />
        <Text />
        <View style={styles.rowStart}>
          <IconButton
            title="Profile"
            active={true}
            variant={'secondary'}
            icon={faUserCircle}
            badge={'6'}
            onPress={console.log}
          />
          <View style={[styles.iconButtonBackground]}>
            <IconButton
              title="Profile"
              active={true}
              variant={'primary'}
              icon={faUserCircle}
              badge={'6'}
              onPress={console.log}
            />
          </View>
        </View>
        <Text />
        <Text />
        <Text />
        <View style={styles.rowStart}>
          <BigButton
            style={styles.spaceRight}
            title="Big button"
            onPress={() => {}}
            icon={faEgg}
            variant="secondary"
            height={134}
            width={114}
          />
          <BigButton
            title="Big button"
            onPress={() => {}}
            icon={faEgg}
            style={styles.spaceRight}
            variant="primary"
            height={134}
            badgeNum={7}
            width={114}
          />
        </View>
        <Text />
        <Text />
        <View style={styles.rowStart}>
          <BigButton
            title="Cover"
            backgroundImage={dish}
            onPress={() => {}}
            icon={faImage}
            variant="primary"
            badgeNum={7}
            height={134}
            width={114}
          />
        </View>
        <Text />
      </ScrollView>
    </SafeAreaView>
  );
}
