import styled from "styled-components";
const OpcoesHeader = styled.ul`
    display: flex;
    margin: right: 100px;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    // justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    
  
`

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]; // É UMA ARRAY

function opcoesHeader() {
  return (
    <OpcoesHeader>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </OpcoesHeader>
  );
}
export default opcoesHeader;
