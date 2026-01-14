import type { PluralForms } from '../types';

/**
 * Функция плюрализации для русского языка
 * @param count - число
 * @param forms - объект с формами слова { one, few, many }
 * @returns правильная форма слова
 */
export function pluralize(count: number, forms: PluralForms): string {
  const absCount = Math.abs(count);
  const lastTwo = absCount % 100;
  const lastOne = absCount % 10;

  // Для чисел 11-19 всегда используем форму "many"
  if (lastTwo >= 11 && lastTwo <= 19) {
    return forms.many;
  }

  // Для последней цифры 1 используем форму "one"
  if (lastOne === 1) {
    return forms.one;
  }

  // Для последних цифр 2-4 используем форму "few"
  if (lastOne >= 2 && lastOne <= 4) {
    return forms.few;
  }

  // Для остальных (0, 5-9) используем форму "many"
  return forms.many;
}

// Предопределённые формы для сообщений
export const messageWordForms: PluralForms = {
  one: 'сообщение',
  few: 'сообщения',
  many: 'сообщений',
};

export const unreadWordForms: PluralForms = {
  one: 'непрочитанное',
  few: 'непрочитанных',
  many: 'непрочитанных',
};

