import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from './provider';
import { PRIVATE_URLS, PUBLIC_URLS } from './config/config';
import { Layout } from './layout/layout';

import Landing from './pages/Landing';
import Login from './pages/Login';

import 'carbon-components-react/index.scss';
import './App.css';
import SignUp from './pages/singup';
import ForgetPassword from './pages/ForgetPassword';
import ResetPasswordPermit from './pages/ResetPasswordPermit';
import ResetPassword from './pages/ResetPassword';
import Search from './pages/Dashboard/Search';
import Orders from './pages/Dashboard/Orders';
import Chats from './pages/Dashboard/Chats';
import Settings from './pages/Dashboard/Settings';
import Accode from './pages/Accode';
import CheckOut from './pages/checkout';
import HI5 from './pages/Dashboard/Hi5';
import Store from './pages/Dashboard/Store';
import AddListing from './pages/Dashboard/AddListing';
import CitySelector from './pages/Dashboard/CitySelector';
import Sales from './pages/Dashboard/Sales';
import Wallet from './pages/Dashboard/Wallet';
import Passcode from './pages/Dashboard/Passcode';

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_URLS.LANDING} element={<Landing></Landing>} />
              <Route path={PUBLIC_URLS.LOGIN} element={<Login></Login>} />
              <Route path={PUBLIC_URLS.SIGNUP} element={<SignUp></SignUp>} />
              <Route path={PUBLIC_URLS.FORGETPASSWORD} element={<ForgetPassword></ForgetPassword>}></Route>
              <Route path={PUBLIC_URLS.RESETPERMIT} element={<ResetPasswordPermit></ResetPasswordPermit>}></Route>
              <Route path={PUBLIC_URLS.RESETPASSWORD} element={<ResetPassword></ResetPassword>}></Route>

              <Route path={PRIVATE_URLS.SEARCH} element={<Search></Search>}></Route>
              <Route path={PRIVATE_URLS.ORDERS} element={<Orders></Orders>}></Route>
              <Route path={PRIVATE_URLS.CHATS} element={<Chats></Chats>}></Route>
              <Route path={PRIVATE_URLS.SETTINGS} element={<Settings></Settings>}></Route>
              <Route path={PRIVATE_URLS.ACCODE} element={<Accode></Accode>}></Route>
              <Route path={PRIVATE_URLS.CHECKOUT} element={<CheckOut></CheckOut>}></Route>
              <Route path={PRIVATE_URLS.HI5} element={<HI5></HI5>}></Route>

              <Route path={PRIVATE_URLS.STORE} element={<Store></Store>}></Route>
              <Route path={PRIVATE_URLS.ADDLISTING} element={<AddListing></AddListing>}></Route>
              <Route path={PRIVATE_URLS.CITYSELECTOR} element={<CitySelector></CitySelector>}></Route>
              <Route path={PRIVATE_URLS.SALES} element={<Sales></Sales>}></Route>
              <Route path={PRIVATE_URLS.WALLET} element={<Wallet></Wallet>}></Route>
              <Route path={PRIVATE_URLS.PASSCODE} element={<Passcode></Passcode>}></Route>
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
