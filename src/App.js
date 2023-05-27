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
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
