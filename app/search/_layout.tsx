import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Input } from "@rneui/base";
import { Stack, useNavigation, useRouter, useSegments } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CustomHeader } from "../customHeader";

export default function StackRoot() {
  const router = useRouter();
  const segment = useSegments();
  const nav = useNavigation<DrawerNavigationProp<{}>>();
  return (
    <Stack
      screenOptions={{
        headerBackButtonMenuEnabled: false,
        headerBackVisible: false,
        headerShown: true,
        headerTitle: () => {
          return <CustomHeader />;
        },
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name={"arrow-back"} size={28} color="red" />
            </TouchableOpacity>
          );
        },
      }}
    ></Stack>
  );
}
