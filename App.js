import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import {getAllContacts, addContact, deleteAllContact} from './realm';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title='Add' />
      </View>
      <View style={styles.button}>
        <Button
          title='Get' />
      </View>
      <View style={styles.button}>
        <Button
          title='Delete' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 20,
    width: 250
  }
});

export default App;
