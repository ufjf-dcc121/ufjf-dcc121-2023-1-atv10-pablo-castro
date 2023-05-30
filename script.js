import {estado} from "./store.js"
const form = document.forms.entrada;
        form.addEventListener('submit', envia)

        
        atualizar()
        function envia (evento) {
            evento.preventDefault()
            console.log('Formilário enviado!')
            estado++
            atualizar()
        }

        function atualizar() {
            const ol = document.querySelector('ol')
            ol.innerHTML = `<li>${estado}</li`
        }