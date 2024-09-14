import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function IndexStack() {
  const router = useRouter();
  return (
    <View>
      <Text>index</Text>
      <Button
        title="go to products"
        onPress={() => router.push("/stack/products")}
      />
    </View>
  );
}
