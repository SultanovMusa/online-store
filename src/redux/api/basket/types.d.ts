/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Basket {
	type GetBasketResponse = {
		_id: string;
		product: {
			_id: string;
			productName: string;
			quantity: string;
			price: string;
			photoUrl: string;
			isFavorite: boolean;
			isInBasket: boolean;
		};
		__v: number;
	}[];
	type GetBasketRequest = void;

	type PostBasketResponse = {
		message: string;
		isInBasket: boolean;
	};
	type PostBasketRequest = void;

}
