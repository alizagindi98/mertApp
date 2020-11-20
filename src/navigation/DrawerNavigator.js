import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import FormsScreen from '../screens/FormsScreen/FormsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TasksScreen from '../screens/TasksScreen/TasksScreen';
import { AntDesign } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {

    const propsvalues = props.extraData
    
  return (

    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" options={{ 
              drawerIcon: () => <AntDesign name="home" size={24} color="black" />
            }}>
            {props => <HomeScreen {...props} extraData={propsvalues} />}
          </Drawer.Screen>
        <Drawer.Screen name="User Profile" options={{ 
              drawerIcon: () => <AntDesign name="user" size={24} color="black" />
            }}>
            {props => <ProfileScreen {...props} extraData={propsvalues} />}
        </Drawer.Screen>
        <Drawer.Screen name="Forms" component={FormsScreen} />
        <Drawer.Screen name="Tasks">
            {props => <TasksScreen {...props} extraData={propsvalues} />}
        </Drawer.Screen>

    </Drawer.Navigator>
  );
}

<AntDesign name="user" size={24} color="black" />