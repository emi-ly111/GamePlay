import { styles } from "@/components/themed-view-home";
import { router } from "expo-router";
import { Pressable, View, Text, ScrollView, Image } from "react-native";

export default function Index() {
return (
<View style = { styles.screen }>
{/* HEADER */}
<View style = { styles.headerContainer }>
<Image source = { require ('@/assets/images/profile-pic.png') }style = { styles.profilePhoto }></Image>

<View style = { styles.textHeaderContainer }>
<Text style = {styles.titleHeader }>Olá, Tiago</Text>
<Text style = {styles.subtitleHeader } >Hoje é dia de vitória</Text>
</View>

<View style = { styles.button }>
<Pressable onPress = {() => router.push("/agendar-servico-selecionado")}>
<Image source={ require ('@/assets/images/Frame.png') }></Image>
</Pressable>
</View>
</View>

{/* CARROSSEL  */}

<ScrollView 
horizontal 
showsHorizontalScrollIndicator={false}
style={{ flexGrow: 0 }}
contentContainerStyle={styles.carrosselContainer}
>
<View style = { styles.carrosselItem }>
    <Pressable onPress = {() => router.push("/agendar-servico-selecionado")}>
    <Image source={ require ('@/assets/images/Icon-ranqueada.png') }></Image>
    </Pressable>
    <Text style = { styles.titleCarrossel }>Ranqueada</Text>
</View>
<View style = { styles.carrosselItem }>
    <Pressable onPress = {() => router.push("/agendar-servico-selecionado")}>
    <Image source={ require ('@/assets/images/Icon-sword.png') }></Image>
    </Pressable>
    <Text style = { styles.titleCarrossel }>Duelo 1x1</Text>
</View>
<View style = { styles.carrosselItem }>
    <Image source={ require ('@/assets/images/rosto-sorrindo.png') }></Image>
    <Text style = { styles.titleCarrossel }>Diversão</Text>
</View>
</ScrollView>

{/* PARTIDAS AGENDADAS */}

<View style = { styles.partidasAgendadasLabelContainer }>
<Text style = { styles.titlePartidasAgendadas }>Partidas Agendadas</Text>
<Text style = { styles.titleTotal6 }>Total 6</Text>
</View>

<ScrollView 
style = { styles.partidasAgendadasContainer }
showsVerticalScrollIndicator={false}
contentContainerStyle={{ gap: 16, paddingHorizontal: 20, paddingBottom: 20 }}
>

<Pressable style = { styles.partidaItem } onPress={() => router.push("/detalhes-servidor")}>
<Image source={ require ('@/assets/images/lol.png') } style = { styles.partidaImagem }></Image>

<View style = { styles.partidaInfo }>
<View style = { styles.partidaInfoTopo }>
<Text style = { styles.partidaTitulo }>Lendários</Text>
<Text style = { styles.partidaModo }>Ranqueada</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-calendario.png') } style = { styles.iconeData }></Image>
<Text style = { styles.partidaData }>18/06 às 21:00h</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-person-vermelho.png') } style = { styles.iconePessoa }></Image>
<Text style = { styles.partidaAnfitriao }>Anfitrião</Text>
</View>
</View>
</Pressable>

<Pressable style = { styles.partidaItem } onPress={() => router.push("/detalhes-servidor")}>
<Image source={ require ('@/assets/images/red-dead-redemption.png') } style = { styles.partidaImagem }></Image>

<View style = { styles.partidaInfo }>
<View style = { styles.partidaInfoTopo }>
<Text style = { styles.partidaTitulo }>Yeah, boy</Text>
<Text style = { styles.partidaModo }>Diversão</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-calendario.png') } style = { styles.iconeData }></Image>
<Text style = { styles.partidaData }>23/06 às 19:00h</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-person-verde.png') } style = { styles.iconePessoa }></Image>
<Text style = { styles.partidaVisitante }>Visitante</Text>
</View>
</View>
</Pressable>

<Pressable style = { styles.partidaItem } onPress={() => router.push("/detalhes-servidor")}>
<Image source={ require ('@/assets/images/cs.png') } style = { styles.partidaImagem }></Image>

<View style = { styles.partidaInfo }>
<View style = { styles.partidaInfoTopo }>
<Text style = { styles.partidaTitulo }>Rumo ao topo</Text>
<Text style = { styles.partidaModo }>1x1</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-calendario.png') } style = { styles.iconeData }></Image>
<Text style = { styles.partidaData }>20/06 às 09:00h</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-person-vermelho.png') } style = { styles.iconePessoa }></Image>
<Text style = { styles.partidaAnfitriao }>Anfitrião</Text>
</View>
</View>
</Pressable>

<Pressable style = { styles.partidaItem } onPress={() => router.push("/detalhes-servidor")}>
<Image source={ require ('@/assets/images/apex.png') } style = { styles.partidaImagem }></Image>

<View style = { styles.partidaInfo }>
<View style = { styles.partidaInfoTopo }>
<Text style = { styles.partidaTitulo }>Bora queimar tudo</Text>
<Text style = { styles.partidaModo }>Ranqueada</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-calendario.png') } style = { styles.iconeData }></Image>
<Text style = { styles.partidaData }>20/06 às 14:20h</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-person-vermelho.png') } style = { styles.iconePessoa }></Image>
<Text style = { styles.partidaAnfitriao }>Anfitrião</Text>
</View>
</View>
</Pressable>

<Pressable style = { styles.partidaItem } onPress={() => router.push("/detalhes-servidor")}>
<Image source={ require ('@/assets/images/valorant.png') } style = { styles.partidaImagem }></Image>

<View style = { styles.partidaInfo }>
<View style = { styles.partidaInfoTopo }>
<Text style = { styles.partidaTitulo }>Valorosos</Text>
<Text style = { styles.partidaModo }>Diversão</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-calendario.png') } style = { styles.iconeData }></Image>
<Text style = { styles.partidaData }>18/06 às 21:00h</Text>
</View>
<View style = { styles.linhaComIcone }>
<Image source={ require ('@/assets/images/icon-person-vermelho.png') } style = { styles.iconePessoa }></Image>
<Text style = { styles.partidaAnfitriao }>Anfitrião</Text>
</View>
</View>
</Pressable>

</ScrollView>
</View>
    )
};