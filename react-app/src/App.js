import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Products from './components/ProductSplash';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import PurchaseHistory from './components/PurchaseHistory';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Products/>
        </Route>
        <Route path='/products/:productId' exact={true}>
          <ProductCard/>
        </Route>
        <Route path='/products' exact={true}>
          <Products/>
        </Route>
        <Route path='/cart' exact={true}>
          <Cart/>
        </Route>
        <Route path='/order-history' exact={true}>
          <PurchaseHistory/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
