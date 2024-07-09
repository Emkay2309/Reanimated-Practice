import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    text: {
        fontSize: 34,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#323232',
        marginTop : 10
    },
    header : {
        flexDirection : 'column',
        height : 50,
        marginTop : 100
    },
    cartContainer : {
        height : 100,
        position : 'absolute',
        marginLeft : '80%'
    
    }

})

export default styles
