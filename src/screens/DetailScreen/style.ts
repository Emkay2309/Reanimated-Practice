import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textContainer: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      bottom: 10,
      left: 10,
      right: 10,
      padding: 16,
      borderRadius: 30,
    },
    textName: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
    },
    textLocation: {
      color: 'white',
      fontSize: 16,
    },
    textAbout: {
      color: '#323232',
      fontSize: 28,
      fontWeight: 'bold',
      margin: 10,
    },
    text: {
      color: '#323232',
      fontSize: 16,
      marginHorizontal: 10,
      textAlign: 'justify',
    },
});

export default styles