import './styles.css'
import Logo from '../Logo'
import OpcoesHeader from '../opcoesHeader'
import IconesHeader from '../iconesHeader'

function Header() {
  return (
    <header className="App-header">

      <Logo />
      <OpcoesHeader />
      <IconesHeader />

    </header>
  );
}
export default Header