import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0A1033'
},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 30,
},
  iconeVoltar: {
    width: 22,
    height: 22,
},
  tituloHeader: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
},
  iconeCompartilhar: {
    width: 20,
    height: 20,
},
  bannerContainer: {
    width: '100%',
    height: 220,
    position: 'relative',
},
  bannerImagem: {
    width: '100%',
    height: '100%',
},
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'rgba(10, 16, 51, 0.14)',
},
  bannerTitulo: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
},
  bannerDescricao: {
    color: '#ffffffd9',
    fontSize: 13,
    marginTop: 4,
},
  jogadoresLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
},
  titleJogadores: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
},
  titleTotal: {
    color: '#ffffffbe',
},
  jogadoresContainer: {
    paddingHorizontal: 30,
    gap: 25,
},
  jogadorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    borderBottomColor: '#43496f39',
    borderBottomWidth: 1,
    paddingBottom: 12,
},
  jogadorFoto: {
    width: 45,
    height: 45,
    borderRadius: 10,
},
  jogadorInfo: {
    gap: 4,
},
  jogadorNome: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
},
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
},
  bolinhaDisponivel: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3ED17F',
},
  bolinhaOcupado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E51C44',
},
  statusDisponivel: {
    color: '#3ED17F',
    fontSize: 13,
},
  statusOcupado: {
    color: '#E51C44',
    fontSize: 13,
},
  botaoEntrar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E51C44',
    marginHorizontal: 20,
    marginBottom: 20,
    height: 52,
    borderRadius: 10,
    gap: 15,
},
  iconeDiscord: {
},
  textoBotaoEntrar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
}
});