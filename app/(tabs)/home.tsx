import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
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
                renderItem={({item}) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={HandleBack}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
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
    buttonContainer: {
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#4dabf7',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});