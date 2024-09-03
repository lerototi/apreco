import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function CustomHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>Apreço</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
    },
    icon: {
        textAlign: 'right',
        alignSelf: 'center',
    }
})