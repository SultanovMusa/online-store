import { useForm, SubmitHandler } from 'react-hook-form';
import { useLoginMutation } from '@/src/redux/api/auth';
import { useNavigate } from 'react-router-dom';
import scss from './Login.module.scss';

interface IFormInput {
	email: string;
	password: string;
}

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormInput>();
	const navigate = useNavigate();
	const [loginMutation] = useLoginMutation();

	const loginPost: SubmitHandler<IFormInput> = async (data) => {
		try {
			const response = await loginMutation({
				email: data.email,
				password: data.password
			});
			if ('data' in response && response.data.token) {
				localStorage.setItem('auth_token', response.data.token);
				navigate('/');
			} else {
				console.error('Login failed:', response);
			}
		} catch (error) {
			console.error('Login error:', error);
		}
	};

	return (
		<section className={scss.Login}>
			<div className="container">
				<div className={scss.content}>
					<form onSubmit={handleSubmit(loginPost)}>
						<div className={scss.form}>
							<h2>Login</h2>
							<label htmlFor="email">Email:</label>
							<input
								type="text"
								placeholder="email                                                                      🥷"
								{...register('email', {
									required: true,
									pattern: /^\S+@\S+$/i
								})}
							/>
							<p>{errors.email && 'Please enter a valid email address'}</p>
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								placeholder="password                                                                🔐"
								{...register('password', { required: true, minLength: 6 })}
							/>
							<p>
								{errors.password &&
									'Password must be at least 6 characters long'}
							</p>
							<button type="submit">Sign In</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
