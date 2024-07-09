import { Button, SafeAreaView, StyleSheet, Text } from "react-native"
// import { View } from "react-native-reanimated/lib/typescript/Animated"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import data from "../../data/data";
import RenderItem from "../../components/RenderItem";
import styles from './styles'
import CartComponent from "../../components/CartComponent";


const HomeScreen = ({ navigation } : any) => {
    const handleNavigation = () => {
        navigation.navigate('Detail');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContainer}>
                <CartComponent />
            </View>
            <View style={styles.header}>
                <Text style={styles.text}>Popular Destination</Text>
            </View>
            <View style={{marginTop : 20}}>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return <RenderItem item={item} index={index} />
                }} />
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen;

