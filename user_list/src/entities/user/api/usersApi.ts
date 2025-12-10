import { baseApi } from '@/shared/api';
import type { User, CreateUserDto, UpdateUserDto } from '../model/types';

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),

    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Users', id }],
    }),

    createUser: builder.mutation<User, CreateUserDto>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_newUser, { dispatch, queryFulfilled }) {
        try {
          const { data: createdUser } = await queryFulfilled;

          dispatch(
            usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
              draft.unshift(createdUser);
            })
          );
        } catch {}
      },
    }),

  

    updateUser: builder.mutation<User, UpdateUserDto>({
      query: ({ id, ...body }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body,
      }),

      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
            const user = draft.find((u) => u.id === id);
            if (user) {
              Object.assign(user, patch);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    

    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
            const index = draft.findIndex((u) => u.id === id);
            if (index !== -1) {
              draft.splice(index, 1);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
