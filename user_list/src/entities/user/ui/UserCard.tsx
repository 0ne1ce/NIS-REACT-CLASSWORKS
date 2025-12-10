import type { User } from '../model/types';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
}

export function UserCard({ user, onEdit }: UserCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.email}>{user.email}</p>
      </div>
      <button className={styles.editBtn} onClick={() => onEdit(user)}>
        Редактировать
      </button>
    </div>
  );
}


