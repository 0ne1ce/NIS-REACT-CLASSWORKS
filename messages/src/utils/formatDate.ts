const MONTHS_SHORT = [
  'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
];

function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

export function formatDate(date: Date): string {
  const day = padZero(date.getDate());
  const month = MONTHS_SHORT[date.getMonth()];
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${day} ${month} ${hours}:${minutes}:${seconds}`;
}

