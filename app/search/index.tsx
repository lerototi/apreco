import { EvilIcons } from "@expo/vector-icons";
import { Card, Input } from "@rneui/base";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function IndexStack() {
  const router = useRouter();
  return (
    <ScrollView>
      <Input rightIcon={<EvilIcons name="close" size={25} />} />
      <View>
        <Card>
          <TouchableOpacity onPress={() => router.push("/search/products")}>
            <Text>Produto</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
        <Card>
          <Text>Produto</Text>
        </Card>
      </View>
    </ScrollView>
  );
}
