import PokemonList from './components/PokemonList'
import SelectedPokemon from './components/SelectedPokemon'
import PokemonForm from './components/PokemonForm'
import './App.css'

import { useState } from 'react';
/*Instructions
Here are the instructions for today’s workshop.
Create a React app that retrieves and displays a list of pokemon
When you click on a pokemon in the list, it should go to a details page 
displaying more information about it (probably want a back button as well)
Add a form that allows the user to create their own pokemon
*/
function App() {

  const [selectedPokemonId, setSelectedPokemonId] = useState(null);


  return (
    <body>
      <div id="square">
        <div id="top-line"></div>
        <div id="topSquare">
          <div id="screen">
            {selectedPokemonId ? (
              <SelectedPokemon setSelectedPokemonId={setSelectedPokemonId} selectedPokemonId={selectedPokemonId} />
            ) : (
              <>
                <PokemonList setSelectedPokemonId={setSelectedPokemonId} />
                <PokemonForm />
              </>

            )}
          </div>
          <h3 id="gameboy">Gameboy</h3>
          <h3 id="color"><span id="C">C</span><span id="O">o</span><span id="L">l</span><span id="O-2">o</span><span id="R">r</span></h3>
          <div id="power"></div>
        </div>
        <div id="bottomSquare">
        </div>
        <div id="bottom">
          <div id="buttonA">
            <p id="A">A</p>
          </div>
          <div id="buttonB">
            <p id="B">B</p>
          </div>
          <div id="dpad-horizontal"></div>
          <div id="dpad-vertical"></div>
          <div id="select"></div>
          <div id="start"></div>
        </div>
      </div>


    </body>
  )
}

export default App

//credit for gameboy art https://codepen.io/mikemang/pen/QGyJgL