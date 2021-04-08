import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import { Route , Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header-component.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

// const HatsPage = () => (<div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor(props){
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });

      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }
  
}

export default App;
