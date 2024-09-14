import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Products() {
  const router = useRouter();
  return (
    <View>
      <Text>Produtos</Text>
      <Button title="go to home" onPress={() => router.back()} />
    </View>
  );
}
