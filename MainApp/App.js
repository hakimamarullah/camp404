/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Button, Linking, StyleSheet, Text, ToastAndroid, View} from 'react-native';

const App: () => Node = () => {
  const OnClickHandler = () => {
    //Linking.openURL('https://www.youtube.com/channel/UCiSHs4TiUrreExEycQPIhZw');
    ToastAndroid.showWithGravity("Ooopss something went wrong, We'll fix it soon",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    )
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>CaptainStudio</Text>
      <Button title="Watch Now" onPress={OnClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
});

export default App;
