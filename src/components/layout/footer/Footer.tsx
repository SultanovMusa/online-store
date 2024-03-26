import { FC } from 'react';
import scss from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
	return (
		<>
			<footer className={scss.Footer}>
				<hr />
				<div className="container">
					<div className={scss.content}>
						<div className={scss.cardText}>
							<div>
								<p>Copyright © 2024. All rights are reserved</p>
							</div>
							<div>
								<p>Built with ❤️ by Mustafa.05</p>
							</div>

							<div className={scss.card}>
								<Link to={'https://github.com/SultanovMusa'}>
									<FaSquareGithub className={scss.icon} />
								</Link>
								<Link to={'https://www.instagram.com/sultanov_11_/'}>
									<FaInstagram className={scss.icon} />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<hr />
			</footer>
		</>
	);
};

export default Footer;
