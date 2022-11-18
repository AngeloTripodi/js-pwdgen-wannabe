let nome = prompt("Ciao, Inserisci il tuo Nome")
let cognome = prompt("Inserisci il tuo Cognome")
let colorePreferito = prompt("Adesso inserisci il tuo colore preferito")

let passwordSegretissima = nome + cognome + colorePreferito;

document.getElementById('password').innerHTML = ("C:\Boolean\Password_Segretissima> La tua password a prova di hacker è " + passwordSegretissima +22)