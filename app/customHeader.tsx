import { EvilIcons } from "@expo/vector-icons";
import { Image } from "@rneui/base";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export function CustomHeader() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View />
      <View>
        {router.canGoBack() ? (
          <View />
        ) : (
          <Text style={styles.title}>Apreço</Text>
        )}
        <Image
          source={require("@/assets/images/apreco_v2_transparent.png")}
          style={{ width: 56, height: 56, marginLeft: 5 }}
        />
      </View>
      {router.canGoBack() ? (
        <View />
      ) : (
        <TouchableOpacity onPress={() => router.push("/search")}>
          <EvilIcons name="search" size={36} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 270, //TODO FIX WIDTH
  },
  title: {
    fontSize: 24,
    paddingTop: 30,
  },
});
