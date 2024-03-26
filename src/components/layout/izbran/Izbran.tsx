/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useGetProducFavoriteQuery } from '@/src/redux/api/fovarite/fovarite';
import scss from './Izbran.module.scss';
import { FcLike } from 'react-icons/fc';
import { usePostProducBasketMutation } from '@/src/redux/api/basket';

const Izbran = () => {
	const { data, isLoading } = useGetProducFavoriteQuery();
	const [postProducBasket] = usePostProducBasketMutation();

	console.log(data);

	return (
		<div className={scss.izbran}>
			<div className="container">
				<div className={scss.content}>
					<h2>Избранные</h2>
					<h4>Здесь собраны понравившиеся Вам модели.</h4>
					{isLoading ? (
						<h1>Loading..</h1>
					) : (
						<div className={scss.products}>
							{data?.map(
								(item) =>
									item.product !== null && (
										<div key={item._id}>
											<div className={scss.product}>
												<img
													src={item.product.photoUrl}
													alt={item.product.productName}
												/>
												<div className={scss.texts}>
													<div className={scss.text}>
														<p>Названия: {item.product.productName}</p>
														<p>Каличиства: {item.product.quantity}</p>
														<p> Цена: {item.product.price}</p>
													</div>
													<span>
														<FcLike />
													</span>
												</div>
												<button
													onClick={() => postProducBasket(item.product._id)}
												>
													Добавить в корзину
												</button>
											</div>
										</div>
									)
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Izbran;
