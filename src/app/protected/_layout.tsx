import { Slot } from 'expo-router';
import { withAuthenticator } from '@aws-amplify/ui-react-native';

const RootLayout = () => {
	return <Slot />;
};

export default withAuthenticator(RootLayout);
