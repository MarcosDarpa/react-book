import youtube from "../../img/youtube-logo-svgrepo-com.svg";
import sacola from "../../img/sacola.svg";
import "./style.css";

const icones = [youtube, sacola];

function iconesHeader() {
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
function Youtube(){
  return(
    <a href="https://www.youtube.com/@IgrejaBatistaRedencao">
      <Youtube icon={youtube}/>
  )
}
export default iconesHeader;
