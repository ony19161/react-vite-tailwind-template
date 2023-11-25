import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from '../pages/sidebar/SideBar';
import NavBar from '../pages/navbar/NavBar';
import { useEffect } from 'react';
import { useStore } from '../../stores/store';



const BaseLayout = () => {

  const { commonStore } = useStore();

  const navigate = useNavigate();

  useEffect(() => {
    
    if (!commonStore.token) {
      navigate('/login');
    }
  }, []);
  
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
      <NavBar />
      <div className="flex">
          <SideBar />
          <Outlet />
      </div>
    </main>
  );
}

export default BaseLayout;
