import {store} from "./store.js"
const form = document.forms.entrada;
        form.addEventListener('submit', envia)

        
        atualizar()
        function envia (evento) {
            evento.preventDefault()
            console.log('Formilário enviado!')
            store.estado++
            atualizar()
        }

        function atualizar() {
            const ol = document.querySelector('ol')
            ol.innerHTML = `<li>${store.estado}</li`
        }