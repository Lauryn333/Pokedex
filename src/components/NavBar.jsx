
function NavBar({ setpokemonIndex, pokemonIndex, pokemonList }) {

    return (
        <div>
            {pokemonList.map((myPokemon, index) => (
                <button key={myPokemon.name} onClick={() =>
                    setpokemonIndex(pokemonIndex = index)
                }>
                    {myPokemon.name}
                </button>
            ))
            }
        </div>
    )
}

export default NavBar;
