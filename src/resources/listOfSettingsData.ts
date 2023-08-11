import {
  circledIntercomIcon,
  settingsAboutIcon,
  settingsFaqIcon,
  settingsNotificationsIcon,
  settingsPaymentsIcon,
  settingsRateIcon,
  settingsShareIcon,
  settingsWhyTrustUsIcon,
} from './__generated__/images.gen';

export type listOfSettingsDataProps = {
  src: number;
  title: string;
};

export const listOfSettingsData: listOfSettingsDataProps[] = [
  {
    src: settingsPaymentsIcon,
    title: 'История платежей',
  },
  {
    src: settingsNotificationsIcon,
    title: 'Уведомления',
  },
  {
    src: circledIntercomIcon,
    title: 'Написать нам',
  },
  {
    src: settingsFaqIcon,
    title: 'Помощь (FAQ)',
  },
  {
    src: settingsRateIcon,
    title: 'Оценить приложение',
  },
  {
    src: settingsShareIcon,
    title: 'Поделиться с друзьями',
  },
  {
    src: settingsAboutIcon,
    title: 'О приложении',
  },
  {
    src: settingsWhyTrustUsIcon,
    title: 'Почему нам доверяют',
  },
];
