console.log('Vue ok', Vue);
Vue.config.devtools = true;

/*
Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

// # creo un array Vue collegato al DOM
const root = new Vue({
    el: '#root',
    data: {
        tasks : [
            'Vedere le piramidi maya in Messico',
            'Bere caipirinha sulla spiaggia in Brasile',
            'Passare un capodanno a New York',
            'Visitare la città blu in Marocco',
            'Attraversare gli Stati Uniti sulla route 66',
            "Nuotare con i delfini nell'oceano",
            'Vedere l’aurora boreale in Islanda',
        ]
    }
});