import React from 'react'
import { View, FlatList, Dimensions, StatusBar } from "react-native";
import { CarItem } from '../CarItem';

import styles from "./styles";
import cars from "./cars.js"

export const CarList = () => {

	const height =
		Platform.OS === "android"
			? Dimensions.get("screen").height - StatusBar.currentHeight
			: Dimensions.get("window").height;

    return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => <CarItem car={item} />}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				snapToAlignment={"start"}
				decelerationRate={"fast"}
				snapToInterval={height}
			/>
		</View>
	);
}
