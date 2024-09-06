import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useDrawerStatus } from "@react-navigation/drawer";
import {
  useNavigationState,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { Image } from "@rneui/base";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function CustomHeader() {
  const isDrawerOpen = useDrawerStatus() === "open";

  const navigationState = useNavigationState((state) => ({
    index: state.index,
    key: state.key,
  }));
  const isRootRoute = navigationState.index === 0;
  const navigation = useNavigation();

  const handleIconPress = () => {
    if (isRootRoute) {
      console.log("open drawer");
      console.log(isRootRoute);
      navigation.dispatch(DrawerActions.openDrawer());
    } else {
      console.log("goBack");
      console.log(isRootRoute);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleIconPress}>
        <Ionicons
          name={isRootRoute ? "menu" : "arrow-back"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
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
