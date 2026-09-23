import { styles } from "@/components/themed-view-agendar-servico-selecionado";
import { router } from "expo-router";
import { Pressable, View, Text, ScrollView, Image, TextInput } from "react-native";

export default function AgendarServicoSelecionado() {
return (
<View style = { styles.screen }>

{/* HEADER */}
<View style = { styles.headerContainer }>
<Pressable onPress = {() => router.back()}>
<Image source={ require ('@/assets/images/icon-voltar.png') } style = { styles.iconeVoltar }></Image>
</Pressable>
<Text style = { styles.tituloHeader }>Agendar partida</Text>
<View style = { styles.espacoVazioHeader }></View>
</View>

<ScrollView 
showsVerticalScrollIndicator={false}
contentContainerStyle={{ paddingBottom: 40 }}
>

{/* CATEGORIA */}
<Text style = { styles.labelSecao }>Categoria</Text>

<ScrollView 
horizontal 
showsHorizontalScrollIndicator={false}
style={{ flexGrow: 0 }}
contentContainerStyle={styles.categoriaContainer}
>
<View style = { styles.categoriaItem }>
<View style = { styles.bolinhaSelecionada }></View>
<Image source={ require ('@/assets/images/Icon-ranqueada.png') }></Image>
<Text style = { styles.tituloCategoria }>Ranqueada</Text>
</View>
<View style = { styles.categoriaItem }>
<Image source={ require ('@/assets/images/Icon-sword.png') }></Image>
<Text style = { styles.tituloCategoria }>Duelo 1x1</Text>
</View>
<View style = { styles.categoriaItem }>
<Image source={ require ('@/assets/images/rosto-sorrindo.png') }></Image>
<Text style = { styles.tituloCategoria }>Diversão</Text>
</View>
</ScrollView>

{/* JOGO SELECIONADO */}
<Pressable style = { styles.jogoSelecionadoContainer }>
<Image source={ require ('@/assets/images/valorant.png') } style = { styles.jogoSelecionadoImagem }></Image>

<View style = { styles.jogoSelecionadoInfo }>
<Text style = { styles.jogoSelecionadoTitulo }>Valorosos</Text>
<Text style = { styles.jogoSelecionadoSubtitulo }>Valorant</Text>
</View>

<Image source={ require ('@/assets/images/icon-seta-direita.png') } style = { styles.iconeSeta }></Image>
</Pressable>

<View style = { styles.linhaDivisoria }></View>

{/* DIA E HORARIO */}
<View style = { styles.linhaDataHora }>

<View style = { styles.blocoData }>
<Text style = { styles.labelCampo }>Dia e mês</Text>
<View style = { styles.inputsData }>
<TextInput 
style = { styles.inputPequeno } 
placeholder="DD" 
placeholderTextColor="#ffffff66"
keyboardType="numeric"
maxLength={2}
/>
<Text style = { styles.separadorData }>/</Text>
<TextInput 
style = { styles.inputPequeno } 
placeholder="MM" 
placeholderTextColor="#ffffff66"
keyboardType="numeric"
maxLength={2}
/>
</View>
</View>

<View style = { styles.blocoHorario }>
<Text style = { styles.labelCampo }>Horário</Text>
<View style = { styles.inputsData }>
<TextInput 
style = { styles.inputPequeno } 
placeholder="HH" 
placeholderTextColor="#ffffff66"
keyboardType="numeric"
maxLength={2}
/>
<Text style = { styles.separadorData }>:</Text>
<TextInput 
style = { styles.inputPequeno } 
placeholder="MM" 
placeholderTextColor="#ffffff66"
keyboardType="numeric"
maxLength={2}
/>
</View>
</View>

</View>

{/* DESCRICAO */}
<View style = { styles.descricaoLabelContainer }>
<Text style = { styles.labelCampo }>Descrição</Text>
<Text style = { styles.maxCaracteres }>Max 100 caracteres</Text>
</View>

<TextInput 
style = { styles.inputDescricao } 
placeholder="Escreva algo sobre a partida..."
placeholderTextColor="#ffffff66"
multiline
maxLength={100}
textAlignVertical="top"
/>

{/* BOTAO AGENDAR */}
<Pressable style = { styles.botaoAgendar } onPress={() => router.push("/home")}>
<Text style = { styles.textoBotaoAgendar }>Agendar</Text>
</Pressable>

</ScrollView>
</View>
    )
};