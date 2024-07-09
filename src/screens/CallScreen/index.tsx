import { StyleSheet, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'


const PhoneScreen = ()=> {
    return (
        <View style={styles.container}>
            <View style={[styles.dot , styles.center]}>
                <Feather name="phone-call" size={42} color={'#FFF'} />
            </View>
        </View>
    )
}
export default PhoneScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    dot : {
        height : 100,
        width : 100,
        borderRadius : 100,
        backgroundColor : '#6E01EF',
    },
    center : {
        alignItems : 'center',
        justifyContent : 'center'
    }
})