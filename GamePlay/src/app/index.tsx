import { styles } from "@/components/themed-view-index";
import { router } from "expo-router";
import { Pressable, View, Text, Image } from "react-native";

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
                <Text style = { styles.subtitle }>Crie grupos para jogar seus games favoritos com seus amigos </Text>
            </View>
            <View style = { styles.button }>
                <Image source = { require ('@/assets/images/Discord-Logo-White 1.png') }
                style = { styles.discordLogo }></Image>
                <Pressable onPress = {() => router.push("/home")}>
                <Text style = { styles.buttonText }>Entrar com Discord</Text>
                </Pressable>
            </View>
        </View>
    )
}

