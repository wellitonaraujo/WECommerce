import { FlatList, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import products from '../../data/products'

const ProductDetails = () => {
  const product = products[0];
  const { width } = useWindowDimensions();

  return (
    <ScrollView
      //  contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={product.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.image} />
        )}
      />

      <View style={styles.container}>
        <Text style={styles.title} >{product.name}</Text>
        <Text style={styles.price}>R${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16

  },
  image: {
    width: 300,
    aspectRatio: 1
  },

  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10
  },

  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 2
  },

  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300'

  }


})