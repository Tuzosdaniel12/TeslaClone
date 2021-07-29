import { StyleSheet, Dimensions, StatusBar } from "react-native";



const styles = StyleSheet.create({
	carContainer: {
		width: "100%",
		height: Platform.OS === "android"
					? Dimensions.get("screen").height - StatusBar.currentHeight
					: Dimensions.get("window").height
	},

	titles: {
		marginTop: "30%",
		width: "100%",
		alignItems: "center"
	},

	title: {
		fontSize: 40,
		fontWeight: "600",
		textAlign: "center"
	},
	subtitle: {
		fontSize: 16,
		color: "#5c5e62",
		textAlign: "center"
	},
	subtitleCTA: {
		textDecorationLine: "underline",
		color: "black"
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		position: "absolute"
	},

	buttonContainer: {
		position: "absolute",
		bottom: 50,
		width: "100%"
	}
});

export default styles