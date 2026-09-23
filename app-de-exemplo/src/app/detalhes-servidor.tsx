import { styles } from "@/components/themed-view-detalhes";
import { router } from "expo-router";
import { Pressable, View, Text, ScrollView, Image } from "react-native";

export default function DetalhesServidor() {
return (
<View style = { styles.screen }>

{/* HEADER */}
<View style = { styles.headerContainer }>
<Pressable onPress = {() => router.back()} hitSlop={10}>
<Image source={ require ('@/assets/images/icon-voltar.png') } style = { styles.iconeVoltar }></Image>
</Pressable>
<Text style = { styles.tituloHeader }>Detalhes</Text>
<Pressable onPress = {() => {}} hitSlop={10}>
<Image source={ require ('@/assets/images/icon-compartilhar.png') } style = { styles.iconeCompartilhar }></Image>
</Pressable>
</View>

<ScrollView 
showsVerticalScrollIndicator={false}
contentContainerStyle={{ paddingBottom: 40 }}
>

{/* BANNER DO JOGO */}
<View style = { styles.bannerContainer }>
<Image source={ require ('@/assets/images/lol-banner.png') } style = { styles.bannerImagem }></Image>

<View style = { styles.bannerOverlay }>
<Text style = { styles.bannerTitulo }>Lendários</Text>
<Text style = { styles.bannerDescricao }>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
</View>
</View>

{/* JOGADORES */}
<View style = { styles.jogadoresLabelContainer }>
<Text style = { styles.titleJogadores }>Jogadores</Text>
<Text style = { styles.titleTotal }>Total 3</Text>
</View>

<View style = { styles.jogadoresContainer }>

<View style = { styles.jogadorItem }>
<Image source={ require ('@/assets/images/jogador-tiago.png') } style = { styles.jogadorFoto }></Image>
<View style = { styles.jogadorInfo }>
<Text style = { styles.jogadorNome }>Tiago Luchtenberg</Text>
<View style = { styles.statusContainer }>
<View style = { styles.bolinhaDisponivel }></View>
<Text style = { styles.statusDisponivel }>Disponível</Text>
</View>
</View>
</View>

<View style = { styles.jogadorItem }>
<Image source={ require ('@/assets/images/jogador-rodrigo.png') } style = { styles.jogadorFoto }></Image>
<View style = { styles.jogadorInfo }>
<Text style = { styles.jogadorNome }>Rodrigo Gonçalves</Text>
<View style = { styles.statusContainer }>
<View style = { styles.bolinhaOcupado }></View>
<Text style = { styles.statusOcupado }>Ocupado</Text>
</View>
</View>
</View>

<View style = { styles.jogadorItem }>
<Image source={ require ('@/assets/images/jogador-diego.png') } style = { styles.jogadorFoto }></Image>
<View style = { styles.jogadorInfo }>
<Text style = { styles.jogadorNome }>Diego Fernandes</Text>
<View style = { styles.statusContainer }>
<View style = { styles.bolinhaOcupado }></View>
<Text style = { styles.statusOcupado }>Ocupado</Text>
</View>
</View>
</View>

</View>

</ScrollView>

{/* BOTAO ENTRAR NA PARTIDA */}
<Pressable style = { styles.botaoEntrar } onPress={() => {}}>
<Image source={ require ('@/assets/images/Discord-Logo-White 1.png') } style = { styles.iconeDiscord }></Image>
<Text style = { styles.textoBotaoEntrar }>Entrar na partida</Text>
</Pressable>

</View>
    )
};