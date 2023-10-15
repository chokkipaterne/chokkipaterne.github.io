import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/Error';
import Layout from './components/Layout';
import { navLinks } from './constants';

const App = () => {
  return (
    <Layout>
      <Routes>
        {navLinks.map((navlink) => {
          return (
            <Route
              key={navlink.id}
              path={navlink.path}
              element={<navlink.page />}
            />
          );
        })}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
