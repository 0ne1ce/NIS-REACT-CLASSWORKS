import { useRandomMessages } from '../../hooks';
import { pluralize, messageWordForms, unreadWordForms, formatDate } from '../../utils';
import styles from './MessageCounter.module.scss';

/**
 * Компонент, отображающий количество непрочитанных сообщений
 * с правильной плюрализацией и датой последнего сообщения
 */
export const MessageCounter = () => {
  const { count, lastMessageDate } = useRandomMessages(1, 10);

  const unreadWord = pluralize(count, unreadWordForms);
  const messageWord = pluralize(count, messageWordForms);
  const formattedDate = formatDate(lastMessageDate);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="48"
          height="48"
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        <span className={styles.badge}>{count}</span>
      </div>
      
      <div className={styles.content}>
        <p className={styles.message}>
          У вас <span className={styles.count}>{count}</span> {unreadWord} {messageWord}
        </p>
        <p className={styles.date}>
          Последнее сообщение: <span className={styles.dateValue}>{formattedDate}</span>
        </p>
      </div>
    </div>
  );
};

