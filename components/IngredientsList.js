import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function IngredientsList({title, quantity}) {
  return title == '' || title == null ? null : (
    <View style={styles.listItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#cce7eb',
    borderRadius: 10,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  quantity: {
    fontSize: 16,
    color: 'black',
  },
});
