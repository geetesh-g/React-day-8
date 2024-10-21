import "../App.css";

function CardItem({ ...prod }) {
	const { title, image, price } = prod;
	return (
		<div className="cardItem">
			<figure>
				<img className="image" src={prod.image} alt={`${title}'s image`} />
				<figcaption className="title">{prod.title}</figcaption>
				<figcaption className="price">Price : {prod.price}$</figcaption>
			</figure>
		</div>
	);
}

export default CardItem;
