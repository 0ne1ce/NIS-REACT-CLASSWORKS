import { useState, useRef, useCallback } from 'react';
import { axiosInstance, axios } from '@/shared/api';
import type { User } from '@/entities/user';

interface AxiosDemoState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  isCancelled: boolean;
}

export function useAxiosDemo() {
  const [state, setState] = useState<AxiosDemoState>({
    users: [],
    isLoading: false,
    error: null,
    isCancelled: false,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchUsers = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
      isCancelled: false,
    }));

    try {
      const response = await axiosInstance.get<User[]>('/users', {
        signal: abortControllerRef.current.signal,
      });

      setState({
        users: response.data,
        isLoading: false,
        error: null,
        isCancelled: false,
      });
    } catch (err) {
      if (axios.isCancel(err)) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          isCancelled: true,
          error: null,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: err instanceof Error ? err.message : 'Неизвестная ошибка',
        }));
      }
    }
  }, []);

  const cancelRequest = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      console.log('Запрос отменён через AbortController!');
    }
  }, []);

  const clearUsers = useCallback(() => {
    setState({
      users: [],
      isLoading: false,
      error: null,
      isCancelled: false,
    });
  }, []);

  return {
    ...state,
    fetchUsers,
    cancelRequest,
    clearUsers,
  };
}


