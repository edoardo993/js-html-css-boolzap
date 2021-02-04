// Milestone 1      DONE
// 1 - Replica della grafica con la possibilità di avere messaggi
// scritti dall’utente (verdi) e dall’interlocutore (bianco)
// assegnando due classi CSS diverse
// 2 - Visualizzazione dinamica della lista contatti: tramite la
// direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2      DONE
// 1 - Visualizzazione dinamica dei messaggi: tramite la
// direttiva v-for, visualizzare tutti i messaggi relativi al
// contatto attivo all’interno del pannello della conversazione
// 2 - Click sul contatto mostra la conversazione del contatto
// cliccato

// Milestone 3      DONE
// 1 - Aggiunta di un messaggio: l’utente scrive un testo nella
// parte bassa e digitando “enter” il testo viene aggiunto al
// thread sopra, come messaggio verde
// 2 - Risposta dall’interlocutore: ad ogni inserimento di un
// messaggio, l’utente riceverà un “ok” come risposta,
// che apparirà dopo 1 secondo

// Milestone 4      DONE
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
// vengono visualizzati solo i contatti il cui nome contiene
// le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar”
// rimangono solo Marco e Martina)

// Milestone 5 - BONUS      ALMOST DONE
// 1 - Cancella messaggio: cliccando sul messaggio appare un menu
// a tendina che permette di cancellare il messaggio selezionato
// 2 - Visualizzazione ora e ultimo messaggio inviato/ricevuto
// nella lista dei contatti

new Vue({
    el: '#root',
    data: {

        isActive: true,
        // imposto 'vuoto' la stringa del search chat  input
        search: '',

        //imposto a false la arrow che userò per il v-show in HTML
        arrow: false,
        
        // imposto a zero l'index dell'utente
        userIDX: 0,

        // imposto 'vuoto' l'input text iniziale
        inpuText: '',

        // lista contatti con info
        contacts: [
            {
                name: 'Michele Lanzotta',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                lastSeen: '11:49',
                messages: [
                    {
                        date: '15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio Gnesi',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                lastSeen: '07:26',
                messages: [
                    {
                        date: '16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele Rossi',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                lastSeen: '19:16',
                messages: [
                    {
                        date: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa Carnesecchi',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                lastSeen: '15:58',
                messages: [
                    {
                        date: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
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

        // funzione per ottenere data dinamica
        getCurrentHour: function(){
            const data=new Date();
            let Hh=data.getHours() + ':';
            let Mm=data.getMinutes();
            const hour=Hh+Mm;
            return hour
        },

        // funzione inserimento input utente con successivo
        // setTimeout
        enterMessage: function(){
            const newText={
                date: this.getCurrentHour(),
                text: this.inpuText,
                status: 'sent'
            };
            this.contacts[this.userIDX].messages.push(newText);

            // imposto 'vuoto' ad input text per azzerare il campo
            this.inpuText='';

            // dichiaro prima del setTimeout il this come that
            // per poterlo utilizzare qua sotto (così elimino
            // l'undefined che si creerebbe)
            const that=this;

            // imposto ora il setTimeout
            setTimeout(function(){
                const botAnswer={
                    date: that.getCurrentHour(),
                    text: 'ok',
                    status: 'received'
                };
                that.contacts[that.userIDX].messages.push(botAnswer);
            }, 2000)
        },

        // funzione per ricerca utente
        searchFilter: function(){
            this.contacts.forEach((element)=>{
                if(element.name.toLowerCase().startsWith(this.search.toLocaleLowerCase())){
                    element.visible=true
                }else{
                    element.visible=false
                }
            })
        },
        deleteEvent: function(index) {
            this.contacts[this.userIDX].messages.splice(index, 1);
        }
    }
});
Vue.config.devtools=true;