new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        pessoa: {
            nome: 'Vitor',
            idade: 22
        }
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente';
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        },
        valor() {
            console.log("Estou sendo alterado!");
        },
        'pessoa.nome'() {
            console.log("Nome da pessoa foi alterado!");
        }
    },
    methods: {
        
    },
});   