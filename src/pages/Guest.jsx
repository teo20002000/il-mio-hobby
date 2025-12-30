import Ospite from "../Components/Ospite.jsx";
import Button from "../Components/Button.jsx";

function Guest() {
      function handleClick () {
        alert(" Benvenuto STRUNZ ospite");
    }
    return <>
            <Ospite />
            Benvenuto 
            <Button callback={handleClick}>Provami</Button>
        </>
}

export default Guest;