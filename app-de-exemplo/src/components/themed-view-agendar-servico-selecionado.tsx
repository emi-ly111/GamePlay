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
    backgroundColor: '#1D2766',
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
  espacoVazioHeader: {
    width: 22, // pra centralizar o titulo, ocupando o mesmo espaço da seta
},
  labelSecao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 24,
},
  categoriaContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 14,
},
  categoriaItem: {
    width: 100,
    height: 110,
    backgroundColor: '#1D2766',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'relative',
},
  bolinhaSelecionada: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E51C44',
},
  tituloCategoria: {
    color: '#FFF',
    marginTop: 8,
    fontSize: 13,
},
  jogoSelecionadoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D2766',
    marginHorizontal: 20,
    marginTop: 16,
    padding: 10,
    borderRadius: 10,
    gap: 12,
},
  jogoSelecionadoImagem: {
    width: 55,
    height: 55,
    borderRadius: 8,
},
  jogoSelecionadoInfo: {
    flex: 1,
},
  jogoSelecionadoTitulo: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
},
  jogoSelecionadoSubtitulo: {
    color: '#ffffffbe',
    fontSize: 13,
},
  iconeSeta: {
    width: 10,
    height: 10,
},
  linhaDivisoria: {
    height: 1,
    backgroundColor: '#2A3480',
    marginTop: 20,
    marginBottom: 10,
},
  linhaDataHora: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 16,
    gap: 24,
},
  blocoData: {

},
  blocoHorario: {

},
  labelCampo: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
},
  inputsData: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
},
  inputPequeno: {
    width: 55,
    height: 45,
    backgroundColor: '#1D2766',
    borderRadius: 8,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
},
  separadorData: {
    color: '#FFF',
    fontSize: 16,
},
  descricaoLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
},
  maxCaracteres: {
    color: '#ffffffbe',
    fontSize: 12,
},
  inputDescricao: {
    backgroundColor: '#1D2766',
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 10,
    padding: 14,
    height: 90,
    color: '#FFF',
    fontSize: 14,
},
  botaoAgendar: {
    backgroundColor: '#E51C44',
    marginHorizontal: 20,
    marginTop: 30,
    height: 52,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
  textoBotaoAgendar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
}
});