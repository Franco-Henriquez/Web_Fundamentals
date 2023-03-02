//STEP 1: GRAB ELEMENTS
//STEP 2: HOOK UP EVENT-LISTENERS
//STEP 3: DECLARE FUNCTION & CALL API
//STEP 4: PACKAGE DATA
//STEP 5: LOOK THROUGH DATA
//STEP 6: MANIPULATE WEB-PAGE

var pokeSearch = document.getElementById('search-bar')
var spritePic = document.getElementById('sprite-pic')
var log = console.log.bind(log)
var pokemon
var pokeStats

function getVal(){
    pokemon = pokeSearch.value.toLowerCase() //to lowercase because the api only accepts lower case pokemon names
    log(pokemon)
}

async function iChooseU(){
    if (pokeSearch.value) {
        var pokeResults = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        // log(pokeResults)
        pokeResults = await pokeResults.json()
        var pokemonName = capitalize(pokeResults.name);
        // log(pokeResults)
        pokeStats = document.getElementById('stats-list');
        var pokeTypes = pokeTypesCheck(pokeResults);
        log(pokeResults.height)
        var pokeHeight = parseInt(pokeResults.height) * 0.1; //convert to kg
        var pokeHeight = Math.round(pokeHeight * 10) / 10; //set to only 1 decimal place
        // var pokeWeight = parseInt(pokeResults.weight) ;
        var pokeWeight = parseInt(pokeResults.weight) * 0.1; //convert to kg
        var pokeWeight = Math.round(pokeWeight * 10) / 10; //set to only 1 decimal place
        // log(pokeStats)
        // listPokeStats(pokeStats,pokeTypes,pokemonName);
        pokeStats.innerHTML = `<li><b>Name:</b>&nbsp;<div> ${pokemonName}</div></li>`
        // await sleep(3000);
        pokeStats.innerHTML += `<li><b>Type:</b>&nbsp;<div> ${pokeTypes}</div></li>`
        pokeStats.innerHTML += `<li><b>Height:</b>&nbsp;<div> ${pokeHeight}m</div></li>`
        pokeStats.innerHTML += `<li><b>Weight:</b>&nbsp;<div> ${pokeWeight}kg</div></li>`
        spritePic.src = pokeResults.sprites.front_shiny
    } else {
        alert("Your must first type a pokémon name or pokédex number!");
    }

}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function pokeTypesCheck(pokeData){
    var pokeTypes = ""
    for (var i = 0; i<pokeData.types.length; i++) {
        var pokeTypes = pokeTypes + capitalize(pokeData.types[i].type.name) + " / ";
    }
    pokeTypes = pokeTypes.substring(0, pokeTypes.length-2); //remove the extra fowardslash and space at the end of iteration
    return(pokeTypes)
}

async function listPokeStats(pokeStats,pokeTypes,pokemonName){
   

}

async function sleep(ms) {
    return new Promise(val => setTimeout(val, ms));
}