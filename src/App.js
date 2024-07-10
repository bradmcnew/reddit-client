import './App.css';
import Posts from './features/posts/Posts';

// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Posts subreddit='celtics'/>}>
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
