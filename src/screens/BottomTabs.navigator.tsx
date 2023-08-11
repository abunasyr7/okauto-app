import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useMemo} from 'react';
import {Penalties} from './Penalties.screen';
import {Insurance} from './Insurance.screen';
import {Notifications} from './Notifications.screen';
import {Settings} from './Settings.screen';
import {Image} from 'react-native';
import {
  shieldTabBarIcon,
  penaltiesTabIcon,
  settingsTabIcon,
  notificationsTabIcon,
} from '../resources/images.gen';

const BottomTabs = createBottomTabNavigator();

const bottomTabData = [
  {name: 'Страховка', src: shieldTabBarIcon, component: Insurance},
  {
    name: 'Уведомления',
    src: notificationsTabIcon,
    component: Notifications,
  },
  {name: 'Настройки', src: settingsTabIcon, component: Settings},
];

export const BottomTabsNavigator: React.FC = () => {
  const headerLeftComponent = useMemo(
    () => (
      <Image
        source={require('../../assets/images/okauto-logo-icon.png')}
        style={{marginLeft: 10}}
      />
    ),
    [],
  );

  const headerRightComponent = useMemo(
    () => (
      <Image
        source={require('../../assets/images/placeholder-avatar-male.png')}
        tintColor="#0588ee"
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#a0d1fd',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}
      />
    ),
    [],
  );

  const tabIcon = (focused: boolean, src: number) => (
    <Image source={src} tintColor={focused ? '#0588ee' : '#bdbdbd'} />
  );

  const tabPenaltyIcon = (focused: boolean) => (
    <Image
      source={penaltiesTabIcon}
      tintColor={focused ? '#0588ee' : '#bdbdbd'}
    />
  );

  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Штрафы"
        component={Penalties}
        options={{
          headerLeft: () => headerLeftComponent,
          headerRight: () => headerRightComponent,
          tabBarIcon: ({focused}) => tabPenaltyIcon(focused),
          headerTitle: '',
        }}
      />
      {bottomTabData.map(tab => (
        <BottomTabs.Screen
          key={tab.src}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({focused}) => tabIcon(focused, tab.src),
            headerTitle: '',
          }}
        />
      ))}
    </BottomTabs.Navigator>
  );
};
