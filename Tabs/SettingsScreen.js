import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" />
      <View style={styles.container}>
        <Text style={styles.heading}>App Privacy Policy</Text>
        <Text style={styles.policyText}>
          Easy Recipe respects the privacy of our users. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our mobile application.We do not collect any type of
          data.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  heading: {
    marginVertical: 20,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  policyText: {
    fontSize: 20,
    lineHeight: 28,
  },
});
