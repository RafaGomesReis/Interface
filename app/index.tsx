import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { Button } from "../components/buton";
import { router } from "expo-router";

export default function Screen() {

    const HandleStart = () => {
        router.replace('/home')    
    }
    const HandleAbout = () => {
        router.replace('/about')    
    }
    const HandleCategories = () => {
        router.replace('/categories/list')    
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/images.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <Text style={styles.title}>Interface da Loja do Maioral</Text>
            <Text style={styles.subtitle}>Aqui tem de tudo e mais um pouco</Text>
            <View style={styles.buttonContainer}>
                <Button
                style={styles.button}
                title="Entrar"
                onPress={HandleStart}
                />
                <Button
                style={styles.button}
                title="Sobre"
                onPress={HandleAbout}
                />
                                <Button
                style={styles.button}
                title="Categorias"
                onPress={HandleCategories}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    }, 
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    button: {
        marginTop: 5,
        width: 120,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    
});