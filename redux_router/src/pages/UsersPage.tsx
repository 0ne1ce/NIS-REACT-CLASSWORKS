import { Outlet, useLocation } from 'react-router-dom';
import { UserList } from '../components/UserList';

export const UsersPage = () => {
    const location = useLocation();

    const isDetailPage = location.pathname !== '/users';

    return (
        <div>
            {isDetailPage ? (
                <Outlet />
            ) : (
                <UserList />
            )}
        </div>
    );
};