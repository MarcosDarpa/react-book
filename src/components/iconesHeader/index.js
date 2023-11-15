import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";
import "./style.css";

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icones) => (
        <li className="icones-lista">
          <img src={icones} alt="icones"></img>
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
