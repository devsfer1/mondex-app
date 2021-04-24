import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Bem vindo a Mondéx</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DF3A40',
    color: '#ffffff',
  },

  textStyle: {
    color: '#ffffff',
    fontSize: 32,
  },
});

export default HomeScreen;
