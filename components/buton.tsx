import { Pressable, View, Text, StyleSheet } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    style?: any;
}


export const Button = ({ title, onPress, style }: Props) =>{
    return (
        <Pressable onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})  