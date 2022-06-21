Vue.component('home', {
    template: 
    `
        <div>
            <div v-if='!showContent' id='inici'>
                <h1>Benvingut/da al Tutorial!</h1>
                <h2>Aquí podràs trobar tots els consells necessaris per tenir una adaptació idònia a l'empresa!</h2>
                <button type='button' id=boto-inici @click='start'>Començar</button>
            </div>
            <div v-else id='tutorial'>
            <botons @nextSentence = 'nextSentence' @previousSentence = 'previousSentence'></botons>
            <escena :frases = 'arrayFrases' :currentSentence = 'currentSentence'></escena>
            </div>
        </div>
    `,
    data(){
        return{
            arrayFrases: [
            {txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.", 
            img: '1.jpg'},
            {txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
            img: '2,jpg'},
            {txt: "L'heroi va decidir travessar la porta que el portava a casa.",
            img: '3.jpg'},
            {txt: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció...",
            img: '4.jpg'}
            ],
            currentSentence: 0,
            showContent: false,
        };
    },
    methods: {
        nextSentence() {
            if (this.currentSentence < this.arrayFrases.length - 1) {
                this.currentSentence++;
            }
        },
        previousSentence() {
            if (this.currentSentence > 0) {
                this.currentSentence--;
            }
        },
        start() {
            this.showContent = !this.showContent;
        }
    }
});