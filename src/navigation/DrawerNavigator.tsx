import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import PhoneScreen from "../screens/CallScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import CartScreen from "../screens/CartScreen";


const Drawer = createDrawerNavigator();


const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeScreen} 
                options={{
                    drawerIcon: ({ focused , size }) => (
                      <Icon 
                        name="home-outline" 
                        size={focused ? size+30 : size+10} 
                        color={focused ? '#7cc' : '#ccc'} 
                      />
                    ),
                  }}
            />
            <Drawer.Screen name="Phone" component={PhoneScreen}
                options={{
                    drawerIcon : ({focused , size}) => (
                        <Icon 
                            name="call-outline" 
                            size={focused ? size+30 : size+10} 
                            color={focused ? '#7cc' : '#ccc'} 
                        />
                    )
                }}
            />

            <Drawer.Screen  name='Cart' component={CartScreen} 
                options={{
                    drawerIcon : ({focused , size}) => (
                        <Icon 
                            name="cart-outline" 
                            size={focused ? size+30 : size+10} 
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;