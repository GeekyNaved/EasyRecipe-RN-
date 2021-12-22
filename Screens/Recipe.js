import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function Recipe({route}) {
  const dish = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>{dish.strInstructions}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  instructionContainer: {
    padding: 20,
  },
  instructionText: {
    fontSize: 21,
  },
});
