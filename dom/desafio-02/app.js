new Vue({
    el: '#desafio',
    data: {
        valor1: '',
        valor2: '',
    },
    methods: {
        alerta() {
            alert("Alerta!");
        },
        preencherValorEnter(event) {
            this.valor2 = event.target.value;
        }
    }
})