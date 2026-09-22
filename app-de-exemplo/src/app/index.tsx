import { styles } from "@/components/themed-view";
import { Pressable, View, Text, Button, Image } from "react-native";

export default function Index() {
    return (
        <View style={styles.login}>
            <View style={ styles.imagesContainer }>
                <Image source = { require ('../../assets/images/imageStreetFighter.png') }
                style={styles.imageStreetFighter}></Image>
                <Image source = { require ('../../assets/images/backgroundImageStreetFighter.png') }
                style={styles.backgroundImageStreetFighter}></Image>
            </View>
            <View style = { styles.containerTitle }>
            <Text style = { styles.title }>Conecte-se e organize suas jogatinas</Text>
            </View>
        </View>
    )
}

