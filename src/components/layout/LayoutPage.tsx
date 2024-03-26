import scss from './LayoutPage.module.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from '@/src/components/pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import Izbran from './izbran/Izbran';
import Basket from '../pages/basketSections/Basket';

const LayoutPage = () => {
	return (
		<>
			<div className={scss.layout}>
				<Header />
				<hr />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/registration" element={<RegistrationPage />} />
						<Route path="/product/:productId" element={<ProductPage />} />
						<Route path="/izbran" element={<Izbran />} />
						<Route path="/basket" element={<Basket />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};
export default LayoutPage;
