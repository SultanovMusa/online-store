import { useGetProducBasketQuery } from '@/src/redux/api/basket';
import scss from './Baseket.module.scss';
import { useEditProductMutation } from '@/src/redux/api/product';
import { MdExposurePlus1 } from 'react-icons/md';
import { TbExposureMinus1 } from 'react-icons/tb';

type EditProductRequest = {
	_id: string;
	updateData: {
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
	};
};

const Basket = () => {
	const { data: products = [], isLoading } = useGetProducBasketQuery();
	const [editProductMutation] = useEditProductMutation();

	const handleQuantityChange = async (
		data: EditProductRequest,
		quantityDelta: number
	) => {
		const updatedQuantity = +data.updateData.quantity + quantityDelta;
		const updateData = {
			productName: data.updateData.productName,
			price: data.updateData.price,
			quantity: '' + updatedQuantity,
			photoUrl: data.updateData.photoUrl
		};
		console.log(quantityDelta);

		await editProductMutation({ _id: data._id, updateData });
	};

	return (
		<div className={scss.Basket}>
			<div className="container">
				<div>
					{isLoading ? (
						<h1>Loading..</h1>
					) : (
						<div className={scss.products}>
							<h2 className={scss.text}>Корзина</h2>
							{products.map(
								(item) =>
									item.product !== null && (
										<div className={scss.card} key={item._id}>
											<div>
												<img
													src={item.product.photoUrl}
													alt={item.product.productName}
												/>
											</div>
											<div>
												<h2>Названия: {item.product.productName}</h2>
												<p>Количество: {item.product.quantity}</p>
											</div>
											<div>
												<p>Цена: {item.product.price}</p>
											</div>
											<button
												onClick={() => {
													handleQuantityChange(
														{
															_id: item.product._id,
															updateData: { ...item.product }
														},
														1
													);
												}}
											>
												<MdExposurePlus1 />
											</button>

											<button
												onClick={() => {
													handleQuantityChange(
														{
															_id: item.product._id,
															updateData: { ...item.product }
														},
														-1
													);
												}}
											>
												<TbExposureMinus1 />
											</button>
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

export default Basket;
