/* This code snippet is a React component called `ProductList` that displays a list of products fetched
from an API. Here's a breakdown of what the code is doing: */
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import ProductCard from './ProductCard';
import { fetchProducts } from '../utils/api';
import SearchBar from './SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); 

  const loadProducts = async () => {
    setLoading(true);
    try {
      const newProducts = await fetchProducts(searchQuery, page);
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, [searchQuery, page]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    setProducts([]);
  };

  const handleEndReached = () => {
    loadProducts();
  };

  const handleProductPress = (productId: string | number) => {
    navigation.navigate('ProductDetails', { productId });
  };

  const renderProductItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.id)}>
      <ProductCard product={item} />
    </TouchableOpacity>
  );

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
};

export default ProductList;
