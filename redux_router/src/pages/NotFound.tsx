import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div style={{
            padding: '40px',
            textAlign: 'center',
            minHeight: 'calc(100vh - 80px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1 style={{
                fontSize: '72px',
                margin: '0',
                color: '#dc3545',
                fontWeight: 'bold',
            }}>
                404
            </h1>

            <h2 style={{
                marginTop: '20px',
                marginBottom: '10px',
                color: '#333',
            }}>
                Страница не найдена
            </h2>

            <p style={{
                color: '#666',
                marginBottom: '30px',
                fontSize: '16px',
            }}>
                Запрашиваемая страница не существует или была удалена
            </p>

            <Link
                to="/users"
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    transition: 'all 0.2s',
                    display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0056b3';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#007bff';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Вернуться к списку пользователей
            </Link>
        </div>
    );
};