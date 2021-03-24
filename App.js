import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
<AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  TabNavigator: {screen: TabNavigator}
}) 

const AppContainer = createAppContainer(switchNavigator);



// const Tab = createBottomTabNavigator({
//   'Write Story' : {screen: WriteStoryScreen},
//   'Read Story' : {screen: ReadStoryScreen},
// },
//   {
//     defaultNavigationOptions: ({navigation}) => ({
//       tabBarIcon:({}) => {
//       const routeName = navigation.state.routeName
//       if (routeName === 'Write Story') {
//         return(<Image style = {{width:25, height: 25}} source = {require('./assets/write.png')}/>)
//       }

//       else if (routeName === 'Read Story') {
//         return(<Image style = {{width:25, height: 25}} source = {require('./assets/read.png')}/>)
//       }
//       }
//     })
//   }  
// );

// const AppContainer = createAppContainer(Tab);
