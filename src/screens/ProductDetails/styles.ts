import { StyleSheet } from "react-native";

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
  },

  cartBTN: {
    position: 'absolute',
    backgroundColor: '#000',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    bottom: 10
  },

  cartText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  }

})

export default styles;