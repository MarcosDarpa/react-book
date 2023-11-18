import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";

import styled from "styled-components";
const Icone = styled.li`
  margin-right: 30px;
  width: 25px;
  `
const Icones =styled.li`
  display: flex;
  align-items: center;
  margin-left: 30px;
`

const icones = [perfil, sacola];

function iconesHeader() {
  return (
    <Icones>
      {icones.map((icones) => (
        <Icone>
          <img src={icones} alt="icones"></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default iconesHeader;
