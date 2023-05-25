import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from './provider';
import { PUBLIC_URLS } from './config/config';
import { Layout } from './layout/layout';

import Landing from './pages/Landing';
import Login from './pages/Login';

import 'carbon-components-react/index.scss';
import './App.css';
import SignUp from './pages/singup';
import ForgetPassword from './pages/ForgetPassword';
import ResetPasswordPermit from './pages/ResetPasswordPermit';
import ResetPassword from './pages/ResetPassword';

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
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
