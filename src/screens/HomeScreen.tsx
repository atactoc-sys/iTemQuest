/* This code snippet is a TypeScript React component for a HomeScreen. It imports necessary modules
such as React, View from 'react-native', Header component, and ProductList component. The HomeScreen
component is a functional component that renders a View containing a Header component and a
ProductList component. Finally, the HomeScreen component is exported as the default export. */
import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <ProductList />
    </View>
  );
};

export default HomeScreen;
