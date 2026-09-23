import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0A1033'
},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 30
},
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 10
},
  textHeaderContainer: {

},
titleHeader: {
color: '#FFF',
alignSelf: 'center',
fontSize: 20,
fontWeight: 'bold'
},
subtitleHeader: {
color: '#FFF',
alignSelf: 'center'
},
button: {
backgroundColor: '#E51C44',
width: 40,
height: 40,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
gap: 10,
borderRadius: 10,
position: 'relative',
},
carrosselContainer: {
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
paddingHorizontal: 20,
paddingVertical: 5,
marginTop: 30,
gap: 20
},
carrosselItem: {
width: 130,
height: 150,
backgroundColor: '#1D2766',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 10,
},
titleCarrossel: {
color: '#FFF',
marginTop: 10
},
partidasAgendadasLabelContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingVertical: 20,
},
titlePartidasAgendadas: {
color: '#FFF',
fontSize: 18,
fontWeight: 'bold'
},
titleTotal6: {
color: '#ffffffbe',
},
partidasAgendadasContainer: {
flex: 1,
},
partidaItem: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#1D2766',
borderRadius: 12,
padding: 10,
gap: 12,
},
partidaImagem: {
width: 55,
height: 55,
borderRadius: 8,
},
partidaInfo: {
flex: 1,
gap: 4,
},
partidaInfoTopo: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
partidaTitulo: {
color: '#FFF',
fontSize: 15,
fontWeight: 'bold',
},
partidaModo: {
color: '#ffffffbe',
fontSize: 13,
},
partidaData: {
color: '#ffffffbe',
fontSize: 13,
},
partidaAnfitriao: {
color: '#E51C44',
fontSize: 13,
},
partidaVisitante: {
color: '#3ED17F',
fontSize: 13,
},
linhaComIcone: {
flexDirection: 'row',
alignItems: 'center',
gap: 4,
},
iconePessoa: {
width: 12,
height: 12,
},
iconeData: {
width: 12,
height: 12,
}
});