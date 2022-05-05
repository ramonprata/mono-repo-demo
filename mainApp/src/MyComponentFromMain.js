import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponentFromMain = () => {
  return (
    <View>
      <Text style={styles.text}>And I came from UK app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default MyComponentFromMain;
