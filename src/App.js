import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './Auth/DefaultLayout';
import Login from './Auth/Login';
import PrivateRoutes from './Auth/PrivateRoutes';
import Register from './Auth/Register';
import { ROUTES } from './constants';
import { publishRoutes } from './Routes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />} >
          {publishRoutes?.map((route, index) => {
            const Component = route.component;
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
