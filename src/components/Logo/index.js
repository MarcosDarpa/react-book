import logo from '../../img/logo.svg'
import './style.css'



function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img"></img>
      <p className="titulo">
      <strong>React</strong>Book
      </p>
    </div>
  );
}
export default Logo






