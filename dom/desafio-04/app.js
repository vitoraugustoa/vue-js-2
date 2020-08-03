new Vue({
	el: '#desafio',
	data: {
		efeitoLigado: false,
		carregando: false,
		progressBar: '',
		idIntervalo: 0,
		classEfeito: '',
		classInput: '',
		aplicarClasse: false,
		classeInput2: '',
		estiloInput: '',
		progressBar: '',
	},
	computed: {
		classes() {
			return ['font-20','font-color-red']
		}
	},
	methods: {
		iniciarEfeito() {
			this.efeitoLigado = !this.efeitoLigado; 

			if(this.efeitoLigado) {
				this.idIntervalo = setInterval(() => {
					this.classEfeito = this.classEfeito == 'destaque' ? 'encolher' : 'destaque';
				}, 1000);
			}else{
				this.classEfeito = '';
				clearInterval(this.idIntervalo);
			}
		},
		iniciarProgresso() {
			this.carregando = !this.carregando; 

			if(this.carregando) {
				let progresso = 0;
				let interval =	setInterval(() => {
						progresso += 10;
						this.progressBar = `${progresso}%`;
						if(progresso >= 100) 
							clearInterval(interval);
					}, 800);
			}else{
				this.progressBar = '';
			}
		}
	}
})
