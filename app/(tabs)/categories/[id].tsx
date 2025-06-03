import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { getCategoriesById } from "../../../services/category";
import { ProductItem } from "../../../components/products-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getProductsByCategory } from "../../../services/product";
export default function Screen() {
    const { id } = useLocalSearchParams();

    const idCategory = parseInt(id as string);

    const category = getCategoriesById(idCategory);
    if(!category) return router.back();

    const products = getProductsByCategory(idCategory);

    const HandleBack = () => {
        router.replace('/');
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: category.title}}/>
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