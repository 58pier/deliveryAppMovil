import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
// import { ProductScreen } from '../screens/ProductScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductScreen } from '../screens/ProductScreen';

const Tab = createMaterialBottomTabNavigator();

export const Tabs =() => {
    return (
        <Tab.Navigator
            sceneAnimationEnabled= {true}
            barStyle = {{
                backgroundColor: '#F7C244'
            }}
            activeColor='#fff'
            screenOptions={ ({route}) => ({
                tabBarIcon: ({ color, focused}) => {

                    let iconName : string = '';
                    switch (route.name) {
                        case 'HomeScreen':
                            iconName='home-outline'
                            break;
                        case 'SearchScreen':
                            iconName='search-circle-outline'
                            break;
                        case 'ProfileScreen':
                            iconName='person-outline'
                            break;
                    }
                    return <Text style={{color:'white'}}><Icon name={iconName} size={23} color='white'/></Text>
                }
            })}
        >
            <Tab.Screen name="HomeScreen" options={{title:'Home'}} component={HomeScreen} />
            <Tab.Screen name="SearchScreen" options={{title:'Buscar'}} component={SearchScreen} />
            {/* <Tab.Screen name="ProductoScreen" component={ProductScreen} /> */}
            {/* <Tab.Screen name="ProfileScreen" options={{title:'Perfil'}} component={ProfileScreen} /> */}
            <Tab.Screen name="ProfileScreen" options={{title:'Perfil'}} component={ProductScreen} />
        </Tab.Navigator>
    );
}