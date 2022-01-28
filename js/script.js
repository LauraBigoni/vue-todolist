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
        newTasks: '',
        tasks: [
            { text: 'Vedere le piramidi maya in Messico', done: true },
            { text: 'Bere caipirinha sulla spiaggia in Brasile', done: false },
            { text: 'Passare un capodanno a New York', done: true },
            { text: 'Visitare la città blu in Marocco', done: false },
            { text: 'Attraversare gli Stati Uniti sulla route 66', done: true },
            { text: "Nuotare con i delfini nell'oceano", done: false },
            { text: 'Vedere l’aurora boreale in Islanda', done: false },
        ]
    },
    methods: {
        // Funzione per eliminare le task
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        // Funzione per aggiungere nuove task
        addNewTasks() {
            const newTask = this.newTasks.trim();
            if(newTask) {
                this.tasks.push({text: newTask , done: false});
            }
            this.newTasks = '';

            // Oppure uso lo spread
            // this.tasks = [...this.tasks , this.newTasks]
        },
        // Toggle checkbox to reverse true/false
        toggleTasksCheck(index) {
            const toggleTasks = this.tasks.map((task,i) => {
                if (i === index) task.done = !task.done;
            return task;
            });
            this.tasks = toggleTasks;

            // Oppure
            // this.tasks[index].done = !this.tasks[index].done;
        },
    },
});