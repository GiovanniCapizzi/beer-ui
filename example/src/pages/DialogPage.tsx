import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Dialog, RoundButton } from 'beer-ui';
import { faImage, faTags } from '@fortawesome/free-solid-svg-icons';

const mockContentText =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  spaceLeft: {
    marginLeft: 12,
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default function DialogPage() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Dialog
          show={show}
          onClose={setShow}
          header={{
            icon: faTags,
            title: 'Dialog title',
            action: (
              <RoundButton
                onPress={() => {}}
                style={styles.spaceLeft}
                variant="primary"
                size={44}
                icon={faImage}
              />
            ),
          }}
          content={<Text>{mockContentText}</Text>}
          contentMaxHeight="50%"
          footer={
            <View style={styles.rowEnd}>
              <Button
                slim
                title="Close"
                onPress={() => setShow(false)}
                variant="secondary"
              />
            </View>
          }
        />
        <Button
          title="Show Dialog"
          onPress={() => {
            setShow(!show);
          }}
          variant="primary"
        />
        <Text />
      </SafeAreaView>
    </View>
  );
}
