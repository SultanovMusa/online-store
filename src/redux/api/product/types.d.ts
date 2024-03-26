/* eslint-disable @typescript-eslint/no-unused-vars */

namespace PRODUCT {
	type GetProductsResponse = {
		[x: string]: PostProductsRequest;
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type GetProductsRequest = void;

	type GetProductResponse = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type GetProductRequest = string;

	type PostProductResponse = {
		productName: string;
		quantity: string;
		price: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		_id: string;
		__v: number;
	}[];
	type PostProductRequest = {
		newData: {
			productName: string;
			quantity: number;
			price: number;
			photoUrl: string;
		};
	};

	type EditProductResponse = {
		_id: string;
		productName: string;
		quantity: string;
		price: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: number;
	};
	type EditProductRequest = {
		_id: string;
		updateData: {
			productName: string;
			price: string;
			quantity: string;
			photoUrl: string;
		};
	};

	type DeleteProductResponse = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type DeleteProductRequest = string;

	type PutProductResponse = {
		productName: string;
		quantity: string;
		price: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		_id: string;
		__v: number;
	}[];
	type PutProductRequest = {
		_id: string;
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
	};
}
