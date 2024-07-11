import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import StyledTextInput from '../../components/Inputs/StyledTextInput';
import LargeText from '../../components/Text/LargeText';
import StyledButton from '../../components/Buttons/StyledButton';
import styles from './styles';
import { LoginScreenProps } from './types';
import SmallText from '../../components/Text/SmallText';



const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  const handleSubmit = () => {
    navigation.navigate('Home');
  }

  const handleSwitch = () => {
    navigation.navigate('Signup');
  }
  return (
    <View style={styles.container}>
      <LargeText children={'NeoSTORE'} ></LargeText>
      <StyledTextInput icon='email' label='Email' />
      <StyledTextInput icon='lock' label='Password' isPassword={true} />

      <StyledButton onPress={handleSubmit} style={styles.btn}>
        Submit
      </StyledButton>

      <View style={styles.tabSwitch}>
        <SmallText>Create account</SmallText>
        <TouchableOpacity style={styles.switchbtn} onPress={handleSwitch}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;


