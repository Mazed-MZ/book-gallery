import './App.css';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import Cart from './component/Books Cart/Cart';
import { createContext, useState } from 'react';
import PrivateRoute from './component/Private Route/PrivateRoute';

export const UserContext = createContext()


function App() {

  const [LoginUser, setLoginUser] = useState({})

  return (
    <div>
      <Header></Header>
      <UserContext.Provider value={[LoginUser, setLoginUser]}>
        <Router>
          <Switch>
            <Route path='/home'>
              <Cart></Cart>
            </Route>
            <PrivateRoute path='/order'>
              <Order></Order>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
