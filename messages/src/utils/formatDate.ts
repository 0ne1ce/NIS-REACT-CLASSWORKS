/**
 * Названия месяцев на русском (сокращённые)
 */
const MONTHS_SHORT = [
  'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
];

/**
 * Добавляет ведущий ноль к числу, если оно меньше 10
 */
function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Форматирует дату в формат "дд ммм чч:мм:сс"
 * @param date - объект Date
 * @returns строка в формате "14 янв 15:30:45"
 */
export function formatDate(date: Date): string {
  const day = padZero(date.getDate());
  const month = MONTHS_SHORT[date.getMonth()];
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${day} ${month} ${hours}:${minutes}:${seconds}`;
}

