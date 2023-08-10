import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Penalties} from './Penalties.screen';
import {Insurance} from './Insurance.screen';
import {Notifications} from './Notifications.screen';
import {Settings} from './Settings.screen';
import {Image} from 'react-native';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Штрафы"
        component={Penalties}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/penalties-tab-icon.png')}
              tintColor={focused ? '#0588ee' : '#bdbdbd'}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Страховка"
        component={Insurance}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/shield-tab-bar-icon.png')}
              tintColor={focused ? '#0588ee' : '#bdbdbd'}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Уведомления"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/notifications-tab-icon.png')}
              tintColor={focused ? '#0588ee' : '#bdbdbd'}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Настройки"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/settings-tab-icon.png')}
              tintColor={focused ? '#0588ee' : '#bdbdbd'}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
