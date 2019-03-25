const app = new Vue({
	el: "#app",
	router: myRoute,
	data:{
		pokemonList:[
			{name:'Carregando...',number:25}
			//{name:'pikachu',number:25},
			//{name:'charizard',number:6},

		],
		nameFilter: '',
	},
	mounted: function(){
		PokeService.API.Pokemon.listAll().then(pokemonList => {
			this.pokemonList = pokemonList;
		});
	},
	computed:{
		pokeList: function(){
			var nameFilter = this.nameFilter.toLowerCase();
			return this.pokemonList.filter(pokemon => pokemon.name.includes(nameFilter));
		},
	}
});