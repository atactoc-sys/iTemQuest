/**
 * The `Header` component in this TypeScript React code renders a header with a logo and the text
 * "iTemQuest".
 * @returns The `Header` component is being returned, which consists of a `View` containing an `Image`
 * component displaying a logo and a `Text` component displaying the text "iTemQuest".
 */
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.appName}>iTemQuest</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  logo: {
    width: 50,
    height: 50,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
