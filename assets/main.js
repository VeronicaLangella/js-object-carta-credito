console.log("script carciato");

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