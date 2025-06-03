import { Pressable, View, Text, StyleSheet, Image } from "react-native"
import { Category } from "../types/category"
import { router } from "expo-router"

type Props = {
    data: Category
}

export const CategoryItem = ({data}: Props) => {
    return(
        <Pressable
            onPress={() => router.push(`/categories/${data.id}`)}
            style={styles.container}>
            <Image
                source={{ uri: data.cover}}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.bg}></View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,  
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },
    bg: {
        marginTop: -150,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#000',
        opacity: 0.4,
    },
    titleContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -150,
    },
    title: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },


})