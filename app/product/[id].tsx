import { router, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { getProductsById } from "../../services/product";

export default function Screen() {
    const  {id} = useLocalSearchParams();

    const idProduct = getProductsById(parseInt(id as string));
    if(!idProduct) return router.back();

    const HandleBuyButton = () => {
        alert('VOCÊ ACABOU DE COMPRAR O PRODUTO: ' + idProduct.title)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: "" }} />
            <ScrollView style={styles.area}>
                <Image
                    style={styles.image}
                    source={{uri: idProduct.image}}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{idProduct.title}</Text>
                <Text style={styles.description}>{idProduct.description}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>R$ {idProduct.price.toFixed(2)}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={HandleBuyButton}
                >
                    <Text style={styles.buttonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    area: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666666',
    },
    priceContainer: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    buttonContainer: {
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
    },
    button: {
        backgroundColor: '#2ecc71',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});