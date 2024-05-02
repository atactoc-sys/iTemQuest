/* This code snippet is a React component named `ProductCard`. It takes a `product` object as a prop
and renders the details of the product within a styled container. Here's a breakdown of what the
code is doing: */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.stock}>Stock: {product.stock}</Text>
      <Text style={styles.brand}>Brand: {product.brand}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stock: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  brand: {
    fontSize: 14,
  },
  category: {
    fontSize: 14,
  },
});

export default ProductCard;
