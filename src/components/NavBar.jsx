function NavBar({ setpokemonIndex, pokemonIndex, pokemonList }) {

    const handleClickSuivant = () => {
        setpokemonIndex(pokemonIndex + 1);
    }

    const handleClickPrecedent = () => {
        setpokemonIndex(pokemonIndex - 1);
    }

    return (
        <nav>
            {pokemonIndex > 0 ? <button onClick={handleClickPrecedent}>Précédent</button> : undefined}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickSuivant}>Suivant</button> : undefined}
        </nav>

    )
}

export default NavBar;