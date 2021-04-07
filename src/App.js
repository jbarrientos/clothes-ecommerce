import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import { Route , Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header-component.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// const HatsPage = () => (<div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
