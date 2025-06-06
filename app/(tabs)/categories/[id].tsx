import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
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
        router.replace('/categories/list');
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
        
            <TouchableOpacity 
                style={styles.button}
                onPress={HandleBack}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
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
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 16,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    }
})