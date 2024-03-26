import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
			query: (checkUser) => ({
				url: '/login',
				method: 'POST',
				body: checkUser
			}),
			invalidatesTags: ['auth']
		}),

		registration: build.mutation<
			AUTH.PostRegistrationResponse,
			AUTH.PostRegistrationRequest
		>({
			query: (newUser) => ({
				url: '/users',
				method: 'POST',
				body: newUser
			}),
			invalidatesTags: ['auth']
		})
	})
});

export const { useLoginMutation, useRegistrationMutation } = api;
