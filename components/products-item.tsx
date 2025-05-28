import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { Product } from "../types/product"
import { Link } from "expo-router"

type Props = {
    data: Product;
}

export const ProductItem = ({data}: Props) => {
    return (
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image 
                    style={styles.img}
                    source={{uri: data.image}}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>R$ {data.price.toFixed(2)} </Text>
                </View>
            </Pressable>
        </Link>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 15,
        
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#ccc',
        marginRight: 10
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {  
        fontSize: 14,
        color: '#555'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right'
    }
})