import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './components/AuthFiles/Auth1.jsx';

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Auth /></>
      },
    ])
    return <RouterProvider router={router} />;
}
export default App;
