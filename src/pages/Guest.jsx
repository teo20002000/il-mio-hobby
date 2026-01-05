import { useState } from "react";
import Ospite from "../Components/Ospite.jsx";
import Button from "../Components/Button.jsx";
import Benvenuto from "../Components/Benvenuto.jsx";

function Guest() {
    const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(false)
    const [nomeUtente, setNomeUtente] = useState("")

      function handleClick () {
        alert(" Benvenuto STRUNZ ospite");
    }

    function handleAggiungi() {
      setCount(count + 1)
    }

    function handleTogli() {
      setCount(count - 1)
    }

    function habdleVisible(){
      setVisible(!visible)
    }

    function handleNomeUtente(event) {
      setNomeUtente(event.target.value)
    }

    return <>
            <Ospite />
            <Benvenuto> {nomeUtente} </Benvenuto> <br />
            Hai cliccato {count} volte <br />
            Inserisci nome utente :<input type="text" onChange={handleNomeUtente} id="nomeUtente" /> <br />
            
            <Button onClick={handleClick}>Provami</Button>
            <button onClick={handleAggiungi}>Clicca per aggiungere</button>
            <button onClick={handleTogli}>Clicca per togliere</button>
            <Button onClick={habdleVisible}>Visualizza/Nascondi</Button>
            {visible && <p>Mi puoi vedere</p>}
        </>
}

export default Guest;