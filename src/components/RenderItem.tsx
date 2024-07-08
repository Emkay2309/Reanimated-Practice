import { Text, View, Pressable, StyleSheet } from "react-native"
import { Data } from "../data/data"
import Animated, { FadeInDown } from "react-native-reanimated"
import {useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types"
import { RootStackParamList } from "../navigation/AppNavigator"

interface props {
    item: Data,
    index: number
}


const RenderItem = ({ item, index }: props) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleNavigate = () => {
        navigation.navigate('Detail' , {item : item});
    }   

    return (
        <Animated.View entering={FadeInDown.delay(200 * index)}>

            <Pressable style={styles.container} onPress={handleNavigate}>
                <Animated.Image sharedTransitionTag={item.name} source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={{ fontSize: 24, fontWeight: 'semibold', color: '#323232' }}>{item.name}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'semibold', color: '#323232' }}>{item.location}</Text>
                </View>
            </Pressable>

        </Animated.View>
    )
}
export default RenderItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        flexShrink: 1,
    }
})