/* eslint-disable */
namespace AUTH {
	type PostLoginRequest = {
		email: string;
		password: string;
	};
	type PostLoginResponse = {
		token: string;
		authority: boolean;
	};

	type PostRegistrationRequest = {
		email: string;
		password: string;
		userName: string;
	};
	type PostRegistrationResponse = {
		email: string;
		password: string;
		userName: string;
		_id: string;
		__v: number;
	};
}
