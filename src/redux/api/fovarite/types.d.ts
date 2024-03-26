/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

namespace Products {
	type GetFavoriteRequest = void;
	type GetFavoriteResponse = {
		product: any;
		_id: number;
		productName: string;
		photoUrl: string;
		price: number;
		quantity: string;
	}[];

	type PostFavoriteResponse = {
		_id: string;
		productName: string;
		price: number;
		quantity: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: string;
	}[];
	type PostFavoriteRequest = string
}
