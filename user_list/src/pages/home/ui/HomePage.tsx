import { useState } from 'react';
import { UserList, type User } from '@/entities/user';
import { UserForm } from '@/features/user-form';
import { AxiosDemo } from '@/features/axios-demo';
import styles from './HomePage.module.css';

export function HomePage() {
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserForm editingUser={editingUser} onCancelEdit={handleCancelEdit} />

        <UserList onEditUser={handleEditUser} />

        <AxiosDemo />
      </main>
    </div>
  );
}


