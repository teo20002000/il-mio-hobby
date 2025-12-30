import Utente from '../Components/Utente.jsx';
import Button from '../Components/Button.jsx';

const utenti = [
  "Teo",
  "Giovanni",
  "Nicola"
]

function Admin() {
      function handleClick () {
        alert("cliSei un amministratore");
    }
  
 const componenteUtenti = utenti.map( u => <Utente nome={u} />)

  return <div className="page">
    Gli utenti sono 
    {componenteUtenti}
    <Button callback={handleClick}>Cliccami</Button>
    </div> 
  
}

export default Admin