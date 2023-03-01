//Lucario Only
// async function iChooseU(){
//     var response = await fetch("https://pokeapi.co/api/v2/pokemon/lucario")
//     var pokeData = await response.json();
//     // var pokeNameHeader = document.querySelector
//     pokeInfo.innerHTML = `<h2>${pokeData.name} (${pokeData.id})</h2>`;
//     pokeInfo.innerHTML += `<p><img src="${pokeData.sprites.front_default}" alt="${pokeData.name}_Sprite"></p>`
//     pokeInfo.innerHTML += `<p><img src="" alt=""> ${pokeData.types[0].type.name}</p>`
//     console.log(pokeData);
//     console.log(pokeData.name);
// }

//list the first 10 pokemon starting from pokemon id (pokedex id) 0
// async function iChooseU(){
//     var response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0")
//     var pokeData = await response.json();
//     for (var i=0; i < pokeData.results.length; i++) {
//         console.log(pokeData.results[i].name);
//     }
// }

//Pokemon randomizer
async function pokeRandomizer(){
    var randomPokemon = Math.floor(Math.random() * 1279) + 1; //count can be retrieved manually from api object 'count'
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemon);
    var pokeData = await response.json();
    // var pokeNameHeader = document.querySelector
    pokeInfo.innerHTML = `<h2>${pokeData.name} (${pokeData.id})</h2>`;
    pokeInfo.innerHTML += `<p><img src="${pokeData.sprites.front_default}" alt="${pokeData.name}_Sprite"></p>`
    var pokeTypes = pokeTypesCheck(pokeData);
    pokeInfo.innerHTML += `<p>Pokemon Type: <img src="" alt="">${pokeTypes}<p>`;
    // console.log(pokeData);
    // console.log(pokeData.name);
}

async function iChooseU(){
    var pokemonToSearch = document.querySelector("#poke_search").value.toLowerCase(); //count can be retrieved manually from api object 'count'
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonToSearch);
    var pokeData = await response.json();
    // var pokeNameHeader = document.querySelector
    pokeInfo.innerHTML = `<h2>${pokeData.name} (${pokeData.id})</h2>`;
    pokeInfo.innerHTML += `<p><img src="${pokeData.sprites.front_default}" alt="${pokeData.name}_Sprite"></p>`
    var pokeTypes = pokeTypesCheck(pokeData);
    pokeInfo.innerHTML += `<p>Pokemon Type: <img src="" alt="">${pokeTypes}<p>`;
    // console.log(pokeData);
    // console.log(pokeData.name);
}

function pokeTypesCheck(pokeData){
    var pokeTypes = ""
    for (var i = 0; i<pokeData.types.length; i++) {
        var pokeTypes = pokeTypes + pokeData.types[i].type.name + " / ";
    }
    pokeTypes = pokeTypes.substring(0, pokeTypes.length-2); //remove the extra fowardslash and space at the end of iteration
    return(pokeTypes)
}
