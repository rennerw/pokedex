Vue.component('about-page',{
	template: `
	<div>
		<router-link to="/" class="back-button">&lt;</router-link>
		<div class="poke-profile">
			<h1 style="text-align: center;"><strong>#{{$route.params.number}}-{{pkm.name}}</strong></h1>
			<img class="poke-sprite" :src="'//serebii.net/sunmoon/pokemon/'+$route.params.number+'.png'" />
			<ul class="poke-types">
				<li v-for="tipo in pkm.types">
					<img :src="'//serebii.net/pokedex-bw/type/'+tipo.name+'.gif'">
				</li>
			</ul>
			<table>
				<tr>
					<th>Nome</th>
					<th>Atk</th>
					<th>Def</th>
					<th>HP</th>
					<th>SP Atk</th>
					<th>SP Def</th>
					<th>Speed</th>
				</tr>
				<tr>
					<td>{{pkm.name}}</td>
					<td>{{pkm.attack}}</td>
					<td>{{pkm.defense}}</td>
					<td>{{pkm.hp}}</td>
					<td>{{pkm.sp_atk}}</td>
					<td>{{pkm.sp_def}}</td>
					<td>{{pkm.speed}}</td>
				</tr>
			</table>
		</div>
	</div>
	`,
	data: function(){
		return {
			pkm: {types: []},

		}
	},
	mounted: function(){
		PokeService.API.Pokemon.find(this.$route.params.number)
		.then(pokemon => {this.pkm = pokemon});
	}
});