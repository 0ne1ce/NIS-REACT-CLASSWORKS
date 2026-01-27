import { useState, useEffect } from 'react';
import type { MessageInfo } from '../types';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function useRandomMessages(min: number = 1, max: number = 10): MessageInfo {
  const [messageInfo, setMessageInfo] = useState<MessageInfo>({
    count: 0,
    lastMessageDate: new Date(),
  });

  useEffect(() => {
    // Генерируем случайное число только при монтировании
    const count = getRandomInt(min, max);
    const lastMessageDate = new Date();

    setMessageInfo({ count, lastMessageDate });
  }, [min, max]);

  return messageInfo;
}

