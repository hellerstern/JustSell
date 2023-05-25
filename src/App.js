import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from './provider';
import { PUBLIC_URLS } from './config/config';
import { Layout } from './layout/layout';
import Landing from './pages/Landing';

import 'carbon-components-react/index.scss';
import './App.css';

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_URLS.LANDING} element={<Landing></Landing>} />
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
