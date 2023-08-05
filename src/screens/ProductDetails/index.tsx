import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import products from '../../data/products'
import styles from './styles';

const ProductDetails = () => {
  const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("Foi cario")
  }

  return (
    <View>
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

      <Pressable style={styles.cartBTN} onPress={addToCart}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetails

