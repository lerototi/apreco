import { EvilIcons } from "@expo/vector-icons";
import { Image } from "@rneui/base";
import { View, Text, StyleSheet } from "react-native";

export function CustomHeader() {
  return (
    <View style={styles.container}>
      <View />
      <View>
        <Text style={styles.title}>Apreço</Text>
        <Image
          source={require("@/assets/images/apreco_v2_transparent.png")}
          style={{ width: 56, height: 56, marginLeft: 5 }}
        />
      </View>
      <EvilIcons name="search" size={36} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 270,
  },
  title: {
    fontSize: 24,
    paddingTop: 30,
  },
});
