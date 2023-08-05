import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import products from '../../data/products';

const Produtcs = () => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
        </View>
      )}
    />
  )
}

export default Produtcs;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
  },

  itemContainer: {
    width: "50%"
  }
})