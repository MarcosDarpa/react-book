import './App.css'
import IconesHeader from './components/iconesHeader'
import OpcoesHeader from './components/opcoesHeader'
import Logo from './components/Logo'


function App() { //DECLARANDO UMA FUNÇÃO
  return ( // CHAMANDO ESTA FUNÇÃO E CONTÉM A ESTRUTURA JSX
    <div className='App'> 
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </header>
    </div>
  );
}
export default App;
