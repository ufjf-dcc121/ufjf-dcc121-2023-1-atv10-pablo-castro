import store, {adicionar, GetItems} from "./store.js"
const form = document.forms.entrada;
        form.addEventListener('submit', envia)
        form.remover.addEventListener('click',remove)

        
        atualizar()

        function remove() {
            console.log('Remove clickado')
        }
        function envia (evento) {
            evento.preventDefault()
            console.log('Formilário enviado!')
            const n = form.valor.value
            adicionar(n)
            form.valor.value = ""
            form.valor.focus()
            atualizar()
        }

        function atualizar() {
            const ol = document.querySelector('ol')
            ol.innerHTML = ""
            const items = getItems()
            for(let i=0;i<items().length;i++){
                const li = document.createElement('li')
                li.textContent = items()[i]
                ol.appendChild(li)
            }
            items().push
        }