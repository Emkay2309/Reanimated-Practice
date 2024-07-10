import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface ToggleButtonProps {
  navigation: NavigationProp<any>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ navigation }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
    navigation.navigate(toggle ? 'Login' : 'Signup');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.togglebtn} onPress={handleToggle}>
        <View style={toggle ? styles.toggleLeft : styles.toggleRight} />
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  togglebtn: {
    height: 30,
    width: 60,
    backgroundColor: 'grey',
    borderRadius: 20,
    display: 'flex',
  },
  toggleLeft: {
    backgroundColor: 'red',
    borderRadius: 100,
    height: 29,
    width: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleRight: {
    backgroundColor: 'green',
    borderRadius: 100,
    height: 29,
    width: 29,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
