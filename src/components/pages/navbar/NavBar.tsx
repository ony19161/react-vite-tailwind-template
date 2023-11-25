import { Link } from 'react-router-dom';
import './navbar.css';
import logoImage from '../../../assets/images/temp_logo.jpg';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

const NavBar = () => {
  const { authStore } = useStore();
  
  return (
    <>
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg p-0 header">
      <div className="flex items-center space-x-2 px-4 py-4">
          <button type="button" className="text-3xl" ><i className="bx bx-menu"></i></button>
          <div style={{height: '30px', width: '160px'}}>
          <Link to="/home"><img src={logoImage} alt="Company logo" className="companyLogo"/></Link>
          </div>
      </div>

      <div className="navtitle">Welcome to the portal</div>

      <div className="navbarButtons">
      <div className=" relative inline-block text-left dropdown">
      <span className="rounded-md shadow-sm">
      <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-transparent rounded-md hover:text-slate-200 focus:outline-none active:bg-transparent active:text-slate-200" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </span>
        </button>
        </span>
    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
        <div className="py-1">
          <Link to="/" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Profile</Link>
          <Link to="/user-settings" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Settings</Link>
          <Link to="/login" onClick={() => authStore.logout()} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Logout</Link>
          </div>
      </div>
    </div>
  </div>


  <div className=" relative inline-block text-left dropdown">
      <span className="rounded-md shadow-sm">
      <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-transparent rounded-md hover:text-slate-200 focus:outline-none active:bg-transparent active:text-slate-200" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
        </svg>
        </span>
        </button>
        </span>
    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div className="py-2">
          </div>
    </div>
  </div>
      </div>
      
    </header>
    </>
  );
};

export default observer(NavBar);