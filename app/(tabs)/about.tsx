import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';

export default function Screen() {
    const HandleBack = () => {
        router.replace('/');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Sobre mim</Text>
                <View style={styles.screen}>
                    <Text style={styles.contato}>Chegue até mim!</Text>
                    <View style={styles.infoContainer}>
                        <View style={styles.linksContainer}>
                            <Link href={'https://github.com/RafaGomesReis'} style={styles.info}>Github</Link>
                            <Link href={'https://www.instagram.com/rfl_reiss/#'} style={styles.info}>@rfl_reiss</Link>
                        </View>
                        <Image
                            source={{ uri: 'https://github.com/RafaGomesReis.png' }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Rafael Reis</Text>
                    </View>
                    <Image
                        source={require('../../assets/rafael.jpg')}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.text}>   Olá, tudo bem? Seja bem vindo ao meu primeiro projeto com React Native.   Sempre fui fascinado por tecnologia e em como pode melhorar a vida das pessoas. Gosto de resolver problemas através da tecnologia. Foi aí que decidi estudar todo esse mundo Tech e aqui estou aprendendo a criar Aplicativos!</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={HandleBack}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'center',
    },
    screen: {
        paddingLeft: 10,
        paddingRight: 15,
        justifyContent: 'space-around',
        alignItems: "flex-start",
        marginTop: 10
    },
    nameContainer: {
        padding: 10,
        borderRadius: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    linksContainer: {
        flexDirection: 'column',
        gap: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        paddingRight: 10,
        textAlign: 'center'
    },
    text: {
        marginTop: 5,
        paddingRight: 10,
        fontSize: 16,
        textAlign: 'justify'
    },

    contato: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        width: '100%',
        alignSelf: 'center'
    },

    info: {
        marginTop: 0,
        fontSize: 20,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
        color: "white",
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },
    button: {
        backgroundColor: '#ff6b6b',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});