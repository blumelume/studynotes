import 'highlight.js/styles/github.css';
import hljs from 'highlight.js'

const highlightAllCodeBlocks = () => {
    document.querySelectorAll('pre > code').forEach((el) => {
        hljs.highlightElement(el)
    })
}

export { highlightAllCodeBlocks }
