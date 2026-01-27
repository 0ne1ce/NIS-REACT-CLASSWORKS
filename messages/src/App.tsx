import { MessageCounter } from './components/MessageCounter';
import './styles/global.scss';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1 className={styles.title}>Почтовый ящик</h1>
                <p className={styles.subtitle}>Ваши непрочитанные сообщения</p>
            </header>

            <main className={styles.main}>
                <MessageCounter />
            </main>
        </div>
    );
}

export default App;
