import "../App.css";

function Headers() {
	return (
		<div className="headers">
			<div>
				<span className="search-icon material-symbols-outlined">menu</span>
				<span className="search-icon material-symbols-outlined">home</span>
			</div>
			<div>
				<div className="searchbox">
					<span className="search-icon material-symbols-outlined">search</span>
					<input className="search-input" type="search" placeholder="Search" />
				</div>
			</div>
		</div>
	);
}
export default Headers;
