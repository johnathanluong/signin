import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ProtectedScreen = () => {
	return (
		<View>
			<Text style={styles.header}>Hello there</Text>
			<Text style={styles.sub}>You should only see this only if you are authenticated.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 30
	},
	sub: {
		fontSize: 16,
		color: '#777'
	}
});

export default ProtectedScreen;
