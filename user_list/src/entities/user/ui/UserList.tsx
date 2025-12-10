import { useGetUsersQuery } from '../api/usersApi';
import { UserCard } from './UserCard';
import type { User } from '../model/types';
import styles from './UserList.module.css';

interface UserListProps {
  onEditUser: (user: User) => void;
}

export function UserList({ onEditUser }: UserListProps) {
  const { data: users, isLoading, isError, error, refetch } = useGetUsersQuery();

  if (isLoading) {
    return <div className={styles.loading}>Загрузка пользователей...</div>;
  }

  if (isError) {
    return (
      <div className={styles.error}>
        <p>Ошибка загрузки: {(error as Error)?.message || 'Неизвестная ошибка'}</p>
        <button onClick={() => refetch()}>Повторить</button>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return <div className={styles.empty}>Пользователи не найдены</div>;
  }

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>
        Список пользователей ({users.length})
      </h2>
      <div className={styles.cards}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onEdit={onEditUser} />
        ))}
      </div>
    </div>
  );
}


