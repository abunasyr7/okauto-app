import React from 'react';
import {horizontalDisclosureIcon} from '../resources/__generated__/images.gen';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  listOfSettingsData,
  listOfSettingsDataProps,
} from '../resources/listOfSettingsData';

const SettingListItem = ({data}: {data: listOfSettingsDataProps}) => (
  <View style={styles.container}>
    <Image source={data.src} tintColor={'#bdbdbd'} />
    <Text>{data.title}</Text>
    <Image source={horizontalDisclosureIcon} tintColor={'#bdbdbd'} />
  </View>
);

export const ListOfSettings = () => {
  return (
    <FlatList
      data={listOfSettingsData}
      renderItem={({item}) => <SettingListItem data={item} />}
      keyExtractor={item => item.src.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
