/* This code snippet is a React component named `ProductDetailsScreen` that displays details of a
product. Here's a breakdown of what the code is doing: */
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchProductDetails } from '../utils/api';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productDetails = await fetchProductDetails(productId);
        setProduct(productDetails);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    getProductDetails();
  }, [productId]);

  if (!product) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Product Details</Text>
      <Text>Name: {product.name}</Text>
      <Text>Description: {product.description}</Text>
      <Text>Price: ${product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
