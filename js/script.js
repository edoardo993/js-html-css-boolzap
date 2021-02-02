// Milestone 2      DONE
// 1 - Visualizzazione dinamica dei messaggi: tramite la
// direttiva v-for, visualizzare tutti i messaggi relativi al
// contatto attivo all’interno del pannello della conversazione
// 2 - Click sul contatto mostra la conversazione del contatto
// cliccato

// Milestone 3       DONE
// 1 - Aggiunta di un messaggio: l’utente scrive un testo nella
// parte bassa e digitando “enter” il testo viene aggiunto al
// thread sopra, come messaggio verde
// 2 - Risposta dall’interlocutore: ad ogni inserimento di un
// messaggio, l’utente riceverà un “ok” come risposta,
// che apparirà dopo 1 secondo

new Vue({
    el: '#root',
    data: {
        upHere : false,
        // imposto a zero l'index dell'utente
        userIDX: 0,

        // imposto 'vuoto' l'input text iniziale
        inpuText: '',

        // lista contatti con info
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                lastSeen: '11:49',
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                lastSeen: '07:26',
                messages: [
                    {
                        date: '20/03/2020 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                lastSeen: '19:16',
                messages: [
                    {
                        date: '28/03/2020 10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                lastSeen: '15:58',
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {

        // funzione per switchare da un contatto all'altro
        switChat: function(index){
            this.userIDX=index
        },

        // funzione inserimento input utente con successivo
        // setTimeout
        enterMessage: function(){
            const date=new Date();
            const hours=date.getUTCHours();
            const minutes=date.getMinutes();
            const day=date.getUTCDay();
            const month=date.getUTCMonth();
            const year=date.getUTCFullYear();
            const newText={date: day + '/' + month + '/' + year + ' ' + hours + ':' + minutes, text: this.inpuText, status: 'sent'};
            this.contacts[this.userIDX].messages.push(newText);

            // imposto 'vuoto' ad input text per azzerare il campo
            this.inpuText='';

            // dichiaro prima del setTimeout le 'variabili del data'
            // per poterle utilizzare qua sotto (così elimino
            // l'undefined che si creerebbe)
            let contacts= this.contacts;
            let thisUserIDX=this.userIDX;

            // imposto ora il setTimeout
            setTimeout(function(){
                let botAnswer={date: day + '/' + month + '/' + year + ' ' + hours + ':' + minutes, text: 'ok', status: 'received'};
                contacts[thisUserIDX].messages.push(botAnswer);
            }, 1000)
        }
    }
});
Vue.config.devtools=true;