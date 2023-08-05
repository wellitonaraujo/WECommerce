/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import Produtcs from './src/screens/Products';
import ProductDetails from './src/screens/ProductDetails';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ProductDetails />
    </SafeAreaView>
  );
}

export default App;
