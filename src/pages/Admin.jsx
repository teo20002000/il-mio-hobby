import Utente from '../Components/Utente.jsx';
import Button from '../Components/Button.jsx';

const utenti = [
  "Teo",
  "Giovanni",
  "Nicola"
]

function Admin() {
      function handleClick () {
        alert("Sei un amministratore");
    }
  
 const ComponenteUtenti = utenti.map( u => <Utente nome={u} />)

  return <div className="page">
    
    Gli utenti sono 
    {ComponenteUtenti}
    <Button onClick={handleClick}>Cliccami</Button>
    </div> 
  
}

export default Admin