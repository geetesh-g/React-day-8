import "../App.css";

function Pagination({ total }) {
	console.log(total);
	return (
		<div className="paginate">
			<button>&lt; Prev</button>
			<button>1</button>
			<button>Next &gt;</button>
		</div>
	);
}

export default Pagination;
