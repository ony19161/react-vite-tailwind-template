import { Route, Routes } from 'react-router-dom';
import BaseLayout from '../components/layouts/BaseLayout';
import Login from '../components/pages/login/Login';
import Home from '../components/pages/dashboard/Home';
import NotFoundPage from '../components/commons/NotFoundPage';
import { useStore } from '../stores/store';
import { useEffect } from 'react';
import Unauthorized from '../components/commons/Unauthorized';
import LoginForm from '../components/pages/login/LoginForm';

function App() {

  const { commonStore } = useStore();

  const { jsonPlayLoad } = commonStore;
  
  useEffect(() => {
    if (jsonPlayLoad) {
      
    }
  }, [commonStore]);

  return (
    <>
        <Routes>
          <Route path='login' element={<Login />} />
          {/* <Route path='login' element={<LoginForm />} /> */}
          <Route path='/' element={<BaseLayout />}>
          <Route index path='home' element={<Home />} />

        <Route path='unauthorized' element={<Unauthorized />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
