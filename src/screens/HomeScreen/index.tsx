import { Button, SafeAreaView, StyleSheet, Text } from "react-native"
// import { View } from "react-native-reanimated/lib/typescript/Animated"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import data from "../../data/data";
import RenderItem from "../../components/RenderItem";



const HomeScreen = ({ navigation }: any) => {
    const handleNavigation = () => {
        navigation.navigate('Detail');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Popular Destination</Text>
            <View style={{marginTop : 20}}>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return <RenderItem item={item} index={index} />
                }} />
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen;

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
    }

})