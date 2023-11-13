import './App.css'
import Logo from './components/Logo'


function App(){
  return(
    <div className='App'>
      <header className='App-header'>
      <Logo/>  
      <ul className='opcoes'>
        <li className='opcoes-lista'><p>CATEGORIAS</p></li>
        <li className='opcoes-lista'><p>MINHA ESTANTE</p></li>
        <li className='opcoes-lista'><p>FAVORITOS</p></li>
      </ul>
      </header>
    </div>
  )
}

export default App