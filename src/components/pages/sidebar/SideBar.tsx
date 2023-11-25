import { Link } from 'react-router-dom';
import './sidebar.css';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import apiManager from '../../../services/apiManager';
import { isMenuItemAuthorized, isMenuAuthorized } from '../../../utils/menuHelper';



const SideBar = () => {

  
  
  return (
    <>
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
          <div id="profile" className="space-y-3">
            <div>
              <img
                    src=''
                    alt="Admin avatar"
                    className="w-10 md:w-16 rounded-full mx-auto"
                  />
              <h2 className="font-medium text-xs md:text-sm text-center text-teal-500"> 
                      User full name
              </h2>
              <p className="text-xs text-gray-500 text-center">Designation</p>
            </div>
            </div>
            <nav>
          </nav>
        </aside>
    </>
  );
};

export default observer(SideBar);
