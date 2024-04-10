import { useState } from "react";
import "./App.css";

// transition & animation
// className och useState (animation + keyframes)
// bara CSS? hover, active

// style={ } inline styling i React
// useEffect

function App() {
	const [chosen, setChosen] = useState(false);
	return (
		<>
			<h1>moving-stuff</h1>
			<div className="test">Test</div>
			<div
				className={`new`}
				onClick={() => {
					setChosen(!chosen);
				}}
			>
				New div
			</div>
			<div className={`new ${chosen && "newColor"}`}>Gorilla</div>
		</>
	);
}

export default App;
