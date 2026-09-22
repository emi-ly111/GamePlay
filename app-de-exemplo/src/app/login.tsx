import { Pressable, View, Text, Button, Image } from "react-native";
import { StyleSheet } from 'react-native';

export default function Index() {
    return (
        <View style={styles.login}>
            <View>
                <Image source = { require ('../assets/images/imageStreetFighter.png') }
                style={styles.imageStreetFighter}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        backgroundColor: '#0A1033',
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    imageStreetFighter: {
        width: 150,
        height: 100
    }
});