import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';
import { UserDetail } from './components/UserDetail';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}>
                <header style={{
                    backgroundColor: '#282c34',
                    padding: '20px 40px',
                    color: 'white',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}>
                    <h1 style={{
                        margin: 0,
                        fontSize: '24px',
                        fontWeight: '600',
                    }}>
                        Управление пользователями
                    </h1>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/users" replace />} />
                        <Route path="/users" element={<UsersPage />}>
                            <Route path=":id" element={<UserDetail />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;