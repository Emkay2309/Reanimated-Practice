import React from 'react';
import {  View } from 'react-native';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import StyledButton from '../../components/Buttons/StyledButton';
import { styles } from './styles';
import { SignupScreenProps } from './types';



const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const handleNav = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <StyledTextInput icon='account' label='First Name' />
      <StyledTextInput icon='email' label='Last Name' />
      <StyledTextInput icon='email' label='Email' />
      <StyledTextInput icon='lock' label='Password' isPassword={true} />
      <StyledTextInput icon='lock' label='Confirm Password' isPassword={true} />
      <StyledTextInput icon='phone' label='Phone' keyboardType='numeric'/>
      <StyledButton onPress={handleNav} >Create Account</StyledButton>
    </View>
  );
};

export default SignupScreen;


