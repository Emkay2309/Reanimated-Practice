import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btn: {
        marginTop: 20
    },
    switchbtn: {
        marginBottom : 20,
        height: 40,
        width: 80,
        borderRadius: 20,
        backgroundColor: 'lightblue',
        alignSelf: 'center',
        padding: 10,
        display: 'flex',
        position: 'absolute',
        bottom: 20, // Adjust the value as needed
        right: 20,  // Adjust the value as needed
      },
      tabSwitch: {
        flex: 1, // Ensure the parent View takes up the full screen
        justifyContent: 'flex-end', // Align items to the bottom
        alignItems: 'flex-end', // Align items to the right
        padding: 10, // Add padding if needed
      },
      btnText : {
        color : 'black'
      }
});

export default styles;