import './App.css'
import Logo from './components/Logo'
import OpcoesHeader from './components/opcoesHeader'
import IconesHeader from './components/iconesHeader'

function App(){
  return(
    <div className='App'>
      <header className='App-header'>
      <Logo/>  
      <OpcoesHeader/>
      <IconesHeader/>
      </header>
    </div>
  )
}

export default App