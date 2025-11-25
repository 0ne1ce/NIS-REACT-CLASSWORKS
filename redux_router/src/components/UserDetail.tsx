import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectUserById, updateUserName } from '../slices/userSlice';

export const UserDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const userId = parseInt(id || '0', 10);

    const user = useAppSelector(state => selectUserById(state, userId));

    const [name, setName] = useState(user?.name || '');
    const [isEditing, setIsEditing] = useState(false);

    if (!user) {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Пользователь не найден</h2>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                    Пользователь с ID {id} не существует в системе.
                </p>
                <button
                    onClick={() => navigate('/users')}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                >
                    Вернуться к списку
                </button>
            </div>
        );
    }

    const handleSave = () => {
        if (name.trim()) {
            dispatch(updateUserName({ id: userId, name: name.trim() }));
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setName(user.name);
        setIsEditing(false);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <button
                onClick={() => navigate('/users')}
                style={{
                    padding: '8px 16px',
                    marginBottom: '20px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                }}
            >
                Назад
            </button>

            <div
                style={{
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                }}
            >
                <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>
                    Детали пользователя
                </h2>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 'bold',
                        color: '#555',
                    }}>
                        Имя:
                    </label>
                    {isEditing ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '16px',
                            }}
                        />
                    ) : (
                        <p style={{ margin: 0, fontSize: '18px', color: '#333' }}>
                            {user.name}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 'bold',
                        color: '#555',
                    }}>
                        Email:
                    </label>
                    <p style={{ margin: 0, color: '#333' }}>{user.email}</p>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                disabled={!name.trim()}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                }}
                            >
                                Сохранить
                            </button>
                            <button
                                onClick={handleCancel}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#6c757d',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                }}
                            >
                                Отмена
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                            }}
                        >
                            Редактировать имя
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};