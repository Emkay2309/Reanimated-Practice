import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToggleButton from '../../components/Toggle/ToggleButton';
import { NavigationProp } from '@react-navigation/native';

interface SignupScreenProps {
  navigation: NavigationProp<any>;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ToggleButton navigation={navigation} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
