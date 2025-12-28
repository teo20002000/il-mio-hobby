import Titolo from './Components/Titolo.jsx';
import "./App.css"
import Utente from './Components/Utente.jsx';
import Ospite from './Components/Ospite.jsx';


function App() {
  const utente = "Teo"
  let UserComponent
  if(utente == "ospite") {
    UserComponent = <Ospite />
  }  else {
    UserComponent = <Utente nome = {utente} />
  }
  return <div className="page">
    <Titolo>Il mio Hobby</Titolo>
    {UserComponent}
    </div> 
  
}

export default App;
