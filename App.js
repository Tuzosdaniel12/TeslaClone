import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { CarItem } from './components/CarItem';

export default function App() {
  return (
		<View style={styles.container}>
      <CarItem 
        name={"Modal 3"}
        tagLine={"Order Online For"}
        tagLineCTA={"Touchless Delivery"} 
        image={require("./assets/images/Model3.jpeg")}  
      />
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
