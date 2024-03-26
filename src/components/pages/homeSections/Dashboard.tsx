/* eslint-disable */
// @ts-nocheck
import { useState } from 'react';
import scss from './Dashboard.module.scss';
import {
	useDeleteProductMutation,
	useGetProductsQuery,
	usePostProductMutation,
	usePutProductMutation
} from '@/src/redux/api/product';
import { Link } from 'react-router-dom';
import Modal from '../../UI/modalka/Modal';
import { usePostProducFavoriteMutation } from '@/src/redux/api/fovarite/fovarite';
import { usePostProducBasketMutation } from '@/src/redux/api/basket';
import { HiArchiveBoxXMark } from 'react-icons/hi2';
import { FiHeart } from 'react-icons/fi';
import { FcPaid } from 'react-icons/fc';
import { FcEditImage } from 'react-icons/fc';
import { FcDoNotInsert } from 'react-icons/fc';

import { FcDownload } from 'react-icons/fc';

const Dashboard = () => {
	const [productName, setProductName] = useState<string>('');
	const [quantity, setQuantity] = useState<number | null>(null);
	const [price, setPrice] = useState<number | null>(null);
	const [photoUrl, setPhotoUrl] = useState<string>('');

	// !Edit

	const [productName1, setProductName1] = useState<string>('');
	const [quantity1, setQuantity1] = useState<number | null>(null);
	const [price1, setPrice1] = useState<number | null>(null);
	const [photoUrl1, setPhotoUrl1] = useState<string>('');
	const [isEdit, setIsEdit] = useState<boolean>(false);

	//////////////////////////////////////////////////////////////////////////!
	const [postProducFavorite] = usePostProducFavoriteMutation();
	const [postProducBaskte] = usePostProducBasketMutation();
	const { data, isLoading } = useGetProductsQuery();
	const [postProductMutation] = usePostProductMutation();
	const [deleteProductMutation] = useDeleteProductMutation();
	const [putProductMutation] = usePutProductMutation();

	const productPost = async () => {
		const newData = {
			productName,
			quantity,
			price,
			photoUrl
		};
		await postProductMutation(newData);
		setProductName(''),
			setQuantity(null),
			setPrice(null),
			setPhotoUrl(''),
			setIsOpen(null);
	};

	function editResult(id: string) {
		setIsEdit(id);
	}

	const editProduct = async (_id: string) => {
		await putProductMutation({
			_id,
			productName: productName1,
			price: price1,
			quantity: quantity1,
			photoUrl: photoUrl1
		});

		setProductName1(''),
			setQuantity1(null),
			setPrice1(null),
			setPhotoUrl1(''),
			setIsEdit(null);
	};
	const handleChangeFavorite = async (id: string) => {
		await postProducFavorite(id);
	};

	const productDelete = async (_id: string) => {
		await deleteProductMutation(_id);
	};

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div className={scss.Dashboard}>
				<div className="container">
					<div className={scss.content}>
						<button className={scss.btn1} onClick={openModal}>
							Открыть модалько ✅
						</button>
						<Modal isOpen={isOpen} onClose={closeModal}>
							<p>Дабавить новую пазицию </p>
							<input
								className={scss.input}
								type="text"
								placeholder="productName"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
							/>
							<input
								className={scss.input}
								type="number"
								placeholder="quantity"
								value={'' + quantity}
								onChange={(e) => setQuantity(+e.target.value)}
							/>
							<input
								className={scss.input}
								type="number"
								placeholder="price"
								value={'' + price}
								onChange={(e) => setPrice(+e.target.value)}
							/>
							<input
								className={scss.input}
								type="text"
								placeholder="photoUrl"
								value={photoUrl}
								onChange={(e) => setPhotoUrl(e.target.value)}
							/>
							<button className={scss.btn} onClick={productPost}>
								Add
							</button>
						</Modal>

						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							<>
								<div className={scss.products}>
									{data?.map((item) => (
										<div key={item._id}>
											{isEdit === item._id ? (
												<div className={scss.car}>
													<p>Дабавить новую пазицию </p>
													<input
														className={scss.input}
														type="text"
														placeholder="productName"
														value={productName1}
														onChange={(e) => setProductName1(e.target.value)}
													/>
													<input
														className={scss.input}
														type="number"
														placeholder="quantity"
														value={quantity1 || ''}
														onChange={(e) => setQuantity1(+e.target.value)}
													/>
													<input
														className={scss.input}
														type="number"
														placeholder="price"
														value={price1 || ''}
														onChange={(e) => setPrice1(+e.target.value)}
													/>
													<input
														className={scss.input}
														type="text"
														placeholder="photoUrl"
														value={photoUrl1}
														onChange={(e) => setPhotoUrl1(e.target.value)}
													/>
													<div className={scss.btn}>
														<button onClick={() => editProduct(item._id)}>
															<FcDownload />
														</button>
														<button
															onClick={() => {
																setProductName1(''),
																	setQuantity1(null),
																	setPrice1(null),
																	setPhotoUrl1(''),
																	setIsEdit(false);
															}}
														>
															<FcDoNotInsert />
														</button>
													</div>
												</div>
											) : (
												<div className={scss.product}>
													<Link to={`/product/${item._id}`}>
														<img src={item.photoUrl} alt={item.productName} />
													</Link>
													<div className={scss.text}>
														<p>Названия: {item.productName}</p>
														<p>Каличиства: {item.quantity}</p>
														<p>Цена: {item.price}</p>
													</div>
													<div className={scss.butn}>
														<button
															onClick={(e) => {
																e.preventDefault();
																productDelete(item._id);
															}}
														>
															<HiArchiveBoxXMark />
														</button>
														<button
															onClick={() => handleChangeFavorite(item._id)}
														>
															<FiHeart />
														</button>
														<button onClick={() => postProducBaskte(item._id)}>
															<FcPaid />
														</button>
														<button onClick={() => editResult(item._id)}>
															<FcEditImage />
														</button>
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
