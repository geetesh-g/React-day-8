import { useEffect, useState } from "react";
import "../App.css";
import CardItem from "./CardItem";
import Pagination from "./Pagination";

function Display() {
	/* 
  Working :-  all the action that we have to perform on this component are
  1. Fetch Product Data & display it to DOM 
  2. Create also pagination for the given product data

  Steps :- 
    1. fetch the product data
    2. send the product data to cardItem component 
    3. show the products data on mount the Component
    4. for pagination send the total count to pagination component 
  */

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [product, setProducts] = useState([]);

	useEffect(() => {
		getData();

		const cleanup = () => {
			setError(false);
			setLoading(false);
			setProducts([]);
		};
		return cleanup;
    
	}, []);

	let Total;
	const getData = async () => {
		setLoading(true);
		try {
			const res = await fetch(`https://fakestoreapi.com/products`);
			if (res.ok) {
				Total = res.headers.get("X-Total-Count");
				const data = await res.json();
				setProducts(data);
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			setError(true);
		}
		console.log(Total);
	};

	return (
		<div className="display">
			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>Something Went wrong</h1>
			) : (
				<div>
					<div className="prodList">
						{product.map((prod) => {
							return <CardItem key={prod.id} {...prod} />;
						})}
					</div>
					<div>
						<Pagination count={Total} />
					</div>{" "}
				</div>
			)}
		</div>
	);
}

export default Display;
