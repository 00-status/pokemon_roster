import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PokemonHub } from './components/PokemonHub';

const rootDomNode = document.getElementById('app');

if (!rootDomNode) {
    throw new Error('Could not find App!');
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <PokemonHub />
    }
]);

// Pokemon:
//      Fetches Pokemon from the PokemonAPI.
//      PokemonInventory
//          Takes in and displays a list of Pokemon.
//          Clicking on a pokemon in the inventory adds it to the Roster.
//      Roster holds all pokemon currently selected from the Inventory.
//          Clicking on a pokemon in the roster will make details appear at the bottom of the page.

const root = createRoot(rootDomNode);
root.render(<RouterProvider router={router}/>);