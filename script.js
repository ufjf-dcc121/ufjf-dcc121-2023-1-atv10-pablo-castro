import {store} from "./store.js"
const form = document.forms.entrada;
        form.addEventListener('submit', envia)

        
        atualizar()
        function envia (evento) {
            evento.preventDefault()
            console.log('Formilário enviado!')
            const n = form.valor.value
            store.estado.push(n)
            form.valor.value = ""
            form.valor.focus()
            atualizar()
        }

        function atualizar() {
            const ol = document.querySelector('ol')
            ol.innerHTML = ""
            for(let i=0;i<store.estado.length;i++){
                const li = document.createElement('li')
                li.textContent = store.estado[i]
                ol.appendChild(li)
            }
        
        }