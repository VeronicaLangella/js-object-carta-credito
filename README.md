# Esercizio
Modella i dati di una carta di credito.

## Descrizione
- numero 
- scadenza 
- cvc
- intestatario 
    - nome
    - cognome
- residenza
    - citta
    - via
    - cap
- calcolo scadenza

## Codifica
``` js
const carta = {
    numero: 456896234,
    scadenza: 2027,
    cvc: 567,
    intestatario: {
        nome: "Anna",
        cognome: "Bianchi"
    },
    residenza: {
        citta: "Roma",
        via: "Via del Corso",
        cap: "00187"

    },
    getScadenza() {
        return new Date().getFullYear() - this.scadenza
    }
};
```
