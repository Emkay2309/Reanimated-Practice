import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { Data } from '../data/data';
import PhoneScreen from '../screens/CallScreen';

export type RootStackParamList = {
    Home : undefined,
    Detail : {item : Data},
    Phone : undefined
}

const AppNavigator = () => {
    const Stack = createStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false , animationEnabled : true }}  />
            <Stack.Screen name="Detail" component={DetailScreen}  options={{headerShown:false , }}  />
            <Stack.Screen name='Phone' component={PhoneScreen} />
        </Stack.Navigator>
    )
}
export default AppNavigator