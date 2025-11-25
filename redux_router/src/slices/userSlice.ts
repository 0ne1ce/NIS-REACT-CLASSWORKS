import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

export interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersState {
    list: User[];
}

const initialState: UsersState = {
    list: [
        {
            id: 1,
            name: 'Иван Иванов',
            email: 'ivan@example.com'
        },
        {
            id: 2,
            name: 'Мария Петрова',
            email: 'maria@example.com'
        },
        {
            id: 3,
            name: 'Алексей Сидоров',
            email: 'alexey@example.com',
        },
        {
            id: 4,
            name: 'Екатерина Смирнова',
            email: 'ekaterina@example.com'
        },
    ],
};


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUserName: (
            state,
            action: PayloadAction<{ id: number; name: string }>
        ) => {
            const user = state.list.find(u => u.id === action.payload.id);
            if (user) {
                user.name = action.payload.name;
            }
        },
    },
});

export const { updateUserName } = usersSlice.actions;

export const selectAllUsers = (state: RootState) => state.users.list;

export const selectUserById = (state: RootState, userId: number) =>
    state.users.list.find(user => user.id === userId);

export default usersSlice.reducer;