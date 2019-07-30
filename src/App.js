import React from 'react';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import SignIn from './components/SignIn/SignIn';
import NavbarPage from './components/Navbar';
import ItemCard from './components/ItemCard';
import {Provider} from "react-redux"
import {createStore} from "redux"
import cartReducer from './reducers/CartReducer';
import CatCuisine from './components/categories/CatCuisine';
import CatJardin from './components/categories/CatJardin';
import CatSalon from './components/categories/CatSalon';

function App() {
  const store = createStore(cartReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <>
    <Provider store={store}>
    <BrowserRouter> 
    <NavbarPage/>
    <Route path="/cuisine" component={CatCuisine}/>
    <Route path="/jardin" component={CatJardin}/>
    <Route path="/salon" component={CatSalon}/>
    <Route path="/register" component={SignUp}/>
    <Route path="/login" component={SignIn}/>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
