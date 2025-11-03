const pokemonList = [
    { name: "Charmander", type: "Fire" },
    { name: "Squirtle", type: "Water" },
    { name: "Pikachu", type: "Electric" },
    { name: "Vulpix", type: "Fire" },
    { name: "Growlithe", type: "Fire" },
    { name: "Geodude", type: "Rock/Ground" },
    { name: "Eevee", type: "Normal" },
    { name: "Abra", type: "Psychic" },
]

for(pokemon of pokemonList){
    if(pokemon.type === "Fire") console.log(pokemon.name)
}