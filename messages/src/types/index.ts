export interface PluralForms {
  one: string;    // 1, 21, 31...
  few: string;    // 2-4, 22-24...
  many: string;   // 5-20, 25-30...
}

export interface MessageInfo {
  count: number;
  lastMessageDate: Date;
}

