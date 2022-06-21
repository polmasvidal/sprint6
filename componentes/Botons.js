Vue.component('botons', {
    template:
    `
    <div id=botons-flexbox>
        <button type="button" @click="$emit('previousSentence')">Anterior</button>
        <button type="button" @click="$emit('nextSentence')">Següent</button>
    </div>
    `
});