const PokemonForm = () => {
    return (

        <>
        <form id="add-form">
            <p>Add Pokemon</p>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="weight">Weight:</label>
            <input type="number" id="weight" name="weight" required />

            <label for="height">Height:</label>
            <input type="number" id="height" name="height" required />

            <button id="form-submit" type="submit">Submit</button>
        </form>
        </>
 
    );
}

export default PokemonForm