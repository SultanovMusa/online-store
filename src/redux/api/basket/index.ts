import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducBasket: build.query<
			Basket.GetBasketResponse,
			Basket.GetBasketRequest
		>({
			query: () => ({
				url: '/basket',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('tokenBasket')}`
				}
			}),
			providesTags: ['products']
		}),

		postProducBasket: build.mutation<
			Basket.PostBasketResponse,
			Basket.PostBasketRequest
		>({
			query: (_id) => ({
				url: `/basket/${_id}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('tokenBasket')}`
				}
			}),
			invalidatesTags: ['products']
		}),
	})
});
export const {
	useGetProducBasketQuery,
	usePostProducBasketMutation,
} = api;
