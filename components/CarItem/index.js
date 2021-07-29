import React from 'react'
import { View, Text,ImageBackground } from "react-native";
import { StyledButton } from '../StyledButton';
import styles from "./styles"

export const CarItem = (props) => {
    return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/images/ModelX.jpeg")}
				style={styles.image}
			/>

			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitle}>Starting at $69,420</Text>
			</View>

			<StyledButton
				type="primary"
				txt="Custom Order"
				onPress={() => {
					console.log("Custom Order was press");
				}}
			/>
			<StyledButton
				type="secondary"
				txt="Existing Inventory"
				onPress={() => {
					console.log("Existing Inventory was press");
				}}
			/>
		</View>
	);
}
