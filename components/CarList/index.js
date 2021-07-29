import React from 'react'
import { View, FlatList, Dimensions } from "react-native";
import { CarItem } from '../CarItem';

import styles from "./styles";
import cars from "./cars.js"

export const CarList = () => {
    return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => <CarItem car={item} />}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				snapToAlignment={"start"}
				decelerationRate={"fast"}
				snapToInterval={Dimensions.get("screen").height}
			/>
		</View>
	);
}
