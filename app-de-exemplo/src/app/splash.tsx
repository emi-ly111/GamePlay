import { View, Image, Pressable } from "react-native";
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function Splash() {
  const router = useRouter();

  return (
      <Pressable style={styles.fullscreenContainer} onPress={() => router.push('/login')}>
        <Image source= { require('../assets/images/imageGamePlay.png')} style={styles.imageGamePlay}></Image>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  splash: { 
    backgroundColor: "#0A1033",
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
   imageGamePlay: {
    width: 150,
    height: 100
   },
   fullscreenContainer: {
    flex: 1,
    backgroundColor: '#0A1033'
   }
});