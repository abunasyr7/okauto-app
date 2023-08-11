import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListOfSettings} from '../components/ListOfSettings';

export const Notifications: React.FC = () => {
  return (
    <View style={styles.container}>
      <ListOfSettings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
