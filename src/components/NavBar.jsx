function NavBar({ setpokemonIndex, pokemonIndex, pokemonList }) {

  return (
    <div>
            {pokemonList.map((myPokemon, index) => (
                <button key={myPokemon.name} onClick={() => {
                  if (myPokemon.name === "pikachu") {
                    alert("pika pikachu !!!");}
                  setpokemonIndex(pokemonIndex = index); 
                }  
                }>
                    {myPokemon.name}
                </button>
            ))
            }
        </div>
  );
}

export default NavBar;
