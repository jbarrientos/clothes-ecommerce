import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import { Route , Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = () => (<div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
