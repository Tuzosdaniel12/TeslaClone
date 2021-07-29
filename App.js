import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CarList } from './components/CarList';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
		<View style={styles.container}>
			<CarList/>
			<StatusBar style="auto" />
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
