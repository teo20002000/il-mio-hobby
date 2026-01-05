import { Container } from 'react-bootstrap';
import Titolo from './Components/Titolo.jsx';
import "./App.css"
import Guest from './pages/Guest.jsx';
import Admin from './pages/Admin.jsx';





function isOspite(utente) {
  if (!utente || utente === "ospite") {
    return true
  } 
  return false
}

function App() {
  const utente = localStorage.getItem('utente') ?? "ospite"
  const Page = isOspite(utente) ? <Guest /> : <Admin />
  return <Container>
        <Titolo>Il mio Hobby</Titolo>
        {Page}
  </Container>
}

export default App;
