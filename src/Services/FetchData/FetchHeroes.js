const api_Key = "6df71823e082a7c62f84539374749aec";

const FetchHeroes = () => {
    return (
        fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${api_Key}`)
            .then(response => response.json())
    )
}

export { FetchHeroes };