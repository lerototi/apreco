import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Stack, useNavigation, useRouter, useSegments } from "expo-router";
import { Button, Text, View } from "react-native";

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
              <View style={{ padding: 10 }}>
                <Button onPress={() => nav.openDrawer()} title={"icon menu"} />
              </View>
            );
          return (
            <Button onPress={() => router.back()} title={label ?? "back"} />
          );
        },
      }}
    ></Stack>
  );
}
