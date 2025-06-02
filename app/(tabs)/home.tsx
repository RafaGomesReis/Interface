import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { getProducts } from "../../services/product";
import { ProductItem } from "../../components/products-item";
import { router } from "expo-router";
export default function Screen() {

    const products = getProducts();

    const HandleBack = () => {
        router.replace('/');
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) => < ProductItem data={item} /> }
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        
        <Button
                    title="Voltar"
                    onPress={HandleBack}
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