import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ru: {
        translation: {
            unreadMessages_one: 'У вас {{count}} непрочитанное сообщение',
            unreadMessages_few: 'У вас {{count}} непрочитанных сообщения',
            unreadMessages_many: 'У вас {{count}} непрочитанных сообщений',
            lastMessage: 'Последнее сообщение: {{date, datetime}}',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
});

export default i18n;