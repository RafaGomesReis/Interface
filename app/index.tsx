import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { Button } from "../components/buton";
import { router } from "expo-router";

export default function Screen() {

    const HandleStart = () => {
        router.replace('/home')    
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/images.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <Text style={styles.title}>Interface de Loja do Maioral</Text>
            <Text style={styles.subtitle}>Aqui tem de tudo e mais um pouco</Text>
            <Button
                title="Entrar"
                onPress={HandleStart}
            />
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
    },
    
});