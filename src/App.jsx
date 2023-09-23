import './App.css';
import Collection from './components/collection';

const App = () => {

  return (
    <div className="App">
      <div className='header'><h1>Kawaii</h1></div>
      <Collection />
      <div><p className='footerText'>Cuteness Guaraanteed.</p></div>
    </div>
  )
}

export default App