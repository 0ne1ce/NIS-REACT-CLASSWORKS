import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './MessageCounter.module.scss';

export const MessageCounter = () => {
    const { t } = useTranslation();

    const [count] = useState(() => Math.floor(Math.random() * 10) + 1);
    const [lastMessageDate] = useState(() => new Date());

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
                    {t('unreadMessages', { count })}
                </p>

                <p className={styles.date}>
                    {t('lastMessage', {
                        date: lastMessageDate,
                        formatParams: {
                            date: {
                                day: '2-digit',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false,
                            },
                        },
                    })}
                </p>
            </div>
        </div>
    );
};