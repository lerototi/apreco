import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { CustomDrawerContent } from "./customDrawerContent";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerLeftLabelVisible: false,
            headerShown: false,
            headerStyle: { height: 120 },
            drawerIcon: () => null,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="search"
          options={{
            drawerLabel: "Stack",
            title: "overview",
            headerShown: false,
          }}
        />
        <Drawer.Screen name="shop" />
        <Drawer.Screen name="settings" />
        <Drawer.Screen name="+not-found" />
      </Drawer>
    </ThemeProvider>
  );
}
