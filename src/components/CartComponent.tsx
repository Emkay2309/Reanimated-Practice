import { View,StyleSheet } from "react-native"
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'


const CartComponent = () => {
    return (
        <View style={styles.container}>  
            <FontAwesome6 name="shopping-cart" color={'lightblue'} />
        </View>
    )
}

export default CartComponent

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})