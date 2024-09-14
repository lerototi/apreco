import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Linking } from "react-native";

export function CustomDrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
      {drawerProps.state.routes.map((route, index) => {
        const options = drawerProps.descriptors[route.key];
        return (
          <DrawerItem
            key={options.route.key}
            label={options.route.name}
            onPress={() => {
              console.log("chamei", options.route.name);
              drawerProps.navigation.navigate(options.route.name);
            }}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}
