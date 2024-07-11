import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { Data } from '../data/data';
import PhoneScreen from '../screens/CallScreen';
import DrawerNavigator from './DrawerNavigator';
import CartScreen from '../screens/CartScreen';
import CartComponent from '../components/CartComponent';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

export type RootStackParamList = {
    Home : undefined,
    Detail : {item : Data},
    Phone : undefined,
    Draw : undefined,
    Cart : undefined,
    CartComp : undefined,
    Login : undefined;
    Signup : undefined
}

const AppNavigator = () => {
    const Stack = createStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator >
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false , }} />
            <Stack.Screen name='Signup' component={SignupScreen}  options={{headerShown:false , }}/>
            <Stack.Screen name='Draw' component={DrawerNavigator} options={{headerShown:false , }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false , animationEnabled : true }}  />
            <Stack.Screen name="Detail" component={DetailScreen}  options={{headerShown:false , }}  />
            <Stack.Screen name='Phone' component={PhoneScreen} />
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='CartComp' component={CartComponent} />
        </Stack.Navigator>
    )
}
export default AppNavigator