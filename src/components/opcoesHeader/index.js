import "./style.css";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]; // É UMA ARRAY

function opcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}
export default opcoesHeader;
