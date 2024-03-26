import { useParams } from 'react-router-dom';
import scss from './Product.module.scss';
import { useGetProductQuery } from '@/src/redux/api/product';

const Product = () => {
	const { productId } = useParams();

	const { data } = useGetProductQuery(productId!);

	return (
		<section className={scss.Product}>
			<div className="container">
				<div className={scss.content}>
					<h1>Product</h1>
					<h1>{data?.productName}</h1>
					<img
						style={{
							width: '700px'
						}}
						src={data?.photoUrl}
						alt={data?.productName}
					/>
					<p>{data?.quantity}</p>
					<p>{data?.price}</p>
				</div>
			</div>
		</section>
	);
};

export default Product;
