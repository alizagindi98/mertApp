// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import FormsScreen from '../screens/FormsScreen/FormsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TasksScreen from '../screens/TasksScreen/TasksScreen';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import UploadScreen from '../screens/UploadScreen/UploadScreen';
import { AntDesign } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {

  const propsvalues = props.extraData
    
  return (

    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Profile" options={{ 
              tabBarIcon: () => <AntDesign name="user" size={24} color="black" />
            }}>
            {props => <ProfileScreen {...props} extraData={propsvalues} />}
        </Tab.Screen>
        <Tab.Screen name="Forms" component={FormsScreen} options={{ 
              tabBarIcon: () => <AntDesign name="form" size={24} color="black" />
            }}/>
        <Tab.Screen name="Home" options={{ 
              tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
            }}>
            {props => <HomeScreen {...props} extraData={propsvalues} />}
        </Tab.Screen>
        <Tab.Screen name="Tasks" options={{ 
              tabBarIcon: () => <AntDesign name="bars" size={24} color="black" />
            }}>
            {props => <TasksScreen {...props} extraData={propsvalues} />}
        </Tab.Screen>
        <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ 
              tabBarIcon: () => <AntDesign name="calendar" size={24} color="black" />
            }}/>

    </Tab.Navigator>
  );
}


        // <Tab.Screen name="Upload" options={{ 
        //       tabBarIcon: () => <AntDesign name="upload" size={24} color="black" />
        //     }}>
        //     {props => <UploadScreen {...props} extraData={propsvalues} />}
        // </Tab.Screen>