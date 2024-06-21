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

const root = createRoot(rootDomNode);
root.render(<RouterProvider router={router}/>);