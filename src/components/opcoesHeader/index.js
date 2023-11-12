import './style.css'

const listaHeader =['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE',] // É UMA ARRAY

function opcoesHeader() {
  return (
    <ul className="lista-header">
      {listaHeader.map((texto) => (
        <li className="lista">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}
export default opcoesHeader;
