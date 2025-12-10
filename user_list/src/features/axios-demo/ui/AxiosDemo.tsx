import { useAxiosDemo } from '../model/useAxiosDemo';
import styles from './AxiosDemo.module.css';

export function AxiosDemo() {
  const { users, isLoading, error, isCancelled, fetchUsers, cancelRequest, clearUsers } =
    useAxiosDemo();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Axios + AbortController Demo</h2>
      
      <p className={styles.description}>
        В консоли можно увидеть работу Interceptors.
      </p>

      <div className={styles.buttons}>
        <button
          className={styles.fetchBtn}
          onClick={fetchUsers}
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : 'Загрузить через Axios'}
        </button>

        <button
          className={styles.cancelBtn}
          onClick={cancelRequest}
          disabled={!isLoading}
        >
          Отменить загрузку
        </button>

        <button
          className={styles.clearBtn}
          onClick={clearUsers}
          disabled={users.length === 0}
        >
          Очистить
        </button>
      </div>

      <div className={styles.status}>
        {isLoading && <span className={styles.loading}>Загрузка данных...</span>}
        {isCancelled && <span className={styles.cancelled}>Запрос был отменён!</span>}
        {error && <span className={styles.error}>Ошибка: {error}</span>}
        {!isLoading && !error && !isCancelled && users.length > 0 && (
          <span className={styles.success}>Загружено {users.length} пользователей</span>
        )}
      </div>

      {users.length > 0 && (
        <div className={styles.results}>
          <h3>Результаты (Axios):</h3>
          <ul className={styles.userList}>
            {users.slice(0, 5).map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
            {users.length > 5 && (
              <li className={styles.more}>...и ещё {users.length - 5} пользователей</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}


