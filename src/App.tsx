import { useState } from "react";
import "./App.scss";

// transition & animation
// className och useState (animation + keyframes)
// bara CSS? hover, active

// style={ } inline styling i React

// useEffect

function App() {
	const [chosen, setChosen] = useState(false);
	const [stateWidth, setWidth] = useState(100);

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
			<hr />
			<input
				type="number"
				name="width"
				id="width"
				value={stateWidth}
				onChange={(e) => {
					setWidth(Number(e.target.value));
				}}
			/>
			<div className="width" style={{ width: stateWidth }}>
				demo
			</div>
		</>
	);
}

export default App;
