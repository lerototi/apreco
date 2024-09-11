import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Stack, useNavigation, useRouter, useSegments } from "expo-router";
import { Button, Text } from "react-native";

export default function StackRoot() {
  const router = useRouter();
  const segment = useSegments();
  const nav = useNavigation<DrawerNavigationProp<{}>>();
  return (
    <Stack
      screenOptions={{
        headerBackButtonMenuEnabled: true,
        headerShown: true,
        headerLeft: ({ label }) => {
          if (!router.canGoBack() || segment.some((s) => s === ""))
            return (
              <Button onPress={() => nav.openDrawer()} title={"icon menu"} />
            );
          return (
            <Button onPress={() => router.back()} title={label ?? "back"} />
          );
        },
      }}
    />
  );
}
