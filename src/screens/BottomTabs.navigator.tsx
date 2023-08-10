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
              source={
                focused
                  ? require('../../assets/images/penalties-tab-icon-active.png')
                  : require('../../assets/images/penalties-tab-icon.png')
              }
            />
          ),
        }}
      />
      <BottomTabs.Screen name="Страховка" component={Insurance} />
      <BottomTabs.Screen name="Уведомления" component={Notifications} />
      <BottomTabs.Screen name="Настройки" component={Settings} />
    </BottomTabs.Navigator>
  );
};
