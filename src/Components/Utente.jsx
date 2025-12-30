function Utente({nome, isUtente =false}) {
  if(isUtente) {
  return  <h2>Benvenuto {(nome ==='Teo') ? 'TEO' : nome}</h2>
  }
  return <p style={{color:"lightcoral", fontSize:"20px"}}>{nome}</p>
}

export default Utente;