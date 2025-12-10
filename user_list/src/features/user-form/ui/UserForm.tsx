import { useState, useEffect, type FormEvent } from 'react';
import { useCreateUserMutation, useUpdateUserMutation, type User } from '@/entities/user';
import styles from './UserForm.module.css';

interface UserFormProps {
  editingUser: User | null;
  onCancelEdit: () => void;
}

export function UserForm({ editingUser, onCancelEdit }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createUser, { isLoading: isCreating }] = useCreateUserMutation();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const isLoading = isCreating || isUpdating;
  const isEditing = editingUser !== null;

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert('Заполните все поля!');
      return;
    }

    try {
      if (isEditing && editingUser) {
        await updateUser({
          id: editingUser.id,
          name: name.trim(),
          email: email.trim(),
        }).unwrap();
        
        alert(`Пользователь "${name}" обновлён!`);
        onCancelEdit();
      } else {
        const result = await createUser({
          name: name.trim(),
          email: email.trim(),
        }).unwrap();
        
        alert(`Пользователь "${result.name}" создан с ID: ${result.id}`);
      }

      setName('');
      setEmail('');
    } catch (err) {
      console.error('Ошибка:', err);
      alert('Произошла ошибка при сохранении!');
    }
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    onCancelEdit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>
        {isEditing ? 'Редактирование пользователя' : '+ Добавить пользователя'}
      </h2>

      <div className={styles.field}>
        <label htmlFor="name">Имя:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя"
          disabled={isLoading}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
          disabled={isLoading}
        />
      </div>

      <div className={styles.buttons}>
        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
          {isLoading
            ? 'Сохранение...'
            : isEditing
            ? 'Сохранить'
            : 'Создать'}
        </button>

        {isEditing && (
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={handleCancel}
            disabled={isLoading}
          >
            Отмена
          </button>
        )}
      </div>
    </form>
  );
}


