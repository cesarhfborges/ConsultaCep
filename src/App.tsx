import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
// import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

export const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
        </Tab.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     textAlign: 'center',
//   },
//   likeButton: {
//     marginVertical: 16,
//   },
// });
