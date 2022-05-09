import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponentFromMain = () => {
  return (
    <View>
      <Text style={styles.text}>I am a component in the new app src!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});
export default MyComponentFromMain;
