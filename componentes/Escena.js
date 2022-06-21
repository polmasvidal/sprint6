Vue.component('escena', {
    template: 
    `
        <div>
            <ul>
                <li v-for='(frase, index) in frases'
                :key='index'
                :class='{active: index === currentSentence}'>
                    {{frase.txt}}
                </li>    
            </ul>
        </div>
    `,
    props: ['frases', 'currentSentence'],
});