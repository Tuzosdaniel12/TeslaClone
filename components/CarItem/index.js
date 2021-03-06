import React from 'react'
import { View, Text,ImageBackground } from "react-native";
import { StyledButton } from '../StyledButton';
import styles from "./styles"

export const CarItem = ( { car : { name, tagline, image, taglineCTA } } ) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.image} />

			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline}{" "}
					<Text style={styles.subtitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<StyledButton
					type="primary"
					txt="Custom Order"
					onPress={() => {
						console.warn("Custom Order was press");
					}}
				/>
				<StyledButton
					type="secondary"
					txt="Existing Inventory"
					onPress={() => {
						console.warn("Existing Inventory was press");
					}}
				/>
			</View>
		</View>
	);
};
