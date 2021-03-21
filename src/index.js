import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.js';
import speakerView from 'reveal.js/plugin/notes/notes.js';

let deck = new Reveal({
    hash: true,
    plugins: [Markdown, Highlight, speakerView]
})

deck.initialize();