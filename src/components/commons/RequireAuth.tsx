import { useStore } from '../../stores/store';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {allowedRoles : string[]}

const RequireAuth = ({ allowedRoles } : Props) => {
    const { commonStore } = useStore();
    let userRoles = commonStore.jsonPlayLoad.UserRoles;
    
  return (
    <>
    { allowedRoles.some(x => userRoles.includes(x)) ?    
      (<main className="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
      <div className="flex">
          <Outlet />
      </div>
      </main>
      ) : ( <div>
         <Navigate to="/unauthorized"/>
      </div>
      ) }
    </>
  )
}

export default RequireAuth