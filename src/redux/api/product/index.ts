import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			PRODUCT.GetProductsResponse,
			PRODUCT.GetProductsRequest
		>({
			query: () => ({
				url: '/products',
				method: 'GET'
			}),
			providesTags: ['products']
		}),

		getProduct: build.query<
			PRODUCT.GetProductResponse,
			PRODUCT.GetProductRequest
		>({
			query: (_id) => ({
				url: `/products/${_id}`,
				method: 'GET'
			}),
			providesTags: ['products']
		}),

		postProduct: build.mutation<
			PRODUCT.PostProductResponse,
			PRODUCT.PostProductRequest
		>({
			query: (newData) => ({
				url: '/products',
				method: 'POST',
				body: newData
			}),
			invalidatesTags: ['products']
		}),

		editProduct: build.mutation<
			PRODUCT.EditProductResponse,
			PRODUCT.EditProductRequest
		>({
			query: ({ _id, updateData }) => (
				console.log({ _id, updateData }),
				{
					url: `/products/${_id}`,
					method: 'PUT',
					body: updateData
				}
			),
			invalidatesTags: ['products']
		}),

		deleteProduct: build.mutation<
			PRODUCT.DeleteProductResponse,
			PRODUCT.DeleteProductRequest
		>({
			query: (_id) => ({
				url: `/products/${_id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['products']
		}),

		putProduct: build.mutation<
			PRODUCT.PutProductResponse,
			PRODUCT.PutProductRequest
		>({
			query: ({productName, price, quantity, photoUrl, _id}) => (
				// console.log({ _id, newObj }),
				{
					url: `/products/${_id}`,
					method: 'PUT',
					body: {productName, price, quantity, photoUrl}
				}),
				invalidatesTags: ['products']
		})
	})
});
export const {
	useGetProductsQuery,
	useGetProductQuery,
	usePostProductMutation,
	useEditProductMutation,
	useDeleteProductMutation,
	usePutProductMutation
} = api;
