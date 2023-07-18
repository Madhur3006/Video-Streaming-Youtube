import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainConatinor from './components/MainContainor';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainConatinor />
      },
      {
        path: "watch",
        element: <WatchPage />
      }
    ]
  }
])

function App() {
  return (
    <Provider store = {store}>
    <div>
       <Header />
       <RouterProvider router = {appRouter}/>
    </div>
    </Provider>
  );
}

export default App;

{/**
* Header
* Body 
   --sidebar
       --Menu Items
   --MainConatinor
       --ButtonList
       --VideosConatinor
           --videocard

*/}


