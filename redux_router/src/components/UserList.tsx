import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectAllUsers } from '../slices/userSlice';

export const UserList = () => {
    const users = useAppSelector(selectAllUsers);

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>
                Список пользователей
            </h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                maxWidth: '600px'
            }}>
                {users.map(user => (
                    <Link
                        key={user.id}
                        to={`/users/${user.id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        <div
                            style={{
                                padding: '15px 20px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                backgroundColor: '#fff',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#007bff';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,123,255,0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#ddd';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <h3 style={{
                                margin: '0 0 8px 0',
                                color: '#333',
                                fontSize: '18px',
                            }}>
                                {user.name}
                            </h3>
                            <p style={{
                                margin: '4px 0',
                                color: '#666',
                                fontSize: '14px'
                            }}>
                                <strong>Email:</strong> {user.email}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};