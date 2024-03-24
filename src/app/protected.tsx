import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ProtectedScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Hello there</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default ProtectedScreen;
