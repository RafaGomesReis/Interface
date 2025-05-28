import { View, Text, StyleSheet, FlatList } from "react-native";
export default function Screen() {

    return (
        <View style={styles.container}>
            <Text>Sobre a loja</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})