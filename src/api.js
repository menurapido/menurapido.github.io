
export default class Api {
    listarPratos() {
        return fetch('data/pratos.json').then(res => res.json()).then(d => d.pizza);
    }
}