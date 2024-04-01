import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    marginRight: 32
  },
  stretch: {
    width: '80%',
    height: 40,
    resizeMode: 'stretch',
  },
});

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../assets/logo.png')}
      />
    </View>
  );
};

export default Logo;