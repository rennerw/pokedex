Vue.component('home-page',{
	template: `
		<div>
			<input v-model="$parent.nameFilter" type="text" id="pokeFilter" placeholder="Procurar" maxlength="20">
			<ul class="poke-list">
				<my-list v-for="item in $parent.pokeList" :pokemon="item" :key="item.number">
					
				</my-list>
			</ul>
		</div>
	`,
});