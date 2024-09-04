import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Card from "@rneui/themed/dist/Card";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFF", dark: "#1D3D47" }}
      headerHeight={150}
      headerImage={
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.categoriesContainer}>
        <Card containerStyle={styles.item}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("@/assets/images/partial-react-logo.png")}
          />
          <Card.Divider />
          <Card.Title> Produtos</Card.Title>
        </Card>
        <Card containerStyle={styles.item}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("@/assets/images/partial-react-logo.png")}
          />
          <Card.Divider />
          <Card.Title>In natura</Card.Title>
        </Card>
        <Card.Divider />
        <Card containerStyle={styles.item}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("@/assets/images/partial-react-logo.png")}
          />
          <Card.Divider />
          <Card.Title>Sementes</Card.Title>
        </Card>
        <Card containerStyle={styles.item}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("@/assets/images/partial-react-logo.png")}
          />
          <Card.Divider />
          <Card.Title>Cosméticos</Card.Title>
        </Card>
        <Card containerStyle={styles.item}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("@/assets/images/partial-react-logo.png")}
          />
          <Card.Divider />
          <Card.Title>{`Multirões \nAgroecológicos`}</Card.Title>
        </Card>
        <Card containerStyle={styles.item}>
          <Card.Image
            style={{ padding: 0 }}
            source={require("@/assets/images/partial-react-logo.png")}
          />
          <Card.Divider />
          <Card.Title>{`CSA`}</Card.Title>
        </Card>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },
  categoriesContainer: {
    marginBottom: 8,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  reactLogo: {
    height: 228,
    width: 360,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  item: {
    minWidth: 80,
    maxWidth: 110,
    flexGrow: 2,
    padding: 0,
    margin: 6,
    borderRadius: 10,
    borderWidth: 0,
  },
});
