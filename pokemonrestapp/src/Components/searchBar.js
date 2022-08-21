
import {useState} from "react"

const SearchBar = () => {
    
    
    const [pokemon, setPokemon] = useState("")
    const [searchTerm, setSearchTerm] = useState("")


    const searchPokemon = async () => {
        try{
            setSearchTerm(document.getElementById('search').value.toLowerCase());   
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            const data = await response.json();
            console.table(data)
            setPokemon(data); 
        }
        catch(e) {
            console.error(e);
            alert("Please enter a valid pokemon")
        }    
    }
    
    return (  
      <div>
        <label for="search"> Search Pokemon:  <input type="text" id="search" autocomplete="off" /> </label>
        <button type="submit" onClick={searchPokemon}> Search</button>
        <br/>
        <h3> {pokemon.name}</h3>
      </div>
    );
}

export default SearchBar;