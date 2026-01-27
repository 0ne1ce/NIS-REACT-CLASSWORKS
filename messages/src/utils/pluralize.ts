import type { PluralForms } from '../types';

export function pluralize(count: number, forms: PluralForms): string {
  const absCount = Math.abs(count);
  const lastTwo = absCount % 100;
  const lastOne = absCount % 10;

  if (lastTwo >= 11 && lastTwo <= 19) {
    return forms.many;
  }

  if (lastOne === 1) {
    return forms.one;
  }

  if (lastOne >= 2 && lastOne <= 4) {
    return forms.few;
  }

  return forms.many;
}

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

