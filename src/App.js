import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Description from './components/Description'
import MealsList from './components/MealsList';
import OrderCard from './components/OrderCard';
import Login from './components/Login/Login';
import MyContext from './Data/Context';


function App() {
  const ctx = useContext(MyContext);

  return (
    <div className={`App ${ctx.cartOpen ? "cart-open" : ""}`}>
      <Header />
      { !ctx.loggedIn ?
        <Login /> :
        <div className='content'>
          <Image />
          <Description />
          <MealsList />
          <OrderCard />
        </div>
      }
    </div>
  );
}

export default App;
