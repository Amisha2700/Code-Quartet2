import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './components/AuthFiles/Auth1.jsx';
import Home from './components/Home.jsx';

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Auth /></>
      },
      {
        path: "/Home",
        element: <><Home /></>
      },
    ])
    return <RouterProvider router={router} />;
}
export default App;
