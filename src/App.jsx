import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Headers from "./components/Headers";

function App() {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(!show);
	};
	return (
		<div>
			{show && (
				<div className="App">
					<Headers />
					<Display />
				</div>
			)}
			<button className="toggleBtn" onClick={handleClick}>
				{show ? "Hide Products" : "Show Products"}
			</button>
		</div>
	);
}

export default App;
