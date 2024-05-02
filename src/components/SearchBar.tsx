/**
 * The `SearchBar` component is a functional component in TypeScript React that provides a search input
 * field for users to search products.
 * @param  - The code you provided is a React component called `SearchBar` that allows users to input a
 * search query and triggers a search action when the user submits the query.
 * @returns The SearchBar component is being returned. It is a functional component that renders a View
 * containing a TextInput for searching products. The TextInput component allows users to input text
 * for searching, and when the search is submitted, the `onSearch` function is called with the search
 * query as an argument. The component also uses useState to manage the searchQuery state. The styles
 * for the container and input are defined using
 */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
