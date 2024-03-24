import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

const ProtectedScreen = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'Signed In' }} />
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
