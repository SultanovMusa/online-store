import scss from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { FaHeartbeat } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { BiSolidHomeHeart } from 'react-icons/bi';

const Header = () => {
	const navigate = useNavigate();

	const logout = async () => {
		localStorage.removeItem('auth_token');
		navigate('/login');
	};

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1>Sultanov 👑</h1>
						</div>

						<div className={scss.auth_buttons}>
							{localStorage.getItem('auth_token') ? (
								<div className={scss.incon}>
									<button onClick={logout}>
										<ImExit className={scss.i} />
									</button>
									<button onClick={()=> navigate('/')}>
										<BiSolidHomeHeart className={scss.i}/>
									</button>
									<button onClick={() => navigate('/izbran')}>
										<FaHeartbeat className={scss.i} />
									</button>
									<button onClick={() => navigate('/basket')}>
										<RiShoppingBasketLine className={scss.i} />
									</button>
								</div>
							) : (
								<>
									<button onClick={() => navigate('/login')}>Login</button>
									<button onClick={() => navigate('/registration')}>
										Registration
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
