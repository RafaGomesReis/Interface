import { View, Text, StyleSheet, FlatList } from "react-native";
import { getProducts } from "../../services/product";
import { ProductItem } from "../../components/products-item";
export default function Screen() {

    const products = getProducts();

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) => < ProductItem data={item} /> }
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    }
})