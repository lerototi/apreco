import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Linking } from 'react-native';
  
  export function CustomDrawerContent() {
    return (
      <DrawerContentScrollView>
        <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      </DrawerContentScrollView>
    );
  }