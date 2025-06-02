import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Link, router } from 'expo-router';

export default function Screen(){
    const HandleBack = () => {
        router.replace('/');
    }
    return(
        <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>Sobre mim</Text>
            <View style={styles.screen}>
                <View>
                    <Text style={styles.contato}>Chegue até mim!</Text>
                    <Link href={'https://github.com/RafaGomesReis'} style={styles.info}>Github</Link>
                    <Link href={'https://www.instagram.com/rfl_reiss/#'} style={styles.info}>@rfl_reiss</Link>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTitle}>Meu nome é:</Text>
                    <Text style={styles.name}>Rafael Reis</Text>
                </View>
                <View>
                    <Text style={styles.text}>   Olá, tudo bem? Seja bem vindo ao meu primeiro projeto com React Native.   Sempre fui fascinado por tecnologia e em como pode melhorar a vida das pessoas. Gosto de resolver problemas através da tecnologia. Foi aí que decidi estudar todo esse mundo Tech e aqui estou aprendendo a criar Aplicativos!</Text>
                </View>
                <Button
                    title="Voltar"
                    onPress={HandleBack}
            />
            </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        marginTop:10,
        fontSize:22,
        fontWeight: "bold",
        textAlign: 'center',
    },
    screen:{
        paddingLeft:10,
        paddingRight: 15,
        justifyContent:'space-around',
        alignItems:"flex-start",
        marginTop:10
    },
    nameContainer:{
        padding: 10,
        borderRadius: 10,
    },
    nameTitle:{
        fontSize:20,
        marginTop: 10,
        paddingRight:10,
        textAlign: 'center'
    },
    name:{
        fontSize:20,
        fontWeight: "bold",
        marginTop: 10,
        paddingRight:10,
        textAlign: 'center'
    },
    text:{
        marginTop: 5,
        paddingRight:10,
        fontSize:16,
        textAlign: 'justify'
    },

    contato:{
        marginTop: 20,
        fontSize:24,
        fontWeight: "bold"
    },

    info:{
        marginTop: 10,
        fontSize:20,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
        color: "white"
    },
});