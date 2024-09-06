import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { RouteParams, Routes, useRouter } from "expo-router";
import { Linking, Text } from "react-native";

export function CustomDrawerContent(drawerProps: DrawerContentComponentProps) {
  const router = useRouter();

  const toHref = <TPath extends Routes>(
    pathname: TPath,
    params?: RouteParams<TPath>
  ) => ({
    pathname,
    params,
  });

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
              router.push(toHref(options.route.name as Routes));
            }}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}
